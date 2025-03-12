// app.js
const tracer = require('dd-trace').init({
    service: 'call-api-gee',
    env: 'development',
    version: '1.0.0',
    logInjection: true, // Enables trace-log correlation
    debug: true
});
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://34.102.244.193.nip.io/pod-test');
    res.json({ message: 'Request successful', data: response.data });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
