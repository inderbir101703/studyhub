const moongoose = require("mongoose");

const Topic = new moongoose.Schema({
  topic: String
});

module.exports = moongoose.model("Topic", Topic);
