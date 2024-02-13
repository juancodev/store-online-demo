import React, { useState } from 'react'
import { ProductItem } from 'components/ProductItem';
import { useGetProducts } from 'hooks/useGetProducts';
import 'styles/ProductList.scss';
import SkeletonLoader from '../components/SkeletonLoader';
import { ProductDetail } from './ProductDetail';

const API = 'https://store-node-api.onrender.com/api/v1/products';

const ProductList = () => {
  const [products, loading] = useGetProducts(API);
  const [detailToggle, setDetailToggle] = useState(false);

  const handleDetailToggle = (action) => {
    action === 'open' ? setDetailToggle(true) : setDetailToggle(false);
  };
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map(product => {
          return <ProductItem handleDetailToggle={handleDetailToggle} product={product} key={product.id} />
        })}
      </div>
      {!!loading && <SkeletonLoader />}
      {detailToggle && <ProductDetail handleDetailToggle={handleDetailToggle} />}
    </section>
  );
}

export { ProductList };