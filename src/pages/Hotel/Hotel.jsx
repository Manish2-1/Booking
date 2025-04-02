import "./hotel.css";
import Navbar from "../../components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "/src/assets/images/H1.jpg",
    },
    {
      src: "/src/assets/images/H2.jpg",
    },
    {
      src: "/src/assets/images/H3.jpg",
    },
    {
      src: "/src/assets/images/H4.jpg",
    },
    {
      src: "/src/assets/images/H5.jpg",
    },
    {
      src: "/src/assets/images/H6.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  return (
    <div className={open ? "slider-open" : ""}>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Pokhara Grande</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Birauta Chowk, Pardi Pokhara, 33411 Pokhara, Nepal</span>
          </div>
          <span className="hotelDistance">
            Great Location - 300m from city center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over NPR 12,619 at this property and get a free airport
            pickup
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">
                Get the celebrity treatment with world-class service at Hotel
                Pokhara Grande
              </h1>
              <p className="hotelDesc">
                Hotel Pokhara Grande offers rooms and suites with free Wi-Fi and
                cable TV. Just 8 km from Pokhara Airport, it has 3 dining
                options and an outdoor pool. Lake side is 1.5 km from Hotel
                Pokhara Grande and the property offers free shuttle service to
                and from the hotel. Complimentary airport shuttle service can
                also be arranged with prior notice. The air conditioned rooms
                feature full length windows and wood flooring and furnishings.
                An electric kettle and minibar are included. Certain rooms offer
                mountain views. A variety of massages and body treatments are
                offered at the hotel's spa. Other hotel facilities include a
                fitness centre and business centre. Tibetan food is served at
                Thasang Restaurant, which is opened for lunch and dinner. Guests
                can head to Bagaicha at the poolside for light snacks and
                drinks.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 1-night stay!</h1>
              <span>Top location: Highly rated by recent guests(8.7)</span>
              <h2>
                <b>NPR 12,619</b>(1 night)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <MailList />
      </div>
      <Footer />
    </div>
  );
};

export default Hotel;
