import React, { Fragment } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import post3 from "../../assets/images/post/4by3/03.jpg";
import post4 from "../../assets/images/post/4by3/04.jpg";
import post5 from "../../assets/images/post/4by3/05.jpg";
import post6 from "../../assets/images/post/4by3/06.jpg";
import avtar11 from "../../assets/images/avatar/11.jpg";
import avtar1 from "../../assets/images/avatar/01.jpg";
import placeholder from "../../assets/images/avatar/placeholder.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="bg-mode p-4">
                <h1 className="h4 mb-4">Latest blogs</h1>
                {/* Blog item START */}
                <div className="card bg-transparent border-0">
                  <div className="row g-3">
                    <div className="col-4">
                      {/* Blog image */}
                      <img className="rounded" src={post3} alt="" />
                    </div>
                    <div className="col-8">
                      {/* Blog caption */}
                      <Link
                        to="/blog-details"
                        className="badge bg-danger bg-opacity-10 text-danger mb-2 fw-bold"
                      >
                        Lifestyle
                      </Link>
                      <h5>
                        <Link
                          to="/blog-details"
                          className="btn-link stretched-link text-reset fw-bold"
                        >
                          Social guides the way in 2022 app performance report
                        </Link>
                      </h5>
                      <div className="d-none d-sm-inline-block">
                        <p className="mb-2">
                          Speedily say has suitable disposal add boy. On forth
                          doubt miles of child. Exercise joy man children
                          rejoiced.
                        </p>
                        {/* BLog date */}
                        <Link className="small text-secondary" to="/blog-details">
                          {" "}
                          <i className="bi bi-calendar-date pe-1" /> Jan 22,
                          2022
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Blog item END */}
                <hr className="my-4" />
                {/* Blog item START */}
                <div className="card bg-transparent border-0">
                  <div className="row g-3">
                    <div className="col-4">
                      {/* Blog image */}
                      <img className="rounded" src={post4} alt="" />
                    </div>
                    <div className="col-8">
                      {/* Blog caption */}
                      <Link
                        to="#"
                        className="badge bg-info bg-opacity-10 text-info mb-2 fw-bold"
                      >
                        Sports
                      </Link>
                      <h5>
                        <Link
                          to="blog-details.html"
                          className="btn-link stretched-link text-reset fw-bold"
                        >
                          Upcoming live video feed may not work how you expect
                        </Link>
                      </h5>
                      <div className="d-none d-sm-inline-block">
                        <p className="mb-2">
                          Under folly balls, death own point now men. Match way
                          these she avoids seeing death.
                        </p>
                        {/* BLog date */}
                        <Link className="small text-secondary" to="#!">
                          {" "}
                          <i className="bi bi-calendar-date pe-1" /> Mar 07,
                          2022
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Blog item END */}
                <hr className="my-4" />
                {/* Blog item START */}
                <div className="card bg-transparent border-0">
                  <div className="row g-3">
                    <div className="col-4">
                      {/* Blog image */}
                      <img className="rounded" src={post5} alt="" />
                    </div>
                    <div className="col-8">
                      {/* Blog caption */}
                      <Link
                        to="#"
                        className="badge bg-success bg-opacity-10 text-success mb-2 fw-bold"
                      >
                        Business
                      </Link>
                      <h5>
                        <Link
                          to="blog-details.html"
                          className="btn-link stretched-link text-reset fw-bold"
                        >
                          Google shares top search trends of 2022
                        </Link>
                      </h5>
                      <div className="d-none d-sm-inline-block">
                        <p className="mb-2">
                          I think on style child of. Servants moreover in
                          sensible it ye possible six say his.{" "}
                        </p>
                        {/* BLog date */}
                        <Link className="small text-secondary" to="#!">
                          {" "}
                          <i className="bi bi-calendar-date pe-1" /> Jun 17,
                          2022
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Blog item END */}
                <hr className="my-4" />
                {/* Blog item START */}
                <div className="card bg-transparent border-0">
                  <div className="row g-3">
                    <div className="col-4">
                      {/* Blog image */}
                      <img className="rounded" src={post6} alt="" />
                    </div>
                    <div className="col-8">
                      {/* Blog caption */}
                      <Link
                        to="#"
                        className="badge bg-warning bg-opacity-10 text-warning mb-2 fw-bold"
                      >
                        Technology
                      </Link>
                      <h5>
                        <Link
                          to="blog-details.html"
                          className="btn-link stretched-link text-reset fw-bold"
                        >
                          Counts reels replies, delivering another way to tap
                          into the video
                        </Link>
                      </h5>
                      <div className="d-none d-sm-inline-block">
                        <p className="mb-2">
                          Placing forming nay looking old married few has.
                          Margaret disposed of add screened rendered.{" "}
                        </p>
                        {/* BLog date */}
                        <Link className="small text-secondary" to="#!">
                          {" "}
                          <i className="bi bi-calendar-date pe-1" /> Nov 11,
                          2022
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Blog item END */}
                {/* Pagination */}
                <div className="mt-4">
                  <nav aria-label="navigation">
                    <ul className="pagination pagination-light d-inline-block d-md-flex justify-content-center">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#">
                          Prev
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item disabled">
                        <Link className="page-link" to="#">
                          ...
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          15
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-4">
                {/* Card News START */}
                <div className="col-sm-6 col-lg-12">
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header pb-0 border-0">
                      <h5 className="card-title mb-0">Recent post</h5>
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
                {/* Card News START */}
                <div className="col-sm-6 col-lg-12">
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header pb-0 border-0">
                      <h5 className="card-title mb-0">Tags</h5>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className="card-body">
                      {/* Tag list START */}
                      <ul className="list-inline mb-0 d-flex flex-wrap gap-2">
                        <li className="list-inline-item m-0">
                          <Link className="btn btn-outline-light btn-sm" to="#">
                            blog
                          </Link>
                        </li>
                        <li className="list-inline-item m-0">
                          <Link className="btn btn-outline-light btn-sm" to="#">
                            business
                          </Link>
                        </li>
                        <li className="list-inline-item m-0">
                          <Link className="btn btn-outline-light btn-sm" to="#">
                            theme
                          </Link>
                        </li>
                        <li className="list-inline-item m-0">
                          <Link className="btn btn-outline-light btn-sm" to="#">
                            social
                          </Link>
                        </li>
                        <li className="list-inline-item m-0">
                          <Link className="btn btn-outline-light btn-sm" to="#">
                            getbootstrap
                          </Link>
                        </li>
                        <li className="list-inline-item m-0">
                          <Link className="btn btn-outline-light btn-sm" to="#">
                            design
                          </Link>
                        </li>
                        <li className="list-inline-item m-0">
                          <Link className="btn btn-outline-light btn-sm" to="#">
                            news
                          </Link>
                        </li>
                        <li className="list-inline-item m-0">
                          <Link className="btn btn-outline-light btn-sm" to="#">
                            magazine
                          </Link>
                        </li>
                        <li className="list-inline-item m-0">
                          <Link className="btn btn-outline-light btn-sm" to="#">
                            events
                          </Link>
                        </li>
                      </ul>
                      {/* Tag list END */}
                      {/* Card body END */}
                    </div>
                  </div>
                  {/* Card News END */}
                </div>
                {/* Card follow START */}
                <div className="col-sm-6 col-lg-12">
                  <div className="card">
                    {/* Card header START */}
                    <div className="card-header pb-0 border-0">
                      <h5 className="card-title mb-0">Who to follow</h5>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className="card-body">
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
                          <Link className="h6 mb-0" to="#!">
                            Billy Vasquez{" "}
                          </Link>
                          <p className="mb-0 small text-truncate">
                            News anchor
                          </p>
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
                          <Link className="h6 mb-0" to="#!">
                            Lori Ferguson{" "}
                          </Link>
                          <p className="mb-0 small text-truncate">
                            Web Developer at Stackbros
                          </p>
                        </div>
                        {/* Button */}
                        <Link
                          className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                          to="#"
                        >
                          <i className="fa-solid fa-plus"> </i>
                        </Link>
                      </div>
                      {/* Connection item END */}
                      {/* Connection item START */}
                      <div className="hstack gap-2">
                        {/* Avatar */}
                        <div className="avatar">
                          <Link to="#">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src={placeholder}
                              alt=""
                            />{" "}
                          </Link>
                        </div>
                        {/* Title */}
                        <div className="overflow-hidden">
                          <Link className="h6 mb-0" to="#!">
                            Carolyn Ortiz{" "}
                          </Link>
                          <p className="mb-0 small text-truncate">
                            News anchor
                          </p>
                        </div>
                        {/* Button */}
                        <Link
                          className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                          to="#"
                        >
                          <i className="fa-solid fa-plus"> </i>
                        </Link>
                      </div>
                      {/* Connection item END */}
                    </div>
                    {/* Card body END */}
                  </div>
                </div>
                {/* Card follow START */}
              </div>
              {/* Right sidebar END */}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-mode py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* Footer nav START */}
              <ul className="nav justify-content-center justify-content-md-start lh-1">
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
                  <Link className="nav-link" to="privacy-and-terms.html">
                    Privacy &amp; terms
                  </Link>
                </li>
              </ul>
              {/* Footer nav START */}
            </div>
            <div className="col-md-6">
              {/* Copyright START */}
              <p className="text-center text-md-end mb-0">
                ©2024{" "}
                <Link
                  className="text-body"
                  target="_blank"
                  to="https://stackbros.in/"
                >
                  {" "}
                  Stackbros{" "}
                </Link>
                All rights reserved.
              </p>
              {/* Copyright END */}
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Blog;
