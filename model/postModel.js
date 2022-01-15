var mongoose = require('mongoose');

const postSchema = new mongoose.Schema({ 
    userId: mongoose.Types.ObjectId,
    title: String,
    description: String
});

module.exports = mongoose.model('Post', postSchema);