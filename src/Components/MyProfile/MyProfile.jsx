import React, { Fragment, useEffect, useState } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import MainPageModal from "../../Main-Page/MainModal/MainPageModal";
import bhumi from "../../assets/images/avatar/bhumibazzar.jpg";
import avtar5 from "../../assets/images/avatar/05.jpg";
import avtar12 from "../../assets/images/avatar/12.jpg";
import avtar6 from "../../assets/images/avatar/06.jpg";
import avtar7 from "../../assets/images/avatar/07.jpg";
import avtar11 from "../../assets/images/avatar/11.jpg";
import avtar1 from "../../assets/images/avatar/01.jpg";
import avtar2 from "../../assets/images/avatar/02.jpg";
import avtar3 from "../../assets/images/avatar/03.jpg";
import avtar4 from "../../assets/images/avatar/04.jpg";
import placeholder from "../../assets/images/avatar/placeholder.jpg";
import event1 from "../../assets/images/events/01.jpg";
import property from "../../assets/images/post/property/image_2025_02_25T11_35_43_643Z.png";
import hall from "../../assets/images/post/property/hall.webp";
import bedroom from "../../assets/images/post/property/bedrrom.webp";
import dinnig from "../../assets/images/post/property/dinnig room.webp";
import kithen from "../../assets/images/post/property/kithen.webp";
import livingroom from "../../assets/images/post/property/livingroom.webp";
import green from "../../assets/images/post/property/jaypee-green-noida-residential-space-500x500.webp";
import png1 from "../../assets/images/post/property/commercial.png";
import png2 from "../../assets/images/post/property/ressidentail.png";
import png3 from "../../assets/images/post/property/rent.png";
import { Link } from "react-router-dom";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Dropzone from "dropzone";

