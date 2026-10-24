// Language resolution + SASL fallback helpers.
const { VALID_LANG_CODES, SASL_NOTE } = require('../data/languages');

// Pick the best matching known code from an Accept-Language header value.
// Supports q-values and prefix matching (e.g. "en-US" -> "en").
function matchAcceptLanguage(header) {
  const parts = header.split(',').map((p) => p.trim()).filter(Boolean);
  let best = null;
  let bestQ = -1;
  for (const part of parts) {
    let tag = part;
    let q = 1;
    const semi = part.indexOf(';');
    if (semi >= 0) {
      tag = part.slice(0, semi).trim();
      const qMatch = part.slice(semi).match(/q=([0-9.]+)/);
      if (qMatch) q = parseFloat(qMatch[1]);
    }
    if (q <= 0) continue;
    const lower = tag.toLowerCase();
    // Exact code match wins outright (preferred over a prefix of equal q).
    if (VALID_LANG_CODES.includes(lower)) {
      if (q > bestQ) {
        bestQ = q;
        best = lower;
      }
      continue;
    }
    const prefix = lower.split('-')[0];
    if (VALID_LANG_CODES.includes(prefix)) {
      if (q > bestQ) {
        bestQ = q;
        best = prefix;
      }
    }
  }
  return best;
}

// Resolve the effective language for a request.
// Precedence: ?lang= query -> Accept-Language header -> user.preferred_language -> 'en'.
function resolveLanguage(req, user) {
  if (req.query && req.query.lang) {
    const code = String(req.query.lang).toLowerCase();
    if (VALID_LANG_CODES.includes(code)) return code;
  }
  const header = req.headers && req.headers['accept-language'];
  if (header) {
    const code = matchAcceptLanguage(header);
    if (code) return code;
  }
  if (user && user.preferred_language && VALID_LANG_CODES.includes(user.preferred_language)) {
    return user.preferred_language;
  }
  return 'en';
}

// Get the localized content object for a language.
// SASL and any missing code fall back to English content (SASL is handled
// separately by withSaslNote, which only attaches a note, never fake text).
function getContent(dataByLang, lang) {
  const key = lang === 'sas' ? 'en' : lang;
  return dataByLang[key] || dataByLang.en;
}

// Attach the SASL langNote to a payload when lang === 'sas', otherwise pass through.
function withSaslNote(lang, payload) {
  if (lang === 'sas') {
    return { ...payload, langNote: SASL_NOTE };
  }
  return payload;
}

module.exports = { matchAcceptLanguage, resolveLanguage, getContent, withSaslNote };
