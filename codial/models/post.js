const mongoose = require('mongoose');
const { post } = require('../routes/users');

const postSchema = new mongoose.Schema({
    content:{
        type:String , 
        require:true
    } , 
    user:{
        type: mongoose.Schema.Types.ObjectId , 
        ref : 'user'
    }
},
    {
        timestamps:true
    }
);

const Post = mongoose.model("Post", postSchema)
module.exports = Post;