import React, { Fragment, useEffect } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import { Link } from "react-router-dom";
import hall from "../../assets/images/post/property/hall.webp";
import bedroom from "../../assets/images/post/property/bedrrom.webp";
import dinnig from "../../assets/images/post/property/dinnig room.webp";
import kithen from "../../assets/images/post/property/kithen.webp";
import livingroom from "../../assets/images/post/property/livingroom.webp";
import towbhk from "../../assets/images/post/property/layout2bhk.jpg";
import green from "../../assets/images/post/property/jaypee-green-noida-residential-space-500x500.webp";
import profile1 from "../../assets/images/post/property/profile (1).png";
import logo from "../../assets/images/logo.svg";
import { tns } from "tiny-slider/src/tiny-slider";
import GLightbox from "glightbox";

const ProjectDetail = () => {
  // big img show
    useEffect(() => {
      GLightbox({
        selector: '[data-gallery="image-popup"]',
      });
    }, []);

  // slider-1
  const properties1 = [
    {
      title: "1165 sq.ft. (108.23 sq.m.)",
      description: "Super Built-up Area | 2 BHK",
      price: "₹ 85.16 L",
      status: "Ready To Move",
      possession: "Mar '23 possession",
      image: towbhk,
    },
    {
      title: "1165 sq.ft. (108.23 sq.m.)",
      description: "Super Built-up Area | 2 BHK",
      price: "₹ 85.16 L",
      status: "Ready To Move",
      possession: "Mar '23 possession",
      image: towbhk,
    },
    {
      title: "1165 sq.ft. (108.23 sq.m.)",
      description: "Super Built-up Area | 2 BHK",
      price: "₹ 85.16 L",
      status: "Ready To Move",
      possession: "Mar '23 possession",
      image: towbhk,
    },
    {
      title: "1165 sq.ft. (108.23 sq.m.)",
      description: "Super Built-up Area | 2 BHK",
      price: "₹ 85.16 L",
      status: "Ready To Move",
      possession: "Mar '23 possession",
      image: towbhk,
    },
  ];

  //   slidet-2
  const properties2 = [
    {
      bhk: "3 BHK Flat",
      price: "₹ 2.11 Cr | 1600 sqft",
      location: "Gaur city",
      image: bedroom,
    },
    {
      bhk: "3 BHK Flat",
      price: "₹ 2.11 Cr | 1600 sqft",
      location: "Gaur city",
      image: bedroom,
    },
    {
      bhk: "3 BHK Flat",
      price: "₹ 2.11 Cr | 1600 sqft",
      location: "Gaur city",
      image: bedroom,
    },
    {
      bhk: "3 BHK Flat",
      price: "₹ 2.11 Cr | 1600 sqft",
      location: "Gaur city",
      image: bedroom,
    },
    {
      bhk: "3 BHK Flat",
      price: "₹ 2.11 Cr | 1600 sqft",
      location: "Gaur city",
      image: bedroom,
    },
    {
      bhk: "3 BHK Flat",
      price: "₹ 2.11 Cr | 1600 sqft",
      location: "Gaur city",
      image: bedroom,
    },
  ];

  //   slider-3
  const properties3 = [
    {
      title: "3 BHK Flat",
      price: "₹ 2.11 Cr | 1600 sqft",
      location: "Gaur city",
      image: kithen,
    },
    {
      title: "3 BHK Flat",
      price: "₹ 2.11 Cr | 1600 sqft",
      location: "Gaur city",
      image: dinnig,
    },
    {
      title: "3 BHK Flat",
      price: "₹ 2.11 Cr | 1600 sqft",
      location: "Gaur city",
      image: kithen,
    },
    {
      title: "3 BHK Flat",
      price: "₹ 2.11 Cr | 1600 sqft",
      location: "Gaur city",
      image: dinnig,
    },
    {
      title: "3 BHK Flat",
      price: "₹ 2.11 Cr | 1600 sqft",
      location: "Gaur city",
      image: kithen,
    },
    {
      title: "3 BHK Flat",
      price: "₹ 2.11 Cr | 1600 sqft",
      location: "Gaur city",
      image: dinnig,
    },
  ];
  //    tiny Slider
  const initializeSlider = (containerClass, items, responsiveSettings) => {
    return tns({
      container: containerClass,
      items: items,
      slideBy: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      controls: true,
      controlsText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>',
      ],
      nav: false,
      gutter: 12,
      autoplayButtonOutput: false,
      loop: true,
      edgePadding: 0,
      speed: 300,
      responsive: {
        1200: {
          items: 3.25,
        },
        1024: {
          items: 3.18,
        },
        768: {
          items: 2.2,
          gutter: 12,
        },
        320: {
          items:1.27 ,
          gutter: 12,
        },
      },
      touch: true,
      mouseDrag: true,
    });
  };
  useEffect(() => {
    const slider1 = initializeSlider(".tiny-slider-inner1", 3.2, {
      1200: { items: 3.25 },
    });

    const slider2 = initializeSlider(".tiny-slider-inner2", 3.2, {
      1200: { items: 4.21 },
    });

    const slider3 = initializeSlider(".tiny-slider-inner3", 3.2, {
      1200: { items: 4.21 },
    });
    const slider4 = initializeSlider(".tiny-slider-inner4", 3.2, {
      1200: { items: 4.21 },
    });
    const slider5 = initializeSlider(".tiny-slider-inner5", 3.2, {
      1200: { items: 4.21 },
    });
    const slider6 = initializeSlider(".tiny-slider-inner6", 3.2, {
      1200: { items: 4.21 },
    });
    const slider7 = initializeSlider(".tiny-slider-inner7", 3.2, {
      1200: { items: 4.21 },
    });
    const slider8 = initializeSlider(".tiny-slider-inner8", 3.2, {
      1200: { items: 4.21 },
    });
    const slider9 = initializeSlider(".tiny-slider-inner9", 3.2, {
      1200: { items: 4.21 },
    });
    const slider10 = initializeSlider(".tiny-slider-inner10", 3.2, {
      1200: { items: 4.21 },
    });
    const slider11 = initializeSlider(".tiny-slider-inner11", 3.2, {
      1200: { items: 4.21 },
    });

    return () => {
      slider1.destroy();
      slider2.destroy();
      slider3.destroy();
      slider4.destroy();
      slider5.destroy();
      slider6.destroy();
      slider7.destroy();
      slider8.destroy();
      slider9.destroy();
      slider10.destroy();
      slider11.destroy();
    };
  }, []);
  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container">
          <div className="">
            <div className="row position-relative">
              <div className="col-12">
                <nav aria-label="breadcrumb text-center">
                  <ol className="breadcrumb mb-0 fs-2 fw-bold justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/new-listing">Property</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Property Detail
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-xl-12 col-lg-10 mx-auto pt-sm-5 text-center">
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
                          className="rounded img-fluid w-100"
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
                          className="rounded img-fluid w-100"
                          src={bedroom}
                          alt=""
                        />
                      </Link>
                    </div>
                    {/* Photos item */}
                    <div className="col-4 ">
                      <Link
                        to={dinnig}
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
                    <div className="col-4 ">
                      <Link
                        to={kithen}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card card-body">
                  <div className="">
                    <ul className="list-unstyled mb-4">
                      <li className="d-flex justify-content-between gap-2 mb-3">
                        <p className="border-1 fw-normal w-75 mb-0  new-clr-set-featil">
                          Launch Date :
                        </p>
                        <p className=" mb-0 w-50">28/01/07</p>
                      </li>
                      <li className="d-flex justify-content-between gap-2 mb-3">
                        <p className="border-1 fw-normal w-75 mb-0  new-clr-set-featil">
                          Project Short Code :
                        </p>
                        <p className=" mb-0 w-50">KLP</p>
                      </li>
                      <li className="d-flex justify-content-between gap-2 mb-3">
                        <p className="border-1 fw-normal w-75 mb-0  new-clr-set-featil">
                          Possession Status :
                        </p>
                        <p className=" mb-0 w-50">Deleivered</p>
                      </li>
                      <li className="d-flex justify-content-between gap-2 mb-3">
                        <p className="border-1 fw-normal w-75 mb-0  new-clr-set-featil">
                          Delievered Date:
                        </p>
                        <p className=" mb-0 w-50">17/11/22</p>
                      </li>
                      <li className="d-flex justify-content-between gap-2 mb-3">
                        <p className="border-1 fw-normal w-75 mb-0  new-clr-set-featil">
                          {" "}
                          No of Towers :
                        </p>
                        <p className=" mb-0 w-50">15</p>
                      </li>
                      <li className="d-flex justify-content-between gap-2 mb-3">
                        <p className="border-1 fw-normal w-75 mb-0  new-clr-set-featil">
                          No of Flats :
                        </p>
                        <p className=" mb-0 w-50">400</p>
                      </li>
                      <li className="d-flex justify-content-between gap-2 mb-3">
                        <p className="border-1 fw-normal w-75 mb-0  new-clr-set-featil">
                          No.of Towers Phase Wise :
                        </p>
                        <p className=" mb-0 w-50">10- 15</p>
                      </li>
                      <li className="d-flex justify-content-between gap-2 mb-3">
                        <p className="border-1 fw-normal w-75 mb-0  new-clr-set-featil">
                          No of Apartments :
                        </p>
                        <p className=" mb-0 w-50">12</p>
                      </li>
                      <li className="d-flex justify-content-between gap-2 mb-3">
                        <p className="border-1 fw-normal w-75 mb-0  new-clr-set-featil">
                          Type of Construction :
                        </p>
                        <p className=" mb-0 w-50">Myvan / Brick</p>
                      </li>
                      <li className="d-flex justify-content-between gap-2 mb-3">
                        <p className="border-1 fw-normal w-75 mb-0  new-clr-set-featil">
                          Total No of Floors Per Tower :
                        </p>
                        <p className=" mb-0 w-50">24</p>
                      </li>
                      <li className="d-flex justify-content-between gap-2 mb-3">
                        <p className="border-1 fw-normal w-75 mb-0  new-clr-set-featil">
                          Area of Society :
                        </p>
                        <p className=" mb-0 w-50">Approx 10 Acres</p>
                      </li>
                    </ul>
                    <iframe
                      className="w-100 d-block rounded-bottom grayscale"
                      height={230}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.3082195271495!2d77.4045194739922!3d28.500373090072628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce856f847b8c1%3A0x9cfac8756dec96da!2sNoida-Greater%20Noida%20Expy%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1740594371898!5m2!1sen!2sin"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card ">
                  {/* Card header START */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="price d-flex align-items-center flex-column gap-2">
                          <div className="avatar  avatar-xs me-2">
                            <Link to="#">
                              {" "}
                              <img
                                className="avatar-img rounded-circle img-fluid"
                                src={green}
                                alt=""
                              />{" "}
                            </Link>
                          </div>
                          <h4 className="card-title">Jaypee Greens</h4>
                        </div>
                      </div>
                      <div
                        className="col-sm-7"
                        style={{ borderLeft: "1px solid #676A79" }}
                      >
                        <h3 className="card-title fw-normal mb-1">
                          Jaypee Greens Kosmos
                        </h3>
                        <p className="text-muted mb-1">
                          By Jaiprakash Associates Limited
                        </p>
                        <p className="text-muted mb-0">
                          Uttar Pradesh Greater Noida
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="d-flex align-items-center new-text-section">
                        <div className="d-flex align-items-center ">
                          <div className="bg-success text-white px-1  ">
                            <span>RERA STATUS &#9432;</span>
                          </div>
                          <div className=" bg-light">
                            <span className="text-success fw-bold ps-1 px-1">
                              REGISTERED
                            </span>
                          </div>
                        </div>
                        <div className=" bg-light  ">
                          <span className="fw-bold px-1 border-left pe-1">
                            Registration No:{" "}
                            <span className="">UPRERAPRJ958386</span>
                          </span>
                          <span className="fw-bold "> Website: </span>
                          <Link
                            to="http://up-rera.in/projects"
                            className="pe-1"
                            target="_blank"
                          >
                            http://up-rera.in/projects
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card header START */}
                  {/* Card body START */}
                  <div className="card-body">
                    {/* Tab nav line */}
                    <ul
                      className="nav nav-tabs nav-bottom-line justify-content-center justify-content-md-start"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        {" "}
                        <Link
                          className="nav-link active"
                          data-bs-toggle="tab"
                          to="#tab-1"
                          aria-selected="true"
                          role="tab"
                        >
                          Amenities{" "}
                        </Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        {" "}
                        <Link
                          className="nav-link"
                          data-bs-toggle="tab"
                          to="#tab-2"
                          aria-selected="false"
                          tabIndex={-1}
                          role="tab"
                        >
                          {" "}
                          Sector Breifing{" "}
                        </Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        {" "}
                        <Link
                          className="nav-link"
                          data-bs-toggle="tab"
                          to="#tab-4"
                          aria-selected="false"
                          tabIndex={-1}
                          role="tab"
                        >
                          Project Breifing
                        </Link>
                      </li>
                    </ul>
                    {/* Tab content START */}
                    <div className="tab-content mb-0 pb-0">
                      {/* Convenience Tab */}
                      <div
                        className="tab-pane fade show active"
                        id="tab-1"
                        role="tabpanel"
                      >
                        <div className="row g-4">
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-car" />{" "}
                            Parking: <strong>Yes</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-compass" />{" "}
                            Direction: <strong>North</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-tree" />{" "}
                            Overlooking: <strong>Park</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-battery-full" />{" "}
                            Power Backup: <strong>Full</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-road" />{" "}
                            Road Facing: <strong>12 Mtrs</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-map-marked-alt" />{" "}
                            Advantages: <strong>Near Metro</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-utensils" />{" "}
                            Cafeteria: <strong>Available</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-leaf" />{" "}
                            Garden: <strong>Yes</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-umbrella-beach" />{" "}
                            Play Area: <strong>Yes</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-tint" />
                            Water Suplly: <strong>Borewell</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-ambulance" />{" "}
                            Hospital: <strong>Yes</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-school" />{" "}
                            School: <strong>Yes</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-shopping-cart" />{" "}
                            Market: <strong>Yes</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-th" />{" "}
                            Property Features: <strong>Marbel</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            {" "}
                            <i className="fas new-clr-set-featil me-1 fa-star" />
                            USP : <strong>Road Facing</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-swimming-pool" />{" "}
                            Swimming Pool: <strong>Yes</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-dumbbell" />{" "}
                            Gym: <strong>Available</strong>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <i className="fas new-clr-set-featil me-1 fa-tree-city" />{" "}
                            Clubhouse: <strong>Yes</strong>
                          </div>
                        </div>
                      </div>
                      {/* Leisure Tab */}
                      <div className="tab-pane fade" id="tab-2" role="tabpanel">
                        <div className="">
                          <h4>Sector Breifing </h4>
                          <p>
                            Sector 128 in Noida is a prominent residential and
                            commercial hub, strategically located along the
                            Noida-Greater Noida Expressway. This sector is
                            renowned for its upscale housing projects, such as
                            Jaypee Greens Kalypso Court, and offers a blend of
                            modern infrastructure and green spaces. Its prime
                            location ensures seamless connectivity to Delhi and
                            other parts of the National Capital Region (NCR),
                            making it a sought-after destination for
                            professionals and families alike.
                          </p>
                          <p>
                            <b>Key Highlights of Sector 128, Noida:</b>
                          </p>
                          <p className="fw-bolder">
                            {" "}
                            • Educational Institutions:
                          </p>
                          <p>
                            <span className="fw-normal">o Schools:</span> Mayoor
                            School, KKMII Stratford University, MCD Public
                            School, Good Samaritan Public School, Disha Public
                            School, and Jasola Public School are in close
                            proximity.
                          </p>
                          <p>
                            <span className="fw-normal">
                              o Colleges and Universities:
                            </span>{" "}
                            Reputed institutions such as Amity University,
                            Jaypee Institute of Technology, Asian Academy of
                            Film &amp; Television, and Government Post Graduate
                            College are nearby.
                          </p>
                          <p className="fw-bolder"> • Healthcare Facilities:</p>
                          <p>
                            <span className="fw-normal">o Jaypee Hospital</span>
                          </p>
                          <p>
                            <span className="fw-normal">
                              o Yatharth Hospital
                            </span>
                          </p>
                          <p>
                            <span className="fw-normal">
                              o JS Tomar Memorial Hospital Pvt. Ltd.
                            </span>
                          </p>
                          <p className="fw-bolder"> • Fitness Centers:</p>
                          <p>
                            o Several gyms and fitness centers are available in
                            and around Sector 128, catering to the wellness
                            needs of the community.
                          </p>
                          <p className="fw-bolder"> • Corporate Offices:</p>
                          <p>
                            {" "}
                            o The sector is in proximity to major IT and
                            corporate hubs, providing ample employment
                            opportunities.
                          </p>
                          <p className="fw-bolder"> • Transportation:</p>
                          <p>
                            {" "}
                            o Metro Access: The nearest metro stations are Noida
                            Sector 137 and NSEZ, facilitating easy commutes.{" "}
                          </p>
                          <p>
                            {" "}
                            o Road Connectivity: Situated along the
                            Noida-Greater Noida Expressway, the sector offers
                            excellent road connectivity to Delhi and Greater
                            Noida.
                          </p>
                          <p>
                            The combination of modern amenities, strategic
                            location, and robust infrastructure makes Sector 128
                            a preferred choice for residents and businesses in
                            the NCR region.
                          </p>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab-4" role="tabpanel">
                        <div className="">
                          <h4>Project Breifing </h4>
                          <p>
                            Jaypee Greens Kalypso Court in Sector 128, Noida is
                            a ready-to-move housing society. It offers
                            apartments in varied budget range. These units are a
                            perfect combination of comfort and style,
                            specifically designed to suit your requirements and
                            conveniences. There are 2BHK, 3BHK and 4BHK
                            Apartments available in this project. This housing
                            society is now ready to be called home as families
                            have started moving in.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card body END */}
                </div>
                <div className="card mt-4">
                  {/* Card header START */}
                  <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                    <h6 className="card-title mb-0">Master Layout Plan</h6>
                    <button className="btn btn-sm btn-primary-soft">
                      {" "}
                      See all{" "}
                    </button>
                  </div>
                  {/* Card header START */}
                  {/* Card body START */}
                  <div className="card-body">
                    <div className="tiny-slider arrow-hover">
                      <div className="tiny-slider-inner1 ">
                        {properties1.map((property, index) => (
                          <div key={index} className="slider-card-padding">
                            <div className="card property-card p-3">
                              <div>
                                <h5
                                  className="card-title mb-0 fw-bold"
                                  style={{ fontSize: 15 }}
                                >
                                  {property.title}
                                </h5>
                                <p className="mb-0" style={{ fontSize: 13 }}>
                                  {property.description}
                                </p>
                              </div>
                              <div className="my-2">
                                <img
                                  src={property.image}
                                  alt="Property Image"
                                  className="property-image"
                                />
                              </div>
                              <div className="property-details">
                                <h6 className="price mb-2">{property.price}</h6>
                                <div className="property-deatil-start bg-light border-0 rounded">
                                  <p className="mb-0" style={{ fontSize: 13 }}>
                                    {property.status}
                                  </p>
                                  <p className="mb-0" style={{ fontSize: 13 }}>
                                    {property.possession}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Card body END */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card card-body mt-4">
                {/* Overview */}
                <h4>Property Type</h4>
                <p>
                  <span className="fw-bold">Address:</span> Sector 10 Greater
                  Noida West, Greater Noida.
                </p>
                <p>
                  separate room with attached washroom is available in
                  independent 3bhk semi-Furnished flat with modernised interior.
                  Maintenance included in rent. Other society amenities like
                  gym, swimming pool, club, library, spa etc are open to access.
                  Dedicated bike/car parking available.
                </p>
                <div className="mt-4 mt-sm-0">
                  <div
                    className="accordion accordion-icon"
                    id="accordionschedules"
                  >
                    {/* Accordion item */}
                    <div className="accordion-item mb-3">
                      <div className="accordion-header" id="scheduleOne">
                        <button
                          className="accordion-button pe-5 flex-wrap mb-0"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#schedulecollapseOne"
                          aria-expanded="true"
                          aria-controls="schedulecollapseOne"
                        >
                          <strong>1 BHK Layout</strong>
                        </button>
                      </div>
                      {/* Accordion info */}
                      <div
                        id="schedulecollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="scheduleOne"
                        data-bs-parent="#accordionschedules"
                      >
                        <div className="row p-3 justify-content-center align-items-center">
                          <div className="col-md-6">
                            <div>
                              <img src={towbhk} alt="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="text-start ">
                              <p className="mb-2">Super Area: 970 sqft</p>
                              <p className="mb-2"> Carpet Area: 649.6 sqft</p>
                              <div className="">
                                <div className=" text-start mb-2">
                                  Living &amp; Dining (21'3" x 11'10")
                                </div>
                                <div className=" text-start mb-2">
                                  Bedroom (15'7" x 11'11")
                                </div>
                                <div className="text-start mb-2">
                                  Kitchen (10'4" x 5'11")
                                </div>
                                <div className="text-start mb-2">
                                  Balcony (7'4" x 2'9")
                                </div>
                                <div className="text-start mb-2">
                                  Dresser Room (4'5" x 5'11")
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Accordion item */}
                    <div className="accordion-item mb-3">
                      <div className="accordion-header" id="scheduleTwo">
                        <button
                          className="accordion-button pe-5 flex-wrap mb-0 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#schedulecollapseTwo"
                          aria-expanded="false"
                          aria-controls="schedulecollapseTwo"
                        >
                          <strong>2 BHK Layout</strong>
                        </button>
                      </div>
                      {/* Accordion info */}
                      <div
                        id="schedulecollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="scheduleTwo"
                        data-bs-parent="#accordionschedules"
                      >
                        <div className="row p-3 justify-content-center align-items-center">
                          <div className="col-md-6">
                            <div>
                              <img src={towbhk} alt="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="text-start ">
                              <p className="mb-2">Super Area: 1820 Sqft</p>
                              <p className="mb-2"> Carpet Area: 1219.4 Sqft</p>
                              <div className="">
                                <div className=" text-start mb-2">
                                  Living &amp; Dining (21' 1'' X 16' 6'')
                                </div>
                                <div className=" text-start mb-2">
                                  Bedroom Master (15' 11'' X 12' 2'')
                                </div>
                                <div className=" text-start mb-2">
                                  Bedroom (15'7" x 11'11")
                                </div>
                                <div className="text-start mb-2">
                                  Kitchen (15' 9'' X 8' 2'')
                                </div>
                                <div className="text-start mb-2">
                                  Balcony (8' 4'' X 3' 7'')
                                </div>
                                <div className="text-start mb-2">
                                  Dresser Room (4' 9'' X 5' 11'')
                                </div>
                                <div className="text-start mb-2">
                                  No of Toilets 1 (9' 0'' X 5' 11'')
                                </div>
                                <div className="text-start mb-2">
                                  No of Toilets 2 (7' 1'' X 3' 2'')
                                </div>
                                <div className="text-start mb-2">
                                  No of Toilets 3 (9' 0'' X 5' 11'')
                                </div>
                                <div className="text-start mb-2">
                                  Servant quarter (9' 1'' X 8' 10'')
                                </div>
                                <div className="text-start mb-2">
                                  Entry Vestibule (5' 8'' X 8' 2'')
                                </div>
                                <div className="text-start mb-2">
                                  Dry Balcony (7' 1'' X 4' 11'')
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Accordion item */}
                    <div className="accordion-item mb-3">
                      <div className="accordion-header" id="scheduleThree">
                        <button
                          className="accordion-button pe-5 flex-wrap mb-0 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#schedulecollapseThree"
                          aria-expanded="false"
                          aria-controls="schedulecollapseThree"
                        >
                          <strong>3 BHK Layout</strong>
                        </button>
                      </div>
                      {/* Accordion info */}
                      <div
                        id="schedulecollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="scheduleThree"
                        data-bs-parent="#accordionschedules"
                      >
                        <div className="accordion-body">
                          <div className="row p-3 justify-content-center align-items-center">
                            <div className="col-md-6">
                              <div>
                                <img src={towbhk} alt="" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="text-start ">
                                <p className="mb-2">Super Area: 2625 Sqft</p>
                                <p className="mb-2">
                                  Carpet Area: 1758.75 Sqft
                                </p>
                                <div className="">
                                  <div className="text-start mb-2">
                                    Living &amp; Dining (25' 4'' X 19' 8'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Bedroom Master (15' 8'' X 12' 0'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Bedroom 1 (14' 9'' X 11' 0'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Bedroom 2 (14' 9'' X 11' 0'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Kitchen (14' 11'' X 8' 6'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Balcony (8' 8'' X 6' 1'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Dresser Room 1 (6' 7'' X 5' 7'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Dresser Room 2 (5' 1'' X 5' 3'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Dresser Room 3 (5' 1'' X 5' 3'')
                                  </div>
                                  <div className="text-start mb-2">
                                    No of Toilets 1 (8' 10'' X 5' 3'')
                                  </div>
                                  <div className="text-start mb-2">
                                    No of Toilets 2 (9' 4'' X 5' 3'')
                                  </div>
                                  <div className="text-start mb-2">
                                    No of Toilets 3 (8' 10'' X 10' 10'')
                                  </div>
                                  <div className="text-start mb-2">
                                    No of Toilets 4 (6' 11'' X 3' 11'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Servant quarter (8' 2'' X 10' 10'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Entry Vestibule (6' 6'' X 9' 10'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Vestibule (5' 1'' X 4' 5'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Dry Balcony (8' 8'' X 6' 1'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Terrace (8' 6'' X 12' 4'')
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Accordion item */}
                    {/* Accordion item */}
                    <div className="accordion-item mb-3">
                      <div className="accordion-header" id="scheduleThree">
                        <button
                          className="accordion-button pe-5 flex-wrap mb-0 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#schedulecollapseFour"
                          aria-expanded="false"
                          aria-controls="schedulecollapseFour"
                        >
                          <strong>4 BHK Layout</strong>
                        </button>
                      </div>
                      {/* Accordion info */}
                      <div
                        id="schedulecollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="scheduleFour"
                        data-bs-parent="#accordionschedules"
                      >
                        <div className="accordion-body">
                          <div className="row p-3 justify-content-center align-items-center">
                            <div className="col-md-6">
                              <div>
                                <img src={towbhk} alt="" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="text-start ">
                                <p className="mb-2">Super Area: 3619 Sqft</p>
                                <p className="mb-2">
                                  Carpet Area: 2424.73 Sqft
                                </p>
                                <div className="">
                                  <div className="text-start mb-2">
                                    Living &amp; Dining (25' 4'' X 19' 8'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Bedroom Master (15' 9'' X 19' 8'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Bedroom 1 (17' 0'' X 15' 0'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Bedroom 2 (11' 0'' X 14' 5'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Bedroom 3 (11' 0'' X 14' 5'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Kitchen (8' 0'' X 15' 5'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Balconies (16' 5'' X 4' 7'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Dresser Room 1 (9' 6'' X 6' 9'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Dresser Room 2 (6' 0'' X 6' 2'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Dresser Room 3 (5' 0'' X 5' 1'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Dresser Room 4 (5' 0'' X 5' 1'')
                                  </div>
                                  <div className="text-start mb-2">
                                    No of Toilets 1 (9' 6'' X 9' 0'')
                                  </div>
                                  <div className="text-start mb-2">
                                    No of Toilets 2 (6' 0'' X 9' 8'')
                                  </div>
                                  <div className="text-start mb-2">
                                    No of Toilets 3 (5' 0'' X 9' 0'')
                                  </div>
                                  <div className="text-start mb-2">
                                    No of Toilets 4 (5' 0'' X 9' 0'')
                                  </div>
                                  <div className="text-start mb-2">
                                    No of Toilets 5 (4' 2'' X 6' 6'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Servant quarter (10' 0'' X 8' 7'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Entry Vestibule (6' 10'' X 6' 10'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Dry Balcony (5' 6'' X 7' 2'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Family Room (12' 9'' X 14' 0'')
                                  </div>
                                  <div className="text-start mb-2">
                                    Terrace (12' 3'' X 11' 6'')
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Accordion item */}
                  </div>
                </div>
              </div>

              <div className="card mt-4">
                {/* Card header START */}
                <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                  <h6 className="card-title mb-0">
                    People who viewed this property also liked
                  </h6>
                  <button className="btn btn-sm btn-primary-soft">
                    {" "}
                    See all{" "}
                  </button>
                </div>
                {/* Card header START */}
                {/* Card body START */}
                <div className="card-body">
                  <div className="tiny-slider arrow-hover">
                    <div className="tiny-slider-inner2">
                      {properties2.map((property, index) => (
                        <div key={index} className="slider-card-padding">
                          <div className="card shadow-none text-start">
                            {/* Card Body */}
                            <div className="card-body p-2 pb-0">
                              <div>
                                <Link to="#!">
                                  <img
                                    className="img-fluid"
                                    src={property.image}
                                    alt="Property Image"
                                  />
                                </Link>
                              </div>
                              <div className="mt-2">
                                <p className="mb-0 small lh-sm">
                                  {property.bhk}
                                </p>
                                <h6 className="card-title mb-1 ">
                                  <Link to="#!">{property.price}</Link>
                                </h6>
                                <p className="mb-0">{property.location}</p>
                              </div>
                            </div>
                            {/* Card Footer */}
                            <div className="card-footer p-2 border-0">
                              <button className="btn btn-sm btn-primary-soft w-100">
                                Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>
              <div className="card card-body mt-4">
                {/* Faqs START */}
                <div className="mt-4 mt-sm-0">
                  <h4>FAQ </h4>
                  {/* Faq accordion */}
                  <div className="accordion accordion-icon" id="accordionfaq">
                    {/* Faq accordion Item */}
                    <div className="accordion-item mb-3">
                      <div className="accordion-header" id="faqOne">
                        <button
                          className="accordion-button pe-5 flex-wrap fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseOne"
                          aria-expanded="true"
                          aria-controls="faqcollapseOne"
                        >
                          What are the key details of the property?
                        </button>
                      </div>
                      <div
                        id="faqcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="faqOne"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            The property includes [number] bedrooms, [number]
                            bathrooms, a [size] sq. ft. area, and is located in
                            [location]. Additional features include [amenities
                            like parking, garden, swimming pool, etc.].
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Faq accordion Item */}
                    <div className="accordion-item mb-3">
                      <div className="accordion-header" id="faqTwo">
                        <button
                          className="accordion-button pe-5 flex-wrap fw-bold collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseTwo"
                          aria-expanded="false"
                          aria-controls="faqcollapseTwo"
                        >
                          What are the key features and amenities?
                        </button>
                      </div>
                      <div
                        id="faqcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqTwo"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            The property includes [number] bedrooms, [number]
                            bathrooms, [size] sq. ft. area, and amenities like
                            [parking, security, clubhouse, etc.].
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Faq accordion Item */}
                    <div className="accordion-item mb-3">
                      <div className="accordion-header" id="faqThree">
                        <button
                          className="accordion-button pe-5 flex-wrap fw-bold collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseThree"
                          aria-expanded="false"
                          aria-controls="faqcollapseThree"
                        >
                          Can I get a home loan for this property?
                        </button>
                      </div>
                      <div
                        id="faqcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqThree"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            Yes, home loans are available from major banks. We
                            can assist you with the loan application process.
                            Would you like any modifications based on your
                            specific property listing?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Faqs END */}
              </div>
              <div className="card p-3 mt-4">
                <div className="row g-4">
                  {/* Owner Details Section */}
                  <div className="col-lg-5 owner-section">
                    <div className="owner-card  row">
                      <div className="owner-avatar col-sm-6">
                        <img className="img-fluid" src={profile1} alt="" />
                      </div>
                      <div className="owner-info col-sm-6">
                        <h5 className="mb-0">Nikhil Johri</h5>
                        <p className="text-muted mb-3">Owner</p>
                        <button className="view-phone-btn mb-4">
                          View Phone Number
                        </button>
                        <div className="d-flex align-items-center mb-2">
                          <span className="me-2">Properties Listed:</span>
                          <span className="properties-count">1</span>
                        </div>
                        <div className="mb-0">
                          <p className="mb-0">
                            Localities: Sector 10 Greater Noida West
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Send Enquiry Section */}
                  <div className="col-lg-7 enquiry-section">
                    <div className="enquiry-form h-100">
                      <h5 className="mb-4">Send enquiry to Owner</h5>
                      <form>
                        <div className="mb-3">
                          <label className="form-label">You are</label>
                          <div className="radio-group">
                            <label>
                              <input
                                type="radio"
                                name="enquirerType"
                                defaultChecked=""
                              />{" "}
                              Individual
                            </label>
                            <label>
                              <input type="radio" name="enquirerType" /> Dealer
                            </label>
                          </div>
                        </div>
                        <div className="row g-4">
                          <div className="col-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Ankit Singh"
                            />
                          </div>
                          <div className=" col-4">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                          <div className="col-4">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder={6268816853}
                            />
                          </div>
                          <div className="col-12">
                            <textarea
                              className="form-control"
                              rows={3}
                              placeholder="I am interested in this Property."
                              defaultValue={"I am interested in this Property."}
                            />
                          </div>
                        </div>
                        <div className="my-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="agreeTerms"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="agreeTerms"
                              style={{ fontSize: 13 }}
                            >
                              I agree to the{" "}
                              <Link
                                to="term-condition.html"
                                className="text-decoration-none"
                              >
                                Terms &amp; Conditions
                              </Link>{" "}
                              and{" "}
                              <Link
                                to="privacy-and-terms.html"
                                className="text-decoration-none"
                              >
                                Privacy Policy
                              </Link>
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary-soft w-100"
                        >
                          Send Email &amp; SMS
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-4">
                {/* Card header START */}
                <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                  <h6 className="card-title mb-0">
                    Other Properties in this Project and Nearby
                  </h6>
                  <button className="btn btn-sm btn-primary-soft">
                    {" "}
                    See all{" "}
                  </button>
                </div>
                {/* Card header START */}
                {/* Card body START */}
                <div className="card-body">
                  <div className="tiny-slider arrow-hover">
                    <div className="tiny-slider-inner3">
                      {properties3.map((property, index) => (
                        <div key={index}>
                          <div className="card shadow-none text-start">
                            {/* Card Body */}
                            <div className="card-body p-2 pb-0">
                              <div className="">
                                <Link to="#!">
                                  <img
                                    className="img-fluid"
                                    src={property.image}
                                    alt="Property"
                                  />
                                </Link>
                              </div>
                              <div className="mt-2">
                                <p className="mb-0 small lh-sm">
                                  {property.title}
                                </p>
                                <h6 className="card-title mb-1">
                                  <Link to="#!">{property.price}</Link>
                                </h6>
                                <p className="mb-0">{property.location}</p>
                              </div>
                            </div>
                            {/* Card Footer */}
                            <div className="card-footer p-2 border-0">
                              <button className="btn btn-sm btn-primary-soft w-100">
                                Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>
              <div className="card mt-4">
                {/* Card header START */}
                <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                  <h6 className="card-title mb-0">Hotel</h6>
                  <button className="btn btn-sm btn-primary-soft">
                    {" "}
                    See all{" "}
                  </button>
                </div>
                {/* Card header START */}
                {/* Card body START */}
                <div className="card-body">
                  <div className="tiny-slider arrow-hover">
                    <div className="tiny-slider-inner4">
                      {properties3.map((property, index) => (
                        <div key={index}>
                          <div className="card shadow-none text-start">
                            {/* Card Body */}
                            <div className="card-body p-2 pb-0">
                              <div className="">
                                <Link to="#!">
                                  <img
                                    className="img-fluid"
                                    src={property.image}
                                    alt="Property"
                                  />
                                </Link>
                              </div>
                              <div className="mt-2">
                                <p className="mb-0 small lh-sm">
                                  {property.title}
                                </p>
                                <h6 className="card-title mb-1">
                                  <Link to="#!">{property.price}</Link>
                                </h6>
                                <p className="mb-0">{property.location}</p>
                              </div>
                            </div>
                            {/* Card Footer */}
                            <div className="card-footer p-2 border-0">
                              <button className="btn btn-sm btn-primary-soft w-100">
                                Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>
              <div className="card mt-4">
                {/* Card header START */}
                <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                  <h6 className="card-title mb-0">Service Suite</h6>
                  <button className="btn btn-sm btn-primary-soft">
                    {" "}
                    See all{" "}
                  </button>
                </div>
                {/* Card header START */}
                {/* Card body START */}
                <div className="card-body">
                  <div className="tiny-slider arrow-hover">
                    <div className="tiny-slider-inner5">
                      {properties3.map((property, index) => (
                        <div key={index}>
                          <div className="card shadow-none text-start">
                            {/* Card Body */}
                            <div className="card-body p-2 pb-0">
                              <div className="">
                                <Link to="#!">
                                  <img
                                    className="img-fluid"
                                    src={property.image}
                                    alt="Property"
                                  />
                                </Link>
                              </div>
                              <div className="mt-2">
                                <p className="mb-0 small lh-sm">
                                  {property.title}
                                </p>
                                <h6 className="card-title mb-1">
                                  <Link to="#!">{property.price}</Link>
                                </h6>
                                <p className="mb-0">{property.location}</p>
                              </div>
                            </div>
                            {/* Card Footer */}
                            <div className="card-footer p-2 border-0">
                              <button className="btn btn-sm btn-primary-soft w-100">
                                Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>
              <div className="card mt-4">
                {/* Card header START */}
                <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                  <h6 className="card-title mb-0">Commercial Plots</h6>
                  <button className="btn btn-sm btn-primary-soft">
                    {" "}
                    See all{" "}
                  </button>
                </div>
                {/* Card header START */}
                {/* Card body START */}
                <div className="card-body">
                  <div className="tiny-slider arrow-hover">
                    <div className="tiny-slider-inner6">
                      {properties3.map((property, index) => (
                        <div key={index}>
                          <div className="card shadow-none text-start">
                            {/* Card Body */}
                            <div className="card-body p-2 pb-0">
                              <div className="">
                                <Link to="#!">
                                  <img
                                    className="img-fluid"
                                    src={property.image}
                                    alt="Property"
                                  />
                                </Link>
                              </div>
                              <div className="mt-2">
                                <p className="mb-0 small lh-sm">
                                  {property.title}
                                </p>
                                <h6 className="card-title mb-1">
                                  <Link to="#!">{property.price}</Link>
                                </h6>
                                <p className="mb-0">{property.location}</p>
                              </div>
                            </div>
                            {/* Card Footer */}
                            <div className="card-footer p-2 border-0">
                              <button className="btn btn-sm btn-primary-soft w-100">
                                Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>
              <div className="card mt-4">
                {/* Card header START */}
                <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                  <h6 className="card-title mb-0">SCO</h6>
                  <button className="btn btn-sm btn-primary-soft">
                    {" "}
                    See all{" "}
                  </button>
                </div>
                {/* Card header START */}
                {/* Card body START */}
                <div className="card-body">
                  <div className="tiny-slider arrow-hover">
                    <div className="tiny-slider-inner7">
                      {properties3.map((property, index) => (
                        <div key={index}>
                          <div className="card shadow-none text-start">
                            {/* Card Body */}
                            <div className="card-body p-2 pb-0">
                              <div className="">
                                <Link to="#!">
                                  <img
                                    className="img-fluid"
                                    src={property.image}
                                    alt="Property"
                                  />
                                </Link>
                              </div>
                              <div className="mt-2">
                                <p className="mb-0 small lh-sm">
                                  {property.title}
                                </p>
                                <h6 className="card-title mb-1">
                                  <Link to="#!">{property.price}</Link>
                                </h6>
                                <p className="mb-0">{property.location}</p>
                              </div>
                            </div>
                            {/* Card Footer */}
                            <div className="card-footer p-2 border-0">
                              <button className="btn btn-sm btn-primary-soft w-100">
                                Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>
              <div className="card mt-4">
                {/* Card header START */}
                <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                  <h6 className="card-title mb-0">Shops</h6>
                  <button className="btn btn-sm btn-primary-soft">
                    {" "}
                    See all{" "}
                  </button>
                </div>
                {/* Card header START */}
                {/* Card body START */}
                <div className="card-body">
                  <div className="tiny-slider arrow-hover">
                    <div className="tiny-slider-inner8">
                      {properties3.map((property, index) => (
                        <div key={index}>
                          <div className="card shadow-none text-start">
                            {/* Card Body */}
                            <div className="card-body p-2 pb-0">
                              <div className="">
                                <Link to="#!">
                                  <img
                                    className="img-fluid"
                                    src={property.image}
                                    alt="Property"
                                  />
                                </Link>
                              </div>
                              <div className="mt-2">
                                <p className="mb-0 small lh-sm">
                                  {property.title}
                                </p>
                                <h6 className="card-title mb-1">
                                  <Link to="#!">{property.price}</Link>
                                </h6>
                                <p className="mb-0">{property.location}</p>
                              </div>
                            </div>
                            {/* Card Footer */}
                            <div className="card-footer p-2 border-0">
                              <button className="btn btn-sm btn-primary-soft w-100">
                                Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>
              <div className="card mt-4">
                {/* Card header START */}
                <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                  <h6 className="card-title mb-0">Studio Apartment</h6>
                  <button className="btn btn-sm btn-primary-soft">
                    {" "}
                    See all{" "}
                  </button>
                </div>
                {/* Card header START */}
                {/* Card body START */}
                <div className="card-body">
                  <div className="tiny-slider arrow-hover">
                    <div className="tiny-slider-inner9">
                      {properties3.map((property, index) => (
                        <div key={index}>
                          <div className="card shadow-none text-start">
                            {/* Card Body */}
                            <div className="card-body p-2 pb-0">
                              <div className="">
                                <Link to="#!">
                                  <img
                                    className="img-fluid"
                                    src={property.image}
                                    alt="Property"
                                  />
                                </Link>
                              </div>
                              <div className="mt-2">
                                <p className="mb-0 small lh-sm">
                                  {property.title}
                                </p>
                                <h6 className="card-title mb-1">
                                  <Link to="#!">{property.price}</Link>
                                </h6>
                                <p className="mb-0">{property.location}</p>
                              </div>
                            </div>
                            {/* Card Footer */}
                            <div className="card-footer p-2 border-0">
                              <button className="btn btn-sm btn-primary-soft w-100">
                                Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>
              <div className="card mt-4">
                {/* Card header START */}
                <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                  <h6 className="card-title mb-0">Villas</h6>
                  <button className="btn btn-sm btn-primary-soft">
                    {" "}
                    See all{" "}
                  </button>
                </div>
                {/* Card header START */}
                {/* Card body START */}
                <div className="card-body">
                  <div className="tiny-slider arrow-hover">
                    <div className="tiny-slider-inner10">
                      {properties3.map((property, index) => (
                        <div key={index}>
                          <div className="card shadow-none text-start">
                            {/* Card Body */}
                            <div className="card-body p-2 pb-0">
                              <div className="">
                                <Link to="#!">
                                  <img
                                    className="img-fluid"
                                    src={property.image}
                                    alt="Property"
                                  />
                                </Link>
                              </div>
                              <div className="mt-2">
                                <p className="mb-0 small lh-sm">
                                  {property.title}
                                </p>
                                <h6 className="card-title mb-1">
                                  <Link to="#!">{property.price}</Link>
                                </h6>
                                <p className="mb-0">{property.location}</p>
                              </div>
                            </div>
                            {/* Card Footer */}
                            <div className="card-footer p-2 border-0">
                              <button className="btn btn-sm btn-primary-soft w-100">
                                Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>
              <div className="card mt-4">
                {/* Card header START */}
                <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                  <h6 className="card-title mb-0">Plots</h6>
                  <button className="btn btn-sm btn-primary-soft">
                    {" "}
                    See all{" "}
                  </button>
                </div>
                {/* Card header START */}
                {/* Card body START */}
                <div className="card-body">
                  <div className="tiny-slider arrow-hover">
                    <div className="tiny-slider-inner11">
                      {properties3.map((property, index) => (
                        <div key={index}>
                          <div className="card shadow-none text-start">
                            {/* Card Body */}
                            <div className="card-body p-2 pb-0">
                              <div className="">
                                <Link to="#!">
                                  <img
                                    className="img-fluid"
                                    src={property.image}
                                    alt="Property"
                                  />
                                </Link>
                              </div>
                              <div className="mt-2">
                                <p className="mb-0 small lh-sm">
                                  {property.title}
                                </p>
                                <h6 className="card-title mb-1">
                                  <Link to="#!">{property.price}</Link>
                                </h6>
                                <p className="mb-0">{property.location}</p>
                              </div>
                            </div>
                            {/* Card Footer */}
                            <div className="card-footer p-2 border-0">
                              <button className="btn btn-sm btn-primary-soft w-100">
                                Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>

              {/* -------------------------- */}
            </div>
          </div>
        </div>
      </main>
      <footer className="pt-5 bg-mode">
        <div className="container pt-4">
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

export default ProjectDetail;
