import "./App.css";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import desktopBanner from "./assets/img/desktopBanner.png";
// import mobileMapBg from "./assets/logo/mobileMapBg.png";
import mobileBanner from "./assets/img/mobileBanner.png";
import ElementArt from "./assets/img/elementArt.png";
import Maps from "./assets/img/map.png";
import Car from "./assets/img/car.png";
import Highway from "./assets/logo/highway.png";
import PointMarker from "./components/PointMarker/PointMarker";
import Park from "./assets/logo/park.png";
import Wetlands from "./assets/logo/wetlands.png";
import Location from "./assets/logo/location.png";
import NewlyLaunchedCard from "./components/NewlyLaunchedCard/NewlyLaunchedCard";
import { useState } from "react";
import { Input } from "antd";
import { useGeneralContext } from "./context/GeneralContext";
import NewlyLaunchedHome1 from "./assets/img/NewlyLaunchedHome1.png";
import NewlyLaunchedHome2 from "./assets/img/NewlyLaunchedHome2.png";
import NewlyLaunchedHome3 from "./assets/img/NewlyLaunchedHome3.png";

type RegisterData = {
  name: string;
  phoneNo: string;
  email: string;
  project: string;
};

type NewlyLaunchedHomes = {
  coverImg: string;
  homeName: string;
  homeType: string;
  description: string;
  priceFrom: string;
  monthlyRepayment: string;
};

