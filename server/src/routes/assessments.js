const express = require('express');
const db = require('../db');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

function calculateLevel(total) {
  if (total >= 80) return 'Ready';
  if (total >= 60) return 'Nearly Ready';
  if (total >= 40) return 'Needs Work';
  return 'Not Ready';
}

router.post('/', authenticate, (req, res) => {
  try {
    const { answers, categoryScores } = req.body || {};
    if (!Array.isArray(answers)) {
      return res.status(400).json({ error: 'answers array is required' });
    }
    if (categoryScores && typeof categoryScores !== 'object') {
      return res.status(400).json({ error: 'categoryScores must be an object' });
    }
    let totalScore = 0;
    for (let i = 0; i < answers.length; i++) {
      const v = Number(answers[i]);
      if (isNaN(v) || v < 0 || v > 100) {
        return res.status(400).json({ error: 'Each answer score must be between 0 and 100' });
      }
      totalScore += v;
    }
    const total = Math.round(totalScore / answers.length);
    const level = calculateLevel(total);
    const cats = categoryScores || {};
    const stmt = db.prepare('INSERT INTO assessments (user_id, total_score, level, category_scores) VALUES (?, ?, ?, ?)');
    const info = stmt.run(req.user.id, total, level, JSON.stringify(cats));
    const assessment = db.prepare('SELECT id, user_id, total_score, level, category_scores, created_at FROM assessments WHERE id = ?').get(info.lastInsertRowid);
    assessment.category_scores = JSON.parse(assessment.category_scores || '{}');
    res.status(201).json({ assessment });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save assessment' });
  }
});

router.get('/me', authenticate, (req, res) => {
  try {
    const rows = db.prepare('SELECT id, user_id, total_score, level, category_scores, created_at FROM assessments WHERE user_id = ? ORDER BY created_at DESC').all(req.user.id);
    const assessments = rows.map(r => ({ ...r, category_scores: JSON.parse(r.category_scores || '{}') }));
    res.json({ assessments });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch assessments' });
  }
});

router.get('/:id', authenticate, (req, res) => {
  try {
    const id = Number(req.params.id);
    const row = db.prepare('SELECT id, user_id, total_score, level, category_scores, created_at FROM assessments WHERE id = ?').get(id);
    if (!row) return res.status(404).json({ error: 'Assessment not found' });
    if (row.user_id !== req.user.id) return res.status(403).json({ error: 'Forbidden' });
    row.category_scores = JSON.parse(row.category_scores || '{}');
    res.json({ assessment: row });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch assessment' });
  }
});

module.exports = router;
