import React from "react";
import { hero } from "../../assets/data/data";

export const Card = () => {
  return (
    <>
      <section className="cards">
        {hero.map((item) => (
          <div className="card" key={item.id}>
            <div className="left">
              <img src={item.cover} alt="" />
            </div>
            <div className="right">
              <h6>{item.name}</h6>
              <p>{item.items} sản phẩm</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
