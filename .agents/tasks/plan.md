# Implementation Plan — Proof2Work Backend (South African Youth Work-Readiness API)

Backend-only REST API. All new code lives in `c:\Users\ngubs\Proof2Work\server\`. The existing frontend files at the workspace root (`index.html`, `style.css`, `README.md`) are owned by someone else — **do not modify, delete, or read-edit them**. Do not add any frontend UI. Target OS: Windows + PowerShell. Node v24.19.0 / npm 11.17.0 are installed.

---

## Key decisions & rationale (no design doc was provided; these are grounded in the spec + the installed environment)

1. **Exact pinned dependency versions (no carets), all confirmed against the npm registry for this Node 24 environment:**
   - `express` 5.2.1, `better-sqlite3` 13.0.3 (engines `node >=22` — satisfied), `jsonwebtoken` 9.0.3, `bcrypt` 6.0.0 (engines `>=18`), `cors` 2.8.6, `dotenv` 18.0.9; devDependency `nodemon` 3.1.14.
   - bcrypt 6 and better-sqlite3 13 are N-API native modules that ship **prebuilt win32-x64 binaries**, so `npm install` should not require Visual Studio build tools. If a prebuild is somehow missing, install VS Build Tools — but prebuilds should cover Node 24 x64.
2. **Add `src/config.js` (a refinement of the suggested layout).** Centralizes env loading via `require('dotenv').config()` plus `JWT_SECRET`/`PORT`/`DB_PATH` defaults and the loud dev-secret warning. Every other module requires `config` instead of reading `process.env` directly, so dotenv loads exactly once and the secret warning fires from one place.
3. **Express 5 notes baked into the plan:** rejected promises from async handlers are auto-forwarded to the error handler, but all route bodies use better-sqlite3 (sync) + bcrypt sync APIs, so wrap each handler in `try/catch` and call `next(err)`; a final `(err, req, res, next)` handler returns JSON `{ error }` and turns body-parse errors into 400 JSON. The 404 catch-all is a plain `app.use((req,res)=>...)` (no wildcard — Express 5 dropped bare `*`). Route params `:id` work unchanged.
4. **Localization = 11 written languages translated best-effort + SASL English fallback.** SASL cannot be rendered as text, so data files hold the 11 written codes (`af,en,nr,xh,zu,nso,st,tn,ss,ve,ts`); the `lang` helper maps `sas` → `en` content and attaches the top-level `langNote`. This avoids duplicating English under a `sas` key and matches the spec's SASL handling rule.
5. **Language resolution precedence:** `?lang=` query → `Accept-Language` header (best q-value matching a known code, prefix-matching tags like `en-US`→`en`) → for protected routes the user's `preferred_language` → `en`. Unknown/missing codes fall back to `en`.
6. **Readiness scoring (rule-based, no LLM):** score per item 0/1/2; `percent = total / (2 × itemsAnswered) × 100`; level `<40` beginner, `40–69` developing, `≥70` ready; weak categories = category percent `< 50`; localized advice emitted per weak category. Assessed `category_scores` stored as JSON text so the `progress` endpoint can recompute weak categories and re-localize advice at read time.
7. **Status code policy:** 200 success (201 for register); 400 invalid input; 401 unauthenticated/wrong credentials; 404 unknown `:id` or unknown route or no saved assessment; 409 duplicate email. 403 is reserved (all protected routes are owner-scoped to `req.user.id`, so no authorization distinction exists today). Password hashes are never included in any response.
8. **DB file location:** `server/server.db` (resolved via `path.join(__dirname,'..','server.db')` since `db.js` lives in `src/`). Default rollback journal so `server.db-journal` is the transient file; `.gitignore` also covers `-wal`/`-shm` in case WAL is ever enabled.

---

## Implementation items (ordered by dependency; each leaves the codebase runnable)

- [ ] 1. Scaffold the `server/` project: pinned `package.json`, `.gitignore`, `.env.example`.
      Create `server/package.json` with `name` "proof2work-server", `private:true`, `main` "src/index.js", `engines.node` ">=22", scripts `start` ("node src/index.js") and `dev` ("nodemon src/index.js"), and the exact-pinned dependencies/devDependencies from decision 1. Create `server/.gitignore` ignoring `node_modules/`, `server.db`, `server.db-journal`, `server.db-wal`, `server.db-shm`, `.env`. Create `server/.env.example` with a one-line comment plus `JWT_SECRET=change-me` and `PORT=4000`.
      Files: `server/package.json`, `server/.gitignore`, `server/.env.example`
      Verify: from `server/`, run `npm install` (completes, pulls prebuilt bcrypt + better-sqlite3) then `node -e "require('express');require('better-sqlite3');require('jsonwebtoken');require('bcrypt');require('cors');require('dotenv');console.log('ok')"` prints `ok`.

- [ ] 2. Create `src/config.js` — single source of env config.
      Calls `require('dotenv').config()` first (fallback `require('dotenv/config')` if the `config()` form ever fails). Exports `{ JWT_SECRET, PORT, DB_PATH, IS_DEV_SECRET }`. `JWT_SECRET = process.env.JWT_SECRET || 'change-me'`; if `IS_DEV_SECRET` (i.e. using default), `console.warn` a loud one-line warning that the default secret is insecure. `PORT = Number(process.env.PORT) || 4000`. `DB_PATH = process.env.DB_PATH || path.join(__dirname, '..', 'server.db')` (resolves to `server/server.db`).
      Files: `server/src/config.js`
      Verify: from `server/`, `node -e "const c=require('./src/config');console.log(c.PORT,c.IS_DEV_SECRET)"` prints `4000 true` (and the warning), and `JWT_SECRET` equals `change-me`.

- [ ] 3. Create `src/data/languages.js` — the 12 official SA languages metadata.
      Export `LANGUAGES`: an array of 12 objects `{ code, englishName, nativeName }` in this order with these codes: `af` Afrikaans/Afrikaans, `en` English/English, `nr` isiNdebele/isiNdebele, `xh` isiXhosa/isiXhosa, `zu` isiZulu/isiZulu, `nso` Sepedi/Sepedi, `st` Sesotho/Sesotho, `tn` Setswana/Setswana, `ss` siSwati/siSwati, `ve` Tshivenda/Tshivenda, `ts` Xitsonga/Xitsonga, `sas` South African Sign Language/South African Sign Language. Export `VALID_LANG_CODES` (the 12 codes), `SASL_CODE = 'sas'`, and `SASL_NOTE = "South African Sign Language is a visual language; content is provided in written English fallback. Provide signed interpretation where available."`.
      Files: `server/src/data/languages.js`
      Verify: from `server/`, `node -e "const L=require('./src/data/languages');console.log(L.LANGUAGES.length,L.VALID_LANG_CODES.includes('sas'),L.VALID_LANG_CODES.includes('zu'))"` prints `12 true true`.

- [ ] 4. Create `src/utils/lang.js` — language resolution + SASL fallback helpers.
      Depends on item 3. Export three functions: `resolveLanguage(req, user)` → returns a code, applying precedence from decision 5 (parse `Accept-Language` by q-value, prefix-match `en-US`→`en`, unknown→`en`; if `user` supplied and no query/header, use `user.preferred_language`); `getContent(dataByLang, lang)` → returns `dataByLang[(lang==='sas'?'en':lang)] || dataByLang.en` (sas maps to en; any missing key falls back to en); `withSaslNote(lang, payload)` → returns `{...payload, langNote: SASL_NOTE}` when `lang==='sas'`, else `payload` unchanged.
      Files: `server/src/utils/lang.js`
      Verify: from `server/`, run a small `node -e` harness: `resolveLanguage({query:{lang:'zu'},headers:{}})` → `'zu'`; `resolveLanguage({query:{},headers:{'accept-language':'fr-FR, en;q=0.9'}}, null)` → `'en'`; `getContent({en:{x:1},zu:{x:2}},'sas')` → `{x:1}`; `withSaslNote('sas',{a:1})` has `langNote` while `withSaslNote('en',{a:1})` does not.

- [ ] 5. Create `src/db.js` — open SQLite and run idempotent schema migrations.
      Depends on item 2 (for `config.DB_PATH`). `const Database = require('better-sqlite3'); const db = new Database(config.DB_PATH)`; `db.pragma('foreign_keys = ON')`. Run `db.exec` with `CREATE TABLE IF NOT EXISTS` for both tables and the index (so it is safe on every start):
      ```sql
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        preferred_language TEXT NOT NULL DEFAULT 'en',
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      );
      CREATE TABLE IF NOT EXISTS assessments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        total_score INTEGER NOT NULL,
        level TEXT NOT NULL,
        category_scores TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now')),
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
      CREATE INDEX IF NOT EXISTS idx_assessments_user_created ON assessments(user_id, created_at);
      ```
      Export `db`. Do NOT seed any users or plaintext passwords. Export helper `getUserById`, `getUserByEmail` prepared statements if convenient (optional).
      Files: `server/src/db.js`
      Verify: from `server/`, `node -e "const db=require('./src/db');console.log(db.prepare(\"SELECT name FROM sqlite_master WHERE type='table'\").all().map(r=>r.name).sort())"` prints `[ 'assessments', 'sqlite_sequence', 'users' ]` and `server/server.db` exists afterward. Delete `server/server.db` after to keep a clean slate.

- [ ] 6. Create `src/middleware/auth.js` — JWT verify middleware.
      Depends on items 2 and 5. Export `authenticate(req, res, next)`: read `Authorization: Bearer <token>`; if missing/malformed → `res.status(401).json({ error:'Missing or invalid authorization header' })`; `jwt.verify(token, config.JWT_SECRET)` in try/catch — on throw → 401 `{ error:'Invalid or expired token' }`; on success set `req.user = { id: decoded.id }` and `next()`.
      Files: `server/src/middleware/auth.js`
      Verify: from `server/`, `node -e "require('./src/middleware/auth');console.log('ok')"` loads; behavioral verification is covered by item 8.
      Depends on: 2, 5.

- [ ] 7. Create `src/index.js` bootstrap + `src/routes/languages.js` — get the server running.
      `src/routes/languages.js`: `GET /` → `res.json(withSaslNote(lang, { languages: LANGUAGES }))` where `lang = resolveLanguage(req, req.user || null)`. (The list is language-agnostic metadata, but still attach `langNote` when `lang=sas` for consistency.) `src/index.js`: `require('./src/config')` first (loads env); create `express()` app; `app.use(cors())`; `app.use(express.json())`; mount `app.use('/api/languages', require('./routes/languages'))`; add `GET /api/health` → `{ status:'ok' }`; add 404 catch-all `app.use((req,res)=>res.status(404).json({error:'Not found'}))`; add error handler `(err,req,res,next)` → if it's a body-parse error (`err.type === 'entity.parse.failed'` or `err.status===400`) return `400 {error:'Invalid JSON body'}` else `console.error(err)` and `500 {error:'Internal server error'}`; `app.listen(config.PORT, ()=>console.log('Proof2Work API on port '+config.PORT))`.
      Files: `server/src/index.js`, `server/src/routes/languages.js`
      Verify: in a separate PowerShell window run `cd server; npm start`; then `Invoke-RestMethod http://localhost:4000/api/health` returns `status=ok`; `Invoke-RestMethod 'http://localhost:4000/api/languages' | ConvertTo-Json -Depth 3` shows 12 languages; `(Invoke-RestMethod 'http://localhost:4000/api/languages?lang=sas').langNote` is non-empty. Stop the server afterward.
      Depends on: 2, 3, 4.

