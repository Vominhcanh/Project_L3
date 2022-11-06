import React from "react";
// import { Banner } from "./banner/Banner";
import { Blog } from "./blog/Blog";
// import DetailsProduct from "./details_product.js/DetailsProduct";
// import { Details } from "./details/Details"
import { Card } from "./Hero/Card";
import { Hero } from "./Hero/Hero";
// import { Price } from "./price/Price"
import { Product } from "./product/Product";
import { Testimonial } from "./testimonial/Testimonial";
import { TopProduct } from "./top/TopProduct";

export const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <Product />
      {/* <Banner /> */}
      <TopProduct />
      {/* <Price /> */}
      <Testimonial />
      <Blog />
    </>
  );
};
