const Blog = require("../models/blog");

const initialBlogs = [
  {
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7
  },
  {
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url:
      "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5
  },
  {
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12
  },
  {
    title: "First class tests",
    author: "Robert C. Martin",
    url:
      "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10
  },
  {
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url:
      "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0
  },
  {
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2
  }
];

const validBlog = {
  title: "A Beginner's JavaScript Study Plan",
  author: "Sara Harrison",
  url:
    "https://www.freecodecamp.org/news/a-beginners-javascript-study-plan-27f1d698ea5e/",
  likes: 0
};

const blogWithMissingLikes = {
  title: "17 Obscure Horror Games We Recommend",
  author: "Ryan Stanford",
  url:
    "https://www.relyonhorror.com/articles/17-obscure-horror-games-we-recommend/"
};

const blogWithMissingTitle = {
  author: "Robert C. Martin",
  url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
  likes: 0
};

const blogWithMissingUrl = {
  title: "Type wars",
  author: "Robert C. Martin",
  likes: 0
};

const getBlogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map(blog => blog.toJSON());
};

const getNonExistingId = async () => {
  const blog = new Blog({
    title: "dummy blog",
    author: "",
    url: "",
    likes: 0
  });
  await blog.save();
  await blog.remove();

  return blog._id.toString();
};

module.exports = {
  initialBlogs,
  validBlog,
  blogWithMissingTitle,
  blogWithMissingUrl,
  getBlogsInDb,
  getNonExistingId,
  blogWithMissingLikes
};