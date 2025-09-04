import axios from "axios";
import serverContext from "../../store/server";
import { useContext, useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import styles from "./list.module.css";

function List() {
  const { serverURL } = useContext(serverContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        let response = await axios.post(`${serverURL}/api/product/listProduct`);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProduct();
  }, [products]);

  return (
    <div className={styles.listContainer}>
      <h1>All Listed Items</h1>

      {products.length === 0 ? (
        <div className={styles.noProducts}>
          <h2>No products available</h2>
        </div>
      ) : (
        <div className={styles.products}>
          {products.map((p) => (
            <div key={p._id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img
                  src={p.image1}
                  alt={p.name}
                  className={styles.productImage}
                />
              </div>
              <h2 className={styles.productName}>{p.name}</h2>
              <p className={styles.productPrice}>₹{p.price}</p>
              <button
                className={styles.deleteButton}
                onClick={() => {
                  // TODO: Add delete functionality
                  console.log("Delete product:", p._id);
                }}
                title="Delete product"
              >
                <MdOutlineCancel />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default List;
