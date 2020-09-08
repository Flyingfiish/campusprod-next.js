import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import VideoCase from "../../middleware/VideoCase.spec";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  let { tags } = req.body;
  let query = {};
  if (tags != null) {
    query = { $or: [] };
    for (let i = 0; i < tags.length; i++) {
      query.$or.push({ tags: tags[i] });
    }
  }
  let doc = await req.VideoCase.find(query);

  res.json(doc);
});

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

export async function getAllIds() {
  let doc = await VideoCase.find({}).select("_id");
  return JSON.stringify(doc);
}

export default handler;
