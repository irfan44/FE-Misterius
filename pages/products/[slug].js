import PageLayout from "@/components/PageLayout";
import { useRouter } from "next/router";
import { getById } from "@/api/products";
import { useEffect, useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { addToCart } from "@/api/cart";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const getProductDetail = async () => {
    if (router.query.slug) {
      const response = await getById({ productId: router.query.slug });
      setProductDetails(response);
    }
  };

  const handleAddToCart = async () => {
    try {
      await addToCart({ productId: productDetails._id, quantity: quantity });
      setQuantity(0);
      toast("Added to Cart!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        theme: "light",
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [router.query.slug]);

  return (
    <PageLayout>
      {productDetails ? (
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              className="w-full px-6"
              src={productDetails.product_img}
              alt={productDetails.name}
            />
            <div className="mt-4 md:mt-0">
              <div className="mb-5 text-gray-500">
                <span className="bg-teal-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  {productDetails.category}
                </span>
              </div>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {productDetails.name}
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                {productDetails.description}
              </p>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                Stock Available: {productDetails.stock}
              </p>
              <div className="flex space-x-2">
                <TextInput
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
                />
                <Button className="w-full" onClick={() => handleAddToCart()}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Empty</p>
      )}
    </PageLayout>
  );
};

export default ProductDetails;
