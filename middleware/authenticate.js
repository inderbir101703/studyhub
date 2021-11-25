const jwt=require('jsonwebtoken')
const User=require('../schemas/user')
const Authenticate= async (req,res,next)=> {
    try{
        const token=req.cookies.studyhubUser;
        const verifyToken=jwt.verify(token,'mynameisinderbirsinghbhinderfromthaparuniversitypatiala')
        const rootUser=await User.findOne({_id:verifyToken._id,"tokens:token":token})
        if(!rootUser){ throw new Error('user not found')}
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
        next()
    }
    catch(error){
        res.status(401).send('user unauthorized');
    }
}
module.exports=Authenticate;