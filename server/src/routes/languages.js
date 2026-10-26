const express = require('express');
const { LANGUAGES } = require('../data/languages');
const { resolveLanguage, withSaslNote } = require('../utils/lang');

const router = express.Router();

router.get('/', (req, res) => {
  const lang = resolveLanguage(req);
  const payload = { languages: LANGUAGES };
  res.json(withSaslNote(lang, payload));
});

module.exports = router;
