import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { logout, me } from "@/api/user";
import { useRouter } from "next/router";

export default function Home() {
  const [featuredProduct, setFeaturedProducts] = useState({});
  const router = useRouter();

  const getFeaturedProducts = async () => {
    const userProfile = await me();
    setFeaturedProducts(userProfile);
  };

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("accessToken");
      router.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
    } else {
      getFeaturedProducts();
    }
  }, []);

  return (
    <section className="bg-white px-4 py-8  max-w-screen-xl lg:py-16">
      <div className="mx-auto">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Profile
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Your user details
          </p>
        </div>
      </div>
      <div className="mx-auto">
        <div className="flex space-x-2">
          <p>Name : </p>
          <p>{featuredProduct.name}</p>
        </div>
        <div className="flex space-x-2">
          <p>Email :</p>
          <p>{featuredProduct.email}</p>
        </div>
        <div className="flex space-x-2">
          <p>Phone :</p>
          <p>{featuredProduct.phone}</p>
        </div>
      </div>
      {featuredProduct.name && (
        <div className="mt-6">
          <Button onClick={() => handleLogout()}>Logout</Button>
        </div>
      )}
    </section>
  );
}
