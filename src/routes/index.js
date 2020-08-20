const express = require('express');
const router = express.Router();

const taskModel = require('../models/task');



router.get('/', async (req, res) => {

    await taskModel.find({}, (err, tasks) => {
        if (err) throw err;

        res.render('index', {
            title: 'Task Manager',
            tasks: tasks
        });
    });
});

router.post('/add', (req, res) => {
    let body = req.body;
    body.status = false;

    taskModel.create(body, (err, task) => {
        if (err) throw err;
        res.redirect('/');
    });
});

router.get('/turn/:id', (req, res) => {
    let id = req.params.id;
    taskModel.findById(id, (err, task) => {
        if (err) throw err;
        task.status = !task.status;
        task.save()
            .then(() => res.redirect('/'))
    });
});

router.get('/delete/:id', (req, res) => {
    let id = req.params.id;
    taskModel.deleteOne({ _id: id }, (err, task) => {
        if (err) throw err;
        res.redirect('/');
    });
});

module.exports = router;