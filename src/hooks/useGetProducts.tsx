import { useEffect, useState } from "react";
import axios from "axios";

type ProductsFunction = (api: string) => [products: any, loading: boolean];

type GetProducts = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
};

const useGetProducts: ProductsFunction = (API) => {
  const [products, setProducts] = useState<GetProducts[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      // const response = await axios(API + '?limit=100&offset=100');
      const response = await axios.get(API);
      setProducts(response.data);
      setLoading(false);
    };
    getProducts();
  }, [API]);
  return [products, loading];
};

export default useGetProducts;
