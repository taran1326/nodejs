const Post = require('../models/post');

module.exports.create = function(req , res){
    Post.create({   
        content : req.body.content,
        user: req.cookies.user_id
    }, function(err , post){
        if(err){
            console.log("Error!"); 
            return;
        }

        return res.redirect('back');
    })
}

