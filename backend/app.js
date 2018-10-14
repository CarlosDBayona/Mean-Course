const express = require('express');
const bodyParser =require("body-parser");
const mongoose=require('mongoose');
const Post = require ('../backend/models/post');
const app = express();
// ylsEfor8qYP3rIQp carlos
//3XMYwYoHFM8qzm1k admin
mongoose.connect("mongodb://localhost:27017/myproject", { useNewUrlParser: true })
    .then(()=>{
      console.log('Conected to Database');
    })
    .catch((e)=>{
      console.log(e)
      console.log('Conection failed')
    })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/posts",(req,res,next) => {
  const post = new  Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: 'Post Added Successfully',
      postId: createdPost._id
    }
    );
  });
});

app.get('/api/posts',(req,res,next)=>{
  Post.find(()=>{

  }).then((documents)=>{
    console.log(documents)
    res.status(200).json({
      message: 'Post fetched successfully',
      posts: documents
    });
  }).catch((e)=>{
    console.log(e)
  })
});
// :id wild card for any id
app.delete("/api/posts/:id",(req,res,next) => {
  Post.deleteOne({_id: req.params.id}).then(result=>{
    console.log(result);
    res.status(200).json({message:'POST delete'})
  })
})
module.exports = app;
