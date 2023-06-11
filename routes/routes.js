const express = require("express");
const router = express.Router();
const User = require("../model/model");
const multer = require("multer")


var storage = multer.diskStorage({
    destination:function(req, file, cb ){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.filename+ "_"+Date.now()+"_"+file.originalname)
    }
})

var upload = multer({
    storage: storage,

}).single("image");




router.post("/add", upload, (req, res) =>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone:req.body.phone,
        image:req.body.filename,
    });
    user.save((err) => {
        if(err){
            res.json({message: err.message, type: 'danger'})
        } else {
            req.session.message = {
                type:'success',
                message: 'User added successfully'
            };
            res.redirect('/');
        }
        
    });

});

router.get("/", (req, res) => {
    res.render('index', {title: "Home page"})
});

router.get("/add", (req, res) => {
    res.render("add_user", {title: "add_user"})
});

module.exports = router;