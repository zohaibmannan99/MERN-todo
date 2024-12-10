const mongoose = require('mongoose');
const Blog = require('../model/Blog');


// fetch list of blogs
// add blog
// deleta blog
//update blog

const fetchListofBlogs = async(req,res)=>{
    let blogList;
    try{
        blogList = await Blog.find();
    }catch(e){
        console.log(e);
    }
    if(!blodList){
        return res.status(404).json({message : 'No Blogs Found'})
    }

    return res.status(200).json({ blogList });

};

