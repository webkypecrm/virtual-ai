import React, { Fragment, useEffect, useState } from "react";
import MainNav from "./MainNav/MainNav";
import { Link } from "react-router-dom";
import avtarBhumi from "../assets/images/avatar/bhumibazzar.jpg";
import avtar12 from "../assets/images/avatar/12.jpg";
import avtar5 from "../assets/images/avatar/05.jpg";
import avtar6 from "../assets/images/avatar/06.jpg";
import avtar7 from "../assets/images/avatar/07.jpg";
import hall from "../assets/images/post/property/hall.webp";
import bedroom from "../assets/images/post/property/bedrrom.webp";
import dinning from "../assets/images/post/property/dinnig room.webp";
import kitchen from "../assets/images/post/property/kithen.webp";
import livingroom from "../assets/images/post/property/livingroom.webp";
import avtar11 from "../assets/images/avatar/11.jpg";
import green from "../assets/images/post/property/jaypee-green-noida-residential-space-500x500.webp";
import property from "../assets/images/post/property/image_2025_02_25T11_35_43_643Z.png";
import avtar4 from "../assets/images/avatar/04.jpg";
import post from "../assets/images/post/3by2/01.jpg";
import logo12 from "../assets/images/logo/12.svg";
import post2 from "../assets/images/post/3by2/02.jpg";
import post3 from "../assets/images/post/1by1/03.jpg";
import logo13 from "../assets/images/logo/13.svg";
import avtar9 from "../assets/images/avatar/09.jpg";
import avtar10 from "../assets/images/avatar/10.jpg";
import logo11 from "../assets/images/logo/11.svg";
import post4 from "../assets/images/post/3by2/03.jpg";
import video1 from "../assets/images/videos/video-feed.mp4";
import video1poster from "../assets/images/videos/poster.jpg";
import bg1 from "../assets/images/post/1by1/01.jpg";
import bg2 from "../assets/images/post/1by1/02.jpg";
import bg3 from "../assets/images/post/1by1/03.jpg";
import bg4 from "../assets/images/post/1by1/04.jpg";
import bg5 from "../assets/images/post/1by1/05.jpg";
import bg6 from "../assets/images/post/1by1/06.jpg";
import LeftSidebar from "./MainLeftBar/LeftSidebar";
import RightSidebar from "./MainRightBar/RightSidebar";
import MainChat from "./MainChat/MainChat";
import MainPageModal from "./MainModal/MainPageModal";
import Alert from "./Alert/Alert";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { tns } from "tiny-slider/src/tiny-slider";
import GLightbox from 'glightbox';

const MainPage = () => {
  // All in the mind
  const [showResults, setShowResults] = useState(false);

  const handleToggleResults = () => {
    setShowResults(true);
  };

  // slider-1
  const people = [
    {
      name: "Amanda Reed",
      connections: "50 mutual connections",
      avatar: avtar9,
    },
    {
      name: "Larry Lawson",
      connections: "33 mutual connections",
      avatar: avtar10,
    },
    {
      name: "Louis Crawford",
      connections: "45 mutual connections",
      avatar: avtar11,
    },
    {
      name: "Dennis Barrett",
      connections: "21 mutual connections",
      avatar: avtar12,
    },
  ];
  useEffect(() => {
    const slider1 = tns({
      container: ".tiny-slider-inner", // Target the slider container
      items: 3.2, // Show 3 full items and part of the 4th item
      slideBy: 1, // Slide one item at a time
      autoplay: true, // Enable autoplay
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      controls: true,
      controlsText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>',
      ],
      nav: false,
      autoplayButtonOutput: false,
      loop: true,
      edgePadding: 0,
      speed: 300,
      responsive: {
        1200: {
          items: 3.35,
        },
        768: {
          items: 2.2,
          gutter: 12,
        },
        320: {
          items:1.26 ,
          gutter: 12,
        },
      },
      touch: true,
      mouseDrag: true,
    });

    return () => {
      slider1.destroy();
    };
  }, []);

  // slider-2
  const sliderItems = [
    {
      name: "Judy Nguyen",
      image: bg1,
    },
    {
      name: "Samuel Bishop",
      image: bg2,
    },
    {
      name: "Carolyn Ortiz",
      image: bg3,
    },
    {
      name: "Amanda Reed",
      image: bg4,
    },
    {
      name: "Lori Stevens",
      image: bg5,
    },
    {
      name: "Joan Wallace",
      image: bg6,
    },
  ];
  useEffect(() => {
    const slider2 = tns({
      container: ".tiny-slider-inner1", // Target the slider container
      slideBy: 1, // Slide one item at a time
      controls: true,
      controlsText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>',
      ],
      nav: false,
      autoplayButtonOutput: false,
      loop: true,
      edgePadding: 0,
      speed: 300,
      responsive: {
        1200: {
          items: 4.38,
          gutter: 12,
        },
        768:{
          items:2.2,
          gutter: 12,
        },
        320:{
          items: 2.27,
          gutter: 12,
        }
      },
      touch: true,
      mouseDrag: true,
    });

    return () => {
      slider2.destroy();
    };
  }, []);

  // All Content Dropdown
  useEffect(() => {
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    const selectedFilterText = document.getElementById("selected-filter-text");
    const feedItems = document.querySelectorAll(".feed-item");

    function updateFeed() {
      let selectedFilters = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

      if (selectedFilters.includes("all") || selectedFilters.length === 0) {
        selectedFilterText.textContent = "All Content";
        checkboxes.forEach((cb) => (cb.checked = cb.value === "all"));
        feedItems.forEach((item) => (item.style.display = "block"));
        return;
      }

      selectedFilterText.textContent =
        selectedFilters.length > 0
          ? selectedFilters
              .map((filter) => filter.charAt(0).toUpperCase() + filter.slice(1))
              .join(", ")
          : "No Selection";

      feedItems.forEach((item) => {
        const feedType = item.getAttribute("data-feed-type");
        item.style.display = selectedFilters.includes(feedType)
          ? "block"
          : "none";
      });
    }

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        if (this.value === "all" && this.checked) {
          checkboxes.forEach((cb) => (cb.checked = cb.value === "all"));
        } else {
          checkboxes.forEach((cb) => {
            if (cb.value === "all") cb.checked = false;
          });
        }
        updateFeed();
      });
    });

    updateFeed();
  }, []);
