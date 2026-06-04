import React, { useState } from "react";
import "./AliveCss/AliveSection2.css";
import { Card, Typography, Button } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import AliveReservationPopup from "./AliveReservationPopup"; 

// Import images for the models
import liteImage from "../../Assets/Images/Alive/lite.png";
import plusImage from "../../Assets/Images/Alive/plus.png";
import eliteImage from "../../Assets/Images/Alive/elite.png";

// Import title/logo images
import liteTitleImage from "../../Assets/Images/Alive/png set/alive_lite_logo.png";
import plusTitleImage from "../../Assets/Images/Alive/png set/alive_plus_logo.png";
import eliteTitleImage from "../../Assets/Images/Alive/png set/alive_elite_logo.png";

const AliveSection2 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Plus");

  const aliveModels = [
    {
      id: 1,
      title: "Lite",
      titleImage: liteTitleImage,
      image: liteImage,
      battery_capacity: "1.45",
      certified_range: "60",
      topSpeed: "50",
      price: 79000.0,
    },
    {
      id: 2,
      title: "Plus",
      titleImage: plusTitleImage,
      image: plusImage,
      battery_capacity: "2.7",
      certified_range: "110",
      topSpeed: "70",
      price: 105000.0,
    },
    {
      id: 3,
      title: "Elite",
      titleImage: eliteTitleImage,
      image: eliteImage,
      battery_capacity: "3.5",
      certified_range: "170",
      topSpeed: "85",
      price: 152000.0,
    },
  ];

  const handlePreBookClick = (model) => {
    setSelectedModel(model.title);
    setShowPopup(true);
  };

  const renderCategoryCard = () => {
    return aliveModels.map((item, index) => (
      <Col md={12 / aliveModels.length} key={index}>
        <Card className="section2ImageCard">
          <div>
            <img
              src={item.titleImage}
              alt={`${item.title} title logo`}
              className="modelTitleImage"
            />
            <img
              src={item.image}
              alt={`${item.title} electric bike`}
              className="section2CardBike"
            />

            {/* Show Lifetime Warranty text only for Lite */}
            {item.title === "Lite" && (
              <div className="liteWarrantyText">
                Lifetime Warranty on Battery
              </div>
            )}
          </div>

          <div className="cardTextContainerSection2">
            <Row className="Section2CardRowContainer">
              <Col xs={4}>
                <Typography className="FeaturesValue">{item.battery_capacity} Kwh</Typography>
                <Typography className="FeaturesLable">Battery Capacity</Typography>
              </Col>
              <Col xs={4}>
                <Typography className="FeaturesValue">{item.certified_range} Km*</Typography>
                <Typography className="FeaturesLable">Est. Driving Range</Typography>
              </Col>
              <Col xs={4}>
                <Typography className="FeaturesValue">{item.topSpeed} Kmph</Typography>
                <Typography className="FeaturesLable">Top Speed</Typography>
              </Col>
            </Row>
            <div className="sectionBtnContainer">
              <div>
                <Typography className="Section2BtnPrice">Ex -Showroom</Typography>
                <Typography className="Section2BtnPrice">
  ₹ {item.price.toLocaleString("en-IN")}
  <span className="priceSubLabel"> (onwards)</span>
</Typography>


              </div>
              <Button
                className="Section2Btn"
                variant="contained"
                onClick={() => handlePreBookClick(item)}
              >
                <span>Pre-Book Now</span> <FaArrowRight />
              </Button>
            </div>
          </div>
        </Card>
      </Col>
    ));
  };

  return (
    <div id="alive-section2" className="Section2Maincontainer">
      <div className="sliderContainer">
        <Typography className="Section2MainHeader">
          Choose Your <span>Style</span>
        </Typography>
        <Row className="row-custom-style">{renderCategoryCard()}</Row>
      </div>

      {showPopup && (
        <AliveReservationPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          selectedModel={selectedModel}
          bikeModels={{}}
        />
      )}
    </div>
  );
};

export default AliveSection2;
