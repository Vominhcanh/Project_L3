import React, { useState } from "react";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../../../controller/action";

export const ProductItems = ({ cartItems }) => {
  const dispatch = useDispatch();
  const addToCart = (e) => {
    dispatch(ADD(e));
  };
  const [openImage, setOpenImage] = useState(false);
  const [img, setImg] = useState("");
  const onOpenImage = (src) => {
    setImg(src);
    setOpenImage(true);
  };
  const onOpenPage = () => {};
  return (
    <>
      <div className="product_items">
        {cartItems.map((items) => (
          <div className="box" key={items.id}>
            <div className="img">
              <Link to={`/detailsproduct/${items.id}`}>
                <img src={items.cover} alt="" />
              </Link>
              <div className="overlay">
                <button className="button" onClick={() => addToCart(items)}>
                  <FiShoppingBag />
                </button>
                <button
                  className="button"
                  onClick={() => onOpenImage(items.cover)}
                >
                  <FiSearch />
                </button>
              </div>
            </div>
            <div className="details">
              <h3>{items.title.slice(0, 20)}...</h3>
              <p>{items.author}</p>
              <h6>
                Giá: {String(items.price).replace(/(.)(?=(\d{3})+$)/g, "$1,")}
                vnđ
              </h6>
            </div>
          </div>
        ))}
      </div>

      <div className={openImage ? "modelOpen" : "modelClose"}>
        <div className="onClickImage">
          <div className="test">
            <img src={img} alt="" />
          </div>

          <button className="button" onClick={() => setOpenImage(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
};
