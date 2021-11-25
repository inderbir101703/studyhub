const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./schemas/user");
const Post=require("./schemas/post")
const Topic=require('./schemas/topic')
const app = express();
const authenticate=require('./middleware/authenticate')
const PORT = process.env.PORT || 4000
const uri = "mongodb+srv://indra:studyhub@cluster0.bhch1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(
  uri,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
 
  },
  (error) => {
    console.log("moongoose is up",error);
  }
); 

app.use(bodyParser.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000/",
    credentials: true,
    optionSuccessStatus: 200,
  })
);
app.use(
  session({
    secret: "key",
    resave: true,
    saveUninitialized: true,
  })
);

app.post("/login",async (req, res) => {

  
    User.find({ $and: [ { $or: [{ usermail: req.body.user},{username: req.body.user}] }],password:req.body.password},async (err, doc) => {
 
    try {
      const usermail=await User.findOne({usermail:req.body.user})
      const token=await usermail.generateAuthtoken();
     

      if (doc.length>0) {
        res.cookie("studyhubUser",token,{
          httpOnly:true,
        });
        return   res.send(doc);}
      else{
        return res
        .status(400)
        .json({ error: "true", msg: "Invalid credentials" });
     
       
      }
 }
  catch (e) {

    return res
      .status(400)
      .json({ error: "true", msg: "unexpected error" });
  }})
});




app.post("/register", (req, res) => {
  User.findOne({ usermail: req.body.usermail }, async (err, doc) => {
    try {
     
      if (doc) {  return res
      .status(400)
      .json({ error: "true", msg: "email is already registered" });}
      if (!doc) {
        const newUser = new User({
          username: req.body.username,
          usermail: req.body.usermail,
          password: req.body.password,
          userHobbies: req.body.userHobbies,
        });
      const token =await newUser.generateAuthtoken()
        await newUser.save();
        res.send("user created");
      } 
    } catch (e) {
    
      return res
        .status(400)
        .json({ error: "true", msg: "unexpected error" });
    }
  });
});
app.get("/getUser",authenticate, (req, res) => {
  try{res.send({username:req.rootUser.username,
    _id:req.rootUser._id,
    mail:req.rootUser.usermail, 
    hobbies:req.rootUser.userHobbies});}
    catch(error){
      res.send('log im please')
    }
});



app.post("/addPost", async (req, res) =>  {

    try {
        const newPost = new Post({
          topic:req.body.topic,
          heading: req.body.heading,
          body: req.body.postBody,
          user: req.body.user,
          likes: [],
          time:new Date(),
          comments:[]
        });
       
      
        await newPost.save();
        Post.find({},(err,doc)=>
        {res.send(doc)})
      } 
    catch (e) {
  
      return res
        .status(400)
        .json({ error: "true", msg: "unexpected error" });
    }
  
});


app.post("/addTopic", async (req, res) =>  {

  try {
      const newTopic = new Topic({
        topic:req.body.Topic,
       
      });
     
    
      await newTopic.save();
    
      res.send('topic created')
    } 
  catch (e) {
   
    return res
      .status(400)
      .json({ error: "true", msg: "unexpected error" });
  }

});

app.post("/addLike", async (req, res) =>  {
 
  Post.findOne({ _id: req.body.post }, async (err, doc) => {
  try {

     Post.updateOne({_id:req.body.post},{ $addToSet: {likes:req.body } },function(err, result){
       if(err) throw err
       else
       res.send('ipdated')
     })
   
    } 
  catch (e) {
   
    return res
      .status(400)
      .json({ error: "true", msg: "unexpected error" });
  }

});})
app.post("/addComment", async (req, res) =>  {
 
  Post.findOne({ _id: req.body.post }, async (err, doc) => {
  try {
 
     Post.updateOne({_id:req.body.post},{ $addToSet: {comments:{user:req.body?.user,comment:req?.body?.comment,time:req?.body?.time} } },function(err, result){
       if(err) throw err
       else
       res.send('ipdated')
     })
   
    } 
  catch (e) {
   
    return res
      .status(400)
      .json({ error: "true", msg: "unexpected error" });
  }

});})
app.get("/getTopics", (req, res) => {
Topic.find({},(err,doc)=>{
  {res.send(doc)}
})
})
app.get("/getUsers", (req, res) => {
  User.find({},(err,doc)=>{
    {res.send(doc)}
  })
  }) 
  app.get("/getPosts", (req, res) => {
    Post.find({},(err,doc)=>{
      {res.send(doc)}
    })
    })
 

 





app.use(cookieParser("key"));

if(process.env.NODE_ENV=="production"){
  app.use(express.static("client/build"))
}
app.listen(PORT, () => {
  console.log("server has started");
});
