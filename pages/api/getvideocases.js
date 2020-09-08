import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectId } from "mongodb";
import VideoCase from "../../middleware/VideoCase.spec";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  let query = {};
  let { ids } = req.body;
  if (ids) {
    query = { _id: { $in: [] } };
    for (let i = 0; i < ids.length; i++) {
      query._id.$in.push(ObjectId(ids[i]));
    }
  }
  let doc = await req.VideoCase.find(query);

  res.json(doc);
});

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

export default handler;
