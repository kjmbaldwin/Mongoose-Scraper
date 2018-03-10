var mongoose = require("mongoose");

var HeadlineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  note: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Note"
  }
});

var Headline = mongoose.model("Headline", HeadlineSchema);

module.exports = Headline;