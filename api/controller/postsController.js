const fs = require("fs");
// const flash = require("flash")
const Posts = require("../model/Posts");

const createNewPost = async(req, res)=>{

    // Getting in-coming files and renaming it

    const {originalname, path} = req.file;
    const part = originalname.split(".");
    const ext = part[part.length - 1];
    const newPath = `${path}.${ext}`;
    fs.renameSync(path, newPath)


    const {title, summary, content} = req.body;
    try {
        const createdPost = await Posts.create({
            title,
            content,
            cover_img : newPath,
            summary,
        });
        res.json(createdPost)

        } catch (error) {
           res.json(error) 
        }

};

const getSinglePost = async(req, res)=>{
    const id = req.params['id']
    try {
    const foundPost = await Posts.findById(id)
    .populate("author", ["username"])
    res.status(200).json(foundPost)
    } catch (error) {
        console.log(error);
    }
};

const getAllPost = async(req, res)=>{
    try {
    const foundPost = await Posts.find()
    .populate('author', ['username'])
    .sort({createdAt: -1})
    .limit(20)
    res.status(200).json(foundPost)
    } catch (error) {
        console.log(error);
    }
};

const editSinglePost = async(req, res)=>{
    const {id} = req.params
    try {
        const foundPost = await Posts.findByIdAndUpdate({id: id}, {});
    } catch (error) {
        console.log(error);
    }
};

const deleteSinglePost = async(req, res)=>{
    const {id} = req.params
    try {
        await Posts.findByIdAndUpdate({id: id}, {});
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
};

const deleteAllPost = async(req, res)=>{
    try {
         await Posts.findManyAndDelete()
    } catch (error) {
        console.log(error);
    }
}

module.exports = {createNewPost, getAllPost, getSinglePost, editSinglePost, deleteAllPost, deleteSinglePost}