const MyProfile = () => {
    // Tabs navigation
  const [activeTab, setActiveTab] = useState("my-posts-section");

  const handleTabClick = (event, targetId) => {
    event.preventDefault();
    setActiveTab(targetId);
  };



//   Modal
    const [selectedCategory, setSelectedCategory] = useState("");
  
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  
  // uplode file
    useEffect(() => {
      const dropzoneElement = document.getElementById("file-dropzone");
      if (dropzoneElement && !dropzoneElement.dropzone) {
        const myDropzone = new Dropzone(dropzoneElement, {
          url: "/upload",
          maxFiles: 1,
          maxFilesize: 5,
          addRemoveLinks: true,
          acceptedFiles: ".pdf,.doc,.docx,.jpg,.png",
          autoProcessQueue: true, 
          dictDefaultMessage:
            "Drop presentation and document here or click to upload.",
          
        });
  
        // Optional event listeners
        myDropzone.on("addedfile", (file) => {
          console.log("File added:", file);
        });
  
        myDropzone.on("removedfile", (file) => {
          console.log("File removed:", file);
        });
  
        myDropzone.on("success", (file, response) => {
          console.log("File uploaded successfully:", response);
        });
  
        myDropzone.on("error", (file, errorMessage) => {
          console.error("Error uploading file:", errorMessage);
        });
      }
  
      return () => {
        if (dropzoneElement && dropzoneElement.dropzone) {
          dropzoneElement.dropzone.destroy();
        }
      };
    }, []);
  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 vstack gap-4">
              {/* My profile START */}
              <div className="card">
                {/* Cover image */}
                <div className="h-200px rounded-top my-profile-bg-img" />
                {/* Card body START */}
                <div className="card-body py-0">
                  <div className="d-sm-flex align-items-start text-center text-sm-start">
                    <div>
                      {/* Avatar */}
                      <div className="avatar avatar-xxl mt-n5 mb-3">
                        <img
                          className="avatar-img rounded-circle border border-white border-3"
                          src={bhumi}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ms-sm-4 mt-sm-3">
                      {/* Info */}
                      <h1 className="mb-0 h5" style={{ fontSize: 17 }}>
                        Mahipal Chaudhary{" "}
                        <i className="bi bi-patch-check-fill text-success small" />
                      </h1>
                      <p>250 connections</p>
                    </div>
                    {/* Button */}
                    <div className="d-flex mt-3 justify-content-center ms-sm-auto">
                      <button
                        className="btn btn-danger-soft me-2 new-danger-btnn-sec"
                        type="button"
                      >
                        <Link to="/account">
                          {" "}
                          <i className="bi bi-pencil-fill pe-1" />
                        </Link>
                      </button>
                      <button
                        className="btn  btn-sm btn-primary-soft me-2"
                        type="button"
                      >
                        {" "}
                        Followers (300){" "}
                      </button>
                      <button
                        className="btn btn-sm btn-primary-soft me-2"
                        type="button"
                      >
                        {" "}
                        Following (100){" "}
                      </button>
                    </div>
                  </div>
                  {/* List profile */}
                  <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
                    <li className="list-inline-item">
                      <i className="bi bi-briefcase me-1" />
                      JSR Consultants
                    </li>{" "}
                    <li className="list-inline-item">
                      <i className="bi bi-geo-alt me-1" />
                      Greater Noida
                    </li>{" "}
                    <li className="list-inline-item">
                      <i className="bi bi-calendar2-plus me-1" /> Joined on Nov
                      26, 2019
                    </li>
                  </ul>
                </div>
                {/* Card body END */}
                <div className="card-footer mt-3 pt-2 pb-0">
                  {/* Nav profile pages */}
                  <ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                    <li className="nav-item">
                      {" "}
                      <Link
                        className={`nav-link ${
                          activeTab === "my-posts-section" ? "active" : ""
                        }`}
                        to="#my-posts-section"
                        onClick={(event) =>
                          handleTabClick(event, "my-posts-section")
                        }
                      >
                        Posts
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        className={`nav-link ${
                          activeTab === "my-connections-section" ? "active" : ""
                        }`}
                        to="#my-connections-section"
                        onClick={(event) =>
                          handleTabClick(event, "my-connections-section")
                        }
                      >
                        Connections{" "}
                        <span className="badge bg-success bg-opacity-10 text-success small">
                          {" "}
                          230
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        className={`nav-link ${
                          activeTab === "my-event-section" ? "active" : ""
                        }`}
                        to="#my-event-section"
                        onClick={(event) =>
                          handleTabClick(event, "my-event-section")
                        }
                      >
                        Events
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        className={`nav-link ${
                          activeTab === "my-activity-section" ? "active" : ""
                        }`}
                        to="#my-activity-section"
                        onClick={(event) =>
                          handleTabClick(event, "my-activity-section")
                        }
                      >
                        Activity
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* My profile END */}

              <div>
                <div
                  id="my-posst-section"
                  className="tab-content p-0"
                  style={{
                    display:
                      activeTab === "my-posts-section" ? "block" : "none",
                  }}
                >
                  <div className="card card-body">
                    <div className="d-flex mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs me-2">
                        <Link to="#">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src={bhumi}
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
                          to="addproperty.html"
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
                  <div className="card feed-item mt-4">
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
                              <button className="btn btn-sm btn-primary-soft">
                                Buy
                              </button>{" "}
                              <button className="btn btn-sm btn-primary-soft">
                                Residential
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
                          <Link
                            className="nav-link active"
                            to="#!"
                            data-bs-container="body"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-html="true"
                            data-bs-custom-class="tooltip-text-start"
                            data-bs-title="Frances Guerrero<br> Lori Stevens<br> Billy Vasquez<br> Judy Nguyen<br> Larry Lawson<br> Amanda Reed<br> Louis Crawford"
                          >
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
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="requirement-match-property.html"
                          >
                            {" "}
                            20+ property match
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link "
                            to="#!"
                            data-bs-container="body"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-html="true"
                            data-bs-custom-class="tooltip-text-start"
                            data-bs-title="20 seen"
                          >
                            {" "}
                            <i className="bi bi-eye-fill" />
                          </Link>
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
                  <div className="card feed-item mt-4">
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
                              to="assets/images/post/property/hall.webp"
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
                              to="assets/images/post/property/bedrrom.webp"
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
                              to="assets/images/post/property/dinnig room.webp"
                              data-gallery="image-popup"
                              data-glightbox=""
                            >
                              <img
                                className="rounded img-fluid"
                                src={dinnig}
                                alt=""
                              />
                            </Link>
                          </div>
                          {/* Photos item */}
                          <div className="col-4">
                            <Link
                              to="assets/images/post/property/kithen.webp"
                              data-gallery="image-popup"
                              data-glightbox=""
                            >
                              <img
                                className="rounded img-fluid"
                                src={kithen}
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
                              to="assets/images/post/property/livingroom.webp"
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
                          <Link
                            className="nav-link active"
                            to="#!"
                            data-bs-container="body"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-html="true"
                            data-bs-custom-class="tooltip-text-start"
                            data-bs-title="Frances Guerrero<br> Lori Stevens<br> Billy Vasquez<br> Judy Nguyen<br> Larry Lawson<br> Amanda Reed<br> Louis Crawford"
                          >
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
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="property-match-requirement.html"
                          >
                            {" "}
                            20+ Requirement match
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link "
                            to="#!"
                            data-bs-container="body"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-html="true"
                            data-bs-custom-class="tooltip-text-start"
                            data-bs-title="20 seen"
                          >
                            {" "}
                            <i className="bi bi-eye-fill" />
                          </Link>
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
                  <div className="card feed-item mt-4">
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
                        <Link to="event-details.html">
                          <img className="card-img" src={property} alt="Post" />
                        </Link>
                      </div>
                      <div className="Event-add-sec mt-3">
                        <h4>
                          <Link to="event-details.html">
                            {" "}
                            <i className="bi bi-buildings" /> M3M Launches
                            Luxury Residence Project in Gurgaon and Noida.
                          </Link>
                        </h4>
                        <div className="row">
                          <p className="col-4 text-center">
                            <i className="bi bi-geo-alt-fill" /> Gold Course
                            Road Ext. MG Road Gurgaon
                          </p>
                          <p className="col-4  text-center">
                            <i className="bi bi-calendar" /> Launch Date : 12
                            Feb 2025, 10 : 00 AM
                          </p>
                          <p className="col-4  text-center">
                            EOI Open : 12 Feb 2025 - 1 March 2025.{" "}
                          </p>
                        </div>
                      </div>
                      <ul className="nav nav-stack py-3 small">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="#!"
                            data-bs-container="body"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-html="true"
                            data-bs-custom-class="tooltip-text-start"
                            data-bs-title="Frances Guerrero<br> Lori Stevens<br> Billy Vasquez<br> Judy Nguyen<br> Larry Lawson<br> Amanda Reed<br> Louis Crawford"
                          >
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
                        <li className="nav-item">
                          <Link
                            className="nav-link "
                            to="#!"
                            data-bs-container="body"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-html="true"
                            data-bs-custom-class="tooltip-text-start"
                            data-bs-title="20 seen"
                          >
                            {" "}
                            <i className="bi bi-eye-fill" />
                          </Link>
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
                </div>

                <div
                  id="my-connections-section"
                  className="tab-content p-0"
                  style={{
                    display:
                      activeTab === "my-connections-section" ? "block" : "none",
                  }}
                >
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header border-0 pb-0">
                      <h5 className="card-title"> Connections</h5>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className="card-body">
                      {/* Connections Item */}
                      <div className="d-md-flex align-items-center mb-4">
                        {/* Avatar */}
                        <div className="avatar me-3 mb-3 mb-md-0">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar1}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Info */}
                        <div className="w-100">
                          <div className="d-sm-flex align-items-start">
                            <h6 className="mb-0">
                              <Link to="#!">Lori Ferguson </Link>
                            </h6>
                            <p className="small ms-sm-2 mb-0">
                              Full Stack Web Developer
                            </p>
                          </div>
                          {/* Connections START */}
                          <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                            <li className="avatar avatar-xxs">
                              <img
                                className="avatar-img rounded-circle"
                                src={avtar1}
                                alt="avatar"
                              />
                            </li>
                            <li className="avatar avatar-xxs">
                              <img
                                className="avatar-img rounded-circle"
                                src={avtar2}
                                alt="avatar"
                              />
                            </li>
                            <li className="avatar avatar-xxs">
                              <img
                                className="avatar-img rounded-circle"
                                src={avtar3}
                                alt="avatar"
                              />
                            </li>
                            <li className="avatar avatar-xxs">
                              <img
                                className="avatar-img rounded-circle"
                                src={avtar4}
                                alt="avatar"
                              />
                            </li>
                            <li className="avatar avatar-xxs">
                              <div className="avatar-img rounded-circle bg-primary">
                                <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                  +2
                                </span>
                              </div>
                            </li>
                            <li className="small ms-3">
                              Carolyn Ortiz, Frances Guerrero, and 20 other
                              shared connections
                            </li>
                          </ul>
                          {/* Connections END */}
                        </div>
                        {/* Button */}
                        <div className="ms-md-auto d-flex">
                          <button className="btn btn-danger-soft btn-sm mb-0 me-2">
                            {" "}
                            Remove{" "}
                          </button>
                          <button className="btn btn-primary-soft btn-sm mb-0">
                            {" "}
                            Message{" "}
                          </button>
                        </div>
                      </div>
                      {/* Connections Item */}
                      <div className="d-md-flex align-items-center mb-4">
                        {/* Avatar */}
                        <div className="avatar me-3 mb-3 mb-md-0">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar2}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Info */}
                        <div className="w-100">
                          <div className="d-sm-flex align-items-start">
                            <h6 className="mb-0">
                              <Link to="#!">Carolyn Ortiz </Link>
                            </h6>
                            <p className="small ms-sm-2 mb-0">
                              Web Developer | Freelancer
                            </p>
                          </div>
                          {/* Connections START */}
                          <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                            <li className="avatar avatar-xxs">
                              <img
                                className="avatar-img rounded-circle"
                                src={avtar4}
                                alt="avatar"
                              />
                            </li>
                            <li className="avatar avatar-xxs">
                              <img
                                className="avatar-img rounded-circle"
                                src={avtar6}
                                alt="avatar"
                              />
                            </li>
                            <li className="avatar avatar-xxs">
                              <img
                                className="avatar-img rounded-circle"
                                src={avtar7}
                                alt="avatar"
                              />
                            </li>
                            <li className="avatar avatar-xxs">
                              <div className="avatar-img rounded-circle bg-primary">
                                <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                  +5
                                </span>
                              </div>
                            </li>
                            <li className="small ms-3">
                              Amanda Reed, Lori Stevens, and 10 other shared
                              connections
                            </li>
                          </ul>
                          {/* Connections END */}
                        </div>
                        {/* Button */}
                        <div className="ms-md-auto d-flex">
                          <button className="btn btn-danger-soft btn-sm mb-0 me-2">
                            {" "}
                            Remove{" "}
                          </button>
                          <button className="btn btn-primary-soft btn-sm mb-0">
                            {" "}
                            Message{" "}
                          </button>
                        </div>
                      </div>
                      {/* Connections Item */}
                      <div className="d-md-flex align-items-center mb-4">
                        {/* Avatar */}
                        <div className="avatar me-3 mb-3 mb-md-0">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar3}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Info */}
                        <div className="w-100">
                          <div className="d-sm-flex align-items-start">
                            <h6 className="mb-0">
                              <Link to="#!">Lori Ferguson </Link>
                            </h6>
                            <p className="small ms-sm-2 mb-0">
                              Full Stack Web Developer
                            </p>
                          </div>
                          {/* Connections START */}
                          <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                            <li className="small">
                              Joan Wallace and Larry Lawson shared connections
                            </li>
                          </ul>
                          {/* Connections END */}
                        </div>
                        {/* Button */}
                        <div className="ms-md-auto d-flex">
                          <button className="btn btn-danger-soft btn-sm mb-0 me-2">
                            {" "}
                            Remove{" "}
                          </button>
                          <button className="btn btn-primary-soft btn-sm mb-0">
                            {" "}
                            Message{" "}
                          </button>
                        </div>
                      </div>
                      {/* Connections Item */}
                      <div className="d-md-flex align-items-center mb-4">
                        {/* Avatar */}
                        <div className="avatar me-3 mb-3 mb-md-0">
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
                        <div className="w-100">
                          <div className="d-sm-flex align-items-start">
                            <h6 className="mb-0">
                              <Link to="#!">Lori Ferguson </Link>
                            </h6>
                            <p className="small ms-sm-2 mb-0">
                              Full Stack Web Developer
                            </p>
                          </div>
                          {/* Connections START */}
                          <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                            <li className="small">
                              Samuel Bishop, Judy Nguyen, and 115 other shared
                              connections
                            </li>
                          </ul>
                          {/* Connections END */}
                        </div>
                        {/* Button */}
                        <div className="ms-md-auto d-flex">
                          <button className="btn btn-danger-soft btn-sm mb-0 me-2">
                            {" "}
                            Remove{" "}
                          </button>
                          <button className="btn btn-primary-soft btn-sm mb-0">
                            {" "}
                            Message{" "}
                          </button>
                        </div>
                      </div>
                      {/* Connections Item */}
                      <div className="d-md-flex align-items-center mb-4">
                        {/* Avatar */}
                        <div className="avatar me-3 mb-3 mb-md-0">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar5}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Info */}
                        <div className="w-100">
                          <div className="d-sm-flex align-items-start">
                            <h6 className="mb-0">
                              <Link to="#!">Lori Ferguson </Link>
                            </h6>
                            <p className="small ms-sm-2 mb-0">
                              Full Stack Web Developer
                            </p>
                          </div>
                          {/* Connections START */}
                          <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                            <li className="small">
                              Bryan Knight and Billy Vasquez shared connections
                            </li>
                          </ul>
                          {/* Connections END */}
                        </div>
                        {/* Button */}
                        <div className="ms-md-auto d-flex">
                          <button className="btn btn-danger-soft btn-sm mb-0 me-2">
                            {" "}
                            Remove{" "}
                          </button>
                          <button className="btn btn-primary-soft btn-sm mb-0">
                            {" "}
                            Message{" "}
                          </button>
                        </div>
                      </div>
                      <div className="d-grid">
                        {/* Load more button START */}
                        <Link
                          to="#!"
                          role="button"
                          className="btn btn-sm btn-loader btn-primary-soft"
                          data-bs-toggle="button"
                          aria-pressed="true"
                        >
                          <span className="load-text">
                            {" "}
                            Load more connections{" "}
                          </span>
                          <div className="load-icon">
                            <div
                              className="spinner-grow spinner-grow-sm"
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </div>
                        </Link>
                        {/* Load more button END */}
                      </div>
                    </div>
                    {/* Card body END */}
                  </div>
                </div>
                <div
                  id="my-Event-section"
                  className="tab-content p-0"
                  style={{
                    display:
                      activeTab === "my-event-section" ? "block" : "none",
                  }}
                >
                  {/* Events START */}
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header d-sm-flex align-items-center justify-content-between border-0 pb-0">
                      <h5 className="card-title mb-sm-0">Discover Events</h5>
                      {/* Button modal */}
                      <Link className="btn btn-primary-soft btn-sm" to="#">
                        {" "}
                        <i className="fa-solid fa-plus pe-1" /> Create events
                      </Link>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className="card-body">
                      {/* Upcoming event START */}
                      <div
                        className="alert alert-success alert-dismissible fade show"
                        role="alert"
                      >
                        <strong>Upcoming event:</strong> The learning conference
                        on Sep 19 2024
                        <Link
                          to="/events"
                          className="btn btn-xs btn-success ms-md-4"
                        >
                          View event
                        </Link>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        />
                      </div>
                      {/* Upcoming event END */}
                      {/* Events list START */}
                      <div className="row">
                        <div className="d-sm-flex align-items-center">
                          {/* Avatar */}
                          <div className="avatar avatar-xl">
                            <Link to="#!">
                              <img
                                className="avatar-img rounded border border-white border-3"
                                src={event1}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="ms-sm-4 mt-2 mt-sm-0">
                            {/* Info */}
                            <h5 className="mb-1">
                              <Link to="event-details.html">
                                {" "}
                                Comedy on the green{" "}
                              </Link>
                            </h5>
                            <ul className="nav nav-stack small">
                              <li className="nav-item">
                                <i className="bi bi-calendar-check pe-1" /> Mon,
                                Sep 25, 2020 at 9:30 AM
                              </li>
                              <li className="nav-item">
                                <i className="bi bi-geo-alt pe-1" /> San
                                francisco
                              </li>
                              <li className="nav-item">
                                <i className="bi bi-people pe-1" /> 77 going
                              </li>
                            </ul>
                          </div>
                          {/* Button */}
                          <div className="d-flex mt-3 ms-auto">
                            <div className="dropdown">
                              {/* Card share action menu */}
                              <button
                                className="icon-md btn btn-secondary-soft"
                                type="button"
                                id="profileAction"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bi bi-three-dots" />
                              </button>
                              {/* Card share action dropdown menu */}
                              <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="profileAction"
                              >
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    {" "}
                                    <i className="bi bi-bookmark fa-fw pe-2" />
                                    Share profile in a message
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    {" "}
                                    <i className="bi bi-file-earmark-pdf fa-fw pe-2" />
                                    Save your profile to PDF
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    {" "}
                                    <i className="bi bi-lock fa-fw pe-2" />
                                    Lock profile
                                  </Link>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    {" "}
                                    <i className="bi bi-gear fa-fw pe-2" />
                                    Profile settings
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Events list END */}
                    </div>
                    {/* Card body END */}
                  </div>
                  {/* Events START */}
                </div>
                <div
                  id="my-activity-section"
                  className="tab-content p-0"
                  style={{
                    display:
                      activeTab === "my-activity-section" ? "block" : "none",
                  }}
                >
                  {/* Activity feed START */}
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header border-0 pb-0">
                      <h5 className="card-title"> Activity feed</h5>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className="card-body">
                      <div className="timeline">
                        {/* Timeline item START */}
                        <div className="timeline-item">
                          {/* Timeline icon */}
                          <div className="timeline-icon">
                            <div className="avatar text-center">
                              <img
                                className="avatar-img rounded-circle"
                                src={avtar7}
                                alt=""
                              />
                            </div>
                          </div>
                          {/* Timeline content */}
                          <div className="timeline-content">
                            <div className="d-sm-flex justify-content-between">
                              <div>
                                <p className="small mb-0">
                                  <b>Sam Lanson</b> update a playlist on
                                  StackBros.
                                </p>
                                <p className="small mb-0">
                                  <i className="bi bi-unlock-fill pe-1" />
                                  Public
                                </p>
                              </div>
                              <p className="small ms-sm-3 mt-2 mt-sm-0 text-nowrap">
                                Just now
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Timeline item END */}
                        {/* Timeline item START */}
                        <div className="timeline-item">
                          {/* Timeline icon */}
                          <div className="timeline-icon">
                            <div className="avatar text-center">
                              <img
                                className="avatar-img rounded-circle"
                                src={avtar1}
                                alt=""
                              />
                            </div>
                          </div>
                          {/* Timeline content */}
                          <div className="timeline-content">
                            <div className="d-sm-flex justify-content-between">
                              <div>
                                <p className="small mb-0">
                                  <b>Billy Vasquez</b> save a{" "}
                                  <Link to="#!">link.</Link>{" "}
                                </p>
                                <p className="small mb-0">
                                  <i className="bi bi-lock-fill pe-1" />
                                  only me
                                </p>
                              </div>
                              <p className="small ms-sm-3 mt-2 mt-sm-0">2min</p>
                            </div>
                          </div>
                        </div>
                        {/* Timeline item END */}
                        {/* Timeline item START */}
                        <div className="timeline-item align-items-center">
                          {/* Timeline icon */}
                          <div className="timeline-icon">
                            <div className="avatar text-center">
                              <div className="avatar-img rounded-circle bg-success">
                                <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">
                                  SM
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Timeline content */}
                          <div className="timeline-content">
                            <div className="d-sm-flex justify-content-between">
                              <div>
                                <p className="small mb-0">
                                  {" "}
                                  <b>Sam Lanson</b> liked{" "}
                                  <b> Frances Guerrero's </b> add comment.
                                </p>
                                <p className="small mb-0">
                                  This is the best picture I have come across
                                  today....{" "}
                                </p>
                              </div>
                              <p className="small mb-0 ms-sm-3">1hr</p>
                            </div>
                          </div>
                        </div>
                        {/* Timeline item END */}
                        {/* Timeline item START */}
                        <div className="timeline-item align-items-center">
                          {/* Timeline icon */}
                          <div className="timeline-icon">
                            <div className="avatar text-center">
                              <img
                                className="avatar-img rounded-circle"
                                src={avtar2}
                                alt=""
                              />
                            </div>
                          </div>
                          {/* Timeline content */}
                          <div className="timeline-content">
                            <div className="d-sm-flex justify-content-between">
                              <div>
                                <p className="small mb-0">
                                  <b>Judy Nguyen</b> likes{" "}
                                  <b>Jacqueline Miller</b> Photos.{" "}
                                </p>
                                <p className="mb-0">✌️👌👍</p>
                              </div>
                              <p className="small ms-sm-3 mt-2 mt-sm-0">4hr</p>
                            </div>
                          </div>
                        </div>
                        {/* Timeline item END */}
                        {/* Timeline item START */}
                        <div className="timeline-item">
                          {/* Timeline icon */}
                          <div className="timeline-icon">
                            <div className="avatar text-center">
                              <img
                                className="avatar-img rounded-circle"
                                src={avtar3}
                                alt=""
                              />
                            </div>
                          </div>
                          {/* Timeline content */}
                          <div className="timeline-content">
                            <div className="d-sm-flex justify-content-between">
                              <div>
                                <p className="small mb-0">
                                  <b>Larry Lawson</b>{" "}
                                </p>
                                <p className="small mb-2">
                                  Replied to your comment on Blogzine blog theme
                                </p>
                                <small className="bg-light rounded p-2 d-block">
                                  Yes, I am so excited to see it live. 👍
                                </small>
                              </div>
                              <p className="small ms-sm-3 mt-2 mt-sm-0">10hr</p>
                            </div>
                          </div>
                        </div>
                        {/* Timeline item END */}
                      </div>
                    </div>
                    {/* Card body END */}
                    {/* Card footer START */}
                    <div className="card-footer border-0 py-3 text-center position-relative d-grid pt-0">
                      {/* Load more button START */}
                      <Link
                        to="#!"
                        role="button"
                        className="btn btn-sm btn-loader btn-primary-soft"
                        data-bs-toggle="button"
                        aria-pressed="true"
                      >
                        <span className="load-text"> Load more activity </span>
                        <div className="load-icon">
                          <div
                            className="spinner-grow spinner-grow-sm"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      </Link>
                      {/* Load more button END */}
                    </div>
                    {/* Card footer END */}
                  </div>
                  {/* Activity feed END */}
                </div>
              </div>
            </div>

            {/* Right sidebar START */}
            <div className="col-lg-4">
              <div className="row g-4">
                {/* Card START */}
                <div className="col-md-6 col-lg-12">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h5 className="card-title">About</h5>
                      {/* Button modal */}
                    </div>
                    {/* Card body START */}
                    <div className="card-body position-relative pt-0">
                      <p>
                        He moonlights difficult engrossed it, sportsmen.
                        Interested has all Devonshire difficulty gay assistance
                        joy.
                      </p>
                      {/* Date time */}
                      <ul className="list-unstyled mt-3 mb-0">
                        <li className="mb-2">
                          {" "}
                          <i className="bi bi-calendar-date fa-fw pe-1" /> Born:{" "}
                          <strong> October 20, 1990 </strong>{" "}
                        </li>
                        <li className="mb-2">
                          {" "}
                          <i className="bi bi-heart fa-fw pe-1" /> Status:{" "}
                          <strong> Single </strong>{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-1" /> Email:{" "}
                          <strong> example@abc.com </strong>{" "}
                        </li>
                      </ul>
                    </div>
                    {/* Card body END */}
                  </div>
                </div>
                {/* Card END */}
                {/* Card START */}
                <div className="col-md-6 col-lg-12">
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header d-flex justify-content-between border-0">
                      <h5 className="card-title">Experties in City</h5>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className="card-body position-relative pt-0">
                      <form className="row g-3">
                        <div className="col-sm-12 ">
                          <label className="form-label">Working State</label>
                          {/* Select State (India) */}
                          <div className="form-selectsss d-flex flex-wrap gap-2 ">
                            <span className="new-data-from-acount-sec">
                              Uttar Pradesh{" "}
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <label className="form-label">Workable Cities*</label>
                          <div className="position-relative">
                            <div className="form-selectsss d-flex flex-wrap gap-2 ">
                              <span className="new-data-from-acount-sec">
                                {" "}
                                Gurgaon <i className="bi bi-check-lg" />
                              </span>
                              <span className="new-data-from-acount-sec">
                                {" "}
                                Noida <i className="bi bi-check-lg" />
                              </span>
                              <span className="new-data-from-acount-sec">
                                {" "}
                                Greater-Noida <i className="bi bi-check-lg" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <label className="form-label">Working Areas*</label>
                          <div className="position-relative">
                            <div className="form-selectsss d-flex flex-wrap gap-2 ">
                              <span className="new-data-from-acount-sec">
                                Noida Sectot 16 <i className="bi bi-check-lg" />
                              </span>
                              <span className="new-data-from-acount-sec">
                                Greater-Noida Sector 4{" "}
                                <i className="bi bi-check-lg" />
                              </span>
                              <span className="new-data-from-acount-sec">
                                {" "}
                                Gurgaon Sector 47{" "}
                                <i className="bi bi-check-lg" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Card body END */}
                  </div>
                </div>
                {/* Card END */}
                {/* Card START */}
                <div className="col-md-6 col-lg-12">
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header d-sm-flex justify-content-between align-items-center border-0">
                      <h5 className="card-title">
                        Friends{" "}
                        <span className="badge bg-danger bg-opacity-10 text-danger">
                          230
                        </span>
                      </h5>
                      <Link className="btn btn-primary-soft btn-sm" to="#!">
                        {" "}
                        See all friends
                      </Link>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className="card-body">
                      {/* Connection item START */}
                      <div className="hstack gap-2 mb-3">
                        {/* Avatar */}
                        <div className="avatar">
                          <Link to="#!">
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar4}
                              alt=""
                            />
                          </Link>
                        </div>
                        {/* Title */}
                        <div className="overflow-hidden">
                          <Link
                            className="h6 mb-0"
                            to="#!"
                            style={{ fontSize: 13 }}
                          >
                            Rahul Chaudhary{" "}
                          </Link>
                          <p className="mb-0 small text-truncate">
                            Realty Dart
                          </p>
                        </div>
                        {/* Button */}
                        <Link
                          className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                          to="#"
                        >
                          <i className="fa-solid fa-plus"> </i>
                        </Link>
                      </div>
                      {/* Connection item END */}
                      {/* Connection item START */}
                      <div className="hstack gap-2 mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-story">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar5}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Title */}
                        <div className="overflow-hidden">
                          <Link
                            className="h6 mb-0"
                            to="#!"
                            style={{ fontSize: 13 }}
                          >
                            Shakti Pratap
                          </Link>
                          <p className="mb-0 small text-truncate">AMRS</p>
                        </div>
                        {/* Button */}
                        <Link
                          className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                          to="#"
                        >
                          <i className="fa-solid fa-plus"> </i>
                        </Link>
                      </div>
                      {/* Connection item END */}
                      {/* Connection item START */}
                      <div className="hstack gap-2 mb-3">
                        {/* Avatar */}
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
                        {/* Title */}
                        <div className="overflow-hidden">
                          <Link
                            className="h6 mb-0"
                            to="#!"
                            style={{ fontSize: 13 }}
                          >
                            Mariyan Chandel{" "}
                          </Link>
                          <p className="mb-0 small text-truncate">Nobroker</p>
                        </div>
                        {/* Button */}
                        <Link
                          className="btn btn-primary rounded-circle icon-md ms-auto"
                          to="#"
                        >
                          <i className="bi bi-person-check-fill"> </i>
                        </Link>
                      </div>
                      {/* Connection item END */}
                      {/* Connection item START */}
                      <div className="hstack gap-2 mb-3">
                        {/* Avatar */}
                        <div className="avatar">
                          <Link to="#">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar1}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Title */}
                        <div className="overflow-hidden">
                          <Link
                            className="h6 mb-0"
                            to="#!"
                            style={{ fontSize: 13 }}
                          >
                            Gajendra Chandel
                          </Link>
                          <p className="mb-0 small text-truncate">Webkype</p>
                        </div>
                        {/* Button */}
                        <Link
                          className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                          to="#"
                        >
                          <i className="fa-solid fa-plus"> </i>
                        </Link>
                      </div>
                      {/* Connection item END */}
                      {/* Connection item START */}
                      <div className="hstack gap-2 mb-3">
                        {/* Avatar */}
                        <div className="avatar">
                          <Link to="#">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={placeholder}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Title */}
                        <div className="overflow-hidden">
                          <Link
                            className="h6 mb-0"
                            to="#!"
                            style={{ fontSize: 13 }}
                          >
                            Ankit Singh{" "}
                          </Link>
                          <p className="mb-0 small text-truncate">99acres</p>
                        </div>
                        {/* Button */}
                        <Link
                          className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                          to="#"
                        >
                          <i className="fa-solid fa-plus"> </i>
                        </Link>
                      </div>
                      {/* Connection item END */}
                      {/* View more button */}
                      <div className="d-grid mt-3">
                        <Link className="btn btn-sm btn-primary-soft" to="#!">
                          View more
                        </Link>
                      </div>
                    </div>
                    {/* Card body END */}
                  </div>
                </div>
                {/* Card END */}
              </div>
            </div>
            {/* Right sidebar END */}
          </div>
        </div>
      </main>
      {/*------- modal---- */}

