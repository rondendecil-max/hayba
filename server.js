'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for authentication (dummy middleware for example)
function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];
    if (token && token === 'Bearer your_token_here') {
        next();
    } else {
        res.status(403).send('Forbidden');
    }
}

// Set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Apply authentication middleware to all routes starting with /api
app.use('/api', authMiddleware);

// Example API route
app.get('/api/example', (req, res) => {
    res.send('This is a protected route.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
