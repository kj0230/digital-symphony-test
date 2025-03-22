import { useState } from "react";
import styles from "./HamburgerMenuIcon.module.scss";

export default function HamburgerMenuIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.menuContainer}>
      {/* Menu button */}
      <div
        className={`${styles.menuButton} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* Mobile Menu */}
      <nav className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
