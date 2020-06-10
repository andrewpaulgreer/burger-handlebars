var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.all(function(data){
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})



module.exports = router;