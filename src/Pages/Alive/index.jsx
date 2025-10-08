import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AliveBanner from "./AlivaBanner";
import AliveSection2 from "./AliveSection2";
import AliveFeatures from "./AliveFeatures";
import Section11 from "../Home/section11";
import AliveFeatures2 from './AliveFeatures2'
const AliveIndex = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Responsive padding styles
  const section11WrapperStyle = {
    padding: window.innerWidth <= 768 ? '40px 16px' : '60px 120px'
  };
  const WrapperStyle = {
    padding: window.innerWidth <= 768 ? '40px 16px' : '60px 20px'
  };

  return (
    <div>
      <Helmet>
        <title>ALIVE Electric Scooter – Smart, Stylish & Powerful Ride | Srivaru Motors</title>
        <meta property="og:title" content="ALIVE Electric Scooter – Smart, Stylish & Powerful Ride | Srivaru Motors" />
        <meta
          property="og:description"
          content="Experience the next-gen ALIVE Electric Scooter by Srivaru Motors – designed for comfort, performance & sustainability. Ride smarter, go farther!
"
        />
        <meta name="keywords" content="alive electric scooter, srivaru motors alive, best electric scooter india, lightweight electric scooter, smart e scooter, eco friendly scooter, electric scooter for city ride, affordable electric scooter, stylish electric scooter, alive plus, alive lite, alive scooter series" />
      </Helmet>

      {/* ✅ Banner */}
      <AliveBanner />
      <AliveSection2 />
      <div style={WrapperStyle}>
      
      <AliveFeatures2 />
      <AliveFeatures />
      
      </div>
     
      <div style={section11WrapperStyle}>
        <Section11 />
      </div>
    </div>
  );
};

export default AliveIndex;