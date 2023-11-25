import { Link } from "react-router-dom";
import styles from "@/styles/MenuMobile.module.scss";

const MenuMobile = () => {
  return (
    <div className={styles["mobile-menu"]}>
      <ul>
        <li>
          <Link to="/">CATEGORIES</Link>
        </li>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/">Clothes</Link>
        </li>
        <li>
          <Link to="/">Electronics</Link>
        </li>
        <li>
          <Link to="/">Furnitures</Link>
        </li>
        <li>
          <Link to="/">Toys</Link>
        </li>
        <li>
          <Link to="/">Other</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/checkout">My orders</Link>
        </li>
        <li>
          <Link to="/account">My account</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/" className={styles.email}>
            montillasanchezjuancarlos@gmail.com
          </Link>
        </li>
        <li>
          <Link to="/login" className={styles["sign-out"]}>
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
