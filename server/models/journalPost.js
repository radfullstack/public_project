const mongoose = require("mongoose");

const journalPostSchema = new mongoose.Schema({
    _creator : { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title: {type: String},
    description: {type: String},
    public: {type: Boolean}
}, 
{ timestamps: true });

const JournalPost = mongoose.model("JournalPost", journalPostSchema);

module.exports = JournalPost;