var mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({ 
    postId: mongoose.Types.ObjectId,
    userId: mongoose.Types.ObjectId,
    title: String
});

module.exports = mongoose.model('Comment', commentSchema);