const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    walking: {
      type: Number,
      required: true,
    },
    running: {
      type: Number,
      required: true,
    },
    cycling: {
      type: Number,
      required: true,
    },
    swimming: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
