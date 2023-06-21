import PageLayout from "@/components/PageLayout";
import { useEffect, useState } from "react";
import { getAll } from "@/api/products";
import ProductCard from "@/components/ProductCard";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { Dropdown, TextInput } from "flowbite-react";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    const product = await getAll();
    setAllProducts(product);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <PageLayout>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              All Products
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
          <div className="relative bg-white shadow-md lg:mb-16 dark:bg-gray-800 sm:rounded-lg">
            <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <TextInput
                      placeholder="Search products"
                      required
                      type="text"
                    />
                  </div>
                </form>
              </div>
              <Dropdown inline label="Category" color="light">
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {allProducts.map((data) => {
              return <ProductCard key={data._id} data={data} />;
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;
