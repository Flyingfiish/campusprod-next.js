import Order from "../components/order";
import Footer from "../components/footer";
import Head from "next/head";

export default function OrderRoute() {
  return (
    <div>
      <Order standAlone={true}></Order>
      <Footer></Footer>
    </div>
  );
}