<div
  className="modal fade"
  id="feedActionPhoto"
  tabIndex={-1}
  aria-labelledby="feedActionPhotoLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content">
      {/* Modal feed header START */}
      <div className="modal-header">
        <h5 className="modal-title" id="feedActionPhotoLabel">
          Real Estate Demand Form
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      {/* Modal feed header END */}
      {/* Modal feed body START */}
      <div className="modal-body">
        {/* Add Feed */}
        <div className="d-flex">
          {/* Avatar */}
          <div className="form-container w-100">
            <form className="form">
              {/* Type */}
              <div className="form-group">
                <label className="form-label">Type:</label>
                <div className="btn-group" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="type"
                    id="type1"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-secondary" htmlFor="type1">
                    Demand
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="type"
                    id="type2"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-secondary" htmlFor="type2">
                    Property
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="type"
                    id="type3"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-secondary" htmlFor="type3">
                    Event
                  </label>
                </div>
              </div>
              {/* Property Category */}
              <div className="form-group">
                <label className="form-label">Property Category:</label>
                <div className="btn-group property-categories" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertyCategory"
                    id="Category1"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="Category1"
                  >
                    <img
                      src={png1}
                      alt=""
                    />
                    <span> Commercial</span>
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertyCategory"
                    id="Category2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="Category2"
                  >
                    <img
                      src={png2}
                      alt=""
                    />
                    <span> Residential</span>
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertyCategory"
                    id="Category3"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="Category3"
                  >
                    <img src={png3} alt="" />
                    <span> Rent</span>
                  </label>
                </div>
              </div>
              {/* Property Sub-Category */}
              <div className="form-group">
                <label className="form-label">Property Sub-Category:</label>
                <div className="btn-group" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertySubCategory"
                    id="subCategory1"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="subCategory1"
                  >
                    3 BHK
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertySubCategory"
                    id="subCategory2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="subCategory2"
                  >
                    4 BHK
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertySubCategory"
                    id="subCategory3"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="subCategory3"
                  >
                    Villa
                  </label>
                </div>
              </div>
              {/* Preferred Location */}
              <div className="form-group">
                <label className="form-label">Preferred Location:</label>
                <div className="btn-group" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="preferredLocation"
                    id="Location1"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="Location1"
                  >
                    Noida
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="preferredLocation"
                    id="Location2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="Location2"
                  >
                    Greater Noida
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="preferredLocation"
                    id="Location3"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="Location3"
                  >
                    Ghaziabad
                  </label>
                </div>
              </div>
              {/* Property Type */}
              <div className="form-group">
                <label className="form-label">Property Type:</label>
                <div className="btn-group" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertyType"
                    id="propertyType1"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="propertyType1"
                  >
                    Re-Sale
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertyType"
                    id="propertyType2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="propertyType2"
                  >
                    Fresh
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertyType"
                    id="propertyType3"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="propertyType3"
                  >
                    Inventor Unit
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertyType"
                    id="propertyType4"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="propertyType4"
                  >
                    New Launch
                  </label>
                </div>
              </div>
              {/* Budget Range */}
              <div className="form-group">
                <label className="form-label">Budget Range:</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Min Price"
                  />
                  <span className="input-group-text">-</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Max Price"
                  />
                </div>
              </div>
              {/* Size Range */}
              <div className="form-group">
                <label className="form-label">Size Range:</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Min Sqft"
                  />
                  <span className="input-group-text">-</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Max Sqft"
                  />
                </div>
              </div>
              {/* Loan Required */}
              <div className="form-group">
                <label className="form-label">Loan Required:</label>
                <select className="form-select">
                  <option selected="" disabled="">
                    Select an option
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Self-Funding</option>
                </select>
              </div>
              {/* Remarks */}
              <div className="form-group">
                <label className="form-label">Remarks (Comments):</label>
                <textarea
                  className="form-textarea"
                  rows={3}
                  placeholder="Additional details..."
                  defaultValue={""}
                />
              </div>
            </form>
          </div>
        </div>
        {/* Dropzone photo START */}
        {/* <div>
						<label class="form-label">Upload attachment</label>
						<div class="dropzone dropzone-default card shadow-none" data-dropzone='{"maxFiles":2}'>
							<div class="dz-message">
								<i class="bi bi-images display-3"></i>
								<p>Drag here or click to upload photo.</p>
							</div>
						</div>
					</div> */}
        {/* Dropzone photo END */}
      </div>
      {/* Modal feed body END */}
      {/* Modal feed footer */}
      <div className="modal-footer ">
        {/* Button */}
        <button
          type="button"
          className="btn btn-danger-soft me-2"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button type="button" className="btn btn-success-soft">
          Post
        </button>
      </div>
      {/* Modal feed footer */}
    </div>
  </div>
