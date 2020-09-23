import nextConnect from "next-connect";
import mongoose from "mongoose";
import VideoCase from "../utils/videoCaseSchema";

mongoose
  .connect(
    process.env.MONGODB,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .catch((err) => console.log(err));

const db = mongoose.connection;

db.once("open", function () {
  console.log("Db connected!");
});

async function database(req, res, next) {
  req.dbClient = db;
  req.VideoCase = VideoCase;
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