- [ ] 8. Create `src/routes/auth.js` and mount it.
      Depends on 2,4,5,6. Implement four handlers, each wrapped in try/catch→`next(err)`:
      - `POST /register` (→201): validate body has non-empty `name`, valid `email` (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), `password` length ≥6, and `preferredLanguage` ∈ VALID_LANG_CODES; else 400 `{error, details}`. `bcrypt.hashSync(password, 10)`. Insert user; if insert throws a UNIQUE violation (check `err.code==='SQLITE_CONSTRAINT_UNIQUE'` or message includes `UNIQUE`) → 409 `{error:'Email already registered'}`. Sign `jwt.sign({id}, config.JWT_SECRET, {expiresIn:'7d'})`. Return `{ token, user: { id, name, email, preferredLanguage, createdAt } }` (no `password_hash`).
      - `POST /login` (→200): find user by email; if not found → 401 `{error:'Invalid email or password'}` (generic, no enumeration); `bcrypt.compareSync(password, row.password_hash)`; if false → same 401. Return same `{ token, user }` shape.
      - `GET /me` (protected →200): `authenticate`; look up user by `req.user.id`; return the profile object (no `password_hash`). If user missing →404.
      - `PATCH /me` (protected →200): `authenticate`; allow updating `name` and/or `preferredLanguage` (validate `preferredLanguage` ∈ codes if provided, non-empty `name`); ignore unknown fields; 400 on invalid. Update and return the new profile.
      Mount `app.use('/api/auth', require('./routes/auth'))` in `index.js`.
      Files: `server/src/routes/auth.js`; edit `server/src/index.js` (add mount)
      Verify: start server; register a user: `Invoke-RestMethod -Method Post -Uri http://localhost:4000/api/auth/register -ContentType application/json -Body '{"name":"Test","email":"t@e.com","password":"pass123","preferredLanguage":"zu"}'` → 201 with a `token` and a `user` object that has NO `password_hash`. Login with same creds → 200 + token. `GET /api/auth/me` with header `Authorization: Bearer <token>` → profile. Duplicate email → 409. Wrong password → 401. Missing fields → 400. Stop server.
      Depends on: 2,4,5,6,7.

