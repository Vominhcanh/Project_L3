import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/data/data";

const DetailsProduct = () => {
  const { id } = useParams();

  const data = products?.find((i) => i.id == id);
  // console.log(data);
  return (
    <>
      <div className="container_product-detail ">
        <section class="product">
          <div class="product__photo">
            <div class="photo-container">
              <div class="photo-main">
                <div class="controls"></div>
                <img src={data.cover} alt="green apple slice" />
              </div>
              <div class="photo-album">
                <ul>
                  <li>
                    <img src={data.cover} alt="green apple" />
                  </li>
                  <li>
                    <img src={data.cover} alt="half apple" />
                  </li>
                  <li>
                    <img src={data.cover} alt="green apple" />
                  </li>
                  <li>
                    <img src={data.cover} alt="apple top" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="product__info">
            <div class="title">
              <h1>{data.title}</h1>
            </div>
            <div class="price">
              Giá tiền:
              <span>
                {String(data.price).replace(/(.)(?=(\d{3})+$)/g, "$1.")} vnđ
              </span>
            </div>
            <div class="variant ">
              <h3>Lựa chọn màu</h3>
              <ul>
                <li className="color"></li>
                <li className="color"></li>
                <li className="color"></li>
                <li className="color"></li>
              </ul>
            </div>
            <div class="description">
              <h3>Chi tiết</h3>
              <ul>
                <li>
                  <p>Ram : {data.cpu}</p>
                </li>
                <li>
                  <p>Bộ nhớ trong : {data.ram}</p>
                </li>
                <li>
                  <p>Apples may be good for bone health</p>
                </li>
                <li>
                  <p>They're linked to a lowest risk of diabetes</p>
                </li>
              </ul>
            </div>
            <button class="buy--btn">THÊM VÀO GIỎ HÀNG</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailsProduct;
