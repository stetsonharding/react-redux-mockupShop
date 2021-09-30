import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const productSelected = useSelector((state) => state.selectedProduct);
  const { image, title, price, category, description } = productSelected;

  const getSingleProduct = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("error", err));
    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      getSingleProduct();
    }

    return function cleanup() {
      dispatch(removeSelectedProduct(selectedProduct));
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {selectedProduct.length === 0 ? (
        <div class="ui segment">
          <div class="ui active dimmer">
            <div class="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            {/* <div className="ui vertical divider">AND</div> */}
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <p className="ui teal tag label">${price}</p>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
