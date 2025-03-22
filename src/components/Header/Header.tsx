import styles from "./Header.module.scss";
import Company from "../../assets/logo/company.png";
import HamburgerMenuIcon from "../HamburgerMenuIcon/HamburgerMenuIcon";

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerLeft}>
        <div className={styles.imgWrapper}>
          <img src={Company} alt="company-logo" />
        </div>
      </div>

      <div className={styles.headerRight}>
        <h6>Features</h6>
        <h6>Projects</h6>
        <button>Register Now</button>
        <button className={styles.mobileBtn}>Register</button>
        <HamburgerMenuIcon />
      </div>
    </div>
  );
}
