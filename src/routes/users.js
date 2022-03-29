const { 
    user_list, 
    user_update, 
    user_detail,
    user_insert,
    user_delete
} = require('../controllers/userController');
const userRoutes = require('express').Router()

// user API routes
userRoutes.get('/users/', user_list)
userRoutes.get('/users/:id', user_detail)
userRoutes.post('/users/', user_insert)
userRoutes.put('/users/', user_update)
userRoutes.delete('/users/', user_delete)

module.exports = userRoutes;