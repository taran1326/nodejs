const User = require('../models/user')

module.exports.profile = function(req, res){
    return res.end('<h1> User profile </h1>')
}


module.exports.signUp = function(req, res){
    return res.render('user_sign_up' , {
        title:'Codial | Sign up'
    })
}

module.exports.signIn = function(req, res){
    return res.render('user_sign_in' , {
        title:"Codial | Sign in"
    })
}


module.exports.create = function(req, res){

    if(req.body.password != req.body.confirm_password){
        return res.redirect('back') ;
    }

    User.findOne({email : req.body.email}, function(err , user){
            if(err){
                console.log("Error in finding the user with given e-mail");
                return; 
 
            }

            if(!user){
                User.create(req.body , function(err, user){
                    if(err){
                        console.log(err);
                        return;
                    }

                    return res.redirect('./sign-in')
                })
            
            }else{
                
                return res.redirect('back');
            }
        }
    )
    //TODO
}


module.exports.createSession = function(req, res){
    //TODO
}