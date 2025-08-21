import React, { Fragment, useEffect, useState } from "react";
import MainNav from "./MainNav/MainNav";
// import Navbar2 from "../ReuseComp/Navbar2";
import { Link } from "react-router-dom";
import mainBg from "../assets/images/post/16by9/big/02.jpg";
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
import GLightbox from "glightbox";

const MainPage = () => {
  // All in the mind
  const [showResults, setShowResults] = useState(false);

  const handleToggleResults = () => {
    setShowResults(true);
  };

  // slider-1
  // const people = [
  //   {
  //     name: "Amanda Reed",
  //     connections: "50 mutual connections",
  //     avatar: avtar9,
  //   },
  //   {
  //     name: "Larry Lawson",
  //     connections: "33 mutual connections",
  //     avatar: avtar10,
  //   },
  //   {
  //     name: "Louis Crawford",
  //     connections: "45 mutual connections",
  //     avatar: avtar11,
  //   },
  //   {
  //     name: "Dennis Barrett",
  //     connections: "21 mutual connections",
  //     avatar: avtar12,
  //   },
  // ];
  // useEffect(() => {
  //   const slider1 = tns({
  //     container: ".tiny-slider-inner", // Target the slider container
  //     items: 3.2, // Show 3 full items and part of the 4th item
  //     slideBy: 1, // Slide one item at a time
  //     autoplay: true, // Enable autoplay
  //     autoplayTimeout: 3000,
  //     autoplayHoverPause: true,
  //     controls: true,
  //     controlsText: [
  //       '<i class="fa-solid fa-chevron-left"></i>',
  //       '<i class="fa-solid fa-chevron-right"></i>',
  //     ],
  //     nav: false,
  //     autoplayButtonOutput: false,
  //     loop: true,
  //     edgePadding: 0,
  //     speed: 300,
  //     responsive: {
  //       1200: {
  //         items: 3.35,
  //       },
  //       768: {
  //         items: 2.2,
  //         gutter: 12,
  //       },
  //       320: {
  //         items:1.26 ,
  //         gutter: 12,
  //       },
  //     },
  //     touch: true,
  //     mouseDrag: true,
  //   });

  //   return () => {
  //     slider1.destroy();
  //   };
  // }, []);

  //   slidet-2
  //   useEffect(() => {
  //   let slider2;

  //   if (document.querySelector(".tiny-slider-inner2")) {
  //     slider2 = tns({
  //       container: ".tiny-slider-inner2",
  //       items: 3.2,
  //       slideBy: 1,
  //       autoplay: true,
  //       autoplayTimeout: 3000,
  //       autoplayHoverPause: true,
  //       controls: true,
  //       controlsText: [
  //         '<i class="fa-solid fa-chevron-left"></i>',
  //         '<i class="fa-solid fa-chevron-right"></i>',
  //       ],
  //       nav: false,
  //       gutter: 12,
  //       autoplayButtonOutput: false,
  //       loop: true,
  //       edgePadding: 0,
  //       speed: 300,
  //       responsive: {
  //         1200: { items: 3.25 },
  //         1024: { items: 3.18 },
  //         768: { items: 2.2, gutter: 12 },
  //         320: { items: 1.27, gutter: 12 },
  //       },
  //       touch: true,
  //       mouseDrag: true,
  //     });
  //   }

  //   return () => {
  //     if (slider2 && typeof slider2.destroy === "function") {
  //       slider2.destroy();
  //     }
  //   };
  // }, []);

  // All Content Dropdown
  // useEffect(() => {
  //   const checkboxes = document.querySelectorAll(".filter-checkbox");
  //   const selectedFilterText = document.getElementById("selected-filter-text");
  //   const feedItems = document.querySelectorAll(".feed-item");

  //   function updateFeed() {
  //     let selectedFilters = Array.from(checkboxes)
  //       .filter((checkbox) => checkbox.checked)
  //       .map((checkbox) => checkbox.value);

  //     if (selectedFilters.includes("all") || selectedFilters.length === 0) {
  //       selectedFilterText.textContent = "All Content";
  //       checkboxes.forEach((cb) => (cb.checked = cb.value === "all"));
  //       feedItems.forEach((item) => (item.style.display = "block"));
  //       return;
  //     }

  //     selectedFilterText.textContent =
  //       selectedFilters.length > 0
  //         ? selectedFilters
  //             .map((filter) => filter.charAt(0).toUpperCase() + filter.slice(1))
  //             .join(", ")
  //         : "No Selection";

  //     feedItems.forEach((item) => {
  //       const feedType = item.getAttribute("data-feed-type");
  //       item.style.display = selectedFilters.includes(feedType)
  //         ? "block"
  //         : "none";
  //     });
  //   }

  //   checkboxes.forEach((checkbox) => {
  //     checkbox.addEventListener("change", function () {
  //       if (this.value === "all" && this.checked) {
  //         checkboxes.forEach((cb) => (cb.checked = cb.value === "all"));
  //       } else {
  //         checkboxes.forEach((cb) => {
  //           if (cb.value === "all") cb.checked = false;
  //         });
  //       }
  //       updateFeed();
  //     });
  //   });

  //   updateFeed();
  // }, []);
  // big img show
  useEffect(() => {
    GLightbox({
      selector: '[data-gallery="image-popup"]',
    });
  }, []);
  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container-fluid">
          {/* <Linklert /> */}

          {/* <div className="row g-4"> */}
          <LeftSidebar />

          {/* Main content START  */}
          <div className="page-content">
            <div className="row mb-4">
              <div className="col-12">
                {/* Video main feed */}
                <div
                  className="rounded py-4 py-sm-5 overflow-hidden position-relative"
                  style={{
                    backgroundImage: `url(${mainBg})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="bg-overlay bg-dark opacity-5" />
                  <div className="p-4 p-sm-5 position-relative">
                    <div className="d-flex align-items-center mb-3">
                      {/* Avatar */}
                      {/* <div class="avatar avatar-xxs me-2">
              <img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="">
            </div> */}
                      {/* Avatar name */}
                      {/* <h6 class="mb-0"> <Link class="text-white" to="#!"> Frances Guerrero </Link> </h6>
            <span class="ms-1 ms-sm-3 small text-white"> 156.9K views</span>
          </div>
          <h1 class="text-white">How does the stock market work?</h1>
          <p class="text-white">Suspicion neglected he resolving agreement perceived at an. </p>
          <Link class="btn btn-primary stretched-link" to="video-details.html"> <i class="bi bi-file-earmark-play pe-1"></i>Watch now</Link> */}
                    </div>
                  </div>
                  {/* Video main END */}
                </div>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-12 mt-4">
                  <div className="d-sm-flex justify-content-between align-items-center">
                    <h5 className="mb-md-0">Trending </h5>
                    <Link className="btn btn-sm btn-primary" to="#!">
                      View more video
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                  {/* Video START */}
                  <div className="card position-relative h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <img
                        className="card-img-top"
                        src="assets/images/post/16by9/large/01.jpg"
                        alt=""
                      />
                      {/* Play icon */}
                      <div className="card-element-hover position-absolute top-50 start-50 translate-middle">
                        <Link
                          className="icon-md bg-mode text-secondary rounded-circle"
                          to="video-details.html"
                        >
                          {" "}
                          <i className="bi bi-play-fill fs-5"> </i>{" "}
                        </Link>
                      </div>
                      {/* Duration */}
                      <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                          10:20
                        </span>
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                          <i className="fa-solid fa-heart" />
                        </span>
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body">
                      {/* Video title  */}
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          Should you become a web designer in 2022?{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!"> Frances Guerrero </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 156.9K views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                  {/* Video START */}
                  <div className="card position-relative h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <div className="ratio ratio-16x9 card-img-top overflow-hidden">
                        <iframe
                          src="https://www.youtube.com/embed/CgEZNJSeofs"
                          title="YouTube video"
                          allowFullScreen=""
                        />
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body position-relative">
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          Learn web development as an absolute beginner{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/02.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!">
                              {" "}
                              Lori Ferguson{" "}
                              <i className="bi bi-patch-check-fill text-success small" />{" "}
                            </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 458.4K views</span>
                        </div>
                      </div>
                      {/* Video title  */}
                    </div>
                  </div>
                  {/* Video END */}
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                  {/* Video START */}
                  <div className="card position-relative h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <img
                        className="card-img-top"
                        src="assets/images/post/16by9/large/02.jpg"
                        alt=""
                      />
                      {/* Play icon */}
                      <div className="card-element-hover position-absolute top-50 start-50 translate-middle">
                        <Link
                          className="icon-md bg-mode text-secondary rounded-circle"
                          to="video-details.html"
                        >
                          {" "}
                          <i className="bi bi-play-fill fs-5"> </i>{" "}
                        </Link>
                      </div>
                      {/* Duration */}
                      <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                          03:40
                        </span>
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                          <i className="fa-solid fa-heart" />
                        </span>
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body">
                      {/* Video title  */}
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          Python tutorial - Python for beginners [full course]{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/03.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!"> Louis Crawford </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 235.4K views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                  {/* Video START */}
                  <div className="card position-relative h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <img
                        className="card-img-top"
                        src="assets/images/post/16by9/large/03.jpg"
                        alt=""
                      />
                      {/* Play icon */}
                      <div className="card-element-hover position-absolute top-50 start-50 translate-middle">
                        <Link
                          className="icon-md bg-mode text-secondary rounded-circle"
                          to="video-details.html"
                        >
                          {" "}
                          <i className="bi bi-play-fill fs-5"> </i>{" "}
                        </Link>
                      </div>
                      {/* Duration */}
                      <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                          06:12
                        </span>
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                          <i className="fa-solid fa-heart" />
                        </span>
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body">
                      {/* Video title  */}
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          One of the greatest speeches ever | Steve Jobs{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/04.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!"> Larry Lawson </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 891.7K views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                  {/* Video START */}
                  <div className="card position-relative h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <img
                        className="card-img-top"
                        src="assets/images/post/16by9/large/04.jpg"
                        alt=""
                      />
                      {/* Play icon */}
                      <div className="card-element-hover position-absolute top-50 start-50 translate-middle">
                        <Link
                          className="icon-md bg-mode text-secondary rounded-circle"
                          to="video-details.html"
                        >
                          {" "}
                          <i className="bi bi-play-fill fs-5"> </i>{" "}
                        </Link>
                      </div>
                      {/* Duration */}
                      <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                          03:45
                        </span>
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                          <i className="fa-solid fa-heart" />
                        </span>
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body">
                      {/* Video title  */}
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          A trading platform - an easy start in trading{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/05.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!"> Joan Wallace </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 457.2K views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                  {/* Video START */}
                  <div className="card position-relative h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <img
                        className="card-img-top"
                        src="assets/images/post/16by9/large/05.jpg"
                        alt=""
                      />
                      {/* Play icon */}
                      <div className="card-element-hover position-absolute top-50 start-50 translate-middle">
                        <Link
                          className="icon-md bg-mode text-secondary rounded-circle"
                          to="video-details.html"
                        >
                          {" "}
                          <i className="bi bi-play-fill fs-5"> </i>{" "}
                        </Link>
                      </div>
                      {/* Duration */}
                      <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                          10:20
                        </span>
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                          <i className="fa-solid fa-heart" />
                        </span>
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body">
                      {/* Video title  */}
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          8 shocking bitcoin crypto predictions for 2022{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/07.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!"> Carolyn Ortiz </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 876.2K views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                </div>
              </div>

              {/* Official trailer START */}
              <div className="row g-3 mb-4">
                <div className="col-12 mt-4">
                  <div className="d-sm-flex justify-content-between align-items-center">
                    <h5 className="mb-md-0">Official Trailer </h5>
                    <Link className="btn btn-sm btn-primary" to="#!">
                      View more video
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  {/* Video START */}
                  <div className="card position-relative h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <div className="overflow-hidden fullscreen-video w-100">
                        {/* HTML video START */}
                        <div className="player-wrapper card-img-top overflow-hidden">
                          <video
                            className="player-html"
                            controls=""
                            crossOrigin="anonymous"
                            poster="assets/images/videos/poster.jpg"
                          >
                            <source
                              src="assets/images/videos/video-feed.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        {/* HTML video END */}
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body position-relative">
                      {/* Video title  */}
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          New movie trailers (2021 - 2022) September{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!"> Frances Guerrero </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 145.2K views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                </div>
                <div className="col-sm-6 col-lg-4">
                  {/* Video START */}
                  <div className="card h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <div className="ratio ratio-16x9 card-img-top overflow-hidden">
                        <iframe
                          src="https://www.youtube.com/embed/7E45f46yDFI"
                          title="YouTube video"
                          allowFullScreen=""
                        />
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body position-relative">
                      {/* Video title  */}
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          15 useful apps for android smartphones users{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-2">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/02.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!">
                              {" "}
                              Lori Ferguson{" "}
                              <i className="bi bi-patch-check-fill text-success small" />{" "}
                            </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 235.8K views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                </div>
                <div className="col-sm-6 col-lg-4">
                  {/* Video START */}
                  <div className="card position-relative h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <div className="ratio ratio-16x9 card-img-top overflow-hidden">
                        <iframe
                          src="https://player.vimeo.com/video/225888984?h=65630c41c6"
                          title="Vimeo video"
                          allowFullScreen=""
                        />
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body position-relative">
                      {/* Video title  */}
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          The Red notice | Official teaser | Netflix{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/03.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!"> Louis Crawford </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 785.2K views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                </div>
              </div>
              {/* Official trailer END */}
              <div className="row g-3 mb-4">
                <div className="col-12 mt-4">
                  <div className="d-sm-flex justify-content-between align-items-center">
                    <h5 className="mb-md-0">Music </h5>
                    <Link className="btn btn-sm btn-primary" to="#!">
                      View more video
                    </Link>
                  </div>
                </div>
                {/* Story START */}
                 <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                  {/* Video START */}
                  <div className="card position-relative h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <img
                        className="card-img-top"
                        src="assets/images/post/16by9/large/01.jpg"
                        alt=""
                      />
                      {/* Play icon */}
                      <div className="card-element-hover position-absolute top-50 start-50 translate-middle">
                        <Link
                          className="icon-md bg-mode text-secondary rounded-circle"
                          to="video-details.html"
                        >
                          {" "}
                          <i className="bi bi-play-fill fs-5"> </i>{" "}
                        </Link>
                      </div>
                      {/* Duration */}
                      <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                          10:20
                        </span>
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                          <i className="fa-solid fa-heart" />
                        </span>
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body">
                      {/* Video title  */}
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          Should you become a web designer in 2022?{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!"> Frances Guerrero </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 156.9K views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                  {/* Video START */}
                  <div className="card position-relative h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <div className="ratio ratio-16x9 card-img-top overflow-hidden">
                        <iframe
                          src="https://www.youtube.com/embed/CgEZNJSeofs"
                          title="YouTube video"
                          allowFullScreen=""
                        />
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body position-relative">
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          Learn web development as an absolute beginner{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/02.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!">
                              {" "}
                              Lori Ferguson{" "}
                              <i className="bi bi-patch-check-fill text-success small" />{" "}
                            </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 458.4K views</span>
                        </div>
                      </div>
                      {/* Video title  */}
                    </div>
                  </div>
                  {/* Video END */}
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                  {/* Video START */}
                  <div className="card position-relative h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <img
                        className="card-img-top"
                        src="assets/images/post/16by9/large/02.jpg"
                        alt=""
                      />
                      {/* Play icon */}
                      <div className="card-element-hover position-absolute top-50 start-50 translate-middle">
                        <Link
                          className="icon-md bg-mode text-secondary rounded-circle"
                          to="video-details.html"
                        >
                          {" "}
                          <i className="bi bi-play-fill fs-5"> </i>{" "}
                        </Link>
                      </div>
                      {/* Duration */}
                      <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                          03:40
                        </span>
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                          <i className="fa-solid fa-heart" />
                        </span>
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body">
                      {/* Video title  */}
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          Python tutorial - Python for beginners [full course]{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/03.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!"> Louis Crawford </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 235.4K views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                  {/* Video START */}
                  <div className="card position-relative h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <img
                        className="card-img-top"
                        src="assets/images/post/16by9/large/03.jpg"
                        alt=""
                      />
                      {/* Play icon */}
                      <div className="card-element-hover position-absolute top-50 start-50 translate-middle">
                        <Link
                          className="icon-md bg-mode text-secondary rounded-circle"
                          to="video-details.html"
                        >
                          {" "}
                          <i className="bi bi-play-fill fs-5"> </i>{" "}
                        </Link>
                      </div>
                      {/* Duration */}
                      <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                          06:12
                        </span>
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                          <i className="fa-solid fa-heart" />
                        </span>
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body">
                      {/* Video title  */}
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          One of the greatest speeches ever | Steve Jobs{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/04.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!"> Larry Lawson </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 891.7K views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                  {/* Video START */}
                  <div className="card position-relative h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <img
                        className="card-img-top"
                        src="assets/images/post/16by9/large/04.jpg"
                        alt=""
                      />
                      {/* Play icon */}
                      <div className="card-element-hover position-absolute top-50 start-50 translate-middle">
                        <Link
                          className="icon-md bg-mode text-secondary rounded-circle"
                          to="video-details.html"
                        >
                          {" "}
                          <i className="bi bi-play-fill fs-5"> </i>{" "}
                        </Link>
                      </div>
                      {/* Duration */}
                      <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                          03:45
                        </span>
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                          <i className="fa-solid fa-heart" />
                        </span>
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body">
                      {/* Video title  */}
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          A trading platform - an easy start in trading{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/05.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!"> Joan Wallace </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 457.2K views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                  {/* Video START */}
                  <div className="card position-relative h-100">
                    {/* Video image */}
                    <div className="card-image">
                      <img
                        className="card-img-top"
                        src="assets/images/post/16by9/large/05.jpg"
                        alt=""
                      />
                      {/* Play icon */}
                      <div className="card-element-hover position-absolute top-50 start-50 translate-middle">
                        <Link
                          className="icon-md bg-mode text-secondary rounded-circle"
                          to="video-details.html"
                        >
                          {" "}
                          <i className="bi bi-play-fill fs-5"> </i>{" "}
                        </Link>
                      </div>
                      {/* Duration */}
                      <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                          10:20
                        </span>
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                          <i className="fa-solid fa-heart" />
                        </span>
                      </div>
                    </div>
                    {/* Video info */}
                    <div className="card-body">
                      {/* Video title  */}
                      <h6>
                        {" "}
                        <Link className="stretched-link" to="video-details.html">
                          {" "}
                          8 shocking bitcoin crypto predictions for 2022{" "}
                        </Link>{" "}
                      </h6>
                      <div className="d-flex mt-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/07.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <div>
                          <h6 className="mb-0 lh-1">
                            {" "}
                            <Link to="#!"> Carolyn Ortiz </Link>{" "}
                          </h6>
                          <span className="ms-auto small"> 876.2K views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                </div>
              </div>
            </div>
          </div>
          {/* Main content END */}
          {/* <RightSidebar /> */}
        </div>
        {/* </div> */}
      </main>
      <MainChat />
      <MainPageModal />
    </Fragment>
  );
};

export default MainPage;
