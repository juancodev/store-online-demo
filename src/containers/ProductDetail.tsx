import ProductInfo from "@/components/ProductInfo";
import closeIcon from "@/icons/icon_close.png";
import styles from "@/styles/ProductDetail.module.scss";

const ProductDetail = ({ handleDetailToggle }: any) => {
  return (
    <aside className={styles.ProductDetail}>
      <div className={styles["ProductDetail-close"]}>
        <img
          src={closeIcon}
          alt="close"
          onClick={() => handleDetailToggle("close")}
        />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
