import useSWR from "swr";
import Product from "../types/Product";
import PageLoading from "./PageLoading";
import ProductCard from "./ProductCard";

const FeaturedItems = () => {
  const fetcher = async () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json());
  const {
    data: products,
    isLoading,
    error,
  }: { data: Product[]; isLoading: boolean; error: unknown } = useSWR(
    "/products",
    fetcher
  );

  if (isLoading) {
    return (
      <>
        <section>
          <h2 className="my-10 text-center text-2xl font-bold">
            Featured Items
          </h2>

          <PageLoading />
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h2 className="my-10 text-center text-2xl font-bold">
          Error while fetching
        </h2>
      </>
    );
  }

  return (
    <section className="mt-20">
      <h2 className="my-10 text-center text-2xl font-bold">Featured Items</h2>

      <div className="flex flex-col md:flex-row mb-10 mx-10 gap-10 flex-wrap">
        {products?.slice(0, 3)?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;
