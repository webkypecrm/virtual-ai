import React, { Fragment, useEffect, useRef, useState } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import LeftSideBar2 from "../../ReuseComp/LeftSideBar2";
import { Link } from "react-router-dom";
import logo13 from "../../assets/images/logo/13.svg";
import post1 from "../../assets/images/post/3by2/01.jpg";
import avtar3 from "../../assets/images/avatar/03.jpg";
import avtar2 from "../../assets/images/avatar/02.jpg";
import avtar1 from "../../assets/images/avatar/01.jpg";
import avtar4 from "../../assets/images/avatar/04.jpg";
import avtar5 from "../../assets/images/avatar/05.jpg";
import avtar6 from "../../assets/images/avatar/06.jpg";
import avtar7 from "../../assets/images/avatar/07.jpg";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Dropzone from "dropzone";

const InstituteDetails = () => {
        // video
        const dropzoneRef1 = useRef(null);
        const [videoFiles, setVideoFiles] = useState([]);
      
        useEffect(() => {
          if (dropzoneRef1.current) {
            const dz = new Dropzone(dropzoneRef1.current, {
              url: "/fake-upload",
              maxFiles: 2,
              acceptedFiles: "video/*",
              autoProcessQueue: false,
              addRemoveLinks: true,
              init: function () {
                this.on("addedfile", (file) => {
                  if (file.type.startsWith("video/")) {
                    setVideoFiles((prev) => [...prev, file]);
                  } else {
                    this.removeFile(file);
                    alert("Only video files are allowed.");
                  }
                });
                this.on("removedfile", (file) => {
                  setVideoFiles((prev) => prev.filter((f) => f.name !== file.name));
                });
              }
            });
      
            return () => dz.destroy();
          }
        }, []);
        // photo
        const dropzoneRef2 = useRef(null);
        const [photoFiles, setPhotoFiles] = useState([]);
      
        useEffect(() => {
          if (dropzoneRef2.current) {
            const dz = new Dropzone(dropzoneRef2.current, {
              url: "/fake-upload", // replace with actual API if needed
              maxFiles: 2,
              acceptedFiles: "image/*",
              autoProcessQueue: false,
              addRemoveLinks: true,
              init: function () {
                this.on("addedfile", (file) => {
                  if (file.type.startsWith("image/")) {
                    setPhotoFiles((prev) => [...prev, file]);
                  } else {
                    this.removeFile(file);
                    alert("Only image files are allowed.");
                  }
                });
                this.on("removedfile", (file) => {
                  setPhotoFiles((prev) =>
                    prev.filter((f) => f.name !== file.name)
                  );
                });
              },
            });
      
            return () => dz.destroy();
          }
        }, []);
  return (
     <Fragment>
      <MainNav />
      <main>
        <div className="container-fluid">
          <div className="row g-4">
            <LeftSideBar2/>
            <div className="col-md-8 col-lg-9 vstack gap-4">
  {/* Card START */}
  <div className="card">
    {/* Card body START */}
    <div className="card-body">     
      <div className="d-md-flex flex-wrap align-items-start text-center text-md-start">
        <div className="mb-2">
          {/* Avatar */}
          <div className="avatar avatar-xl">
            <img
              className="avatar-img border-0"
              src={logo13}
              alt=""
            />
          </div>
        </div>
        <div className="ms-md-4 mt-3">
          {/* Info */}
          <h1 className="h5 mb-0">
            Apple Education{" "}
            <i className="bi bi-patch-check-fill text-success small" />
          </h1>
          <ul className="nav nav-divider justify-content-center justify-content-md-start">
            <li className="nav-item"> Private group </li>
            <li className="nav-item"> 28.3K members </li>
          </ul>
        </div>
        {/* Button */}
        <div className="d-flex justify-content-center justify-content-md-start align-items-center mt-3 ms-lg-auto">
          <button className="btn btn-sm btn-primary-soft me-2" type="button">
            {" "}
            <i className="bi bi-person-check-fill pe-1" /> Joined
          </button>
          <button className="btn btn-sm btn-success me-2" type="button">
            {" "}
            <i className="fa-solid fa-plus pe-1" /> Invite
          </button>
          <div className="dropdown">
            {/* Group share action menu */}
            <button
              className="icon-sm btn btn-dark-soft"
              type="button"
              id="groupAction"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-three-dots" />
            </button>
            {/* Group share action dropdown menu */}
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="groupAction"
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
      {/* Join group START */}
      <ul className="avatar-group list-unstyled justify-content-center justify-content-md-start align-items-center mb-0 mt-3 flex-wrap">
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
          <img
            className="avatar-img rounded-circle"
            src="10.jpg"
            alt="avatar"
          />
        </li>
        <li className="avatar avatar-xs me-2">
          <div className="avatar-img rounded-circle bg-primary">
            <span className="smaller text-white position-absolute top-50 start-50 translate-middle">
              +19
            </span>
          </div>
        </li>
        <li className="small text-center">
          Carolyn Ortiz, Frances Guerrero, and 20 joined group
        </li>
      </ul>
      {/* Join group END */}
    </div>
    {/* Card body END */}
    <div className="card-footer pb-0">
      <ul className="nav nav-tabs nav-bottom-line justify-content-center justify-content-md-start mb-0">
        <li className="nav-item">
          {" "}
          <Link
            className="nav-link active"
            data-bs-toggle="tab"
            to="#group-tab-1"
          >
            {" "}
            Feed{" "}
          </Link>{" "}
        </li>
        <li className="nav-item">
          {" "}
          <Link className="nav-link" data-bs-toggle="tab" to="#group-tab-2">
            {" "}
            About{" "}
          </Link>{" "}
        </li>
        <li className="nav-item">
          {" "}
          <Link className="nav-link" data-bs-toggle="tab" to="#group-tab-3">
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
          <Link className="nav-link" data-bs-toggle="tab" to="#group-tab-4">
            {" "}
            Media
          </Link>{" "}
        </li>
        <li className="nav-item">
          {" "}
          <Link className="nav-link" data-bs-toggle="tab" to="#group-tab-5">
            {" "}
            Videos
          </Link>{" "}
        </li>
        <li className="nav-item">
          {" "}
          <Link className="nav-link" data-bs-toggle="tab" to="#group-tab-6">
            {" "}
            Events
          </Link>{" "}
        </li>
      </ul>
    </div>
  </div>
  {/* Card END */}
  <div className="tab-content pt-0 pb-0 mb-0">
    {/* Gruop Feed tab START */}
    <div className="tab-pane show active fade" id="group-tab-1">
      <div className="row g-4">
        <div className="col-lg-8 vstack gap-4">
          {/* Share feed START */}
          <div className="card card-body">
            <div className="d-flex mb-3">
              {/* Avatar */}
              <div className="avatar avatar-xs me-2">
                <Link to="#">
                  {" "}
                  <img
                    className="avatar-img rounded-circle"
                    src="03.jpg"
                    alt=""
                  />{" "}
                </Link>
              </div>
              {/* Post input */}
              <form className="w-100">
                <input
                  className="form-control pe-4 border-0"
                  placeholder="Share your thoughts..."
                  data-bs-toggle="modal"
                  data-bs-target="#modalCreateFeed"
                />
              </form>
            </div>
            {/* Share feed toolbar START */}
            <ul className="nav nav-pills nav-stack small fw-normal">
              <li className="nav-item">
                <Link
                  className="nav-link bg-light py-1 px-2 mb-0"
                  to="#!"
                  data-bs-toggle="modal"
                  data-bs-target="#feedActionPhoto"
                >
                  {" "}
                  <i className="bi bi-image-fill text-success pe-2" />
                  Photo
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link bg-light py-1 px-2 mb-0"
                  to="#!"
                  data-bs-toggle="modal"
                  data-bs-target="#feedActionVideo"
                >
                  {" "}
                  <i className="bi bi-camera-reels-fill text-info pe-2" />
                  Video
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link bg-light py-1 px-2 mb-0"
                  data-bs-toggle="modal"
                  data-bs-target="#modalCreateEvents"
                >
                  {" "}
                  <i className="bi bi-calendar2-event-fill text-danger pe-2" />
                  Event{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link bg-light py-1 px-2 mb-0"
                  to="#!"
                  data-bs-toggle="modal"
                  data-bs-target="#modalCreateFeed"
                >
                  {" "}
                  <i className="bi bi-emoji-smile-fill text-warning pe-2" />
                  Feeling /Activity
                </Link>
              </li>
              <li className="nav-item dropdown ms-xl-auto">
                <Link
                  className="nav-link bg-light py-1 px-2 mb-0"
                  to="#"
                  id="feedActionShare"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-three-dots" />
                </Link>
                {/* Dropdown menu */}
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="feedActionShare"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="bi bi-envelope fa-fw pe-2" />
                      Create a poll
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="bi bi-bookmark-check fa-fw pe-2" />
                      Ask a question{" "}
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="bi bi-pencil-square fa-fw pe-2" />
                      Help
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/* Share feed toolbar END */}
          </div>
          {/* Share feed END */}
          {/* Card feed item START */}
          <div className="card">
            {/* Card header START */}
            <div className="card-header border-0 pb-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  {/* Avatar */}
                  <div className="avatar avatar-story me-2">
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
                  <div>
                    <div className="nav nav-divider">
                      <h6 className="nav-item card-title mb-0">
                        {" "}
                        <Link to="#!"> Lori Ferguson </Link>
                      </h6>
                      <span className="nav-item small"> 2hr</span>
                    </div>
                    <p className="mb-0 small">Web Developer at Stackbros</p>
                  </div>
                </div>
                {/* Card feed action dropdown START */}
                <div className="dropdown">
                  <Link
                    to="#"
                    className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                    id="cardFeedAction1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots" />
                  </Link>
                  {/* Card feed action dropdown menu */}
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="cardFeedAction1"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-bookmark fa-fw pe-2" />
                        Save post
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-person-x fa-fw pe-2" />
                        Unfollow lori ferguson{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-x-circle fa-fw pe-2" />
                        Hide post
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-slash-circle fa-fw pe-2" />
                        Block
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-flag fa-fw pe-2" />
                        Report post
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Card feed action dropdown END */}
              </div>
            </div>
            {/* Card header END */}
            {/* Card body START */}
            <div className="card-body">
              <p>
                I'm thrilled to share that I've completed a graduate certificate
                course in project management with the president's honor roll.
              </p>
              {/* Card img */}
              <img
                className="card-img"
                src={post1}
                alt="Post"
              />
              {/* Feed react START */}
              <ul className="nav nav-stack py-3 small">
                <li className="nav-item">
                  <Link className="nav-link active" to="#!">
                    {" "}
                    <i className="bi bi-hand-thumbs-up-fill pe-1" />
                    Liked (56)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#!">
                    {" "}
                    <i className="bi bi-chat-fill pe-1" />
                    Comments (12)
                  </Link>
                </li>
                {/* Card share action START */}
                <li className="nav-item dropdown ms-sm-auto">
                  <Link
                    className="nav-link mb-0"
                    to="#"
                    id="cardShareAction8"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-reply-fill flip-horizontal ps-1" />
                    Share (3)
                  </Link>
                  {/* Card share action dropdown menu */}
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="cardShareAction8"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-envelope fa-fw pe-2" />
                        Send via Direct Message
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-bookmark-check fa-fw pe-2" />
                        Bookmark{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-link fa-fw pe-2" />
                        Copy link to post
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-share fa-fw pe-2" />
                        Share post via …
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-pencil-square fa-fw pe-2" />
                        Share to News Feed
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Card share action END */}
              </ul>
              {/* Feed react END */}
              {/* Add comment */}
              <div className="d-flex mb-3">
                {/* Avatar */}
                <div className="avatar avatar-xs me-2">
                  <Link to="#!">
                    {" "}
                    <img
                      className="avatar-img rounded-circle"
                      src="12.jpg"
                      alt=""
                    />{" "}
                  </Link>
                </div>
                {/* Comment box  */}
                <form className="position-relative w-100">
                  <textarea
                    className="form-control pe-4 bg-light"
                    rows={1}
                    placeholder="Add a comment..."
                    defaultValue={""}
                  />
                </form>
              </div>
              {/* Comment wrap START */}
              <ul className="comment-wrap list-unstyled">
                {/* Comment item START */}
                <li className="comment-item">
                  <div className="d-flex position-relative">
                    <div className="comment-line-inner" />
                    {/* Avatar */}
                    <div className="avatar avatar-xs">
                      <Link to="#!">
                        <img
                          className="avatar-img rounded-circle"
                          src="05.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="ms-2">
                      {/* Comment by */}
                      <div className="bg-light rounded-start-top-0 p-3 rounded">
                        <div className="d-flex justify-content-center">
                          <div className="me-2">
                            <h6 className="mb-1">
                              {" "}
                              <Link to="#!"> Frances Guerrero </Link>
                            </h6>
                            <p className="small mb-0">
                              Removed demands expense account in outward tedious
                              do. Particular way thoroughly unaffected
                              projection.
                            </p>
                          </div>
                          <small>5hr</small>
                        </div>
                      </div>
                      {/* Comment react */}
                      <ul className="nav nav-divider py-2 small">
                        <li className="nav-item">
                          <Link className="nav-link" to="#!">
                            {" "}
                            Like (3)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#!">
                            {" "}
                            Reply
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#!">
                            {" "}
                            View 5 replies
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Comment item nested START */}
                  <ul className="comment-item-nested list-unstyled">
                    {/* Comment item START */}
                    <li className="comment-item">
                      <div className="comment-line-inner" />
                      <div className="d-flex">
                        {/* Avatar */}
                        <div className="avatar avatar-xs">
                          <Link to="#!">
                            <img
                              className="avatar-img rounded-circle"
                              src="06.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        {/* Comment by */}
                        <div className="ms-2">
                          <div className="bg-light p-3 rounded">
                            <div className="d-flex justify-content-center">
                              <div className="me-2">
                                <h6 className="mb-1">
                                  {" "}
                                  <Link to="#!"> Lori Stevens </Link>{" "}
                                </h6>
                                <p className="small mb-0">
                                  See resolved goodness felicity shy civility
                                  domestic had but Drawings offended yet
                                  answered Jennings perceive.
                                </p>
                              </div>
                              <small>2hr</small>
                            </div>
                          </div>
                          {/* Comment react */}
                          <ul className="nav nav-divider py-2 small">
                            <li className="nav-item">
                              <Link className="nav-link" to="#!">
                                {" "}
                                Like (5)
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="#!">
                                {" "}
                                Reply
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    {/* Comment item END */}
                    {/* Comment item START */}
                    <li className="comment-item">
                      <div className="comment-line-inner" />
                      <div className="d-flex">
                        {/* Avatar */}
                        <div className="avatar avatar-story avatar-xs">
                          <Link to="#!">
                            <img
                              className="avatar-img rounded-circle"
                              src="07.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        {/* Comment by */}
                        <div className="ms-2">
                          <div className="bg-light p-3 rounded">
                            <div className="d-flex justify-content-center">
                              <div className="me-2">
                                <h6 className="mb-1">
                                  {" "}
                                  <Link to="#!"> Billy Vasquez </Link>{" "}
                                </h6>
                                <p className="small mb-0">
                                  Wishing calling is warrant settled was lucky.
                                </p>
                              </div>
                              <small>15min</small>
                            </div>
                          </div>
                          {/* Comment react */}
                          <ul className="nav nav-divider py-2 small">
                            <li className="nav-item">
                              <Link className="nav-link" to="#!">
                                {" "}
                                Like
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="#!">
                                {" "}
                                Reply
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    {/* Comment item END */}
                  </ul>
                  {/* Load more replies */}
                  <Link
                    to="#!"
                    role="button"
                    className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
                    data-bs-toggle="button"
                    aria-pressed="true"
                  >
                    <div className="spinner-dots me-2">
                      <span className="spinner-dot" />
                      <span className="spinner-dot" />
                      <span className="spinner-dot" />
                    </div>
                    Load more replies
                  </Link>
                  {/* Comment item nested END */}
                </li>
                {/* Comment item END */}
                {/* Comment item START */}
                <li className="comment-item">
                  <div className="d-flex">
                    {/* Avatar */}
                    <div className="avatar avatar-xs">
                      <Link to="#!">
                        <img
                          className="avatar-img rounded-circle"
                          src="05.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    {/* Comment by */}
                    <div className="ms-2">
                      <div className="bg-light p-3 rounded">
                        <div className="d-flex justify-content-center">
                          <div className="me-2">
                            <h6 className="mb-1">
                              {" "}
                              <Link to="#!"> Frances Guerrero </Link>{" "}
                            </h6>
                            <p className="small mb-0">
                              Removed demands expense account in outward tedious
                              do. Particular way thoroughly unaffected
                              projection.
                            </p>
                          </div>
                          <small>4min</small>
                        </div>
                      </div>
                      {/* Comment react */}
                      <ul className="nav nav-divider pt-2 small">
                        <li className="nav-item">
                          <Link className="nav-link" to="#!">
                            {" "}
                            Like (1)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#!">
                            {" "}
                            Reply
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#!">
                            {" "}
                            View 6 replies
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                {/* Comment item END */}
              </ul>
              {/* Comment wrap END */}
            </div>
            {/* Card body END */}
            {/* Card footer START */}
            <div className="card-footer border-0 pt-0">
              {/* Load more comments */}
              <Link
                to="#!"
                role="button"
                className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                data-bs-toggle="button"
                aria-pressed="true"
              >
                <div className="spinner-dots me-2">
                  <span className="spinner-dot" />
                  <span className="spinner-dot" />
                  <span className="spinner-dot" />
                </div>
                Load more comments
              </Link>
            </div>
            {/* Card footer END */}
          </div>
          {/* Card feed item END */}
          {/* Card feed item START */}
          <div className="card">
            {/* Like post */}
            <div className="border-bottom">
              <p className="small mb-0 px-4 py-2">
                <i className="bi bi-heart-fill text-danger pe-1" />
                Sam Lanson likes this post
              </p>
            </div>
            {/* Card header START */}
            <div className="card-header border-0 pb-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  {/* Avatar */}
                  <div className="avatar me-2">
                    <Link to="#">
                      {" "}
                      <img
                        className="avatar-img rounded-circle"
                        src={logo13}
                        alt=""
                      />{" "}
                    </Link>
                  </div>
                  {/* Title */}
                  <div>
                    <h6 className="card-title mb-0">
                      {" "}
                      <Link to="#!"> Apple Education </Link>
                    </h6>
                    <p className="mb-0 small">9 November at 23:29</p>
                  </div>
                </div>
                {/* Card share action menu */}
                <Link
                  to="#"
                  className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                  id="cardShareAction5"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-three-dots" />
                </Link>
                {/* Card share action dropdown menu */}
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="cardShareAction5"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="bi bi-bookmark fa-fw pe-2" />
                      Save post
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="bi bi-person-x fa-fw pe-2" />
                      Unfollow lori ferguson{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="bi bi-x-circle fa-fw pe-2" />
                      Hide post
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="bi bi-slash-circle fa-fw pe-2" />
                      Block
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="bi bi-flag fa-fw pe-2" />
                      Report post
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Card share action END */}
            </div>
            {/* Card header START */}
            {/* Card body START */}
            <div className="card-body pb-0">
              <p>
                Find out how you can save time in the classroom this year. Earn
                recognition while you learn new skills on iPad and Mac. Start
                recognition your first Apple Teacher badge today!
              </p>
              {/* Feed react START */}
              <ul className="nav nav-stack pb-2 small">
                <li className="nav-item">
                  <Link className="nav-link active text-secondary" to="#!">
                    {" "}
                    <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle" />{" "}
                    Louis, Billy and 126 others{" "}
                  </Link>
                </li>
                <li className="nav-item ms-sm-auto">
                  <Link className="nav-link" to="#!">
                    {" "}
                    <i className="bi bi-chat-fill pe-1" />
                    Comments (12)
                  </Link>
                </li>
              </ul>
              {/* Feed react END */}
            </div>
            {/* Card body END */}
            {/* Card Footer START */}
            <div className="card-footer py-3">
              {/* Feed react START */}
              <ul className="nav nav-fill nav-stack small">
                <li className="nav-item">
                  <Link className="nav-link mb-0 active" to="#!">
                    {" "}
                    <i className="bi bi-heart pe-1" />
                    Liked (56)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mb-0" to="#!">
                    {" "}
                    <i className="bi bi-chat-fill pe-1" />
                    Comments (12)
                  </Link>
                </li>
                {/* Card share action dropdown START */}
                <li className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link mb-0"
                    id="cardShareAction6"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-reply-fill flip-horizontal ps-1" />
                    Share (3)
                  </Link>
                  {/* Card share action dropdown menu */}
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="cardShareAction6"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-envelope fa-fw pe-2" />
                        Send via Direct Message
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-bookmark-check fa-fw pe-2" />
                        Bookmark{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-link fa-fw pe-2" />
                        Copy link to post
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-share fa-fw pe-2" />
                        Share post via …
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        {" "}
                        <i className="bi bi-pencil-square fa-fw pe-2" />
                        Share to News Feed
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Card share action dropdown END */}
                <li className="nav-item">
                  <Link className="nav-link mb-0" to="#!">
                    {" "}
                    <i className="bi bi-send-fill pe-1" />
                    Send
                  </Link>
                </li>
              </ul>
              {/* Feed react END */}
            </div>
            {/* Card Footer END */}
          </div>
          {/* Card feed item END */}
        </div>
        <div className="col-lg-4">
          {/* About START */}
          <div className="card">
            {/* Title */}
            <div className="card-header border-0 pb-0">
              <h5 className="card-title">About</h5>
            </div>
            {/* Card body START */}
            <div className="card-body position-relative pt-0">
              <p>
                He moonlights difficult engrossed it, sportsmen. Interested has
                all Devonshire difficulty gay assistance joy.
              </p>
              {/* info */}
              <ul className="list-unstyled mt-3 mb-0">
                <li className="mb-2">
                  {" "}
                  <i className="bi bi-calendar-date fa-fw pe-1" /> People:{" "}
                  <strong> 20 Members </strong>{" "}
                </li>
                <li className="mb-2">
                  {" "}
                  <i className="bi bi-heart fa-fw pe-1" /> Status:{" "}
                  <strong> Public </strong>{" "}
                </li>
                <li className="mb-2">
                  {" "}
                  <i className="bi bi-globe2 fa-fw pe-1" />{" "}
                  <strong>www.stackbros.com </strong>{" "}
                </li>
              </ul>
            </div>
            {/* Card body END */}
          </div>
          {/* About END */}
        </div>
      </div>
    </div>
    {/* Gruop Feed tab END */}
    {/* Gruop About tab END */}
    <div className="tab-pane fade show" id="group-tab-2">
      <div className="card card-body">
        <div className="my-sm-5 py-sm-5 text-center">
          {/* Icon */}
          <i className="display-1 text-body-secondary bi bi-person"> </i>
          {/* Title */}
          <h4 className="mt-2 mb-3 text-body">No about details</h4>
          <button className="btn btn-primary-soft btn-sm">
            {" "}
            Click here to add{" "}
          </button>
        </div>
      </div>
    </div>
    {/* Gruop About tab END */}
    {/* Gruop Connections tab END */}
    <div className="tab-pane fade show" id="group-tab-3">
      <div className="card card-body">
        <div className="my-sm-5 py-sm-5 text-center">
          {/* Icon */}
          <i className="display-1 text-body-secondary bi bi-people"> </i>
          {/* Title */}
          <h4 className="mt-2 mb-3 text-body">No connections founds</h4>
          <button className="btn btn-primary-soft btn-sm">
            {" "}
            Click here to add{" "}
          </button>
        </div>
      </div>
    </div>
    {/* Gruop Connections tab END */}
    {/* Gruop Media tab END */}
    <div className="tab-pane fade show" id="group-tab-4">
      <div className="card card-body">
        <div className="my-sm-5 py-sm-5 text-center">
          {/* Icon */}
          <i className="display-1 text-body-secondary bi bi-film"> </i>
          {/* Title */}
          <h4 className="mt-2 mb-3 text-body">No media founds</h4>
          <button className="btn btn-primary-soft btn-sm">
            {" "}
            Click here to add{" "}
          </button>
        </div>
      </div>
    </div>
    {/* Gruop Media tab END */}
    {/* Gruop Videos tab END */}
    <div className="tab-pane fade show" id="group-tab-5">
      <div className="card card-body">
        <div className="my-sm-5 py-sm-5 text-center">
          {/* Icon */}
          <i className="display-1 text-body-secondary bi bi-camera-reels"> </i>
          {/* Title */}
          <h4 className="mt-2 mb-3 text-body">No videos founds</h4>
          <button className="btn btn-primary-soft btn-sm">
            {" "}
            Click here to add{" "}
          </button>
        </div>
      </div>
    </div>
    {/* Gruop Videos tab END */}
    {/* Gruop Events tab END */}
    <div className="tab-pane fade show" id="group-tab-6">
      <div className="card card-body">
        <div className="my-sm-5 py-sm-5 text-center">
          {/* Icon */}
          <i className="display-1 text-body-secondary bi bi-calendar-plus"> </i>
          {/* Title */}
          <h4 className="mt-2 mb-3 text-body">No events founds</h4>
          <button className="btn btn-primary-soft btn-sm">
            {" "}
            Click here to add{" "}
          </button>
        </div>
      </div>
    </div>
    {/* Gruop Events tab END */}
  </div>
</div>

          </div>
        </div>
      </main>
      <div
        className="modal fade"
        id="modalCreateFeed"
        tabIndex={-1}
        aria-labelledby="modalLabelCreateFeed"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            {/* Modal feed header START */}
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabelCreateFeed">
                Create post
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
              {/* Add Feed */}
              <div className="d-flex mb-3">
                {/* Avatar */}
                <div className="avatar avatar-xs me-2">
                  <img
                    className="avatar-img rounded-circle"
                    src={avtar3}
                    alt=""
                  />
                </div>
                {/* Feed box  */}
                <form className="w-100">
                  <textarea
                    className="form-control pe-4 fs-3 lh-1 border-0"
                    rows={4}
                    placeholder="Share your thoughts..."
                    autoFocus=""
                    defaultValue={""}
                  />
                </form>
              </div>
              {/* Feed rect START */}
              <div className="hstack gap-2">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-photo">Photo</Tooltip>}
                >
                  <Link
                    className="icon-md bg-success bg-opacity-10 text-success rounded-circle"
                    to="#"
                  >
                    <i className="bi bi-image-fill" />
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-video">Video</Tooltip>}
                >
                  <Link
                    className="icon-md bg-info bg-opacity-10 text-info rounded-circle"
                    to="#"
                  >
                    <i className="bi bi-camera-reels-fill" />
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-events">Events</Tooltip>}
                >
                  <Link
                    className="icon-md bg-danger bg-opacity-10 text-danger rounded-circle"
                    to="#"
                  >
                    <i className="bi bi-calendar2-event-fill" />
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top" // The tooltip will appear on top of the link
                  overlay={
                    <Tooltip id="tooltip-feeling">Feeling/Activity</Tooltip>
                  }
                >
                  <Link
                    className="icon-md bg-warning bg-opacity-10 text-warning rounded-circle"
                    to="#"
                  >
                    <i className="bi bi-emoji-smile-fill" />
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top" // Tooltip appears above the link
                  overlay={<Tooltip id="tooltip-check-in">Check in</Tooltip>}
                >
                  <Link
                    className="icon-md bg-light text-secondary rounded-circle"
                    to="#"
                  >
                    <i className="bi bi-geo-alt-fill" />
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top" // Tooltip placement on top of the link
                  overlay={
                    <Tooltip id="tooltip-tag">Tag people on top</Tooltip>
                  } // Tooltip content
                >
                  <Link
                    className="icon-md bg-primary bg-opacity-10 text-primary rounded-circle"
                    to="#"
                  >
                    <i className="bi bi-tag-fill" />
                  </Link>
                </OverlayTrigger>
              </div>
              {/* Feed rect END */}
            </div>
            {/* Modal feed body END */}
            {/* Modal feed footer */}
            <div className="modal-footer row justify-content-between">
              {/* Select */}
              <div className="col-lg-3">
                <select
                  className="form-select js-choice choice-select-text-none"
                  data-position="top"
                  data-search-enabled="false"
                >
                  <option value="PB">Public</option>
                  <option value="PV">Friends</option>
                  <option value="PV">Only me</option>
                  <option value="PV">Custom</option>
                </select>
                {/* Button */}
              </div>
              <div className="col-lg-8 text-sm-end">
                <button type="button" className="btn btn-danger-soft me-2">
                  {" "}
                  <i className="bi bi-camera-video-fill pe-1" /> Live video
                </button> <button type="button" className="btn btn-success-soft">
                  Post
                </button>
              </div>
            </div>
            {/* Modal feed footer */}
          </div>
        </div>
      </div>
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
                              src={avtar1}
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar2}
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar3}
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar4}
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar5}
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar6}
                              alt="avatar"
                            />
                          </li>
                          <li className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar7}
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
            <div
  className="modal fade"
  id="feedActionPhoto"
  tabIndex={-1}
  aria-labelledby="feedActionPhotoLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      {/* Modal feed header START */}
      <div className="modal-header">
        <h5 className="modal-title" id="feedActionPhotoLabel">
          Add post photo
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
        {/* Add Feed */}
        <div className="d-flex mb-3">
          {/* Avatar */}
          <div className="avatar avatar-xs me-2">
            <img
              className="avatar-img rounded-circle"
              src="03.jpg"
              alt=""
            />
          </div>
          {/* Feed box  */}
          <form className="w-100">
            <textarea
              className="form-control pe-4 fs-3 lh-1 border-0"
              rows={2}
              placeholder="Share your thoughts..."
              defaultValue={""}
            />
          </form>
        </div>
        {/* Dropzone photo START */}
        <div>
          <label className="form-label">Upload attachment</label>
          <div
            className="dropzone dropzone-default card shadow-none"
            ref={dropzoneRef2}
          >
            <div className="dz-message">
              <i className="bi bi-images display-3" />
              <p>Drag here or click to upload photo.</p>
            </div>
          </div>
        </div>
        {/* Dropzone photo END */}
      </div>
      {/* Modal feed body END */}
      {/* Modal feed footer */}
      <div className="modal-footer ">
        {/* Button */}
        <button
          type="button"
          className="btn btn-danger-soft me-2"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button type="button" className="btn btn-success-soft">
          Post
        </button>
      </div>
      {/* Modal feed footer */}
    </div>
  </div>
