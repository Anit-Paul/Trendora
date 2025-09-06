// eslint-disable-next-line no-unused-vars
import { useContext, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import productContext from "./productContext";
import AuthContext from "./authContext";
import axios from "axios";
function ProductProvider({ children }) {
  const { serverURL } = useContext(AuthContext);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.post(
          `${serverURL}/api/product/listProduct`
        );
        if (response.status == 200 || response.status == 201) {
          setProduct(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);
  const deliveryCharge = 40;
  const value = {
    deliveryCharge,
    products,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}
export default ProductProvider;
