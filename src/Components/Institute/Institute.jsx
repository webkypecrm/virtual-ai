import React, { Fragment } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import { Link } from "react-router-dom";
import event1 from "../../assets/images/events/01.jpg";
import event2 from "../../assets/images/events/02.jpg";
import event3 from "../../assets/images/events/03.jpg";
import event4 from "../../assets/images/events/04.jpg";
import event5 from "../../assets/images/events/05.jpg";
import LeftSideBar2 from "../../ReuseComp/LeftSideBar2";

const Institute = () => {
  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container-fluid">
          <div className="row g-4">
           <LeftSideBar2/>
            <div className="col-md-8 col-lg-6 vstack gap-4">
      
              <div className="card h-100">
                <div className="card-header d-sm-flex align-items-center text-center justify-content-sm-between border-0 pb-0">
                  <h1 className="h4 card-title">Discover Events</h1>
                  <Link
                    className="btn btn-primary-soft"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#modalCreateEvents"
                  >
                    {" "}
                    <i className="fa-solid fa-plus pe-1"></i> Create event
                  </Link>
                </div>
                <div className="card-body">
                  <ul className="nav nav-tabs nav-bottom-line justify-content-center justify-content-md-start">
                    <li className="nav-item">
                      {" "}
                      <Link
                        className="nav-link active"
                        data-bs-toggle="tab"
                        to="#tab-1"
                      >
                        {" "}
                        Top{" "}
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link className="nav-link" data-bs-toggle="tab" to="#tab-2">
                        {" "}
                        Local{" "}
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link className="nav-link" data-bs-toggle="tab" to="#tab-3">
                        {" "}
                        This week{" "}
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link className="nav-link" data-bs-toggle="tab" to="#tab-4">
                        {" "}
                        Online{" "}
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link className="nav-link" data-bs-toggle="tab" to="#tab-5">
                        {" "}
                        Friends{" "}
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link className="nav-link" data-bs-toggle="tab" to="#tab-6">
                        {" "}
                        Following{" "}
                      </Link>{" "}
                    </li>
                  </ul>
                  <div className="tab-content mb-0 pb-0">
                    <div className="tab-pane fade show active" id="tab-1">
                      <div className="row g-4">
                        <div className="col-sm-6 col-xl-4">
                          {/* Event item START */}
                          <div className="card h-100">
                            <div className="position-relative">
                              <img
                                className="img-fluid rounded-top"
                                src={event1}
                                alt=""
                              />
                              <div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
                                Online
                              </div>
                            </div>
                            {/* Card body START */}
                            <div className="card-body position-relative pt-0">
                              {/* Tag */}
                              <Link
                                className="btn btn-xs btn-primary mt-n3"
                                to="/institute-details"
                              >
                                Spa training{" "}
                              </Link>
                              <h6 className="mt-3">
                                {" "}
                                <Link to="/institute-details">
                                  {" "}
                                  Bone thugs-n-harmony{" "}
                                </Link>{" "}
                              </h6>
                              {/* Date time */}
                              <p className="mb-0 small">
                                {" "}
                                <i className="bi bi-calendar-check pe-1" /> Mon,
                                Sep 25, 2020 at 9:30 AM{" "}
                              </p>
                              <p className="small">
                                {" "}
                                <i className="bi bi-geo-alt pe-1" /> San
                                francisco{" "}
                              </p>
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center mb-0">
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
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +78
                                    </span>
                                  </div>
                                </li>
                                <li className="ms-3">
                                  <small> are attending</small>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                              {/* Button */}
                              <div className="d-flex mt-3 justify-content-between">
                                {/* Interested button */}
                                <div className="w-100">
                                  <input
                                    type="checkbox"
                                    className="btn-check d-block"
                                    id="Interested1"
                                  />
                                  <label
                                    className="btn btn-sm btn-outline-success d-block"
                                    htmlFor="Interested1"
                                  >
                                    <i className="fa-solid fa-thumbs-up me-1" />{" "}
                                    Interested
                                  </label>
                                </div>
                                <div className="dropdown ms-3">
                                  <Link
                                    to="#"
                                    className="btn btn-sm btn-primary-soft"
                                    id="eventActionShare"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bi bi-share-fill" />
                                  </Link>
                                  {/* Dropdown menu */}
                                  <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="eventActionShare"
                                  >
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-envelope fa-fw pe-1" />{" "}
                                        Send via Direct Message
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-bookmark-check fa-fw pe-1" />{" "}
                                        Share to News Feed{" "}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-people fa-fw pe-1" />{" "}
                                        Share to a group
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-share fa-fw pe-1" />{" "}
                                        Share post via …
                                      </Link>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-person fa-fw pe-1" />{" "}
                                        Share on a friend's profile
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Card body END */}
                          </div>
                          {/* Event item END */}
                        </div>
                        <div className="col-sm-6 col-xl-4">
                          {/* Event item START */}
                          <div className="card h-100">
                            <div className="position-relative">
                              <img
                                className="img-fluid rounded-top"
                                src={event2}
                                alt=""
                              />
                              <div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
                                Hotel
                              </div>
                            </div>
                            {/* Card body START */}
                            <div className="card-body position-relative pt-0">
                              {/* Tag */}
                              <Link
                                className="btn btn-xs btn-primary mt-n3"
                                to="/institute-details"
                              >
                                Photography Workshop
                              </Link>
                              <h6 className="mt-3">
                                {" "}
                                <Link to="/institute-details">
                                  {" "}
                                  Decibel magazine{" "}
                                </Link>{" "}
                              </h6>
                              {/* Date time */}
                              <p className="mb-0 small">
                                {" "}
                                <i className="bi bi-calendar-check pe-1" /> Mon,
                                Aug 10, 2022 at 9:30 AM{" "}
                              </p>
                              <p className="small">
                                {" "}
                                <i className="bi bi-geo-alt pe-1" /> London{" "}
                              </p>
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center mb-0">
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
                                <li className="avatar avatar-xs">
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +34
                                    </span>
                                  </div>
                                </li>
                                <li className="ms-3">
                                  <small> are attending</small>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                              {/* Button */}
                              <div className="d-flex mt-3 justify-content-between">
                                {/* Interested button */}
                                <div className="w-100">
                                  <input
                                    type="checkbox"
                                    className="btn-check d-block"
                                    id="Interested2"
                                    defaultChecked=""
                                  />
                                  <label
                                    className="btn btn-sm btn-outline-success d-block"
                                    htmlFor="Interested2"
                                  >
                                    <i className="fa-solid fa-thumbs-up me-1" />{" "}
                                    Interested
                                  </label>
                                </div>
                                <div className="dropdown ms-3">
                                  <Link
                                    to="#"
                                    className="btn btn-sm btn-primary-soft"
                                    id="eventActionShare2"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bi bi-share-fill" />
                                  </Link>
                                  {/* Dropdown menu */}
                                  <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="eventActionShare2"
                                  >
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-envelope fa-fw pe-1" />{" "}
                                        Send via Direct Message
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-bookmark-check fa-fw pe-1" />{" "}
                                        Share to News Feed{" "}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-people fa-fw pe-1" />{" "}
                                        Share to a group
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-share fa-fw pe-1" />{" "}
                                        Share post via …
                                      </Link>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-person fa-fw pe-1" />{" "}
                                        Share on a friend's profile
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Card body END */}
                          </div>
                          {/* Event item END */}
                        </div>
                        <div className="col-sm-6 col-xl-4">
                          {/* Event item START */}
                          <div className="card h-100">
                            <div className="position-relative">
                              <img
                                className="img-fluid rounded-top"
                                src={event3}
                                alt=""
                              />
                              <div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
                                Online
                              </div>
                            </div>
                            {/* Card body START */}
                            <div className="card-body position-relative pt-0">
                              {/* Tag */}
                              <Link
                                className="btn btn-xs btn-primary mt-n3"
                                to="/institute-details"
                              >
                                Conference
                              </Link>
                              <h6 className="mt-3">
                                {" "}
                                <Link to="/institute-details">
                                  {" "}
                                  Illenium: fallen embers tour{" "}
                                </Link>{" "}
                              </h6>
                              {/* Date time */}
                              <p className="mb-0 small">
                                {" "}
                                <i className="bi bi-calendar-check pe-1" /> Sun,
                                Sep 23, 2022 at 12:00 PM{" "}
                              </p>
                              <p className="small">
                                {" "}
                                <i className="bi bi-geo-alt pe-1" /> Mumbai{" "}
                              </p>
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center mb-0">
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="06.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="07.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="08.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="09.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +65
                                    </span>
                                  </div>
                                </li>
                                <li className="ms-3">
                                  <small> are attending</small>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                              {/* Button */}
                              <div className="d-flex mt-3 justify-content-between">
                                {/* Interested button */}
                                <div className="w-100">
                                  <input
                                    type="checkbox"
                                    className="btn-check d-block"
                                    id="Interested3"
                                  />
                                  <label
                                    className="btn btn-sm btn-outline-success d-block"
                                    htmlFor="Interested3"
                                  >
                                    <i className="fa-solid fa-thumbs-up me-1" />{" "}
                                    Interested
                                  </label>
                                </div>
                                <div className="dropdown ms-3">
                                  <Link
                                    to="#"
                                    className="btn btn-sm btn-primary-soft"
                                    id="eventActionShare3"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bi bi-share-fill" />
                                  </Link>
                                  {/* Dropdown menu */}
                                  <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="eventActionShare3"
                                  >
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-envelope fa-fw pe-1" />{" "}
                                        Send via Direct Message
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-bookmark-check fa-fw pe-1" />{" "}
                                        Share to News Feed{" "}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-people fa-fw pe-1" />{" "}
                                        Share to a group
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-share fa-fw pe-1" />{" "}
                                        Share post via …
                                      </Link>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-person fa-fw pe-1" />{" "}
                                        Share on a friend's profile
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Card body END */}
                          </div>
                          {/* Event item END */}
                        </div>
                        <div className="col-sm-6 col-xl-4">
                          {/* Event item START */}
                          <div className="card h-100">
                            <div className="position-relative">
                              <img
                                className="img-fluid rounded-top"
                                src={event4}
                                alt=""
                              />
                            </div>
                            {/* Card body START */}
                            <div className="card-body position-relative pt-0">
                              {/* Tag */}
                              <Link
                                className="btn btn-xs btn-primary mt-n3"
                                to="/institute-details"
                              >
                                Live show
                              </Link>
                              <h6 className="mt-3">
                                {" "}
                                <Link to="/institute-details">
                                  {" "}
                                  Comedy on the green{" "}
                                </Link>{" "}
                              </h6>
                              {/* Date time */}
                              <p className="mb-0 small">
                                {" "}
                                <i className="bi bi-calendar-check pe-1" /> Fri,
                                Oct 05, 2022 at 1:00 AM{" "}
                              </p>
                              <p className="small">
                                {" "}
                                <i className="bi bi-geo-alt pe-1" /> Miami{" "}
                              </p>
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center mb-0">
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="06.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="02.jpg"
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
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +56
                                    </span>
                                  </div>
                                </li>
                                <li className="ms-3">
                                  <small> are attending</small>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                              {/* Button */}
                              <div className="d-flex mt-3 justify-content-between">
                                {/* Interested button */}
                                <div className="w-100">
                                  <input
                                    type="checkbox"
                                    className="btn-check d-block"
                                    id="Interested4"
                                    defaultChecked=""
                                  />
                                  <label
                                    className="btn btn-sm btn-outline-success d-block"
                                    htmlFor="Interested4"
                                  >
                                    <i className="fa-solid fa-thumbs-up me-1" />{" "}
                                    Interested
                                  </label>
                                </div>
                                <div className="dropdown ms-3">
                                  <Link
                                    to="#"
                                    className="btn btn-sm btn-primary-soft"
                                    id="eventActionShare4"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bi bi-share-fill" />
                                  </Link>
                                  {/* Dropdown menu */}
                                  <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="eventActionShare4"
                                  >
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-envelope fa-fw pe-1" />{" "}
                                        Send via Direct Message
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-bookmark-check fa-fw pe-1" />{" "}
                                        Share to News Feed{" "}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-people fa-fw pe-1" />{" "}
                                        Share to a group
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-share fa-fw pe-1" />{" "}
                                        Share post via …
                                      </Link>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-person fa-fw pe-1" />{" "}
                                        Share on a friend's profile
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Card body END */}
                          </div>
                          {/* Event item END */}
                        </div>
                        <div className="col-sm-6 col-xl-4">
                          {/* Event item START */}
                          <div className="card h-100">
                            <div className="position-relative">
                              <img
                                className="img-fluid rounded-top"
                                src={event5}
                                alt=""
                              />
                              <div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
                                Beach
                              </div>
                            </div>
                            {/* Card body START */}
                            <div className="card-body position-relative pt-0">
                              {/* Tag */}
                              <Link
                                className="btn btn-xs btn-primary mt-n3"
                                to="/institute-details"
                              >
                                Meeting
                              </Link>
                              <h6 className="mt-3">
                                {" "}
                                <Link to="/institute-details">
                                  {" "}
                                  Beach event{" "}
                                </Link>{" "}
                              </h6>
                              {/* Date time */}
                              <p className="mb-0 small">
                                {" "}
                                <i className="bi bi-calendar-check pe-1" /> Wen,
                                Dec 16, 2022 at 5:00 AM{" "}
                              </p>
                              <p className="small">
                                {" "}
                                <i className="bi bi-geo-alt pe-1" /> London{" "}
                              </p>
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center mb-0">
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
                                <li className="avatar avatar-xs">
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +36
                                    </span>
                                  </div>
                                </li>
                                <li className="ms-3">
                                  <small> are attending</small>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                              {/* Button */}
                              <div className="d-flex mt-3 justify-content-between">
                                {/* Interested button */}
                                <div className="w-100">
                                  <input
                                    type="checkbox"
                                    className="btn-check d-block"
                                    id="Interested5"
                                  />
                                  <label
                                    className="btn btn-sm btn-outline-success d-block"
                                    htmlFor="Interested5"
                                  >
                                    <i className="fa-solid fa-thumbs-up me-1" />{" "}
                                    Interested
                                  </label>
                                </div>
                                <div className="dropdown ms-3">
                                  <Link
                                    to="#"
                                    className="btn btn-sm btn-primary-soft"
                                    id="eventActionShare5"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bi bi-share-fill" />
                                  </Link>
                                  {/* Dropdown menu */}
                                  <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="eventActionShare5"
                                  >
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-envelope fa-fw pe-1" />{" "}
                                        Send via Direct Message
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-bookmark-check fa-fw pe-1" />{" "}
                                        Share to News Feed{" "}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-people fa-fw pe-1" />{" "}
                                        Share to a group
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-share fa-fw pe-1" />{" "}
                                        Share post via …
                                      </Link>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-person fa-fw pe-1" />{" "}
                                        Share on a friend's profile
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Card body END */}
                          </div>
                          {/* Event item END */}
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab-2">
                      <div className="row g-4">
                        <div className="col-sm-6 col-xl-4">
                          {/* Event item START */}
                          <div className="card h-100">
                            <div className="position-relative">
                              <img
                                className="img-fluid rounded-top"
                                src={event4}
                                alt=""
                              />
                            </div>
                            {/* Card body START */}
                            <div className="card-body position-relative pt-0">
                              {/* Tag */}
                              <Link
                                className="btn btn-xs btn-primary mt-n3"
                                to="/institute-details"
                              >
                                Live show
                              </Link>
                              <h6 className="mt-3">
                                {" "}
                                <Link to="/institute-details">
                                  {" "}
                                  America 50th anniversary{" "}
                                </Link>{" "}
                              </h6>
                              {/* Date time */}
                              <p className="mb-0 small">
                                {" "}
                                <i className="bi bi-calendar-check pe-1" /> Fri,
                                Oct 05, 2022 at 1:00 AM{" "}
                              </p>
                              <p className="small">
                                {" "}
                                <i className="bi bi-geo-alt pe-1" /> Miami{" "}
                              </p>
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center mb-0">
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="06.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="02.jpg"
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
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +20
                                    </span>
                                  </div>
                                </li>
                                <li className="ms-3">
                                  <small> are attending</small>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                              {/* Button */}
                              <div className="d-flex mt-3 justify-content-between">
                                {/* Interested button */}
                                <div className="w-100">
                                  <input
                                    type="checkbox"
                                    className="btn-check d-block"
                                    id="Interested6"
                                    defaultChecked=""
                                  />
                                  <label
                                    className="btn btn-sm btn-outline-success d-block"
                                    htmlFor="Interested6"
                                  >
                                    <i className="fa-solid fa-thumbs-up me-1" />{" "}
                                    Interested
                                  </label>
                                </div>
                                <div className="dropdown ms-3">
                                  <Link
                                    to="#"
                                    className="btn btn-sm btn-primary-soft"
                                    id="eventActionShare6"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bi bi-share-fill" />
                                  </Link>
                                  {/* Dropdown menu */}
                                  <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="eventActionShare6"
                                  >
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-envelope fa-fw pe-1" />{" "}
                                        Send via Direct Message
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-bookmark-check fa-fw pe-1" />{" "}
                                        Share to News Feed{" "}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-people fa-fw pe-1" />{" "}
                                        Share to a group
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-share fa-fw pe-1" />{" "}
                                        Share post via …
                                      </Link>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-person fa-fw pe-1" />{" "}
                                        Share on a friend's profile
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Card body END */}
                          </div>
                          {/* Event item END */}
                        </div>
                        <div className="col-sm-6 col-xl-4">
                          {/* Event item START */}
                          <div className="card h-100">
                            <div className="position-relative">
                              <img
                                className="img-fluid rounded-top"
                                src={event5}
                                alt=""
                              />
                              <div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
                                Beach
                              </div>
                            </div>
                            {/* Card body START */}
                            <div className="card-body position-relative pt-0">
                              {/* Tag */}
                              <Link
                                className="btn btn-xs btn-primary mt-n3"
                                to="/institute-details"
                              >
                                Meeting
                              </Link>
                              <h6 className="mt-3">
                                {" "}
                                <Link to="/institute-details">
                                  {" "}
                                  Back to abnormal{" "}
                                </Link>{" "}
                              </h6>
                              {/* Date time */}
                              <p className="mb-0 small">
                                {" "}
                                <i className="bi bi-calendar-check pe-1" /> Wen,
                                Dec 16, 2022 at 5:00 AM{" "}
                              </p>
                              <p className="small">
                                {" "}
                                <i className="bi bi-geo-alt pe-1" /> London{" "}
                              </p>
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center mb-0">
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
                                <li className="avatar avatar-xs">
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +45
                                    </span>
                                  </div>
                                </li>
                                <li className="ms-3">
                                  <small> are attending</small>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                              {/* Button */}
                              <div className="d-flex mt-3 justify-content-between">
                                {/* Interested button */}
                                <div className="w-100">
                                  <input
                                    type="checkbox"
                                    className="btn-check d-block"
                                    id="Interested7"
                                  />
                                  <label
                                    className="btn btn-sm btn-outline-success d-block"
                                    htmlFor="Interested7"
                                  >
                                    <i className="fa-solid fa-thumbs-up me-1" />{" "}
                                    Interested
                                  </label>
                                </div>
                                <div className="dropdown ms-3">
                                  <Link
                                    to="#"
                                    className="btn btn-sm btn-primary-soft"
                                    id="eventActionShare7"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bi bi-share-fill" />
                                  </Link>
                                  {/* Dropdown menu */}
                                  <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="eventActionShare7"
                                  >
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-envelope fa-fw pe-1" />{" "}
                                        Send via Direct Message
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-bookmark-check fa-fw pe-1" />{" "}
                                        Share to News Feed{" "}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-people fa-fw pe-1" />{" "}
                                        Share to a group
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-share fa-fw pe-1" />{" "}
                                        Share post via …
                                      </Link>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        {" "}
                                        <i className="bi bi-person fa-fw pe-1" />{" "}
                                        Share on a friend's profile
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Card body END */}
                          </div>
                          {/* Event item END */}
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab-3">
  <div className="row g-4">
    <div className="col-sm-6 col-xl-4">
      {/* Event item START */}
      <div className="card h-100">
        <div className="position-relative">
          <img
            className="img-fluid rounded-top"
            src={event3}
            alt=""
          />
          <div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
            Beach
          </div>
        </div>
        {/* Card body START */}
        <div className="card-body position-relative pt-0">
          {/* Tag */}
          <Link className="btn btn-xs btn-primary mt-n3" to="/institute-details">
            Meeting
          </Link>
          <h6 className="mt-3">
            {" "}
            <Link to="/institute-details"> Old dominion </Link>{" "}
          </h6>
          {/* Date time */}
          <p className="mb-0 small">
            {" "}
            <i className="bi bi-calendar-check pe-1" /> Wen, Dec 16, 2022 at
            5:00 AM{" "}
          </p>
          <p className="small">
            {" "}
            <i className="bi bi-geo-alt pe-1" /> London{" "}
          </p>
          {/* Avatar group START */}
          <ul className="avatar-group list-unstyled align-items-center mb-0">
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
            <li className="avatar avatar-xs">
              <div className="avatar-img rounded-circle bg-primary">
                <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                  +85
                </span>
              </div>
            </li>
            <li className="ms-3">
              <small> are attending</small>
            </li>
          </ul>
          {/* Avatar group END */}
          {/* Button */}
          <div className="d-flex mt-3 justify-content-between">
            {/* Interested button */}
            <div className="w-100">
              <input
                type="checkbox"
                className="btn-check d-block"
                id="Interested8"
              />
              <label
                className="btn btn-sm btn-outline-success d-block"
                htmlFor="Interested8"
              >
                <i className="fa-solid fa-thumbs-up me-1" /> Interested
              </label>
            </div>
            <div className="dropdown ms-3">
              <Link
                to="#"
                className="btn btn-sm btn-primary-soft"
                id="eventActionShare8"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-share-fill" />
              </Link>
              {/* Dropdown menu */}
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="eventActionShare8"
              >
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-envelope fa-fw pe-1" /> Send via Direct
                    Message
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-bookmark-check fa-fw pe-1" /> Share to
                    News Feed{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-people fa-fw pe-1" /> Share to a group
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-share fa-fw pe-1" /> Share post via …
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-person fa-fw pe-1" /> Share on a
                    friend's profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Card body END */}
      </div>
      {/* Event item END */}
    </div>
  </div>
</div>
<div className="tab-pane fade" id="tab-4">
  <div className="row g-4">
    <div className="col-sm-6 col-xl-4">
      {/* Event item START */}
      <div className="card h-100">
        <div className="position-relative">
          <img
            className="img-fluid rounded-top"
            src={event1}
            alt=""
          />
          <div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
            Online
          </div>
        </div>
        {/* Card body START */}
        <div className="card-body position-relative pt-0">
          {/* Tag */}
          <Link className="btn btn-xs btn-primary mt-n3" to="/institute-details">
            Spa training{" "}
          </Link>
          <h6 className="mt-3">
            {" "}
            <Link to="/institute-details"> Beach event </Link>{" "}
          </h6>
          {/* Date time */}
          <p className="mb-0 small">
            {" "}
            <i className="bi bi-calendar-check pe-1" /> Mon, Sep 25, 2020 at
            9:30 AM{" "}
          </p>
          <p className="small">
            {" "}
            <i className="bi bi-geo-alt pe-1" /> San francisco{" "}
          </p>
          {/* Avatar group START */}
          <ul className="avatar-group list-unstyled align-items-center mb-0">
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
              <div className="avatar-img rounded-circle bg-primary">
                <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                  +46
                </span>
              </div>
            </li>
            <li className="ms-3">
              <small> are attending</small>
            </li>
          </ul>
          {/* Avatar group END */}
          {/* Button */}
          <div className="d-flex mt-3 justify-content-between">
            {/* Interested button */}
            <div className="w-100">
              <input
                type="checkbox"
                className="btn-check d-block"
                id="Interested9"
                defaultChecked=""
              />
              <label
                className="btn btn-sm btn-outline-success d-block"
                htmlFor="Interested9"
              >
                <i className="fa-solid fa-thumbs-up me-1" /> Interested
              </label>
            </div>
            <div className="dropdown ms-3">
              <Link
                to="#"
                className="btn btn-sm btn-primary-soft"
                id="eventActionShare9"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-share-fill" />
              </Link>
              {/* Dropdown menu */}
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="eventActionShare9"
              >
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-envelope fa-fw pe-1" /> Send via Direct
                    Message
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-bookmark-check fa-fw pe-1" /> Share to
                    News Feed{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-people fa-fw pe-1" /> Share to a group
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-share fa-fw pe-1" /> Share post via …
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-person fa-fw pe-1" /> Share on a
                    friend's profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Card body END */}
      </div>
      {/* Event item END */}
    </div>
    <div className="col-sm-6 col-xl-4">
      {/* Event item START */}
      <div className="card h-100">
        <div className="position-relative">
          <img
            className="img-fluid rounded-top"
            src={event4}
            alt=""
          />
        </div>
        {/* Card body START */}
        <div className="card-body position-relative pt-0">
          {/* Tag */}
          <Link className="btn btn-xs btn-primary mt-n3" to="/institute-details">
            Live show
          </Link>
          <h6 className="mt-3">
            {" "}
            <Link to="/institute-details"> Lewis black tickets </Link>{" "}
          </h6>
          {/* Date time */}
          <p className="mb-0 small">
            {" "}
            <i className="bi bi-calendar-check pe-1" /> Fri, Oct 05, 2022 at
            1:00 AM{" "}
          </p>
          <p className="small">
            {" "}
            <i className="bi bi-geo-alt pe-1" /> Miami{" "}
          </p>
          {/* Avatar group START */}
          <ul className="avatar-group list-unstyled align-items-center mb-0">
            <li className="avatar avatar-xs">
              <img
                className="avatar-img rounded-circle"
                src="06.jpg"
                alt="avatar"
              />
            </li>
            <li className="avatar avatar-xs">
              <img
                className="avatar-img rounded-circle"
                src="02.jpg"
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
              <div className="avatar-img rounded-circle bg-primary">
                <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                  +75
                </span>
              </div>
            </li>
            <li className="ms-3">
              <small> are attending</small>
            </li>
          </ul>
          {/* Avatar group END */}
          {/* Button */}
          <div className="d-flex mt-3 justify-content-between">
            {/* Interested button */}
            <div className="w-100">
              <input
                type="checkbox"
                className="btn-check d-block"
                id="Interested10"
              />
              <label
                className="btn btn-sm btn-outline-success d-block"
                htmlFor="Interested10"
              >
                <i className="fa-solid fa-thumbs-up me-1" /> Interested
              </label>
            </div>
            <div className="dropdown ms-3">
              <Link
                to="#"
                className="btn btn-sm btn-primary-soft"
                id="eventActionShare10"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-share-fill" />
              </Link>
              {/* Dropdown menu */}
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="eventActionShare10"
              >
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-envelope fa-fw pe-1" /> Send via Direct
                    Message
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-bookmark-check fa-fw pe-1" /> Share to
                    News Feed{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-people fa-fw pe-1" /> Share to a group
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-share fa-fw pe-1" /> Share post via …
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-person fa-fw pe-1" /> Share on a
                    friend's profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Card body END */}
      </div>
      {/* Event item END */}
    </div>
  </div>
</div>
<div className="tab-pane fade text-center" id="tab-5">
                  {/* <!-- Add events --> */}
                  <div className="my-sm-5 py-sm-5">
                    <i className="display-1 text-body-secondary bi bi-calendar2-event"> </i>
                    <h4 className="mt-2 mb-3 text-body">No events found</h4>
                    <button className="btn btn-primary-soft btn-sm" data-bs-toggle="modal" data-bs-target="#modalCreateEvents"> Click here to add </button>
                  </div>
                </div>
                <div className="tab-pane fade text-center" id="tab-6">
                  <div className="my-sm-5 py-sm-5">
                    <i className="display-1 text-body-secondary bi bi-calendar2-event"> </i>
                    <h4 className="mt-2 mb-3 text-body">No events found</h4>
                    <button className="btn btn-primary-soft btn-sm" data-bs-toggle="modal" data-bs-target="#modalCreateEvents"> Click here to add </button>
                  </div>
                </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
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
                              src={"01.jpg"}
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src={"02.jpg"}
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src={"03.jpg"}
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src={"04.jpg"}
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src={"05.jpg"}
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src={"06.jpg"}
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src={"07.jpg"}
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
  )
}

export default Institute