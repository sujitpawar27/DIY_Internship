
const sanitize = require('sanitize-html');

const securityMiddleware = (req, res, next) => {
    // Sanitize query parameters
    for (const key in req.query) {
        req.query[key] = sanitize(req.query[key]);
    }

    // Sanitize request body
    if (req.body) {
        for (const key in req.body) {
            req.body[key] = sanitize(req.body[key]);
        }
    }

    next();
};

module.exports = securityMiddleware;