import React, { Fragment, useEffect, useState } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import Alert from "../../Main-Page/Alert/Alert";
import LeftSidebar from "../../Main-Page/MainLeftBar/LeftSidebar";
import { Link } from "react-router-dom";
import RightSidebar from "../../Main-Page/MainRightBar/RightSidebar";
import png1 from "../../assets/images/post/property/commercial.png";
import png2 from "../../assets/images/post/property/ressidentail.png";
import png3 from "../../assets/images/post/property/rent.png";
import avtar3 from "../../assets/images/avatar/03.jpg";
import avtar2 from "../../assets/images/avatar/02.jpg";
import avtar1 from "../../assets/images/avatar/01.jpg";
import avtar4 from "../../assets/images/avatar/04.jpg";
import avtar5 from "../../assets/images/avatar/05.jpg";
import avtar6 from "../../assets/images/avatar/06.jpg";
import avtar7 from "../../assets/images/avatar/07.jpg";
import {Tooltip,  OverlayTrigger } from "react-bootstrap";
// import { Tooltip } from 'react-tooltip'
import Dropzone from "dropzone";

const PropertyMatch = () => {
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
    
        // Cleanup Dropzone on unmount
        return () => {
          if (dropzoneElement && dropzoneElement.dropzone) {
            dropzoneElement.dropzone.destroy(); // Clean up Dropzone instance
          }
        };
      }, []);
  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container">
          <Alert />
          <div className="row g-4">
            <LeftSidebar />
            <div className="col-md-8 col-lg-6 vstack gap-4">
              <div className="card card-body">
                <div className="d-flex mb-3">
                  {/* Avatar */}
                  <div className="avatar avatar-xs me-2">
                    <Link to="#">
                      {" "}
                      <img
                        className="avatar-img rounded-circle"
                        src="bhumibazzar.jpg"
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
              <div className="card">
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
                            src="bhumibazzar.jpg"
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
                        <p className="mb-0 small">Web Developer at Stackbros</p>
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
                    <h2 className="text-center mb-0">Requirement</h2>
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
                          <p className="mb-0 small mt-1">₹1.2 Cr - 2.0 Cr</p>
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
                        // data-tooltip-id="tooltip"
                        // data-tooltip-content="Chat"
                      >
                        {" "}
                        <i className="bi bi-hand-thumbs-up-fill pe-1" />
                        Liked (56)
                      </Link>
                      {/* <Tooltip id="tooltip"
                                style={{ backgroundColor: "#F3EDFF", color: "#3C2371" }}
                            /> */}
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#!">
                        {" "}
                        <i className="bi bi-chat-fill pe-1" />
                        Comments (12)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/requirement-match">
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
                  <div className="d-flex mb-3">
                    {/* Avatar */}
                    <div className="avatar avatar-xs me-2">
                      <Link to="#!">
                        {" "}
                        <img
                          className="avatar-img rounded-circle"
                          src="12.jpg"
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
                {/* Card footer END */}
              </div>
              <div className="card">
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
                            src="bhumibazzar.jpg"
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
                        <p className="mb-0 small">Web Developer at Stackbros</p>
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
                    <h2 className="text-center mb-0 ">Requirement</h2>
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
                          <p className="mb-0 small mt-1">₹1.2 Cr - 2.0 Cr</p>
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
                      <Link className="nav-link" to="/requirement-match">
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
                  <div className="d-flex mb-3">
                    {/* Avatar */}
                    <div className="avatar avatar-xs me-2">
                      <Link to="#!">
                        {" "}
                        <img
                          className="avatar-img rounded-circle"
                          src="12.jpg"
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
                {/* Card footer END */}
              </div>
              <div className="card">
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
                            src="bhumibazzar.jpg"
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
                        <p className="mb-0 small">Web Developer at Stackbros</p>
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
                    <h2 className="text-center mb-0">Requirement</h2>
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
                          <p className="mb-0 small mt-1">₹1.2 Cr - 2.0 Cr</p>
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
                      <Link className="nav-link" to="/requirement-match">
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
                  <div className="d-flex mb-3">
                    {/* Avatar */}
                    <div className="avatar avatar-xs me-2">
                      <Link to="#!">
                        {" "}
                        <img
                          className="avatar-img rounded-circle"
                          src="12.jpg"
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
                {/* Card footer END */}
              </div>
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
            </div>
            <RightSidebar />
          </div>
        </div>
      </main>
      <div className="d-none d-lg-block">
  {/* Button */}
  <Link
    className="icon-md btn btn-primary position-fixed end-0 bottom-0 me-5 mb-5"
    data-bs-toggle="offcanvas"
    to="#offcanvasChat"
    role="button"
    aria-controls="offcanvasChat"
  >
    <i className="bi bi-chat-left-text-fill" />
  </Link>
  {/* Chat sidebar START */}
  <div
    className="offcanvas offcanvas-end"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabIndex={-1}
    id="offcanvasChat"
  >
    {/* Offcanvas header */}
    <div className="offcanvas-header d-flex justify-content-between">
      <h5 className="offcanvas-title">Messaging</h5>
      <div className="d-flex">
        {/* New chat box open button */}
        <Link to="#" className="btn btn-secondary-soft-hover py-1 px-2">
          <i className="bi bi-pencil-square" />
        </Link>
        {/* Chat action START */}
        <div className="dropdown">
          <Link
            to="#"
            className="btn btn-secondary-soft-hover py-1 px-2"
            id="chatAction"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-three-dots" />
          </Link>
          {/* Chat action menu */}
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="chatAction"
          >
            <li>
              <Link className="dropdown-item" to="#">
                {" "}
                <i className="bi bi-check-square fa-fw pe-2" />
                Mark all as read
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                {" "}
                <i className="bi bi-gear fa-fw pe-2" />
                Chat setting{" "}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                {" "}
                <i className="bi bi-bell fa-fw pe-2" />
                Disable notifications
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                {" "}
                <i className="bi bi-volume-up-fill fa-fw pe-2" />
                Message sounds
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                {" "}
                <i className="bi bi-slash-circle fa-fw pe-2" />
                Block setting
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                {" "}
                <i className="bi bi-people fa-fw pe-2" />
                Create a group chat
              </Link>
            </li>
          </ul>
        </div>
        {/* Chat action END */}
        {/* Close  */}
        <Link
          to="#"
          className="btn btn-secondary-soft-hover py-1 px-2"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark" />
        </Link>
      </div>
    </div>
    {/* Offcanvas body START */}
    <div className="offcanvas-body pt-0 custom-scrollbar">
      {/* Search contact START */}
      <form className="rounded position-relative">
        <input
          className="form-control ps-5 bg-light"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
        <button
          className="btn bg-transparent px-3 py-0 position-absolute top-50 start-0 translate-middle-y"
          type="submit"
        >
          <i className="bi bi-search fs-5"> </i>
        </button>
      </form>
      {/* Search contact END */}
      <ul className="list-unstyled">
        {/* Contact item */}
        <li
          className="mt-3 hstack gap-3 align-items-center position-relative toast-btn"
          data-target="chatToast"
        >
          {/* Avatar */}
          <div className="avatar status-online">
            <img
              className="avatar-img rounded-circle"
              src="01.jpg"
              alt=""
            />
          </div>
          {/* Info */}
          <div className="overflow-hidden">
            <Link className="h6 mb-0 stretched-link" to="#!">
              Frances Guerrero{" "}
            </Link>
            <div className="small text-secondary text-truncate">
              Frances sent a photo.
            </div>
          </div>
          {/* Chat time */}
          <div className="small ms-auto text-nowrap"> Just now </div>
        </li>
        {/* Contact item */}
        <li
          className="mt-3 hstack gap-3 align-items-center position-relative toast-btn"
          data-target="chatToast2"
        >
          {/* Avatar */}
          <div className="avatar status-online">
            <img
              className="avatar-img rounded-circle"
              src="02.jpg"
              alt=""
            />
          </div>
          {/* Info */}
          <div className="overflow-hidden">
            <Link className="h6 mb-0 stretched-link" to="#!">
              Lori Ferguson{" "}
            </Link>
            <div className="small text-secondary text-truncate">
              You missed a call form Carolyn🤙
            </div>
          </div>
          {/* Chat time */}
          <div className="small ms-auto text-nowrap"> 1min </div>
        </li>
        {/* Contact item */}
        <li className="mt-3 hstack gap-3 align-items-center position-relative">
          {/* Avatar */}
          <div className="avatar status-offline">
            <img
              className="avatar-img rounded-circle"
              src="placeholder.jpg"
              alt=""
            />
          </div>
          {/* Info */}
          <div className="overflow-hidden">
            <Link className="h6 mb-0 stretched-link" to="#!">
              Samuel Bishop{" "}
            </Link>
            <div className="small text-secondary text-truncate">
              Day sweetness why cordially 😊
            </div>
          </div>
          {/* Chat time */}
          <div className="small ms-auto text-nowrap"> 2min </div>
        </li>
        {/* Contact item */}
        <li className="mt-3 hstack gap-3 align-items-center position-relative">
          {/* Avatar */}
          <div className="avatar">
            <img
              className="avatar-img rounded-circle"
              src="04.jpg"
              alt=""
            />
          </div>
          {/* Info */}
          <div className="overflow-hidden">
            <Link className="h6 mb-0 stretched-link" to="#!">
              Dennis Barrett{" "}
            </Link>
            <div className="small text-secondary text-truncate">
              Happy birthday🎂
            </div>
          </div>
          {/* Chat time */}
          <div className="small ms-auto text-nowrap"> 10min </div>
        </li>
        {/* Contact item */}
        <li className="mt-3 hstack gap-3 align-items-center position-relative">
          {/* Avatar */}
          <div className="avatar avatar-story status-online">
            <img
              className="avatar-img rounded-circle"
              src="05.jpg"
              alt=""
            />
          </div>
          {/* Info */}
          <div className="overflow-hidden">
            <Link className="h6 mb-0 stretched-link" to="#!">
              Judy Nguyen{" "}
            </Link>
            <div className="small text-secondary text-truncate">Thank you!</div>
          </div>
          {/* Chat time */}
          <div className="small ms-auto text-nowrap"> 2hrs </div>
        </li>
        {/* Contact item */}
        <li className="mt-3 hstack gap-3 align-items-center position-relative">
          {/* Avatar */}
          <div className="avatar status-online">
            <img
              className="avatar-img rounded-circle"
              src="06.jpg"
              alt=""
            />
          </div>
          {/* Info */}
          <div className="overflow-hidden">
            <Link className="h6 mb-0 stretched-link" to="#!">
              Carolyn Ortiz{" "}
            </Link>
            <div className="small text-secondary text-truncate">
              Greetings from Stackbros.
            </div>
          </div>
          {/* Chat time */}
          <div className="small ms-auto text-nowrap"> 1 day </div>
        </li>
        {/* Contact item */}
        <li className="mt-3 hstack gap-3 align-items-center position-relative">
          {/* Avatar */}
          <div className="flex-shrink-0 avatar">
            <ul className="avatar-group avatar-group-four">
              <li className="avatar avatar-xxs">
                <img
                  className="avatar-img rounded-circle"
                  src="06.jpg"
                  alt="avatar"
                />
              </li>
              <li className="avatar avatar-xxs">
                <img
                  className="avatar-img rounded-circle"
                  src="07.jpg"
                  alt="avatar"
                />
              </li>
              <li className="avatar avatar-xxs">
                <img
                  className="avatar-img rounded-circle"
                  src="08.jpg"
                  alt="avatar"
                />
              </li>
              <li className="avatar avatar-xxs">
                <img
                  className="avatar-img rounded-circle"
                  src="09.jpg"
                  alt="avatar"
                />
              </li>
            </ul>
          </div>
          {/* Info */}
          <div className="overflow-hidden">
            <Link
              className="h6 mb-0 stretched-link text-truncate d-inline-block"
              to="#!"
            >
              Frances, Lori, Amanda, Lawson{" "}
            </Link>
            <div className="small text-secondary text-truncate">
              Btw are you looking for job change?
            </div>
          </div>
          {/* Chat time */}
          <div className="small ms-auto text-nowrap"> 4 day </div>
        </li>
        {/* Contact item */}
        <li className="mt-3 hstack gap-3 align-items-center position-relative">
          {/* Avatar */}
          <div className="avatar status-offline">
            <img
              className="avatar-img rounded-circle"
              src="08.jpg"
              alt=""
            />
          </div>
          {/* Info */}
          <div className="overflow-hidden">
            <Link className="h6 mb-0 stretched-link" to="#!">
              Bryan Knight{" "}
            </Link>
            <div className="small text-secondary text-truncate">
              if you are available to discuss🙄
            </div>
          </div>
          {/* Chat time */}
          <div className="small ms-auto text-nowrap"> 6 day </div>
        </li>
        {/* Contact item */}
        <li className="mt-3 hstack gap-3 align-items-center position-relative">
          {/* Avatar */}
          <div className="avatar">
            <img
              className="avatar-img rounded-circle"
              src="09.jpg"
              alt=""
            />
          </div>
          {/* Info */}
          <div className="overflow-hidden">
            <Link className="h6 mb-0 stretched-link" to="#!">
              Louis Crawford{" "}
            </Link>
            <div className="small text-secondary text-truncate">
              🙌Congrats on your work anniversary!
            </div>
          </div>
          {/* Chat time */}
          <div className="small ms-auto text-nowrap"> 1 day </div>
        </li>
        {/* Contact item */}
        <li className="mt-3 hstack gap-3 align-items-center position-relative">
          {/* Avatar */}
          <div className="avatar status-online">
            <img
              className="avatar-img rounded-circle"
              src="10.jpg"
              alt=""
            />
          </div>
          {/* Info */}
          <div className="overflow-hidden">
            <Link className="h6 mb-0 stretched-link" to="#!">
              Jacqueline Miller{" "}
            </Link>
            <div className="small text-secondary text-truncate">
              No sorry, Thanks.
            </div>
          </div>
          {/* Chat time */}
          <div className="small ms-auto text-nowrap"> 15, dec </div>
        </li>
        {/* Contact item */}
        <li className="mt-3 hstack gap-3 align-items-center position-relative">
          {/* Avatar */}
          <div className="avatar">
            <img
              className="avatar-img rounded-circle"
              src="11.jpg"
              alt=""
            />
          </div>
          {/* Info */}
          <div className="overflow-hidden">
            <Link className="h6 mb-0 stretched-link" to="#!">
              Amanda Reed{" "}
            </Link>
            <div className="small text-secondary text-truncate">
              Interested can share CV at.
            </div>
          </div>
          {/* Chat time */}
          <div className="small ms-auto text-nowrap"> 18, dec </div>
        </li>
        {/* Contact item */}
        <li className="mt-3 hstack gap-3 align-items-center position-relative">
          {/* Avatar */}
          <div className="avatar status-online">
            <img
              className="avatar-img rounded-circle"
              src="12.jpg"
              alt=""
            />
          </div>
          {/* Info */}
          <div className="overflow-hidden">
            <Link className="h6 mb-0 stretched-link" to="#!">
              Larry Lawson{" "}
            </Link>
            <div className="small text-secondary text-truncate">
              Hope you're doing well and Safe.
            </div>
          </div>
          {/* Chat time */}
          <div className="small ms-auto text-nowrap"> 20, dec </div>
        </li>
        {/* Button */}
        <li className="mt-3 d-grid">
          <Link className="btn btn-primary-soft" to="/messaging">
            {" "}
            See all in messaging{" "}
          </Link>
        </li>
      </ul>
    </div>
    {/* Offcanvas body END */}
  </div>
  {/* Chat sidebar END */}
  {/* Chat END */}
  {/* Chat START */}
  <div aria-live="polite" aria-atomic="true" className="position-relative">
    <div className="toast-container toast-chat d-flex gap-3 align-items-end">
      {/* Chat toast START */}
      <div
        id="chatToast"
        className="toast mb-0 bg-mode"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-bs-autohide="false"
      >
        <div className="toast-header bg-mode">
          {/* Top avatar and status START */}
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex">
              <div className="flex-shrink-0 avatar me-2">
                <img
                  className="avatar-img rounded-circle"
                  src="01.jpg"
                  alt=""
                />
              </div>
              <div className="flex-grow-1">
                <h6 className="mb-0 mt-1">Frances Guerrero</h6>
                <div className="small text-secondary">
                  <i className="fa-solid fa-circle text-success me-1" />
                  Online
                </div>
              </div>
            </div>
            <div className="d-flex">
              {/* Call button */}
              <div className="dropdown">
                <Link
                  className="btn btn-secondary-soft-hover py-1 px-2"
                  to="#"
                  id="chatcoversationDropdown"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <i className="bi bi-three-dots-vertical" />
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="chatcoversationDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-camera-video me-2 fw-icon" />
                      Video call
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-telephone me-2 fw-icon" />
                      Audio call
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-trash me-2 fw-icon" />
                      Delete{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-chat-square-text me-2 fw-icon" />
                      Mark as unread
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-volume-up me-2 fw-icon" />
                      Muted
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-archive me-2 fw-icon" />
                      Archive
                    </Link>
                  </li>
                  <li className="dropdown-divider" />
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-flag me-2 fw-icon" />
                      Report
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Card action END */}
              <Link
                className="btn btn-secondary-soft-hover py-1 px-2"
                data-bs-toggle="collapse"
                to="#collapseChat"
                aria-expanded="false"
                aria-controls="collapseChat"
              >
                <i className="bi bi-dash-lg" />
              </Link>
              <button
                className="btn btn-secondary-soft-hover py-1 px-2"
                data-bs-dismiss="toast"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
          </div>
          {/* Top avatar and status END */}
        </div>
        <div className="toast-body collapse show" id="collapseChat">
          {/* Chat conversation START */}
          <div className="chat-conversation-content custom-scrollbar h-200px">
            {/* Chat time */}
            <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
            {/* Chat message left */}
            <div className="d-flex mb-1">
              <div className="flex-shrink-0 avatar avatar-xs me-2">
                <img
                  className="avatar-img rounded-circle"
                  src="01.jpg"
                  alt=""
                />
              </div>
              <div className="flex-grow-1">
                <div className="w-100">
                  <div className="d-flex flex-column align-items-start">
                    <div className="bg-light text-secondary p-2 px-3 rounded-2">
                      Applauded no discovery😊
                    </div>
                    <div className="small my-2">6:15 AM</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat message right */}
            <div className="d-flex justify-content-end text-end mb-1">
              <div className="w-100">
                <div className="d-flex flex-column align-items-end">
                  <div className="bg-primary text-white p-2 px-3 rounded-2">
                    With pleasure
                  </div>
                </div>
              </div>
            </div>
            {/* Chat message left */}
            <div className="d-flex mb-1">
              <div className="flex-shrink-0 avatar avatar-xs me-2">
                <img
                  className="avatar-img rounded-circle"
                  src="01.jpg"
                  alt=""
                />
              </div>
              <div className="flex-grow-1">
                <div className="w-100">
                  <div className="d-flex flex-column align-items-start">
                    <div className="bg-light text-secondary p-2 px-3 rounded-2">
                      Please find the attached
                    </div>
                    {/* Files START */}
                    {/* Files END */}
                    <div className="small my-2">12:16 PM</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat message left */}
            <div className="d-flex mb-1">
              <div className="flex-shrink-0 avatar avatar-xs me-2">
                <img
                  className="avatar-img rounded-circle"
                  src="01.jpg"
                  alt=""
                />
              </div>
              <div className="flex-grow-1">
                <div className="w-100">
                  <div className="d-flex flex-column align-items-start">
                    <div className="bg-light text-secondary p-2 px-3 rounded-2">
                      How promotion excellent curiosity😮
                    </div>
                    <div className="small my-2">3:22 PM</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat message right */}
            <div className="d-flex justify-content-end text-end mb-1">
              <div className="w-100">
                <div className="d-flex flex-column align-items-end">
                  <div className="bg-primary text-white p-2 px-3 rounded-2">
                    And sir dare view.
                  </div>
                  {/* Images */}
                  <div className="d-flex my-2">
                    <div className="small text-secondary">5:35 PM</div>
                    <div className="small ms-2">
                      <i className="fa-solid fa-check" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat time */}
            <div className="text-center small my-2">2 New Messages</div>
            {/* Chat Typing */}
            <div className="d-flex mb-1">
              <div className="flex-shrink-0 avatar avatar-xs me-2">
                <img
                  className="avatar-img rounded-circle"
                  src="01.jpg"
                  alt=""
                />
              </div>
              <div className="flex-grow-1">
                <div className="w-100">
                  <div className="d-flex flex-column align-items-start">
                    <div className="bg-light text-secondary p-3 rounded-2">
                      <div className="typing d-flex align-items-center">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Chat conversation END */}
          {/* Chat bottom START */}
          <div className="mt-2">
            {/* Chat textarea */}
            <textarea
              className="form-control mb-sm-0 mb-3"
              placeholder="Type a message"
              rows={1}
              defaultValue={""}
            />
            {/* Button */}
            <div className="d-sm-flex align-items-end mt-2">
              <button className="btn btn-sm btn-danger-soft me-2">
                <i className="fa-solid fa-face-smile fs-6" />
              </button>
              <button className="btn btn-sm btn-secondary-soft me-2">
                <i className="fa-solid fa-paperclip fs-6" />
              </button>
              <button className="btn btn-sm btn-success-soft me-2">
                {" "}
                Gif{" "}
              </button>
              <button className="btn btn-sm btn-primary ms-auto"> Send </button>
            </div>
          </div>
          {/* Chat bottom START */}
        </div>
      </div>
      {/* Chat toast END */}
      {/* Chat toast 2 START */}
      <div
        id="chatToast2"
        className="toast mb-0 bg-mode"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-bs-autohide="false"
      >
        <div className="toast-header bg-mode">
          {/* Top avatar and status START */}
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex">
              <div className="flex-shrink-0 avatar me-2">
                <img
                  className="avatar-img rounded-circle"
                  src="02.jpg"
                  alt=""
                />
              </div>
              <div className="flex-grow-1">
                <h6 className="mb-0 mt-1">Lori Ferguson</h6>
                <div className="small text-secondary">
                  <i className="fa-solid fa-circle text-success me-1" />
                  Online
                </div>
              </div>
            </div>
            <div className="d-flex">
              {/* Call button */}
              <div className="dropdown">
                <Link
                  className="btn btn-secondary-soft-hover py-1 px-2"
                  to="#"
                  id="chatcoversationDropdown2"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <i className="bi bi-three-dots-vertical" />
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="chatcoversationDropdown2"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-camera-video me-2 fw-icon" />
                      Video call
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-telephone me-2 fw-icon" />
                      Audio call
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-trash me-2 fw-icon" />
                      Delete{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-chat-square-text me-2 fw-icon" />
                      Mark as unread
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-volume-up me-2 fw-icon" />
                      Muted
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-archive me-2 fw-icon" />
                      Archive
                    </Link>
                  </li>
                  <li className="dropdown-divider" />
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-flag me-2 fw-icon" />
                      Report
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Card action END */}
              <Link
                className="btn btn-secondary-soft-hover py-1 px-2"
                data-bs-toggle="collapse"
                to="#collapseChat2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseChat2"
              >
                <i className="bi bi-dash-lg" />
              </Link>
              <button
                className="btn btn-secondary-soft-hover py-1 px-2"
                data-bs-dismiss="toast"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
          </div>
          {/* Top avatar and status END */}
        </div>
        <div className="toast-body collapse show" id="collapseChat2">
          {/* Chat conversation START */}
          <div className="chat-conversation-content custom-scrollbar h-200px">
            {/* Chat time */}
            <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
            {/* Chat message left */}
            <div className="d-flex mb-1">
              <div className="flex-shrink-0 avatar avatar-xs me-2">
                <img
                  className="avatar-img rounded-circle"
                  src="02.jpg"
                  alt=""
                />
              </div>
              <div className="flex-grow-1">
                <div className="w-100">
                  <div className="d-flex flex-column align-items-start">
                    <div className="bg-light text-secondary p-2 px-3 rounded-2">
                      Applauded no discovery😊
                    </div>
                    <div className="small my-2">6:15 AM</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat message right */}
            <div className="d-flex justify-content-end text-end mb-1">
              <div className="w-100">
                <div className="d-flex flex-column align-items-end">
                  <div className="bg-primary text-white p-2 px-3 rounded-2">
                    With pleasure
                  </div>
                </div>
              </div>
            </div>
            {/* Chat message left */}
            <div className="d-flex mb-1">
              <div className="flex-shrink-0 avatar avatar-xs me-2">
                <img
                  className="avatar-img rounded-circle"
                  src="02.jpg"
                  alt=""
                />
              </div>
              <div className="flex-grow-1">
                <div className="w-100">
                  <div className="d-flex flex-column align-items-start">
                    <div className="bg-light text-secondary p-2 px-3 rounded-2">
                      Please find the attached
                    </div>
                    {/* Files START */}
                    {/* Files END */}
                    <div className="small my-2">12:16 PM</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat message left */}
            <div className="d-flex mb-1">
              <div className="flex-shrink-0 avatar avatar-xs me-2">
                <img
                  className="avatar-img rounded-circle"
                  src="02.jpg"
                  alt=""
                />
              </div>
              <div className="flex-grow-1">
                <div className="w-100">
                  <div className="d-flex flex-column align-items-start">
                    <div className="bg-light text-secondary p-2 px-3 rounded-2">
                      How promotion excellent curiosity😮
                    </div>
                    <div className="small my-2">3:22 PM</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat message right */}
            <div className="d-flex justify-content-end text-end mb-1">
              <div className="w-100">
                <div className="d-flex flex-column align-items-end">
                  <div className="bg-primary text-white p-2 px-3 rounded-2">
                    And sir dare view.
                  </div>
                  {/* Images */}
                  <div className="d-flex my-2">
                    <div className="small text-secondary">5:35 PM</div>
                    <div className="small ms-2">
                      <i className="fa-solid fa-check" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat time */}
            <div className="text-center small my-2">2 New Messages</div>
            {/* Chat Typing */}
            <div className="d-flex mb-1">
              <div className="flex-shrink-0 avatar avatar-xs me-2">
                <img
                  className="avatar-img rounded-circle"
                  src="02.jpg"
                  alt=""
                />
              </div>
              <div className="flex-grow-1">
                <div className="w-100">
                  <div className="d-flex flex-column align-items-start">
                    <div className="bg-light text-secondary p-3 rounded-2">
                      <div className="typing d-flex align-items-center">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Chat conversation END */}
          {/* Chat bottom START */}
          <div className="mt-2">
            {/* Chat textarea */}
            <textarea
              className="form-control mb-sm-0 mb-3"
              placeholder="Type a message"
              rows={1}
              defaultValue={""}
            />
            {/* Button */}
            <div className="d-sm-flex align-items-end mt-2">
              <button className="btn btn-sm btn-danger-soft me-2">
                <i className="fa-solid fa-face-smile fs-6" />
              </button>
              <button className="btn btn-sm btn-secondary-soft me-2">
                <i className="fa-solid fa-paperclip fs-6" />
              </button>
              <button className="btn btn-sm btn-success-soft me-2">
                {" "}
                Gif{" "}
              </button>
              <button className="btn btn-sm btn-primary ms-auto"> Send </button>
            </div>
          </div>
          {/* Chat bottom START */}
        </div>
      </div>
      {/* Chat toast 2 END */}
    </div>
  </div>
  {/* Chat END */}
</div>
{/* -------------------------------------------Mdal----------------------------------------------- */}
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
                </button> <button type="button" className="btn btn-success-soft">
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
                    /> <span> Commercial</span>
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
   

    </Fragment>
  );
};

export default PropertyMatch;
