const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');


//create a blog

router.post('/',async(req, res) => {
    const { title, description, author} = req.body;

    try {
        const newBlog = new Blog({ title, description, author });
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (err) {
        res.status(400).json({message:err.message});
    }
});


//read all blogs

router.get('/',async(req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err){
        res.status(500).json({message:err.message});
    }
});

//Read a single blog
router.get('./:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if(!blog){
            return res.status(404).json({message:'Item not found'})
        }

    } catch (err) {
        res.status(500).json({message:err.message});
    }
});

// update a blog
router.put('./:id', async(req, res) => {
    const { title, description, author} = req.body;
    try{
        const updateBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            {title, description, author},
            {new : true }

        );
        if (!updateBlog){
            return res.status(404).json({message:'Blog not found'});
        }
        res.json(updateBlog);
    } catch (err){
        res.status(400).json({ message: err.message });
    }
});

//delete an blog

router.delete('/:id',async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

        if (!deletedBlog){
            return res.status(404).json({message:"Blog not found"});
        }
        res.json({message:"Blog has been deleted"});
    } catch (err) {
        res.status(500).json({message:err})
    }
});

module.exports = router;