import React from "react";
import classes from "./aboutus.module.css";
import { Typography } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import image1Light from "../../Assets/Images/about and demo/aboutJourney6.png";
import image2SVM from "../../Assets/Images/about and demo/aboutJourney5.png";
import image3ThumbsUp from "../../Assets/Images/about and demo/aboutJourney1.png";
import image4SportBike from "../../Assets/Images/about and demo/aboutJourney3.png";
import image5prana from "../../Assets/Images/about and demo/aboutJourney2.png";
import image6Bike from "../../Assets/Images/about and demo/aboutJourney7.png";
import image7Eco from "../../Assets/Images/about and demo/aboutJourney4.png";
import image8Nasdaq from "../../Assets/Images/about and demo/2023 Icon.png";
import image9Prana from "../../Assets/Images/about and demo/2024 Icon.png";
import image10_2025 from "../../Assets/Images/about and demo/2025 Icon.png";
import image11_2025 from "../../Assets/Images/about and demo/2024 Icon.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 850 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 850, min: 0 },
    items: 1,
  },
};

const Section4 = () => {
  return (
    <div>
      <div className={`${classes.section4Maincontainer}`}>
        <Typography className={classes.section4HeaderText} variant="h1">
          Our Journey
        </Typography>
        <div className={classes.section4SubContainer}>
          <Row className={classes.RowContainer1}>
            <Col lg={2}>
              <div className={classes.ColumnContainer}>
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    Joined Tesla to learn EVs from the source.

                  </Typography>
                </div>
                <div
                  className={`${classes.section4SmallImagesContainer} ${classes.SplContainer1}`}
                >
                  <img
                    src={image1Light}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2012
                  </Typography>
                </div>
              </div>
            </Col>
            <Col lg={2}>
              <div className={classes.ColumnContainer}>
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    Formed SRIVARU to build Prana’s production model.

                  </Typography>
                </div>
                <div className={classes.section4SmallImagesContainer}>
                  <img
                    src={image2SVM}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2018
                  </Typography>
                </div>
              </div>
            </Col>
            <Col lg={2}>
              <div className={classes.ColumnContainer}>
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                   Prana Approved, Unveiled, and On the Road.

                  </Typography>
                </div>
                <div className={classes.section4SmallImagesContainer}>
                  <img
                    src={image3ThumbsUp}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2019
                  </Typography>
                </div>
              </div>
            </Col>
            <Col lg={2}>
              <div className={classes.ColumnContainer}>
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    First Batch Of Vehicle Delivery
                  </Typography>
                </div>
                <div className={classes.section4SmallImagesContainer}>
                  <img
                    src={image4SportBike}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2021
                  </Typography>
                </div>
              </div>
            </Col>
            <Col lg={2}>
              <div className={classes.ColumnContainer}>
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                  Prana 2.0 Unveiled
                </Typography>
                </div>
                <div className={classes.section4SmallImagesContainer}>
                  <img
                    src={image9Prana}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2024
                  </Typography>
                </div>
              </div>
            </Col>
            <Col lg={2}>
              <div className={classes.ColumnContainer}>
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    Prana Class Unveiled
                  </Typography>
                </div>
                <div className={classes.section4SmallImagesContainer}>
                  <img
                    src={image11_2025}
                    alt="2025 milestone 2"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2025
                  </Typography>
                </div>
              </div>
            </Col>
          </Row>
          <div className={classes.section4ColorDividerLine} />
          <Row className={`${classes.RowContainer2}`}>
            <Col lg={{ span: 2, offset: 1 }}>
              <div
                className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
              >
                <div className={classes.section4SmallTextContainer}>
                  <div className={classes.section4SmallTextContainer}>
                    <Typography className={classes.section4SubHeaderText}>
                      Prana's Concept Began
                    </Typography>
                  </div>
                </div>
                <div
                  className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
                >
                  <img
                    src={image5prana}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2014
                  </Typography>
                </div>
              </div>
            </Col>
            <Col lg={2}>
              <div
                className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
              >
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    Prototype Testing
                  </Typography>
                </div>
                <div
                  className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
                >
                  <img
                    src={image6Bike}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2018
                  </Typography>
                </div>
              </div>
            </Col>
            <Col lg={2}>
              <div
                className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
              >
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    Pre-bookings Open & Dealerships Growing
                  </Typography>
                </div>
                <div
                  className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
                >
                  <img
                    src={image7Eco}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2020
                  </Typography>
                </div>
              </div>
            </Col>
            <Col lg={2}>
              <div
                className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
              >
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    Listed in Nasdaq
                  </Typography>
                </div>
                <div
                  className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
                >
                  <img
                    src={image8Nasdaq}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2023
                  </Typography>
                </div>
              </div>
            </Col>
            <Col lg={2}>
              <div
                className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
              >
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    Alive Scooters Unveiled
                  </Typography>
                </div>
                <div
                  className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
                >
                  <img
                    src={image10_2025}
                    alt="2025 milestone 1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2025
                  </Typography>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={classes.MobileResponsiveContainer}>
          <Carousel
            responsive={responsive}
            infinite={true}
            arrows={true}
            className={classes.TimelineCorosel}
          >
            <div className={classes.ColumnContainer}>
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  Joined Tesla to learn EVs from the source.

                </Typography>
              </div>
              <div
                className={`${classes.section4SmallImagesContainer} ${classes.SplContainer1}`}
              >
                <img
                  src={image1Light}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2012
                </Typography>
              </div>
            </div>
            <div
              className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
            >
              <div className={classes.section4SmallTextContainer}>
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    Prana's Concept Began
                  </Typography>
                </div>
              </div>
              <div
                className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
              >
                <img
                  src={image5prana}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2014
                </Typography>
              </div>
            </div>
            <div className={classes.ColumnContainer}>
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                   Formed SRIVARU to build Prana’s production model.

                </Typography>
              </div>
              <div className={classes.section4SmallImagesContainer}>
                <img
                  src={image2SVM}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2018
                </Typography>
              </div>
            </div>
            <div
              className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
            >
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  Prototype Testing
                </Typography>
              </div>
              <div
                className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
              >
                <img
                  src={image6Bike}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2018
                </Typography>
              </div>
            </div>
            <div className={classes.ColumnContainer}>
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  Prana Approved, Unveiled, and On the Road.

                </Typography>
              </div>
              <div className={classes.section4SmallImagesContainer}>
                <img
                  src={image3ThumbsUp}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2019
                </Typography>
              </div>
            </div>
            <div
              className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
            >
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  Pre-bookings Open & Dealerships Growing
                </Typography>
              </div>
              <div
                className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
              >
                <img
                  src={image7Eco}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2020
                </Typography>
              </div>
            </div>
            <div className={classes.ColumnContainer}>
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  First Batch Of Vehicle Delivery
                </Typography>
              </div>
              <div className={classes.section4SmallImagesContainer}>
                <img
                  src={image4SportBike}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2021
                </Typography>
              </div>
            </div>
            <div
              className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
            >
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  Listed in Nasdaq
                </Typography>
              </div>
              <div
                className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
              >
                <img
                  src={image8Nasdaq}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2023
                </Typography>
              </div>
            </div>
            <div className={classes.ColumnContainer}>
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  Prana 2.0 Unveiled
                </Typography>
              </div>
              <div className={classes.section4SmallImagesContainer}>
                <img
                  src={image9Prana}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2024
                </Typography>
              </div>
            </div>
            <div
              className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
            >
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  Alive Scooters Unveiled
                </Typography>
              </div>
              <div
                className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
              >
                <img
                  src={image10_2025}
                  alt="2025 milestone 1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2025
                </Typography>
              </div>
            </div>
            <div className={classes.ColumnContainer}>
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  Prana Class Unveiled
                </Typography>
              </div>
              <div className={classes.section4SmallImagesContainer}>
                <img
                  src={image11_2025}
                  alt="2025 milestone 2"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2025
                </Typography>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Section4;