import React, { useEffect, useState } from "react";
import classes from "./prana.module.css";
import { debounce } from "lodash";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Card, Typography, Button } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { pageLoader } from "../../Redux/Actions/userActions";
import { getCategoriesList } from "../../Redux/Actions/demoDriveActions";
import { CategorySliderResponsive } from "../../Utils/dummyConstants";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import PranaElite from "../../Assets/Images/Elite Choose Color Vehicle Blue.png";
import PranaGrand from "../../Assets/Images/Grand Choose Color Vehicle Black.png";

const Section2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(false);

  const { error, Success, storeList, categoryList } = useSelector(
    (state) => state.demoDriveDatas
  );

  const renderCategoryCard = () => {
    const staticCards = [
      {
        title: "Prana Elite",
        image: PranaElite,
        battery_capacity: "8.44",
        certified_range: "250",
        topSpeed: "123",
        price: 376000,
      },
      {
        title: "Prana Grand",
        image: PranaGrand,
        battery_capacity: "5.0",
        certified_range: "150",
        topSpeed: "123",
        price: 276000,
      },
    ];

    return staticCards.map((item, index) => (
      <Col md={6} key={index}>
        <Card className={classes.section2ImageCard}>
          <div>
            <Typography className={`${classes.CategoryHeader}`}>
              {item.title}
            </Typography>

            {}
            <img
              src={item.image}
              alt={`${item.title} electric bike`}
              className={classes.section2CardBike}
            />
          </div>

          <div className={classes.cardTextContainerSection2}>
            <Row className={classes.Section2CardRowContainer}>
              <Col xs={4}>
                <Typography className={classes.FeaturesValue}>
                  {item.battery_capacity} Kwh
                </Typography>
                <Typography className={classes.FeaturesLable}>
                  Battery Capacity
                </Typography>
              </Col>
              <Col xs={4}>
                <Typography className={classes.FeaturesValue}>
                  {item.certified_range} Km*
                </Typography>
                <Typography className={classes.FeaturesLable}>
                  Real World Range
                </Typography>
              </Col>
              <Col xs={4}>
                <Typography className={classes.FeaturesValue}>
                  {item.topSpeed} Kmph
                </Typography>
                <Typography className={classes.FeaturesLable}>
                  Top Speed
                </Typography>
              </Col>
            </Row>

            <div className={classes.sectionBtnContainer}>
              <div>
                <Typography className={classes.Section2BtnPrice}>
                  Ex-Showroom
                </Typography>
                <Typography className={classes.Section2BtnPrice}>
                  ₹ {item.price.toLocaleString("en-IN")}
                </Typography>
              </div>
              <Button
                className={classes.Section2Btn}
                variant="contained"
                onClick={() => navigate("/book-now")}
              >
                <span>Order Now</span> <FaArrowRight />
              </Button>
            </div>
          </div>
        </Card>
      </Col>
    ));
  };

  return (
    <div className={classes.Section2Maincontainer}>
      <div className={classes.sliderContainer}>
        <Typography className={`${classes.Section2MainHeader}`}>
          Choose Your <span>Prana</span>
        </Typography>

        <Row className="row-custom-style">{renderCategoryCard()}</Row>
      </div>
    </div>
  );
};

export default Section2;
