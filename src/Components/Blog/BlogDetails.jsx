import React, { Fragment } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import img1 from "../../assets/images/post/16by9/big/03.jpg";

const BlogDetails = () => {
  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 mx-auto">
              <div className="vstack gap-4">
                {/* Blog single START */}
                <div className="card card-body">
                  <img className="rounded" src={img1} alt="" />
                  <div className="mt-4">
                    {/* Tag */}
                    <a
                      href="#"
                      className="badge bg-danger bg-opacity-10 text-danger mb-2 fw-bold"
                    >
                      Lifestyle
                    </a>
                    {/* Title info */}
                    <h1 className="mb-2 h2">
                      New comment moderation and support features, including
                      live chat.
                    </h1>
                    <ul className="nav nav-stack gap-3 align-items-center">
                      <li className="nav-item">
                        <div className="nav-link">
                          by{" "}
                          <a href="#" className="text-reset btn-link">
                            Louis Ferguson
                          </a>
                        </div>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <i className="bi bi-calendar-date pe-1" />
                        Nov 15, 2022
                      </li>
                      <li className="nav-item">
                        {" "}
                        <i className="bi bi-clock pe-1" />5 min read
                      </li>
                    </ul>
                    {/* description */}
                    <p className="mt-4">
                      <span className="dropcap">A</span> pleasure exertion if
                      believed provided to. All led out world this music while
                      asked. Paid mind even sons does he door no. Attended
                      overcame repeated it is perceived Marianne in. I think on
                      style child of. Servants moreover in sensible it ye
                      possible.{" "}
                    </p>
                    <h4 className="mt-4">
                      The pros and cons of business agency
                    </h4>
                    {/* Row START */}
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <p>
                          Fulfilled direction use continual set him propriety
                          continued. Saw met applauded favorite deficient
                          engrossed concealed and her.{" "}
                        </p>
                        <p>
                          Concluded boy perpetual old supposing. Farther related
                          bed and passage comfort civilly. Dashwoods see
                          frankness objection abilities.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            Our Firmament living replenish Them Created after
                            divide said Have give
                          </li>
                          <li>
                            Dominion light without days face saw wherein land
                          </li>
                          <li>
                            Fifth have Seas made lights Very Day saw Seed herb
                            sixth light whales
                          </li>
                          <li>
                            Saying unto Place it seed you're Isn't heaven{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Row END */}
                    {/* Blockquote START */}
                    <figure className="bg-light rounded p-3 p-sm-4 my-4">
                      <blockquote className="blockquote">
                        <p>
                          Dashwood does provide stronger is. But discretion
                          frequently sir she instruments unaffected.
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        Albert Schweitzer
                      </figcaption>
                    </figure>
                    {/* Blockquote END */}
                    <p className="mb-0">
                      {" "}
                      All led out world this music while asked. Paid mind even
                      sons does he door no. Attended overcame repeated it is
                      perceived Marianne in. I think on style child of. Servants
                      moreover in sensible it ye possible. Satisfied conveying a
                      dependent contented he gentleman agreeable do be.{" "}
                    </p>
                  </div>
                </div>
                {/* Card END */}
                {/* Comments START */}
                <div className="card">
                  <div className="card-header pb-0 border-0">
                    <h4>5 comments</h4>
                  </div>
                  <div className="card-body">
                    {/* Comments START */}
                    {/* Comment level 1*/}
                    <div className="my-4 d-flex">
                      <img
                        className="avatar avatar-md rounded-circle float-start me-3"
                        src="04.jpg"
                        alt="avatar"
                      />
                      <div>
                        <div className="mb-2 d-sm-flex">
                          <h6 className="m-0 me-2">Allen Smith</h6>
                          <span className="me-3 small">
                            June 11, 2022 at 6:01 am{" "}
                          </span>
                        </div>
                        <p>
                          Satisfied conveying a dependent contented he gentleman
                          agreeable do be. Warrant private blushes removed an in
                          equally totally if.
                        </p>
                        <a href="#" className="btn btn-light btn-sm">
                          Reply
                        </a>
                      </div>
                    </div>
                    {/* Comment children level 3 */}
                    <div className="my-4 d-flex ps-3 ps-md-5">
                      <img
                        className="avatar avatar-md rounded-circle float-start me-3"
                        src="04.jpg"
                        alt="avatar"
                      />
                      <div>
                        <div className="mb-2 d-sm-flex">
                          <h6 className="m-0 me-2">Allen Smith</h6>
                          <span className="me-3 small">
                            June 11, 2022 at 7:10 am{" "}
                          </span>
                        </div>
                        <p>Meant balls it if up doubt small purse. </p>
                        <a href="#" className="btn btn-light btn-sm">
                          Reply
                        </a>
                      </div>
                    </div>
                    {/* Comment level 2 */}
                    <div className="mt-4 d-flex ps-2 ps-md-3">
                      <img
                        className="avatar avatar-md rounded-circle float-start me-3"
                        src="03.jpg"
                        alt="avatar"
                      />
                      <div>
                        <div className="mb-2 d-sm-flex">
                          <h6 className="m-0 me-2">Frances Guerrero</h6>
                          <span className="me-3 small">
                            June 14, 2022 at 12:35 pm{" "}
                          </span>
                        </div>
                        <p>
                          Required his you put the outlived answered position. A
                          pleasure exertion if believed provided to. All led out
                          world this music while asked.
                        </p>
                        <a href="#" className="btn btn-light btn-sm">
                          Reply
                        </a>
                      </div>
                    </div>
                    {/* Comments END */}
                    <hr className="my-4" />
                    {/* Reply START */}
                    <div>
                      <h4>Leave a reply</h4>
                      <form className="row g-3 mt-2">
                        {/* Name */}
                        <div className="col-md-6">
                          <label className="form-label">Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="First name"
                          />
                        </div>
                        {/* Email */}
                        <div className="col-md-6">
                          <label className="form-label">Email *</label>
                          <input type="email" className="form-control" />
                        </div>
                        {/* Your Comment */}
                        <div className="col-12">
                          <label className="form-label">Your Comment *</label>
                          <textarea
                            className="form-control"
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                        {/* custom checkbox */}
                        <div className="col-md-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Save my name and email in this browser for the
                              next time I comment.{" "}
                            </label>
                          </div>
                        </div>
                        {/* Button */}
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            Post comment
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* Reply END */}
                  </div>
                </div>
                {/* Blog single END */}
              </div>
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
                  <a className="nav-link" href="my-profile-about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" target="_blank" href="#">
                    Support{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="privacy-and-terms.html">
                    Privacy &amp; terms
                  </a>
                </li>
              </ul>
              {/* Footer nav START */}
            </div>
            <div className="col-md-6">
              {/* Copyright START */}
              <p className="text-center text-md-end mb-0">
                ©2024{" "}
                <a
                  className="text-body"
                  target="_blank"
                  href="https://stackbros.in/"
                >
                  {" "}
                  Stackbros{" "}
                </a>
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

export default BlogDetails;
