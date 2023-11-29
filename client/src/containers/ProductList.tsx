import React, { useState } from "react";
import { useGetProducts } from "@/hooks/useGetProducts";
import { Product } from "@/types";
import ProductItem from "@/components/ProductItem";
import ProductDetail from "@/containers/ProductDetail";
import SkeletonLoader from "@/components/SkeletonLoader";
import styles from "@/styles/ProductList.module.scss";

const API = "https://fakestoreapi.com/products";

const ProductList: React.FunctionComponent = () => {
  const [products, loading] = useGetProducts(API);
  const [detailToggle, setDetailToggle] = useState<boolean>(false);

  const handleDetailToggle = (action: string) => {
    action === "open" ? setDetailToggle(true) : setDetailToggle(false);
  };

  return (
    <section className={styles["main-container"]}>
      <div className={styles.ProductList}>
        {products?.map((product: Product) => {
          {
            return (
              <ProductItem
                handleDetailToggle={handleDetailToggle}
                product={product}
                key={product.id}
              />
            );
          }
        })}
      </div>
      {!!loading && <SkeletonLoader />}
      {detailToggle && (
        <ProductDetail handleDetailToggle={handleDetailToggle} />
      )}
    </section>
  );
};

export { ProductList };
