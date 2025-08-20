import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import avtar1 from "../../assets/images/avatar/01.jpg";
import placeholderavtar from "../../assets/images/avatar/placeholder.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import avtar4 from "../../assets/images/avatar/04.jpg";
import avtar5 from "../../assets/images/avatar/05.jpg";
import avtar11 from "../../assets/images/avatar/11.jpg";

const RightSidebar = () => {
  return (
    <Fragment>
          {/* <!-- Right sidebar START --> */}
          <div className="col-lg-3">
              <div className="row g-4">
                {/* Card follow START */}
                <div className="col-sm-6 col-lg-12">
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header pb-0 border-0">
                      <h5 className="card-title mb-0">Brokers near by</h5>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className="card-body">
                      {/* Connection item START */}
                      <div className="hstack gap-2 mb-3">
                        {/* Avatar */}
                        <div className="avatar">
                          <Link to="#!">
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar4}
                              alt=""
                            />
                          </Link>
                        </div>
                        {/* Title */}
                        <div className="overflow-hidden">
                          <Link
                            className="h6 mb-0"
                            to="#!"
                            style={{ fontSize: 13 }}
                          >
                            Rahul Chaudhary{" "}
                          </Link>
                          <p className="mb-0 small text-truncate">
                            Realty Dart
                          </p>
                        </div>
                        {/* Button */}
                        <Link
                          className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                          to="#"
                        >
                          {/* <i className="fa-solid fa-plus"> </i> */}
                          <FontAwesomeIcon icon={faPlus} />
                        </Link>
                      </div>
                      {/* Connection item END */}
                      {/* Connection item START */}
                      <div className="hstack gap-2 mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-story">
                          <Link to="#!">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar5}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Title */}
                        <div className="overflow-hidden">
                          <Link
                            className="h6 mb-0"
                            to="#!"
                            style={{ fontSize: 13 }}
                          >
                            Shakti Pratap
                          </Link>
                          <p className="mb-0 small text-truncate">AMRS</p>
                        </div>
                        {/* Button */}
                        <Link
                          className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                          to="#"
                        >
                          {/* <i className="fa-solid fa-plus"> </i> */}
                          <FontAwesomeIcon icon={faPlus} />
                        </Link>
                      </div>
                      {/* Connection item END */}
                      {/* Connection item START */}
                      <div className="hstack gap-2 mb-3">
                        {/* Avatar */}
                        <div className="avatar">
                          <Link to="#">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar11}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Title */}
                        <div className="overflow-hidden">
                          <Link
                            className="h6 mb-0"
                            to="#!"
                            style={{ fontSize: 13 }}
                          >
                            Mariyan Chandel{" "}
                          </Link>
                          <p className="mb-0 small text-truncate">Nobroker</p>
                        </div>
                        {/* Button */}
                        <Link
                          className="btn btn-primary rounded-circle icon-md ms-auto"
                          to="#"
                        >
                          <i className="bi bi-person-check-fill"> </i>
                        </Link>
                      </div>
                      {/* Connection item END */}
                      {/* Connection item START */}
                      <div className="hstack gap-2 mb-3">
                        {/* Avatar */}
                        <div className="avatar">
                          <Link to="#">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={avtar1}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Title */}
                        <div className="overflow-hidden">
                          <Link
                            className="h6 mb-0"
                            to="#!"
                            style={{ fontSize: 13 }}
                          >
                            Gajendra Chandel
                          </Link>
                          <p className="mb-0 small text-truncate">Webkype</p>
                        </div>
                        {/* Button */}
                        <Link
                          className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                          to="#"
                        >
                          {/* <i className="fa-solid fa-plus"> </i> */}
                          <FontAwesomeIcon icon={faPlus} />
                        </Link>
                      </div>
                      {/* Connection item END */}
                      {/* Connection item START */}
                      <div className="hstack gap-2 mb-3">
                        {/* Avatar */}
                        <div className="avatar">
                          <Link to="#">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={placeholderavtar}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Title */}
                        <div className="overflow-hidden">
                          <Link
                            className="h6 mb-0"
                            to="#!"
                            style={{ fontSize: 13 }}
                          >
                            Ankit Singh{" "}
                          </Link>
                          <p className="mb-0 small text-truncate">99acres</p>
                        </div>
                        {/* Button */}
                        <Link
                          className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                          to="#"
                        >
                          {/* <i className="fa-solid fa-plus"> </i> */}
                          <FontAwesomeIcon icon={faPlus} />
                        </Link>
                      </div>
                      {/* Connection item END */}
                      {/* View more button */}
                      <div className="d-grid mt-3">
                        <Link className="btn btn-sm btn-primary-soft" to="#!">
                          View more
                        </Link>
                      </div>
                    </div>
                    {/* Card body END */}
                  </div>
                </div>
                {/* Card follow START */}
                {/* Card News START */}
                <div className="col-sm-6 col-lg-12">
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header pb-0 border-0">
                      <h5 className="card-title mb-0">Today’s news</h5>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className="card-body">
                      {/* News item */}
                      <div className="mb-3">
                        <h6 className="mb-0">
                          <Link to="blog-details.html">
                            Ten questions you should answer truthfully
                          </Link>
                        </h6>
                        <small>2hr</small>
                      </div>
                      {/* News item */}
                      <div className="mb-3">
                        <h6 className="mb-0">
                          <Link to="blog-details.html">
                            Five unbelievable facts about money
                          </Link>
                        </h6>
                        <small>3hr</small>
                      </div>
                      {/* News item */}
                      <div className="mb-3">
                        <h6 className="mb-0">
                          <Link to="blog-details.html">
                            Best Pinterest Boards for learning about business
                          </Link>
                        </h6>
                        <small>4hr</small>
                      </div>
                      {/* News item */}
                      <div className="mb-3">
                        <h6 className="mb-0">
                          <Link to="blog-details.html">
                            Skills that you can learn from business
                          </Link>
                        </h6>
                        <small>6hr</small>
                      </div>
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
                        View all latest news
                      </Link>
                    </div>
                    {/* Card body END */}
                  </div>
                </div>
                {/* Card News END */}
              </div>
            </div>
            {/*  Right sidebar END  */}
    </Fragment>
  )
}

export default RightSidebar