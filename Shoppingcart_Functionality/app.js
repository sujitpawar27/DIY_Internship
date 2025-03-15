const express = require('express');
const logger = require('./middleware/logger');
const securityMiddleware = require('./middleware/security');
const app = express();

// Use the logger middleware
app.use(logger);

// Use the security middleware
app.use(securityMiddleware);

// ...existing code...
