import React, { Fragment, useEffect, useState } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import LeftSidebar from "../../Main-Page/MainLeftBar/LeftSidebar";
import RightSidebar from "../../Main-Page/MainRightBar/RightSidebar";
import { Link } from "react-router-dom";
import gaurCity from "../../assets/images/post/property/gaur-city.jpg";
import greenNoida from "../../assets/images/post/property/jaypee-green-noida-residential-space-500x500.webp";
import avtar11 from "../../assets/images/avatar/11.jpg";
import Slider from "react-slick";
const RequirmentMatch = () => {
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
    // slider
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      };
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
            <div className="card bg-mode p-3 border-design-sect-listing">
              <div className="row g-3">
                <div className="col-lg-12 position-relative">
                  <Slider {...settings}>
                    <div>
                      <Link to="/property-detail">
                        <img
                          className="rounded"
                          src={gaurCity}
                          alt="Property 1"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link to="/property-detail">
                        <img
                          className="rounded"
                          src={gaurCity}
                          alt="Property 2"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link to="/property-detail">
                        <img
                          className="rounded"
                          src={gaurCity}
                          alt="Property 3"
                        />
                      </Link>
                    </div>
                  </Slider>
                  <div
                    className="position-absolute"
                    style={{ left: 10, top: 10 }}
                  >
                    <button
                      className="btn btn-sm bg-white"
                      style={{
                        color: "#d6293e",
                        border: "1px solid #d6293e",
                        padding: "5px 10px",
                        borderRadius: "28px",
                      }}
                    >
                      Few left
                    </button>
                  </div>
                  <div
                    className="position-absolute"
                    style={{ right: 10, top: 10 }}
                  >
                    <i className="bi bi-heart listin-icon-sec"></i>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="row justify-content-between position-relative">
                    <div className="col-sm-6">
                      <div className="new-listing-bttn-section">
                        <button className="btn btn-sm btn-primary-soft">
                          Sell
                        </button>{" "}
                        <button className="btn btn-sm btn-primary-soft">
                          Buy
                        </button>{" "}
                        <button className="btn btn-sm btn-danger-soft">
                          Urgent
                        </button>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-0">Jaypee Kosmos</h6>
                        <p className="mb-0 small">Posted 3 Days ago</p>
                      </div>
                    </div>
                    <div className="col-sm-6 mt-sm-0 mt-3">
                      <div className="d-flex justify-content-sm-end gap-2">
                        <div>
                          <h6 className="mb-0">Mahipal Chaudhary</h6>
                          <p className="mb-0 small">JSR Consultants</p>
                        </div>
                        <div className="avatar">
                          <Link to="#">
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar11}
                              alt="Avatar"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="avatar p-0"
                      style={{
                        transform: "translate(-50%,-50%)",
                        position: "absolute",
                        top: "30%",
                        left: "50%",
                      }}
                    >
                      <Link to="#">
                        <img
                          className="avatar-img rounded-circle"
                          src={greenNoida}
                          alt="Green Noida"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div
                      className="col-4"
                      style={{ borderRight: "1px solid #676A79" }}
                    >
                      <div className="text-center">
                        <h5 className="mb-0 card-title">3 BHK</h5>
                        <p className="mb-0 small">Sector 64, Noida</p>
                      </div>
                    </div>
                    <div
                      className="col-4"
                      style={{ borderRight: "1px solid #676A79" }}
                    >
                      <div className="text-center">
                        <h5 className="mb-0 card-title">8000 sqft</h5>
                        <p className="mb-0 small">Super Area</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-center">
                        <h5 className="mb-0 card-title">₹ 10.32 Cr</h5>
                        <p className="mb-0 small">₹ 40,000/sqft</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="d-flex justify-content-between align-items-center my-3 new-listing-flex-coloumn-sec">
                      <div className="d-flex gap-3">
                        <div>
                          <i className="fa-solid fa-bed"></i>
                          <span className="small"> 3 Beds</span>
                        </div>
                        <div>
                          <i className="fa-solid fa-bath"></i>
                          <span className="small"> 2 Baths</span>
                        </div>
                        <div>
                          <i className="fa-solid fa-car"></i>
                          <span className="small"> 4 Parking</span>
                        </div>
                      </div>
                      <div className="new-listing-bttn-section text-end">
                        <button className="btn btn-sm btn-success-soft">
                          File in Hand
                        </button>{" "}
                        <button className="btn btn-sm btn-success-soft">
                          Exchange
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <Link className="nav-link mb-0" to="messaging.html">
                        <i className="bi bi-chat-left-text-fill fs-6"></i>{" "}
                        chat
                      </Link>
                      <li
                        className="nav-item dropdown ms-sm-auto"
                        style={{ listStyle: "none" }}
                      >
                         <Link
                          className="nav-link mb-0"
                          to="#"
                          id="cardShareAction"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-reply-fill flip-horizontal ps-1" />
                          Share
                        </Link>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardShareAction"
                        >
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-envelope fa-fw pe-2"></i>{" "}
                              Send via Direct Message
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-bookmark-check fa-fw pe-2"></i>{" "}
                              Bookmark
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-link fa-fw pe-2"></i> Copy
                              link to post
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-share fa-fw pe-2"></i> Share
                              post via …
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-pencil-square fa-fw pe-2"></i>{" "}
                              Share to News Feed
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-mode mt-4  p-3  border-design-sect-listing">
              <div className="row g-3 ">
                <div className="position-relative col-12 mb-5">
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
                  <div className=" row justify-content-between position-relative">
                    <div className="col-sm-6">
                      <div className="new-listing-bttn-section">
                        <button className="btn btn-sm btn-primary-soft">
                          Sell
                        </button>{" "}
                        <button className="btn btn-sm btn-primary-soft">
                          Buy
                        </button>{" "}
                        <button className="btn btn-sm btn-danger-soft">
                          Urgent
                        </button>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-0">Jaypee Kosmos </h6>
                        <p className="mb-0 small">Posted 3 DAy ago</p>
                      </div>
                    </div>
                    <div className="col-sm-6 mt-sm-0 mt-3">
                      <div className="d-flex justify-content-sm-end gap-2">
                        <div>
                          <h6 className="mb-0">Mahipal Chaudhary</h6>
                          <p className="mb-0 small">JSR Consultants</p>
                        </div>
                        <div className="avatar">
                          <Link to="#">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar11}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="avatar p-0"
                      style={{
                        transform: "translate(-50%,-50%)",
                        position: "absolute",
                        top: "30%",
                        left: "50%",
                      }}
                    >
                      <Link to="#">
                        {" "}
                        <img
                          className="avatar-img rounded-circle"
                          src={greenNoida}
                          alt=""
                        />{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div
                      className="col-4 "
                      style={{ borderRight: "1px solid #676A79" }}
                    >
                      <div className="text-center">
                        <h5 className="mb-0 card-title">3 BHK</h5>
                        <p className="mb-0 small">Sector 64, Noida</p>
                      </div>
                    </div>
                    <div
                      className="col-4 "
                      style={{ borderRight: "1px solid #676A79" }}
                    >
                      <div className="text-center">
                        <h5 className="mb-0 card-title">8000 sqft</h5>
                        <p className="mb-0 small">Super Area</p>
                      </div>
                    </div>
                    <div className="col-4 ">
                      <div className="text-center">
                        <h5 className="mb-0 card-title">₹ 10.32 Cr</h5>
                        <p className="mb-0 small">₹ 40,000/sqft</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex justify-content-between align-items-center my-3 new-listing-flex-coloumn-sec">
                      <div className="d-flex gap-3">
                        <div>
                          <i className="fa-solid fa-bed" />
                          <span className="small"> 3 Beds</span>
                        </div>
                        <div>
                          <i className="fa-solid fa-bath" />
                          <span className="small"> 2 Baths</span>
                        </div>
                        <div>
                          <i className="fa-solid fa-car" />
                          <span className="small"> 4 Parking</span>
                        </div>
                      </div>
                      <div className="new-listing-bttn-section text-end">
                        <button className="btn btn-sm btn-success-soft">
                          File in Hand
                        </button>{" "}
                        <button className="btn btn-sm btn-success-soft">
                          Exchange
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <Link className="nav-link mb-0" to="messaging.html">
                        <i className="bi bi-chat-left-text-fill fs-6"> </i>{" "}
                        chat
                      </Link>
                      <li
                        className="nav-item dropdown ms-sm-auto"
                        style={{ listStyle: "none" }}
                      >
                        <Link
                          className="nav-link mb-0"
                          to="#"
                          id="cardShareAction"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-reply-fill flip-horizontal ps-1" />
                          Share
                        </Link>
                        {/* Card share action dropdown menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardShareAction"
                        >
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-envelope fa-fw pe-2" />
                              Send via Direct Message
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-bookmark-check fa-fw pe-2" />
                              Bookmark{" "}
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-link fa-fw pe-2" />
                              Copy link to post
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-share fa-fw pe-2" />
                              Share post via …
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-pencil-square fa-fw pe-2" />
                              Share to News Feed
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-mode mt-4 p-3 border-design-sect-listing">
              <div className="row g-3">
                <div className="col-lg-12 position-relative">
                  <Slider {...settings}>
                    <div>
                      <Link to="/property-detail">
                        <img
                          className="rounded"
                          src={gaurCity}
                          alt="Property 1"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link to="/property-detail">
                        <img
                          className="rounded"
                          src={gaurCity}
                          alt="Property 2"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link to="/property-detail">
                        <img
                          className="rounded"
                          src={gaurCity}
                          alt="Property 3"
                        />
                      </Link>
                    </div>
                  </Slider>
                  <div
                    className="position-absolute"
                    style={{ left: 10, top: 10 }}
                  >
                    <button
                      className="btn btn-sm bg-white"
                      style={{
                        color: "#d6293e",
                        border: "1px solid #d6293e",
                        padding: "5px 10px",
                        borderRadius: "28px",
                      }}
                    >
                      Few left
                    </button>
                  </div>
                  <div
                    className="position-absolute"
                    style={{ right: 10, top: 10 }}
                  >
                    <i className="bi bi-heart listin-icon-sec"></i>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="row justify-content-between position-relative">
                    <div className="col-sm-6">
                      <div className="new-listing-bttn-section">
                        <button className="btn btn-sm btn-primary-soft">
                          Sell
                        </button>{" "}
                        <button className="btn btn-sm btn-primary-soft">
                          Buy
                        </button>{" "}
                        <button className="btn btn-sm btn-danger-soft">
                          Urgent
                        </button>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-0">Jaypee Kosmos</h6>
                        <p className="mb-0 small">Posted 3 Days ago</p>
                      </div>
                    </div>
                    <div className="col-sm-6 mt-sm-0 mt-3">
                      <div className="d-flex justify-content-sm-end gap-2">
                        <div>
                          <h6 className="mb-0">Mahipal Chaudhary</h6>
                          <p className="mb-0 small">JSR Consultants</p>
                        </div>
                        <div className="avatar">
                          <Link to="#">
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar11}
                              alt="Avatar"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="avatar p-0"
                      style={{
                        transform: "translate(-50%,-50%)",
                        position: "absolute",
                        top: "30%",
                        left: "50%",
                      }}
                    >
                      <Link to="#">
                        <img
                          className="avatar-img rounded-circle"
                          src={greenNoida}
                          alt="Green Noida"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div
                      className="col-4"
                      style={{ borderRight: "1px solid #676A79" }}
                    >
                      <div className="text-center">
                        <h5 className="mb-0 card-title">3 BHK</h5>
                        <p className="mb-0 small">Sector 64, Noida</p>
                      </div>
                    </div>
                    <div
                      className="col-4"
                      style={{ borderRight: "1px solid #676A79" }}
                    >
                      <div className="text-center">
                        <h5 className="mb-0 card-title">8000 sqft</h5>
                        <p className="mb-0 small">Super Area</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-center">
                        <h5 className="mb-0 card-title">₹ 10.32 Cr</h5>
                        <p className="mb-0 small">₹ 40,000/sqft</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="d-flex justify-content-between align-items-center my-3 new-listing-flex-coloumn-sec">
                      <div className="d-flex gap-3">
                        <div>
                          <i className="fa-solid fa-bed"></i>
                          <span className="small"> 3 Beds</span>
                        </div>
                        <div>
                          <i className="fa-solid fa-bath"></i>
                          <span className="small"> 2 Baths</span>
                        </div>
                        <div>
                          <i className="fa-solid fa-car"></i>
                          <span className="small"> 4 Parking</span>
                        </div>
                      </div>
                      <div className="new-listing-bttn-section text-end">
                        <button className="btn btn-sm btn-success-soft">
                          File in Hand
                        </button>{" "}
                        <button className="btn btn-sm btn-success-soft">
                          Exchange
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <Link className="nav-link mb-0" to="messaging.html">
                        <i className="bi bi-chat-left-text-fill fs-6"></i>{" "}
                        chat
                      </Link>
                      <li
                        className="nav-item dropdown ms-sm-auto"
                        style={{ listStyle: "none" }}
                      >
                         <Link
                          className="nav-link mb-0"
                          to="#"
                          id="cardShareAction"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-reply-fill flip-horizontal ps-1" />
                          Share
                        </Link>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardShareAction"
                        >
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-envelope fa-fw pe-2"></i>{" "}
                              Send via Direct Message
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-bookmark-check fa-fw pe-2"></i>{" "}
                              Bookmark
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-link fa-fw pe-2"></i> Copy
                              link to post
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-share fa-fw pe-2"></i> Share
                              post via …
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="bi bi-pencil-square fa-fw pe-2"></i>{" "}
                              Share to News Feed
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-mode mt-4  p-3  border-design-sect-listing">
              <div className="row g-3 ">
                <div className="position-relative col-12 mb-5">
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
                  <div className=" row justify-content-between position-relative">
                    <div className="col-sm-6">
                      <div className="new-listing-bttn-section">
                        <button className="btn btn-sm btn-primary-soft">
                          Sell
                        </button>{" "}
                        <button className="btn btn-sm btn-primary-soft">
                          Buy
                        </button>{" "}
                        <button className="btn btn-sm btn-danger-soft">
                          Urgent
                        </button>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-0">Jaypee Kosmos </h6>
                        <p className="mb-0 small">Posted 3 DAy ago</p>
                      </div>
                    </div>
                    <div className="col-sm-6 mt-sm-0 mt-3">
                      <div className="d-flex justify-content-sm-end gap-2">
                        <div>
                          <h6 className="mb-0">Mahipal Chaudhary</h6>
                          <p className="mb-0 small">JSR Consultants</p>
                        </div>
                        <div className="avatar">
                          <Link to="#">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar11}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="avatar p-0"
                      style={{
                        transform: "translate(-50%,-50%)",
                        position: "absolute",
                        top: "30%",
                        left: "50%",
                      }}
                    >
                      <Link to="#">
                        {" "}
                        <img
                          className="avatar-img rounded-circle"
                          src={greenNoida}
                          alt=""
                        />{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div
                      className="col-4 "
                      style={{ borderRight: "1px solid #676A79" }}
                    >
                      <div className="text-center">
                        <h5 className="mb-0 card-title">3 BHK</h5>
                        <p className="mb-0 small">Sector 64, Noida</p>
                      </div>
                    </div>
                    <div
                      className="col-4 "
                      style={{ borderRight: "1px solid #676A79" }}
                    >
                      <div className="text-center">
                        <h5 className="mb-0 card-title">8000 sqft</h5>
                        <p className="mb-0 small">Super Area</p>
                      </div>
                    </div>
                    <div className="col-4 ">
                      <div className="text-center">
                        <h5 className="mb-0 card-title">₹ 10.32 Cr</h5>
                        <p className="mb-0 small">₹ 40,000/sqft</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex justify-content-between align-items-center my-3 new-listing-flex-coloumn-sec">
                      <div className="d-flex gap-3">
                        <div>
                          <i className="fa-solid fa-bed" />
                          <span className="small"> 3 Beds</span>
                        </div>
                        <div>
                          <i className="fa-solid fa-bath" />
                          <span className="small"> 2 Baths</span>
                        </div>
                        <div>
                          <i className="fa-solid fa-car" />
                          <span className="small"> 4 Parking</span>
                        </div>
                      </div>
                      <div className="new-listing-bttn-section text-end">
                        <button className="btn btn-sm btn-success-soft">
                          File in Hand
                        </button>{" "}
                        <button className="btn btn-sm btn-success-soft">
                          Exchange
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <Link className="nav-link mb-0" to="messaging.html">
                        <i className="bi bi-chat-left-text-fill fs-6"> </i>{" "}
                        chat
                      </Link>
                      <li
                        className="nav-item dropdown ms-sm-auto"
                        style={{ listStyle: "none" }}
                      >
                        <Link
                          className="nav-link mb-0"
                          to="#"
                          id="cardShareAction"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-reply-fill flip-horizontal ps-1" />
                          Share
                        </Link>
                        {/* Card share action dropdown menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardShareAction"
                        >
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-envelope fa-fw pe-2" />
                              Send via Direct Message
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-bookmark-check fa-fw pe-2" />
                              Bookmark{" "}
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-link fa-fw pe-2" />
                              Copy link to post
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-share fa-fw pe-2" />
                              Share post via …
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-pencil-square fa-fw pe-2" />
                              Share to News Feed
                            </Link>
                          </li>
                        </ul>
                      </li>
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
  )
}

export default RequirmentMatch