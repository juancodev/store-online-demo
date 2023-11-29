import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/types";

type ProductsFunction = (
  api: string
) => [products: Product[], loading: boolean];

const useGetProducts: ProductsFunction = (API) => {
  const [products, setProducts] = useState<Product[]>([]);
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

const useSetProducts = (API: string, data: Product) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const setDataProducts = async () => {
      const response = await axios.post(API, data);
      setProducts(response.data.message);
    };
    setDataProducts();
  }, [API]);
  return products;
};

export { useGetProducts, useSetProducts };
