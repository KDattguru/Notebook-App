const express = require('express');
const router = express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');
var bcrypt =require('bcryptjs')
var jwt =require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'Dattgurugood'


// Route: 1 create a user   using:POST "/api/auth/createuser".no  no login required
router.post('/createuser',[
 body('name','Enter a valid name').isLength({ min: 3}),
body('email','Enter a valid email').isEmail(),
body('password','password must be atleast 5 characters').isLength({ min: 5 }),
 
],async (req, res) => {
//If there are errors ,return bad request and the errors
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check the user with this email exists already 
    try 
    {
    let user = await User.findOne({email:req.body.email})

    if (user){
        res.status(400).json({error:"sorry a user with this email already exist"})
    }
    const salt = await bcrypt.genSalt(10)
    secPass= await bcrypt.hash(req.body.password,salt)
    //create a new user
      user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password:secPass,
      })
      const Data ={
        user:{
          id:user.id
        }
      }
      const authtoken=jwt.sign(Data,JWT_SECRET) //convert into authtoken
      //If you want to verify authtoken is correct or changed,misused use jwt.verify function
   
  //  console.log(jwtData)
      res.json({authtoken})

    }catch (error){
      console.error(error.message)
      res.status(500).send("some error occur")
    }
});

//Route: 2 Authenticate a user using post "/api/auth/login" no login required
router.post('/login',[
  
 body('email','Enter a valid email').isEmail(),
 body('password','password can not be blank').isLength({ min: 5 }),
  ],async (req, res) => {
    //If there are errors ,return bad request and the errors
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
       const {email,password}=req.body
       try{
        let user =await User.findOne({email})
        if(!user){
          return res.status(400).json({error:'please try to login with correct credential!'})
        }
        const passwordCompare = await bcrypt.compare(password,user.password)
        if(!passwordCompare){
        return res.status(400).json({error:"please try to login with correct credential!"})
        }
        const Data ={
          user:{
            id:user.id
          }
}
const authtoken=jwt.sign(Data,JWT_SECRET) 
res.json({authtoken})
       }catch(error){
      
          console.error(error.message)
          res.status(500).send("internal server error")
        }
       
     
 })

 //Route3:Get loggedin user details using post :"/api/auth/getuser" login required
 router.get('/getuser',fetchuser ,async (req, res) => {
 try {
  userId=req.user.id
  const user =await User.findById(userId).select("-password")
  res.send(user)
 } catch (error) {
  console.error(error.message)
  res.status(500).send("internal server error")
 }
   })
module.exports = router; 