const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: String,
    description: String,
    status: Boolean
});

module.exports = mongoose.model('tasks', taskSchema);
