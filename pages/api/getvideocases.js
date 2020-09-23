import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import {getVideoCases} from "../../lib/getvideocasesbyid";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  let { ids } = req.body;

  const response = await getVideoCases(ids);

  res.end(response);
});

export default handler;
