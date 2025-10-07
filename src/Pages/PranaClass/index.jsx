// src/Pages/PranaPlus/index.js
import React, { useState } from 'react';
import Section11 from "../Home/section11";
import Banner from './Banner.jsx'
import ProductCard from './ProductCard';
import ClassFeatures1 from './ClassFeatures1';
import ClassFeatures2 from './ClassFeatures2';
import { Helmet } from "react-helmet";
const PranaClass = () => {
   const section11WrapperStyle = {
    padding: window.innerWidth <= 768 ? '40px 16px' : '60px 120px'
  };
   const WrapperStyle = {
    padding: window.innerWidth <= 768 ? '40px 16px' : '60px 20px'
  };

  return (
    <div>
      <Helmet>
        <title>PRANA Electric Bike – The Future of Performance Riding | Srivaru Motors</title>
        <meta property="og:title" content="PRANA Electric Bike – The Future of Performance Riding | Srivaru Motors" />
        <meta
          property="og:description"
          content="Unleash true electric performance with PRANA Class by Srivaru Motors. Built for power, precision, and sustainability. Ride the revolution today!
"
        />
        <meta name="keywords" content="prana electric bike, prana class motorbike, srivaru motors prana, premium electric motorbike india, performance electric bike, long range e bike, electric motorcycle, powerful electric bike, sustainable mobility, prana grand, prana elite, high performance electric two wheeler" />
      </Helmet>

      <Banner />
      <ProductCard />
    
    <ClassFeatures1 />
      <ClassFeatures2 />
       <div style={section11WrapperStyle}>
        <Section11 />
      </div>
   </div>
  );
};

export default PranaClass;