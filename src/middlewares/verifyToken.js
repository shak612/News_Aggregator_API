exports.verifyToken = (req, res, next) => {
    if(req.headers && req.headers.authorization){
        jwt.verify(req.headers.authorization, 'shhhhh', function(err, decoded) {
            if(err){
                req.user = null;
                req.message = "Header verification failed, some issue with the token!!"
                next();
            }else{
                req.user = decoded.userName;
                req.message = "User found succefully!!"
                next();
            }
        });
    }else{
        req.user = null;
        req.message = "Authorization header not found!!"
        next();
    }
}