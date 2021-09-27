import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductsComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("error", err));

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(products);

  return (
    <div className="ui grid container">
      <ProductsComponent />
    </div>
  );
};

export default ProductListing;
