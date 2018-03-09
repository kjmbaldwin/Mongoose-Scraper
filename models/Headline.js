var mongoose = require("mongoose");

var HeadlineSchema = new mongoose.Schema({

  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

var Headline = mongoose.model("Headline", HeadlineSchema);

module.exports = Headline;