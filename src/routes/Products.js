import React, { useState, useEffect } from "react";
import { connect } from "dva";
import ProductList from "../components/ProductList";

function Productss({ dispatch, list }) {
  useEffect(() => {
    if (list.length > 0) {
      return;
    }
    dispatch({
      type: "productsun/fetch",
    });
  });
  const handleDelete = (id) => {
    dispatch({
      type: "productsun/delete",
      id,
    });
  };
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products1={list} />
    </div>
  );
}
export default connect(({ productsun: { list: list = [] } }) => ({
  list,
}))(Productss);
