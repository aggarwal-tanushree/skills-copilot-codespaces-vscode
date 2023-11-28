
// Create Web Server
const express = require('express');

// Create Router
const router = express.Router();

router.get('/comments', (req, res) => {
    res.send('GET: /comments');
}   
);
