// const todoTaskSchema ={
//     name : String,
//     description : String,
//     creator : String,
//     duration : Number,
//     created_at: { type: Date, default: Date.now },
//     };
  
//   const task = mongoose.model("task", todoTaskSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoTaskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    creator: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  });

module.exports = mongoose.model('Task', todoTaskSchema);