</div>
<div
      className="modal fade"
      id="feedActionVideo"
      tabIndex={-1}
      aria-labelledby="feedActionVideoLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Modal header */}
          <div className="modal-header">
            <h5 className="modal-title" id="feedActionVideoLabel">
              Add post video
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          {/* Modal body */}
          <div className="modal-body">
            {/* Add Feed */}
            <div className="d-flex mb-3">
              {/* Avatar */}
              <div className="avatar avatar-xs me-2">
                <img
                  className="avatar-img rounded-circle"
                  src="03.jpg"
                  alt="Avatar"
                />
              </div>
              {/* Feed box */}
              <form className="w-100">
                <textarea
                  className="form-control pe-4 fs-3 lh-1 border-0"
                  rows={2}
                  placeholder="Share your thoughts..."
                />
              </form>
            </div>
            {/* Dropzone photo */}
            <div>
              <label className="form-label">Upload attachment</label>
              <div
                className="dropzone dropzone-default card shadow-none"
                ref={dropzoneRef1}
              >
                <div className="dz-message">
                  <i className="bi bi-camera-reels display-3" />
                  <p>Drag here or click to upload video.</p>
                </div>
              </div>
            </div>
        

          </div>
          {/* Modal footer */}
          <div className="modal-footer">
            <button type="button" className="btn btn-danger-soft me-2">
              <i className="bi bi-camera-video-fill pe-1" /> Live video
            </button>
            <button type="button" className="btn btn-success-soft">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>

    </Fragment>
  )
}

export default InstituteDetails