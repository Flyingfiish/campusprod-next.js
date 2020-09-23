import mongoose from "mongoose";

const videoCaseSchema = new mongoose.Schema({
  name: String,
  description: [String],
  client: String,
  production: String,
  team: [{ role: String, person: String }],
  videos: [String],
  photos: [String],
  tags: [String],
});

let VideoCase;

try {
  // Trying to get the existing model to avoid OverwriteModelError
  VideoCase = mongoose.model("VideoCase");
} catch {
  VideoCase = mongoose.model("VideoCase", videoCaseSchema);
}

export default VideoCase;
