const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const BlogPostSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    summary:{
        type: String,
        required: true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:Schema.Types.ObjectId,
        ref: "User"
    },
    comments:{
        type:String,
    },
    cover_img:{
        type:String,
    },
    category:{
        type: String,
        enum:["Digital Marketing", "Technologies", "Business", "Politics", "Entertainment"]
    }
},
{timestamps:true}
);

const Posts = model("Post", BlogPostSchema);
module.exports = Posts;