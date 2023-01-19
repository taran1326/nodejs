const Post = require('../models/post');


module.exports.home = function(req , res){
    Post.find({} , function(err, post){
        return res.render('home'  , { 
            title: "Home", 
            posts: post
        })


    })

}


// module.exports.actionName = function(req , res){}; 