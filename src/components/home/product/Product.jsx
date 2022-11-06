import { useState } from "react";
import { products } from "../../assets/data/data";
import { Heading } from "../../common/Heading";
import { ProductItems } from "./ProductItems";

export const Product = () => {
  const [cartItems, setCartItems] = useState(products);
  return (
    <>
      <section className="product">
        <div className="container">
          <Heading title="Sản phẩm mới nhất" />
          <ProductItems cartItems={cartItems} />
        </div>
      </section>
    </>
  );
};
