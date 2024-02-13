import React from 'react'
import { ProductInfo } from 'components/ProductInfo';
import btn_close from 'icons/icon_close.png';
import 'styles/ProductDetail.scss';

const ProductDetail = ({ handleDetailToggle }) => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src={btn_close} alt="close" onClick={() => handleDetailToggle('close')} />
      </div>
      <ProductInfo />
    </aside>
  );
}

export { ProductDetail };