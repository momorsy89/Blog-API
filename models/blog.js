// creating blog schema
const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true},
        body: {
            type: String,
            required: true}}
,{timestamp: true})

//Creating Blog model
const Blog =mongoose.model('Blog', blogSchema);

//expoert Blog model
module.exports = Blog;