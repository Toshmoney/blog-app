const express = require("express");
const multer = require("multer");
const upload = multer({dest : 'uploads/'});
const {login, register, profile } = require("../controller/controller");
const { getAllPost, createNewPost, getSinglePost, deleteSinglePost, deleteAllPost } = require("../controller/postsController");
const router = express.Router();

router.route("/").get(getAllPost);
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/create-post").post(upload.single('file'), createNewPost);
router.route("/:id").get(getSinglePost);
router.route("/profile/:username").get(profile);
router.route("/posts/:id").delete(deleteSinglePost);
router.route("/posts").delete(deleteAllPost);

module.exports = router;