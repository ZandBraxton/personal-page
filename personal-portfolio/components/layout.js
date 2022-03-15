import styles from "./layout.module.scss";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Layout({ children }) {
  const [isActive, setisActive] = useState(false);

  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <h1>Braxton Zand</h1>
        <MenuIcon
          className={styles.menu}
          onClick={() => setisActive(!isActive)}
        ></MenuIcon>
        <ul className={isActive ? styles.active : styles.hidden}>
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>ABOUT ME</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>PORTFOLIO</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
