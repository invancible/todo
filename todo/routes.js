const express = require('express');

const router = express.Router();

const controllers = require('./controllers');

router.post('/todos', controllers.postTodo); // Create
router.post('/todos/update', controllers.patchTodo); // Update
router.post('/todos/delete', controllers.deleteTodo); // Delete
router.get('/todos/completed/delete', controllers.deleteCompletedTodos); // Delete all completed
router.get('/todos/reset', controllers.resetTodos); // Reset
router.get('/', controllers.getIndex); // Main Page
router.use(controllers.get404); // 404 Page

module.exports = router;