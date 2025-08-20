import React, { Fragment } from "react";
import Navbar2 from "../../ReuseComp/Navbar2";
import LeftSideBar2 from "../../ReuseComp/LeftSideBar2";
import logo1 from "../../assets/images/logo/01.svg"
import logo2 from "../../assets/images/logo/02.svg"
import logo4 from "../../assets/images/logo/04.svg"
import logo6 from "../../assets/images/logo/06.svg"
import { Link } from "react-router-dom";

const EventDetails = () => {
  return (
    <Fragment>
      <Navbar2 />
      <main>
        <div className="container">
          <div className="row g-4">
            <LeftSideBar2 />
            <div className="col-md-8 col-lg-9 vstack gap-4">
              {/* Card START */}
              <div
                className="card card-body  border-0 event-details-bg-img"
              >
                {/* Card body START */}
                <div className="row g-3 justify-content-between">
                  {/* Date START */}
                  <div className="col-lg-2">
                    <div className="bg-mode text-center rounded overflow-hidden p-1 d-inline-block">
                      <div className="bg-primary p-2 text-white rounded-top small lh-1">
                        Wednesday
                      </div>
                      <h5 className="mb-0 py-2 lh-1">Dec 08</h5>
                    </div>
                  </div>
                </div>
                {/* Event name START */}
                {/* Event name END */}
              </div>
              {/* Card END */}
              <div className="row g-3 justify-content-between align-items-center  pt-5 position-relative z-index-9">
                <div className="col-lg-9">
                  <h1 className="h3 mb-1 ">
                    M3M Launches Luxury Residence Project
                  </h1>
                  <Link className="" to="https://stackbros.in" target="_blank">
                    in Gurgaon and Noida
                  </Link>
                </div>
                {/* Button */}
                <div className="col-lg-3 text-lg-end">
                  <Link className="btn btn-primary" to="#!">
                    {" "}
                    Buy ticket{" "}
                  </Link>
                </div>
              </div>
              {/* Card About START */}
              <div className="card card-body">
                {/* Card body START */}
                <div className="row g-4">
                  {/* info */}
                  <div className="col-12">
                    <p className="mb-0">
                      M3M unveils a premium residential project with world-class
                      amenities, smart home features, and elegant design.
                      Strategically located, it offers luxury, comfort, and
                      seamless connectivity. Bookings now open!
                    </p>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    {/* Timings */}
                    <h5>Timing</h5>
                    <p className="small mb-0">
                      🕘 09:00 AM - 06:00 PM (Business Hours)
                    </p>
                    {/* <p class="small mb-0"> 09:00 AM - 03:00 PM (Business)</p> */}
                  </div>
                  {/* Entry Fees */}
                  <div className="col-sm-6 col-lg-4">
                    <h5>Entry fees</h5>
                    <p className="small mb-0">
                      {" "}
                      <Link to="#!"> Free Ticket </Link>For photography
                      professionals check official website
                    </p>
                  </div>
                  {/* Category & Type */}
                  <div className="col-sm-6 col-lg-4">
                    <h5>Category &amp; type</h5>
                    <p className="small mb-0">
                      Luxury Residential Project | Premium Apartments &amp;
                      Villas
                    </p>
                  </div>
                  {/* Estimated Turnout */}
                  <div className="col-sm-6 col-lg-4">
                    <h5>Estimated Demand</h5>
                    <p className="small mb-0">
                      ✅ High-end buyers &amp; investors
                    </p>
                    <p className="small mb-0">
                      {" "}
                      ✅ Exclusive launch offers available
                    </p>
                    <span className="badge bg-danger text-danger bg-opacity-10 small">
                      Estimated Count
                    </span>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    {/* Rating */}
                    <ul className="d-flex list-unstyled mb-1">
                      <li className="me-2">4.5</li>
                      <li>
                        <i className="fa-solid fa-star text-warning" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star text-warning" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star text-warning" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star text-warning" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star-half-stroke text-warning" />
                      </li>
                      <li className="ms-1 small">132 Ratings</li>
                    </ul>
                    <p className="mb-0 small">
                      {" "}
                      <strong> #2 of 3506</strong> Events in Photography &amp;
                      Prewedding
                    </p>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    {/* Interested */}
                    <div className="d-flex">
                      <h6>
                        {" "}
                        <i className="bi bi-hand-thumbs-up-fill text-success" />{" "}
                        50
                      </h6>
                      <p className="small">
                        People have shown interest recently
                      </p>
                    </div>
                    <button className="btn btn-success-soft btn-sm">
                      Interested?
                    </button>
                  </div>
                </div>
                <hr className="mt-4" />
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h5>Attendees</h5>
                    {/* Avatar group START */}
                    <ul className="avatar-group list-unstyled align-items-center">
                      <li className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src="01.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src="03.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src="04.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src="05.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src="06.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li className="ms-4">
                        <small> 148.9K people responded</small>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    {/* Avatar group END */}
                    <div className="row g-2">
                      <div className="col-sm-4">
                        {/* Visitors */}
                        <div className="d-flex">
                          <i className="bi bi-globe fs-4" />
                          <div className="ms-3">
                            <h5 className="mb-0">125</h5>
                            <p className="mb-0">Visitors</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        {/* Registred */}
                        <div className="d-flex">
                          <i className="bi bi-person-plus fs-4" />
                          <div className="ms-3">
                            <h5 className="mb-0">356</h5>
                            <p className="mb-0">Registred</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        {/* Attendance */}
                        <div className="d-flex">
                          <i className="bi bi-people fs-4" />
                          <div className="ms-3">
                            <h5 className="mb-0">350</h5>
                            <p className="mb-0">Attendance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card About END */}
              {/* Related events START */}
              <div className="row g-4">
                <div className="col-lg-6">
                  {/* Card START */}
                  <div className="card">
                    <div className="card-header border-0">
                      <h5 className="card-title">Related events</h5>
                      {/* Button modal */}
                    </div>
                    {/* Card body START */}
                    <div className="card-body pt-0">
                      {/* Related events item */}
                      <div className="d-sm-flex flex-wrap align-items-center mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-md">
                          <img
                            className="avatar-img rounded-circle border border-white border-3"
                            src={logo1}
                            alt=""
                          />
                        </div>
                        {/* info */}
                        <div className="ms-sm-2 my-2 my-sm-0">
                          <h6 className="mb-0">Bone thugs-n-harmony</h6>
                          <p className="small mb-0">
                            {" "}
                            <i className="bi bi-geo-alt pe-1" />
                            San francisco{" "}
                          </p>
                        </div>
                        {/* Button */}
                        <div className="ms-sm-auto mt-2 mt-sm-0">
                          {/* Interested button */}
                          <input
                            type="checkbox"
                            className="btn-check"
                            id="Interested1"
                          />
                          <label
                            className="btn btn-sm btn-outline-success"
                            htmlFor="Interested1"
                          >
                            <i className="fa-solid fa-thumbs-up me-1" />{" "}
                            Interested
                          </label>
                        </div>
                      </div>
                      {/* Related events item */}
                      <div className="d-sm-flex flex-wrap align-items-center mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-md">
                          <img
                            className="avatar-img rounded-circle border border-white border-3"
                            src={logo2}
                            alt=""
                          />
                        </div>
                        {/* info */}
                        <div className="ms-sm-2 my-2 my-sm-0">
                          <h6 className="mb-0">Decibel magazine</h6>
                          <p className="small mb-0">
                            {" "}
                            <i className="bi bi-geo-alt pe-1" />
                            London{" "}
                          </p>
                        </div>
                        {/* Button */}
                        <div className="ms-sm-auto mt-2 mt-sm-0">
                          {/* Interested button */}
                          <input
                            type="checkbox"
                            className="btn-check"
                            id="Interested2"
                            checked
                          />
                          <label
                            className="btn btn-sm btn-outline-success"
                            htmlFor="Interested2"
                          >
                            <i className="fa-solid fa-thumbs-up me-1" />{" "}
                            Interested
                          </label>
                        </div>
                      </div>
                      {/* Related events item */}
                      <div className="d-sm-flex flex-wrap align-items-center mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-md">
                          <img
                            className="avatar-img rounded-circle border border-white border-3"
                            src={logo6}
                            alt=""
                          />
                        </div>
                        {/* info */}
                        <div className="ms-sm-2 my-2 my-sm-0">
                          <h6 className="mb-0">Illenium: fallen embers</h6>
                          <p className="small mb-0">
                            {" "}
                            <i className="bi bi-geo-alt pe-1" />
                            Mumbai{" "}
                          </p>
                        </div>
                        {/* Button */}
                        <div className="ms-sm-auto mt-2 mt-sm-0">
                          {/* Interested button */}
                          <input
                            type="checkbox"
                            className="btn-check"
                            id="Interested3"
                            defaultChecked=""
                          />
                          <label
                            className="btn btn-sm btn-outline-success"
                            htmlFor="Interested3"
                          >
                            <i className="fa-solid fa-thumbs-up me-1" />{" "}
                            Interested
                          </label>
                        </div>
                      </div>
                      {/* Related events item */}
                      <div className="d-sm-flex flex-wrap align-items-center">
                        {/* Avatar */}
                        <div className="avatar avatar-md">
                          <img
                            className="avatar-img rounded-circle border border-white border-3"
                            src={logo4}
                            alt=""
                          />
                        </div>
                        {/* info */}
                        <div className="ms-sm-2 my-2 my-sm-0">
                          <h6 className="mb-0">Comedy on the green</h6>
                          <p className="small mb-0">
                            {" "}
                            <i className="bi bi-geo-alt pe-1" />
                            Miami{" "}
                          </p>
                        </div>
                        {/* Button */}
                        <div className="ms-sm-auto mt-2 mt-sm-0">
                          {/* Interested button */}
                          <input
                            type="checkbox"
                            className="btn-check"
                            id="Interested4"
                          />
                          <label
                            className="btn btn-sm btn-outline-success"
                            htmlFor="Interested4"
                          >
                            <i className="fa-solid fa-thumbs-up me-1" />{" "}
                            Interested
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Card body END */}
                  </div>
                  {/* Card END */}
                </div>
                <div className="col-lg-6">
                  {/* Card START */}
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h5 className="card-title mb-0">Event location</h5>
                      <p className="small">
                        {" "}
                        <i className="bi bi-geo-alt pe-1" />
                        Sector 94 Noida Uttar Pradesh{" "}
                      </p>
                      {/* Button modal */}
                    </div>
                    {/* Card body START */}
                    <div className="card-body pt-0">
                      {/* Google map */}
                      <iframe
                        className="w-100 d-block rounded-bottom grayscale"
                        height={230}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.656111061204!2d77.31409278174938!3d28.549816559971916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce42e51d479b3%3A0x314a21b2dee3f41f!2sSector%2094%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1740567796715!5m2!1sen!2sin"
                        width={600}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    {/* Card body END */}
                  </div>
                  {/* Card END */}
                </div>
              </div>
              {/* Related events END */}
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default EventDetails;