// big img show
useEffect(() => {
  GLightbox({
    selector: '[data-gallery="image-popup"]'
  });
}, []);
  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container">
          <Alert />

          <div className="row g-4">
            <LeftSidebar />

            {/* Main content START  */}
            <div className="col-md-8 col-lg-6 vstack gap-4">
              <div className="card card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="mb-0">Feed Preferences</h5>
                  <div className="dropdown">
                    <button
                      className="btn btn-sm btn-outline-secondary dropdown-toggle"
                      type="button"
                      id="feedFilterDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-funnel-fill me-1"></i>
                      <span id="selected-filter-text">All Content </span>{" "}
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="feedFilterDropdown"
                    >
                      <li>
                        <label className="dropdown-item">
                          <input
                            type="checkbox"
                            className="filter-checkbox w-auto"
                            value="all"
                          />{" "}
                          All Content
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item">
                          <input
                            type="checkbox"
                            className="filter-checkbox w-auto"
                            value="event"
                          />{" "}
                          Events Only
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item">
                          <input
                            type="checkbox"
                            className="filter-checkbox w-auto"
                            value="property"
                          />{" "}
                          Properties Only
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item">
                          <input
                            type="checkbox"
                            className="filter-checkbox w-auto"
                            value="requirement"
                          />{" "}
                          Requirements Only
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Share feed START */}
              <div className="card card-body">
                <div className="d-flex mb-3">
                  {/* Avatar */}
                  <div className="avatar avatar-xs me-2">
                    <Link to="#">
                      {" "}
                      <img
                        className="avatar-img rounded-circle"
                        src={avtarBhumi}
                        alt=""
                      />{" "}
                    </Link>
                  </div>
                  {/* Post input */}
                  <form className="w-100">
                    <textarea
                      className="form-control pe-4 border-0"
                      rows={2}
                      data-autoresize=""
                      placeholder="Share your thoughts..."
                      defaultValue={""}
                    />
                  </form>
                </div>
                {/* Share feed toolbar START */}
                <ul className="nav nav-pills nav-stack small fw-normal">
                  <li className="nav-item">
                    <Link
                      className="nav-link bg-light py-1 px-2 mb-0"
                      to="#!"
                      data-bs-toggle="modal"
                      data-bs-target="#feedActionPhoto"
                    >
                      {" "}
                      <i className="bi bi-image-fill text-success pe-2" />
                      Requiremet
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link bg-light py-1 px-2 mb-0"
                      to="/add-property"
                    >
                      {" "}
                      <i className="bi bi-camera-reels-fill text-info pe-2" />
                      property
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#"
                      className="nav-link bg-light py-1 px-2 mb-0"
                      data-bs-toggle="modal"
                      data-bs-target="#modalCreateEvents"
                    >
                      {" "}
                      <i className="bi bi-calendar2-event-fill text-danger pe-2" />
                      Event{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link bg-light py-1 px-2 mb-0"
                      to="#!"
                      data-bs-toggle="modal"
                      data-bs-target="#modalCreateFeed"
                    >
                      {" "}
                      <i className="bi bi-emoji-smile-fill text-warning pe-2" />
                      Feeling /Activity
                    </Link>
                  </li>
                  <li className="nav-item dropdown ms-lg-auto">
                    <Link
                      className="nav-link bg-light py-1 px-2 mb-0"
                      to="#"
                      id="feedActionShare"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots" />
                    </Link>
                    {/* Dropdown menu */}
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="feedActionShare"
                    >
                      <li>
                        <Link className="dropdown-item" to="#">
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-2" />
                          Create a poll
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          {" "}
                          <i className="bi bi-bookmark-check fa-fw pe-2" />
                          Ask a question{" "}
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          {" "}
                          <i className="bi bi-pencil-square fa-fw pe-2" />
                          Help
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* Share feed toolbar END */}
              </div>
              {/* Share feed END */}
              <div
                id="feed-container"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div
                  id="feed-container"
                  style={{
                    display: "flex !important",
                    flexDirection: "column",
                    gap: 24,
                  }}
                >
                  {/*DEMAND START Card feed item START */}
                  <div className="card feed-item" data-feed-type="requirement">
                    {/* Card header START */}
                    <div className="card-header border-0 pb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          {/* Avatar */}
                          <div className="avatar avatar-story me-2">
                            <Link to="#!">
                              {" "}
                              <img
                                className="avatar-img rounded-circle"
                                src={avtarBhumi}
                                alt=""
                              />{" "}
                            </Link>
                          </div>
                          {/* Info */}
                          <div>
                            <div className="nav nav-divider">
                              <h6 className="nav-item card-title mb-0">
                                {" "}
                                <Link to="#!"> Lori Ferguson </Link>
                              </h6>
                              <span className="nav-item small"> 2hr</span>
                            </div>
                            <p className="mb-0 small">
                              Web Developer at Stackbros
                            </p>
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
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className="card-body">
                      {/* Card img */}
                      <div
                        className="new-Demand-sec text-center mb-0 p-2"
                        style={{
                          borderBottom: "2px solid",
                          backgroundImage: "none",
                          fontWeight: 600,
                        }}
                      >
                        <h2 className="text-center  mb-0 ">Requirement</h2>
                      </div>
                      <div className="col-lg-12 mt-3 ">
                        {/* Blog caption */}
                        <div className=" row justify-content-between ">
                          <div className="col-sm-6">
                            <div className="new-listing-bttn-section">
                              <button className="btn btn-sm btn-primary-soft ">
                                Buy
                              </button>{" "}
                              <button className="btn btn-sm btn-primary-soft">
                                Residential{" "}
                              </button>{" "}
                              <button className="btn btn-sm btn-danger-soft">
                                Flat
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
                              <h5 className="mb-0 card-title">3 BHK</h5>
                              <p className="mb-0 small mt-1">
                                Greater Noida,Noida, Gurgaon
                              </p>
                            </div>
                          </div>
                          <div
                            className="col-4 "
                            style={{ borderRight: "1px solid #676A79" }}
                          >
                            <div className="text-center">
                              <h5 className="mb-0 card-title">Size</h5>
                              <p className="mb-0 small mt-1">900-1300 sqft</p>
                            </div>
                          </div>
                          <div className="col-4 ">
                            <div className="text-center">
                              <h5 className="mb-0 card-title"> Budget</h5>
                              <p className="mb-0 small mt-1">
                                ₹1.2 Cr - 2.0 Cr
                              </p>
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
                                <span className="small"> Loan Required</span>
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
                      </div>
                      {/* Feed react START */}
                      <ul className="nav nav-stack py-3 small">
                        <li className="nav-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip id="tooltip-likes">
                                Frances Guerrero
                                <br />
                                Lori Stevens
                                <br />
                                Billy Vasquez
                                <br />
                                Judy Nguyen
                                <br />
                                Larry Lawson
                                <br />
                                Amanda Reed
                                <br />
                                Louis Crawford
                              </Tooltip>
                            }
                          >
                            <Link className="nav-link active" to="#!">
                              <i className="bi bi-hand-thumbs-up-fill pe-1" />
                              Liked (56)
                            </Link>
                          </OverlayTrigger>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#!">
                            {" "}
                            <i className="bi bi-chat-fill pe-1" />
                            Comments (12)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="/requirement-match"
                          >
                            {" "}
                            20+ property match
                          </Link>
                        </li>
                        <li className="nav-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip id="tooltip-seen">20 seen</Tooltip>
                            }
                          >
                            <Link className="nav-link" to="#!">
                              <i className="bi bi-eye-fill" />
                            </Link>
                          </OverlayTrigger>
                        </li>
                        {/* Card share action START */}
                        <li className="nav-item dropdown ms-sm-auto">
                          <Link
                            className="nav-link mb-0"
                            to="#"
                            id="cardShareAction"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bi bi-reply-fill flip-horizontal ps-1" />
                            Share (3)
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
                        {/* Card share action END */}
                      </ul>
                      {/* Feed react END */}
                      {/* Add comment */}
                      <div className="d-flex mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xs me-2">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar12}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Comment box  */}
                        <form className="nav nav-item w-100 position-relative">
                          <textarea
                            data-autoresize=""
                            className="form-control pe-5 bg-light"
                            rows={1}
                            placeholder="Add a comment..."
                            defaultValue={""}
                          />
                          <button
                            className="nav-link bg-transparent px-3 position-absolute top-50 end-0 translate-middle-y border-0"
                            type="submit"
                          >
                            <i className="bi bi-send-fill"> </i>
                          </button>
                        </form>
                      </div>
                      {/* Comment wrap START */}
                      <ul className="comment-wrap list-unstyled">
                        {/* Comment item START */}
                        <li className="comment-item">
                          <div className="d-flex position-relative">
                            {/* Avatar */}
                            <div className="avatar avatar-xs">
                              <Link to="#!">
                                <img
                                  className="avatar-img rounded-circle"
                                  src={avtar5}
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="ms-2">
                              {/* Comment by */}
                              <div className="bg-light rounded-start-top-0 p-3 rounded">
                                <div className="d-flex justify-content-between">
                                  <h6 className="mb-1">
                                    {" "}
                                    <Link to="#!"> Frances Guerrero </Link>
                                  </h6>
                                  <small className="ms-2">5hr</small>
                                </div>
                                <p className="small mb-0">
                                  Removed demands expense account in outward
                                  tedious do. Particular way thoroughly
                                  unaffected projection.
                                </p>
                              </div>
                              {/* Comment react */}
                              <ul className="nav nav-divider py-2 small">
                                <li className="nav-item">
                                  <Link className="nav-link" to="#!">
                                    {" "}
                                    Like (3)
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link className="nav-link" to="#!">
                                    {" "}
                                    Reply
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link className="nav-link" to="#!">
                                    {" "}
                                    View 5 replies
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Comment item nested START */}
                          <ul className="comment-item-nested list-unstyled">
                            {/* Comment item START */}
                            <li className="comment-item">
                              <div className="d-flex">
                                {/* Avatar */}
                                <div className="avatar avatar-xs">
                                  <Link to="#!">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={avtar6}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                {/* Comment by */}
                                <div className="ms-2">
                                  <div className="bg-light p-3 rounded">
                                    <div className="d-flex justify-content-between">
                                      <h6 className="mb-1">
                                        {" "}
                                        <Link to="#!"> Lori Stevens </Link>{" "}
                                      </h6>
                                      <small className="ms-2">2hr</small>
                                    </div>
                                    <p className="small mb-0">
                                      See resolved goodness felicity shy
                                      civility domestic had but Drawings
                                      offended yet answered Jennings perceive.
                                    </p>
                                  </div>
                                  {/* Comment react */}
                                  <ul className="nav nav-divider py-2 small">
                                    <li className="nav-item">
                                      <Link className="nav-link" to="#!">
                                        {" "}
                                        Like (5)
                                      </Link>
                                    </li>
                                    <li className="nav-item">
                                      <Link className="nav-link" to="#!">
                                        {" "}
                                        Reply
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            {/* Comment item END */}
                            {/* Comment item START */}
                            <li className="comment-item">
                              <div className="d-flex">
                                {/* Avatar */}
                                <div className="avatar avatar-story avatar-xs">
                                  <Link to="#!">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={avtar7}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                {/* Comment by */}
                                <div className="ms-2">
                                  <div className="bg-light p-3 rounded">
                                    <div className="d-flex justify-content-between">
                                      <h6 className="mb-1">
                                        {" "}
                                        <Link to="#!">
                                          {" "}
                                          Billy Vasquez{" "}
                                        </Link>{" "}
                                      </h6>
                                      <small className="ms-2">15min</small>
                                    </div>
                                    <p className="small mb-0">
                                      Wishing calling is warrant settled was
                                      lucky.
                                    </p>
                                  </div>
                                  {/* Comment react */}
                                  <ul className="nav nav-divider py-2 small">
                                    <li className="nav-item">
                                      <Link className="nav-link" to="#!">
                                        {" "}
                                        Like
                                      </Link>
                                    </li>
                                    <li className="nav-item">
                                      <Link className="nav-link" to="#!">
                                        {" "}
                                        Reply
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            {/* Comment item END */}
                          </ul>
                          {/* Load more replies */}
                          <Link
                            to="#!"
                            role="button"
                            className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
                            data-bs-toggle="button"
                            aria-pressed="true"
                          >
                            <div className="spinner-dots me-2">
                              <span className="spinner-dot" />
                              <span className="spinner-dot" />
                              <span className="spinner-dot" />
                            </div>
                            Load more replies
                          </Link>
                          {/* Comment item nested END */}
                        </li>
                        {/* Comment item END */}
                        {/* Comment item START */}
                        <li className="comment-item">
                          <div className="d-flex">
                            {/* Avatar */}
                            <div className="avatar avatar-xs">
                              <Link to="#!">
                                <img
                                  className="avatar-img rounded-circle"
                                  src={avtar5}
                                  alt=""
                                />
                              </Link>
                            </div>
                            {/* Comment by */}
                            <div className="ms-2">
                              <div className="bg-light p-3 rounded">
                                <div className="d-flex justify-content-between">
                                  <h6 className="mb-1">
                                    {" "}
                                    <Link to="#!"> Frances Guerrero </Link>{" "}
                                  </h6>
                                  <small className="ms-2">4min</small>
                                </div>
                                <p className="small mb-0">
                                  Removed demands expense account in outward
                                  tedious do. Particular way thoroughly
                                  unaffected projection.
                                </p>
                              </div>
                              {/* Comment react */}
                              <ul className="nav nav-divider pt-2 small">
                                <li className="nav-item">
                                  <Link className="nav-link" to="#!">
                                    {" "}
                                    Like (1)
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link className="nav-link" to="#!">
                                    {" "}
                                    Reply
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link className="nav-link" to="#!">
                                    {" "}
                                    View 6 replies
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        {/* Comment item END */}
                      </ul>
                      {/* Comment wrap END */}
                    </div>
                    {/* Card body END */}
                    {/* Card footer START */}
                    <div className="card-footer border-0 pt-0">
                      {/* Load more comments */}
                      <Link
                        to="#!"
                        role="button"
                        className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                        data-bs-toggle="button"
                        aria-pressed="true"
                      >
                        <div className="spinner-dots me-2">
                          <span className="spinner-dot" />
                          <span className="spinner-dot" />
                          <span className="spinner-dot" />
                        </div>
                        Load more comments
                      </Link>
                    </div>
                    {/* Card footer END */}
                  </div>
                </div>

                <div className="card feed-item" data-feed-type="property">
                  {/* Card header START */}
                  <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar avatar-story me-2">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtarBhumi}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Info */}
                        <div>
                          <div className="nav nav-divider">
                            <h6 className="nav-item card-title mb-0">
                              {" "}
                              <Link to="#!"> Lori Ferguson </Link>
                            </h6>
                            <span className="nav-item small"> 2hr</span>
                          </div>
                          <p className="mb-0 small">
                            Web Developer at Stackbros
                          </p>
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
                  </div>
                  {/* Card header END */}
                  {/* Card body START */}
                  <div className="card-body">
                    <div className="ADD-PROPERTY-sec"></div>
                    <div className="card-body position-relative p-0">
                      <div className="row g-2">
                        {/* Photos item */}
                        <div className="col-6">
                          <Link
                            to={hall}
                            data-gallery="image-popup"
                            data-glightbox=""
                          >
                            <img
                              className="rounded img-fluid"
                              src={hall}
                              alt=""
                            />
                          </Link>
                        </div>
                        {/* Photos item */}
                        <div className="col-6">
                          <Link
                            to={bedroom}
                            data-gallery="image-popup"
                            data-glightbox=""
                          >
                            <img
                              className="rounded img-fluid"
                              src={bedroom}
                              alt=""
                            />
                          </Link>
                        </div>
                        {/* Photos item */}
                        <div className="col-4">
                          <Link
                            to={dinning}
                            data-gallery="image-popup"
                            data-glightbox=""
                          >
                            <img
                              className="rounded img-fluid"
                              src={dinning}
                              alt=""
                            />
                          </Link>
                        </div>
                        {/* Photos item */}
                        <div className="col-4">
                          <Link
                            to={kitchen}
                            data-gallery="image-popup"
                            data-glightbox=""
                          >
                            <img
                              className="rounded img-fluid"
                              src={kitchen}
                              alt=""
                            />
                          </Link>
                        </div>
                        {/* Photos item */}
                        <div className="col-4 position-relative">
                          <div className="hover-actions-item position-absolute top-50 start-50 translate-middle z-index-9">
                            <Link className="btn btn-link text-white" to="#">
                              {" "}
                              View all{" "}
                            </Link>
                          </div>
                          <Link
                            to={livingroom}
                            data-gallery="image-popup"
                            data-glightbox=""
                          >
                            <img
                              className="rounded img-fluid"
                              src={livingroom}
                              alt=""
                            />
                          </Link>
                          {/* glightbox Albums left bar END  */}
                        </div>
                      </div>
                    </div>
                    <div className=" row justify-content-between position-relative mt-3">
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
                            src={green}
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
                    {/* Feed react START */}
                    <ul className="nav nav-stack py-3 small">
                      <li className="nav-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="tooltip-likes">
                              Frances Guerrero
                              <br />
                              Lori Stevens
                              <br />
                              Billy Vasquez
                              <br />
                              Judy Nguyen
                              <br />
                              Larry Lawson
                              <br />
                              Amanda Reed
                              <br />
                              Louis Crawford
                            </Tooltip>
                          }
                        >
                          <Link className="nav-link active" to="#!">
                            <i className="bi bi-hand-thumbs-up-fill pe-1" />
                            Liked (56)
                          </Link>
                        </OverlayTrigger>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!">
                          {" "}
                          <i className="bi bi-chat-fill pe-1" />
                          Comments (12)
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/property-match"
                        >
                          {" "}
                          20+ Requirement match
                        </Link>
                      </li>
                      <li className="nav-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip id="tooltip-seen">20 seen</Tooltip>}
                        >
                          <Link className="nav-link" to="#!">
                            <i className="bi bi-eye-fill" />
                          </Link>
                        </OverlayTrigger>
                      </li>
                      {/* Card share action START */}
                      <li className="nav-item dropdown ms-sm-auto">
                        <Link
                          className="nav-link mb-0"
                          to="#"
                          id="cardShareAction"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-reply-fill flip-horizontal ps-1" />
                          Share (3)
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
                      {/* Card share action END */}
                    </ul>
                    {/* Feed react END */}
                    {/* Add comment */}
                    <div className="d-flex mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs me-2">
                        <Link to="#!">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src={avtar12}
                            alt=""
                          />{" "}
                        </Link>
                      </div>
                      {/* Comment box  */}
                      <form className="nav nav-item w-100 position-relative">
                        <textarea
                          data-autoresize=""
                          className="form-control pe-5 bg-light"
                          rows={1}
                          placeholder="Add a comment..."
                          defaultValue={""}
                        />
                        <button
                          className="nav-link bg-transparent px-3 position-absolute top-50 end-0 translate-middle-y border-0"
                          type="submit"
                        >
                          <i className="bi bi-send-fill"> </i>
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* Card body END */}
                  {/* Card footer START */}
                  <div className="card-footer border-0 pt-0">
                    {/* Load more comments */}
                    <Link
                      to="#!"
                      role="button"
                      className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      <div className="spinner-dots me-2">
                        <span className="spinner-dot" />
                        <span className="spinner-dot" />
                        <span className="spinner-dot" />
                      </div>
                      Load more comments
                    </Link>
                  </div>
                  {/* Card footer END */}
                </div>
                <div className="card feed-item" data-feed-type="event">
                  {/* Card header START */}
                  <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar avatar-story me-2">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtarBhumi}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Info */}
                        <div>
                          <div className="nav nav-divider">
                            <h6 className="nav-item card-title mb-0">
                              {" "}
                              <Link to="#!"> Lori Ferguson </Link>
                            </h6>
                            <span className="nav-item small"> 2hr</span>
                          </div>
                          <p className="mb-0 small">
                            Web Developer at Stackbros
                          </p>
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
                  </div>
                  {/* Card header END */}
                  {/* Card body START */}
                  <div className="card-body">
                    <div className="card-body position-relative p-0">
                      <Link to="/events-details">
                        <img className="card-img" src={property} alt="Post" />
                      </Link>
                    </div>
                    <div className="Event-add-sec mt-3">
                      <h4>
                        <Link to="/events-details">
                          {" "}
                          <i className="bi bi-buildings" /> M3M Launches Luxury
                          Residence Project in Gurgaon and Noida.
                        </Link>
                      </h4>
                      <div className="row">
                        <p className="col-4 text-center">
                          <i className="bi bi-geo-alt-fill" /> Gold Course Road
                          Ext. MG Road Gurgaon
                        </p>
                        <p className="col-4  text-center">
                          <i className="bi bi-calendar" /> Launch Date : 12 Feb
                          2025, 10 : 00 AM
                        </p>
                        <p className="col-4  text-center">
                          EOI Open : 12 Feb 2025 - 1 March 2025.{" "}
                        </p>
                      </div>
                    </div>
                    <ul className="nav nav-stack py-3 small">
                      <li className="nav-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="tooltip-likes">
                              Frances Guerrero
                              <br />
                              Lori Stevens
                              <br />
                              Billy Vasquez
                              <br />
                              Judy Nguyen
                              <br />
                              Larry Lawson
                              <br />
                              Amanda Reed
                              <br />
                              Louis Crawford
                            </Tooltip>
                          }
                        >
                          <Link className="nav-link active" to="#!">
                            <i className="bi bi-hand-thumbs-up-fill pe-1" />
                            Liked (56)
                          </Link>
                        </OverlayTrigger>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!">
                          {" "}
                          <i className="bi bi-chat-fill pe-1" />
                          Comments (12)
                        </Link>
                      </li>
                      <li className="nav-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip id="tooltip-seen">20 seen</Tooltip>}
                        >
                          <Link className="nav-link" to="#!">
                            <i className="bi bi-eye-fill" />
                          </Link>
                        </OverlayTrigger>
                      </li>
                      {/* Card share action START */}
                      <li className="nav-item dropdown ms-sm-auto">
                        <Link
                          className="nav-link mb-0"
                          to="#"
                          id="cardShareAction"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-reply-fill flip-horizontal ps-1" />
                          Share (3)
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
                      {/* Card share action END */}
                    </ul>
                    {/* Feed react END */}
                    {/* Add comment */}
                    <div className="d-flex mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs me-2">
                        <Link to="#!">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src={avtar12}
                            alt=""
                          />{" "}
                        </Link>
                      </div>
                      {/* Comment box  */}
                      <form className="nav nav-item w-100 position-relative">
                        <textarea
                          data-autoresize=""
                          className="form-control pe-5 bg-light"
                          rows={1}
                          placeholder="Add a comment..."
                          defaultValue={""}
                        />
                        <button
                          className="nav-link bg-transparent px-3 position-absolute top-50 end-0 translate-middle-y border-0"
                          type="submit"
                        >
                          <i className="bi bi-send-fill"> </i>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="card-footer border-0 pt-0">
                    {/* Load more comments */}
                    <Link
                      to="#!"
                      role="button"
                      className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      <div className="spinner-dots me-2">
                        <span className="spinner-dot" />
                        <span className="spinner-dot" />
                        <span className="spinner-dot" />
                      </div>
                      Load more comments
                    </Link>
                  </div>
                </div>
                <div className="card feed-item">
                  {/* Card header START */}
                  <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar avatar-story me-2">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar4}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Info */}
                        <div>
                          <div className="nav nav-divider">
                            <h6 className="nav-item card-title mb-0">
                              {" "}
                              <Link to="#!"> Lori Ferguson </Link>
                            </h6>
                            <span className="nav-item small"> 2hr</span>
                          </div>
                          <p className="mb-0 small">
                            Web Developer at Stackbros
                          </p>
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
                  </div>
                  {/* Card header END */}
                  {/* Card body START */}
                  <div className="card-body">
                    <p>
                      I'm thrilled to share that I've completed a graduate
                      certificate course in project management with the
                      president's honor roll.
                    </p>
                    {/* Card img */}
                    <img className="card-img" src={post} alt="Post" />
                    {/* Feed react START */}
                    <ul className="nav nav-stack py-3 small">
                      <li className="nav-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="tooltip-likes">
                              Frances Guerrero
                              <br />
                              Lori Stevens
                              <br />
                              Billy Vasquez
                              <br />
                              Judy Nguyen
                              <br />
                              Larry Lawson
                              <br />
                              Amanda Reed
                              <br />
                              Louis Crawford
                            </Tooltip>
                          }
                        >
                          <Link className="nav-link active" to="#!">
                            <i className="bi bi-hand-thumbs-up-fill pe-1" />
                            Liked (56)
                          </Link>
                        </OverlayTrigger>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!">
                          {" "}
                          <i className="bi bi-chat-fill pe-1" />
                          Comments (12)
                        </Link>
                      </li>
                      <li className="nav-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip id="tooltip-seen">20 seen</Tooltip>}
                        >
                          <Link className="nav-link" to="#!">
                            <i className="bi bi-eye-fill" />
                          </Link>
                        </OverlayTrigger>
                      </li>
                      {/* Card share action START */}
                      <li className="nav-item dropdown ms-sm-auto">
                        <Link
                          className="nav-link mb-0"
                          to="#"
                          id="cardShareAction"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-reply-fill flip-horizontal ps-1" />
                          Share (3)
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
                      {/* Card share action END */}
                    </ul>
                    {/* Feed react END */}
                    {/* Add comment */}
                    <div className="d-flex mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs me-2">
                        <Link to="#!">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src={avtar12}
                            alt=""
                          />{" "}
                        </Link>
                      </div>
                      {/* Comment box  */}
                      <form className="nav nav-item w-100 position-relative">
                        <textarea
                          data-autoresize=""
                          className="form-control pe-5 bg-light"
                          rows={1}
                          placeholder="Add a comment..."
                          defaultValue={""}
                        />
                        <button
                          className="nav-link bg-transparent px-3 position-absolute top-50 end-0 translate-middle-y border-0"
                          type="submit"
                        >
                          <i className="bi bi-send-fill"> </i>
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* Card body END */}
                  {/* Card footer START */}
                  <div className="card-footer border-0 pt-0">
                    {/* Load more comments */}
                    <Link
                      to="#!"
                      role="button"
                      className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      <div className="spinner-dots me-2">
                        <span className="spinner-dot" />
                        <span className="spinner-dot" />
                        <span className="spinner-dot" />
                      </div>
                      Load more comments
                    </Link>
                  </div>
                  {/* Card footer END */}
                </div>

                {/* Card feed item END */}
                {/* Card feed item START */}
                <div className="card feed-item">
                  {/* Card header START */}
                  <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar me-2">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={logo12}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Info */}
                        <div>
                          <h6 className="card-title mb-0">
                            <Link to="#!">
                              {" "}
                              Bootstrap: Front-end framework{" "}
                            </Link>
                          </h6>
                          <Link to="#!" className="mb-0 text-body">
                            Sponsored{" "}
                            <i
                              className="bi bi-info-circle ps-1"
                              data-bs-container="body"
                              data-bs-toggle="popover"
                              data-bs-placement="top"
                              data-bs-content="You're seeing this ad because your activity meets the intended audience of our site."
                            />{" "}
                          </Link>
                        </div>
                      </div>
                      {/* Card share action START */}
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                          id="cardShareAction2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots" />
                        </Link>
                        {/* Card share action dropdown menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardShareAction2"
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
                      {/* Card share action START */}
                    </div>
                  </div>
                  {/* Card header START */}
                  {/* Card body START */}
                  <div className="card-body">
                    <p className="mb-0">
                      Quickly design and customize responsive mobile-first sites
                      with Bootstrap.
                    </p>
                  </div>
                  <img src={post2} alt="" />
                  {/* Card body END */}
                  {/* Card footer START */}
                  <div className="card-footer border-0 d-flex justify-content-between align-items-center">
                    <p className="mb-0">Currently v5.1.3 </p>
                    <Link className="btn btn-primary-soft btn-sm" to="#">
                      {" "}
                      Download now{" "}
                    </Link>
                  </div>
                  {/* Card footer END */}
                </div>

                {/* Card feed item END */}
                {/* Card feed item START */}
                <div className="card feed-item">
                  {/* Card header START */}
                  <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar me-2">
                          <Link to="#">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar4}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Info */}
                        <div>
                          <h6 className="card-title mb-0">
                            {" "}
                            <Link to="#"> Judy Nguyen </Link>
                          </h6>
                          <div className="nav nav-divider">
                            <p className="nav-item mb-0 small">
                              Web Developer at Stackbros
                            </p>
                            <span
                              className="nav-item small"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Public"
                            >
                              {" "}
                              <i className="bi bi-globe" />{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Card share action START */}
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                          id="cardShareAction3"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots" />
                        </Link>
                        {/* Card share action dropdown menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardShareAction3"
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
                      {/* Card share action END */}
                    </div>
                  </div>
                  {/* Card header START */}
                  {/* Card body START */}
                  <div className="card-body">
                    <p>
                      I'm so privileged to be involved in the{" "}
                      <Link to="#!">@bootstrap </Link>
                      hiring process! Interviewing with their team was fun and I
                      hope this can be a valuable resource for folks!{" "}
                      <Link to="#!"> #inclusivebusiness</Link>{" "}
                      <Link to="#!"> #internship</Link>{" "}
                      <Link to="#!"> #hiring</Link> <Link to="#"> #apply </Link>
                    </p>
                    {/* Card feed grid START */}
                    <div className="d-flex justify-content-between">
                      <div className="row g-3">
                        <div className="col-6">
                          {/* Grid img */}
                          <Link
                            className="h-100"
                            to={post3}
                            data-glightbox=""
                            data-gallery="image-popup"
                          >
                            <img
                              className="rounded img-fluid"
                              src={post3}
                              alt="Image"
                            />
                          </Link>
                        </div>
                        <div className="col-6">
                          {/* Grid img */}
                          <Link
                            to={post}
                            data-glightbox=""
                            data-gallery="image-popup"
                          >
                            <img
                              className="rounded img-fluid"
                              src={post}
                              alt="Image"
                            />
                          </Link>
                          {/* Grid img */}
                          <div className="position-relative bg-dark mt-3 rounded">
                            <div className="hover-actions-item position-absolute top-50 start-50 translate-middle z-index-9">
                              <Link className="btn btn-link text-white" to="#">
                                {" "}
                                View all{" "}
                              </Link>
                            </div>
                            <Link
                              to={post2}
                              data-glightbox=""
                              data-gallery="image-popup"
                            >
                              <img
                                className="img-fluid opacity-50 rounded"
                                src={post2}
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card feed grid END */}
                    {/* Feed react START */}
                    <ul className="nav nav-stack py-3 small">
                      <li className="nav-item">
                        <Link
                          className="nav-link active text-secondary"
                          to="#!"
                        >
                          {" "}
                          <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle" />{" "}
                          Louis, Billy and 126 others{" "}
                        </Link>
                      </li>
                      <li className="nav-item ms-sm-auto">
                        <Link className="nav-link" to="#!">
                          {" "}
                          <i className="bi bi-chat-fill pe-1" />
                          Comments (12)
                        </Link>
                      </li>
                    </ul>
                    {/* Feed react END */}
                    {/* Feed react START */}
                    <ul className="nav nav-pills nav-pills-light nav-fill nav-stack small border-top border-bottom py-1 mb-3">
                      <li className="nav-item">
                        <Link className="nav-link mb-0 active" to="#!">
                          {" "}
                          <i className="bi bi-heart pe-1" />
                          Liked (56)
                        </Link>
                      </li>
                      {/* Card share action menu START */}
                      <li className="nav-item dropdown">
                        <Link
                          to="#"
                          className="nav-link mb-0"
                          id="cardShareAction4"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-reply-fill flip-horizontal ps-1" />
                          Share (3)
                        </Link>
                        {/* Card share action dropdown menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardShareAction4"
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
                      {/* Card share action menu END */}
                      <li className="nav-item">
                        <Link className="nav-link mb-0" to="#!">
                          {" "}
                          <i className="bi bi-send-fill pe-1" />
                          Send
                        </Link>
                      </li>
                    </ul>
                    {/* Feed react START */}
                  </div>
                  <div className="card-footer border-0 pt-0">
                    {/* Load more comments */}
                    <Link
                      to="#!"
                      role="button"
                      className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      <div className="spinner-dots me-2">
                        <span className="spinner-dot" />
                        <span className="spinner-dot" />
                        <span className="spinner-dot" />
                      </div>
                      Load more comments
                    </Link>
                  </div>
                </div>
                {/* Card feed item END */}

                {/* Card feed item START */}
                <div className="card feed-item">
                  {/* Card header START */}
                  <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar me-2">
                          <Link to="#">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={logo13}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Title */}
                        <div>
                          <h6 className="card-title mb-0">
                            {" "}
                            <Link to="#!"> Apple Education </Link>
                          </h6>
                          <p className="mb-0 small">9 November at 23:29</p>
                        </div>
                      </div>
                      {/* Card share action menu */}
                      <Link
                        to="#"
                        className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                        id="cardShareAction5"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card share action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardShareAction5"
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
                    {/* Card share action END */}
                  </div>
                  {/* Card header START */}
                  {/* Card body START */}
                  <div className="card-body pb-0">
                    <p>
                      Find out how you can save time in the classroom this year.
                      Earn recognition while you learn new skills on iPad and
                      Mac. Start recognition your first Apple Teacher badge
                      today!
                    </p>
                    {/* Feed react START */}
                    <ul className="nav nav-stack pb-2 small">
                      <li className="nav-item">
                        <Link
                          className="nav-link active text-secondary"
                          to="#!"
                        >
                          {" "}
                          <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle" />{" "}
                          Louis, Billy and 126 others{" "}
                        </Link>
                      </li>
                      <li className="nav-item ms-sm-auto">
                        <Link className="nav-link" to="#!">
                          {" "}
                          <i className="bi bi-chat-fill pe-1" />
                          Comments (12)
                        </Link>
                      </li>
                    </ul>
                    {/* Feed react END */}
                  </div>
                  {/* Card body END */}
                  {/* Card Footer START */}
                  <div className="card-footer py-3">
                    {/* Feed react START */}
                    <ul className="nav nav-fill nav-stack small">
                      <li className="nav-item">
                        <Link className="nav-link mb-0 active" to="#!">
                          {" "}
                          <i className="bi bi-heart pe-1" />
                          Liked (56)
                        </Link>
                      </li>
                      {/* Card share action dropdown START */}
                      <li className="nav-item dropdown">
                        <Link
                          to="#"
                          className="nav-link mb-0"
                          id="cardShareAction6"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-reply-fill flip-horizontal ps-1" />
                          Share (3)
                        </Link>
                        {/* Card share action dropdown menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardShareAction6"
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
                      {/* Card share action dropdown END */}
                      <li className="nav-item">
                        <Link className="nav-link mb-0" to="#!">
                          {" "}
                          <i className="bi bi-send-fill pe-1" />
                          Send
                        </Link>
                      </li>
                    </ul>
                    {/* Feed react END */}
                  </div>
                  {/* Card Footer END */}
                </div>
                {/* Card feed item END */}
                {/* Card feed item START */}
                {/* --------------------------------------------------------slider--- */}

                <div className="card feed-item">
                  {/* Card Header */}
                  <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                    <h6 className="card-title mb-0">People you may know</h6>
                    <button className="btn btn-sm btn-primary-soft">
                      See all
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    <div className="tiny-slider arrow-hover">
                      <div className="tiny-slider-inner">
                        {/* Slider Items */}
                        {people.map((person, index) => (
                          <div key={index} className="slider-card-padding">
                            <div className="card shadow-none text-center">
                              {/* Card Body */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                  <Link to="#!">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={person.avatar}
                                      alt={person.name}
                                    />
                                  </Link>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  <Link to="#!">{person.name}</Link>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  {person.connections}
                                </p>
                              </div>

                              {/* Card Footer */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  Add friend
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* -------------------------------------slider------------------------------------------------ */}
                {/* Card feed item START */}
                <div className="card feed-item">
                  {/* Card header START */}
                  <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar me-2">
                          <Link to="#">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar4}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Title */}
                        <div>
                          <h6 className="card-title mb-0">
                            {" "}
                            <Link to="#!"> All in the Mind </Link>
                          </h6>
                          <p className="mb-0 small">9 November at 23:29</p>
                        </div>
                      </div>
                      {/* Card share action menu */}
                      <Link
                        to="#"
                        className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                        id="cardShareAction7"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card share action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardShareAction7"
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
                    {/* Card share action END */}
                  </div>
                  {/* Card header START */}
                  {/* ssssssssssssssssssssssssssssssss */}
                  {/* Poll Form Section */}
                  {!showResults && (
                    <div className="card-body pb-0" id="pollForm">
                      <p>
                        How do you protect your business against cyber-crime?
                      </p>
                      <div className="vstack gap-2">
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="poll"
                            id="option1"
                            defaultValue="insurance"
                            style={{width:"auto"}}
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option1"
                            onClick={handleToggleResults}
                          >
                            We have cybersecurity insurance coverage
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="poll"
                            id="option2"
                            defaultValue="staff"
                            style={{width:"auto"}}
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option2"
                            onClick={handleToggleResults}
                          >
                            Our dedicated staff will protect us
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="poll"
                            id="option3"
                            defaultValue="training"
                            style={{width:"auto"}}
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option3"
                            onClick={handleToggleResults}
                          >
                            We give regular training for best practices
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="poll"
                            id="option4"
                            defaultValue="vendor"
                            style={{width:"auto"}}
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option4"
                            onClick={handleToggleResults}
                          >
                            Third-party vendor protection
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Poll Results Section */}
                  {showResults && (
                    <div className="card card-body mt-4" id="pollResults">
                      <div className="d-sm-flex justify-content-sm-between align-items-center">
                        <span className="small">16/20 responded</span>
                        <span className="small">
                          Results not visible to participants
                        </span>
                      </div>
                      <div className="vstack gap-4 gap-sm-3 mt-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="overflow-hidden w-100 me-3">
                            <div
                              className="progress bg-primary bg-opacity-10 position-relative"
                              style={{ height: 30 }}
                            >
                              <div
                                className="progress-bar bg-primary bg-opacity-25"
                                style={{ width: "25%" }}
                              />
                              <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">
                                We have cybersecurity insurance coverage
                              </span>
                            </div>
                          </div>
                          <div className="flex-shrink-0">25%</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="overflow-hidden w-100 me-3">
                            <div
                              className="progress bg-primary bg-opacity-10 position-relative"
                              style={{ height: 30 }}
                            >
                              <div
                                className="progress-bar bg-primary bg-opacity-25"
                                style={{ width: "15%" }}
                              />
                              <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">
                                Our dedicated staff will protect us
                              </span>
                            </div>
                          </div>
                          <div className="flex-shrink-0">15%</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="overflow-hidden w-100 me-3">
                            <div
                              className="progress bg-primary bg-opacity-10 position-relative"
                              style={{ height: 30 }}
                            >
                              <div
                                className="progress-bar bg-primary bg-opacity-25"
                                style={{ width: "10%" }}
                              />
                              <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">
                                We give regular training for best practices
                              </span>
                            </div>
                          </div>
                          <div className="flex-shrink-0">10%</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="overflow-hidden w-100 me-3">
                            <div
                              className="progress bg-primary bg-opacity-10 position-relative"
                              style={{ height: 30 }}
                            >
                              <div
                                className="progress-bar bg-primary bg-opacity-25"
                                style={{ width: "55%" }}
                              />
                              <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">
                                Third-party vendor protection
                              </span>
                            </div>
                          </div>
                          <div className="flex-shrink-0">55%</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* JavaScript */}
                  {/* Card body END */}
                  {/* Card Footer START */}
                  <div className="card-footer py-3">
                    {/* Feed react START */}
                    <ul className="nav nav-fill nav-stack small">
                      <li className="nav-item">
                        <Link className="nav-link mb-0 active" to="#!">
                          {" "}
                          <i className="bi bi-heart pe-1" />
                          Liked (56)
                        </Link>
                      </li>
                      {/* Card share action dropdown START */}
                      <li className="nav-item dropdown">
                        <Link
                          to="#"
                          className="nav-link mb-0"
                          id="feedActionShare6"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-reply-fill flip-horizontal ps-1" />
                          Share (3)
                        </Link>
                        {/* Card share action dropdown menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="feedActionShare6"
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
                      {/* Card share action dropdown END */}
                      <li className="nav-item">
                        <Link className="nav-link mb-0" to="#!">
                          {" "}
                          <i className="bi bi-send-fill pe-1" />
                          Send
                        </Link>
                      </li>
                    </ul>
                    {/* Feed react END */}
                  </div>
                  {/* Card Footer END */}
                </div>
                {/* Card feed item END */}
                {/* Card feed item START */}
                <div className="card feed-item">
                  {/* Card header START */}
                  <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar me-2">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={logo11}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Info */}
                        <div>
                          <h6 className="card-title mb-0">
                            {" "}
                            <Link to="#!"> Stackbros </Link>
                          </h6>
                          <p className="small mb-0">9 December at 10:00 </p>
                        </div>
                      </div>
                      {/* Card share action START */}
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                          id="cardShareAction8"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots" />
                        </Link>
                        {/* Card share action dropdown menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardShareAction8"
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
                      {/* Card share action START */}
                    </div>
                  </div>
                  {/* Card header START */}
                  {/* Card body START */}
                  <div className="card-body">
                    <p className="mb-0">
                      The next-generation blog, news, and magazine theme for you
                      to start sharing your content today with beautiful
                      aesthetics! This minimal &amp; clean Bootstrap 5 based
                      theme is ideal for all types of sites that aim to provide
                      users with content. <Link to="#!"> #bootstrap</Link>{" "}
                      <Link to="#!"> #StackBros </Link>
                    </p>
                  </div>
                  {/* Card body END */}
                  <Link to="#!">
                    {" "}
                    <img src={post4} alt="" />{" "}
                  </Link>
                  {/* Card body START */}
                  <div className="card-body position-relative bg-light">
                    <Link to="#!" className="small stretched-link">
                      Social
                    </Link>
                    <h6 className="mb-0 mt-1">
                      Blogzine - Blog and Magazine Bootstrap 5 Theme
                    </h6>
                    <p className="mb-0 small">
                      Bootstrap based News, Magazine and Blog Theme
                    </p>
                  </div>
                  {/* Card body END */}
                  {/* Card Footer START */}
                  <div className="card-footer py-3">
                    {/* Feed react START */}
                    <ul className="nav nav-fill nav-stack small">
                      <li className="nav-item">
                        <Link className="nav-link mb-0 active" to="#!">
                          {" "}
                          <i className="bi bi-heart pe-1" />
                          Liked (56)
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link mb-0" to="#!">
                          {" "}
                          <i className="bi bi-chat-fill pe-1" />
                          Comments (12)
                        </Link>
                      </li>
                      {/* Card share action dropdown START */}
                      <li className="nav-item dropdown">
                        <Link
                          to="#"
                          className="nav-link mb-0"
                          id="feedActionShare7"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-reply-fill flip-horizontal ps-1" />
                          Share (3)
                        </Link>
                        {/* Card share action dropdown menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="feedActionShare7"
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
                      {/* Card share action dropdown END */}
                      <li className="nav-item">
                        <Link className="nav-link mb-0" to="#!">
                          {" "}
                          <i className="bi bi-send-fill pe-1" />
                          Send
                        </Link>
                      </li>
                    </ul>
                    {/* Feed react END */}
                  </div>
                  {/* Card Footer END */}
                </div>
                {/* Card feed item END */}
                {/* -------------------------------Story START Slider------------------------------------ */}
                <div className="tiny-slider arrow-hover overflow-hidden">
                  <div className="tiny-slider-inner1 ">
                    {sliderItems.map((item, index) => (
                      <div key={index}>
                        <div
                          className="card card-overlay-bottom border-0 position-relative h-150px"
                          style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundPosition: "center left",
                            backgroundSize: "cover",
                          }}
                        >
                          <div className="card-img-overlay d-flex align-items-center p-2">
                            <div className="w-100 mt-auto">
                              <Link
                                to="#!"
                                className="stretched-link text-white small"
                              >
                                {item.name}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ----------------------------------------Story END slider----------------------------------*/}
                {/* Card feed item START */}
                <div className="card feed-item">
                  {/* Card header START */}
                  <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar avatar-story me-2">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar12}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Info */}
                        <div>
                          <div className="nav nav-divider">
                            <h6 className="nav-item card-title mb-0">
                              {" "}
                              <Link to="#!"> Joan Wallace </Link>
                            </h6>
                            <span className="nav-item small"> 1day</span>
                          </div>
                          <p className="mb-0 small">12 January at 12:00</p>
                        </div>
                      </div>
                      {/* Card feed action dropdown START */}
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                          id="cardFeedAction2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots" />
                        </Link>
                        {/* Card feed action dropdown menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardFeedAction2"
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
                  </div>
                  {/* Card header END */}
                  {/* Card body START */}
                  <div className="card-body pb-0">
                    <p>
                      Comfort reached gay perhaps chamber his{" "}
                      <Link to="#!">#internship</Link>{" "}
                      <Link to="#!">#hiring</Link> <Link to="#!">#apply</Link>{" "}
                    </p>
                  </div>
                  {/* Card img */}
                  <div className="overflow-hidden fullscreen-video w-100">
                    {/* HTML video START */}
                    <div className="player-wrapper overflow-hidden">
                      <video
                        className="player-html"
                        controls
                        crossOrigin="anonymous"
                        poster={video1poster}
                      >
                        <source src={video1} type="video/mp4" />
                      </video>
                    </div>
                    {/* HTML video END */}
                    {/* Plyr resources and browser polyfills are specified in the pen settings */}
                  </div>
                  {/* Feed react START */}
                  <div className="card-body pt-0">
                    <ul className="nav nav-stack py-3 small">
                      <li className="nav-item">
                        <Link className="nav-link active" to="#!">
                          {" "}
                          <i className="bi bi-hand-thumbs-up-fill pe-1" />
                          Liked (56)
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!">
                          {" "}
                          <i className="bi bi-chat-fill pe-1" />
                          Comments (12)
                        </Link>
                      </li>
                      {/* Card share action START */}
                      <li className="nav-item dropdown ms-sm-auto">
                        <Link
                          className="nav-link mb-0"
                          to="#"
                          id="cardShareAction9"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-reply-fill flip-horizontal ps-1" />
                          Share (3)
                        </Link>
                        {/* Card share action dropdown menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardShareAction9"
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
                      {/* Card share action END */}
                    </ul>
                    {/* Feed react END */}
                    {/* Add comment */}
                    <div className="d-flex mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs me-2">
                        <Link to="#!">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src={avtar12}
                            alt=""
                          />{" "}
                        </Link>
                      </div>
                      {/* Comment box  */}
                      <form className="input-group">
                        <textarea
                          data-autoresize=""
                          className="form-control me-2 bg-light rounded"
                          rows={1}
                          placeholder="Add a comment..."
                          defaultValue={""}
                        />
                        <button
                          className="btn btn-primary mb-0 rounded"
                          type="submit"
                        >
                          Post
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* Card body END */}
                  {/* Card footer START */}
                  <div className="card-footer border-0 pt-0">
                    {/* Load more comments */}
                    <Link
                      to="#!"
                      role="button"
                      className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      <div className="spinner-dots me-2">
                        <span className="spinner-dot" />
                        <span className="spinner-dot" />
                        <span className="spinner-dot" />
                      </div>
                      Load more comments
                    </Link>
                  </div>
                  {/* Card footer END */}
                </div>
                {/* Card feed item END */}
              </div>
              {/* Load more button START */}
              <Link
                to="#!"
                role="button"
                className="btn btn-loader btn-primary-soft"
                data-bs-toggle="button"
                aria-pressed="true"
              >
                <span className="load-text"> Load more </span>
                <div className="load-icon">
                  <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </Link>
              {/* Load more button END */}
            </div>
            {/* Main content END */}
            <RightSidebar />
          </div>
        </div>
      </main>
      <MainChat />
      <MainPageModal />
    </Fragment>
  );
};

export default MainPage;
