const Todo = require('../../models/todo');

const addTodo = async (req, res) => {

    try {
        const newTodo = await Todo.create(req.body);
        res.status(200).json({
        success: true,
        output: newTodo,
        data: req.body
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        error: error.message
        });
    }
};

module.exports = addTodo;