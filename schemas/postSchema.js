const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    upload: {
        type: Array,
        required: true,
    },
    comments: {
        type: Array,
    }
})

module.exports = mongoose.model("boards", boardSchema);