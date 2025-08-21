import React, { Fragment } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import { Link } from "react-router-dom";
import LeftSideBar2 from "../../ReuseComp/LeftSideBar2";

const Videos = () => {
  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container-fluid">
          <div className="row g-4">
            <LeftSideBar2 />
            <div className="col-md-8 col-lg-6 vstack gap-4">
              {/* Card START */}
              <div className="card">
                {/* Card header START */}
                <div className="card-header d-sm-flex align-items-center justify-content-between border-0 pb-0">
                  <h1 className="h4 card-title">Videos</h1>
                  {/* Button modal */}
                  <Link
                    className="btn btn-primary-soft"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#modalCreateVideo"
                  >
                    {" "}
                    <i className="fa-solid fa-plus pe-1" /> Add video
                  </Link>
                </div>
                {/* Card header START */}
                {/* Card body START */}
                <div className="card-body">
                  {/* Tab nav line */}
                  <ul className="nav nav-tabs nav-bottom-line">
                    <li className="nav-item">
                      {" "}
                      <Link
                        className="nav-link active"
                        data-bs-toggle="tab"
                        to="#tab-1"
                      >
                        {" "}
                        Home{" "}
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
                        Live{" "}
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
                        Show{" "}
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
                        Saved video{" "}
                      </Link>{" "}
                    </li>
                  </ul>
                  <div className="tab-content mb-0 pb-0">
                    {/* Home tab START */}
                    <div className="tab-pane fade show active" id="tab-1">
                      <div className="row g-3">
                        <div className="col-sm-6 col-lg-4">
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
                            <div className="card-body px-0">
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
                                  <Link to="#!"> Frances Guerrero </Link>{" "}
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
                                  to="/videos-details"
                                >
                                  {" "}
                                  New movie trailers (2021 - 2022) September{" "}
                                </Link>{" "}
                              </h6>
                            </div>
                          </div>
                          {/* Video END */}
                        </div>
                        <div className="col-sm-6 col-lg-4">
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
                            <div className="card-body px-0">
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
                                  to="/videos-details"
                                >
                                  {" "}
                                  Learn web development as an absolute beginner
                                </Link>{" "}
                              </h6>
                            </div>
                          </div>
                          {/* Video END */}
                        </div>
                        <div className="col-sm-6 col-lg-4">
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
                            <div className="card-body px-0">
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
                                  to="/videos-details"
                                >
                                  {" "}
                                  Python tutorial - Python for beginners [full
                                  course]{" "}
                                </Link>{" "}
                              </h6>
                            </div>
                          </div>
                          {/* Video END */}
                        </div>
                        <div className="col-sm-6 col-lg-4">
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
                            <div className="card-body px-0">
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
                                  to="/videos-details"
                                >
                                  {" "}
                                  One of the greatest speeches ever | Steve Jobs{" "}
                                </Link>{" "}
                              </h6>
                            </div>
                          </div>
                          {/* Video END */}
                        </div>
                        <div className="col-sm-6 col-lg-4">
                          {/* Video START */}
                          <div className="card p-0 shadow-none border-0 position-relative">
                            {/* Video image */}
                            <div className="position-relative">
                              <img
                                className="rounded"
                                src="assets/images/post/16by9/large/15.jpg"
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
                                  03:45
                                </span>
                                <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                                  2 week ago
                                </span>
                              </div>
                            </div>
                            {/* Video info */}
                            <div className="card-body px-0">
                              <div className="d-flex align-items-center mb-3">
                                {/* Avatar */}
                                <div className="avatar avatar-xxs me-2">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/images/avatar/05.jpg"
                                    alt=""
                                  />
                                </div>
                                {/* Avatar name */}
                                <h6 className="mb-0">
                                  {" "}
                                  <Link to="#!"> Joan Wallace </Link>{" "}
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
                                  to="/videos-details"
                                >
                                  {" "}
                                  A trading platform - an easy start in trading{" "}
                                </Link>{" "}
                              </h6>
                            </div>
                          </div>
                          {/* Video END */}
                        </div>
                      </div>
                    </div>
                    {/* Home tab END */}
                    {/* Live tab START */}
                    <div className="tab-pane fade" id="tab-2">
                      <div className="row g-3">
                        <div className="col-sm-6 col-lg-4">
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
                                  10:20
                                </span>
                                <span className="bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto">
                                  1 min ago
                                </span>
                              </div>
                            </div>
                            {/* Video info */}
                            <div className="card-body px-0">
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
                                  to="/videos-details"
                                >
                                  {" "}
                                  8 shocking bitcoin crypto predictions for 2022{" "}
                                </Link>{" "}
                              </h6>
                            </div>
                          </div>
                          {/* Video END */}
                        </div>
                      </div>
                    </div>
                    {/* Live tab END */}
                    {/* Show tab START */}
                    <div className="tab-pane fade" id="tab-3">
                      {/* Add Video */}
                      <div className="my-sm-5 py-sm-5 text-center">
                        <i className="display-1 text-body-secondary bi bi-camera-reels">
                          {" "}
                        </i>
                        <h4 className="mt-2 mb-3 text-body">No video founds</h4>
                        <button
                          className="btn btn-primary-soft btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#modalCreateVideo"
                        >
                          {" "}
                          Click here to add{" "}
                        </button>
                      </div>
                    </div>
                    {/* Show tab END */}
                    {/* Saved video START */}
                    <div className="tab-pane fade" id="tab-4">
                      {/* Add Video */}
                      <div className="my-sm-5 py-sm-5 text-center">
                        <i className="display-1 text-body-secondary bi bi-camera-reels">
                          {" "}
                        </i>
                        <h4 className="mt-2 mb-3 text-body">No video founds</h4>
                        <button
                          className="btn btn-primary-soft btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#modalCreateVideo"
                        >
                          {" "}
                          Click here to add{" "}
                        </button>
                      </div>
                    </div>
                    {/* Saved video END */}
                  </div>
                </div>
                {/* Card body END */}
              </div>
              {/* Card END */}
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
  );
};

export default Videos;
