import styles from "./NewlyLaunchedCard.module.scss";
import Home from "../../assets/logo/Home.png";
import { maskNumberWithX } from "../../utilities/Utilities";

type Props = {
  coverImg: string;
  homeName: string;
  homeType: string;
  description: string;
  priceFrom: string;
  monthlyRepayment: string;
};

export default function NewlyLaunchedCard({
  coverImg,
  homeName,
  homeType,
  description,
  priceFrom,
  monthlyRepayment,
}: Props) {
  return (
    <div className={styles.newlyLaunchedCard} data-aos="fade-up">
      <div className={styles.imgWrapper}>
        <img src={coverImg} alt="home-img" />
      </div>
      <div className={styles.content}>
        <h4>{homeName}</h4>
        <div className={styles.houseType}>
          <img src={Home} alt="home" />
          <p>{homeType}</p>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.detailsWrapper}>
          <div
            className={styles.details}
            style={{
              borderRight: "1px solid #efe7e7",
              borderBottom: "1px solid #efe7e7",
            }}
          >
            <p>Price from</p>
            <h6>
              RM
              {isNaN(parseFloat(priceFrom))
                ? "0"
                : parseFloat(priceFrom).toLocaleString()}
              *
            </h6>
          </div>
          <div
            className={styles.details}
            style={{
              borderBottom: "1px solid #efe7e7",
            }}
          >
            <p>Price from</p>
            <h6>
              RM
              {isNaN(parseFloat(monthlyRepayment))
                ? "0"
                : maskNumberWithX(monthlyRepayment)}
              *
            </h6>
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <button className={styles.feature}>
            <img src={Home} alt="home" />
            Features
          </button>
          <button className={styles.register}>Register</button>
        </div>
      </div>
    </div>
  );
}
