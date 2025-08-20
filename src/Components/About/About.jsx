import React, { Fragment } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import { Link } from "react-router-dom";
import placeholder2 from "../../assets/images/mockup/app-placeholder2.jpg";
import placeholder3 from "../../assets/images/mockup/app-placeholder3.jpg";
import macplaceholder from "../../assets/images/mockup/mac-placeholder.jpg";
import element7 from "../../assets/images/elements/07.svg";
import element1 from "../../assets/images/elements/01.svg";
import element4 from "../../assets/images/elements/04.svg";
import element2 from "../../assets/images/elements/02.svg";
import element5 from "../../assets/images/elements/05.svg";
import element3 from "../../assets/images/elements/03.svg";
import element9 from "../../assets/images/elements/09.svg";
import element6 from "../../assets/images/elements/06.svg";
import element10 from "../../assets/images/elements/10.svg";
import post1 from "../../assets/images/post/4by3/01.jpg";
import post2 from "../../assets/images/post/4by3/02.jpg";
import post7 from "../../assets/images/post/1by1/07.jpg";
import videoFile from "../../assets/images/videos/video-call.mp4";
import appStore from "../../assets/images/app-store.svg";
import playStore from "../../assets/images/google-play.svg";
import logo from "../../assets/images/logo.svg";

