var express = require('express');
var router = express.Router();
var multer=require('multer');
var db = require("../model/model");
var apis= require("../controller/api");

// var storage = multer.diskStorage({});
var upload = multer({});

//ImageUpload
router.post('/file',upload.single('image'),apis.imageInsert);
module.exports=router;