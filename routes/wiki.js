// wiki.js - Wiki route module.
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const {find} = require("../models/about");

// Home page route.
router.get("/", function (req, res) {
    res.send("Wiki home page");
});

// About page route.
router.get("/about", function (req, res) {
    res.send("About this wiki");
});

router.get("/about/:bookId", (req, res) => {

    res.send(req.params);
    res.render("")
});

router.get("/about", (req, res, next) => {
    this.find({}).exec((err, queryResults) => {
        if (err) {
            return next(err);
        }
        //Successful, so render
        res.render("about_view", { title: "About", list: queryResults});
    });
});

router.get(
    "/about",
    asyncHandler(async (req, res, next) => {
        const successfulResult = await find({}).exec();
        res.render("about_view", { title: "About", list: successfulResult });
    }),
);

module.exports = router;