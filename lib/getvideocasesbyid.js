import { ObjectId } from "mongodb";
import VideoCase from "../utils/videoCaseSchema";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

export async function getVideoCases(ids) {
  let query = {};
  if (ids != null) {
    query = { _id: { $in: [] } };
    for (let i = 0; i < ids.length; i++) {
      query._id.$in.push(ObjectId(ids[i]));
    }
  }

  let doc = await VideoCase.find(query);
  return JSON.stringify(doc);
}