</div>
  <div
        className="modal fade"
        id="modalCreateFeed"
        tabIndex={-1}
        aria-labelledby="modalLabelCreateFeed"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            {/* Modal feed header START */}
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabelCreateFeed">
                Create post
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            {/* Modal feed header END */}
            {/* Modal feed body START */}
            <div className="modal-body">
              {/* Add Feed */}
              <div className="d-flex mb-3">
                {/* Avatar */}
                <div className="avatar avatar-xs me-2">
                  <img
                    className="avatar-img rounded-circle"
                    src={avtar3}
                    alt=""
                  />
                </div>
                {/* Feed box  */}
                <form className="w-100">
                  <textarea
                    className="form-control pe-4 fs-3 lh-1 border-0"
                    rows={4}
                    placeholder="Share your thoughts..."
                    autoFocus=""
                    defaultValue={""}
                  />
                </form>
              </div>
              {/* Feed rect START */}
              <div className="hstack gap-2">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-photo">Photo</Tooltip>}
                >
                  <Link
                    className="icon-md bg-success bg-opacity-10 text-success rounded-circle"
                    to="#"
                  >
                    <i className="bi bi-image-fill" />
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-video">Video</Tooltip>}
                >
                  <Link
                    className="icon-md bg-info bg-opacity-10 text-info rounded-circle"
                    to="#"
                  >
                    <i className="bi bi-camera-reels-fill" />
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-events">Events</Tooltip>}
                >
                  <Link
                    className="icon-md bg-danger bg-opacity-10 text-danger rounded-circle"
                    to="#"
                  >
                    <i className="bi bi-calendar2-event-fill" />
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top" // The tooltip will appear on top of the link
                  overlay={
                    <Tooltip id="tooltip-feeling">Feeling/Activity</Tooltip>
                  }
                >
                  <Link
                    className="icon-md bg-warning bg-opacity-10 text-warning rounded-circle"
                    to="#"
                  >
                    <i className="bi bi-emoji-smile-fill" />
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top" // Tooltip appears above the link
                  overlay={<Tooltip id="tooltip-check-in">Check in</Tooltip>}
                >
                  <Link
                    className="icon-md bg-light text-secondary rounded-circle"
                    to="#"
                  >
                    <i className="bi bi-geo-alt-fill" />
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top" // Tooltip placement on top of the link
                  overlay={
                    <Tooltip id="tooltip-tag">Tag people on top</Tooltip>
                  } // Tooltip content
                >
                  <Link
                    className="icon-md bg-primary bg-opacity-10 text-primary rounded-circle"
                    to="#"
                  >
                    <i className="bi bi-tag-fill" />
                  </Link>
                </OverlayTrigger>
              </div>
              {/* Feed rect END */}
            </div>
            {/* Modal feed body END */}
            {/* Modal feed footer */}
            <div className="modal-footer row justify-content-between">
              {/* Select */}
              <div className="col-lg-3">
                <select
                  className="form-select js-choice choice-select-text-none"
                  data-position="top"
                  data-search-enabled="false"
                >
                  <option value="PB">Public</option>
                  <option value="PV">Friends</option>
                  <option value="PV">Only me</option>
                  <option value="PV">Custom</option>
                </select>
                {/* Button */}
              </div>
              <div className="col-lg-8 text-sm-end">
                <button type="button" className="btn btn-danger-soft me-2">
                  {" "}
                  <i className="bi bi-camera-video-fill pe-1" /> Live video
                </button>
                <button type="button" className="btn btn-success-soft">
                  Post
                </button>
              </div>
            </div>
            {/* Modal feed footer */}
          </div>
        </div>
      </div>
      <div
  className="modal fade"
  id="feedActionVideo"
  tabIndex={-1}
  aria-labelledby="feedActionVideoLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      {/* Modal feed header START */}
      <div className="modal-header">
        <h5 className="modal-title" id="feedActionVideoLabel">
          Add Property
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      {/* Modal feed header END */}
      {/* Modal feed body START */}
      <div className="modal-body">
        {/* Add Feed */}
        <div className="d-flex ">
          {/* Avatar */}
          {/* <div class="avatar avatar-xs me-2">
							<img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="">
						</div> */}
          {/* Feed box  */}
          {/* <form class="w-100">
							<textarea class="form-control pe-4 fs-3 lh-1 border-0" rows="2" placeholder="Share your thoughts..."></textarea>
						</form> */}
          <div className="form-container w-100">
            <form className="form">
              {/* Type */}
              <div className="form-group">
                <label className="form-label">Type:</label>
                <div className="btn-group property-categories" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertyType"
                    id="proptype1"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="proptype1"
                  >
                    <img
                      src="assets/images/post/property/commercial.png"
                      alt=""
                    />
                    <span>Sell</span>
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertyType"
                    id="proptype2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="proptype2"
                  >
                    <img
                      src="assets/images/post/property/ressidentail.png"
                      alt=""
                    />
                    <span>Buy</span>
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertyType"
                    id="proptype3"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="proptype3"
                  >
                    <img src="assets/images/post/property/rent.png" alt="" />
                    <span>Rent</span>
                  </label>
                </div>
              </div>
              {/* Property Category */}
              <div className="form-group">
                <label className="form-label">Property Category:</label>
                <div className="btn-group property-categories" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertyCategory"
                    id="propCategory1"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="propCategory1"
                  >
                    <img
                      src="assets/images/post/property/commercial.png"
                      alt=""
                    />
                    <span>Commercial</span>
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertyCategory"
                    id="propCategory2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="propCategory2"
                  >
                    <img
                      src="assets/images/post/property/ressidentail.png"
                      alt=""
                    />
                    <span>Residential</span>
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertyCategory"
                    id="propCategory3"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="propCategory3"
                  >
                    <img src="assets/images/post/property/rent.png" alt="" />
                    <span>Rent</span>
                  </label>
                </div>
              </div>
              {/* Property Sub-Category */}
              <div className="form-group">
                <label className="form-label">Property Sub-Category:</label>
                <div className="btn-group" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertySubCategory"
                    id="add-subCategory1"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="add-subCategory1"
                  >
                    3 BHK
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertySubCategory"
                    id="add-subCategory2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="add-subCategory2"
                  >
                    4 BHK
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="propertySubCategory"
                    id="add-subCategory3"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="add-subCategory3"
                  >
                    Villa
                  </label>
                </div>
              </div>
              {/* Select Builder */}
              <div className="form-group">
                <label className="form-label">Select Builder:</label>
                <div className="btn-group" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="builderType"
                    id="builder1"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="builder1"
                  >
                    Owner
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="builderType"
                    id="builder2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="builder2"
                  >
                    Agent
                  </label>
                </div>
              </div>
              {/* Select Project (Society) */}
              <div className="form-group">
                <label className="form-label">Select Project (Society):</label>
                <div className="btn-group" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="projectType"
                    id="projectType1"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="projectType1"
                  >
                    Golf Home
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="projectType"
                    id="projectType2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="projectType2"
                  >
                    Gour
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="projectType"
                    id="projectType3"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="projectType3"
                  >
                    Saya
                  </label>
                </div>
              </div>
              {/* Property Address */}
              <div className="form-group">
                <label className="form-label">Property Address:</label>
                <input type="text" className="form-input" placeholder="Noida" />
              </div>
            </form>
          </div>
        </div>
        {/* Dropzone photo START */}
        <div>
          <label className="form-label">Upload Image</label>
          <div
            className="dropzone dropzone-default card shadow-none"
            data-dropzone='{"maxFiles":2}'
          >
            <div className="dz-message">
              <i className="bi bi-camera-reels display-3" />
              <p>Drag here or click to upload Image &amp; video.</p>
            </div>
          </div>
        </div>
        {/* Dropzone photo END */}
      </div>
      {/* Modal feed body END */}
      {/* Modal feed footer */}
      <div className="modal-footer">
        {/* Button */}
        <button
          type="button"
          className="btn btn-danger-soft me-2"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button type="button" className="btn btn-success-soft">
          Post
        </button>
      </div>
      {/* Modal feed footer */}
    </div>
  </div>
