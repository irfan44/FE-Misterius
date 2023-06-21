import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { isLoggedIn } from "@/utils/checkLogin";
import { Button, TextInput, Toast } from "flowbite-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { addToCart } from "@/api/cart";
import { toast, ToastContainer } from "react-toastify";

const ProductCard = ({ data }) => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = async () => {
    try {
      await addToCart({ productId: data._id, quantity: quantity });
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
    setLoggedIn(isLoggedIn);
  }, []);

  return (
    <div className="p-6 h-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="mb-5 text-gray-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
          {capitalizeFirstLetter(data.category)}
        </span>
      </div>
      <div className="flex justify-center">
        <img className="h-56" src={data.product_img} alt={data.name} />
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{data.name}</a>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        Rp. {data.price}
      </p>
      {loggedIn ? (
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
      ) : (
        <Button className="w-full" onClick={() => router.push("/login")}>
          Login to buy this item
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
