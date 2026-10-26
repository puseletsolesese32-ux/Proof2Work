const express = require('express');
const { MODULES } = require('../data/modules');
const { resolveLanguage, getContent, withSaslNote } = require('../utils/lang');

const router = express.Router();

router.get('/', (req, res) => {
  const lang = resolveLanguage(req);
  const modules = getContent(MODULES, lang);
  res.json(withSaslNote(lang, { modules }));
});

router.get('/:id', (req, res) => {
  const lang = resolveLanguage(req);
  const modules = getContent(MODULES, lang);
  const id = Number(req.params.id);
  const module = modules.find(m => m.id === id);
  if (!module) return res.status(404).json({ error: 'Module not found' });
  res.json(withSaslNote(lang, { module }));
});

module.exports = router;
