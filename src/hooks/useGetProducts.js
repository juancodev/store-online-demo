import {
  useEffect,
  useState
} from "react";
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios(API);
      setProducts(response.data);
      setLoading(false);
    }
    getProducts();
  }, [products])
  return [products, loading]
};

export {
  useGetProducts
};