import Order from "../components/order";
import Footer from "../components/footer";
import Head from "next/head";

export default function OrderRoute() {
  return (
    <div>
      <Head>
        <title>Оставить заявку | CAMPUS Production</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, 
     user-scalable=0"></meta>
        <meta httpEquiv="content-language" content="ru"></meta>
        <meta property="og:title" content="CAMPUS Production"></meta>
        <meta property="og:url" content="CAMPUS Production"></meta>
        <meta property="og:image" content="main.jpg"></meta>
        <meta
          property="og:description"
          content="За 4 года было реализовано более 100 проектов: рекламные видео, музыкальные клипы, дизайны сайтов, оформление социальных сетей. Каждую задачу мы решаем осмысленно, и красиво. Для начала работы нам надо поговорить. Достаточно указать контакты, и мы свяжемся, чтобы все обсудить"></meta>
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="За 4 года было реализовано более 100 проектов: рекламные видео, музыкальные клипы, дизайны сайтов, оформление социальных сетей. Каждую задачу мы решаем осмысленно, и красиво. Для начала работы нам надо поговорить. Достаточно указать контакты, и мы свяжемся, чтобы все обсудить"
        />
      </Head>
      <Order standAlone={true}></Order>
      <Footer></Footer>
    </div>
  );
}
