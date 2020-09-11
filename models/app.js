const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoTaskSchema = new mongoose.Schema(
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
    createdAt: {
      type: Date,
      default: Date.now,
      required: true
    }
  });

module.exports = mongoose.model('Task', todoTaskSchema);