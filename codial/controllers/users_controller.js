const User = require('../models/user')


module.exports.profile = function(req, res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id , function(err, user){
            if(user){
                return res.render('profile' , {
                    title: "User profile",
                    user : user 
                })
            }else{
                return res.redirect('/sign-in'); 
            }
            
        })
    }
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
    
    User.findOne({email: req.body.email} , function(errr, user){

        if(user){
            if(user.password != req.body.password){
                return res.redirect('back');
            }

            res.cookie('user_id' , user._id);
            res.redirect('/users/profile')

        }else{
            return res.redirect('back');
        }
    })
    //TODO
}