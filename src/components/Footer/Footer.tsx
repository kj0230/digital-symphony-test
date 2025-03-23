import styles from "./Footer.module.scss";
import FooterLocation from "../../assets/logo/footerLocation.png";
import FooterTime from "../../assets/logo/footerTime.png";
import FooterPhone from "../../assets/logo/footerPhone.png";
import FooterLogo from "../../assets/logo/footerLogo.png";
import { useGeneralContext } from "../../context/GeneralContext";

export default function Footer() {
  const { screenSize } = useGeneralContext();

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer} data-aos="fade-up">
        <div className={styles.item}>
          <div>
            <img src={FooterLocation} alt="location" width={20} />
          </div>
          <div>
            <p>Unit C-3-7, Block C,</p>
            <p>Pacific Place Commerical Centre,</p>
            <p>Jalan PJU 1A/4, Ara Damasara,</p>
            <p>47301 Petalling Jaya.</p>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <img src={FooterTime} alt="time" width={20} />
          </div>
          <div>
            <p>Mon - Fri | 9AM - 6PM</p>
            <p>Dat - Sun | 10AM - 5PM</p>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <img src={FooterPhone} alt="phone" width={20} />
          </div>
          <div>
            <p>03 1234 1234</p>
          </div>
        </div>

        <div className={styles.item} style={{ flexDirection: "column" }}>
          <p>A Development by</p>
          <img src={FooterLogo} alt="company-logo" width={250} />
        </div>
      </div>
      <div className={styles.footerSecondaryContainer}>
        <p>©Digital Symphony 2024</p>
        {screenSize.width > 512 && <span>|</span>}
        <div>
          <a href="#">Diclaimer</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