- [ ] 9. Create `src/data/jobs.js` (10 sectors × 11 written languages) + `src/routes/jobs.js` and mount.
      `src/data/jobs.js` exports `JOBS` keyed by the 11 written language codes (`af,en,nr,xh,zu,nso,st,tn,ss,ve,ts`); each value is an array of 10 sector objects `{ id, name, shortDescription, categoryEmoji, detail: { description, keySkills[], salaryRange, howToGetStarted[], recommendedTraining[], tips[] } }`. Use the 10 sectors from the spec (Retail, Hospitality, IT & Helpdesk, Construction, Admin & Clerical, Call Centre, Security, Beauty & Haircare, Food Preparation, Logistics & Warehousing) with `id` 1–10. `salaryRange` is a clearly-labeled indicative ZAR string (e.g. "Indicative: R4,500–R7,500/month (varies by region/employer)"). `howToGetStarted` includes practical SA steps (free email, CV, Indeed/Careers24/government portals, walk-ins, learnerships, SETAs). `tips` includes grooming, punctuality, ID + matric certificate, police clearance where relevant (e.g. Security). Non-English texts are best-effort AI translations — keep meaning consistent across languages.
      `src/routes/jobs.js`: `GET /` → `res.json(withSaslNote(lang, { jobs: list.map(j=>({id,name,shortDescription,categoryEmoji})) }))` where list = `getContent(JOBS, lang)`; `GET /:id` → parse `Number(req.params.id)`; find in list or 404 `{error:'Job not found'}`; return `withSaslNote(lang, job)` (full object including `detail`). Mount `app.use('/api/jobs', require('./routes/jobs'))`.
      Files: `server/src/data/jobs.js`, `server/src/routes/jobs.js`; edit `server/src/index.js`
      Verify: start server; `Invoke-RestMethod 'http://localhost:4000/api/jobs?lang=zu'` returns 10 items with localized `name`/`shortDescription`; `(Invoke-RestMethod 'http://localhost:4000/api/jobs/1?lang=af').detail.keySkills` is a non-empty array; `Invoke-RestMethod 'http://localhost:4000/api/jobs/999'` → 404; `(Invoke-RestMethod 'http://localhost:4000/api/jobs?lang=sas').langNote` is non-empty and content is English. Stop server.
      Depends on: 4, 7.

