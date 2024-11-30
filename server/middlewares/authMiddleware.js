
//jsonwebtoken
const jwt=require('jsonwebtoken');

// module to be exported as middleware function
module.exports=function(req,res,next){

try {
    //extract authorization token from request header
    const token = req.headers.authorization.split(" ")[1];
    //decodes authorization token 
    const decoded = jwt.verify(token,'default secret');
    // decoded userId to userID property in request body 
    req.body.userId=decoded.userId;

    next();
} catch (error) {
    res.status(401).send({success:false, message:"Invalid token"})
}

}