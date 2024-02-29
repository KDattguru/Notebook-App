var jwt =require('jsonwebtoken')
const JWT_SECRET = 'Dattgurugood'

const fetchuser =(req,res,next)=>{
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token')
    if(!token){
    return res.status(401).send({error:"Please authenticate using valid token"})
    }
    try {
        const Data =jwt.verify(token,JWT_SECRET)
        req.user= Data.user
        next()
    } catch (error) {
        return res.status(401).send({error:"Please authenticate using valid token"})
    }

}

module.exports=fetchuser