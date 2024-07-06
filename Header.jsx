import React from "react";
import { IoMdPerson } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsHandbagFill } from "react-icons/bs";

function Header() {
  return (
    <>
      <header>
        <div className="logo_container">
          <a href="#">
            <img
              className="myntra_home"
              src="../public/images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </a>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <IoMdPerson />
            <span className="action_name">Person</span>
          </div>

          <div className="action_container">
            <IoIosHeartEmpty />

            <span className="action_name">Wishlist</span>
          </div>

          <a className="action_container" href="pages/bag.html">
            <BsHandbagFill />

            <span className="action_name">Bag</span>
            <span className="bag-item-count">0</span>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
