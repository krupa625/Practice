const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/GFG", {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   useFindAndModify: false,
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const postSchema = new mongoose.Schema({
  title: String,
  postedBy: mongoose.Schema.Types.ObjectId,
});

postSchema.virtual("user", {
  ref: "User",
  localField: "postedBy",
  foreignField: "_id",
  justOne: true,
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const createPost = async (next) => {
  const user = await User.findOne({ _id: "680b25cf4ff45b3ee3657676" });
  //   console.log(user);

  const newPost = new Post({
    title: "Post 1",
    postedBy: user._id,
  });

  const postSaved = await newPost.save();
  console.log("post created");

  next();
};

const findPost = async () => {
  const post = await Post.findOne().populate("user");
  console.log(post.user);
};

createPost(findPost);
