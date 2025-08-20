import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import avtar1 from "../../assets/images/avatar/01.jpg";
import avtar2 from "../../assets/images/avatar/02.jpg";
import avtarPlaceholder from "../../assets/images/avatar/placeholder.jpg";
import avtar4 from "../../assets/images/avatar/04.jpg";
import avtar5 from "../../assets/images/avatar/05.jpg";
import avtar6 from "../../assets/images/avatar/06.jpg";
import avtar7 from "../../assets/images/avatar/07.jpg";
import avtar8 from "../../assets/images/avatar/08.jpg";
import avtar9 from "../../assets/images/avatar/09.jpg";
import avtar10 from "../../assets/images/avatar/10.jpg";
import avtar11 from "../../assets/images/avatar/11.jpg";
import avtar12 from "../../assets/images/avatar/12.jpg";

const MainChat = () => {
  return (
    <Fragment>
      {/* Main Chat START */}
      <div className="d-none d-lg-block">
        {/* Button */}
        <Link
          className="icon-md btn btn-primary position-fixed end-0 bottom-0 me-5 mb-5"
          data-bs-toggle="offcanvas"
          to="#offcanvasChat"
          role="button"
          aria-controls="offcanvasChat"
        >
          <i className="bi bi-chat-left-text-fill" />
        </Link>
        {/* Chat sidebar START */}
        <div
          className="offcanvas offcanvas-end"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex={-1}
          id="offcanvasChat"
        >
          {/* Offcanvas header */}
          <div className="offcanvas-header d-flex justify-content-between">
            <h5 className="offcanvas-title">Messaging</h5>
            <div className="d-flex">
              {/* New chat box open button */}
              <Link to="#" className="btn btn-secondary-soft-hover py-1 px-2">
                <i className="bi bi-pencil-square" />
              </Link>
              {/* Chat action START */}
              <div className="dropdown">
                <Link
                  to="#"
                  className="btn btn-secondary-soft-hover py-1 px-2"
                  id="chatAction"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-three-dots" />
                </Link>
                {/* Chat action menu */}
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="chatAction"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="bi bi-check-square fa-fw pe-2" />
                      Mark all as read
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="bi bi-gear fa-fw pe-2" />
                      Chat setting{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="bi bi-bell fa-fw pe-2" />
                      Disable notifications
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="bi bi-volume-up-fill fa-fw pe-2" />
                      Message sounds
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="bi bi-slash-circle fa-fw pe-2" />
                      Block setting
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="bi bi-people fa-fw pe-2" />
                      Create a group chat
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Chat action END */}
              {/* Close  */}
              <Link
                to="#"
                className="btn btn-secondary-soft-hover py-1 px-2"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </Link>
            </div>
          </div>
          {/* Offcanvas body START */}
          <div className="offcanvas-body pt-0 custom-scrollbar">
            {/* Search contact START */}
            <form className="rounded position-relative">
              <input
                className="form-control ps-5 bg-light"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button
                className="btn bg-transparent px-3 py-0 position-absolute top-50 start-0 translate-middle-y"
                type="submit"
              >
                <i className="bi bi-search fs-5"> </i>
              </button>
            </form>
            {/* Search contact END */}
            <ul className="list-unstyled">
              {/* Contact item */}
              <li
                className="mt-3 hstack gap-3 align-items-center position-relative toast-btn"
                data-target="chatToast"
              >
                {/* Avatar */}
                <div className="avatar status-online">
                  <img
                    className="avatar-img rounded-circle"
                    src={avtar1}
                    alt=""
                  />
                </div>
                {/* Info */}
                <div className="overflow-hidden">
                  <Link className="h6 mb-0 stretched-link" to="#!">
                    Frances Guerrero{" "}
                  </Link>
                  <div className="small text-secondary text-truncate">
                    Frances sent a photo.
                  </div>
                </div>
                {/* Chat time */}
                <div className="small ms-auto text-nowrap"> Just now </div>
              </li>
              {/* Contact item */}
              <li
                className="mt-3 hstack gap-3 align-items-center position-relative toast-btn"
                data-target="chatToast2"
              >
                {/* Avatar */}
                <div className="avatar status-online">
                  <img
                    className="avatar-img rounded-circle"
                    src={avtar2}
                    alt=""
                  />
                </div>
                {/* Info */}
                <div className="overflow-hidden">
                  <Link className="h6 mb-0 stretched-link" to="#!">
                    Lori Ferguson{" "}
                  </Link>
                  <div className="small text-secondary text-truncate">
                    You missed a call form Carolyn🤙
                  </div>
                </div>
                {/* Chat time */}
                <div className="small ms-auto text-nowrap"> 1min </div>
              </li>
              {/* Contact item */}
              <li className="mt-3 hstack gap-3 align-items-center position-relative">
                {/* Avatar */}
                <div className="avatar status-offline">
                  <img
                    className="avatar-img rounded-circle"
                    src={avtarPlaceholder}
                    alt=""
                  />
                </div>
                {/* Info */}
                <div className="overflow-hidden">
                  <Link className="h6 mb-0 stretched-link" to="#!">
                    Samuel Bishop{" "}
                  </Link>
                  <div className="small text-secondary text-truncate">
                    Day sweetness why cordially 😊
                  </div>
                </div>
                {/* Chat time */}
                <div className="small ms-auto text-nowrap"> 2min </div>
              </li>
              {/* Contact item */}
              <li className="mt-3 hstack gap-3 align-items-center position-relative">
                {/* Avatar */}
                <div className="avatar">
                  <img
                    className="avatar-img rounded-circle"
                    src={avtar4}
                    alt=""
                  />
                </div>
                {/* Info */}
                <div className="overflow-hidden">
                  <Link className="h6 mb-0 stretched-link" to="#!">
                    Dennis Barrett{" "}
                  </Link>
                  <div className="small text-secondary text-truncate">
                    Happy birthday🎂
                  </div>
                </div>
                {/* Chat time */}
                <div className="small ms-auto text-nowrap"> 10min </div>
              </li>
              {/* Contact item */}
              <li className="mt-3 hstack gap-3 align-items-center position-relative">
                {/* Avatar */}
                <div className="avatar avatar-story status-online">
                  <img
                    className="avatar-img rounded-circle"
                    src={avtar5}
                    alt=""
                  />
                </div>
                {/* Info */}
                <div className="overflow-hidden">
                  <Link className="h6 mb-0 stretched-link" to="#!">
                    Judy Nguyen{" "}
                  </Link>
                  <div className="small text-secondary text-truncate">
                    Thank you!
                  </div>
                </div>
                {/* Chat time */}
                <div className="small ms-auto text-nowrap"> 2hrs </div>
              </li>
              {/* Contact item */}
              <li className="mt-3 hstack gap-3 align-items-center position-relative">
                {/* Avatar */}
                <div className="avatar status-online">
                  <img
                    className="avatar-img rounded-circle"
                    src={avtar6}
                    alt=""
                  />
                </div>
                {/* Info */}
                <div className="overflow-hidden">
                  <Link className="h6 mb-0 stretched-link" to="#!">
                    Carolyn Ortiz{" "}
                  </Link>
                  <div className="small text-secondary text-truncate">
                    Greetings from Stackbros.
                  </div>
                </div>
                {/* Chat time */}
                <div className="small ms-auto text-nowrap"> 1 day </div>
              </li>
              {/* Contact item */}
              <li className="mt-3 hstack gap-3 align-items-center position-relative">
                {/* Avatar */}
                <div className="flex-shrink-0 avatar">
                  <ul className="avatar-group avatar-group-four">
                    <li className="avatar avatar-xxs">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar6}
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-xxs">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar7}
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-xxs">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar8}
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-xxs">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar9}
                        alt="avatar"
                      />
                    </li>
                  </ul>
                </div>
                {/* Info */}
                <div className="overflow-hidden">
                  <Link
                    className="h6 mb-0 stretched-link text-truncate d-inline-block"
                    to="#!"
                  >
                    Frances, Lori, Amanda, Lawson{" "}
                  </Link>
                  <div className="small text-secondary text-truncate">
                    Btw are you looking for job change?
                  </div>
                </div>
                {/* Chat time */}
                <div className="small ms-auto text-nowrap"> 4 day </div>
              </li>
              {/* Contact item */}
              <li className="mt-3 hstack gap-3 align-items-center position-relative">
                {/* Avatar */}
                <div className="avatar status-offline">
                  <img
                    className="avatar-img rounded-circle"
                    src={avtar8}
                    alt=""
                  />
                </div>
                {/* Info */}
                <div className="overflow-hidden">
                  <Link className="h6 mb-0 stretched-link" to="#!">
                    Bryan Knight{" "}
                  </Link>
                  <div className="small text-secondary text-truncate">
                    if you are available to discuss🙄
                  </div>
                </div>
                {/* Chat time */}
                <div className="small ms-auto text-nowrap"> 6 day </div>
              </li>
              {/* Contact item */}
              <li className="mt-3 hstack gap-3 align-items-center position-relative">
                {/* Avatar */}
                <div className="avatar">
                  <img
                    className="avatar-img rounded-circle"
                    src={avtar9}
                    alt=""
                  />
                </div>
                {/* Info */}
                <div className="overflow-hidden">
                  <Link className="h6 mb-0 stretched-link" to="#!">
                    Louis Crawford{" "}
                  </Link>
                  <div className="small text-secondary text-truncate">
                    🙌Congrats on your work anniversary!
                  </div>
                </div>
                {/* Chat time */}
                <div className="small ms-auto text-nowrap"> 1 day </div>
              </li>
              {/* Contact item */}
              <li className="mt-3 hstack gap-3 align-items-center position-relative">
                {/* Avatar */}
                <div className="avatar status-online">
                  <img
                    className="avatar-img rounded-circle"
                    src={avtar10}
                    alt=""
                  />
                </div>
                {/* Info */}
                <div className="overflow-hidden">
                  <Link className="h6 mb-0 stretched-link" to="#!">
                    Jacqueline Miller{" "}
                  </Link>
                  <div className="small text-secondary text-truncate">
                    No sorry, Thanks.
                  </div>
                </div>
                {/* Chat time */}
                <div className="small ms-auto text-nowrap"> 15, dec </div>
              </li>
              {/* Contact item */}
              <li className="mt-3 hstack gap-3 align-items-center position-relative">
                {/* Avatar */}
                <div className="avatar">
                  <img
                    className="avatar-img rounded-circle"
                    src={avtar11}
                    alt=""
                  />
                </div>
                {/* Info */}
                <div className="overflow-hidden">
                  <Link className="h6 mb-0 stretched-link" to="#!">
                    Amanda Reed{" "}
                  </Link>
                  <div className="small text-secondary text-truncate">
                    Interested can share CV at.
                  </div>
                </div>
                {/* Chat time */}
                <div className="small ms-auto text-nowrap"> 18, dec </div>
              </li>
              {/* Contact item */}
              <li className="mt-3 hstack gap-3 align-items-center position-relative">
                {/* Avatar */}
                <div className="avatar status-online">
                  <img
                    className="avatar-img rounded-circle"
                    src={avtar12}
                    alt=""
                  />
                </div>
                {/* Info */}
                <div className="overflow-hidden">
                  <Link className="h6 mb-0 stretched-link" to="#!">
                    Larry Lawson{" "}
                  </Link>
                  <div className="small text-secondary text-truncate">
                    Hope you're doing well and Safe.
                  </div>
                </div>
                {/* Chat time */}
                <div className="small ms-auto text-nowrap"> 20, dec </div>
              </li>
              {/* Button */}
              <li className="mt-3 d-grid">
                <Link className="btn btn-primary-soft" to="/messaging">
                  {" "}
                  See all in messaging{" "}
                </Link>
              </li>
            </ul>
          </div>
          {/* Offcanvas body END */}
        </div>
        {/* Chat sidebar END */}
        {/* Chat END */}
        {/* Chat START */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="position-relative"
        >
          <div className="toast-container toast-chat d-flex gap-3 align-items-end">
            {/* Chat toast START */}
            <div
              id="chatToast"
              className="toast mb-0 bg-mode"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              data-bs-autohide="false"
            >
              <div className="toast-header bg-mode">
                {/* Top avatar and status START */}
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar1}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-0 mt-1">Frances Guerrero</h6>
                      <div className="small text-secondary">
                        <i className="fa-solid fa-circle text-success me-1" />
                        Online
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    {/* Call button */}
                    <div className="dropdown">
                      <Link
                        className="btn btn-secondary-soft-hover py-1 px-2"
                        to="#"
                        id="chatcoversationDropdown"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots-vertical" />
                      </Link>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="chatcoversationDropdown"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="bi bi-camera-video me-2 fw-icon" />
                            Video call
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="bi bi-telephone me-2 fw-icon" />
                            Audio call
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="bi bi-trash me-2 fw-icon" />
                            Delete{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="bi bi-chat-square-text me-2 fw-icon" />
                            Mark as unread
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="bi bi-volume-up me-2 fw-icon" />
                            Muted
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="bi bi-archive me-2 fw-icon" />
                            Archive
                          </Link>
                        </li>
                        <li className="dropdown-divider" />
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="bi bi-flag me-2 fw-icon" />
                            Report
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Card action END */}
                    <Link
                      className="btn btn-secondary-soft-hover py-1 px-2"
                      data-bs-toggle="collapse"
                      to="#collapseChat"
                      aria-expanded="false"
                      aria-controls="collapseChat"
                    >
                      <i className="bi bi-dash-lg" />
                    </Link>
                    <button
                      className="btn btn-secondary-soft-hover py-1 px-2"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    >
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                </div>
                {/* Top avatar and status END */}
              </div>
              <div className="toast-body collapse show" id="collapseChat">
                {/* Chat conversation START */}
                <div className="chat-conversation-content custom-scrollbar h-200px">
                  {/* Chat time */}
                  <div className="text-center small my-2">
                    Jul 16, 2022, 06:15 am
                  </div>
                  {/* Chat message left */}
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar1}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            Applauded no discovery😊
                          </div>
                          <div className="small my-2">6:15 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chat message right */}
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">
                          With pleasure
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chat message left */}
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar1}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            Please find the attached
                          </div>
                          {/* Files START */}
                          {/* Files END */}
                          <div className="small my-2">12:16 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chat message left */}
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar1}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            How promotion excellent curiosity😮
                          </div>
                          <div className="small my-2">3:22 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chat message right */}
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">
                          And sir dare view.
                        </div>
                        {/* Images */}
                        <div className="d-flex my-2">
                          <div className="small text-secondary">5:35 PM</div>
                          <div className="small ms-2">
                            <i className="fa-solid fa-check" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chat time */}
                  <div className="text-center small my-2">2 New Messages</div>
                  {/* Chat Typing */}
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar1}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-3 rounded-2">
                            <div className="typing d-flex align-items-center">
                              <div className="dot" />
                              <div className="dot" />
                              <div className="dot" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Chat conversation END */}
                {/* Chat bottom START */}
                <div className="mt-2">
                  {/* Chat textarea */}
                  <textarea
                    className="form-control mb-sm-0 mb-3"
                    placeholder="Type a message"
                    rows={1}
                    defaultValue={""}
                  />
                  {/* Button */}
                  <div className="d-sm-flex align-items-end mt-2">
                    <button className="btn btn-sm btn-danger-soft me-2">
                      <i className="fa-solid fa-face-smile fs-6" />
                    </button>
                    <button className="btn btn-sm btn-secondary-soft me-2">
                      <i className="fa-solid fa-paperclip fs-6" />
                    </button>
                    <button className="btn btn-sm btn-success-soft me-2">
                      {" "}
                      Gif{" "}
                    </button>
                    <button className="btn btn-sm btn-primary ms-auto">
                      {" "}
                      Send{" "}
                    </button>
                  </div>
                </div>
                {/* Chat bottom START */}
              </div>
            </div>
            {/* Chat toast END */}
            {/* Chat toast 2 START */}
            <div
              id="chatToast2"
              className="toast mb-0 bg-mode"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              data-bs-autohide="false"
            >
              <div className="toast-header bg-mode">
                {/* Top avatar and status START */}
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar2}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-0 mt-1">Lori Ferguson</h6>
                      <div className="small text-secondary">
                        <i className="fa-solid fa-circle text-success me-1" />
                        Online
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    {/* Call button */}
                    <div className="dropdown">
                      <Link
                        className="btn btn-secondary-soft-hover py-1 px-2"
                        to="#"
                        id="chatcoversationDropdown2"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots-vertical" />
                      </Link>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="chatcoversationDropdown2"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="bi bi-camera-video me-2 fw-icon" />
                            Video call
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="bi bi-telephone me-2 fw-icon" />
                            Audio call
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="bi bi-trash me-2 fw-icon" />
                            Delete{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="bi bi-chat-square-text me-2 fw-icon" />
                            Mark as unread
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="bi bi-volume-up me-2 fw-icon" />
                            Muted
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="bi bi-archive me-2 fw-icon" />
                            Archive
                          </Link>
                        </li>
                        <li className="dropdown-divider" />
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="bi bi-flag me-2 fw-icon" />
                            Report
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Card action END */}
                    <Link
                      className="btn btn-secondary-soft-hover py-1 px-2"
                      data-bs-toggle="collapse"
                      to="#collapseChat2"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseChat2"
                    >
                      <i className="bi bi-dash-lg" />
                    </Link>
                    <button
                      className="btn btn-secondary-soft-hover py-1 px-2"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    >
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                </div>
                {/* Top avatar and status END */}
              </div>
              <div className="toast-body collapse show" id="collapseChat2">
                {/* Chat conversation START */}
                <div className="chat-conversation-content custom-scrollbar h-200px">
                  {/* Chat time */}
                  <div className="text-center small my-2">
                    Jul 16, 2022, 06:15 am
                  </div>
                  {/* Chat message left */}
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar2}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            Applauded no discovery😊
                          </div>
                          <div className="small my-2">6:15 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chat message right */}
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">
                          With pleasure
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chat message left */}
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar2}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            Please find the attached
                          </div>
                          {/* Files START */}
                          {/* Files END */}
                          <div className="small my-2">12:16 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chat message left */}
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar2}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            How promotion excellent curiosity😮
                          </div>
                          <div className="small my-2">3:22 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chat message right */}
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">
                          And sir dare view.
                        </div>
                        {/* Images */}
                        <div className="d-flex my-2">
                          <div className="small text-secondary">5:35 PM</div>
                          <div className="small ms-2">
                            <i className="fa-solid fa-check" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chat time */}
                  <div className="text-center small my-2">2 New Messages</div>
                  {/* Chat Typing */}
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src={avtar2}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-3 rounded-2">
                            <div className="typing d-flex align-items-center">
                              <div className="dot" />
                              <div className="dot" />
                              <div className="dot" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Chat conversation END */}
                {/* Chat bottom START */}
                <div className="mt-2">
                  {/* Chat textarea */}
                  <textarea
                    className="form-control mb-sm-0 mb-3"
                    placeholder="Type a message"
                    rows={1}
                    defaultValue={""}
                  />
                  {/* Button */}
                  <div className="d-sm-flex align-items-end mt-2">
                    <button className="btn btn-sm btn-danger-soft me-2">
                      <i className="fa-solid fa-face-smile fs-6" />
                    </button>
                    <button className="btn btn-sm btn-secondary-soft me-2">
                      <i className="fa-solid fa-paperclip fs-6" />
                    </button>
                    <button className="btn btn-sm btn-success-soft me-2">
                      {" "}
                      Gif{" "}
                    </button>
                    <button className="btn btn-sm btn-primary ms-auto">
                      {" "}
                      Send{" "}
                    </button>
                  </div>
                </div>
                {/* Chat bottom START */}
              </div>
            </div>
            {/* Chat toast 2 END */}
          </div>
        </div>
        {/* Chat END */}
      </div>
      {/* Main Chat END */}
    </Fragment>
  );
};

export default MainChat;
