const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;


// Creating express app and configuring middleware needed for authentication
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require('./routes/auth')(app);
app.use("/", router);

router.route("/getData").get(function(req, res){
  detail.find({}, function(err, result) {
    if (err){
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

mongoose.connect("mongodb://127.0.0.1:27017/codex", {
  useNewUrlParser: true
})

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful")
})

let codex = require("./src/models/Codex")

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  
  
  // Syncing our database and logging a message to the user upon success
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });