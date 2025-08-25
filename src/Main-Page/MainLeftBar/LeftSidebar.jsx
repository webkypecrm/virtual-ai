import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import avtarBhumi from "../../assets/images/avatar/bhumibazzar.jpg";
import homeSvg from "../../assets/images/icon/home-outline-filled.svg";
import medalSvg from "../../assets/images/icon/medal-outline-filled.svg";
import clockSvg from "../../assets/images/icon/clock-outline-filled.svg";
import outlineSvg from "../../assets/images/icon/like-outline-filled.svg";
import starSvg from "../../assets/images/icon/star-outline-filled.svg";
import taskDoneSvg from "../../assets/images/icon/task-done-outline-filled.svg";
import notificationSvg from "../../assets/images/icon/notification-outlined-filled.svg";
import settingSvg from "../../assets/images/icon/cog-outline-filled.svg";
import arrowSvg from "../../assets/images/icon/arrow-boxed-outline-filled.svg";
import avtar7 from "../../assets/images/avatar/07.jpg";

const LeftSidebar = () => {
  return (
    <Fragment>
      <div className="navbar navbar-vertical navbar-light">
        <div
          className="offcanvas offcanvas-start custom-scrollbar rounded pt-3"
          tabIndex={-1}
          id="navbarVerticaloffcanvas"
        >
          <div className="offcanvas-body pt-5 pt-lg-0">
            {/* Card START */}
            {/* Avatar */}
            <div className="avatar avatar-lg mb-3">
              <Link to="#!">
                <img
                  className="avatar-img rounded-circle border border-white border-3"
                  src="caassa-gajen.jpg"
                  alt=""
                />
              </Link>
            </div>
            {/* Info */}
            <h5 className="mb-0">
              {" "}
              <Link to="#!">Gajendra Singh </Link>{" "}
            </h5>
            <small>CEO</small>
            {/* User stat START */}
            <div className="hstack gap-2 gap-xl-3 mt-3">
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
            {/* Divider */}
            <hr />
            {/* Side Nav START */}
            <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
              <li className="nav-item">
                <Link className="nav-link" to="#!">
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
                <Link className="nav-link" to="#!">
                  {" "}
                  <img
                    className="me-2 h-20px fa-fw"
                    src={medalSvg}
                    alt=""
                  />
                  <span>Profile </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#!">
                  {" "}
                  <img
                    className="me-2 h-20px fa-fw"
                    src={clockSvg}
                    alt=""
                  />
                  <span>Avatar </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#!">
                  {" "}
                  <img
                    className="me-2 h-20px fa-fw"
                    src={clockSvg}
                    alt=""
                  />
                  <span>Campaigns </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#!">
                  {" "}
                  <img
                    className="me-2 h-20px fa-fw"
                    src={outlineSvg}
                    alt=""
                  />
                  <span>Subscriptions </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#!">
                  {" "}
                  <img
                    className="me-2 h-20px fa-fw"
                    src={starSvg}
                    alt=""
                  />
                  <span>My favorites </span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="#!">
                  {" "}
                  <img
                    className="me-2 h-20px fa-fw"
                    src={taskDoneSvg}
                    alt=""
                  />
                  <span>Wishlist </span>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="#!">
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
                <Link className="nav-link" to="#!">
                  {" "}
                  <img
                    className="me-2 h-20px fa-fw"
                    src={settingSvg}
                    alt=""
                  />
                  <span>Settings </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#!">
                  {" "}
                  <img
                    className="me-2 h-20px fa-fw"
                    src={arrowSvg}
                    alt=""
                  />
                  <span>Logout </span>
                </Link>
              </li>
            </ul>
            {/* Side Nav END */}
          </div>
          <ul className="nav small mt-3 mb-3 justify-content-center lh-1">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/term">
                Term &amp; Condition
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" target="_blank" to="/contact">
                Contact{" "}
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/help">
                Help
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/privacy">
                Privacy &amp; Policy{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default LeftSidebar;
