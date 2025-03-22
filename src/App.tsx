import "./App.css";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import desktopBanner from "./assets/img/desktopBanner.png";
import mobileMapBg from "./assets/logo/mobileMapBg.png";
import Maps from "./assets/img/Map.png";
import Car from "./assets/img/Car.png";
import Highway from "./assets/img/Highway.png";
import PointMarker from "./components/PointMarker/PointMarker";
import Park from "./assets/logo/Park.png";
import Wetlands from "./assets/logo/Wetlands.png";
import Location from "./assets/logo/Location.png";
import NewlyLaunchedCard from "./components/NewlyLaunchedCard/NewlyLaunchedCard";
import { useState } from "react";
import { Input } from "antd";

type RegisterData = {
  name: string;
  phoneNo: string;
  email: string;
  project: string;
};

export default function App() {
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    phoneNo: "",
    email: "",
    project: "",
  });

  const [selectedProject, setSelectedProject] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputStyle: any = {
    input: {
      borderBottom: "1px solid #2c2c2c",
      fontFamily: "PoppinsRegular",
    },
  };

  return (
    <div>
      <Header />
      <section id={"Banner"}>
        <div className={styles.bannerWrapper}>
          <img
            src={desktopBanner}
            alt="banner"
            className={styles.desktopBannerImg}
          />
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
      <section id={"Map"}>
        <div className={styles.mapWrapper}>
          <h6>A township flanked by</h6>
          <h3>Natural Wonders</h3>
          <div className={styles.mapContainer}>
            <div className={styles.innerContainer}>
              <img src={Maps} alt="maps" />
              <div className={styles.directLinkWrapper}>
                <img src={Car} alt="car" />
                <p style={{ color: "#FFFFFF" }}>Direct Link to</p>
                <p style={{ marginBottom: "8px" }}>Kuala Lumpur</p>
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
          <p className={styles.subtitle}>
            Designed to be the city of the future - a complete township.
          </p>

          <div className={styles.mapCardInfoWrapper}>
            <div className={styles.mapCardInfoContainer}>
              <div className={styles.cardInfoWrapper}>
                <div className={styles.imgWrapper}>
                  <img src={Park} alt="park" />
                </div>
                <p style={{ color: "#FFFFFF" }}>Central Park</p>
                <p>at your doorstep</p>
              </div>
              <div className={styles.cardInfoWrapper}>
                <div className={styles.imgWrapper}>
                  <img src={Highway} alt="highway" />
                </div>
                <p style={{ color: "#FFFFFF" }}>Central Park</p>
                <p>at your doorstep</p>
              </div>
              <div className={styles.cardInfoWrapper}>
                <div className={styles.imgWrapper}>
                  <img src={Wetlands} alt="wetlands" />
                </div>
                <p style={{ color: "#FFFFFF" }}>Central Park</p>
                <p>at your doorstep</p>
              </div>
              <div className={styles.cardInfoWrapper}>
                <div className={styles.imgWrapper}>
                  <img
                    src={Location}
                    alt="location"
                    style={{ width: "48px" }}
                  />
                </div>
                <p style={{ color: "#FFFFFF" }}>Central Park</p>
                <p>at your doorstep</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={"NewlyLaunchedHomes"}>
        <div className={styles.newlyLaunchedHomesWrapper}>
          <h3>Newly Launched Homes</h3>
          <div
            style={{
              margin: "24px auto",
              backgroundColor: "#639491",
              height: "4px",
              width: "200px",
              borderRadius: "16px",
            }}
          />
          <p className={styles.subtitle}>
            Our exclusive range of custom designed homes
          </p>
          <div className={styles.newlyLaunchedCardWrapper}>
            <div className={styles.newlyLaunchedCardContainer}>
              <NewlyLaunchedCard
                homeName="Palm Springs"
                homeType="2-storey Terrace Homes"
                description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                priceFrom="600000"
                monthlyRepayment="3000"
              />
              <NewlyLaunchedCard
                homeName="Southern Water"
                homeType="Waterfront Bungalow"
                description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                priceFrom="2600000"
                monthlyRepayment="10000"
              />
              <NewlyLaunchedCard
                homeName="The Ruums"
                homeType="Semi-Detached Homes"
                description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                priceFrom="1000000"
                monthlyRepayment="10000"
              />
            </div>
          </div>

          <button className={styles.moreHomeBtn}>More Homes</button>
        </div>
      </section>

      <section id={"register"}>
        <div className={styles.registerWrapper}>
          <h3>Register Now</h3>
          <p className={styles.subtitle}>
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
            />
            <Input
              placeholder="Your Phone Number"
              variant="underlined"
              styles={inputStyle}
              onChange={(e) => {
                setRegisterData({ ...registerData, phoneNo: e.target.value });
              }}
            />
            <Input
              placeholder="Your Email Address"
              variant="underlined"
              styles={inputStyle}
              onChange={(e) => {
                setRegisterData({ ...registerData, email: e.target.value });
              }}
            />
            <select
              className={`${styles.select} ${
                selectedProject ? styles.selected : ""
              }`}
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              <option value="" disabled selected>
                Project
              </option>
              <option value="Project1">Project1</option>
              <option value="Project2">Project2</option>
              <option value="Project3">Project3</option>
            </select>
          </div>

          <button className={styles.registerBtn}>Submit</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
