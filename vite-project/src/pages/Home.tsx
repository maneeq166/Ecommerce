import { Link } from "react-router-dom";
import sectionImg from "../assets/images/nordwood-themes-F3Dde_9thd8-unsplash.jpg";
import ProductCard from "../components/product-card";
import macBook from "../assets/images/mac-card-40-macbook-air-202503.jpeg";
function Home() {
  const addCartHandler = () => {};
  return (
    <div className="home">
      <section>
        <img src={sectionImg} className="w-full h-full object-cover " alt="" />
      </section>
      <h1>
        Latest product
        <Link to={"/search"} className="more">
          More
        </Link>
      </h1>
      <main className="">
        <ProductCard
          name="macbook"
          photo={macBook}
          handler={addCartHandler}
          productId="jkasdhfsadf"
          stock={1}
          price={99999}
        />
      </main>
    </div>
  );
}

export default Home;
