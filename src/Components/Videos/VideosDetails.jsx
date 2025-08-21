import React, { Fragment } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import { Link } from "react-router-dom";
import LeftSideBar2 from "../../ReuseComp/LeftSideBar2";

const VideosDetails = () => {
  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container-fluid">
          <div className="row g-4">
            <LeftSideBar2 />
            <div className="col-md-8 col-lg-9 vstack gap-4">
              {/* Video START */}
              <div className="card">
                {/* Card body START */}
                <div className="card-body">
                  {/* Video image */}
                  <iframe
                    className="rounded w-100"
                    height={450}
                    src="https://www.youtube.com/embed/n_Cn8eFo7u8"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  />
                  {/* Video Info START */}
                  <div className="d-flex my-3">
                    {/* Video title  */}
                    <div>
                      <h1 className="h4">
                        {" "}
                        What's it like to work at Google?{" "}
                      </h1>
                      <div className="d-flex">
                        {/* Avatar */}
                        <div className="avatar avatar-xxs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        {/* Avatar name */}
                        <h6 className="mb-0">
                          {" "}
                          <Link to="#!">
                            {" "}
                            Frances Guerrero{" "}
                            <i className="bi bi-patch-check-fill text-success small" />{" "}
                          </Link>{" "}
                        </h6>
                      </div>
                    </div>
                    {/* Dropdown START */}
                    <div className="dropdown ms-auto">
                      <Link
                        to="#"
                        className="text-secondary ms-2"
                        id="feedVideoActionEdit"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="feedVideoActionEdit"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bookmark fa-fw pe-1" /> Save
                            video
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-link-45deg fa-fw pe-1" /> Copy
                            link{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-x-circle fa-fw pe-1" /> Hide
                            post
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-slash-circle fa-fw pe-1" />{" "}
                            Block
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-flag fa-fw pe-1" /> Report post
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Dropdown END */}
                  </div>
                  {/* Video Info END */}
                  {/* Feed Video react START */}
                  <ul className="nav nav-stack small mt-4">
                    <li className="nav-item">
                      <Link className="nav-link active" to="#!">
                        {" "}
                        <i className="bi bi-hand-thumbs-up-fill pe-1" />
                        Liked (23K)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#!">
                        {" "}
                        <i className="bi bi-chat-fill pe-1" />
                        Comments (10K)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#!">
                        {" "}
                        <i className="bi bi-eye-fill pe-1" />
                        458M Views
                      </Link>
                    </li>
                    <li className="nav-item ms-sm-auto">
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="text-secondary"
                          id="feedvideoActionShare"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-reply-fill fa-flip-horizontal pe-1" />
                          Share (3K)
                        </Link>
                        {/* Dropdown menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="feedvideoActionShare"
                        >
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-envelope fa-fw pe-1" /> Send
                              via Direct Message
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-bookmark-check fa-fw pe-1" />{" "}
                              Bookmark{" "}
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-link fa-fw pe-1" /> Copy link
                              to post
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-share fa-fw pe-1" /> Share
                              post via …
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-code-slash fa-fw pe-1" />{" "}
                              Embed
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              {" "}
                              <i className="bi bi-pencil-square fa-fw pe-1" />{" "}
                              Share to News Feed
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  {/* Feed Video react END */}
                  {/* Add comment */}
                  <div className="d-flex my-3">
                    {/* Avatar */}
                    <div className="avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/03.jpg"
                        alt=""
                      />
                    </div>
                    {/* Comment box  */}
                    <form className="position-relative w-100">
                      <textarea
                        className="one form-control pe-4 bg-light"
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
                        {/* Avatar */}
                        <div className="avatar avatar-xs">
                          <Link to="#!">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/05.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="ms-2">
                          {/* Comment by */}
                          <div className="bg-light rounded-start-top-0 p-3 rounded">
                            <div className="d-flex justify-content-between">
                              <h6 className="mb-1">
                                {" "}
                                <Link to="#!"> Frances Guerrero </Link>
                              </h6>
                              <small className="ms-2">5hr</small>
                            </div>
                            <p className="small mb-0">
                              Removed demands expense account in outward tedious
                              do. Particular way thoroughly unaffected
                              projection.
                            </p>
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
                          <div className="d-flex">
                            {/* Avatar */}
                            <div className="avatar avatar-xs">
                              <Link to="#!">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/06.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                            {/* Comment by */}
                            <div className="ms-2">
                              <div className="bg-light p-3 rounded">
                                <div className="d-flex justify-content-between">
                                  <h6 className="mb-1">
                                    {" "}
                                    <Link to="#!"> Lori Stevens </Link>{" "}
                                  </h6>
                                  <small className="ms-2">2hr</small>
                                </div>
                                <p className="small mb-0">
                                  See resolved goodness felicity shy civility
                                  domestic had but Drawings offended yet
                                  answered Jennings perceive.
                                </p>
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
                          <div className="d-flex">
                            {/* Avatar */}
                            <div className="avatar avatar-story avatar-xs">
                              <Link to="#!">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/07.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                            {/* Comment by */}
                            <div className="ms-2">
                              <div className="bg-light p-3 rounded">
                                <div className="d-flex justify-content-between">
                                  <h6 className="mb-1">
                                    {" "}
                                    <Link to="#!"> Billy Vasquez </Link>{" "}
                                  </h6>
                                  <small className="ms-2">15min</small>
                                </div>
                                <p className="small mb-0">
                                  Wishing calling is warrant settled was lucky.
                                </p>
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
                              src="assets/images/avatar/05.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        {/* Comment by */}
                        <div className="ms-2">
                          <div className="bg-light p-3 rounded">
                            <div className="d-flex justify-content-between">
                              <h6 className="mb-1">
                                {" "}
                                <Link to="#!"> Frances Guerrero </Link>{" "}
                              </h6>
                              <small className="ms-2">4min</small>
                            </div>
                            <p className="small mb-0">
                              Removed demands expense account in outward tedious
                              do. Particular way thoroughly unaffected
                              projection.
                            </p>
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
                  {/* Card body END */}
                  {/* Card footer START */}
                  <div className="card-footer border-0 py-0">
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
              </div>
              {/* Video END */}
              {/* Card END */}
              <div className="card">
                {/* Card header START */}
                <div className="card-header border-0 pb-0">
                  <h5 className="card-title">Related Videos</h5>
                </div>
                {/* Card header START */}
                {/* Card body START */}
                <div className="card-body">
                  <div className="tiny-slider arrow-hover">
                    <div
                      className="tiny-slider-inner"
                      data-arrow="true"
                      data-dots="true"
                      data-loop="false"
                      data-autoplay="false"
                      data-items-xl={3}
                      data-items-lg={3}
                      data-items-md={2}
                      data-items-sm={2}
                      data-items-xs={1}
                      data-gutter={12}
                      data-edge={0}
                    >
                      {/* Slide item */}
                      <div>
                        {/* Video START */}
                        <div className="card p-0 shadow-none border-0 position-relative">
                          {/* Video image */}
                          <div className="position-relative">
                            <img
                              className="rounded"
                              src="assets/images/post/16by9/large/11.jpg"
                              alt=""
                            />
                            {/* Play icon */}
                            <div className="position-absolute top-0 end-0 p-3">
                              <Link
                                className="icon-md bg-danger text-white rounded-circle"
                                to="#"
                              >
                                {" "}
                                <i className="bi bi-play-fill fs-5"> </i>{" "}
                              </Link>
                            </div>
                            {/* Duration */}
                            <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                              <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                                10:20
                              </span>
                              <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                                1 min ago
                              </span>
                            </div>
                          </div>
                          {/* Video info */}
                          <div className="card-body pb-0 px-0">
                            <div className="d-flex align-items-center mb-3">
                              {/* Avatar */}
                              <div className="avatar avatar-xxs me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/01.jpg"
                                  alt=""
                                />
                              </div>
                              {/* Avatar name */}
                              <h6 className="mb-0">
                                {" "}
                                <Link to="#!">
                                  {" "}
                                  Frances Guerrero{" "}
                                  <i className="bi bi-patch-check-fill text-success small" />{" "}
                                </Link>{" "}
                              </h6>
                              <span className="ms-auto small">
                                {" "}
                                156.9K views
                              </span>
                            </div>
                            {/* Video title  */}
                            <h6 className="mb-0">
                              {" "}
                              <Link
                                className="stretched-link"
                                to="post-video-details.html"
                              >
                                {" "}
                                8 shocking bitcoin crypto predictions for 2022{" "}
                              </Link>{" "}
                            </h6>
                          </div>
                        </div>
                        {/* Video END */}
                      </div>
                      {/* Slide item END */}
                      {/* Slide item START */}
                      <div>
                        {/* Video START */}
                        <div className="card p-0 shadow-none border-0 position-relative">
                          {/* Video image */}
                          <div className="position-relative">
                            <img
                              className="rounded"
                              src="assets/images/post/16by9/large/12.jpg"
                              alt=""
                            />
                            {/* Play icon */}
                            <div className="position-absolute top-0 end-0 p-3">
                              <Link
                                className="icon-md bg-danger text-white rounded-circle"
                                to="#"
                              >
                                {" "}
                                <i className="bi bi-play-fill fs-5"> </i>{" "}
                              </Link>
                            </div>
                            {/* Duration */}
                            <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                              <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                                05:10
                              </span>
                              <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                                25 min ago
                              </span>
                            </div>
                          </div>
                          {/* Video info */}
                          <div className="card-body pb-0 px-0">
                            <div className="d-flex align-items-center mb-3">
                              {/* Avatar */}
                              <div className="avatar avatar-xxs me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/02.jpg"
                                  alt=""
                                />
                              </div>
                              {/* Avatar name */}
                              <h6 className="mb-0">
                                {" "}
                                <Link to="#!">
                                  {" "}
                                  Lori Ferguson{" "}
                                  <i className="bi bi-patch-check-fill text-success small" />{" "}
                                </Link>{" "}
                              </h6>
                              <span className="ms-auto small">
                                {" "}
                                156.9K views
                              </span>
                            </div>
                            {/* Video title  */}
                            <h6 className="mb-0">
                              {" "}
                              <Link
                                className="stretched-link"
                                to="post-video-details.html"
                              >
                                {" "}
                                A trading platform - an easy start in trading{" "}
                              </Link>{" "}
                            </h6>
                          </div>
                        </div>
                        {/* Video END */}
                      </div>
                      {/* Slide item END */}
                      {/* Slide item START */}
                      <div>
                        {/* Video START */}
                        <div className="card p-0 shadow-none border-0 position-relative">
                          {/* Video image */}
                          <div className="position-relative">
                            <img
                              className="rounded"
                              src="assets/images/post/16by9/large/13.jpg"
                              alt=""
                            />
                            {/* Play icon */}
                            <div className="position-absolute top-0 end-0 p-3">
                              <Link
                                className="icon-md bg-danger text-white rounded-circle"
                                to="#"
                              >
                                {" "}
                                <i className="bi bi-play-fill fs-5"> </i>{" "}
                              </Link>
                            </div>
                            {/* Duration */}
                            <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                              <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                                03:40
                              </span>
                              <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                                50 min ago
                              </span>
                            </div>
                          </div>
                          {/* Video info */}
                          <div className="card-body pb-0 px-0">
                            <div className="d-flex align-items-center mb-3">
                              {/* Avatar */}
                              <div className="avatar avatar-xxs me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/03.jpg"
                                  alt=""
                                />
                              </div>
                              {/* Avatar name */}
                              <h6 className="mb-0">
                                {" "}
                                <Link to="#!"> Louis Crawford </Link>{" "}
                              </h6>
                              <span className="ms-auto small">
                                {" "}
                                156.9K views
                              </span>
                            </div>
                            {/* Video title  */}
                            <h6 className="mb-0">
                              {" "}
                              <Link
                                className="stretched-link"
                                to="post-video-details.html"
                              >
                                {" "}
                                One of the greatest speeches ever | Steve Jobs{" "}
                              </Link>{" "}
                            </h6>
                          </div>
                        </div>
                        {/* Video END */}
                      </div>
                      {/* Slide item END */}
                      {/* Slide item START */}
                      <div>
                        {/* Video START */}
                        <div className="card p-0 shadow-none border-0 position-relative">
                          {/* Video image */}
                          <div className="position-relative">
                            <img
                              className="rounded"
                              src="assets/images/post/16by9/large/14.jpg"
                              alt=""
                            />
                            {/* Play icon */}
                            <div className="position-absolute top-0 end-0 p-3">
                              <Link
                                className="icon-md bg-danger text-white rounded-circle"
                                to="#"
                              >
                                {" "}
                                <i className="bi bi-play-fill fs-5"> </i>{" "}
                              </Link>
                            </div>
                            {/* Duration */}
                            <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                              <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                                06:12
                              </span>
                              <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                                1 week ago
                              </span>
                            </div>
                          </div>
                          {/* Video info */}
                          <div className="card-body pb-0 px-0">
                            <div className="d-flex align-items-center mb-3">
                              {/* Avatar */}
                              <div className="avatar avatar-xxs me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/04.jpg"
                                  alt=""
                                />
                              </div>
                              {/* Avatar name */}
                              <h6 className="mb-0">
                                {" "}
                                <Link to="#!"> Larry Lawson </Link>{" "}
                              </h6>
                              <span className="ms-auto small">
                                {" "}
                                156.9K views
                              </span>
                            </div>
                            {/* Video title  */}
                            <h6 className="mb-0">
                              {" "}
                              <Link
                                className="stretched-link"
                                to="post-video-details.html"
                              >
                                {" "}
                                A trading platform - an easy start in trading{" "}
                              </Link>{" "}
                            </h6>
                          </div>
                        </div>
                        {/* Video END */}
                      </div>
                      {/* Slide item END */}
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default VideosDetails;