const About = () => {
  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="pt-5 pb-0 position-relative">
          {/* Container START */}
          <div className="container">
            {/* Row START */}
            <div className="row text-center position-relative z-index-1">
              <div className="col-lg-7 mx-auto">
                {/* Heading */}
                <h1 className="display-3">Download The Best Social App</h1>
                <p className="lead">
                  See resolved goodness felicity shy civility domestic had but
                  perceive laughing six did far.{" "}
                </p>
                <div className="d-sm-flex justify-content-center">
                  {/* button */}
                  <button className="btn btn-primary">
                    <Link to="/sign-up-advance" style={{ color: "#fff" }}>
                      Sign up free
                    </Link>
                  </button>
                  <div className="mt-2 mt-sm-0 ms-sm-3">
                    {/* Rating START */}
                    <div className="hstack justify-content-center justify-content-sm-start gap-1">
                      <div>
                        <i className="fa-solid fa-star text-warning" />
                      </div>
                      <div>
                        <i className="fa-solid fa-star text-warning" />
                      </div>
                      <div>
                        <i className="fa-solid fa-star text-warning" />
                      </div>
                      <div>
                        <i className="fa-solid fa-star text-warning" />
                      </div>
                      <div>
                        <i className="fa-solid fa-star-half-stroke text-warning" />
                      </div>
                    </div>
                    {/* Rating END */}
                    <i>"I can't believe it's free!"</i>
                  </div>
                </div>
              </div>
            </div>
            {/* Row END */}
            {/* Row START */}
            <div className="row g-0 align-items-center mt-2 position-relative z-index-1">
              <div className="col-lg-4">
                {/* iphone-x mockup START */}
                <div
                  className="iphone-x iphone-x-small"
                  style={{
                    background: `url(${placeholder2})`,
                    backgroundSize: "100%",
                  }}
                >
                  <i />
                  <b />
                </div>
                {/* iphone-x mockup END */}
              </div>
              <div className="col-lg-8">
                {/* Mac desk START */}
                <div className="mac_container ">
                  <div className="mac_scaler">
                    <div className="mac_holder">
                      <div className="mac_screen">
                        <div className="mac_camera" />
                        <div
                          className="mac_screen_content"
                          style={{
                            background: `url(${macplaceholder})`,
                            backgroundSize: "100%",
                          }}
                        ></div>
                      </div>
                      <div className="mac_bottom">
                        <div className="mac_bottom_top_half">
                          <div className="mac_thumb_space" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Mac desk START */}
              </div>
            </div>
            {/* Row END */}
          </div>
          {/* Container END */}
          {/* Svg decoration START */}
          <div className="position-absolute top-0 end-0 mt-5 pt-5">
            <img className="h-300px blur-9 mt-5 pt-5" src={element7} alt="" />
          </div>
          <div className="position-absolute top-0 start-0 mt-n5 pt-n5">
            <img className="h-300px blur-9" src={element1} alt="" />
          </div>
          <div className="position-absolute top-50 start-50 translate-middle">
            <img className="h-300px blur-9" src={element4} alt="" />
          </div>
          {/* Svg decoration END */}
        </div>

        <div className="py-4 py-sm-5">
          <div className="container">
            <div className="row justify-content-center">
              {/* Title */}
              <div className="col-lg-12 text-center mb-4">
                <h2 className="h1">More than messaging</h2>
                <p>Express besides it present if at an opinion visitor. </p>
              </div>
            </div>
            {/* Row START */}
            <div className="row g-4 g-lg-5">
              {/* Feature START */}
              <div className="col-md-4 text-center">
                <img className="h-100px mb-4" src={element2} alt="" />
                <h4>Voice and video calls</h4>
                <p className="mb-0">
                  Place voice no arises along to. Parlors waiting so against me
                  no. Wishing calling is warrant settled was lucky.
                </p>
              </div>
              {/* Feature END */}
              {/* Feature START */}
              <div className="col-md-4 text-center">
                <img className="h-100px mb-4" src={element7} alt="" />
                <h4>Auto save contacts</h4>
                <p className="mb-0">
                  Handsome met debating sir dwelling age material. As style
                  lived he worse dried. visitors subjects distance.
                </p>
              </div>
              {/* Feature END */}
              {/* Feature START */}
              <div className="col-md-4 text-center">
                <img className="h-100px mb-4" src={element1} alt="" />
                <h4>End to end encryption</h4>
                <p className="mb-0">
                  Yet uncommonly his ten who diminution astonished. Demesne new
                  manners savings staying had.{" "}
                </p>
              </div>
              {/* Feature END */}
            </div>
            {/* Row START */}
          </div>
        </div>

        <div className="py-4 py-sm-5">
          <div className="container">
            <div className="row g-4 g-lg-5 align-items-center">
              {/* Title */}
              <div className="col-lg-4">
                <h2 className="h1">Take a look at our big set of features</h2>
                <p className="mb-4">
                  Express besides it present if at an opinion visitor.{" "}
                </p>
                <Link className="btn btn-dark" to="#">
                  Download now
                </Link>
              </div>
              {/* Feature item START */}
              <div className="col-lg-8">
                <div className="card card-body bg-mode shadow-none border-0 p-4 p-sm-5 pb-sm-0 overflow-hidden">
                  <div className="row g-4">
                    <div className="col-md-6">
                      {/* Info */}
                      <img className="h-50px" src={element5} alt="" />
                      <h4 className="mt-4">Built-in digital wallet</h4>
                      <p className="mb-0">
                        Yet uncommonly his ten who diminution astonished.
                        Demesne new manners savings staying had. Under folly
                        balls.
                      </p>
                    </div>
                    <div className="col-md-6 text-end">
                      {/* image */}
                      {/* iphone-x mockup START */}
                      <div
                        className="iphone-x iphone-x-small iphone-x-half mb-n5 mt-0"
                        style={{
                          background: `url(${placeholder3})`,
                          backgroundSize: "100%",
                        }}
                      >
                        <i />
                        <b />
                      </div>
                      {/* iphone-x mockup END */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Feature item END */}
              {/* Feature item START */}
              <div className="col-md-4">
                <div className="card card-body bg-mode shadow-none border-0 p-4 p-lg-5">
                  {/* Image */}
                  <div>
                    <img className="h-50px" src={element3} alt="" />
                  </div>
                  {/* Info */}
                  <h4 className="mt-4">Safer communities</h4>
                  <p className="mb-0">
                    Departure defective arranging rapturous did believe him all
                    had supported simple set nature.
                  </p>
                </div>
              </div>
              {/* Feature item START */}
              <div className="col-md-4">
                <div className="card card-body bg-mode shadow-none border-0 p-4 p-lg-5">
                  {/* Image */}
                  <div>
                    <img className="h-50px" src={element9} alt="" />
                  </div>
                  {/* Info */}
                  <h4 className="mt-4">Genuine users</h4>
                  <p className="mb-0">
                    Satisfied conveying a dependent contented he gentleman
                    agreeable do be warrant removed.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-body bg-mode shadow-none border-0 p-4 p-lg-5">
                  {/* Image */}
                  <div>
                    <img className="h-50px" src={element6} alt="" />
                  </div>
                  {/* Info */}
                  <h4 className="mt-4">Stronger communities</h4>
                  <p className="mb-0">
                    Meant balls it if up doubt small purse. Required his you put
                    the outlived answered position.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 py-sm-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 ms-auto">
                <div className="row g-4 align-items-center">
                  <div className="col-md-5 col-lg-5 position-relative">
                    {/* Image */}
                    <img className="rounded-circle" src={post1} alt="" />
                    {/* Chat START */}
                    <div className="position-absolute top-50 start-0 translate-middle d-none d-lg-block">
                      {/* Chat item */}
                      <div className="bg-mode border p-3 rounded-3 rounded-start-top-0 d-flex align-items-center mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xs me-3">
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
                        <div className="d-flex">
                          <h6 className="mb-0 ">Happy birthday </h6>
                          <span className="ms-2">🎂</span>
                        </div>
                      </div>
                      {/* Chat item */}
                      <div className="bg-mode border p-3 rounded-3 rounded-start-top-0 d-flex align-items-center mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xs me-3">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src="10.jpg"
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Comment box  */}
                        <div className="d-flex">
                          <h6 className="mb-0 ">New connection request </h6>
                          <span className="ms-2">🤘</span>
                        </div>
                      </div>
                      {/* Chat item */}
                      <div className="bg-mode border p-3 rounded-3 rounded-start-top-0 d-flex align-items-center mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xs me-3">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src="09.jpg"
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Comment box  */}
                        <div className="d-flex">
                          <h6 className="mb-0 ">Congratulations </h6>
                          <span className="ms-2">🎂</span>
                        </div>
                      </div>
                    </div>
                    {/* Chat END */}
                  </div>
                  <div className="col-md-6">
                    <div className="ms-4">
                      {/* Info */}
                      <h2 className="h1">Get Discovered</h2>
                      <p className="lead mb-4">
                        Enjoy special interactive features such as Live Battles,
                        Interactive Gifts, Happy Moments &amp; Exclusive Posts
                        to help you rise the ranks and grow your audience!
                      </p>
                      <Link className="btn btn-primary" to="#">
                        {" "}
                        Let's start{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 py-sm-5 position-relative">
          {/* Svg decoration START */}
          <div className="position-absolute top-0 start-0 mt-n5 pt-n5">
            <img className="h-300px blur-9" src={element6} alt="" />
          </div>
          {/* Svg decoration END */}
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="row g-4 align-items-center position-relative z-index-1">
                  <div className="col-md-6">
                    <div className="me-4">
                      {/* TItle */}
                      <h2 className="h1 mb-4">Video call</h2>
                      {/* Meet creators */}
                      <div className="mb-3 d-flex align-items-start">
                        <img className="h-40px" src={element4} alt="" />
                        <div className="ms-4">
                          <h5 className="mt-2">Meet creators</h5>
                          <p className="mb-0">
                            In no impression assistance contrasted Manners she
                            wishing justice hastily.
                          </p>
                        </div>
                      </div>
                      {/* Support artists   */}
                      <div className="mb-3 d-flex align-items-start">
                        <img className="h-40px" src={element10} alt="" />
                        <div className="ms-4">
                          <h5 className="mt-2">Support artists</h5>
                          <p className="mb-0">
                            Handsome met debating sir dwelling age material. As
                            style lived he worse dried.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 position-relative">
                    {/* Image */}
                    <img className="rounded-circle" src={post2} alt="" />
                    <div className="position-absolute top-50 start-100 translate-middle d-none d-lg-block">
                      {/* Video screen */}
                      {/* Video action */}
                      <div className="position-absolute top-0 end-0 m-3 z-index-1">
                        <div className="avatar avatar-lg">
                          <Link to="#!">
                            <img
                              className="avatar-img rounded border border-white border-1"
                              src={post7}
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      {/* Video action */}
                      <div className="position-absolute bottom-0 start-50 translate-middle-x z-index-1">
                        <button className="btn btn-white icon-md rounded-circle mb-3">
                          {" "}
                          <i className="bi bi-mic-mute" />
                        </button>
                        <button
                          className="btn btn-danger icon-md rounded-circle mb-3"
                          style={{ marginLeft: "5px" }}
                        >
                          {" "}
                          <i className="bi bi-x-lg" />
                        </button>
                      </div>
                      {/* HTML video START */}
                      <div className="player-wrapper plyr__controls-none rounded-3">
                        <video
                          className="player-html landing-video"
                          crossOrigin="anonymous"
                          autoPlay
                          loop
                          muted
                          controls
                        >
                          <source src={videoFile} type="video/mp4" />
                        </video>
                      </div>
                      {/* HTML video END */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 py-sm-5">
          <div className="container">
            <div className="card card-body bg-light shadow-none border-0 p-4 p-sm-5 text-center">
              <div className="col-lg-8 mx-auto">
                {/* Title */}
                <h2 className="h1">People prefer to message</h2>
                <p className="lead mb-4">
                  Frequently sufficient to be unaffected. The furnished she
                  concluded depending procuring concealed.{" "}
                </p>
                <div className="d-flex justify-content-center">
                  <Link to="app-download.html">
                    <img className="h-40px" src={appStore} alt="app-store" />
                  </Link>
                  <Link to="app-download.html">
                    <img
                      className="h-40px ms-1 ms-sm-2"
                      src={playStore}
                      alt="google-play"
                    />
                  </Link>
                </div>
                {/* Box List */}
                <ul className="nav nav-divider justify-content-center mt-4">
                  <li className="nav-item"> Easy set-up </li>
                  <li className="nav-item"> Free Forever </li>
                  <li className="nav-item"> Secure </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="pt-5 bg-mode">
  <div className="container">
    <div className="row g-4">
      <div className="col-sm-6 col-lg-3">
        {/* Footer Widget */}
        <img src={logo} alt="" />
        <p className="mt-3">
          Match way these she avoids seeing death their fat off.{" "}
        </p>
      </div>
      <div className="col-sm-6 col-lg-3">
        {/* Footer Widget */}
        <h5 className="mb-4">Download</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link pt-0" to="#">
              {" "}
              <i className="bi bi-globe fa-fw pe-2" />
              Web Browser
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              {" "}
              <i className="bi bi-windows fa-fw pe-2" />
              Windows
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              {" "}
              <i className="bi bi-apple fa-fw pe-2" />
              macOS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              {" "}
              <i className="bi bi-phone fa-fw pe-2" />
              iOS &amp; Android
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-sm-6 col-lg-3">
        {/* Footer Widget */}
        <h5 className="mb-4">About</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link pt-0" to="#">
              {" "}
              About social
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              {" "}
              Security
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              {" "}
              Customer Support
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              {" "}
              Partners
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              {" "}
              Careers - <b> Join Us! </b>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-sm-6 col-lg-3">
        {/* Footer Widget */}
        <h5 className="mb-4">Resources</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link pt-0" to="#">
              {" "}
              Join
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              {" "}
              Help Center
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              {" "}
              Developers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              {" "}
              Status
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              {" "}
              Communities{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <hr className="mb-0 mt-5" />
  <div className="bg- light py-3">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          {/* Footer nav START */}
          <ul className="nav justify-content-center justify-content-lg-start lh-1">
            <li className="nav-item">
              <Link className="nav-link ps-0" to="#">
                Support{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Terms of Use
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Privacy &amp; terms
              </Link>
            </li>
          </ul>
          {/* Footer nav START */}
        </div>
        <div className="col-lg-6">
          {/* Copyright START */}
          <p className="text-center text-lg-end mb-0">
            ©2024{" "}
            <Link
              className="text-body"
              target="_blank"
              to="https://stackbros.in/"
            >
              {" "}
              Stackbros{" "}
            </Link>
            All rights reserved.
          </p>
          {/* Copyright END */}
        </div>
      </div>
    </div>
  </div>
</footer>


    </Fragment>
  );
};

export default About;
