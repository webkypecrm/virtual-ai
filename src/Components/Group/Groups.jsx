import React, { Fragment, useEffect, useRef, useState } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import LeftSideBar2 from "../../ReuseComp/LeftSideBar2";
import logo8 from "../../assets/images/logo/08.svg";
import logo2 from "../../assets/images/logo/02.svg";
import logo9 from "../../assets/images/logo/09.svg";
import logo10 from "../../assets/images/logo/10.svg";
import logo12 from "../../assets/images/logo/12.svg";
import logo1 from "../../assets/images/logo/01.svg";
import logo3 from "../../assets/images/logo/03.svg";
import logo5 from "../../assets/images/logo/05.svg";
import bg1 from "../../assets/images/bg/01.jpg";
import bg2 from "../../assets/images/bg/02.jpg";
import bg3 from "../../assets/images/bg/03.jpg";
import bg4 from "../../assets/images/bg/04.jpg";
import bg5 from "../../assets/images/bg/05.jpg";
import Choices from 'choices.js';
import { Link } from "react-router-dom";

const Groups = () => {
    const [avatarPreview, setAvatarPreview] = useState('placeholder.jpg');

    // Function to handle file selection and update preview
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setAvatarPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
      event.target.value = '';
    };
  
    // Function to reset avatar to the default image
    const resetAvatar = () => {
      setAvatarPreview('/assets/images/avatar/placeholder.jpg');
    };


  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container">
          <div className="row g-4">
            <LeftSideBar2 />
            <div className="col-md-8 col-lg-6 vstack gap-4">
              {/* Card START */}
              <div className="card">
                {/* Card header START */}
                <div className="card-header border-0 pb-0">
                  <div className="row g-2">
                    <div className="col-lg-2">
                      {/* Card title */}
                      <h1 className="h4 card-title mb-lg-0">Group</h1>
                    </div>
                    <div className="col-sm-6 col-lg-3 ms-lg-auto">
                      {/* Select Groups */}
                      <select
                        className="form-select js-choice choice-select-text-none"
                        data-search-enabled="false"
                        // ref={selectRef}
                      >
                        <option value="AB">Alphabetical</option>
                        <option value="NG">Newest group</option>
                        <option value="RA">Recently active</option>
                        <option value="SG">Suggested</option>
                      </select>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      {/* Button modal */}
                      <Link
                        className="btn btn-primary-soft ms-auto w-100"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#modalCreateGroup"
                      >
                        {" "}
                        <i className="fa-solid fa-plus pe-1" /> Create group
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Card header START */}
                {/* Card body START */}
                <div className="card-body">
                  {/* Tab nav line */}
                  <ul className="nav nav-tabs nav-bottom-line justify-content-center justify-content-md-start">
                    <li className="nav-item">
                      {" "}
                      <Link
                        className="nav-link active"
                        data-bs-toggle="tab"
                        to="#tab-1"
                      >
                        {" "}
                        Friends' groups{" "}
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        className="nav-link"
                        data-bs-toggle="tab"
                        to="#tab-2"
                      >
                        {" "}
                        Suggested for you{" "}
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        className="nav-link"
                        data-bs-toggle="tab"
                        to="#tab-3"
                      >
                        {" "}
                        Popular near you{" "}
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        className="nav-link"
                        data-bs-toggle="tab"
                        to="#tab-4"
                      >
                        {" "}
                        More suggestions{" "}
                      </Link>{" "}
                    </li>
                  </ul>
                  <div className="tab-content mb-0 pb-0">
                    {/* Friends groups tab START */}
                    <div className="tab-pane fade show active" id="tab-1">
                      <div className="row g-4">
                        <div className="col-sm-6 col-lg-4">
                          {/* Card START */}
                          <div className="card">
                            <div
                              className="h-80px rounded-top"
                              style={{
                                backgroundImage: `url(${bg1})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                              }}
                            />
                            {/* Card body START */}
                            <div className="card-body text-center pt-0">
                              {/* Avatar */}
                              <div className="avatar avatar-lg mt-n5 mb-3">
                                <Link to="/group-details">
                                  <img
                                    className="avatar-img rounded-circle border border-white border-3 bg-white"
                                    src={logo8}
                                    alt=""
                                  />
                                </Link>
                              </div>
                              {/* Info */}
                              <h5 className="mb-0">
                                {" "}
                                <Link to="/group-details">
                                  All in the Mind
                                </Link>{" "}
                              </h5>
                              <small>
                                {" "}
                                <i className="bi bi-lock pe-1" /> Private Group
                              </small>
                              {/* Group stat START */}
                              <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">32k</h6>
                                  <small>Members</small>
                                </div>
                                {/* Divider */}
                                <div className="vr" />
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">20</h6>
                                  <small>Post per day</small>
                                </div>
                              </div>
                              {/* Group stat END */}
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
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
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +22
                                    </span>
                                  </div>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                            </div>
                            {/* Card body END */}
                            {/* Card Footer START */}
                            <div className="card-footer text-center">
                              <Link
                                className="btn btn-success-soft btn-sm"
                                to="#!"
                              >
                                {" "}
                                Join group{" "}
                              </Link>
                            </div>
                            {/* Card Footer END */}
                          </div>
                          {/* Card END */}
                        </div>
                        <div className="col-sm-6 col-lg-4">
                          {/* Card START */}
                          <div className="card">
                            <div
                              className="h-80px rounded-top"
                              style={{
                                backgroundImage: `url(${bg2})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                              }}
                            />
                            {/* Card body START */}
                            <div className="card-body text-center pt-0">
                              {/* Avatar */}
                              <div className="avatar avatar-lg mt-n5 mb-3">
                                <Link to="/group-details">
                                  <img
                                    className="avatar-img rounded-circle border border-white border-3 bg-white"
                                    src={logo2}
                                    alt=""
                                  />
                                </Link>
                              </div>
                              {/* Info */}
                              <h5 className="mb-0">
                                <Link to="/group-details">Beauty queens</Link>
                              </h5>
                              <small>
                                {" "}
                                <i className="bi bi-globe pe-1" /> Public Group
                              </small>
                              {/* Group stat START */}
                              <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">23k</h6>
                                  <small>Members</small>
                                </div>
                                {/* Divider */}
                                <div className="vr" />
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">12</h6>
                                  <small>Post per day</small>
                                </div>
                              </div>
                              {/* Group stat END */}
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
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
                                    src="09.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +13
                                    </span>
                                  </div>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                            </div>
                            {/* Card body END */}
                            {/* Card Footer START */}
                            <div className="card-footer text-center">
                              <Link
                                className="btn btn-success-soft btn-sm"
                                to="#!"
                              >
                                {" "}
                                Join group{" "}
                              </Link>
                            </div>
                            {/* Card Footer END */}
                          </div>
                          {/* Card END */}
                        </div>
                        <div className="col-sm-6 col-lg-4">
                          {/* Card START */}
                          <div className="card">
                            <div
                              className="h-80px rounded-top"
                              style={{
                                backgroundImage: `url(${bg3})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                              }}
                            />
                            {/* Card body START */}
                            <div className="card-body text-center pt-0">
                              {/* Avatar */}
                              <div className="avatar avatar-lg mt-n5 mb-3">
                                <Link to="/group-details">
                                  <img
                                    className="avatar-img rounded-circle border border-white border-3 bg-white"
                                    src={logo9}
                                    alt=""
                                  />
                                </Link>
                              </div>
                              {/* Info */}
                              <h5 className="mb-0">
                                {" "}
                                <Link to="/group-details">
                                  Eternal triangle
                                </Link>
                              </h5>
                              <small>
                                {" "}
                                <i className="bi bi-globe pe-1" /> Public Group
                              </small>
                              {/* Group stat START */}
                              <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">45k</h6>
                                  <small>Members</small>
                                </div>
                                {/* Divider */}
                                <div className="vr" />
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">16</h6>
                                  <small>Post per day</small>
                                </div>
                              </div>
                              {/* Group stat END */}
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="11.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="10.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +12
                                    </span>
                                  </div>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                            </div>
                            {/* Card body END */}
                            {/* Card Footer START */}
                            <div className="card-footer text-center">
                              <Link
                                className="btn btn-danger-soft btn-sm"
                                to="#!"
                              >
                                {" "}
                                Leave group{" "}
                              </Link>
                            </div>
                            {/* Card Footer END */}
                          </div>
                          {/* Card END */}
                        </div>
                        <div className="col-sm-6 col-lg-4">
                          {/* Card START */}
                          <div className="card">
                            <div
                              className="h-80px rounded-top"
                              style={{
                                backgroundImage: `url(${bg4})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                              }}
                            />
                            {/* Card body START */}
                            <div className="card-body text-center pt-0">
                              {/* Avatar */}
                              <div className="avatar avatar-lg mt-n5 mb-3">
                                <Link to="/group-details">
                                  <img
                                    className="avatar-img rounded-circle border border-white border-3 bg-white"
                                    src={logo10}
                                    alt=""
                                  />
                                </Link>
                              </div>
                              {/* Info */}
                              <h5 className="mb-0">
                                {" "}
                                <Link to="/group-details">Mountain movers</Link>
                              </h5>
                              <small>
                                {" "}
                                <i className="bi bi-lock pe-1" /> Private Group
                              </small>
                              {/* Group stat START */}
                              <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">32k</h6>
                                  <small>Members</small>
                                </div>
                                {/* Divider */}
                                <div className="vr" />
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">05</h6>
                                  <small>Post per day</small>
                                </div>
                              </div>
                              {/* Group stat END */}
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="10.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="14.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="13.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="12.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="11.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +08
                                    </span>
                                  </div>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                            </div>
                            {/* Card body END */}
                            {/* Card Footer START */}
                            <div className="card-footer text-center">
                              <Link
                                className="btn btn-danger-soft btn-sm"
                                to="#!"
                              >
                                {" "}
                                Leave group{" "}
                              </Link>
                            </div>
                            {/* Card Footer END */}
                          </div>
                          {/* Card END */}
                        </div>
                        <div className="col-sm-6 col-lg-4">
                          {/* Card START */}
                          <div className="card">
                            <div
                              className="h-80px rounded-top"
                              style={{
                                backgroundImage: `url(${bg5})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                              }}
                            />
                            {/* Card body START */}
                            <div className="card-body text-center pt-0">
                              {/* Avatar */}
                              <div className="avatar avatar-lg mt-n5 mb-3">
                                <Link to="/group-details">
                                  <img
                                    className="avatar-img rounded-circle border border-white border-3 bg-white"
                                    src={logo12}
                                    alt=""
                                  />
                                </Link>
                              </div>
                              {/* Info */}
                              <h5 className="mb-0">
                                {" "}
                                <Link to="/group-details">Hard workers</Link>
                              </h5>
                              <small>
                                {" "}
                                <i className="bi bi-lock pe-1" /> Private Group
                              </small>
                              {/* Group stat START */}
                              <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">12k</h6>
                                  <small>Members</small>
                                </div>
                                {/* Divider */}
                                <div className="vr" />
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">05</h6>
                                  <small>Post per day</small>
                                </div>
                              </div>
                              {/* Group stat END */}
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
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
                                    src="04.jpg"
                                    alt="avatar"
                                  />
                                </li>
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
                                    src="06.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +23
                                    </span>
                                  </div>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                            </div>
                            {/* Card body END */}
                            {/* Card Footer START */}
                            <div className="card-footer text-center">
                              <Link
                                className="btn btn-success-soft btn-sm"
                                to="#!"
                              >
                                {" "}
                                Join group{" "}
                              </Link>
                            </div>
                            {/* Card Footer END */}
                          </div>
                          {/* Card END */}
                        </div>
                      </div>
                    </div>
                    {/* Friends' groups tab END */}
                    {/* Suggested for you START */}
                    <div className="tab-pane fade" id="tab-2">
                      <div className="row g-4">
                        <div className="col-sm-6 col-lg-4">
                          {/* Card START */}
                          <div className="card">
                            <div
                              className="h-80px rounded-top"
                              style={{
                                backgroundImage: `url(${bg1})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                              }}
                            />
                            {/* Card body START */}
                            <div className="card-body text-center pt-0">
                              {/* Avatar */}
                              <div className="avatar avatar-lg mt-n5 mb-3">
                                <Link to="/group-details">
                                  <img
                                    className="avatar-img rounded-circle border border-white border-3 bg-white"
                                    src={logo1}
                                    alt=""
                                  />
                                </Link>
                              </div>
                              {/* Info */}
                              <h5 className="mb-0">
                                <Link to="/group-details">Real humans</Link>
                              </h5>
                              <small>
                                {" "}
                                <i className="bi bi-globe pe-1" /> Public Group
                              </small>
                              {/* Group stat START */}
                              <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">23k</h6>
                                  <small>Members</small>
                                </div>
                                {/* Divider */}
                                <div className="vr" />
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">12</h6>
                                  <small>Post per day</small>
                                </div>
                              </div>
                              {/* Group stat END */}
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
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
                                    src="09.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +12
                                    </span>
                                  </div>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                            </div>
                            {/* Card body END */}
                            {/* Card Footer START */}
                            <div className="card-footer text-center">
                              <Link
                                className="btn btn-danger-soft btn-sm"
                                to="#!"
                              >
                                {" "}
                                Leave group{" "}
                              </Link>
                            </div>
                            {/* Card Footer END */}
                          </div>
                          {/* Card END */}
                        </div>
                        <div className="col-sm-6 col-lg-4">
                          {/* Card START */}
                          <div className="card">
                            <div
                              className="h-80px rounded-top"
                              style={{
                                backgroundImage: `url(${bg2})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                              }}
                            />
                            {/* Card body START */}
                            <div className="card-body text-center pt-0">
                              {/* Avatar */}
                              <div className="avatar avatar-lg mt-n5 mb-3">
                                <Link to="/group-details">
                                  <img
                                    className="avatar-img rounded-circle border border-white border-3 bg-white"
                                    src={logo3}
                                    alt=""
                                  />
                                </Link>
                              </div>
                              {/* Info */}
                              <h5 className="mb-0">
                                <Link to="/group-details">Strong signals</Link>
                              </h5>
                              <small>
                                {" "}
                                <i className="bi bi-lock pe-1" /> Private Group
                              </small>
                              {/* Group stat START */}
                              <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">45k</h6>
                                  <small>Members</small>
                                </div>
                                {/* Divider */}
                                <div className="vr" />
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">16</h6>
                                  <small>Post per day</small>
                                </div>
                              </div>
                              {/* Group stat END */}
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="11.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="10.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +05
                                    </span>
                                  </div>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                            </div>
                            {/* Card body END */}
                            {/* Card Footer START */}
                            <div className="card-footer text-center">
                              <Link
                                className="btn btn-success-soft btn-sm"
                                to="#!"
                              >
                                {" "}
                                Join group{" "}
                              </Link>
                            </div>
                            {/* Card Footer END */}
                          </div>
                          {/* Card END */}
                        </div>
                        <div className="col-sm-6 col-lg-4">
                          {/* Card START */}
                          <div className="card">
                            <div
                              className="h-80px rounded-top"
                              style={{
                                backgroundImage: `url(${bg3})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                              }}
                            />
                            {/* Card body START */}
                            <div className="card-body text-center pt-0">
                              {/* Avatar */}
                              <div className="avatar avatar-lg mt-n5 mb-3">
                                <Link to="/group-details">
                                  <img
                                    className="avatar-img rounded-circle border border-white border-3 bg-white"
                                    src={logo5}
                                    alt=""
                                  />
                                </Link>
                              </div>
                              {/* Info */}
                              <h5 className="mb-0">
                                <Link to="/group-details">
                                  Team yes, we can
                                </Link>
                              </h5>
                              <small>
                                {" "}
                                <i className="bi bi-lock pe-1" /> Private Group
                              </small>
                              {/* Group stat START */}
                              <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">32k</h6>
                                  <small>Members</small>
                                </div>
                                {/* Divider */}
                                <div className="vr" />
                                {/* Group stat item */}
                                <div>
                                  <h6 className="mb-0">05</h6>
                                  <small>Post per day</small>
                                </div>
                              </div>
                              {/* Group stat END */}
                              {/* Avatar group START */}
                              <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="10.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="14.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="13.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="12.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="11.jpg"
                                    alt="avatar"
                                  />
                                </li>
                                <li className="avatar avatar-xs">
                                  <div className="avatar-img rounded-circle bg-primary">
                                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
                                      +08
                                    </span>
                                  </div>
                                </li>
                              </ul>
                              {/* Avatar group END */}
                            </div>
                            {/* Card body END */}
                            {/* Card Footer START */}
                            <div className="card-footer text-center">
                              <Link
                                className="btn btn-success-soft btn-sm"
                                to="#!"
                              >
                                {" "}
                                Join group{" "}
                              </Link>
                            </div>
                            {/* Card Footer END */}
                          </div>
                          {/* Card END */}
                        </div>
                      </div>
                    </div>
                    {/* Suggested for you END */}
                    {/* Popular near you START */}
                    <div className="tab-pane fade" id="tab-3">
                      {/* Add group */}
                      <div className="my-sm-5 py-sm-5 text-center">
                        <i className="display-1 text-body-secondary bi bi-people">
                          {" "}
                        </i>
                        <h4 className="mt-2 mb-3 text-body">No group founds</h4>
                        <button
                          className="btn btn-primary-soft btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#modalCreateGroup"
                        >
                          {" "}
                          Click here to add{" "}
                        </button>
                      </div>
                    </div>
                    {/* Popular near you END */}
                    {/* More suggestions START */}
                    <div className="tab-pane fade" id="tab-4">
                      {/* Add group */}
                      <div className="my-sm-5 py-sm-5 text-center">
                        <i className="display-1 text-body-secondary bi bi-people">
                          {" "}
                        </i>
                        <h4 className="mt-2 mb-3 text-body">No group founds</h4>
                        <button
                          className="btn btn-primary-soft btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#modalCreateGroup"
                        >
                          {" "}
                          Click here to add{" "}
                        </button>
                      </div>
                    </div>
                    {/* More suggestions END */}
                  </div>
                </div>
                {/* Card body END */}
              </div>
              {/* Card END */}
            </div>
          </div>
        </div>
      </main>
       {/* Modal create group START */}
  <div
    className="modal fade"
    id="modalCreateGroup"
    tabIndex={-1}
    aria-labelledby="modalLabelCreateGroup"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        {/* Title */}
        <div className="modal-header">
          <h5 className="modal-title" id="modalLabelCreateGroup">
            Create Group
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          {/* Form START */}
          <form>
            {/* Group name */}
            <div className="mb-3">
              <label className="form-label">Group name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add Group name here"
              />
            </div>
            {/* Group picture */}
            <div className="mb-3">
              <label className="form-label">Group picture</label>
              {/* Avatar upload START */}
              <div className="d-flex align-items-center">
      <div className="avatar-uploader me-3">
        {/* Avatar Edit */}
        <div className="avatar-edit">
          <input
            type="file"
            id="avatarUpload"
            accept=".png, .jpg, .jpeg"
            onChange={handleFileChange}
          />
          <label htmlFor="avatarUpload"></label>
        </div>

        {/* Avatar Preview */}
        <div className="avatar avatar-xl position-relative">
          <img
            id="avatar-preview"
            className="avatar-img rounded-circle border border-white border-3 shadow"
            src={avatarPreview}
            alt="Avatar"
          />
        </div>
      </div>

      {/* Avatar Remove Button */}
      <div className="avatar-remove">
        <button
          type="button"
          id="avatar-reset-img"
          className="btn btn-light"
          onClick={resetAvatar}
        >
          Delete
        </button>
      </div>
    </div>
              {/* Avatar upload END */}
            </div>
            {/* Select audience */}
            <div className="mb-3">
              <label className="form-label d-block">Select audience</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="PublicRadioOptions"
                  id="publicRadio1"
                  defaultValue="option1"
                />
                <label className="form-check-label" htmlFor="publicRadio1">
                  Public
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="PublicRadioOptions"
                  id="privateRadio2"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="privateRadio2">
                  Private
                </label>
              </div>
            </div>
            {/* Invite friend */}
            <div className="mb-3">
              <label className="form-label">Invite friend </label>
              <input
                type="text"
                className="form-control"
                placeholder="Add friend name here"
              />
            </div>
            {/* Group description */}
            <div className="mb-3">
              <label className="form-label">Group description </label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Description here"
                defaultValue={""}
              />
            </div>
          </form>
          {/* Form END */}
        </div>
        {/* Modal footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-success-soft">
            Create now
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Modal create group END */}
    </Fragment>
  );
};

export default Groups;
