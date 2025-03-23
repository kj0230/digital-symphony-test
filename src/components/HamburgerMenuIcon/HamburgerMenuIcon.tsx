import styles from "./HamburgerMenuIcon.module.scss";
import { useGeneralContext } from "../../context/GeneralContext";

export default function HamburgerMenuIcon() {
  const { handleMobileMenu, isMobileMenuOpen } = useGeneralContext();
  return (
    <div className={styles.menuContainer}>
      {/* Menu button */}
      <div
        className={`${styles.menuButton} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
        onClick={handleMobileMenu}
      >
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
      </div>
    </div>
  );
}
