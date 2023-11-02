import React from "react";
import styles from "@/styles/MenuMobile.module.scss";

const MenuMobile = () => {
  return (
    <div className={styles["mobile-menu"]}>
      <ul>
        <li>
          <Link href="/">CATEGORIES</Link>
        </li>
        <li>
          <Link href="/">All</Link>
        </li>
        <li>
          <Link href="/">Clothes</Link>
        </li>
        <li>
          <Link href="/">Electronics</Link>
        </li>
        <li>
          <Link href="/">Furnitures</Link>
        </li>
        <li>
          <Link href="/">Toys</Link>
        </li>
        <li>
          <Link href="/">Other</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/checkout">My orders</Link>
        </li>
        <li>
          <Link href="/">My account</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/" className={styles.email}>
            montillasanchezjuancarlos@gmail.com
          </Link>
        </li>
        <li>
          <Link href="/login" className={styles["sign-out"]}>
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
