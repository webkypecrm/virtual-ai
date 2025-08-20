import React, { Fragment, useEffect } from "react";
import Navbar2 from "../../ReuseComp/Navbar2";
import { Link } from "react-router-dom";
import logo8 from "../../assets/images/logo/08.svg";
import logo9 from "../../assets/images/logo/09.svg";
import logo10 from "../../assets/images/logo/10.svg";
import albumb1 from "../../assets/images/albums/01.jpg";
import albumb2 from "../../assets/images/albums/02.jpg";
import albumb3 from "../../assets/images/albums/03.jpg";
import albumb4 from "../../assets/images/albums/04.jpg";
import albumb5 from "../../assets/images/albums/05.jpg";
import GLightbox from "glightbox";

const MyProfileConnections = () => {
  // big img show
  useEffect(() => {
    GLightbox({
      selector: '[data-gallery="image-popup"]',
    });
  }, []);
  return (
    <Fragment>
      <Navbar2 />
      <main>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 vstack gap-4">
              {/* Card START */}
              <div className="card">
                <div className="h-200px rounded-top my-profile-bg-img" />
                {/* Card body START */}
                <div className="card-body py-0">
                  <div className="d-sm-flex align-items-start text-center text-sm-start">
                    <div>
                      {/* Avatar */}
                      <div className="avatar avatar-xxl mt-n5 mb-3">
                        <img
                          className="avatar-img rounded-circle border border-white border-3"
                          src="07.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ms-sm-4 mt-sm-3">
                      {/* Info */}
                      <h1 className="mb-0 h5">
                        Sam Lanson{" "}
                        <i className="bi bi-patch-check-fill text-success small" />
                      </h1>
                      <p>250 connections</p>
                    </div>
                    {/* Button */}
                    <div className="d-flex mt-3 justify-content-center ms-sm-auto">
                      <button
                        className="btn btn-danger-soft me-2"
                        type="button"
                      >
                        {" "}
                        <i className="bi bi-pencil-fill pe-1" /> Edit profile{" "}
                      </button>
                      <div className="dropdown">
                        {/* Card share action menu */}
                        <button
                          className="icon-md btn btn-light"
                          type="button"
                          id="profileAction2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots" />
                        </button>
                        {/* Card share action dropdown menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="profileAction2"
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
                  {/* List profile */}
                  <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
                    <li className="list-inline-item">
                      <i className="bi bi-briefcase me-1" /> Lead Developer
                    </li>{" "}
                    <li className="list-inline-item">
                      {" "}
                      <i className="bi bi-geo-alt me-1" /> New Hampshire
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
                      <Link className="nav-link" to="my-profile.html">
                        {" "}
                        Posts{" "}
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link className="nav-link" to="my-profile-about.html">
                        {" "}
                        About{" "}
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        className="nav-link active"
                        to="my-profile-connections.html"
                      >
                        {" "}
                        Connections{" "}
                        <span className="badge bg-success bg-opacity-10 text-success small">
                          {" "}
                          230
                        </span>{" "}
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link className="nav-link" to="my-profile-media.html">
                        {" "}
                        Media
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link className="nav-link" to="my-profile-videos.html">
                        {" "}
                        Videos
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link className="nav-link" to="my-profile-events.html">
                        {" "}
                        Events
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link className="nav-link" to="my-profile-activity.html">
                        {" "}
                        Activity
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              {/* Card END */}
              {/* Card Connections START */}
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
                          src="01.jpg"
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
                            src="01.jpg"
                            alt="avatar"
                          />
                        </li>
                        <li className="avatar avatar-xxs">
                          <img
                            className="avatar-img rounded-circle"
                            src="02.jpg"
                            alt="avatar"
                          />
                        </li>
                        <li className="avatar avatar-xxs">
                          <img
                            className="avatar-img rounded-circle"
                            src="03.jpg"
                            alt="avatar"
                          />
                        </li>
                        <li className="avatar avatar-xxs">
                          <img
                            className="avatar-img rounded-circle"
                            src="04.jpg"
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
                          Carolyn Ortiz, Frances Guerrero, and 20 other shared
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
                          src="02.jpg"
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
                            src="04.jpg"
                            alt="avatar"
                          />
                        </li>
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
                          src="03.jpg"
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
                          src="04.jpg"
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
                          src="05.jpg"
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
                      <span className="load-text"> Load more connections </span>
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
                </div>
                {/* Card body END */}
              </div>
              {/* Card Connections END */}
            </div>
            <div className="col-lg-4">
              <div className="row g-4">
                <div className="col-sm-6 col-lg-12">
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

                <div className="col-sm-6 col-lg-12">
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header d-flex justify-content-between border-0">
                      <h5 className="card-title">Experience</h5>
                      <Link className="btn btn-primary-soft btn-sm" to="#!">
                        {" "}
                        <i className="fa-solid fa-plus" />{" "}
                      </Link>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className="card-body position-relative pt-0">
                      {/* Experience item START */}
                      <div className="d-flex">
                        {/* Avatar */}
                        <div className="avatar me-3">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={logo8}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Info */}
                        <div>
                          <h6 className="card-title mb-0">
                            <Link to="#!"> Apple Computer, Inc. </Link>
                          </h6>
                          <p className="small">
                            May 2015 – Present Employment Duration 8 mos{" "}
                            <Link
                              className="btn btn-primary-soft btn-xs ms-2"
                              to="#!"
                            >
                              Edit{" "}
                            </Link>
                          </p>
                        </div>
                      </div>
                      {/* Experience item END */}
                      {/* Experience item START */}
                      <div className="d-flex">
                        {/* Avatar */}
                        <div className="avatar me-3">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={logo9}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Info */}
                        <div>
                          <h6 className="card-title mb-0">
                            <Link to="#!"> Microsoft Corporation </Link>
                          </h6>
                          <p className="small">
                            May 2017 – Present Employment Duration 1 yrs 5 mos{" "}
                            <Link
                              className="btn btn-primary-soft btn-xs ms-2"
                              to="#!"
                            >
                              Edit{" "}
                            </Link>
                          </p>
                        </div>
                      </div>
                      {/* Experience item END */}
                      {/* Experience item START */}
                      <div className="d-flex">
                        {/* Avatar */}
                        <div className="avatar me-3">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={logo10}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Info */}
                        <div>
                          <h6 className="card-title mb-0">
                            <Link to="#!"> Tata Consultancy Services. </Link>
                          </h6>
                          <p className="small mb-0">
                            May 2022 – Present Employment Duration 6 yrs 10 mos{" "}
                            <Link
                              className="btn btn-primary-soft btn-xs ms-2"
                              to="#!"
                            >
                              Edit{" "}
                            </Link>
                          </p>
                        </div>
                      </div>
                      {/* Experience item END */}
                    </div>
                    {/* Card body END */}
                  </div>
                </div>

                <div className="col-sm-6 col-lg-12">
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header d-sm-flex justify-content-between border-0">
                      <h5 className="card-title">Photos</h5>
                      <Link className="btn btn-primary-soft btn-sm" to="#!">
                        {" "}
                        See all photo
                      </Link>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className="card-body position-relative pt-0">
                      <div className="row g-2">
                        {/* Photos item */}
                        <div className="col-6">
                          <Link
                            to={albumb1}
                            data-gallery="image-popup"
                            data-glightbox=""
                          >
                            <img
                              className="rounded img-fluid"
                              src={albumb1}
                              alt=""
                            />
                          </Link>
                        </div>
                        {/* Photos item */}
                        <div className="col-6">
                          <Link
                            to={albumb2}
                            data-gallery="image-popup"
                            data-glightbox=""
                          >
                            <img
                              className="rounded img-fluid"
                              src={albumb2}
                              alt=""
                            />
                          </Link>
                        </div>
                        {/* Photos item */}
                        <div className="col-4">
                          <Link
                            to={albumb3}
                            data-gallery="image-popup"
                            data-glightbox=""
                          >
                            <img
                              className="rounded img-fluid"
                              src={albumb3}
                              alt=""
                            />
                          </Link>
                        </div>
                        {/* Photos item */}
                        <div className="col-4">
                          <Link
                            to={albumb4}
                            data-gallery="image-popup"
                            data-glightbox=""
                          >
                            <img
                              className="rounded img-fluid"
                              src={albumb4}
                              alt=""
                            />
                          </Link>
                        </div>
                        {/* Photos item */}
                        <div className="col-4">
                          <Link
                            to={albumb5}
                            data-gallery="image-popup"
                            data-glightbox=""
                          >
                            <img
                              className="rounded img-fluid"
                              src={albumb5}
                              alt=""
                            />
                          </Link>
                          {/* glightbox Albums left bar END  */}
                        </div>
                      </div>
                    </div>
                    {/* Card body END */}
                  </div>
                </div>

                <div className="col-sm-6 col-lg-12">
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
                    <div className="card-body position-relative pt-0">
                      <div className="row g-3">
                        <div className="col-6">
                          {/* Friends item START */}
                          <div className="card shadow-none text-center h-100">
                            {/* Card body */}
                            <div className="card-body p-2 pb-0">
                              <div className="avatar avatar-story avatar-xl">
                                <Link to="#!">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="02.jpg"
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <h6 className="card-title mb-1 mt-3">
                                {" "}
                                <Link to="#!"> Amanda Reed </Link>
                              </h6>
                              <p className="mb-0 small lh-sm">
                                16 mutual connections
                              </p>
                            </div>
                            {/* Card footer */}
                            <div className="card-footer p-2 border-0">
                              <button
                                className="btn btn-sm btn-primary"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Send message"
                              >
                                {" "}
                                <i className="bi bi-chat-left-text" />{" "}
                              </button>{" "}
                              <button
                                className="btn btn-sm btn-danger"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove friend"
                              >
                                {" "}
                                <i className="bi bi-person-x" />{" "}
                              </button>
                            </div>
                          </div>
                          {/* Friends item END */}
                        </div>
                        <div className="col-6">
                          {/* Friends item START */}
                          <div className="card shadow-none text-center h-100">
                            {/* Card body */}
                            <div className="card-body p-2 pb-0">
                              <div className="avatar avatar-xl">
                                <Link to="#!">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="03.jpg"
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <h6 className="card-title mb-1 mt-3">
                                {" "}
                                <Link to="#!"> Samuel Bishop </Link>
                              </h6>
                              <p className="mb-0 small lh-sm">
                                22 mutual connections
                              </p>
                            </div>
                            {/* Card footer */}
                            <div className="card-footer p-2 border-0">
                              <button
                                className="btn btn-sm btn-primary"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Send message"
                              >
                                {" "}
                                <i className="bi bi-chat-left-text" />{" "}
                              </button>{" "}
                              <button
                                className="btn btn-sm btn-danger"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove friend"
                              >
                                {" "}
                                <i className="bi bi-person-x" />{" "}
                              </button>
                            </div>
                          </div>
                          {/* Friends item END */}
                        </div>
                        <div className="col-6">
                          {/* Friends item START */}
                          <div className="card shadow-none text-center h-100">
                            {/* Card body */}
                            <div className="card-body p-2 pb-0">
                              <div className="avatar avatar-xl">
                                <Link to="#!">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="04.jpg"
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <h6 className="card-title mb-1 mt-3">
                                {" "}
                                <Link to="#"> Bryan Knight </Link>
                              </h6>
                              <p className="mb-0 small lh-sm">
                                1 mutual connection
                              </p>
                            </div>
                            {/* Card footer */}
                            <div className="card-footer p-2 border-0">
                              <button
                                className="btn btn-sm btn-primary"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Send message"
                              >
                                {" "}
                                <i className="bi bi-chat-left-text" />{" "}
                              </button>{" "}
                              <button
                                className="btn btn-sm btn-danger"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove friend"
                              >
                                {" "}
                                <i className="bi bi-person-x" />{" "}
                              </button>
                            </div>
                          </div>
                          {/* Friends item END */}
                        </div>
                        <div className="col-6">
                          {/* Friends item START */}
                          <div className="card shadow-none text-center h-100">
                            {/* Card body */}
                            <div className="card-body p-2 pb-0">
                              <div className="avatar avatar-xl">
                                <Link to="#!">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="05.jpg"
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <h6 className="card-title mb-1 mt-3">
                                {" "}
                                <Link to="#!"> Amanda Reed </Link>
                              </h6>
                              <p className="mb-0 small lh-sm">
                                15 mutual connections
                              </p>
                            </div>
                            {/* Card footer */}
                            <div className="card-footer p-2 border-0">
                              <button
                                className="btn btn-sm btn-primary"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Send message"
                              >
                                {" "}
                                <i className="bi bi-chat-left-text" />{" "}
                              </button>{" "}
                              <button
                                className="btn btn-sm btn-danger"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove friend"
                              >
                                {" "}
                                <i className="bi bi-person-x" />{" "}
                              </button>
                            </div>
                          </div>
                          {/* Friends item END */}
                        </div>
                      </div>
                    </div>
                    {/* Card body END */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default MyProfileConnections;
