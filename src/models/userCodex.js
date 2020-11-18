const mongoose = require("../config/mongoose");
const {Schema} = mongoose;
const {Types} = Schema;

const userSchema = new Schema({
  title: { type: String, required: true },
  author: { type: [String], required: true },
  location: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
});

const Codex = mongoose.model("UserCodex", userSchema);

module.exports = Codex;