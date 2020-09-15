import Order from "../components/order";
import Footer from "../components/footer";

export default function OrderRoute() {
  return (
    <div>
      <Order standAlone={true}></Order>
      <Footer></Footer>
    </div>
  );
}
