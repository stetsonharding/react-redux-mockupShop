import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const productSelected = useSelector(
    (state) => state.allProducts.selectedProduct
  );

  const getSingleProduct = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("error", err));
    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div>
      <h1>{productSelected.title}</h1>
    </div>
  );
};

export default ProductDetail;
