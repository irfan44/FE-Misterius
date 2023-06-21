import PageLayout from "@/components/PageLayout";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { getAll } from "@/api/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [featuredProduct, setFeaturedProducts] = useState([]);

  const getFeaturedProducts = async () => {
    const product = await getAll();
    const featuredProduct = product.slice(0, 3);
    setFeaturedProducts(featuredProduct);
  };

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  useEffect(() => {});

  return (
    <PageLayout>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments tool for software companies
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <Button>View All Product</Button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Featured Products
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {featuredProduct.map((data) => {
              return <ProductCard key={data._id} data={data} />;
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
