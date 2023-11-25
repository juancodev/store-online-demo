import { Link } from "react-router-dom";
import styles from "@/styles/Menu.module.scss";

const Menu = () => {
  return (
    <>
      <div className={styles.Menu}>
        <ul>
          <li>
            <Link to="/checkout">My orders</Link>
          </li>
          <li>
            <Link to="/account">My account</Link>
          </li>
          <li>
            <Link to="/login">Sign out</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export { Menu };
