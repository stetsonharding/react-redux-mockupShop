import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [isModalShown, setIsModalShown] = useState(false);

  const productSelected = useSelector((state) => state.selectedProduct);

  const getSingleProduct = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("error", err));
    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    getSingleProduct();
    setIsModalShown(true);
  }, []);

  // console.log(productSelected);
  console.log(isModalShown);

  return (
    <div className="ui grid container">
      <div className={`ui modal ${isModalShown ? "active" : null}`}>
        <div className="header">{productSelected.title}</div>
        <div className="image content">
          <img
            className="image"
            src={productSelected.image}
            alt={productSelected.category}
          />
          <div className="description">
            <p>{productSelected.description}</p>
            <p>${productSelected.price}</p>
            <p>{productSelected.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
