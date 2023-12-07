const JournalPost = require("../models/journalPost");


async function addPost(req, res) {
    try {
        // Get reqest datadescription
        const { title, description, public } = req.body;

        console.log(req.body)
        // Store journal post in db
        const journalPost = await JournalPost.create({
                _creator: req.user._id,
                title,
                description,
                public,
            }
        );

        // Respond
        res.status(200).send({ status: "success", message: "Successfully added journal post", journalPost: journalPost});
    } catch (err) {
        // Respond with error
        res.status(400).send({ status: "error", message: "Couldn't create journal post", error: err });
    }
}

async function fetchPosts(req, res) {
    try {
        const journalPosts = await JournalPost.find({ _creator: req.user._id });
        
        // Respond
        res.status(200).send({ status: "success", message: "Successfully added journal post", journalPosts: journalPosts});
    } catch (err) {
        // Respond with error
        res.status(400).send({ status: "error", message: "Couldn't create journal post", error: err });
    }
}

module.exports = {
    addPost,
    fetchPosts,
};