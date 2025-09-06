import { useContext } from "react";
import productContext from "../../context/productContext";
import styles from "./collections.module.css";
import { useNavigate } from "react-router-dom";

function Collections() {
  const { products } = useContext(productContext);
  const navigate = useNavigate();

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.filter}>
        <h3>FILTERS</h3>
        <div className={styles.filterGroup}>
          <h4>Categories</h4>
          <div className={styles.filterItem}>
            <input type="checkbox" id="Men" name="Men" defaultChecked />
            <label htmlFor="Men">Men</label>
          </div>
          <div className={styles.filterItem}>
            <input type="checkbox" id="Women" name="Women" defaultChecked />
            <label htmlFor="Women">Women</label>
          </div>
          <div className={styles.filterItem}>
            <input type="checkbox" id="boyKids" name="boyKids" defaultChecked />
            <label htmlFor="boyKids">Boy Kids</label>
          </div>
          <div className={styles.filterItem}>
            <input
              type="checkbox"
              id="girlKids"
              name="girlKids"
              defaultChecked
            />
            <label htmlFor="girlKids">Girl Kids</label>
          </div>
        </div>

        <div className={styles.filterGroup}>
          <h4>Sub Categories</h4>
          <div className={styles.filterItem}>
            <input type="checkbox" id="T-Shirt" name="T-Shirt" defaultChecked />
            <label htmlFor="T-Shirt">T-Shirt</label>
          </div>
          <div className={styles.filterItem}>
            <input type="checkbox" id="Shirt" name="Shirt" defaultChecked />
            <label htmlFor="Shirt">Shirt</label>
          </div>
          <div className={styles.filterItem}>
            <input type="checkbox" id="Jeans" name="Jeans" defaultChecked />
            <label htmlFor="Jeans">Jeans</label>
          </div>
          <div className={styles.filterItem}>
            <input type="checkbox" id="shoes" name="shoes" defaultChecked />
            <label htmlFor="shoes">Shoes</label>
          </div>
          <div className={styles.filterItem}>
            <input
              type="checkbox"
              id="Accessories"
              name="Accessories"
              defaultChecked
            />
            <label htmlFor="Accessories">Accessories</label>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {products.length ? (
          <>
            <h1>Latest Products</h1>
            <div className={styles.productsGrid}>
              {products.map((product) => (
                <div key={product._id} className={styles.card}>
                  <div className={styles.imageContainer}>
                    <img
                      src={product.image1}
                      alt={product.name}
                      className={styles.productImage}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productPrice}>₹{product.price}</p>
                    <button
                      className={styles.viewButton}
                      onClick={() => handleViewProduct(product._id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className={styles.emptyState}>
            <h2>No products available</h2>
            <p>Check back later for new arrivals!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collections;
