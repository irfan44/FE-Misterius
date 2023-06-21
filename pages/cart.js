import { checkout } from "@/api/order";
import { useState } from "react";

const Cart = () => {
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const handleCheckout = async () => {
    try {
      const response = await checkout({ description, address });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      <input onChange={(e) => setDescription(e.target.value)} />
      <input onChange={(e) => setAddress(e.target.value)} />
      <button onClick={() => handleCheckout()}>Checkout</button>
    </div>
  );
};

export default Cart;
