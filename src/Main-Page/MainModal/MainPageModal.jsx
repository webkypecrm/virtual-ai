import React, { Fragment, useEffect, useState } from "react";
import avtar3 from "../../assets/images/avatar/03.jpg";
import avtar2 from "../../assets/images/avatar/02.jpg";
import avtar1 from "../../assets/images/avatar/01.jpg";
import avtar4 from "../../assets/images/avatar/04.jpg";
import avtar5 from "../../assets/images/avatar/05.jpg";
import avtar6 from "../../assets/images/avatar/06.jpg";
import avtar7 from "../../assets/images/avatar/07.jpg";
import png1 from "../../assets/images/post/property/commercial.png";
import png2 from "../../assets/images/post/property/ressidentail.png";
import png3 from "../../assets/images/post/property/maps-and-location.png";
import { Link } from "react-router-dom";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Dropzone from "dropzone";

const MainPageModal = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


// uplode file
  useEffect(() => {
    const dropzoneElement = document.getElementById("file-dropzone");
    if (dropzoneElement && !dropzoneElement.dropzone) {
      const myDropzone = new Dropzone(dropzoneElement, {
        url: "/upload",
        maxFiles: 1,
        maxFilesize: 5,
        addRemoveLinks: true,
        acceptedFiles: ".pdf,.doc,.docx,.jpg,.png",
        autoProcessQueue: true, 
        dictDefaultMessage:
          "Drop presentation and document here or click to upload.",
        
      });

      // Optional event listeners
      myDropzone.on("addedfile", (file) => {
        console.log("File added:", file);
      });

      myDropzone.on("removedfile", (file) => {
        console.log("File removed:", file);
      });

      myDropzone.on("success", (file, response) => {
        console.log("File uploaded successfully:", response);
      });

      myDropzone.on("error", (file, errorMessage) => {
        console.error("Error uploading file:", errorMessage);
      });
    }

    // Cleanup Dropzone on unmount
    return () => {
      if (dropzoneElement && dropzoneElement.dropzone) {
        dropzoneElement.dropzone.destroy(); // Clean up Dropzone instance
      }
    };
  }, []);
  return (
    <Fragment>
      {/* Modal create Activity */}
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
      {/* Modal create Activity */}
      {/* Modal create Requiremet */}
      <div
        className="modal fade"
        id="feedActionPhoto"
        tabIndex={-1}
        aria-labelledby="feedActionPhotoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            {/* Modal feed header START */}
            <div className="modal-header">
              <h5 className="modal-title" id="feedActionPhotoLabel">
                Real Estate Requirement Form
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
              <div className="d-flex">
                <div className="form-container w-100">
                  <form className="form">
                    {/* Property Category */}
                    <div className="form-group">
                      <label className="form-label">Property Category:</label>
                      <div
                        className="btn-group property-categories"
                        role="group"
                      >
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertyCategory"
                          id="Category1"
                          defaultValue="Commercial"
                          autoComplete="off"
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="Category1"
                        >
                          <img src={png1} alt="" /> <span >Commercial</span>
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertyCategory"
                          id="Category2"
                          defaultValue="Residential"
                          autoComplete="off"
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="Category2"
                        >
                          <img src={png2} alt="" /> <span>Residential</span>
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertyCategory"
                          id="Category3"
                          defaultValue="Land"
                          autoComplete="off"
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="Category3"
                        >
                          <img src={png3} alt="" /> <span>Land</span>
                        </label>
                      </div>
                    </div>
                    {/* Residential Section */}
                    {selectedCategory === "Residential" && (
                      <div
                        className="col-sm-12 property-section"
                        id="property-type-residential"
                        // style={{ display: "none" }}
                      >
                        <div className="form-group">
                          <div className="btn-group">
                            <label
                              className="btn btn-secondary d-flex align-items-center"
                              style={{
                                backgroundColor: "#dddee3",
                                border: "1px solid #ccdeef",
                              }}
                            >
                              Residential*
                            </label>
                            <input
                              type="checkbox"
                              className="btn-check"
                              name="propertyType-res"
                              id="type1"
                              defaultValue="Flat / Apartment"
                              autoComplete="off"
                            />
                            <label
                              className="btn btn-outline-secondary"
                              htmlFor="type1"
                            >
                              Flat / Apartment
                            </label>
                            <input
                              type="checkbox"
                              className="btn-check"
                              name="propertyType-res"
                              id="type2"
                              defaultValue="Penthouse"
                              autoComplete="off"
                            />
                            <label
                              className="btn btn-outline-secondary"
                              htmlFor="type2"
                            >
                              Penthouse
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Commercial Section */}
                    {selectedCategory === "Commercial" && (
                      <div
                        className="col-sm-12 property-section"
                        id="property-type-commercial"
                        // style={{ display: "none" }}
                      >
                        <div className="form-group">
                          <div className="btn-group">
                            <label
                              className="btn btn-secondary d-flex align-items-center"
                              style={{
                                backgroundColor: "#dddee3",
                                border: "1px solid #ccdeef",
                              }}
                            >
                              Commercial*
                            </label>
                            <input
                              type="checkbox"
                              className="btn-check"
                              name="propertyType-com"
                              id="commercial1"
                              defaultValue="Offices"
                              autoComplete="off"
                            />
                            <label
                              className="btn btn-outline-secondary"
                              htmlFor="commercial1"
                            >
                              Offices
                            </label>
                            <input
                              type="checkbox"
                              className="btn-check"
                              name="propertyType-com"
                              id="commercial2"
                              defaultValue="Retail Shop"
                              autoComplete="off"
                            />
                            <label
                              className="btn btn-outline-secondary"
                              htmlFor="commercial2"
                            >
                              Retail Shop
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Land Section */}
                    {selectedCategory === "Land" && (
                      <div
                        className="col-sm-12 property-section"
                        id="property-type-land"
                        // style={{ display: "none" }}
                      >
                        <div className="form-group">
                          <div className="btn-group">
                            <label
                              className="btn btn-secondary d-flex align-items-center"
                              style={{
                                backgroundColor: "#dddee3",
                                border: "1px solid #ccdeef",
                              }}
                            >
                              Land*
                            </label>
                            <input
                              type="checkbox"
                              className="btn-check"
                              name="propertyType-land"
                              id="land1"
                              defaultValue="Agricultural Land"
                              autoComplete="off"
                            />
                            <label
                              className="btn btn-outline-secondary"
                              htmlFor="land1"
                            >
                              Agricultural Land
                            </label>
                            <input
                              type="checkbox"
                              className="btn-check"
                              name="propertyType-land"
                              id="land2"
                              defaultValue="Industrial Land"
                              autoComplete="off"
                            />
                            <label
                              className="btn btn-outline-secondary"
                              htmlFor="land2"
                            >
                              Industrial Land
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Property Sub-Category */}
                    <div className="form-group">
                      <label className="form-label">
                        Property Sub-Category:
                      </label>
                      <div className="btn-group" role="group">
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertySubCategory"
                          id="subCategory1"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="subCategory1"
                        >
                          3 BHK
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertySubCategory"
                          id="subCategory2"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="subCategory2"
                        >
                          4 BHK
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertySubCategory"
                          id="subCategory3"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="subCategory3"
                        >
                          Villa
                        </label>
                      </div>
                    </div>
                    {/* Preferred Location */}
                    <div className="form-group">
                      <label className="form-label">Preferred Location:</label>
                      <div className="btn-group" role="group">
                        <input
                          type="radio"
                          className="btn-check"
                          name="preferredLocation"
                          id="Location1"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="Location1"
                        >
                          Noida
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="preferredLocation"
                          id="Location2"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="Location2"
                        >
                          Greater Noida
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="preferredLocation"
                          id="Location3"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="Location3"
                        >
                          Ghaziabad
                        </label>
                      </div>
                    </div>
                    {/* Property Type */}
                    <div className="form-group">
                      <label className="form-label">Property Type:</label>
                      <div className="btn-group" role="group">
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertyType"
                          id="propertyType1"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="propertyType1"
                        >
                          Re-Sale
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertyType"
                          id="propertyType2"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="propertyType2"
                        >
                          Fresh
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertyType"
                          id="propertyType3"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="propertyType3"
                        >
                          Inventor Unit
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertyType"
                          id="propertyType4"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="propertyType4"
                        >
                          New Launch
                        </label>
                      </div>
                    </div>
                    {/* Budget Range */}
                    <div className="form-group">
                      <label className="form-label">Budget Range:</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Min Price"
                        />
                        <span className="input-group-text">-</span>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Max Price"
                        />
                      </div>
                    </div>
                    {/* Size Range */}
                    <div className="form-group">
                      <label className="form-label">Size Range:</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Min Sqft"
                        />
                        <span className="input-group-text">-</span>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Max Sqft"
                        />
                      </div>
                    </div>
                    {/* Loan Required */}
                    <div className="form-group">
                      <label className="form-label">Loan Required:</label>
                      <select className="form-select">
                        <option selected="" disabled="">
                          Select an option
                        </option>
                        <option>Yes</option>
                        <option>No</option>
                        <option>Self-Funding</option>
                      </select>
                    </div>
                    {/* Remarks */}
                    <div className="form-group">
                      <label className="form-label">Remarks (Comments):</label>
                      <textarea
                        className="form-textarea"
                        rows={3}
                        placeholder="Additional details..."
                        defaultValue={""}
                      />
                    </div>
                  </form>
                </div>
              </div>
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
      {/* Modal create Requiremet */}
      {/* Modal create events START */}
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
      {/* Modal create events END */}
      {/* Modal create Feed video START */}
      <div
        className="modal fade"
        id="feedActionVideo"
        tabIndex={-1}
        aria-labelledby="feedActionVideoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Modal feed header START */}
            <div className="modal-header">
              <h5 className="modal-title" id="feedActionVideoLabel">
                Add Property
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
              <div className="d-flex ">
                <div className="form-container w-100">
                  <form className="form">
                    {/* Type */}
                    <div className="form-group">
                      <label className="form-label">Type:</label>
                      <div
                        className="btn-group property-categories"
                        role="group"
                      >
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertyType"
                          id="proptype1"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="proptype1"
                        >
                          <img src={png1} alt="" />
                          <span>Sell</span>
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertyType"
                          id="proptype2"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="proptype2"
                        >
                          <img src={png2} alt="" />
                          <span>Buy</span>
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertyType"
                          id="proptype3"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="proptype3"
                        >
                          <img src={png3} alt="" />
                          <span>Rent</span>
                        </label>
                      </div>
                    </div>
                    {/* Property Category */}
                    <div className="form-group">
                      <label className="form-label">Property Category:</label>
                      <div
                        className="btn-group property-categories"
                        role="group"
                      >
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertyCategory"
                          id="propCategory1"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="propCategory1"
                        >
                          <img src={png1} alt="" />
                          <span>Commercial</span>
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertyCategory"
                          id="propCategory2"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="propCategory2"
                        >
                          <img src={png2} alt="" />
                          <span>Residential</span>
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertyCategory"
                          id="propCategory3"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="propCategory3"
                        >
                          <img src={png3} alt="" />
                          <span>Rent</span>
                        </label>
                      </div>
                    </div>
                    {/* Property Sub-Category */}
                    <div className="form-group">
                      <label className="form-label">
                        Property Sub-Category:
                      </label>
                      <div className="btn-group" role="group">
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertySubCategory"
                          id="add-subCategory1"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="add-subCategory1"
                        >
                          3 BHK
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertySubCategory"
                          id="add-subCategory2"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="add-subCategory2"
                        >
                          4 BHK
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="propertySubCategory"
                          id="add-subCategory3"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="add-subCategory3"
                        >
                          Villa
                        </label>
                      </div>
                    </div>
                    {/* Select Builder */}
                    <div className="form-group">
                      <label className="form-label">Select Builder:</label>
                      <div className="btn-group" role="group">
                        <input
                          type="radio"
                          className="btn-check"
                          name="builderType"
                          id="builder1"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="builder1"
                        >
                          Owner
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="builderType"
                          id="builder2"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="builder2"
                        >
                          Agent
                        </label>
                      </div>
                    </div>
                    {/* Select Project (Society) */}
                    <div className="form-group">
                      <label className="form-label">
                        Select Project (Society):
                      </label>
                      <div className="btn-group" role="group">
                        <input
                          type="radio"
                          className="btn-check"
                          name="projectType"
                          id="projectType1"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="projectType1"
                        >
                          Golf Home
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="projectType"
                          id="projectType2"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="projectType2"
                        >
                          Gour
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="projectType"
                          id="projectType3"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary"
                          htmlFor="projectType3"
                        >
                          Saya
                        </label>
                      </div>
                    </div>
                    {/* Property Address */}
                    <div className="form-group">
                      <label className="form-label">Property Address:</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Noida"
                      />
                    </div>
                  </form>
                </div>
              </div>
              {/* Dropzone photo START */}
              <div>
                <label className="form-label">Upload Image</label>
                <div
                  className="dropzone dropzone-default card shadow-none"
                  data-dropzone='{"maxFiles":2}'
                >
                  <div className="dz-message">
                    <i className="bi bi-camera-reels display-3" />
                    <p>Drag here or click to upload Image &amp; video.</p>
                  </div>
                </div>
              </div>
              {/* Dropzone photo END */}
            </div>
            {/* Modal feed body END */}
            {/* Modal feed footer */}
            <div className="modal-footer">
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
      {/* Modal create Feed video END */}
    </Fragment>
  );
};

export default MainPageModal;
