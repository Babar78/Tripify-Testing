import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./bookingform.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Bookingform() {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerContactNumber, setCustomerContactNumber] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [numberOfAvailableRooms, setNumberOfAvailableRooms] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/getHotelById/${id}`).then((response) => {
      if (response.data.status) {
        const {
          name,
          city,
          country,
          numberOfAvailableRooms,
          numberOfRooms,
          image,
        } = response.data.result;
        setHotelName(name);
        setCity(city);
        setCountry(country);
        setNumberOfAvailableRooms(numberOfAvailableRooms);
        setNumberOfRooms(numberOfRooms);
        setImage(image);
      }
    });
  }, [id]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "customerName") {
      setCustomerName(value);
    } else if (name === "customerEmail") {
      setCustomerEmail(value);
    } else if (name === "customerContactNumber") {
      setCustomerContactNumber(value);
    } else if (name === "roomType") {
      setRoomType(value);
    } else if (name === "arrivalDate") {
      console.log(value);
      setArrivalTime(value);
    } else if (name === "roomNumber") {
      setRoomNumber(value);
    }
  };

  const submitHandler = async () => {
    try {
      const response = await axios.post("http://localhost:8000/addNewBooking", {
        customerName,
        customerEmail,
        customerContactNumber,
        hotelName,
        country,
        city,
        arrivalTime,
        roomType,
        roomNumber,
      });
      if (response.data.status) {
        const hotelResponse = await axios.get(
          `http://localhost:8000/getHotelById/${id}`
        );
        if (hotelResponse.data.status) {
          setNumberOfRooms(hotelResponse.data.result.numberOfRooms);
        }
      }
      alert(response.data.message);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className={`${styles.maincontainer}`}>
        <h1 className={`${styles.heading}`}>Hotel Booking</h1>
      </div>
      <div className={styles.hr}>
        <hr className="w-50 mt-5" />
      </div>
      <div className={`row ${styles.lowercontainer}`}>
        <div className={`col-7 mt-5 ${styles.hoteldetail}`}>
          <h1>Hotel Details</h1>
          <div className="d-flex mt-4 align-items-center text-secondary">
            <p className="p-0 m-0">
              <b>Name:</b>
            </p>
            <p className="p-0 ms-2 my-0">{hotelName}</p>
          </div>
          <div className="d-flex align-items-center text-secondary">
            <p className="p-0 m-0">
              <b>Country:</b>
            </p>
            <p className="p-0 ms-2 my-0">{country}</p>
          </div>
          <div className="d-flex align-items-center text-secondary">
            <p className="p-0 m-0">
              <b>City:</b>
            </p>
            <p className="p-0 ms-2 my-0">{city}</p>
          </div>
          <div className="d-flex align-items-center text-secondary">
            <p className="p-0 m-0">
              <b>Number of Rooms:</b>
            </p>
            <p className="p-0 ms-2 my-0">{numberOfRooms}</p>
          </div>
          <div className="d-flex align-items-center text-secondary">
            <p className="p-0 m-0">
              <b>Number of Available Rooms:</b>
            </p>
            <p className="p-0 ms-2 my-0">{numberOfAvailableRooms}</p>
          </div>

          <div className="row rounded-4">
            <img src={image} alt="" className="rounded-4 p-1" />
          </div>

          <div className={`row d-flex ${styles.imgrow}`}></div>
        </div>
        <div className={`col-5 mt-5 p-4 ${styles.bookform}`}>
          <h1 className="text-center my-5 pt-5">Booking Details</h1>
          <form>
            <div className="row px-4">
              <div className="col">
                <input
                  onChange={changeHandler}
                  type="text"
                  className="form-control"
                  name="customerName"
                  value={customerName}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="col">
                <input
                  onChange={changeHandler}
                  type="email"
                  name="customerEmail"
                  value={customerEmail}
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div className="row mt-4 px-4">
              <div className="col">
                <input
                  onChange={changeHandler}
                  type="text"
                  name="customerContactNumber"
                  value={customerContactNumber}
                  className="form-control"
                  placeholder="Enter Your Contact"
                />
              </div>
              <div className="col">
                <select
                  value={roomType}
                  onChange={changeHandler}
                  className="form-select"
                  aria-label="Default select example"
                  name="roomType"
                >
                  <option value="Single Room">Single Room</option>
                  <option value="Double Room">Double Room</option>
                </select>
              </div>
            </div>
            <div className="row mt-4 px-4">
              <div className="col">
                <label htmlFor="arrivalDate" className="text-dark">
                  <b>Arrival Date</b>
                </label>
                <input
                  onChange={changeHandler}
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="leavingDate" className="text-dark">
                  <b>Room Number</b>
                </label>
                <input
                  value={roomNumber}
                  onChange={changeHandler}
                  type="number"
                  id="leavingDate"
                  name="roomNumber"
                  className="form-control"
                  min="1"
                  max={numberOfRooms}
                />
              </div>
            </div>
            <div className="row mt-4 px-4">
              <div className="col">
                <label htmlFor="paymentMethod" className="text-dark">
                  <b>Payment Method</b>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="paymentMethod"
                  value="CashOnDelivery"
                >
                  <option name="payment method" value="CashOnDelivery">
                    Cash on Delivery
                  </option>
                  <option name="payment method" value="online">
                    Online
                  </option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="onlineMethods" className="text-dark">
                  <b>Select Method</b>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="onlineMethods"
                  value="HBL"
                >
                  <option name="payment method" value="HBL">
                    HBL Bank
                  </option>
                  <option name="payment method" value="JazzCash">
                    JazzCash
                  </option>
                  <option name="payment method" value="EasyPaisa">
                    EasyPaisa
                  </option>
                </select>
              </div>
            </div>
          </form>
          <div className={`mt-3 mx-4 d-flex `}>
            <p className={`text-success`}>
              <b>Charges: </b>
            </p>{" "}
            <p>&nbsp;Rs. 500</p>
          </div>
          <div
            className={`align-items-center justify-content-center d-flex ${styles.submitButton}`}
          >
            <button onClick={submitHandler} className="btn btn-success w-50">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
