import React from "react";
import "./home.scss";
import { Header } from "../Components/Header/Header";
import { Hero } from "../Components/Hero/Hero";

export const Home = () => {
  return (
    <>
      <section className="section1">
        <Header />
        <Hero />
      </section>
      <section className="section2">
        <div className="choose-div">
          <h2>WHY CHOOSE US ?</h2>
          <div className="inner-div">
            <div className="img">
              <img src="whylogo.png" alt="" />
            </div>
            <div className="main-why-div" >
              <div>
                <p>Expertise Across Platforms :</p>
                <small>
                  Our developers specialize in iOS, Android, and cross-platform
                  solutions like React Native and Flutter, ensuring broad reach
                  for your app.
                </small>
              </div>

              <div>
                <p>Design Excellence:</p>
                <small>
                  {" "}
                  We prioritize UI/UX design, creating intuitive interfaces that
                  enhance user engagement and satisfaction.
                </small>
              </div>

              <div>
                <p>Flexible Development Options:</p>
                <small>
                  Whether native or hybrid, we tailor our approach to match your
                  needs, delivering optimal results.
                </small>
              </div>

              <div>
                <p>Reliable Support and Maintenance:</p>
                <small>
                  With ongoing support, seamless integrations, and rigorous
                  testing, we ensure your app stays secure and performs
                  flawlessly post-launch.
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
