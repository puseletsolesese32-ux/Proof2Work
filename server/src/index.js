const express = require('express');
const cors = require('cors');
const config = require('./config');
const db = require('./db');

const authRoutes = require('./routes/auth');
const assessmentsRoutes = require('./routes/assessments');
const modulesRoutes = require('./routes/modules');
const jobsRoutes = require('./routes/jobs');
const languagesRoutes = require('./routes/languages');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.use('/api/auth', authRoutes);
app.use('/api/assessments', assessmentsRoutes);
app.use('/api/modules', modulesRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/languages', languagesRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(config.PORT, () => {
  console.log('Server listening on port ' + config.PORT);
});
