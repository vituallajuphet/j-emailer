const { 
    send_email
} = require('../controllers/emailController');
const emailRoutes = require('express').Router()

// email API routes
emailRoutes.post('/sendemail', send_email)

module.exports = emailRoutes;