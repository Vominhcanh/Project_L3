import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { products, slide } from "../../assets/data/data";
import { SearchItems } from "./SearchItems";
import Carousel from "react-bootstrap/Carousel";

export const Hero = () => {
  // search
  const [value, setValue] = useState("");
  const onChanage = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (key) => {
    setValue(key);
    console.log("search", key);
  };
  return (
    <>
      <section className="hero">
        <div className="container">
          <Carousel style={{ width: "100%" }}>
            {slide.map((item) => (
              <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src={item.img}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="search">
            <span>Tìm kiếm </span>
            <hr />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              onChange={onChanage}
              value={value}
            />
            <button onClick={() => onSearch(value)}>
              <BiSearch className="serachIcon heIcon" />
            </button>
          </div>
          <SearchItems products={products} value={value} onSearch={onSearch} />
        </div>
      </section>
    </>
  );
};
