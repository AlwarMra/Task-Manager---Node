const mongoose = require('mongoose');


mongoose.connect('/mongodb://localhost/tasks-mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
