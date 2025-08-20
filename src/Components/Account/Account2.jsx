import React, { Fragment, useState } from "react";
import notification from "../../assets/images/icon/notification-outlined-filled.svg";
import shield from "../../assets/images/icon/shield-outline-filled.svg";
import handshake from "../../assets/images/icon/handshake-outline-filled.svg";
import chat from "../../assets/images/icon/chat-alt-outline-filled.svg";
import trash from "../../assets/images/icon/trash-var-outline-filled.svg";
import MainNav from "../../Main-Page/MainNav/MainNav";
import Alert from "../../Main-Page/Alert/Alert";

const Account2 = () => {
  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container">
          <Alert />
          <div className="row">
            <div className="col-lg-3 ">
              {/* Advanced filter responsive toggler START */}
              {/* Divider */}
              <div className="d-flex align-items-center mb-4 d-lg-none">
                <button
                  className="border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                >
                  <span className="btn btn-primary">
                    <i className="fa-solid fa-sliders-h" />
                  </span>
                  <span className="h6 mb-0 fw-bold d-lg-none ms-2">
                    Settings
                  </span>
                </button>
              </div>
              {/* Advanced filter responsive toggler END */}
              <nav className="navbar navbar-light navbar-expand-lg mx-0">
                <div
                  className="offcanvas offcanvas-start"
                  tabIndex={-1}
                  id="offcanvasNavbar"
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
                  <div className="offcanvas-body p-0">
                    {/* Card START */}
                    <div className="card w-100">
                      {/* Card body START */}
                      <div className="card-body">
                        {/* Side Nav START */}
                        <ul className="nav nav-tabs nav-pills nav-pills-soft flex-column fw-bold gap-2 border-0">
                          <li className="nav-item" data-bs-dismiss="offcanvas">
                            <a
                              className="nav-link d-flex mb-0 active"
                              href="#nav-setting-tab-2"
                              data-bs-toggle="tab"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={notification}
                                alt=""
                              />
                              <span>Notification </span>
                            </a>
                          </li>
                          <li className="nav-item" data-bs-dismiss="offcanvas">
                            <a
                              className="nav-link d-flex mb-0"
                              href="#nav-setting-tab-3"
                              data-bs-toggle="tab"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={shield}
                                alt=""
                              />
                              <span>Privacy and safety </span>
                            </a>
                          </li>
                          <li className="nav-item" data-bs-dismiss="offcanvas">
                            <a
                              className="nav-link d-flex mb-0"
                              href="#nav-setting-tab-4"
                              data-bs-toggle="tab"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={handshake}
                                alt=""
                              />
                              <span>Communications </span>
                            </a>
                          </li>
                          <li className="nav-item" data-bs-dismiss="offcanvas">
                            <a
                              className="nav-link d-flex mb-0"
                              href="#nav-setting-tab-5"
                              data-bs-toggle="tab"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={chat}
                                alt=""
                              />
                              <span>Messaging </span>
                            </a>
                          </li>
                          <li className="nav-item" data-bs-dismiss="offcanvas">
                            <a
                              className="nav-link d-flex mb-0"
                              href="#nav-setting-tab-6"
                              data-bs-toggle="tab"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={trash}
                                alt=""
                              />
                              <span>Close account </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer text-center py-2">
                        <a
                          className="btn btn-link text-secondary btn-sm"
                          href="#!"
                        >
                          View Profile{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <ul className="nav small mt-4 justify-content-center lh-1">
                    <li className="nav-item">
                      <a className="nav-link" href="my-profile-about.html">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="account.html">
                        Settings
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" target="_blank" href="#">
                        Support{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="help.html">
                        Help
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="privacy-and-terms.html">
                        Privacy &amp; terms
                      </a>
                    </li>
                  </ul>
                  <p className="small text-center mt-1">
                    ©2024{" "}
                    <a
                      className="text-reset"
                      target="_blank"
                      href="https://stackbros.in/"
                    >
                      {" "}
                      Stackbros{" "}
                    </a>
                  </p>
                </div>
              </nav>
            </div>
            <div class="col-lg-6 vstack gap-4">
              <div class="tab-content py-0 mb-0">
                <div
                  className="tab-pane show active fade"
                  id="nav-setting-tab-2"
                >
                  {/* Notification START */}
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header border-0 pb-0">
                      <h5 className="card-title">Notification</h5>
                      <p className="mb-0">
                        Tried law yet style child. The bore of true of no be
                        deal. Frequently sufficient to be unaffected. The
                        furnished she concluded depending procuring concealed.{" "}
                      </p>
                    </div>
                    {/* Card header START */}
                    {/* Card body START */}
                    <div className="card-body pb-0">
                      {/* Notification START */}
                      <ul className="list-group list-group-flush">
                        {/* Notification list item */}
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="me-2">
                            <h6 className="mb-0">Likes and Comments</h6>
                            <p className="small mb-0">
                              Joy say painful removed reached end.
                            </p>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="NotiSwitchCheckChecked"
                              defaultChecked
                            />
                          </div>
                        </li>
                        {/* Notification list item */}
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="me-2">
                            <h6 className="mb-0">Reply to My comments</h6>
                            <p className="small mb-0">
                              Ask a quick six seven offer see among.
                            </p>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="NotiSwitchCheckChecked2"
                              defaultChecked
                            />
                          </div>
                        </li>
                        {/* Notification list item */}
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="me-2">
                            <h6 className="mb-0">Subscriptions</h6>
                            <p className="small mb-0">
                              Preference any astonished unreserved Mrs.
                            </p>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="NotiSwitchCheckChecked3"
                            />
                          </div>
                        </li>
                        {/* Notification list item */}
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="me-2">
                            <h6 className="mb-0">Birthdays</h6>
                            <p className="small mb-0">
                              Contented he gentleman agreeable do be
                            </p>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="NotiSwitchCheckChecked4"
                            />
                          </div>
                        </li>
                        {/* Notification list item */}
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="me-2">
                            <h6 className="mb-0">Events</h6>
                            <p className="small mb-0">
                              Fulfilled direction use continually.
                            </p>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="NotiSwitchCheckChecked5"
                              defaultChecked
                            />
                          </div>
                        </li>
                        {/* Notification list item */}
                        <li className="list-group-item px-0 py-3">
                          {/* Accordion START */}
                          <div
                            className="accordion accordion-flush border-0"
                            id="emailNotifications"
                          >
                            {/* Accordion item */}
                            <div className="accordion-item bg-transparent">
                              <h2
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                <a
                                  href="#!"
                                  className="accordion-button mb-0 p-0 collapsed bg-transparent shadow-none"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseOne"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseOne"
                                >
                                  <span>
                                    <span className="mb-0 h6 d-block">
                                      Email notifications
                                    </span>
                                    <small className="small mb-0 text-secondary">
                                      As hastened oh produced prospect.{" "}
                                    </small>
                                  </span>
                                </a>
                              </h2>
                              <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne"
                                data-bs-parent="#emailNotifications"
                              >
                                <div className="accordion-body p-0 pt-3">
                                  {/* Notification list item */}
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="NotiSwitchCheckChecked6"
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="NotiSwitchCheckChecked6"
                                    >
                                      Product emails
                                    </label>
                                  </div>
                                  {/* Notification list item */}
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="NotiSwitchCheckChecke7"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="NotiSwitchCheckChecke7"
                                    >
                                      Feedback emails
                                    </label>
                                  </div>
                                  <hr />
                                  <div className="mt-3">
                                    <h6>Email frequency</h6>
                                    {/* Notification list item */}
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="NotiRadio"
                                        id="NotiRadio1"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="NotiRadio1"
                                      >
                                        Daily
                                      </label>
                                    </div>
                                    {/* Notification list item */}
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="NotiRadio"
                                        id="NotiRadio2"
                                        defaultChecked
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="NotiRadio2"
                                      >
                                        Weekly
                                      </label>
                                    </div>
                                    {/* Notification list item */}
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="NotiRadio"
                                        id="NotiRadio3"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="NotiRadio3"
                                      >
                                        Periodically
                                      </label>
                                    </div>
                                    {/* Notification list item */}
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="NotiRadio"
                                        id="NotiRadio4"
                                        defaultChecked
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="NotiRadio4"
                                      >
                                        Off
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Accordion END */}
                        </li>
                        {/* Notification list item */}
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="me-2">
                            <h6 className="mb-0">Push notifications</h6>
                            <p className="small mb-0">
                              Rendered six say his striking confined.{" "}
                            </p>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="NotiSwitchCheckChecked8"
                              defaultChecked
                            />
                          </div>
                        </li>
                        {/* Notification list item */}
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                          <div className="me-2">
                            <h6 className="mb-0">
                              Weekly account summary{" "}
                              <span className="badge bg-primary smaller">
                                {" "}
                                Pro only
                              </span>
                            </h6>
                            <p className="small mb-0">
                              Rendered six say his striking confined.{" "}
                            </p>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="NotiSwitchCheckChecked9"
                              disabled
                            />
                          </div>
                        </li>
                      </ul>
                      {/* Notification END */}
                    </div>
                    {/* Card body END */}
                    {/* Button save */}
                    <div className="card-footer pt-0 text-end border-0">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary mb-0 submit-type-btn"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                  {/* Notification END */}
                </div>
                <div className="tab-pane fade" id="nav-setting-tab-3">
                  {/* Privacy and safety START */}
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header border-0 pb-0">
                      <h5 className="card-title">Privacy and safety</h5>
                      <p className="mb-0">
                        See information about your account, download an archive
                        of your data, or learn about your account deactivation
                        options
                      </p>
                    </div>
                    {/* Card header START */}
                    {/* Card body START */}
                    <div className="card-body">
                      {/* Privacy START */}
                      <ul className="list-group">
                        {/* Privacy item */}
                        <li className="list-group-item d-md-flex justify-content-between align-items-start">
                          <div className="me-md-3">
                            <h6 className="mb-0">
                              {" "}
                              Use two-factor authentication
                            </h6>
                            <p className="small mb-0">
                              Unaffected occasional thoroughly. Adieus it no
                              wonders spirit houses.{" "}
                            </p>
                          </div>
                          <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0">
                            {" "}
                            <i className="bi bi-pencil-square" /> Change
                          </button>
                        </li>
                        {/* Privacy item */}
                        <li className="list-group-item d-md-flex justify-content-between align-items-start">
                          <div className="me-md-3">
                            <h6 className="mb-0">Login activity</h6>
                            <p className="small mb-0">
                              Select the language you use on social
                            </p>
                          </div>
                          <button
                            className="btn btn-primary-soft btn-sm mt-1 mt-md-0"
                            data-bs-toggle="modal"
                            data-bs-target="#modalLoginActivity"
                          >
                            {" "}
                            <i className="bi bi-eye" /> View
                          </button>
                        </li>
                        {/* Privacy item */}
                        <li className="list-group-item d-md-flex justify-content-between align-items-start">
                          <div className="me-md-3">
                            <h6 className="mb-0">
                              Manage your data and activity
                            </h6>
                            <p className="small mb-0">
                              Select a language for translation
                            </p>
                          </div>
                          <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0">
                            {" "}
                            <i className="bi bi-pencil-square" /> Change
                          </button>
                        </li>
                        {/* Privacy item */}
                        <li className="list-group-item d-md-flex justify-content-between align-items-start">
                          <div className="me-md-3">
                            <h6 className="mb-0">Search history</h6>
                            <p className="small mb-0">
                              Choose to autoplay videos on social
                            </p>
                          </div>
                          <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0">
                            {" "}
                            <i className="bi bi-pencil-square" /> Change
                          </button>
                        </li>
                        {/* Privacy item */}
                        <li className="list-group-item d-md-flex justify-content-between align-items-start">
                          <div className="me-md-3">
                            <h6 className="mb-0">Permitted services</h6>
                            <p className="small mb-0">
                              Choose if this feature appears on your profile
                            </p>
                          </div>
                          <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0">
                            {" "}
                            <i className="bi bi-pencil-square" /> Change
                          </button>
                        </li>
                      </ul>
                      {/* Privacy END */}
                    </div>
                    {/* Card body END */}
                    {/* Button save */}
                    <div className="card-footer pt-0 text-end border-0">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary mb-0 submit-type-btn"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                  {/* Privacy and safety END */}
                </div>
                <div className="tab-pane fade" id="nav-setting-tab-4">
                  {/* Communications START */}
                  <div className="card">
                    {/* Title START */}
                    <div className="card-header border-0 pb-0">
                      <h5 className="card-title">Who can connect with you?</h5>
                      <p className="mb-0">
                        He moonlights difficult engrossed it, sportsmen.
                        Interested has all Devonshire difficulty gay assistance
                        joy. Unaffected at ye of compliment alteration to.
                      </p>
                    </div>
                    {/* Title START */}
                    {/* Card body START */}
                    <div className="card-body">
                      {/* Accordion START */}
                      <div className="accordion" id="communications">
                        {/* Accordion item */}
                        <div className="accordion-item bg-transparent">
                          <h2
                            className="accordion-header"
                            id="communicationOne"
                          >
                            <button
                              className="accordion-button mb-0 h6"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#communicationcollapseOne"
                              aria-expanded="true"
                              aria-controls="communicationcollapseOne"
                            >
                              Connection request
                            </button>
                          </h2>
                          {/* Accordion info */}
                          <div
                            id="communicationcollapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="communicationOne"
                            data-bs-parent="#communications"
                          >
                            <div className="accordion-body">
                              {/* Notification list item */}
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="ComRadio"
                                  id="ComRadio5"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="ComRadio5"
                                >
                                  Everyone on social (recommended)
                                </label>
                              </div>
                              {/* Notification list item */}
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="ComRadio"
                                  id="ComRadio2"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="ComRadio2"
                                >
                                  Only people who know your email address
                                </label>
                              </div>
                              {/* Notification list item */}
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="ComRadio"
                                  id="ComRadio3"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="ComRadio3"
                                >
                                  Only people who appear in your mutual
                                  connection list
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Accordion item */}
                        <div className="accordion-item bg-transparent">
                          <h2
                            className="accordion-header"
                            id="communicationTwo"
                          >
                            <button
                              className="accordion-button mb-0 h6 collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#communicationcollapseTwo"
                              aria-expanded="false"
                              aria-controls="communicationcollapseTwo"
                            >
                              Who can message you
                            </button>
                          </h2>
                          {/* Accordion info */}
                          <div
                            id="communicationcollapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="communicationTwo"
                            data-bs-parent="#communications"
                          >
                            <div className="accordion-body">
                              <ul className="list-group list-group-flush">
                                {/* Notification list item */}
                                <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                  <div className="me-2">
                                    <p className="mb-0">
                                      Enable message request notifications
                                    </p>
                                  </div>
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="comSwitchCheckChecked"
                                    />
                                  </div>
                                </li>
                                {/* Notification list item */}
                                <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                  <div className="me-2">
                                    <p className="mb-0">
                                      Allow connections to add you on group{" "}
                                    </p>
                                  </div>
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="comSwitchCheckChecked2"
                                      defaultChecked
                                    />
                                  </div>
                                </li>
                                {/* Notification list item */}
                                <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                  <div className="me-2">
                                    <p className="mb-0">
                                      Allow Sponsored Messages{" "}
                                    </p>
                                    <p className="small">
                                      Your personal information is safe with our
                                      marketing partners unless you respond to
                                      their Sponsored Messages{" "}
                                    </p>
                                  </div>
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="comSwitchCheckChecked3"
                                      defaultChecked
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* Accordion item */}
                        <div className="accordion-item bg-transparent">
                          <h2
                            className="accordion-header"
                            id="communicationThree"
                          >
                            <button
                              className="accordion-button mb-0 h6 collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#communicationcollapseThree"
                              aria-expanded="false"
                              aria-controls="communicationcollapseThree"
                            >
                              How people can find you
                            </button>
                          </h2>
                          {/* Accordion info */}
                          <div
                            id="communicationcollapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="communicationThree"
                            data-bs-parent="#communications"
                          >
                            <div className="accordion-body">
                              <ul className="list-group list-group-flush">
                                {/* Notification list item */}
                                <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                  <div className="me-2">
                                    <p className="mb-0">
                                      Allow search engines to show your profile?
                                    </p>
                                  </div>
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="comSwitchCheckChecked4"
                                      defaultChecked
                                    />
                                  </div>
                                </li>
                                {/* Notification list item */}
                                <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                  <div className="me-2">
                                    <p className="mb-0">
                                      Allow people to search by your email
                                      address?{" "}
                                    </p>
                                  </div>
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="comSwitchCheckChecked5"
                                    />
                                  </div>
                                </li>
                                {/* Notification list item */}
                                <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                  <div className="me-2">
                                    <p className="mb-0">
                                      Allow Sponsored Messages{" "}
                                    </p>
                                    <p className="small">
                                      Your personal information is safe with our
                                      marketing partners unless you respond to
                                      their Sponsored Messages{" "}
                                    </p>
                                  </div>
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="comSwitchCheckChecked6"
                                      defaultChecked
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Accordion END */}
                    </div>
                    {/* Card body END */}
                    {/* Button save */}
                    <div className="card-footer pt-0 text-end border-0">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary mb-0 submit-type-btn"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                  {/* Communications  END */}
                </div>
                <div className="tab-pane fade" id="nav-setting-tab-5">
                  {/* Messaging privacy START */}
                  <div className="card mb-4">
                    {/* Title START */}
                    <div className="card-header border-0 pb-0">
                      <h5 className="card-title">Messaging privacy settings</h5>
                      <p className="mb-0">
                        As young ye hopes no he place means. Partiality
                        diminution gay yet entreaties admiration. In mention
                        perhaps attempt pointed suppose. Unknown ye chamber of
                        warrant of Norland arrived.{" "}
                      </p>
                    </div>
                    {/* Title START */}
                    <div className="card-body">
                      {/* Settings style START */}
                      <ul className="list-group list-group-flush">
                        {/* Message list item */}
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <div className="me-2">
                            <h6 className="mb-0">
                              Enable message request notifications
                            </h6>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="msgSwitchCheckChecked"
                              defaultChecked
                            />
                          </div>
                        </li>
                        {/* Message list item */}
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <div className="me-2">
                            <h6 className="mb-0">
                              Invitations from your network
                            </h6>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="msgSwitchCheckChecked2"
                              defaultChecked
                            />
                          </div>
                        </li>
                        {/* Message list item */}
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <div className="me-2">
                            <h6 className="mb-0">
                              Allow connections to add you on group
                            </h6>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="msgSwitchCheckChecked3"
                            />
                          </div>
                        </li>
                        {/* Message list item */}
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <div className="me-2">
                            <h6 className="mb-0">Reply to comments</h6>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="msgSwitchCheckChecked4"
                            />
                          </div>
                        </li>
                        {/* Message list item */}
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <div className="me-2">
                            <h6 className="mb-0">
                              Messages from activity on my page or channel
                            </h6>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="msgSwitchCheckChecked5"
                              defaultChecked
                            />
                          </div>
                        </li>
                        {/* Message list item */}
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <div className="me-2">
                            <h6 className="mb-0">
                              Personalise tips for my page
                            </h6>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="msgSwitchCheckChecked6"
                              defaultChecked
                            />
                          </div>
                        </li>
                      </ul>
                      {/* Message END */}
                    </div>
                    {/* Button save */}
                    <div className="card-footer pt-0 text-end border-0">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary mb-0 submit-type-btn"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                  {/* Messaging privacy END */}
                  {/* Messaging experience START */}
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header border-0 pb-0">
                      <h5 className="card-title">Messaging experience</h5>
                      <p className="mb-0">
                        Arrived off she elderly beloved him affixed noisier yet.{" "}
                      </p>
                    </div>
                    {/* Card header START */}
                    {/* Card body START */}
                    <div className="card-body">
                      {/* Message START */}
                      <ul className="list-group list-group-flush">
                        {/* Message list item */}
                        <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0">
                          <div className="me-2">
                            <h6 className="mb-0">
                              Read receipts and typing indicators
                            </h6>
                          </div>
                          <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0">
                            {" "}
                            <i className="bi bi-pencil-square" /> Change
                          </button>
                        </li>
                        {/* Message list item */}
                        <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0">
                          <div className="me-2">
                            <h6 className="mb-0">Message suggestions</h6>
                          </div>
                          <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0">
                            {" "}
                            <i className="bi bi-pencil-square" /> Change
                          </button>
                        </li>
                        {/* Message list item */}
                        <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0">
                          <div className="me-2">
                            <h6 className="mb-0">Message nudges</h6>
                          </div>
                          <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0">
                            {" "}
                            <i className="bi bi-pencil-square" /> Change
                          </button>
                        </li>
                      </ul>
                      {/* Message END */}
                    </div>
                    {/* Card body END */}
                    {/* Button save */}
                    <div className="card-footer pt-0 text-end border-0">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary mb-0 submit-type-btn"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                  {/* Messaging experience END */}
                </div>
                <div className="tab-pane fade" id="nav-setting-tab-6">
                  {/* Card START */}
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header border-0 pb-0">
                      <h5 className="card-title">Delete account</h5>
                      <p className="mb-0">
                        He moonlights difficult engrossed it, sportsmen.
                        Interested has all Devonshire difficulty gay assistance
                        joy. Unaffected at ye of compliment alteration to.
                      </p>
                    </div>
                    {/* Card header START */}
                    {/* Card body START */}
                    <div className="card-body">
                      {/* Delete START */}
                      <h6>Before you go...</h6>
                      <ul>
                        <li>
                          Take a backup of your data <a href="#">Here</a>{" "}
                        </li>
                        <li>
                          If you delete your account, you will lose your all
                          data.
                        </li>
                      </ul>
                      <div className="form-check form-check-md my-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="deleteaccountCheck"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="deleteaccountCheck"
                        >
                          Yes, I'd like to delete my account
                        </label>
                      </div>
                      <a
                        href="#"
                        className="btn btn-success-soft btn-sm mb-2 mb-sm-0"
                      >
                        Keep my account
                      </a>{" "}
                      <a href="#" className="btn btn-danger btn-sm mb-0">
                        Delete my account
                      </a>
                      {/* Delete END */}
                    </div>
                    {/* Card body END */}
                  </div>
                  {/* Card END */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* modal */}
      <div
  className="modal fade"
  id="modalLoginActivity"
  tabIndex={-1}
  aria-labelledby="modalLabelLoginActivity"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content">
      {/* Modal header */}
      <div className="modal-header">
        <h5 className="modal-title" id="modalLabelLoginActivity">
          Where You're Logged in{" "}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body">
        <ul className="list-group list-group-flush">
          {/* location list item */}
          <li className="list-group-item d-flex justify-content-between align-items-center px-0 pb-3">
            <div className="me-2">
              <h6 className="mb-0">London, UK</h6>
              <ul className="nav nav-divider small">
                <li className="nav-item">Active now </li>
                <li className="nav-item">This Apple iMac </li>
              </ul>
            </div>
            <button className="btn btn-sm btn-primary-soft"> Logout </button>
          </li>
          {/* location list item */}
          <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
            <div className="me-2">
              <h6 className="mb-0">California, USA</h6>
              <ul className="nav nav-divider small">
                <li className="nav-item">Active now </li>
                <li className="nav-item">This Apple iMac </li>
              </ul>
            </div>
            <button className="btn btn-sm btn-primary-soft"> Logout </button>
          </li>
          {/* location list item */}
          <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
            <div className="me-2">
              <h6 className="mb-0">New york, USA</h6>
              <ul className="nav nav-divider small">
                <li className="nav-item">Active now </li>
                <li className="nav-item">This Windows </li>
              </ul>
            </div>
            <button className="btn btn-sm btn-primary-soft"> Logout </button>
          </li>
          {/* location list item */}
          <li className="list-group-item d-flex justify-content-between align-items-center px-0 pt-3">
            <div className="me-2">
              <h6 className="mb-0">Mumbai, India</h6>
              <ul className="nav nav-divider small">
                <li className="nav-item">Active now </li>
                <li className="nav-item">This Windows </li>
              </ul>
            </div>
            <button className="btn btn-sm btn-primary-soft"> Logout </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </Fragment>
  );
};

export default Account2;
