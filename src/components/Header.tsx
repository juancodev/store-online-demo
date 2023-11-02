import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Menu from "@/components/Menu";
import MyOrder from "@/containers/MyOrder";
import MenuMobile from "@/components/MenuMobile";
import menuIcon from "@/assets/icons/icon_menu.svg";
import logo from "@/assets/logos/logo_yard_sale.svg";
import shoppingCart from "@/assets/icons/icon_shopping_cart.svg";
import downArrow from "@/assets/icons/flechita.svg";
import AppContext from "@/context/AppContext";
import styles from "@/styles/Header.module.scss";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleOrders, setToggleOrders] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <nav className={styles.Nav}>
        <img
          src={menuIcon}
          alt="menu"
          className={styles.menu}
          width={25}
          height={25}
          onClick={handleToggleMenu}
        />

        <div className={styles["navbar-left"]}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles["nav-logo"]} />
          </Link>

          <ul>
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
              <Link to="/">Others</Link>
            </li>
          </ul>
        </div>

        <div className={styles["navbar-right"]}>
          <ul>
            <li
              className={styles["navbar-email"]}
              onClick={handleToggle}
              role="presentation"
            >
              montillasanchezjuancarlos@gmail.com
              <img src={downArrow} alt="dropdown" />
            </li>
            <li
              className={styles["navbar-shopping-cart"]}
              onClick={() => setToggleOrders(!toggleOrders)}
              role="presentation"
            >
              <img src={shoppingCart} alt="" />
              {state?.cart.length > 0 ? (
                <div>{state.cart.length > 9 ? `+9` : state.cart.length}</div>
              ) : null}
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrders && <MyOrder />}
        {toggleMenu && <MenuMobile />}
      </nav>
    </>
  );
};

export { Header };
