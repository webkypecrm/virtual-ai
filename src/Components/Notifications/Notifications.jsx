import React, { Fragment } from 'react'
import MainNav from '../../Main-Page/MainNav/MainNav'
import { Link } from 'react-router-dom'
import logo8 from "../../assets/images/logo/08.svg"

const Notifications = () => {
  return (
    <Fragment>
        <MainNav />
        <main>
  {/* Container START */}
  <div className="container">
    <div className="row g-4">
      {/* Main content START */}
      <div className="col-lg-8 mx-auto">
        {/* Card START */}
        <div className="card">
          <div className="card-header py-3 border-0 d-flex align-items-center justify-content-between">
            <h1 className="h5 mb-0">Notifications</h1>
            {/* Notification action START */}
            <div className="dropdown">
              <Link
                to="#"
                className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                id="cardNotiAction"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-three-dots" />
              </Link>
              {/* Card share action dropdown menu */}
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="cardNotiAction"
              >
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-check-lg fa-fw pe-2" />
                    Mark all read
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-bell-slash fa-fw pe-2" />
                    Push notifications{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    {" "}
                    <i className="bi bi-bell fa-fw pe-2" />
                    Email notifications{" "}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Notification action END */}
          </div>
          <div className="card-body p-2">
            <ul className="list-unstyled">
              {/* Notif item */}
              <li>
                <div className="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                  {/* Avatar */}
                  <div className="avatar text-center">
                    <img
                      className="avatar-img rounded-circle"
                      src="01.jpg"
                      alt=""
                    />
                  </div>
                  {/* Info */}
                  <div className="mx-sm-3 my-2 my-sm-0">
                    <p className="small mb-2">
                      <b>Judy Nguyen</b> sent you a friend request.
                    </p>
                    {/* Button */}
                    <div className="d-flex">
                      <button className="btn btn-sm py-1 btn-primary me-2">
                        Accept{" "}
                      </button>
                      <button className="btn btn-sm py-1 btn-danger-soft">
                        Delete{" "}
                      </button>
                    </div>
                  </div>
                  {/* Action */}
                  <div className="d-flex ms-auto">
                    <p className="small me-5 text-nowrap">Just now</p>
                    {/* Notification action START */}
                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                      <Link
                        to="#"
                        className="z-index-1 text-secondary btn position-relative py-0 px-2"
                        id="cardNotiAction1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card share action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardNotiAction1"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-trash fa-fw pe-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bell-slash fa-fw pe-2" />
                            Turn off{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-volume-mute fa-fw fs-5 pe-2" />
                            Mute Judy Nguyen{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Notification action END */}
                  </div>
                </div>
              </li>
              {/* Notif item */}
              <li>
                <div className="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                  {/* Avatar */}
                  <div className="avatar text-center">
                    <img
                      className="avatar-img rounded-circle"
                      src="02.jpg"
                      alt=""
                    />
                  </div>
                  {/* Info */}
                  <div className="mx-sm-3 my-2 my-sm-0">
                    <p className="small mb-2">
                      Wish <b>Amanda Reed</b> a happy birthday (Nov 12)
                    </p>
                    <button className="btn btn-sm btn-outline-light py-1 me-2">
                      Say happy birthday 🎂
                    </button>
                  </div>
                  {/* Action */}
                  <div className="d-flex ms-auto">
                    <p className="small me-5 text-nowrap">Just now</p>
                    {/* Notification action START */}
                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                      <Link
                        to="#"
                        className="z-index-1 text-secondary btn position-relative py-0 px-2"
                        id="cardNotiAction2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card share action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardNotiAction2"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-trash fa-fw pe-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bell-slash fa-fw pe-2" />
                            Turn off{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-volume-mute fa-fw fs-5 pe-2" />
                            Mute Judy Nguyen{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Notification action END */}
                  </div>
                </div>
              </li>
              {/* Notif item */}
              <li>
                <div className="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                  {/* Avatar */}
                  <div className="avatar text-center">
                    <div className="avatar-img rounded-circle bg-success">
                      <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">
                        WB
                      </span>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="mx-sm-3 my-2 my-sm-0">
                    <Link className="small text-body stretched-link" to="#!">
                      {" "}
                      Stackbros has 15 like and 1 new activity
                    </Link>
                  </div>
                  {/* Action */}
                  <div className="d-flex ms-auto">
                    <p className="small me-5 text-nowrap">2 min</p>
                    {/* Notification action START */}
                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                      <Link
                        to="#"
                        className="z-index-1 text-secondary btn position-relative py-0 px-2"
                        id="cardNotiAction3"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card share action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardNotiAction3"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-trash fa-fw pe-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bell-slash fa-fw pe-2" />
                            Turn off{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-volume-mute fa-fw fs-5 pe-2" />
                            Mute Judy Nguyen{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Notification action END */}
                  </div>
                </div>
              </li>
              {/* Notif item */}
              {/* Notif item */}
              <li>
                <div className="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                  {/* Avatar */}
                  <div className="avatar text-center">
                    <div className="avatar-img rounded-circle bg-success">
                      <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">
                        WB
                      </span>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="mx-sm-3 my-2 my-sm-0">
                    <Link className="stretched-link small text-body" to="#!">
                      <b>Bootstrap in the news:</b> The search giant’s parent
                      company, Alphabet, just joined an exclusive club of tech
                      stocks.
                    </Link>
                  </div>
                  {/* Action */}
                  <div className="d-flex ms-auto">
                    <p className="small me-5 text-nowrap">8min</p>
                    {/* Notification action START */}
                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                      <Link
                        to="#"
                        className="z-index-1 text-secondary btn position-relative py-0 px-2"
                        id="cardNotiAction5"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card share action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardNotiAction5"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-trash fa-fw pe-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bell-slash fa-fw pe-2" />
                            Turn off{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-volume-mute fa-fw fs-5 pe-2" />
                            Mute Judy Nguyen{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Notification action END */}
                  </div>
                </div>
              </li>
              {/* Notif item */}
              <li>
                <div className="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                  {/* Avatar */}
                  <div className="avatar text-center">
                    <img
                      className="avatar-img rounded-circle"
                      src="03.jpg"
                      alt=""
                    />
                  </div>
                  {/* Info */}
                  <div className="mx-sm-3 my-2 my-sm-0">
                    <p className="small mb-0">
                      <b>You have a Connection!</b>{" "}
                    </p>
                    <p className="small">
                      {" "}
                      <Link to="@!"> @Samuel Bishop</Link> joined project Blogzine
                      blog theme
                    </p>
                  </div>
                  {/* Action */}
                  <div className="d-flex ms-auto">
                    <p className="small me-5 text-nowrap">20min</p>
                    {/* Notification action START */}
                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                      <Link
                        to="#"
                        className="z-index-1 text-secondary btn position-relative py-0 px-2"
                        id="cardNotiAction6"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card share action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardNotiAction6"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-trash fa-fw pe-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bell-slash fa-fw pe-2" />
                            Turn off{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-volume-mute fa-fw fs-5 pe-2" />
                            Mute Judy Nguyen{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Notification action END */}
                  </div>
                </div>
              </li>
              {/* Notif item */}
              <li>
                <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                  {/* Avatar */}
                  <div className="avatar text-center">
                    <img
                      className="avatar-img rounded-circle"
                      src="04.jpg"
                      alt=""
                    />
                  </div>
                  {/* Info */}
                  <div className="mx-sm-3 my-2 my-sm-0">
                    <Link
                      to="#!"
                      className="stretched-link small mb-0 text-secondary"
                    >
                      <b>You have a Payout!</b>{" "}
                    </Link>
                    <p className="small mb-0">
                      Stackbros LLC has sent you $1205 USD
                    </p>
                  </div>
                  {/* Action */}
                  <div className="d-flex ms-auto">
                    <p className="small me-5 text-nowrap">3hrs</p>
                    {/* Notification action START */}
                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                      <Link
                        to="#"
                        className="z-index-1 text-secondary btn position-relative py-0 px-2"
                        id="cardNotiAction7"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card share action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardNotiAction7"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-trash fa-fw pe-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bell-slash fa-fw pe-2" />
                            Turn off{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-volume-mute fa-fw fs-5 pe-2" />
                            Mute Judy Nguyen{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Notification action END */}
                  </div>
                </div>
              </li>
              {/* Notif item */}
              <li>
                <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                  {/* Avatar */}
                  <div className="avatar text-center">
                    <img
                      className="avatar-img rounded-circle"
                      src={logo8}
                      alt=""
                    />
                  </div>
                  {/* Info */}
                  <div className="mx-sm-3 my-2 my-sm-0">
                    <p className="small mb-0">
                      <b>Order cancelled: #23685</b>{" "}
                    </p>
                    <p className="small mb-0">
                      Order #23685 belonging to Amanda Reed has been cancelled
                    </p>
                    <Link className="btn btn-link btn-sm" to="#!">
                      {" "}
                      <u> Review order </u>
                    </Link>
                  </div>
                  {/* Action */}
                  <div className="d-flex ms-auto">
                    <p className="small me-5 text-nowrap">5hrs</p>
                    {/* Notification action START */}
                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                      <Link
                        to="#"
                        className="z-index-1 text-secondary btn position-relative py-0 px-2"
                        id="cardNotiAction8"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card share action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardNotiAction8"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-trash fa-fw pe-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bell-slash fa-fw pe-2" />
                            Turn off{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-volume-mute fa-fw fs-5 pe-2" />
                            Mute Judy Nguyen{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Notification action END */}
                  </div>
                </div>
              </li>
              {/* Notif item */}
              <li>
                <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                  {/* Avatar */}
                  <div className="avatar text-center">
                    <img
                      className="avatar-img rounded-circle"
                      src="07.jpg"
                      alt=""
                    />
                  </div>
                  {/* Info */}
                  <div className="mx-sm-3 my-2 my-sm-0">
                    <p className="small m-0">
                      Congratulate <b>Joan Wallace</b> for graduating from{" "}
                      <b>Microverse university</b>
                    </p>
                    <p className="small mb-0">
                      Order #23685 belonging to Amanda Reed has been cancelled
                    </p>
                    <Link className="btn btn-link btn-sm" to="#!">
                      {" "}
                      <u> Say congrats </u>
                    </Link>
                  </div>
                  {/* Action */}
                  <div className="d-flex ms-auto">
                    <p className="small me-5 text-nowrap">5hrs</p>
                    {/* Notification action START */}
                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                      <Link
                        to="#"
                        className="z-index-1 text-secondary btn position-relative py-0 px-2"
                        id="cardNotiAction9"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots" />
                      </Link>
                      {/* Card share action dropdown menu */}
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardNotiAction9"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-trash fa-fw pe-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-bell-slash fa-fw pe-2" />
                            Turn off{" "}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            {" "}
                            <i className="bi bi-volume-mute fa-fw fs-5 pe-2" />
                            Mute Judy Nguyen{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Notification action END */}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="card-footer border-0 py-3 text-center position-relative d-grid pt-0">
            {/* Load more button START */}
            <Link
              to="#!"
              role="button"
              className="btn btn-loader btn-primary-soft"
              data-bs-toggle="button"
              aria-pressed="true"
            >
              <span className="load-text"> Load more notifications </span>
              <div className="load-icon">
                <div className="spinner-grow spinner-grow-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </Link>
            {/* Load more button END */}
          </div>
        </div>
        {/* Card END */}
      </div>
    </div>{" "}
    {/* Row END */}
  </div>
  {/* Container END */}
</main>

    </Fragment>
  )
}

export default Notifications