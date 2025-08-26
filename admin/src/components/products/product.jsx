import styles from "./product.module.css";
import upload from "../../assets/upload.png";
import { useState } from "react";

function Product() {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  return (
    <div className={styles.addProducts}>
      <h2>Add Products</h2>
      <form
        className={styles.productForm}
        
        method="POST"
        
      >
        <div className={styles.uploadSection}>
          <p className={styles.uploadTitle}>Upload Images</p>
          <div className={styles.uploadGrid}>
            <label htmlFor="image1" className={styles.uploadLabel}>
              <img
                src={!image1 ? upload : URL.createObjectURL(image1)}
                alt="Product Preview 1"
                className={styles.uploadPreview}
              />
              <input
                type="file"
                id="image1"
                hidden
                accept="image/*"
                onChange={(e) => {
                  setImage1(e.target.files[0]);
                }}
              />
            </label>
            <label htmlFor="image2" className={styles.uploadLabel}>
              <img
                src={!image2 ? upload : URL.createObjectURL(image2)}
                alt="Product Preview 2"
                className={styles.uploadPreview}
              />
              <input
                type="file"
                id="image2"
                hidden
                accept="image/*"
                onChange={(e) => {
                  setImage2(e.target.files[0]);
                }}
              />
            </label>
            <label htmlFor="image3" className={styles.uploadLabel}>
              <img
                src={!image3 ? upload : URL.createObjectURL(image3)}
                alt="Product Preview 3"
                className={styles.uploadPreview}
              />
              <input
                type="file"
                id="image3"
                hidden
                accept="image/*"
                onChange={(e) => {
                  setImage3(e.target.files[0]);
                }}
              />
            </label>
            <label htmlFor="image4" className={styles.uploadLabel}>
              <img
                src={!image4 ? upload : URL.createObjectURL(image4)}
                alt="Product Preview 4"
                className={styles.uploadPreview}
              />
              <input
                type="file"
                id="image4"
                hidden
                accept="image/*"
                onChange={(e) => {
                  setImage4(e.target.files[0]);
                }}
              />
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Product Description</label>
          <input
            type="text"
            id="description"
            name="description"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Product Price</label>
          <input
            type="number"
            id="price"
            name="price"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            className={styles.select}
            required
          >
            <option value="">-- Select Category --</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="boy_kids">Boy Kids</option>
            <option value="girl_kids">Girl Kids</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subCategory">Sub Category</label>
          <select
            id="subCategory"
            name="subCategory"
            className={styles.select}
            required
          >
            <option value="">-- Select Sub Category --</option>
            <option value="tshirt">T-Shirt</option>
            <option value="shirt">Shirt</option>
            <option value="jeans">Jeans</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Available Sizes</label>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                name="sizes"
                value="S"
                className={styles.checkbox}
              />
              <span>S</span>
            </label>
            <label className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                name="sizes"
                value="M"
                className={styles.checkbox}
              />
              <span>M</span>
            </label>
            <label className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                name="sizes"
                value="L"
                className={styles.checkbox}
              />
              <span>L</span>
            </label>
            <label className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                name="sizes"
                value="XL"
                className={styles.checkbox}
              />
              <span>XL</span>
            </label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="bestseller"
              value="true"
              className={styles.checkbox}
            />
            <span>Mark as Bestseller</span>
          </label>
        </div>

        <button type="submit" className={styles.submitButton}>
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Product;
