import React from "react";
import TextInput from "../toolbox/TextInput";

const ProductDetail = (categories, product, onChange, onSave) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "güncelle" : "ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error="hata"
      ></TextInput>

      <button type="submit" className="btn btn-success" >Save</button>
    </form>
  );
};

export default ProductDetail;