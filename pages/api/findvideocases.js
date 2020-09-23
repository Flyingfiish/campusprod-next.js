import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import {findVideoCases} from "../../lib/findvideocases";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  let { tags } = req.body;

  const response = await findVideoCases(tags);

  res.end(response);
});

export default handler;
