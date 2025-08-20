import React, { Fragment } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import { Link } from "react-router-dom";
import cookie from "../../assets/images/cookie.svg";

const Terms = () => {
  return (
    <Fragment>
      <MainNav />
      <main>
        {/* Container START */}
        <div className="container">
          <div className="row g-4">
            {/* Main content START */}
            <div className="col-lg-8 mx-auto">
              {/* Privacy & terms START */}
              <div className="card">
                <div className="card-header">
                  <h1 className="card-title h4 mb-0">Privacy &amp; terms</h1>
                </div>
                <div className="card-body">
                  {/* Title */}
                  <h5>Your privacy matters</h5>
                  <p>
                    Started several mistake joy say painful removed reached end.
                    State burst <Link to="#!">think end are its.</Link> Arrived
                    off she elderly beloved him affixed noisier yet.
                  </p>
                  {/* Divider */}
                  <hr className="mt-2 mb-4" />
                  {/* Table of Contents */}
                  <h5>Table of Contents</h5>
                  <p>Age she way earnestly the fulfilled extremely.</p>
                  <ol>
                    <li>Post no so what deal evil rent by real in.</li>
                    <li>But her ready least set lived spite solid.</li>
                    <li>
                      Sex lasted dinner wanted{" "}
                      <strong> indeed wished outlaw.</strong>
                    </li>
                    <li>Affronting imprudence do he he everything.</li>
                  </ol>
                  {/* Divider */}
                  <hr className="mt-2 mb-4" />
                  {/* Introduction */}
                  <h5>Introduction</h5>
                  <p>
                    As it so contrasted oh estimating instrument. Size like body
                    someone had. Are conduct{" "}
                    <mark>viewing boy minutes warrant the expense?</mark>{" "}
                    Tolerably behavior may admit daughters offending her ask
                    own. Praise effect wishes change way and any wanted.
                  </p>
                  <p>
                    State burst think end are its.{" "}
                    <u>
                      Arrived off she elderly beloved himaf fixed noisier yet.
                    </u>{" "}
                    Course regard to up he hardly. View four has said do men saw
                    find dear shy. Talent men wicket add garden.{" "}
                  </p>
                  {/* Divider */}
                  <hr className="mt-2 mb-4" />
                  {/* Services */}
                  <h5>Services</h5>
                  <p>
                    Existence certainly explained how improving the household
                    pretended. Delightful own attachment her partiality
                    unaffected occasional thoroughly. Adieus it no wonders
                    spirit houses.{" "}
                  </p>
                  <div className="alert alert-warning" role="alert">
                    This website stores cookies on your computer.
                  </div>
                  <p>
                    Started several mistake joy say painful removed reached end.{" "}
                    <em>
                      State burst think end are its. Arrived off she elderly
                      beloved him affixed noisier yet. Course regard to up he
                      hardly. View four has said do men saw find dear shy.
                    </em>{" "}
                    Talent men wicket add garden.{" "}
                  </p>
                  {/* Divider */}
                  <hr className="mt-2 mb-4" />
                  {/* Messages */}
                  <h5>Messages</h5>
                  <p>
                    As young ye hopes no he place means. Partiality diminution
                    gay yet entreaties admiration.{" "}
                    <strong className="text-secondary">
                      In mention perhaps attempt pointed suppose.
                    </strong>{" "}
                    Unknown ye chamber of warrant of Norland arrived.{" "}
                  </p>
                  <ul>
                    <li>Size like body someone had.</li>
                    <li>
                      Are conduct viewing boy minutes warrant the expense.
                    </li>
                    <li>Adieus it no wonders spirit houses. </li>
                    <li>Talent men wicket add garden. </li>
                  </ul>
                  {/* Divider */}
                  <hr className="mt-2 mb-4" />
                  {/* How We Use Your Data */}
                  <h5>How we use your data</h5>
                  <p>
                    Affronting imprudence do he he everything. Sex lasted dinner
                    wanted indeed wished outlaw.{" "}
                    <Link to="#!">
                      {" "}
                      Far advanced settling say finished raillery.
                    </Link>{" "}
                    Offered chiefly farther of my no colonel shyness. Such on
                    help ye some door if in. Laughter proposal laughing any son
                    law consider. Needed except up piqued an.
                  </p>
                  <p className="mb-0">
                    Post no so what deal evil rent by real in. But her ready
                    least set lived spite solid. September how men saw tolerably
                    two behavior arranging. She offices for highest and replied
                    one venture pasture. Applauded no discovery in newspaper
                    allowance am northward.{" "}
                  </p>
                </div>
              </div>
              {/* Privacy & terms END */}
            </div>
          </div>{" "}
          {/* Row END */}
        </div>
        {/* Container END */}
      </main>
      <footer className="bg-mode py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* Footer nav START */}
              <ul className="nav lh-1">
                <li className="nav-item">
                  <Link className="nav-link" to="my-profile-about.html">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" target="_blank" to="#">
                    Support{" "}
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
            <div className="col-lg-6 ">
              {/* Copyright START */}
              <p className="text-end mb-0">
                ©2024{" "}
                <Link
                  className="text-body"
                  target="_blank"
                  to="https://stackbros.in/"
                >
                  Stackbros{" "}
                </Link>
                All rights reserved.
              </p>
              {/* Copyright END */}
            </div>
          </div>
        </div>
      </footer>
      <div
        className="alert alert-light fade show position-fixed start-0 bottom-0 z-index-99 shadow p-4 m-3 col-10 col-md-4 col-lg-3"
        role="alert"
      >
        <div className="text-dark">
          {/* Image */}
          <img src={cookie} className="h-50px mb-3" alt="cookie" />
          {/* Content */}
          <p className="mb-0">
            This website stores cookies on your computer. To find out more about
            the cookies we use, see our{" "}
            <Link className="text-dark" to="#">
              <u> Privacy Policy</u>
            </Link>
          </p>
          {/* Buttons */}
          <div className="mt-3">
            <button
              type="button"
              className="btn btn-success-soft btn-sm mb-0"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">Accept</span>
            </button>{" "}
            <button
              type="button"
              className="btn btn-danger-soft btn-sm mb-0"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true"> Decline</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Terms;
