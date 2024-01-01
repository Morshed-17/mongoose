import mongoose from "mongoose";
import Blog from "./model/Blog.js";
import User from "./model/User.js"
mongoose.connect(
  "mongodb+srv://blog:RSIRBs0riR0PjjMY@cluster0.b2w59kw.mongodb.net/?retryWrites=true&w=majority"
);

// create a new blog post object

// const article = new Blog({
//   title: "Awesome Post!",
//   slug: "awesome-post",
//   published: true,
//   content: "This is the best post ever",
//   tags: ["featured", "announcement"],
// });

// await article.save();

// Find a single blog post
// const firstArticle = await Blog.findOne({});
// console.log(firstArticle);

// Create a new blog post and insert into database

// const article = await Blog.create({
//   title: "Morshed Post!",
//   slug: "awesome-post",
//   published: true,
//   content: "This is the best hahahahha",
//   tags: ["featured", "announcement"],
// });

// console.log(article);

// article.title = "Akul post"
// await article.save()
// console.log(article);

// find by oject id

// const article = await Blog.findById("65803fd7342a7c7d4251f7f6", "title slug content")
// console.log(article);

// const blog = await Blog.deleteMany({title: "Morshed Post!"})
// console.log(blog)


// const user = await User.create({
//   name: 'Jesse Hall',
//   email: 'jesse@email.com',
// });

// const article = await Blog.create({
//   title: 'Awesome Post!',
//   slug: 'Awesome-Post',
//   author: user._id,
//   content: 'This is the best post ever',
//   tags: ['featured', 'announcement'],
// });

// console.log(article);


const article = await Blog.findOne({ title: "Awesome Post!" }).populate("author");
console.log(article);