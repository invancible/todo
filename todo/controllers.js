const Todo = require('./models');

exports.getIndex = (req, res) => {
    Todo.find()
    .then((todos) => {
        res.render('index', {
            todos: todos
        });
    }).catch((err) => {
        console.log(err);
    });

};

exports.postTodo = (req, res) => {
    const title = req.body.title;

    const todo = new Todo({
        title: title,
        isCompleted: false
    });

    todo.save()
    .then((result) => {
        res.redirect('/');
    }).catch(err => console.log(err));
};

exports.patchTodo = (req, res) => {
    const id = req.body.id;

    Todo.findById(id)
    .then((todo) => {
        todo.title = todo.title;
        todo.isCompleted = !todo.isCompleted;
        return todo.save();
    })
    .then(result => {
        res.redirect('/');
    }).catch((err) => {
        console.log(err);
    });
};

exports.deleteTodo = (req, res) => {
    const id = req.body.id;

    Todo.findByIdAndDelete(id)
    .then((result) => {
        res.redirect('/')
    }).catch((err) => {
        console.log(err);
    });
}

exports.deleteCompletedTodos = (req, res) => {
    Todo.deleteMany({isCompleted:true})
    .then((result) => {
        res.redirect('/');
    }).catch((err) => {
        console.log(err);
    });
}

exports.resetTodos = (req, res) => {
    Todo.deleteMany()
    .then((result) => {
        res.redirect('/');
    }).catch((err) => {
        console.log(err);
    });
}

exports.get404 = (req, res) => {
    res.status(404).render('404');
};