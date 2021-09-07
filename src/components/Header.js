import React from "react";
import calendarImg from "../calender.png";

const Header = () => {
  return (
    <>
      <header>
        {/* <img src="./calendar.png" alt="Calendar Star Logo" /> */}
        <img src={calendarImg} alt="Calendar Star Logo" />

        <h1>Eventonica</h1>
      </header>
    </>
  );
};

export default Header;
