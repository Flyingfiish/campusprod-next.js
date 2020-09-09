import Contacts from "../components/contacts";
import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";

export default function ContactsRoute() {
  return (
    <div>
      <Head>
        <title>Контакты | CAMPUS Production</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Контакты | CAMPUS Production"></meta>
        <meta property="og:url" content="url"></meta>
        <meta property="og:image" content="main.jpg"></meta>
        <meta
          property="og:description"
          content="За 4 года было реализовано более 100 проектов: рекламные видео, музыкальные клипы, дизайны сайтов, оформление социальных сетей. Каждую задачу мы решаем осмысленно, и красиво. Для начала работы нам надо поговорить. Достаточно указать контакты, и мы свяжемся, чтобы все обсудить"
        ></meta>
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="За 4 года было реализовано более 100 проектов: рекламные видео, музыкальные клипы, дизайны сайтов, оформление социальных сетей. Каждую задачу мы решаем осмысленно, и красиво. Для начала работы нам надо поговорить. Достаточно указать контакты, и мы свяжемся, чтобы все обсудить"
        />
      </Head>

      <Header></Header>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}
