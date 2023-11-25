import ProductInfo from "@/components/ProductInfo";
import closeIcon from "@/assets/icons/icon_close.png";
import styles from "@/styles/ProductDetail.module.scss";

type ProductDetailProps = {
  handleDetailToggle: (action: string) => void;
};

const ProductDetail = ({ handleDetailToggle }: ProductDetailProps) => {
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
