import VideoCase from "../utils/videoCaseSchema";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

export async function getAllIds() {
    let doc = await VideoCase.find({}).select("_id");
    return JSON.stringify(doc);
  }