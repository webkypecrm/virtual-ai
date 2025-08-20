import React, { Fragment } from 'react'
import avtar7 from "../assets/images/avatar/07.jpg";
import homeSvg from "../assets/images/icon/home-outline-filled.svg";
import personSvg from "../assets/images/icon/person-outline-filled.svg";
import earthSvg from "../assets/images/icon/earth-outline-filled.svg";
import calenderSvg from "../assets/images/icon/calendar-outline-filled.svg";
import chatSvg from "../assets/images/icon/chat-outline-filled.svg";
import notificationSvg from "../assets/images/icon/notification-outlined-filled.svg";
import cogoutlineSvg from "../assets/images/icon/cog-outline-filled.svg";
import { Link } from 'react-router-dom';

const LeftSideBar2 = () => {
  return (
    <Fragment>
         <div className="col-lg-3">
              {/* Advanced filter responsive toggler START */}
              <div className="d-flex align-items-center d-lg-none">
                <button
                  className="border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSideNavbar"
                  aria-controls="offcanvasSideNavbar"
                >
                  <span className="btn btn-primary">
                    <i className="fa-solid fa-sliders-h" />
                  </span>
                  <span className="h6 mb-0 fw-bold d-lg-none ms-2">
                    {" "}
                    My profile
                  </span>
                </button>
              </div>
              {/* Advanced filter responsive toggler END */}
              {/* Navbar START*/}
              <nav className="navbar navbar-expand-lg mx-0">
                <div
                  className="offcanvas offcanvas-start"
                  tabIndex={-1}
                  id="offcanvasSideNavbar"
                >
                  {/* Offcanvas header */}
                  <div className="offcanvas-header">
                    <button
                      type="button"
                      className="btn-close text-reset ms-auto"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  {/* Offcanvas body */}
                  <div className="offcanvas-body d-block px-2 px-lg-0">
                    {/* Card START */}
                    <div className="card overflow-hidden">
                      {/* Cover image */}
                      <div className="h-50px main-sidenav-background-div" />
                      {/* Card body START */}
                      <div className="card-body pt-0">
                        <div className="text-center">
                          {/* Avatar */}
                          <div className="avatar avatar-lg mt-n5 mb-3">
                            <Link to="#!">
                              <img
                                className="avatar-img rounded border border-white border-3"
                                src={avtar7}
                                alt=""
                              />
                            </Link>
                          </div>
                          {/* Info */}
                          <h5 className="mb-0">
                            {" "}
                            <Link to="#!">Sam Lanson </Link>{" "}
                          </h5>
                          <small>Web Developer at Stackbros</small>
                          <p className="mt-3">
                            I'd love to change the world, but they won’t give me
                            the source code.
                          </p>
                          {/* User stat START */}
                          <div className="hstack gap-2 gap-xl-3 justify-content-center">
                            {/* User stat item */}
                            <div>
                              <h6 className="mb-0">256</h6>
                              <small>Post</small>
                            </div>
                            {/* Divider */}
                            <div className="vr" />
                            {/* User stat item */}
                            <div>
                              <h6 className="mb-0">2.5K</h6>
                              <small>Followers</small>
                            </div>
                            {/* Divider */}
                            <div className="vr" />
                            {/* User stat item */}
                            <div>
                              <h6 className="mb-0">365</h6>
                              <small>Following</small>
                            </div>
                          </div>
                          {/* User stat END */}
                        </div>
                        {/* Divider */}
                        <hr />
                        {/* Side Nav START */}
                        <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                          <li className="nav-item">
                            <Link className="nav-link" to="/my-profile">
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={homeSvg}
                                alt=""
                              />
                              <span>Feed </span>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              to="/my-profile-connections"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={personSvg}
                                alt=""
                              />
                              <span>Connections </span>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/blog">
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={earthSvg}
                                alt=""
                              />
                              <span>Latest News </span>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/events">
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={calenderSvg}
                                alt=""
                              />
                              <span>Events </span>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/groups">
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={chatSvg}
                                alt=""
                              />
                              <span>Groups </span>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/notifications">
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={notificationSvg}
                                alt=""
                              />
                              <span>Notifications </span>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/account">
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={cogoutlineSvg}
                                alt=""
                              />
                              <span>Settings </span>
                            </Link>
                          </li>
                        </ul>
                        {/* Side Nav END */}
                      </div>
                      {/* Card body END */}
                      {/* Card footer */}
                      <div className="card-footer text-center py-2">
                        <Link
                          className="btn btn-link btn-sm"
                          to="my-profile.html"
                        >
                          View Profile{" "}
                        </Link>
                      </div>
                    </div>
                    {/* Card END */}
                    {/* Helper link START */}
                    <ul className="nav small mt-4 justify-content-center lh-1">
                      <li className="nav-item">
                        <Link className="nav-link" to="my-profile-about.html">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="settings.html">
                          Settings
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" target="_blank" to="#">
                          Support{" "}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="help.html">
                          Help
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="privacy-and-terms.html">
                          Privacy &amp; terms
                        </Link>
                      </li>
                    </ul>
                    {/* Helper link END */}
                    {/* Copyright */}
                    <p className="small text-center mt-1">
                      ©2024{" "}
                      <Link
                        className="text-reset"
                        target="_blank"
                        to="https://stackbros.in/"
                      >
                        {" "}
                        Stackbros{" "}
                      </Link>
                    </p>
                  </div>
                </div>
              </nav>
              {/* Navbar END*/}
            </div>
    </Fragment>
  )
}

export default LeftSideBar2