- [ ] 10. Create `src/data/modules.js` (≥6 modules × 11 written languages) + `src/routes/modules.js` and mount.
      `src/data/modules.js` exports `MODULES` keyed by the 11 written codes; each is an array of ≥6 module objects `{ id, title, summary, estimatedMinutes, sections: [{ heading, body }], keyTakeaways: [] }`. Use the 6 modules from the spec (Writing a CV/Resume; Preparing for an interview; Soft skills for the workplace; Job search strategy in South Africa; Workplace etiquette & professionalism; Know your rights & key documents — ID, matric, UIF, employment contracts, minimum wage). `id` 1–6. Non-English = best-effort translations.
      `src/routes/modules.js`: `GET /` → `{ modules: list.map(m=>({id,title,summary,estimatedMinutes})) }` wrapped with SASL note; `GET /:id` → full object (with `sections` + `keyTakeaways`) or 404 `{error:'Module not found'}`. Mount `/api/modules`.
      Files: `server/src/data/modules.js`, `server/src/routes/modules.js`; edit `server/src/index.js`
      Verify: start server; `Invoke-RestMethod 'http://localhost:4000/api/modules?lang=xh'` returns ≥6 items; `(Invoke-RestMethod 'http://localhost:4000/api/modules/1?lang=tn').sections` is a non-empty array of `{heading,body}`; `GET /api/modules/999` → 404; `?lang=sas` adds `langNote` with English content. Stop server.
      Depends on: 4, 7.

