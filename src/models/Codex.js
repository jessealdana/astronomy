const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let codex = new Schema ({
    title:{
       type: String,
       trim: true,
       required: "Enter title of the book"
    },
    authors:{
        type:String,
        trim: true,
        required: "Enter the name of the author"
    },
    location:{
        type:String,
        trim: true,
        required: "Enter the name of the author's school"
    },
    pdflinks:{
        type:String,
    },
    description:{
        type:String,
        trim: true,
        required: "Enter a short description of the project"
    },
    id: {
        type:String
    }
});

module.exports = mongoose.model("codex", codex);

