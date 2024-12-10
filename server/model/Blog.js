const mongoose = require('moongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type : String
    },
description : {
    type: String
},
date: {
    type: DataTransfer,
    default : Date.now
}
})

module.exports = mongoose.model('Blog',blogSchema);