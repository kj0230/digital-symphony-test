import styles from "./Header.module.scss";
import Company from "../../assets/logo/company.png";
import HamburgerMenuIcon from "../HamburgerMenuIcon/HamburgerMenuIcon";
import { useGeneralContext } from "../../context/GeneralContext";

export default function Header() {
  const { screenSize, scrollToSection, isMobileMenuOpen, handleMobileMenu } =
    useGeneralContext();

  const handleScroll = (section: string) => {
    handleMobileMenu();

    setTimeout(() => {
      scrollToSection(section);
    }, 350);
  };

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerLeft}>
        <div className={styles.imgWrapper}>
          <img src={Company} alt="company-logo" />
        </div>
      </div>

      <div className={styles.headerRight}>
        <h6 onClick={() => scrollToSection("Features")}>Features</h6>
        <h6 onClick={() => scrollToSection("Projects")}>Projects</h6>
        <button
          onClick={() => scrollToSection("Register")}
          className={screenSize.width < 768 ? styles.mobileBtn : ""}
        >
          Register {screenSize.width > 768 && "Now"}
        </button>

        <HamburgerMenuIcon />
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <div onClick={() => handleScroll("Features")}>Features</div>
        <div onClick={() => handleScroll("Projects")}>Projects</div>
      </nav>
    </div>
  );
}
