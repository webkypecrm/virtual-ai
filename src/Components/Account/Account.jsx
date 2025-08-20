import React, { Fragment, useState } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import Alert from "../../Main-Page/Alert/Alert";
import { Link } from "react-router-dom";
import person from "../../assets/images/icon/person-outline-filled.svg";
import commercial from "../../assets/images/post/property/commercial.png";
import ressidentail from "../../assets/images/post/property/ressidentail.png";
import location from "../../assets/images/post/property/maps-and-location.png";

const Account = () => {
  const [propertyAction, setPropertyAction] = useState("");
  const [propertyCategories, setPropertyCategories] = useState([]);
  const [propertyTypeSelected, setPropertyTypeSelected] = useState(false);

  const handlePropertyActionChange = (e) => {
    setPropertyAction(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const { id, checked } = e.target;
    setPropertyCategories((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const handlePropertyTypeChange = () => {
    setPropertyTypeSelected(true);
  };

  // select city
  const [selectedCities, setSelectedCities] = useState([]);
  const cities = ["Indore", "Ujjain", "Dewas", "Gwalior", "Bhopal"];

  const handleCityCheckboxChange = (event) => {
    const cityName = event.target.value;
    if (event.target.checked) {
      setSelectedCities((prev) => [...prev, cityName]);
    } else {
      setSelectedCities((prev) => prev.filter((name) => name !== cityName));
    }
  };

  const handleCitySelectAll = (event) => {
    if (event.target.checked) {
      setSelectedCities(cities);
    } else {
      setSelectedCities([]);
    }
  };
  //Select Area
  const [selectedSubAreas, setSelectedSubAreas] = useState([]);
  const subAreas = [
    "Navlakha",
    "Madhumilan",
    "Khajrana",
    "Bhawarkua",
    "Vijay Nagar",
  ];

  const handleAreaCheckboxChange = (event) => {
    const subAreaName = event.target.value;
    if (event.target.checked) {
      setSelectedSubAreas((prev) => [...prev, subAreaName]);
    } else {
      setSelectedSubAreas((prev) =>
        prev.filter((name) => name !== subAreaName)
      );
    }
  };

  const handleAreaSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedSubAreas(subAreas); // Select all sub areas
    } else {
      setSelectedSubAreas([]); // Deselect all sub areas
    }
  };

  // select builder
  const [selectedBuilders, setSelectedBuilders] = useState([]);
  const builders = [
    "Supertech Ltd.",
    "Amrapali Group",
    "Ansal API",
    "Jaypee Greens",
    "Mahagun Group",
  ];

  const handleCheckboxChange = (event) => {
    const builderName = event.target.value;
    if (event.target.checked) {
      setSelectedBuilders((prev) => [...prev, builderName]);
    } else {
      setSelectedBuilders((prev) =>
        prev.filter((name) => name !== builderName)
      );
    }
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedBuilders(builders);
    } else {
      setSelectedBuilders([]);
    }
  };

  // Project select
  const [selectedProjects, setSelectedProjects] = useState([]);
  const projects = [
    "Supertech Eco Village 1",
    "Amrapali Golf Homes",
    "ATS Allure",
    "Jaypee Star Court",
    "Mahagun My Laagoon",
  ];

  const handleProjectCheckboxChange = (event) => {
    const projectName = event.target.value;
    if (event.target.checked) {
      setSelectedProjects((prev) => [...prev, projectName]);
    } else {
      setSelectedProjects((prev) =>
        prev.filter((name) => name !== projectName)
      );
    }
  };

  const handleProjectSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedProjects(projects);
    } else {
      setSelectedProjects([]);
    }
  };

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
                            <Link
                              className="nav-link d-flex mb-0 active"
                              to="#nav-setting-tab-1"
                              data-bs-toggle="tab"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={person}
                                alt=""
                              />
                              <span>Account </span>
                            </Link>
                          </li>
                          <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link
                              className="nav-link d-flex mb-0 "
                              to="#nav-setting-tab-7"
                              data-bs-toggle="tab"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={person}
                                alt=""
                              />
                              <span>Where You Sell </span>
                            </Link>
                          </li>
                          <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link
                              className="nav-link d-flex mb-0 "
                              to="#nav-setting-tab-9"
                              data-bs-toggle="tab"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={person}
                                alt=""
                              />
                              <span>What You Sell </span>
                            </Link>
                          </li>
                          {/* <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link
                              className="nav-link d-flex mb-0 "
                              to="#nav-setting-tab-8"
                              data-bs-toggle="tab"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={person}
                                alt=""
                              />
                              <span>KYC </span>
                            </Link>
                          </li> */}
                          {/* <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link
                              className="nav-link d-flex mb-0"
                              to="#nav-setting-tab-2"
                              data-bs-toggle="tab"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={notification}
                                alt=""
                              />
                              <span>Notification </span>
                            </Link>
                          </li> */}
                          {/* <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link
                              className="nav-link d-flex mb-0"
                              to="#nav-setting-tab-3"
                              data-bs-toggle="tab"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={shield}
                                alt=""
                              />
                              <span>Privacy and safety </span>
                            </Link>
                          </li> */}
                          {/* <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link
                              className="nav-link d-flex mb-0"
                              to="#nav-setting-tab-4"
                              data-bs-toggle="tab"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={handshake}
                                alt=""
                              />
                              <span>Communications </span>
                            </Link>
                          </li> */}
                          {/* <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link
                              className="nav-link d-flex mb-0"
                              to="#nav-setting-tab-5"
                              data-bs-toggle="tab"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={chat}
                                alt=""
                              />
                              <span>Messaging </span>
                            </Link>
                          </li> */}
                          {/* <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link
                              className="nav-link d-flex mb-0"
                              to="#nav-setting-tab-6"
                              data-bs-toggle="tab"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src={trash}
                                alt=""
                              />
                              <span>Close account </span>
                            </Link>
                          </li> */}
                        </ul>
                      </div>
                      <div className="card-footer text-center py-2">
                        <Link
                          className="btn btn-link text-secondary btn-sm"
                          to="#!"
                        >
                          View Profile{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <ul className="nav small mt-4 justify-content-center lh-1">
                    <li className="nav-item">
                      <Link className="nav-link" to="my-profile-about.html">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="account.html">
                        Settings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" target="_blank" to="#">
                        Support{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="help.html">
                        Help
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="privacy-and-terms.html">
                        Privacy &amp; terms
                      </Link>
                    </li>
                  </ul>
                  <p className="small text-center mt-1">
                    ©2024{" "}
                    <Link
                      className="text-reset"
                      target="_blank"
                      to="https://stackbros.in/"
                    >
                      {" "}
                      Stackbros{" "}
                    </Link>
                  </p>
                </div>
              </nav>
            </div>
            <div className="col-lg-6 vstack gap-4">
              <div className="tab-content py-0 mb-0">
                <div
                  className="tab-pane show active fade"
                  id="nav-setting-tab-1"
                >
                  <div className="card mb-4">
                    <div className="card-header border-0 pb-0">
                      <h1 className="h5 card-title">Account Settings</h1>
                      <p className="mb-0">
                        He moonlights difficult engrossed it, sportsmen.
                        Interested has all Devonshire difficulty gay assistance
                        joy. Unaffected at ye of compliment alteration to.
                      </p>
                    </div>
                    <div className="card-body">
                      <form className="row g-3">
                        <div className="col-sm-6 ">
                          <label className="form-label"> Name </label>
                          <input
                            type="text"
                            id="name-input"
                            className="form-control"
                            placeholder="Sam"
                            defaultValue=""
                          />
                        </div>
                        <div className="col-sm-6 ">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            id="email-input"
                            className="form-control"
                            placeholder="@samlanson"
                            defaultValue=""
                          />
                        </div>
                        <div className="col-sm-6 ">
                          <label className="form-label">Mobile</label>
                          <input
                            type="number"
                            id="mobile-input"
                            className="form-control"
                            placeholder={6268816853}
                          />
                        </div>
                        <div className="col-12 text-end">
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary mb-0 submit-type-btn"
                          >
                            Save changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="tab-pane  fade" id="nav-setting-tab-7">
                  <div className="card mb-4" id="add-pr0perty-basic-new">
                    <div className="card-header border-0 pb-0">
                      <h1 className="h5 card-title">Where You Sell: </h1>
                    </div>
                    <div className="card-body">
                      <form className="row g-3">
                        <div className="col-sm-6 ">
                          <label className="form-label">Select Country </label>
                          <select id="country-select" className="form-select">
                            <option value="" selected="" disabled="">
                              Select Country{" "}
                            </option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="Singapore">Singapore</option>
                          </select>
                        </div>
                        <div className="col-sm-6 ">
                          <label className="form-label">Select State</label>
                          {/* Select State (India) */}
                          <select id="state-select" className="form-select ">
                            <option value="" selected="" disabled="">
                              Select State
                            </option>
                            <option>Maharashtra</option>
                            <option>Uttar Pradesh</option>
                            <option>Karnataka</option>
                          </select>
                        </div>
                        {/* Cities Dropdown */}

                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="form-label">Select Cities*</label>
                            <div className="dropdown">
                              <button
                                id="dropdown-btn-cities"
                                className="new-btnn-sec-cityselec dropdown-toggle w-100 text-start d-flex justify-content-between"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {selectedCities.length === 0
                                  ? "Select City"
                                  : selectedCities.length === 1
                                  ? selectedCities[0]
                                  : `${selectedCities[0]} +${
                                      selectedCities.length - 1
                                    } more`}
                              </button>
                              <ul
                                className="dropdown-menu new-dropdown-menu w-100 px-3"
                                id="city-dropdown"
                              >
                                <li className="p-1 new-cusor-pointer-sec">
                                  <input
                                    type="checkbox"
                                    className="city-checkbox w-auto select-all"
                                    onChange={handleCitySelectAll}
                                    checked={
                                      selectedCities.length === cities.length
                                    }
                                  />{" "}
                                  Select All
                                </li>
                                {cities.map((city) => (
                                  <li
                                    className="p-1 new-cusor-pointer-sec"
                                    key={city}
                                  >
                                    <input
                                      type="checkbox"
                                      value={city}
                                      className="city-checkbox w-auto"
                                      onChange={handleCityCheckboxChange}
                                      checked={selectedCities.includes(city)}
                                    />{" "}
                                    {city}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Sub Areas Dropdown */}

                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="form-label">
                              Select Sub Areas*
                            </label>
                            <div className="dropdown">
                              <button
                                id="dropdown-btn-subareas"
                                className="new-btnn-sec-cityselec dropdown-toggle w-100 text-start d-flex justify-content-between"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {selectedSubAreas.length === 0
                                  ? "Select Sub Areas"
                                  : selectedSubAreas.length === 1
                                  ? selectedSubAreas[0]
                                  : `${selectedSubAreas[0]} +${
                                      selectedSubAreas.length - 1
                                    } more`}
                              </button>
                              <ul
                                className="dropdown-menu new-dropdown-menu w-100 px-3"
                                id="subarea-dropdown"
                              >
                                <li className="p-1 new-cusor-pointer-sec">
                                  <input
                                    type="checkbox"
                                    className="subarea-checkbox w-auto select-all"
                                    onChange={handleAreaSelectAll}
                                    checked={
                                      selectedSubAreas.length ===
                                      subAreas.length
                                    }
                                  />{" "}
                                  Select All
                                </li>
                                {subAreas.map((subArea) => (
                                  <li
                                    className="p-1 new-cusor-pointer-sec"
                                    key={subArea}
                                  >
                                    <input
                                      type="checkbox"
                                      value={subArea}
                                      className="subarea-checkbox w-auto"
                                      onChange={handleAreaCheckboxChange}
                                      checked={selectedSubAreas.includes(
                                        subArea
                                      )}
                                    />{" "}
                                    {subArea}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 text-end">
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary mb-0 submit-type-btn"
                          >
                            Save changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="tab-pane  fade" id="nav-setting-tab-9">
                  <div className="card mb-4" id="add-pr0perty-basic-new">
                    <div className="card-header border-0 pb-0">
                      <h1 className="h5 card-title">What You Sell: </h1>
                    </div>
                    <div className="card-body">
                      <form className="row g-3">
                        <div className="col-sm-12" id="property-type-account">
                          <div className="form-group">
                            <div
                              className="btn-group property-categories"
                              role="group"
                            >
                              <label
                                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                                style={{
                                  backgroundColor: "#dddee3",
                                  border: "1px solid #ccdeef",
                                }}
                              >
                                Type *
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                name="propertyAction-new"
                                id="add-propsub1"
                                autoComplete="off"
                                onChange={handlePropertyActionChange}
                              />
                              <label
                                className="btn btn-outline-secondary"
                                htmlFor="add-propsub1"
                              >
                                <img src={commercial} alt="" />
                                <span> Sell</span>
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                name="propertyAction-new"
                                id="add-propsub2"
                                autoComplete="off"
                                onChange={handlePropertyActionChange}
                              />
                              <label
                                className="btn btn-outline-secondary"
                                htmlFor="add-propsub2"
                              >
                                <img src={ressidentail} alt="" />
                                <span> Buy</span>
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                name="propertyAction-new"
                                id="add-propsub3"
                                autoComplete="off"
                                onChange={handlePropertyActionChange}
                              />
                              <label
                                className="btn btn-outline-secondary"
                                htmlFor="add-propsub3"
                              >
                                <img src={ressidentail} alt="" />
                                <span> Rent</span>
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Property Category Section */}
                        {propertyAction && (
                          <div
                            className="col-sm-12"
                            id="property-category-account"
                          >
                            <div className="form-group">
                              <div
                                className="btn-group property-categories"
                                role="group"
                              >
                                <label
                                  className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                                  style={{
                                    backgroundColor: "#dddee3",
                                    border: "1px solid #ccdeef",
                                  }}
                                >
                                  Category*
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyCategory-new"
                                  id="property-category1"
                                  autoComplete="off"
                                  onChange={handleCategoryChange}
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="property-category1"
                                >
                                  <img src={commercial} alt="" />
                                  <span> Commercial</span>
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyCategory-new"
                                  id="property-category2"
                                  autoComplete="off"
                                  onChange={handleCategoryChange}
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="property-category2"
                                >
                                  <img src={ressidentail} alt="" />
                                  <span> Residential</span>
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyCategory-new"
                                  id="property-category3"
                                  autoComplete="off"
                                  onChange={handleCategoryChange}
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="property-category3"
                                >
                                  <img src={location} alt="" />
                                  <span> Land</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Specific Options Section */}
                        {propertyCategories.includes("property-category1") && (
                          <div
                            className="col-sm-12"
                            id="property-type-commercial"
                          >
                            <div className="form-group ">
                              <div className="btn-group" id="property-type">
                                <label
                                  className="btn btn-secondary d-flex align-items-center new-style-section-fortitle "
                                  htmlFor=""
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
                                  name="propertyType-new-coom"
                                  id="commercial1"
                                  value="Offices"
                                  onChange={handlePropertyTypeChange}
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
                                  name="propertyType-new-coom"
                                  id="commercial2"
                                  defaultValue="Retail Shop"
                                  onChange={handlePropertyTypeChange}
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="commercial2"
                                >
                                  Retail Shop
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyType-new-coom"
                                  id="commercial3"
                                  value="Warehouse"
                                  onChange={handlePropertyTypeChange}
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="commercial3"
                                >
                                  Warehouse
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyType-new-coom"
                                  id="commercial4"
                                  defaultValue="Storage "
                                  onChange={handlePropertyTypeChange}
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="commercial4"
                                >
                                  Storage{" "}
                                </label>
                                <div className="btn-group">
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{
                                      border: "1px solid  #ccc !important",
                                    }}
                                  >
                                    More Options
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        Industial Space
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        Farmhouse
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        Independent Floor
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {propertyCategories.includes("property-category2") && (
                          <div
                            className="col-sm-12"
                            id="property-type-resendential"
                          >
                            <div className="form-group ">
                              <div className="btn-group" id="property-type">
                                <label
                                  className="btn btn-secondary d-flex align-items-center new-style-section-fortitle "
                                  htmlFor=""
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
                                  name="propertyType-new"
                                  id="type11BHK"
                                  defaultValue="Flat / Apartment"
                                  onChange={handlePropertyTypeChange}
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="type11BHK"
                                >
                                  Flat / Apartment
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyType-new"
                                  id="type12BHK"
                                  defaultValue="Penthouse"
                                  onChange={handlePropertyTypeChange}
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="type12BHK"
                                >
                                  Penthouse
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyType-new"
                                  id="type23BHK"
                                  defaultValue="House / Kothi"
                                  onChange={handlePropertyTypeChange}
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="type23BHK"
                                >
                                  House / Kothi
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyType-new"
                                  id="type234BHK"
                                  defaultValue="Independent Villa"
                                  onChange={handlePropertyTypeChange}
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="type234BHK"
                                >
                                  Independent Villa
                                </label>
                                <div className="btn-group">
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{
                                      border: "1px solid  #ccc !important",
                                    }}
                                  >
                                    More Options
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        1 RK Studio
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        Farmhouse
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        Independent Floor
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {propertyCategories.includes("property-category3") && (
                          <div className="col-sm-12" id="property-type-land">
                            <div className="form-group ">
                              <div className="btn-group" id="property-type">
                                <label
                                  className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                                  htmlFor=""
                                  style={{
                                    backgroundColor: "#dddee3",
                                    border: "1px solid #ccdeef",
                                  }}
                                >
                                  Lands*
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyType-new-coom-land"
                                  id="Land-sec1"
                                  defaultValue="Flat / Apartment"
                                  onChange={handlePropertyTypeChange}
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="Land-sec1"
                                >
                                  Residential Plot
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyType-new-coom-land"
                                  id="Land-sec2"
                                  defaultValue="Retail Shop"
                                  onChange={handlePropertyTypeChange}
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="Land-sec2"
                                >
                                  Commercial Plot
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyType-new-coom-land"
                                  id="Land-sec3"
                                  defaultValue="Warehouse"
                                  onChange={handlePropertyTypeChange}
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="Land-sec3"
                                >
                                  Commercial Land
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyType-new-coom-land"
                                  id="Land-sec4"
                                  defaultValue="Storage "
                                  onChange={handlePropertyTypeChange}
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="Land-sec4"
                                >
                                  Storage{" "}
                                </label>
                                <div className="btn-group">
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{
                                      border: "1px solid  #ccc !important",
                                    }}
                                  >
                                    More Options
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        Industial Space
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        Farmhouse
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        Independent Floor
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* <div className="col-sm-12" id="property-type-commercial">
          <div className="form-group ">
            <div className="btn-group" id="property-type">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle "
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef"
                }}
              >
                Commercial*
              </label>
              <input
                type="checkbox"
                className="btn-check"
                name="propertyType-new-coom"
                id="commercial1"
                defaultValue="Flat / Apartment"
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
                name="propertyType-new-coom"
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
              <input
                type="checkbox"
                className="btn-check"
                name="propertyType-new-coom"
                id="commercial3"
                defaultValue="Warehouse"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="commercial3"
              >
                Warehouse
              </label>
              <input
                type="checkbox"
                className="btn-check"
                name="propertyType-new-coom"
                id="commercial4"
                defaultValue="Storage "
                autoComplete="off"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="commercial4"
              >
                Storage{" "}
              </label>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid  #ccc !important" }}
                >
                  More Options
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Industial Space
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Farmhouse
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Independent Floor
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
                        {/* <div className="col-sm-12" id="property-type-land">
          <div className="form-group ">
            <div className="btn-group" id="property-type">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef"
                }}
              >
                Lands*
              </label>
              <input
                type="checkbox"
                className="btn-check"
                name="propertyType-new-coom-land"
                id="Land-sec1"
                defaultValue="Flat / Apartment"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="Land-sec1">
                Residential Plot
              </label>
              <input
                type="checkbox"
                className="btn-check"
                name="propertyType-new-coom-land"
                id="Land-sec2"
                defaultValue="Retail Shop"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="Land-sec2">
                Commercial Plot
              </label>
              <input
                type="checkbox"
                className="btn-check"
                name="propertyType-new-coom-land"
                id="Land-sec3"
                defaultValue="Warehouse"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="Land-sec3">
                Commercial Land
              </label>
              <input
                type="checkbox"
                className="btn-check"
                name="propertyType-new-coom-land"
                id="Land-sec4"
                defaultValue="Storage "
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="Land-sec4">
                Storage{" "}
              </label>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid  #ccc !important" }}
                >
                  More Options
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Industial Space
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Farmhouse
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Independent Floor
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
                        {/* <div className="col-sm-12" id="budget-select">
          <div className="form-group">
            <div className="btn-group" id="total-floor-selection">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef"
                }}
              >
                Budget Range*
              </label>
              <input
                type="checkbox"
                className="btn-check"
                name="SelectBudget"
                id="budget1"
                defaultValue="0.5 - 1 Cr"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="budget1">
                0.5 - 1 Cr
              </label>
              <input
                type="checkbox"
                className="btn-check"
                name="SelectBudget"
                id="budget2"
                defaultValue="1 - 1.5 Cr"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="budget2">
                1 - 1.5 Cr
              </label>
              <input
                type="checkbox"
                className="btn-check"
                name="SelectBudget"
                id="budget3"
                defaultValue="1.5 - 2 Cr"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="budget3">
                1.5 - 2 Cr
              </label>
              <input
                type="checkbox"
                className="btn-check"
                name="SelectBudget"
                id="budget4"
                defaultValue="2 - 2.5 Cr"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="budget4">
                2 - 2.5 Cr
              </label>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid  #ccc !important" }}
                >
                  More Options
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <input
                      type="checkbox"
                      className="btn-check"
                      name="SelectBudget"
                      id="budget5"
                      defaultValue="2.5 Cr+"
                      autoComplete="off"
                    />
                    <label className="dropdown-item" htmlFor="budget5">
                      2.5 Cr+
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>*/}
                        {/* <div className="col-sm-12" id="sale-type-select">
          <div className="form-group">
            <div className="btn-group" id="sale-type-selection">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef"
                }}
              >
                Sale Type*
              </label>
              <input
                type="checkbox"
                className="btn-check"
                name="SelectSaleType"
                id="sale1"
                defaultValue="Fresh Sale"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="sale1">
                Fresh Sale
              </label>
              <input
                type="checkbox"
                className="btn-check"
                name="SelectSaleType"
                id="sale2"
                defaultValue="File in Hand"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="sale2">
                File in Hand
              </label>
              <input
                type="checkbox"
                className="btn-check"
                name="SelectSaleType"
                id="sale3"
                defaultValue="Re-sale"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="sale3">
                Re-sale
              </label>
            </div>
          </div>
        </div>  */}

                        {propertyTypeSelected && (
                          <div className="col-sm-12" id="sale-type-select">
                            <div className="form-group">
                              <div
                                className="btn-group"
                                id="sale-type-selection"
                              >
                                <label
                                  className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                                  style={{
                                    backgroundColor: "#dddee3",
                                    border: "1px solid #ccdeef",
                                  }}
                                >
                                  Sale Type*
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="SelectSaleType"
                                  id="sale1"
                                  value="Fresh Sale"
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="sale1"
                                >
                                  Fresh Sale
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="SelectSaleType"
                                  id="sale2"
                                  value="File in Hand"
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="sale2"
                                >
                                  File in Hand
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="SelectSaleType"
                                  id="sale3"
                                  value="Re-sale"
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="sale3"
                                >
                                  Re-sale
                                </label>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Builder Dropdown */}
                        <div className="col-sm-6" id="builder-choose">
                          <div className="form-group">
                            <label className="form-label">
                              Select Builder *
                            </label>
                            <div className="dropdown">
                              <button
                                id="dropdown-btn-builder"
                                className="new-btnn-sec-cityselec dropdown-toggle w-100 text-start d-flex justify-content-between"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {selectedBuilders.length === 0
                                  ? "Select Builder"
                                  : selectedBuilders.length === 1
                                  ? selectedBuilders[0]
                                  : `${selectedBuilders[0]} +${
                                      selectedBuilders.length - 1
                                    } more`}
                              </button>
                              <ul
                                className="dropdown-menu new-dropdown-menu w-100 px-3"
                                id="builder-dropdown"
                              >
                                <li className="p-1 new-cusor-pointer-sec">
                                  <input
                                    type="checkbox"
                                    className="builder-checkbox w-auto select-all"
                                    onChange={handleSelectAll}
                                    checked={
                                      selectedBuilders.length ===
                                      builders.length
                                    }
                                  />{" "}
                                  Select All
                                </li>
                                {builders.map((builder) => (
                                  <li
                                    className="p-1 new-cusor-pointer-sec"
                                    key={builder}
                                  >
                                    <input
                                      type="checkbox"
                                      value={builder}
                                      className="builder-checkbox w-auto"
                                      onChange={handleCheckboxChange}
                                      checked={selectedBuilders.includes(
                                        builder
                                      )}
                                    />{" "}
                                    {builder}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Project Dropdown */}

                        <div className="col-sm-6" id="Project-choose">
                          <div className="form-group">
                            <label className="form-label">
                              Select Project (Society) *
                            </label>
                            <div className="dropdown">
                              <button
                                id="dropdown-btn-project"
                                className="new-btnn-sec-cityselec dropdown-toggle w-100 text-start d-flex justify-content-between"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {selectedProjects.length === 0
                                  ? "Select Project"
                                  : selectedProjects.length === 1
                                  ? selectedProjects[0]
                                  : `${selectedProjects[0]} +${
                                      selectedProjects.length - 1
                                    } more`}
                              </button>
                              <ul
                                className="dropdown-menu new-dropdown-menu w-100 px-3"
                                id="project-dropdown"
                              >
                                <li className="p-1 new-cusor-pointer-sec">
                                  <input
                                    type="checkbox"
                                    className="project-checkbox w-auto select-all"
                                    onChange={handleProjectSelectAll}
                                    checked={
                                      selectedProjects.length ===
                                      projects.length
                                    }
                                  />{" "}
                                  Select All
                                </li>
                                {projects.map((project) => (
                                  <li
                                    className="p-1 new-cusor-pointer-sec"
                                    key={project}
                                  >
                                    <input
                                      type="checkbox"
                                      value={project}
                                      className="project-checkbox w-auto"
                                      onChange={handleProjectCheckboxChange}
                                      checked={selectedProjects.includes(
                                        project
                                      )}
                                    />{" "}
                                    {project}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 text-end">
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary mb-0 submit-type-btn"
                          >
                            Save changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* ---------------------------------------------------------- */}
              </div>
            </div>

            {/* ---------------------------- */}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Account;
