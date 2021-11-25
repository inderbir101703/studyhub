const moongoose = require("mongoose");

const Post = new moongoose.Schema({
  topic: String,
  heading: String,
  body: String,
  user: String,
  likes:[{user:String,post:String}],
  time:String,
  comments:[{user:String,comment:String,time:String}]
});

module.exports = moongoose.model("Post", Post);
