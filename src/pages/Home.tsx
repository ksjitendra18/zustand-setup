import { Link } from "react-router-dom";
import FeaturedItems from "../components/FeaturedItems";

const Home = () => {
  return (
    <>
      <section className="flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold text-center mt-20 mb-4">
          Shop Latest Collections
        </h2>
        <Link
          className="bg-orange-500 text-white px-10 py-2 rounded-md"
          to="/shop"
        >
          Shop Now
        </Link>
      </section>
      <FeaturedItems />
    </>
  );
};

export default Home;
