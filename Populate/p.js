const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
});

const postSchema = new Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: "User" },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }], 
});

const User = mongoose.model("User", userSchema);

const Post = mongoose.model("Post", postSchema);

async function populateArray() {
  try {
    const user1 = new User({ name: "John Doe" });
    const user2 = new User({ name: "Jane Smith" });
    const user3 = new User({ name: "Peter Jones" });
    await Promise.all([user1.save(), user2.save(), user3.save()]);

    const post = new Post({
      title: "My Awesome Post",
      author: user1._id,
      likes: [user2._id, user3._id],
    });
    await post.save();

    const populatedPost = await Post.findById(post._id).populate("likes");

    console.log(JSON.stringify(populatedPost, null, 2));

    // Expected output:
    // {
    //   "_id": "662a0a4e59f8245a34012345",
    //   "title": "My Awesome Post",
    //   "author": "662a0a4e59f8245a3400abcd",
    //   "likes": [
    //     {
    //       "_id": "662a0a4e59f8245a3400efgh",
    //       "name": "Jane Smith",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "662a0a4e59f8245a3400ijkl",
    //       "name": "Peter Jones",
    //       "__v": 0
    //     }
    //   ],
    //   "__v": 0
    // }
  } catch (error) {
    console.error(error);
  }
}