</div>
  <div
        className="modal fade"
        id="modalCreateEvents"
        tabIndex={-1}
        aria-labelledby="modalLabelCreateAlbum"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Modal feed header START */}
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabelCreateAlbum">
                Create event
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            {/* Modal feed header END */}
            {/* Modal feed body START */}
            <div className="modal-body">
              {/* Form START */}
              <form className="row g-4">
                {/* Title */}
                <div className="col-12">
                  <label className="form-label">Title</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Event name here"
                  />
                </div>
                {/* Description */}
                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Ex: topics, schedule, etc."
                    defaultValue={""}
                  />
                </div>
                {/* Date */}
                <div className="col-sm-4">
                  <label className="form-label">Date</label>
                  <input
                    type="text"
                    className="form-control flatpickr"
                    placeholder="Select date"
                  />
                </div>
                {/* Time */}
                <div className="col-sm-4">
                  <label className="form-label">Time</label>
                  <input
                    type="text"
                    className="form-control flatpickr"
                    data-enabletime="true"
                    data-nocalendar="true"
                    placeholder="Select time"
                  />
                </div>
                {/* Duration */}
                <div className="col-sm-4">
                  <label className="form-label">Duration</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="1hr 23m"
                  />
                </div>
                {/* Location */}
                <div className="col-12">
                  <label className="form-label">Location</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Logansport, IN 46947"
                  />
                </div>
                {/* Add guests */}
                <div className="col-12">
                  <label className="form-label">Add guests</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Guest email"
                  />
                </div>
                {/* Avatar group START */}
                <div className="col-12 mt-3">
                  <ul className="avatar-group list-unstyled align-items-center mb-0">
                    <li className="avatar avatar-xs">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar1}
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-xs">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar2}
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-xs">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar3}
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-xs">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar4}
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-xs">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar5}
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-xs">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar6}
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-xs">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar7}
                        alt="avatar"
                      />
                    </li>
                    <li className="ms-3">
                      <small> +50 </small>
                    </li>
                  </ul>
                </div>
                {/* Upload Photos or Videos */}
                {/* Dropzone photo START */}

                <div>
                  <label className="form-label">Upload attachment</label>
                  <div
                    id="file-dropzone"
                    className="dropzone dropzone-default card shadow-none"
                    data-dropzone='{"maxFiles":2}'
                    style={{
                      border: "2px dashed rgb(238, 238, 235)", // Adds a dashed border
                    }}
                  >
                    <div className="dz-message">
                      <i className="bi bi-file-earmark-text display-3" />
                      <p>
                        Drop presentation and document here or click to upload.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dropzone photo END */}
              </form>
              {/* Form END */}
            </div>
            {/* Modal feed body END */}
            {/* Modal footer */}
            {/* Button */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger-soft me-2"
                data-bs-dismiss="modal"
              >
                {" "}
                Cancel
              </button>
              <button type="button" className="btn btn-success-soft">
                Create now
              </button>
            </div>
          </div>
        </div>
      </div>



    </Fragment>
  );
};

export default MyProfile;
