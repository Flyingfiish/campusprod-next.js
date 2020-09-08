import mongoose from "mongoose";
import VideoCase from "../../middleware/VideoCase.spec";
//import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://eldar:may990521@campusprod.dms7w.mongodb.net/Portfolio?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .catch((err) => console.log(err));

const db = mongoose.connection;

db.once("open", function () {
  console.log("Db connected!");
});

const ObjectId = require("mongoose").Types.ObjectId;

const casse = new VideoCase({
  name: "Салон “SOUFFLE”",
  description: [
    "Цель проекта – показать как проходит окрашивание бровей в строгом, динамичном стиле. Задача не из простых, т.к. в этом процессе не так много динамики. Но благодаря проработанной идеи, даже в статичной съемке получилось добиться того эффекта, который требовался. ",
  ],
  client: "Салон “SOUFFLE”",
  team: [
    { role: "Продюссер", person: "Межаков Никита" },
    { role: "Режиссёр", person: "Межаков Никита" },
    { role: "Оператор", person: "Жуйков Слава" },
    { role: "Монтаж", person: "Жуйков Слава" },
    { role: "Художник-постановщик", person: "Караджаев Кирилл" },
    { role: "Модель", person: "Олеся Степнова" },
  ],
  videos: ["407037344"],
  photos: ["https://i.vimeocdn.com/video/877598166.jpg?mw=1100&mh=580"],
  tags: ["..."],
});

const casse2 = new VideoCase({
  name: "Провайдер «К-Телеком»",
  description: [
    "Интернет-провайдер «К-Телеком» входит в список лучших провайдеров в Свердловской Области. Задача, казалось бы, простая – рассказать о новой акции. Но требовалось реализовать это в анимированном формате в кратчайшие сроки (2 недели). ",
    "За это время нам удалось написать уникальный сценарий, отрисовать персонажей и анимировать.",
    "Видео использовалось компанией на ТВ, в местных кинотеатрах и социальных сетях. ",
  ],
  client: "Провайдер «К-Телеком»",
  team: [
    { role: "Продюссер", person: "Межаков Никита" },
    { role: "Сценарист", person: "Межаков Никита" },
    { role: "Аниматор", person: "Караджаев Кирилл" },
    { role: "Дизайнер", person: "Караджаев Кирилл" },
    { role: "Художник", person: "Дук Мария" },
  ],
  videos: ["https://vimeo.com/440285993", "https://vimeo.com/440287419"],
  photos: ["https://i.vimeocdn.com/video/877598166.jpg?mw=1100&mh=580"],
  tags: ["..."],
});

const casse3 = new VideoCase({
  name: "СК «Старт»",
  description: [
    "Строительная компания Старт занимаются строительством частных домов. Задача проекта – создать пакет видеороликов. Презентационное видео, видео-отзыв клиента и рассказать о том, как закладывается фундамент дома",
    "Уже через день после размещения благодаря видеороликам к заказчику пришли клиенты, готовые заплатить за дом несколько миллионов рублей.",
  ],
  client: "СК «Старт»",
  team: [
    { role: "Продюссер", person: "Межаков Никита" },
    { role: "Оператор", person: "Жуйков Слава" },
    { role: "Монтаж", person: "Жуйков Слава" },
  ],
  videos: [
    "https://vimeo.com/440289851",
    "https://youtu.be/2vyhnyVF9wA",
    "https://youtu.be/VkhVWfdwMZI",
  ],
  photos: ["https://i.vimeocdn.com/video/877598166.jpg?mw=1100&mh=580"],
  tags: ["..."],
});

export async function getVideoCases(ids) {
  /*casse.save().then(function (doc) {
    console.log("Сохранен объект", doc);
  });
  casse2.save();
  casse3.save();*/
  let result = [];
  for (let i = 0; i < ids.length; i++) {
    const query = { _id: new ObjectId(ids[i]) };
    const videoCase = await VideoCase.findById(query, function (
      err,
      videoCase
    ) {
      if (err) console.log(err);
      result.push(videoCase);
    });
  }
  console.log(result);
  /*const query = { _id: new ObjectId(id) };
  const videoCase = await VideoCase.findById(query, function (err, videoCase) {
    if (err) console.log(err);
  });*/
  return result;
}

export async function findVideoCases(tags) {
  let result = [];
  let query = {};
  if (tags != null) {
    query = { $or: [] };
    for (let i = 0; i < tags.length; i++) {
      query.$or.push({ tags: tags[i] });
    }
  }
  const videoCases = await VideoCase.find(query, function (err, videoCases) {
    if (err) console.log(err);
    result = videoCases;
  });

  return videoCases;
}

/*module.exports = {
  getVideoCase: async (id) => {
    return await getVideoCase(id);
  },
  findVideoCases: async (tags) => {
    return await findVideoCases(tags);
  },
};*/
