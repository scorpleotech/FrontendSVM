import React, { useEffect, useState } from "react";
import classes from "./demoDrive.module.css";
import { Row, Col } from "react-bootstrap";
import {
  Typography,
  Card,
  Button,
  InputAdornment,
  ListItemText,
  TextField,
  MenuItem,
  Select,
  Checkbox,
  Autocomplete,
} from "@mui/material";
import dayjs from "dayjs";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { FaArrowRight } from "react-icons/fa6";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import { DemoPageImageArray } from "../../Utils/dummyConstants";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { IoCalendarOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { debounce } from "lodash";
import CategorySlider from "../../Components/CategorySlider";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import {
  getCategoriesList,
  getStoreList,
  submitTestDrive,
} from "../../Redux/Actions/demoDriveActions";
import AlertBox from "../../Components/AlertBox";
import { Alphabetic, Numeric } from "../../Utils/commonFunctions";
import { useNavigate } from "react-router-dom";
import SuccessModel from "../Booknow/successModal";
import {
  getNewCityList,
  getNewStateList,
} from "../../Redux/Actions/otherActions";

// Import static images
import BikeImage1 from "../../Assets/Images/Elite Choose Color Vehicle Blue.png";
import BikeImage2 from "../../Assets/Images/Grand Choose Color Vehicle Black.png";

// Static images array
const STATIC_IMAGES = [BikeImage1, BikeImage2];

const Section2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [date, setDate] = useState();
  const [dateError, setDateError] = useState(false);
  const [time, setTime] = useState();
  const [timeError, setTimeError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedState, setSelectedState] = useState("select");
  const [stateError, setStateError] = useState(false);
  const [city, setCity] = useState(null);
  const [cityError, setCityError] = useState(false);
  const [dealerHub, setDealerHub] = useState("select");
  const [dealerHubError, setDealerHubError] = useState(false);
  const [acceptTearms, setAcceptTearms] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [defaulErrorAlert, setdefaultErrorAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [defaultCustomErrorMessage, setDefaultCustomErrorMessage] =
    useState("");
  const { error, success, storeList, categoryList } = useSelector(
    (state) => state.demoDriveDatas
  );
  const { oneAccessory, allStates, allCity } = useSelector(
    (state) => state.otherDatas
  );
  const [selectedType, setSelectedType] = useState([categoryList[0]?._id]);
  const [newStoreList, setNewStoreList] = useState([]);

  const handleResetState = () => {
    setSelectedState("select");
    setCity(null);
    setDealerHub("select");
    setDate(null);
    setTime(null);
    setName("");
    setEmail("");
    setMobile("");
    setAcceptTearms(false);
  };

  const closeModal = () => {
    setSuccessMessage(false);
    handleResetState();
  };

  const CloseAlert = () => {
    setErrorAlert(false);
    setSuccessAlert(false);
    setdefaultErrorAlert(false);
    setDefaultCustomErrorMessage("");
  };

  const handleSubmit = () => {
    if (selectedState === "select") {
      setStateError(true);
    }
    if (city === "select") {
      setCityError(true);
    }
    if (dealerHub === "select") {
      setDealerHubError(true);
    }

    if (date === null || date === undefined) {
      setDateError(true);
    }
    if (time === null || time === undefined) {
      setTimeError(true);
    }
    if (selectedType.length === 0) {
      setdefaultErrorAlert(true);
      setDefaultCustomErrorMessage("Please select atleast one type");
    }
    if (
      selectedType.length !== 0 &&
      selectedState !== "select" &&
      city !== "select" &&
      dealerHub !== "select" &&
      date !== null &&
      date !== undefined &&
      time !== null &&
      time !== undefined
    ) {
      console.log(
        `Thank you for booking, your Demo Drive is Scheduled at ${dayjs(
          date.$d
        ).format("DD/MM/YYYY")} ${dayjs(time.$d).format("hh:mm A")}`
      );
      const userEntry = {
        name: name,
        email: email,
        phone: mobile,
        state: selectedState,
        city: city,
        dealer_name: dealerHub,
        booking_date: date,
        booking_time: time,
        model: selectedType[0],
      };
      console.log(userEntry);
      dispatch(submitTestDrive(setErrorAlert, setSuccessMessage, userEntry));
    }
  };

  const handleChangeDate = (newValue) => {
    setDateError(false);
    setDate(newValue);
  };

  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getStoreList(setErrorAlert, "showroom", ""));
    dispatch(getCategoriesList(setErrorAlert));
    dispatch(pageLoader(false));
  }, []);

  const handleChangeTime = (newValue) => {
    setTimeError(false);
    setTime(newValue);
  };

  const handleChangeCheckbox = (value) => {
    setSelectedType([value]);
  };

  const renderCategoryCard = () => {
    if (DemoPageImageArray.length > 0) {
      const ImageBanners = categoryList.map((item, index) => {
        // Use static images cyclically
        const staticImageSrc = STATIC_IMAGES[index % STATIC_IMAGES.length];
        
        return (
          <Card
            className={classes.section2ImageCard}
            onClick={() => handleChangeCheckbox(item._id)}
            key={item._id}
          >
            <img
              src={staticImageSrc}
              alt="elite electric bike demo ride"
              className={classes.section2CardBike}
            />
            <div className={classes.CardBtnContainer}>
              <Typography className={classes.BikeCardHeader}>
                {item.title}
              </Typography>
              <div className="position-relative">
                <span className={classes.Section2BtnIcon}>
                  <FaArrowRight />
                </span>
                <Button
                  variant="outlined"
                  className={`${classes.Section2Btn}`}
                  onClick={() => navigate(`/prana`)}
                >
                  <span>Know More</span>
                </Button>
              </div>
            </div>
            <Checkbox
              icon={<CircleChecked />}
              checkedIcon={<CircleCheckedFilled />}
              checked={selectedType.includes(item._id)}
              className={`${classes.CardCheckbox} ${
                selectedType.includes(item._id)
                  ? classes.CardCheckboxChecked
                  : ""
              }`}
            />
          </Card>
        );
      });
      return ImageBanners;
    } else {
      return [];
    }
  };

  const handleChangeState = (event, val) => {
    setSelectedState(val);
    setCity(null);
    setStateError(false);
    setDealerHub("select");
  };

  const handleCityChange = (event, val) => {
    setCity(val);
    setDealerHub("select");
    setCityError(false);
  };

  const handleDealerHubChange = (event) => {
    setDealerHub(event.target.value);
    setDealerHubError(false);
  };

  useEffect(() => {
    dispatch(getNewStateList(setErrorAlert));
  }, []);

  useEffect(() => {
    if (selectedState !== "" && selectedState != "select") {
      dispatch(getNewCityList(setErrorAlert, selectedState));
    }
  }, [selectedState]);

  useEffect(() => {
    if (
      city !== "" &&
      city != "select" &&
      selectedState !== "" &&
      selectedState != "select"
    ) {
      let default_city = "Coimbatore";
      let default_state = "Tamil Nadu";
      let my_stores = [...storeList];

      let filtered_stores = my_stores.filter(
        (item) =>
          item.state.toLowerCase() === selectedState?.toLowerCase() &&
          item.city.toLowerCase() === city?.toLowerCase()
      );

      if (filtered_stores.length > 0) {
        setNewStoreList(filtered_stores);
      } else {
        let new_filtered_stores = my_stores.filter(
          (item) =>
            item.state.toLowerCase() === default_state?.toLowerCase() &&
            item.city.toLowerCase() === default_city?.toLowerCase()
        );
        setNewStoreList(new_filtered_stores);
      }
    }
  }, [city]);

  return (
    <div className={classes.section2MainContainer}>
      <Typography className={classes.section2HeaderText}>
        Select Model
      </Typography>
      <ValidatorForm
        useref="form"
        onSubmit={handleSubmit}
        className={classes.formInputContainer}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className={classes.ImageSliderCardContainer}>
            <CategorySlider
              renderFunction={renderCategoryCard}
              length={categoryList.length}
            />
          </div>
          <Row className={classes.Section2formRow1}>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Date
              </Typography>
              <DatePicker
                className={`${classes.datePickerInput} ${
                  dateError ? classes.errorBorder : ""
                }`}
                disablePast
                slotProps={{
                  textField: {
                    helperText: dateError ? "Date is Required" : "",
                    style: { color: dateError ? "red" : "inherit" },
                  },
                }}
                slots={{
                  openPickerIcon: IoCalendarOutline,
                }}
                value={date}
                onChange={handleChangeDate}
                required
              />
            </Col>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Time
              </Typography>
              <TimePicker
                className={`${classes.datePickerInput} ${
                  timeError ? classes.errorBorder : ""
                }`}
                slotProps={{
                  textField: {
                    helperText: timeError ? "Time is Required" : "",
                  },
                }}
                slots={{
                  openPickerIcon: BsClock,
                }}
                value={time}
                onChange={handleChangeTime}
                required
                error={timeError}
              />
            </Col>
          </Row>
          <Row className={classes.Section2formRow2}>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Name
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                id="NameInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onKeyPress={(e) => {
                  Alphabetic(e);
                }}
                validators={["required"]}
                errorMessages={["Name is required"]}
              />
            </Col>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Mail
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                id="emailInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                validators={["required", "isEmail"]}
                errorMessages={["Mail is required", "Enter a valid Email"]}
              />
            </Col>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Mobile
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                id="MobileInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                inputProps={{ maxLength: 10 }}
                onKeyPress={(e) => {
                  Numeric(e);
                }}
                validators={["required", "matchRegexp:[0-9]{10}"]}
                errorMessages={[
                  "Mobile Number is required",
                  "Enter a valid Mobile number",
                ]}
              />
            </Col>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                State
              </Typography>
              <Autocomplete
                id="free-solo-demo"
                value={selectedState}
                onChange={(e, val) => handleChangeState(e, val)}
                options={allStates.map((option) => option)}
                renderInput={(params) => (
                  <TextField
                    className={`${classes.NrmlTextInput} autocomplete-book-demo`}
                    {...params}
                    error={cityError}
                    helperText={cityError && "This field is required"}
                  />
                )}
              />
            </Col>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                City
              </Typography>
              <Autocomplete
                id="free-solo-demo"
                value={city}
                onChange={(e, val) => handleCityChange(e, val)}
                options={allCity.map((option) => option.city)}
                renderInput={(params) => (
                  <TextField
                    className={`${classes.NrmlTextInput} autocomplete-book-demo`}
                    {...params}
                    error={cityError}
                    helperText={cityError && "This field is required"}
                  />
                )}
              />
            </Col>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Dealer HUB
              </Typography>
              <TextField
                fullWidth
                value={dealerHub}
                sx={{
                  "& legend": {
                    display: "none",
                  },
                  "& fieldset": {
                    top: 0,
                  },
                  textAlign: "left",
                }}
                select
                size="small"
                onChange={handleDealerHubChange}
                className={
                  city === "select"
                    ? `${classes.TextInput1} ${classes.defaultMenuItem}`
                    : classes.TextInput1
                }
                displayEmpty
                InputLabelProps={{
                  shrink: false,
                }}
                error={dealerHubError}
                helperText={dealerHubError ? "Please Select Dealers Hub" : null}
              >
                <MenuItem disabled value="select" className="position-relative">
                  <em>{""}</em>
                </MenuItem>

                {newStoreList &&
                  newStoreList.length > 0 &&
                  newStoreList.map((item, index) => (
                    <MenuItem key={index} value={item._id}>
                      <ListItemText
                        primary={item.name}
                        className={classes.ListItemText}
                      />
                    </MenuItem>
                  ))}
              </TextField>
            </Col>
          </Row>
          <div className={classes.AcceptTermContainer}>
            <div className="d-flex align-items-center">
              <div className={classes.AcceptTermCheckboxContainer}>
                <Checkbox
                  icon={<CircleChecked />}
                  checkedIcon={<CircleCheckedFilled />}
                  checked={acceptTearms}
                  className={`${classes.AcceptTermCheckbox} ${
                    acceptTearms && classes.checkedAccept
                  }`}
                  onChange={() => setAcceptTearms(!acceptTearms)}
                />
              </div>
              <Typography className={classes.AcceptTermText}>
                Make sure you entered information with which you want to
                purchase & register your SVM Prana Motorcycle.All payment
                related information and other important updates will be shared
                on those contact details only
              </Typography>
            </div>
            <Button
              variant="outlined"
              disabled={!acceptTearms}
              sx={{
                "&.Mui-disabled": {
                  opacity: 0.3,
                },
              }}
              type="submit"
              className={classes.bookDemoBtn}
            >
              Book Demo Drive
            </Button>
          </div>
        </LocalizationProvider>
      </ValidatorForm>
      {errorAlert && error ? (
        <AlertBox type="error" message={error} stateName={CloseAlert} />
      ) : defaulErrorAlert && defaultCustomErrorMessage ? (
        <AlertBox
          type="error"
          message={defaultCustomErrorMessage}
          stateName={CloseAlert}
        />
      ) : null}

      {successMessage && (
        <SuccessModel
          modalClose={closeModal}
          heading={"Booked Successfully"}
          subheading={`Thank you for booking, your Demo Ride is Scheduled at ${dayjs(
            date.$d
          ).format("DD/MM/YYYY")} ${dayjs(time.$d).format("hh:mm A")}`}
        />
      )}
    </div>
  );
};

export default Section2;