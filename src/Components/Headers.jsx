import React from "react";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Headers() {
  const bagStatus = useSelector((store) => store.bag);
  console.log(bagStatus.length, "header");

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
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
          <IoPersonSharp />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaFaceGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <IoBag />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bagStatus.length}</span>
        </Link>
      </div>
    </header>
  );
}
