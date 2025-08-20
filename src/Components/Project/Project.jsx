import React, { Fragment, useEffect, useState } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import { Link } from "react-router-dom";
import LeftSidebar from "../../Main-Page/MainLeftBar/LeftSidebar";
import bhumi from "../../assets/images/avatar/bhumibazzar.jpg";
import gaurCity from "../../assets/images/post/property/gaur-city.jpg";
import { tns } from "tiny-slider/src/tiny-slider";
import avtar4 from "../../assets/images/avatar/04.jpg";
import RightSidebar from "../../Main-Page/MainRightBar/RightSidebar";

const Project = () => {
  // select one option
  const [selectedBuyOption, setSelectedBuyOption] = useState("Buy");
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [selectedLocality, setSelectedLocality] = useState("Top Localities");
  const [selectedBudget, setSelectedBudget] = useState("Budget");
  const [selectedPropertyType, setSelectedPropertyType] =
    useState("Property Type");
  const [selectedPostedBy, setSelectedPostedBy] = useState("Posted By");

  const updateButtonText = (setterFunction, value) => {
    setterFunction(value);
  };

  // tinny slider
  useEffect(() => {
    document.querySelectorAll(".image-slider-listimg").forEach((slider) => {
      tns({
        container: slider,
        items: 1,
        slideBy: "page",
        autoplay: true,
        autoplayTimeout: 3000, // Speed of autoplay
        autoplayHoverPause: true, // Pause autoplay on hover
        controls: false, // Hide prev/next buttons
        nav: true, // Show navigation dots
        autoplayButtonOutput: false,
        loop: true, // Enable looping
        rewind: true, // Prevent cloning for dots
      });
    });
  }, []);

  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="filter-bar">
                {/* Buy Dropdown */}
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle text-dark-section"
                    id="buyButton"
                    type="button"
                    data-bs-toggle="dropdown"
                    style={{ backgroundColor: "#fff" }}
                  >
                    {selectedBuyOption}{" "}
                  </button>
                  <ul className="dropdown-menu new-dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedBuyOption, "Buy")
                        }
                      >
                        Buy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedBuyOption, "Rent")
                        }
                      >
                        Rent
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedBuyOption, "PG/Hostel")
                        }
                      >
                        PG/Hostel
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Select City Dropdown */}
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle text-dark-section"
                    id="cityButton"
                    type="button"
                    data-bs-toggle="dropdown"
                    style={{ backgroundColor: "#fff" }}
                  >
                    {selectedCity}{" "}
                  </button>
                  <ul className="dropdown-menu new-dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedCity, "Noida")
                        }
                      >
                        Noida
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedCity, "Greater Noida")
                        }
                      >
                        Greater Noida
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedCity, "Delhi")
                        }
                      >
                        Delhi
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedCity, "Ghaziabad")
                        }
                      >
                        Ghaziabad
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Top Localities Dropdown */}
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle text-dark-section"
                    id="localityButton"
                    type="button"
                    data-bs-toggle="dropdown"
                    style={{ backgroundColor: "#fff" }}
                  >
                    {selectedLocality}{" "}
                  </button>
                  <ul className="dropdown-menu new-dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedLocality, "Sector 62")
                        }
                      >
                        Sector 62
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedLocality, "Sector 137")
                        }
                      >
                        Sector 137
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedLocality, "Sector 150")
                        }
                      >
                        Sector 150
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Budget Dropdown */}
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle text-dark-section"
                    id="budgetButton"
                    type="button"
                    data-bs-toggle="dropdown"
                    style={{ backgroundColor: "#fff" }}
                  >
                    {selectedBudget}{" "}
                  </button>
                  <ul className="dropdown-menu new-dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedBudget, "Under 50 L")
                        }
                      >
                        Under 50 L
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedBudget, "50 L - 1 Cr")
                        }
                      >
                        50 L - 1 Cr
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedBudget, "Above 1 Cr")
                        }
                      >
                        Above 1 Cr
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Property Type Dropdown */}
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle text-dark-section"
                    id="propertyTypeButton"
                    type="button"
                    data-bs-toggle="dropdown"
                    style={{ backgroundColor: "#fff" }}
                  >
                    {selectedPropertyType}{" "}
                  </button>
                  <ul className="dropdown-menu new-dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedPropertyType, "Apartment")
                        }
                      >
                        Apartment
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedPropertyType, "Villa")
                        }
                      >
                        Villa
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(
                            setSelectedPropertyType,
                            "Independent House"
                          )
                        }
                      >
                        Independent House
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedPropertyType, "Plot")
                        }
                      >
                        Plot
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Posted By Dropdown */}
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle text-dark-section"
                    id="postedByButton"
                    type="button"
                    data-bs-toggle="dropdown"
                    style={{ backgroundColor: "#fff" }}
                  >
                    {selectedPostedBy}{" "}
                  </button>
                  <ul className="dropdown-menu new-dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedPostedBy, "Owner")
                        }
                      >
                        Owner
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedPostedBy, "Dealer")
                        }
                      >
                        Dealer
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() =>
                          updateButtonText(setSelectedPostedBy, "Builder")
                        }
                      >
                        Builder
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* More Filters Dropdown */}
                <div className="dropdown">
                  <button
                    className="btn btn-dark dropdown-toggle text-dark-section"
                    id="moreFiltersButton"
                    type="button"
                    data-bs-toggle="dropdown"
                    style={{ backgroundColor: "#fff", border: "none" }}
                  >
                    More Filters{" "}
                  </button>
                  <ul className="dropdown-menu new-dropdown-menu">
                    <li>
                      <label className="dropdown-item">
                        <input className="w-auto" type="checkbox" /> Park Facing
                      </label>
                    </li>
                    <li>
                      <label className="dropdown-item">
                        <input type="checkbox" className="w-auto" /> Pool View
                      </label>
                    </li>
                    <li>
                      <label className="dropdown-item">
                        <input type="checkbox" className="w-auto" /> Furnished
                      </label>
                    </li>
                    <li>
                      <label className="dropdown-item">
                        <input type="checkbox" className="w-auto" /> Near Metro
                      </label>
                    </li>
                    <li>
                      <label className="dropdown-item">
                        <input type="checkbox" className="w-auto" /> Gated
                        Society
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-2 justify-content-center d-flex">
              <div className="apply-filter-bttn-section w-100">
                <button className="w-100 btn btn-sm btn-danger-soft">
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <LeftSidebar />
            <div className="col-lg-6">
              <div className="card bg-mode  p-3  border-design-sect-listing">
                <div className="row g-3 ">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-story me-2">
                        <Link to="#!">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src={bhumi}
                            alt=""
                          />{" "}
                        </Link>
                      </div>
                      {/* Info */}
                      <div>
                        <div className="nav nav-divider">
                          <h6 className="nav-item card-title mb-0">
                            {" "}
                            <Link to="#!">Mahipal Chaudhary </Link>
                          </h6>
                          <span className="nav-item small"> 2hr</span>
                        </div>
                        <p className="mb-0 small"> JSR Consultants</p>
                      </div>
                    </div>
                    {/* Card feed action dropdown START */}
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                        id="cardFeedAction"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card feed action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardFeedAction"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bookmark fa-fw pe-2" />
                            Save post
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-person-x fa-fw pe-2" />
                            Unfollow lori ferguson{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-x-circle fa-fw pe-2" />
                            Hide post
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-slash-circle fa-fw pe-2" />
                            Block
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-flag fa-fw pe-2" />
                            Report post
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Card feed action dropdown END */}
                  </div>
                  <div className="col-lg-12 position-relative">
                    {/* Blog image slider */}
                    <div id="new-tinny-slider-section">
                      <div className="image-slider-listimg">
                        <div>
                          <Link to="/project-detail">
                            <img className="rounded" src={gaurCity} alt="" />
                          </Link>
                        </div>
                        <div>
                          <Link to="/project-detail">
                            <img className="rounded" src={gaurCity} alt="" />
                          </Link>
                        </div>
                        <div>
                          <Link to="/project-detail">
                            <img className="rounded" src={gaurCity} alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="position-absolute"
                      style={{ left: 10, top: 10 }}
                    >
                      <button
                        className="btn btn-sm  bg-white "
                        style={{
                          color: "#d6293e",
                          border: "1px solid #d6293e",
                          padding: "5px 10px",
                          borderRadius: "28PX",
                        }}
                      >
                        Few left
                      </button>
                    </div>
                    <div
                      className="position-absolute"
                      style={{ right: 10, top: 10 }}
                    >
                      <i className="bi bi-heart   listin-icon-sec" />
                    </div>
                  </div>
                  <div className="col-lg-12 ">
                    {/* Blog caption */}
                    <div className=" row justify-content-between ">
                      <div className="col-sm-12">
                        <div className="new-listing-bttn-section d-flex gap-2">
                          <button className="btn btn-sm btn-primary-soft w-100">
                            <div
                              className="avatar"
                              style={{ width: 20, height: 20 }}
                            >
                              <Link to="#!">
                                <img
                                  className="avatar-img rounded-circle"
                                  src={avtar4}
                                  alt=""
                                />
                              </Link>
                            </div>{" "}
                            Supertech
                          </button>
                          <button className="btn btn-sm btn-primary-soft w-100">
                            Supertech Eco Village II
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div
                        className="col-4 "
                        style={{ borderRight: "1px solid #676A79" }}
                      >
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">
                            Residential
                          </h5>
                          <p className="mb-0 small">4 Towers</p>
                          <p className="mb-0 small">Start at 7200 sqft</p>
                        </div>
                      </div>
                      <div
                        className="col-4 "
                        style={{ borderRight: "1px solid #676A79" }}
                      >
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">
                            Commercial
                          </h5>
                          <p className="mb-0 small">60 Units</p>
                          <p className="mb-0 small">Start at 9000 sqft</p>
                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">Retail</h5>
                          <p className="mb-0 small">32 Units</p>
                          <p className="mb-0 small">Start at 18000 sqft</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="d-flex justify-content-between align-items-center my-3 new-listing-flex-coloumn-sec">
                        <div className="d-flex gap-3">
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Ready to move</span>
                          </div>
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Under Construction</span>
                          </div>
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Pre Launch</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-mode mt-4  p-3  border-design-sect-listing">
                <div className="row g-3 ">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-story me-2">
                        <Link to="#!">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src={bhumi}
                            alt=""
                          />{" "}
                        </Link>
                      </div>
                      {/* Info */}
                      <div>
                        <div className="nav nav-divider">
                          <h6 className="nav-item card-title mb-0">
                            {" "}
                            <Link to="#!">Mahipal Chaudhary </Link>
                          </h6>
                          <span className="nav-item small"> 2hr</span>
                        </div>
                        <p className="mb-0 small"> JSR Consultants</p>
                      </div>
                    </div>
                    {/* Card feed action dropdown START */}
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                        id="cardFeedAction"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card feed action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardFeedAction"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bookmark fa-fw pe-2" />
                            Save post
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-person-x fa-fw pe-2" />
                            Unfollow lori ferguson{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-x-circle fa-fw pe-2" />
                            Hide post
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-slash-circle fa-fw pe-2" />
                            Block
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-flag fa-fw pe-2" />
                            Report post
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Card feed action dropdown END */}
                  </div>
                  <div className="col-lg-12 ">
                    {/* Blog caption */}
                    <div className=" row justify-content-between ">
                      <div className="col-sm-12">
                        <div className="new-listing-bttn-section d-flex gap-2">
                          <button className="btn btn-sm btn-primary-soft w-100">
                            <div
                              className="avatar"
                              style={{ width: 20, height: 20 }}
                            >
                              <Link to="#!">
                                <img
                                  className="avatar-img rounded-circle"
                                  src={avtar4}
                                  alt=""
                                />
                              </Link>
                            </div>
                            Supertech
                          </button>
                          <button className="btn btn-sm btn-primary-soft w-100">
                            Supertech Eco Village II
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div
                        className="col-4 "
                        style={{ borderRight: "1px solid #676A79" }}
                      >
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">
                            Residential
                          </h5>
                          <p className="mb-0 small">4 Towers</p>
                          <p className="mb-0 small">Start at 7200 sqft</p>
                        </div>
                      </div>
                      <div
                        className="col-4 "
                        style={{ borderRight: "1px solid #676A79" }}
                      >
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">
                            Commercial
                          </h5>
                          <p className="mb-0 small">60 Units</p>
                          <p className="mb-0 small">Start at 9000 sqft</p>
                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">Retail</h5>
                          <p className="mb-0 small">32 Units</p>
                          <p className="mb-0 small">Start at 18000 sqft</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="d-flex justify-content-between align-items-center my-3 new-listing-flex-coloumn-sec">
                        <div className="d-flex gap-3">
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Ready to move</span>
                          </div>
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Under Construction</span>
                          </div>
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Pre Launch</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-mode mt-4 p-3  border-design-sect-listing">
                <div className="row g-3 ">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-story me-2">
                        <Link to="#!">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src={bhumi}
                            alt=""
                          />{" "}
                        </Link>
                      </div>
                      {/* Info */}
                      <div>
                        <div className="nav nav-divider">
                          <h6 className="nav-item card-title mb-0">
                            {" "}
                            <Link to="#!">Mahipal Chaudhary </Link>
                          </h6>
                          <span className="nav-item small"> 2hr</span>
                        </div>
                        <p className="mb-0 small"> JSR Consultants</p>
                      </div>
                    </div>
                    {/* Card feed action dropdown START */}
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                        id="cardFeedAction"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card feed action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardFeedAction"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bookmark fa-fw pe-2" />
                            Save post
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-person-x fa-fw pe-2" />
                            Unfollow lori ferguson{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-x-circle fa-fw pe-2" />
                            Hide post
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-slash-circle fa-fw pe-2" />
                            Block
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-flag fa-fw pe-2" />
                            Report post
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Card feed action dropdown END */}
                  </div>
                  <div className="col-lg-12 position-relative">
                    {/* Blog image slider */}
                    <div id="new-tinny-slider-section">
                      <div className="image-slider-listimg">
                        <div>
                          <Link to="/project-detail">
                            <img className="rounded" src={gaurCity} alt="" />
                          </Link>
                        </div>
                        <div>
                          <Link to="/project-detail">
                            <img className="rounded" src={gaurCity} alt="" />
                          </Link>
                        </div>
                        <div>
                          <Link to="/project-detail">
                            <img className="rounded" src={gaurCity} alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="position-absolute"
                      style={{ left: 10, top: 10 }}
                    >
                      <button
                        className="btn btn-sm  bg-white "
                        style={{
                          color: "#d6293e",
                          border: "1px solid #d6293e",
                          padding: "5px 10px",
                          borderRadius: "28PX",
                        }}
                      >
                        Few left
                      </button>
                    </div>
                    <div
                      className="position-absolute"
                      style={{ right: 10, top: 10 }}
                    >
                      <i className="bi bi-heart   listin-icon-sec" />
                    </div>
                  </div>
                  <div className="col-lg-12 ">
                    {/* Blog caption */}
                    <div className=" row justify-content-between ">
                      <div className="col-sm-12">
                        <div className="new-listing-bttn-section d-flex gap-2">
                          <button className="btn btn-sm btn-primary-soft w-100">
                            <div
                              className="avatar"
                              style={{ width: 20, height: 20 }}
                            >
                              <Link to="#!">
                                <img
                                  className="avatar-img rounded-circle"
                                  src={avtar4}
                                  alt=""
                                />
                              </Link>
                            </div>{" "}
                            Supertech
                          </button>
                          <button className="btn btn-sm btn-primary-soft w-100">
                            Supertech Eco Village II
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div
                        className="col-4 "
                        style={{ borderRight: "1px solid #676A79" }}
                      >
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">
                            Residential
                          </h5>
                          <p className="mb-0 small">4 Towers</p>
                          <p className="mb-0 small">Start at 7200 sqft</p>
                        </div>
                      </div>
                      <div
                        className="col-4 "
                        style={{ borderRight: "1px solid #676A79" }}
                      >
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">
                            Commercial
                          </h5>
                          <p className="mb-0 small">60 Units</p>
                          <p className="mb-0 small">Start at 9000 sqft</p>
                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">Retail</h5>
                          <p className="mb-0 small">32 Units</p>
                          <p className="mb-0 small">Start at 18000 sqft</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="d-flex justify-content-between align-items-center my-3 new-listing-flex-coloumn-sec">
                        <div className="d-flex gap-3">
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Ready to move</span>
                          </div>
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Under Construction</span>
                          </div>
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Pre Launch</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-mode mt-4  p-3  border-design-sect-listing">
                <div className="row g-3 ">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-story me-2">
                        <Link to="#!">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src={bhumi}
                            alt=""
                          />{" "}
                        </Link>
                      </div>
                      {/* Info */}
                      <div>
                        <div className="nav nav-divider">
                          <h6 className="nav-item card-title mb-0">
                            {" "}
                            <Link to="#!">Mahipal Chaudhary </Link>
                          </h6>
                          <span className="nav-item small"> 2hr</span>
                        </div>
                        <p className="mb-0 small"> JSR Consultants</p>
                      </div>
                    </div>
                    {/* Card feed action dropdown START */}
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                        id="cardFeedAction"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card feed action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardFeedAction"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bookmark fa-fw pe-2" />
                            Save post
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-person-x fa-fw pe-2" />
                            Unfollow lori ferguson{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-x-circle fa-fw pe-2" />
                            Hide post
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-slash-circle fa-fw pe-2" />
                            Block
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-flag fa-fw pe-2" />
                            Report post
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Card feed action dropdown END */}
                  </div>
                  <div className="col-lg-12 ">
                    {/* Blog caption */}
                    <div className=" row justify-content-between ">
                      <div className="col-sm-12">
                        <div className="new-listing-bttn-section d-flex gap-2">
                          <button className="btn btn-sm btn-primary-soft w-100">
                            <div
                              className="avatar"
                              style={{ width: 20, height: 20 }}
                            >
                              <Link to="#!">
                                <img
                                  className="avatar-img rounded-circle"
                                  src={avtar4}
                                  alt=""
                                />
                              </Link>
                            </div>
                            Supertech
                          </button>
                          <button className="btn btn-sm btn-primary-soft w-100">
                            Supertech Eco Village II
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div
                        className="col-4 "
                        style={{ borderRight: "1px solid #676A79" }}
                      >
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">
                            Residential
                          </h5>
                          <p className="mb-0 small">4 Towers</p>
                          <p className="mb-0 small">Start at 7200 sqft</p>
                        </div>
                      </div>
                      <div
                        className="col-4 "
                        style={{ borderRight: "1px solid #676A79" }}
                      >
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">
                            Commercial
                          </h5>
                          <p className="mb-0 small">60 Units</p>
                          <p className="mb-0 small">Start at 9000 sqft</p>
                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">Retail</h5>
                          <p className="mb-0 small">32 Units</p>
                          <p className="mb-0 small">Start at 18000 sqft</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="d-flex justify-content-between align-items-center my-3 new-listing-flex-coloumn-sec">
                        <div className="d-flex gap-3">
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Ready to move</span>
                          </div>
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Under Construction</span>
                          </div>
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Pre Launch</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-mode mt-4 p-3  border-design-sect-listing">
                <div className="row g-3 ">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-story me-2">
                        <Link to="#!">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src={bhumi}
                            alt=""
                          />{" "}
                        </Link>
                      </div>
                      {/* Info */}
                      <div>
                        <div className="nav nav-divider">
                          <h6 className="nav-item card-title mb-0">
                            {" "}
                            <Link to="#!">Mahipal Chaudhary </Link>
                          </h6>
                          <span className="nav-item small"> 2hr</span>
                        </div>
                        <p className="mb-0 small"> JSR Consultants</p>
                      </div>
                    </div>
                    {/* Card feed action dropdown START */}
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                        id="cardFeedAction"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card feed action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardFeedAction"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bookmark fa-fw pe-2" />
                            Save post
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-person-x fa-fw pe-2" />
                            Unfollow lori ferguson{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-x-circle fa-fw pe-2" />
                            Hide post
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-slash-circle fa-fw pe-2" />
                            Block
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-flag fa-fw pe-2" />
                            Report post
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Card feed action dropdown END */}
                  </div>
                  <div className="col-lg-12 position-relative">
                    {/* Blog image slider */}
                    <div id="new-tinny-slider-section">
                      <div className="image-slider-listimg">
                        <div>
                          <Link to="/project-detail">
                            <img className="rounded" src={gaurCity} alt="" />
                          </Link>
                        </div>
                        <div>
                          <Link to="/project-detail">
                            <img className="rounded" src={gaurCity} alt="" />
                          </Link>
                        </div>
                        <div>
                          <Link to="/project-detail">
                            <img className="rounded" src={gaurCity} alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="position-absolute"
                      style={{ left: 10, top: 10 }}
                    >
                      <button
                        className="btn btn-sm  bg-white "
                        style={{
                          color: "#d6293e",
                          border: "1px solid #d6293e",
                          padding: "5px 10px",
                          borderRadius: "28PX",
                        }}
                      >
                        Few left
                      </button>
                    </div>
                    <div
                      className="position-absolute"
                      style={{ right: 10, top: 10 }}
                    >
                      <i className="bi bi-heart   listin-icon-sec" />
                    </div>
                  </div>
                  <div className="col-lg-12 ">
                    {/* Blog caption */}
                    <div className=" row justify-content-between ">
                      <div className="col-sm-12">
                        <div className="new-listing-bttn-section d-flex gap-2">
                          <button className="btn btn-sm btn-primary-soft w-100">
                            <div
                              className="avatar"
                              style={{ width: 20, height: 20 }}
                            >
                              <Link to="#!">
                                <img
                                  className="avatar-img rounded-circle"
                                  src={avtar4}
                                  alt=""
                                />
                              </Link>
                            </div>{" "}
                            Supertech
                          </button>
                          <button className="btn btn-sm btn-primary-soft w-100">
                            Supertech Eco Village II
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div
                        className="col-4 "
                        style={{ borderRight: "1px solid #676A79" }}
                      >
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">
                            Residential
                          </h5>
                          <p className="mb-0 small">4 Towers</p>
                          <p className="mb-0 small">Start at 7200 sqft</p>
                        </div>
                      </div>
                      <div
                        className="col-4 "
                        style={{ borderRight: "1px solid #676A79" }}
                      >
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">
                            Commercial
                          </h5>
                          <p className="mb-0 small">60 Units</p>
                          <p className="mb-0 small">Start at 9000 sqft</p>
                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">Retail</h5>
                          <p className="mb-0 small">32 Units</p>
                          <p className="mb-0 small">Start at 18000 sqft</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="d-flex justify-content-between align-items-center my-3 new-listing-flex-coloumn-sec">
                        <div className="d-flex gap-3">
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Ready to move</span>
                          </div>
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Under Construction</span>
                          </div>
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Pre Launch</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-mode mt-4  p-3  border-design-sect-listing">
                <div className="row g-3 ">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-story me-2">
                        <Link to="#!">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src={bhumi}
                            alt=""
                          />{" "}
                        </Link>
                      </div>
                      {/* Info */}
                      <div>
                        <div className="nav nav-divider">
                          <h6 className="nav-item card-title mb-0">
                            {" "}
                            <Link to="#!">Mahipal Chaudhary </Link>
                          </h6>
                          <span className="nav-item small"> 2hr</span>
                        </div>
                        <p className="mb-0 small"> JSR Consultants</p>
                      </div>
                    </div>
                    {/* Card feed action dropdown START */}
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                        id="cardFeedAction"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card feed action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardFeedAction"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bookmark fa-fw pe-2" />
                            Save post
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-person-x fa-fw pe-2" />
                            Unfollow lori ferguson{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-x-circle fa-fw pe-2" />
                            Hide post
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-slash-circle fa-fw pe-2" />
                            Block
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-flag fa-fw pe-2" />
                            Report post
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Card feed action dropdown END */}
                  </div>
                  <div className="col-lg-12 ">
                    {/* Blog caption */}
                    <div className=" row justify-content-between ">
                      <div className="col-sm-12">
                        <div className="new-listing-bttn-section d-flex gap-2">
                          <button className="btn btn-sm btn-primary-soft w-100">
                            <div
                              className="avatar"
                              style={{ width: 20, height: 20 }}
                            >
                              <Link to="#!">
                                <img
                                  className="avatar-img rounded-circle"
                                  src={avtar4}
                                  alt=""
                                />
                              </Link>
                            </div>
                            Supertech
                          </button>
                          <button className="btn btn-sm btn-primary-soft w-100">
                            Supertech Eco Village II
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div
                        className="col-4 "
                        style={{ borderRight: "1px solid #676A79" }}
                      >
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">
                            Residential
                          </h5>
                          <p className="mb-0 small">4 Towers</p>
                          <p className="mb-0 small">Start at 7200 sqft</p>
                        </div>
                      </div>
                      <div
                        className="col-4 "
                        style={{ borderRight: "1px solid #676A79" }}
                      >
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">
                            Commercial
                          </h5>
                          <p className="mb-0 small">60 Units</p>
                          <p className="mb-0 small">Start at 9000 sqft</p>
                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="text-center">
                          <h5 className="mb-0 card-title fw-normal">Retail</h5>
                          <p className="mb-0 small">32 Units</p>
                          <p className="mb-0 small">Start at 18000 sqft</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="d-flex justify-content-between align-items-center my-3 new-listing-flex-coloumn-sec">
                        <div className="d-flex gap-3">
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Ready to move</span>
                          </div>
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Under Construction</span>
                          </div>
                          <div>
                            <i className="bi bi-bell-fill" />
                            <span className="small"> Pre Launch</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <RightSidebar />
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Project;