export default function App() {
  const initiallyShownProjects = 3;
  const { screenSize } = useGeneralContext();
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    phoneNo: "",
    email: "",
    project: "",
  });
  const [selectedProject, setSelectedProject] = useState("");
  const [currentShownProject, setCurrentShownProject] = useState(
    initiallyShownProjects
  );

  const newlyLaunchedHomesData: NewlyLaunchedHomes[] = [
    {
      coverImg: NewlyLaunchedHome1,
      homeName: "Palm Springs",
      homeType: "2-storey Terrace Homes",
      description:
        "A luxurious residential township Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      priceFrom: "600000",
      monthlyRepayment: "3000",
    },
    {
      coverImg: NewlyLaunchedHome2,
      homeName: "Southern Water",
      homeType: "Waterfront Bungalow",
      description:
        "A luxurious residential township Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      priceFrom: "2600000",
      monthlyRepayment: "10999",
    },
    {
      coverImg: NewlyLaunchedHome3,
      homeName: "The Ruums",
      homeType: "Semi-detached Homes",
      description:
        "A luxurious residential township Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      priceFrom: "1000000",
      monthlyRepayment: "18999",
    },
    {
      coverImg: NewlyLaunchedHome1,
      homeName: "Palm Springs2",
      homeType: "2-storey Terrace Homes",
      description:
        "A luxurious residential township Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      priceFrom: "600000",
      monthlyRepayment: "3000",
    },
    {
      coverImg: NewlyLaunchedHome2,
      homeName: "Southern Water2",
      homeType: "Waterfront Bungalow",
      description:
        "A luxurious residential township Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      priceFrom: "2600000",
      monthlyRepayment: "10999",
    },
    {
      coverImg: NewlyLaunchedHome3,
      homeName: "The Ruums2",
      homeType: "Semi-detached Homes",
      description:
        "A luxurious residential township Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      priceFrom: "1000000",
      monthlyRepayment: "18999",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputStyle: any = {
    input: {
      borderBottom: "1px solid #2c2c2c",
      fontFamily: "PoppinsRegular",
    },
  };

  return (
    <div>
      <section id={"Header"}>
        <Header />
      </section>
      <section id={"Banner"} data-aos="fade-up">
        <div className={styles.bannerWrapper}>
          <img
            src={screenSize.width < 768 ? mobileBanner : desktopBanner}
            alt="banner"
            className={styles.desktopBannerImg}
          />
          {screenSize.width < 768 && (
            <img src={ElementArt} alt="element-art" className={styles.art} />
          )}
          <div className={styles.content}>
            <div className={styles.text}>
              <h5>Live in a </h5>
              <h1>Nature</h1>
              <h1 style={{ marginBottom: "16px" }}>Sanctuary</h1>
              <p>Lavishly designed with private gardens,</p>
              <p>canals and a 20-acre greenhouse.</p>
            </div>
          </div>
        </div>
      </section>
      <section id={"Features"}>
        <div className={styles.mapWrapper}>
          {screenSize.width > 768 && (
            <img src={ElementArt} alt="element-art" className={styles.art} />
          )}
          <h6 data-aos="fade-left">A township flanked by</h6>
          <h3 data-aos="fade-right">Natural Wonders</h3>
          <div className={styles.mapContainer} data-aos="fade-up">
            <div className={styles.innerContainer}>
              <img src={Maps} alt="maps" />
              <div className={styles.directLinkWrapper}>
                <div>
                  <img src={Car} alt="car" />
                  <p style={{ color: "#FFFFFF" }}>Direct Link to</p>
                  <p style={{ marginBottom: "8px" }}>Kuala Lumpur</p>
                </div>

                <PointMarker />
              </div>

              <div className={styles.interchangeWrapper}>
                <PointMarker />
                <div className={styles.interchangeContainer}>
                  <img src={Highway} alt="highway" />
                  <p style={{ color: "#FFFFFF" }}>Interchange with</p>
                  <p style={{ marginBottom: "8px" }}>
                    SOME
                    <span style={{ color: "#FFFFFF", marginLeft: "4px" }}>
                      Highway
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className={styles.subtitle} data-aos="fade-up">
            Designed to be the city of the future - a complete township.
          </p>

          <div className={styles.mapCardInfoWrapper}>
            <div className={styles.mapCardInfoContainer}>
              <div className={styles.cardInfoWrapper} data-aos="fade-up">
                <div className={styles.imgWrapper}>
                  <img src={Park} alt="park" />
                </div>
                <p style={{ color: "#FFFFFF" }}>Central Park</p>
                <p>at your doorstep</p>
              </div>
              <div className={styles.cardInfoWrapper} data-aos="fade-up">
                <div className={styles.imgWrapper}>
                  <img src={Highway} alt="highway" />
                </div>
                <p style={{ color: "#FFFFFF" }}>Easy Access to</p>
                <p>major highways</p>
              </div>
              <div className={styles.cardInfoWrapper} data-aos="fade-up">
                <div className={styles.imgWrapper}>
                  <img src={Wetlands} alt="wetlands" />
                </div>
                <p style={{ color: "#FFFFFF" }}>Next to</p>
                <p>a large wetland</p>
              </div>
              <div className={styles.cardInfoWrapper} data-aos="fade-up">
                <div className={styles.imgWrapper}>
                  <img
                    src={Location}
                    alt="location"
                    style={{ width: "48px" }}
                  />
                </div>
                <p style={{ color: "#FFFFFF" }}>Strategically</p>
                <p>located in KL</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={"Projects"}>
        <div className={styles.newlyLaunchedHomesWrapper}>
          {screenSize.width < 768 && (
            <img
              src={ElementArt}
              alt="element-art"
              className={styles.mobileArt}
            />
          )}
          {screenSize.width > 768 && (
            <img
              src={ElementArt}
              alt="element-art"
              className={styles.desktopArt}
            />
          )}
          <h3 data-aos="fade-left">Newly Launched Homes</h3>
          <div
            style={{
              margin: "24px auto",
              backgroundColor: "var(--primary-color)",
              height: "4px",
              width: "200px",
              borderRadius: "16px",
            }}
            data-aos="fade-up"
          />
          <p className={styles.subtitle} data-aos="fade-right">
            Our exclusive range of custom designed homes
          </p>
          <div className={styles.newlyLaunchedCardWrapper}>
            <div className={styles.newlyLaunchedCardContainer}>
              {newlyLaunchedHomesData
                .slice(0, currentShownProject)
                .map((item, index) => (
                  <NewlyLaunchedCard
                    key={index}
                    coverImg={item.coverImg}
                    homeName={item.homeName}
                    homeType={item.homeType}
                    description={item.description}
                    priceFrom={item.priceFrom}
                    monthlyRepayment={item.monthlyRepayment}
                  />
                ))}
            </div>
          </div>

          <button
            className={styles.moreHomeBtn}
            onClick={
              currentShownProject !== newlyLaunchedHomesData.length
                ? () => {
                    setCurrentShownProject(newlyLaunchedHomesData.length);
                  }
                : () => {
                    setCurrentShownProject(initiallyShownProjects);
                  }
            }
            data-aos="fade-up"
          >
            {currentShownProject === newlyLaunchedHomesData.length
              ? " Show Less"
              : " More Homes"}
          </button>
        </div>
      </section>

      <section id={"Register"}>
        <div className={styles.registerWrapper}>
          <h3 data-aos="fade-up">Register Now</h3>
          <p className={styles.subtitle} data-aos="fade-up">
            Our Sales Team will be in touch with you shortly
          </p>

          <div className={styles.formWrapper}>
            <Input
              placeholder="Your Name"
              variant="underlined"
              styles={inputStyle}
              onChange={(e) => {
                setRegisterData({ ...registerData, name: e.target.value });
              }}
              data-aos="fade-up"
            />
            <Input
              placeholder="Your Phone Number"
              variant="underlined"
              styles={inputStyle}
              onChange={(e) => {
                setRegisterData({ ...registerData, phoneNo: e.target.value });
              }}
              data-aos="fade-up"
            />
            <Input
              placeholder="Your Email Address"
              variant="underlined"
              styles={inputStyle}
              onChange={(e) => {
                setRegisterData({ ...registerData, email: e.target.value });
              }}
              data-aos="fade-up"
            />
            <select
              className={`${styles.select} ${
                selectedProject ? styles.selected : ""
              }`}
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <option value="" disabled>
                Choose Project
              </option>
              {newlyLaunchedHomesData.map((item, index) => (
                <option key={index} value={item.homeName}>
                  {item.homeName}
                </option>
              ))}
            </select>
          </div>

          <button className={styles.registerBtn} data-aos="fade-up">
            Submit
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
