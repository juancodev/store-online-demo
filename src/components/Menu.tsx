import React from "react";
import styles from "@/styles/Menu.module.scss";

const Menu = () => {
  return (
    <>
      <div className={styles.Menu}>
        <ul>
          <li>
            <Link href="/checkout">My orders</Link>
          </li>
          <li>
            <Link href="/">My account</Link>
          </li>
          <li>
            <Link href="/login">Sign out</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
