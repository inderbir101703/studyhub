const moongoose = require("mongoose");
const bcrypt= require('bcryptjs')
const jwt =require('jsonwebtoken')
const User = new moongoose.Schema({
  username: String,
  usermail: String,
  password: String,
  userHobbies: String,
  tokens:[{token:
    {type:String,
  required:true}}]
});
User.methods.generateAuthtoken=async function(){
  try{
    const token=jwt.sign({_id:this._id.toString()},'mynameisinderbirsinghbhinderfromthaparuniversitypatiala');
    this.tokens=this.tokens.concat({token})
    await this.save();
    return token
  }
  catch(error){
    res.send('errror')

  }
}
module.exports = moongoose.model("User", User);