- [ ] 11. Create `src/data/readiness.js` (checklist + advice × 11 written languages) + `src/routes/readiness.js` and mount.
      `src/data/readiness.js` exports: `CATEGORIES` (array of 6: Documents, Job Search, Skills, Interview Readiness, Workplace Soft Skills, Digital Readiness); `CHECKLIST` keyed by 11 written codes, each an array of 10 items `{ id, category, question }` (use the 10 items in decision 6's content list); `ADVICE` keyed by 11 written codes, each an object `{ [category]: adviceString }` (the per-category advice strings from decision 6). Non-English = best-effort translations.
      `src/routes/readiness.js`:
      - `GET /checklist` (public) → `{ items: list }` (each `{id,category,question}`) wrapped with SASL note, lang from `resolveLanguage(req)`.
      - `POST /assessment` (protected by `authenticate`): body `{ answers: [{ itemId, score }] }`; validate array non-empty; each `itemId` exists in checklist and `score` is integer 0–2, else 400 `{error, details}`. Compute: `total = Σ score`; `maxPossible = 2 × answers.length`; `percent = round(total/maxPossible*100)`; `level` = percent<40 'beginner', <70 'developing', else 'ready'. Build `categoryScores = { [cat]: { score, max, percent } }` grouping answers by their item's category. `weak = categories whose percent < 50`. `advice = weak.map(c => ({ category:c, advice: getContent(ADVICE,lang)[c] }))` where `lang = resolveLanguage(req, user)` and `user` is fetched from db by `req.user.id` (so `preferred_language` can default). Return `withSaslNote(lang, { total, maxPossible, percent, level, categoryScores, advice })`. Persist: `INSERT INTO assessments (user_id, total_score, level, category_scores, created_at) VALUES (?,?,?,?,datetime('now'))` with `category_scores = JSON.stringify(categoryScores)`.
      - `GET /progress` (protected): `SELECT * FROM assessments WHERE user_id=? ORDER BY created_at DESC, id DESC LIMIT 1`; if none → 404 `{error:'No assessment found yet'}`. Parse `category_scores`, recompute `maxPossible = Σ cat.max`, `percent`, `level`, `weak` (percent<50) and `advice` (localized by `resolveLanguage(req,user)`). Return the same shape as the assessment response, wrapped with SASL note.
      Mount `app.use('/api/readiness', require('./routes/readiness'))`.
      Files: `server/src/data/readiness.js`, `server/src/routes/readiness.js`; edit `server/src/index.js`
      Verify: start server; `Invoke-RestMethod 'http://localhost:4000/api/readiness/checklist?lang=st'` returns 10 items. With a valid Bearer token, `POST /api/readiness/assessment` body `{"answers":[{"itemId":1,"score":2},{"itemId":2,"score":1},{"itemId":3,"score":0},{"itemId":4,"score":2},{"itemId":5,"score":2},{"itemId":6,"score":2},{"itemId":7,"score":1},{"itemId":8,"score":0},{"itemId":9,"score":1},{"itemId":10,"score":2}]}` returns `{total, maxPossible:20, percent, level, categoryScores, advice[]}`. `GET /api/readiness/progress` (same token) returns the latest result. Invalid score (3) → 400. Unknown itemId → 400. No token on POST/GET → 401. `?lang=sas` on checklist adds `langNote` with English content. Stop server.
      Depends on: 2,4,5,6,7.

- [ ] 12. Write `server/README.md` — full documentation.
      Document: prerequisites (Node `>=22`), install (`cd server; npm install`), run (`npm start` / `npm run dev`), env vars (copy `.env.example` to `.env`, change `JWT_SECRET`). The FULL endpoint list (auth, languages, jobs, modules, readiness) each with an example request and example response JSON. The language code list (all 12 with English + native names). The AI-best-effort translation disclaimer: "All non-English translations are AI-generated best-effort and SHOULD BE REVIEWED BY NATIVE SPEAKERS before production use; they are not authoritative." The SASL handling note (visual language; English fallback + `langNote`; signed interpretation where available). Note that the DB file (`server.db`) is created automatically on first run.
      Files: `server/README.md`
      Verify: manual doc review — confirm every implemented endpoint from items 7–11 is documented with an example request/response, all 12 language codes are listed, and both the translation disclaimer and SASL note are present and match the spec wording. Cross-check that documented status codes (201/200/400/401/404/409) match the route implementations.
      Depends on: 7,8,9,10,11.

- [ ] 13. End-to-end regression on Windows PowerShell — verify the whole API behaves correctly.
      Start the server in its own window (`cd server; npm start`). Run this scripted check sequence and confirm each expected outcome:
      1. `GET /api/health` → `{status:'ok'}`.
      2. `GET /api/languages` → 12 entries; `?lang=sas` adds `langNote`.
      3. Register new user (201, response has `token` + `user`, NO `password_hash`). Register same email again (409). Register with missing `name` (400). Register with bad `preferredLanguage` (400).
      4. Login correct (200). Login wrong password (401). Login unknown email (401, same message).
      5. `GET /api/auth/me` with token (200, no `password_hash`); without token (401).
      6. `PATCH /api/auth/me` `{preferredLanguage:'xh'}` with token (200, reflects `xh`).
      7. `GET /api/jobs?lang=zu` (10 localized items). `GET /api/jobs/1?lang=af` (full detail). `GET /api/jobs/999` (404). `GET /api/jobs?lang=sas` (`langNote` present, English content).
      8. `GET /api/modules?lang=nr` (≥6 items). `GET /api/modules/2?lang=tn` (sections + keyTakeaways). `GET /api/modules/999` (404).
      9. `GET /api/readiness/checklist?lang=st` (10 items). `POST /api/readiness/assessment` without token (401). With token + valid answers (200, returns level + advice). With score 5 (400). With unknown itemId (400). `GET /api/readiness/progress` with token (200, returns latest). `GET /api/readiness/progress` for a fresh user with no assessments (404).
      10. Language precedence: a job request with no `?lang` but header `Accept-Language: zu` → isiZulu content; same request as an authenticated user whose `preferred_language` is `xh` and no header → isiXhosa content.
      11. Confirm no response anywhere includes `password_hash` (grep the captured JSONs).
      Files: none (verification only)
      Verify: all numbered checks pass. Stop the server. Delete `server/server.db` (and any `-journal`/`-wal`/`-shm`) afterward so the repo stays clean.
      Depends on: 7,8,9,10,11,12.

---

## Notes for the implementer

- **Express 5 + native modules on Node 24:** bcrypt 6 and better-sqlite3 13 use N-API prebuilds for win32-x64; `npm install` should just work. If a prebuild is missing and a compiler is required, install the VS Build Tools — but expect prebuilds to cover this.
- **Dotenv:** call it once in `src/config.js`; every other module reads from `config`, never `process.env` directly (keeps the dev-secret warning in one place).
- **Keep handlers synchronous:** better-sqlite3 and bcrypt sync APIs mean no async plumbing is needed; wrap each handler body in `try/catch` → `next(err)` and let the centralized error handler return JSON.
- **Never return `password_hash`.** Build a `toProfile(row)` helper that maps a user row to `{ id, name, email, preferredLanguage, createdAt }` and reuse it in register/login/me/patch.
- **Do not touch** `index.html`, `style.css`, or the root `README.md`. All work is inside `server/`.
