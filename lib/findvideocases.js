import VideoCase from "../utils/videoCaseSchema";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

export async function findVideoCases(tags) {
  let query = {};
  if (tags != null) {
    query = { $or: [] };
    for (let i = 0; i < tags.length; i++) {
      query.$or.push({ tags: tags[i] });
    }
  }
  let doc = await VideoCase.find(query);
  return JSON.stringify(doc);
}
