const express = require('express');
const { JOBS } = require('../data/jobs');
const { resolveLanguage, getContent, withSaslNote } = require('../utils/lang');

const router = express.Router();

router.get('/', (req, res) => {
  const lang = resolveLanguage(req);
  let jobs = getContent(JOBS, lang);
  const { category, skill } = req.query;
  if (category) {
    const c = String(category).toLowerCase();
    jobs = jobs.filter(j => j.name.toLowerCase().includes(c));
  }
  if (skill) {
    const s = String(skill).toLowerCase();
    jobs = jobs.filter(j => ((j.detail && j.detail.keySkills) || []).some(ks => String(ks).toLowerCase().includes(s)));
  }
  res.json(withSaslNote(lang, { jobs }));
});

router.get('/:id', (req, res) => {
  const lang = resolveLanguage(req);
  const jobs = getContent(JOBS, lang);
  const id = Number(req.params.id);
  const job = jobs.find(j => j.id === id);
  if (!job) return res.status(404).json({ error: 'Job not found' });
  res.json(withSaslNote(lang, { job }));
});

module.exports = router;
