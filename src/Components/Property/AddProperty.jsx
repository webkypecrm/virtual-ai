import React, { Fragment, useEffect, useState } from "react";
import MainNav from "../../Main-Page/MainNav/MainNav";
import Alert from "../../Main-Page/Alert/Alert";
import person from "../../assets/images/icon/person-outline-filled.svg";
import notification from "../../assets/images/icon/notification-outlined-filled.svg";
import shield from "../../assets/images/icon/shield-outline-filled.svg";
import hand from "../../assets/images/icon/handshake-outline-filled.svg";
import commercial from "../../assets/images/post/property/commercial.png";
import residential from "../../assets/images/post/property/ressidentail.png";
import location from "../../assets/images/post/property/maps-and-location.png";
import property from "../../assets/images/post/property/layout2bhk.jpg";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Dropzone from "dropzone";
import { Stepper } from "react-form-stepper";

const AddProperty = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [propertyTypeSelected, setPropertyTypeSelected] = useState(false);
  const [builder, setBuilder] = useState("");
  const [noBuilder, setNoBuilder] = useState(false);
  const [project, setProject] = useState("");
  const [tower, setTower] = useState("");
  const [layout, setLayout] = useState("");
  const [size, setSize] = useState("");
  const [otherSize, setOtherSize] = useState("");
  const [showFloor, setShowFloor] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCards, setShowCards] = useState(false);
    const [step, setStep] = useState(0);

  const handleCategoryChange = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    if (noBuilder) {
      setProject("");
      setTower("");
    }
  }, [noBuilder]);

  // Derived display logic
  const showResidential = selectedCategories.includes("residential");
  const showCommercial = selectedCategories.includes("commercial");
  const showLand = selectedCategories.includes("land");

  const showBuilderSection = propertyTypeSelected;
  const showProjectSection = builder && builder !== "No builder." && !noBuilder;
  const showTowerSection = project !== "" && !noBuilder;
  const showLayoutSection = noBuilder || tower !== "";
  const showSizeSection = layout !== "";
  const showOtherInput = size === "Other";
  const showPropertyLayout =
    // (size && size !== "Other") || (otherSize && otherSize.trim() !== "");
    (size && size !== "Other") || (size === "Other" && showCards);
 

  // Location
  const [isManualEntry, setIsManualEntry] = useState(false);
  const [isCurrentLocation, setIsCurrentLocation] = useState(false);
  const [locationData, setLocationData] = useState({
    country: "",
    state: "",
    city: "",
    zip: "",
  });

  // Clear location fields
  const clearFields = () => {
    setLocationData({
      country: "",
      state: "",
      city: "",
      zip: "",
    });
  };

  const handleManualEntry = () => {
    setIsManualEntry(true);
    setIsCurrentLocation(false);
    clearFields();
  };

  const handleCurrentLocation = () => {
    setIsManualEntry(false);
    setIsCurrentLocation(true);
    clearFields();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
          )
            .then((response) => response.json())
            .then((data) => {
              setLocationData({
                country: data.address.country || "",
                state: data.address.state || "",
                city: data.address.city || data.address.town || "",
                zip: data.address.postcode || "",
              });
            })
            .catch((error) => console.error("Error fetching location:", error));
        },
        (error) => {
          console.error("Error with geolocation:", error.message);
          alert("Failed to get location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
// Rare status
const [regType, setRegType] = useState("");
// date
const [date, setDate] = useState(null);
// dropzone
useEffect(() => {
    // Initialize Dropzone after the component mounts
    const dropzone = new Dropzone("#dropzone-area", {
      url: "/upload", // Set your API endpoint here
      maxFiles: 10, // Maximum files allowed
      acceptedFiles: "image/*,video/*", // Accept only images and videos
      addRemoveLinks: true, // Enable file removal
    //   dictDefaultMessage: "Drag here or click to upload Image & Video.",
    });

    return () => {
      dropzone.destroy(); // Cleanup Dropzone when component unmounts
    };
  }, []);

  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container">
          {/* <Alert /> */}
          <div className="row">
            {/* Sidenav START */}
            <div className="col-lg-3">
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
                              <img
                                className="me-2 h-20px fa-fw"
                                src={person}
                                alt=""
                              />
                              <span>Property Detail</span>
                            </Link>
                          </li>
                          <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link
                              className="nav-link d-flex mb-0"
                              to="#nav-setting-tab-2"
                              data-bs-toggle="tab"
                            >
                              <img
                                className="me-2 h-20px fa-fw"
                                src={notification}
                                alt=""
                              />
                              <span>Unit Details</span>
                            </Link>
                          </li>
                          <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link
                              className="nav-link d-flex mb-0"
                              to="#nav-setting-tab-3"
                              data-bs-toggle="tab"
                            >
                              <img
                                className="me-2 h-20px fa-fw"
                                src={shield}
                                alt=""
                              />
                              <span>Amenities</span>
                            </Link>
                          </li>
                          <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link
                              className="nav-link d-flex mb-0"
                              to="#nav-setting-tab-4"
                              data-bs-toggle="tab"
                            >
                              <img
                                className="me-2 h-20px fa-fw"
                                src={hand}
                                alt=""
                              />
                              <span>Rera Status</span>
                            </Link>
                          </li>
                          <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link
                              className="nav-link d-flex mb-0"
                              to="#nav-setting-tab-7"
                              data-bs-toggle="tab"
                            >
                              <img
                                className="me-2 h-20px fa-fw"
                                src={notification}
                                alt=""
                              />
                              <span>Upload Property Photos &amp; Videos</span>
                            </Link>
                          </li>
                        </ul>
                        {/* Side Nav END */}
                      </div>
                      {/* Card body END */}
                      {/* Card footer */}
                      <div className="card-footer text-center py-2">
                        <Link
                          className="btn btn-link text-secondary btn-sm"
                          to="#!"
                        >
                          View Profile{" "}
                        </Link>
                      </div>
                    </div>
                    {/* Card END */}
                  </div>
                  {/* Offcanvas body */}
                  {/* Helper link START */}
                  <ul className="nav small mt-4 justify-content-center lh-1">
                    <li className="nav-item">
                      <Link className="nav-link" to="my-profile-about.html">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="settings.html">
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
                  {/* Helper link END */}
                  {/* Copyright */}
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
            {/* Sidenav END */}

            <div className="col-lg-6 vstack gap-4">
              <div className="tab-content py-0 mb-0">
                <div className="tab-pane show active fade" id="nav-setting-tab-1">
                  {/* Account settings START */}
                  <div className="card ">
                    {/* Title START */}
                    <div className="card-header border-0 pb-0">
                      <h1 className="h5 card-title">Property Details</h1>
                    </div>
                    <div className="card-body">
                      <form className="row g-3" id="add-property-basic">
                        <div className="col-sm-12">
                          <div className="form-group ">
                            <div
                              className="btn-group property-categories"
                              role="group"
                            >
                              <label
                                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle "
                                htmlFor=""
                                style={{
                                  backgroundColor: "#dddee3",
                                  border: "1px solid #ccdeef",
                                  color: "#000",
                                }}
                              >
                                Type *
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                name="propertyAction"
                                id="add-propsub1"
                                autoComplete="off"
                              />
                              <label
                                className="btn btn-outline-secondary"
                                htmlFor="add-propsub1"
                              >
                                <img src={commercial} alt="" />{" "}
                                <span>Sell</span>
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                name="propertyAction"
                                id="add-propsub2"
                                autoComplete="off"
                              />
                              <label
                                className="btn btn-outline-secondary"
                                htmlFor="add-propsub2"
                              >
                                <img src={residential} alt="" />
                                <span> Buy</span>
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                name="propertyAction"
                                id="add-propsub3"
                                autoComplete="off"
                              />
                              <label
                                className="btn btn-outline-secondary"
                                htmlFor="add-propsub3"
                              >
                                <img src={residential} alt="" />
                                <span> Rent</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12" id="property-catehory-sec">
                          <div className="form-group ">
                            <div
                              className="btn-group property-categories"
                              role="group"
                            >
                              <label
                                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle "
                                htmlFor=""
                                style={{
                                  backgroundColor: "#dddee3",
                                  border: "1px solid #ccdeef",
                                  color: "#000",
                                }}
                              >
                                Category*
                              </label>
                              <input
                                type="checkbox"
                                className="btn-check"
                                name="propertyCategory"
                                id="property-category1"
                                autoComplete="off"
                                value="commercial"
                                onChange={() =>
                                  handleCategoryChange("commercial")
                                }
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
                                name="propertyCategory"
                                id="property-category2"
                                autoComplete="off"
                                value="residential"
                                onChange={() =>
                                  handleCategoryChange("residential")
                                }
                              />
                              <label
                                className="btn btn-outline-secondary"
                                htmlFor="property-category2"
                              >
                                <img src={residential} alt="" />
                                <span> Residential</span>
                              </label>
                              <input
                                type="checkbox"
                                className="btn-check"
                                name="propertyCategory"
                                id="property-category3"
                                autoComplete="off"
                                value="land"
                                onChange={() => handleCategoryChange("land")}
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
                        {showResidential && (
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
                                    color: "#000",
                                  }}
                                >
                                  Residential*
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyType"
                                  id="type11BHK"
                                  defaultValue="Flat / Apartment"
                                  autoComplete="off"
                                  onChange={() => setPropertyTypeSelected(true)}
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
                                  name="propertyType"
                                  id="type12BHK"
                                  defaultValue="Penthouse"
                                  autoComplete="off"
                                  onChange={() => setPropertyTypeSelected(true)}
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
                                  name="propertyType"
                                  id="type23BHK"
                                  defaultValue="House / Kothi"
                                  autoComplete="off"
                                  onChange={() => setPropertyTypeSelected(true)}
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
                                  name="propertyType"
                                  id="type234BHK"
                                  defaultValue="Independent Villa"
                                  autoComplete="off"
                                  onChange={() => setPropertyTypeSelected(true)}
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
                        {showCommercial && (
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
                                    color: "#000",
                                  }}
                                >
                                  Commercial*
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyType-coom"
                                  id="commercial1"
                                  defaultValue="Flat / Apartment"
                                  autoComplete="off"
                                  onChange={() => setPropertyTypeSelected(true)}
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
                                  name="propertyType-coom"
                                  id="commercial2"
                                  defaultValue="Retail Shop"
                                  autoComplete="off"
                                  onChange={() => setPropertyTypeSelected(true)}
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
                                  name="propertyType-coom"
                                  id="commercial3"
                                  defaultValue="Warehouse"
                                  autoComplete="off"
                                  onChange={() => setPropertyTypeSelected(true)}
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
                                  name="propertyType-coom"
                                  id="commercial4"
                                  defaultValue="Storage "
                                  autoComplete="off"
                                  onChange={() => setPropertyTypeSelected(true)}
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
                        {showLand && (
                          <div className="col-sm-12" id="property-type-land">
                            <div className="form-group ">
                              <div className="btn-group" id="property-type">
                                <label
                                  className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                                  htmlFor=""
                                  style={{
                                    backgroundColor: "#dddee3",
                                    border: "1px solid #ccdeef",
                                    color: "#000",
                                  }}
                                >
                                  Lands*
                                </label>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  name="propertyType-coom-land"
                                  id="Land-sec1"
                                  defaultValue="Flat / Apartment"
                                  autoComplete="off"
                                  onChange={() => setPropertyTypeSelected(true)}
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
                                  name="propertyType-coom-land"
                                  id="Land-sec2"
                                  defaultValue="Retail Shop"
                                  autoComplete="off"
                                  onChange={() => setPropertyTypeSelected(true)}
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
                                  name="propertyType-coom-land"
                                  id="Land-sec3"
                                  defaultValue="Warehouse"
                                  autoComplete="off"
                                  onChange={() => setPropertyTypeSelected(true)}
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
                                  name="propertyType-coom-land"
                                  id="Land-sec4"
                                  defaultValue="Storage "
                                  autoComplete="off"
                                  onChange={() => setPropertyTypeSelected(true)}
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
                        {showBuilderSection && (
                          <div className="col-sm-12" id="builder-choose">
                            <div className="form-group row ">
                              <label className="form-label">
                                Select Builder *
                              </label>
                              <div className="col-sm-6">
                                <select
                                  className="form-select js-choice"
                                  data-search-enabled="true"
                                  onChange={(e) => setBuilder(e.target.value)}
                                >
                                  <option value="Godrej Properties">
                                    Godrej Properties
                                  </option>
                                  <option value="Supertech Ltd.">
                                    Supertech Ltd.
                                  </option>
                                  <option value="ATS Infrastructure Ltd.">
                                    ATS Infrastructure Ltd.
                                  </option>
                                  <option value="Jaypee Greens">
                                    Jaypee Greens
                                  </option>
                                  <option value="Mahagun Group">
                                    Mahagun Group
                                  </option>
                                  <option value="No builder">No builder</option>
                                  <option value="Amrapali Group">
                                    Amrapali Group
                                  </option>
                                </select>
                              </div>
                              <div className="col-sm-6">
                                <div className="d-flex align-items-center justify-content-start">
                                  <input
                                    type="checkbox"
                                    id="builder-not-aplliable"
                                    className="w-auto me-2"
                                    checked={noBuilder}
                                    onChange={(e) =>
                                      setNoBuilder(e.target.checked)
                                    }
                                  />
                                  <label htmlFor="builder-not-aplliable">
                                    No Builder
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {showProjectSection && (
                          <div className="col-sm-12 " id="Project-choose">
                            <div className="form-group ">
                              <label className="form-label">
                                Select Project (Society) *
                              </label>
                              <div className="col-sm-6">
                                <select
                                  className="form-select js-choice"
                                  data-search-enabled="true"
                                  onChange={(e) => setProject(e.target.value)}
                                >
                                  <option value="Supertech Eco Village 1">
                                    Supertech Eco Village 1
                                  </option>
                                  <option value="ATS Allure">ATS Allure</option>
                                  <option value="Jaypee Star Court">
                                    Jaypee Star Court
                                  </option>
                                  <option value="Mahagun My Laagoon">
                                    Mahagun My Laagoon
                                  </option>
                                  <option value="Amrapali Golf Homes">
                                    Amrapali Golf Homes
                                  </option>
                                  <option value="Ansal Sushant Serene Residency">
                                    Ansal Sushant Serene Residency
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        )}
                        {showTowerSection && (
                          <div className="col-sm-12" id="tower-choose">
                            <div className="form-group ">
                              <div className="btn-group" id="tower-selection">
                                <label
                                  className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                                  htmlFor=""
                                  style={{
                                    backgroundColor: "#dddee3",
                                    border: "1px solid #ccdeef",
                                    color: "#000",
                                  }}
                                >
                                  Tower/Block*
                                </label>
                                <label
                                  className="form-label"
                                  htmlFor="tower-selection"
                                />
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="propertyTower"
                                  id="towerA"
                                  defaultValue="A"
                                  autoComplete="off"
                                  onChange={() => setTower("Tower A")}
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="towerA"
                                >
                                  A
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="propertyTower"
                                  id="towerB"
                                  defaultValue="B"
                                  autoComplete="off"
                                  onChange={() => setTower("Tower B")}
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="towerB"
                                >
                                  B
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="propertyTower"
                                  id="towerC"
                                  defaultValue="C"
                                  autoComplete="off"
                                  onChange={() => setTower("Tower C")}
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="towerC"
                                >
                                  C
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="propertyTower"
                                  id="towerD"
                                  defaultValue="D"
                                  autoComplete="off"
                                  onChange={() => setTower("Tower D")}
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="towerD"
                                >
                                  D
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="propertyTower"
                                  id="towerE"
                                  defaultValue="E"
                                  autoComplete="off"
                                  onChange={() => setTower("Tower E")}
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="towerE"
                                >
                                  E
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="propertyTower"
                                  id="towerF"
                                  defaultValue="F"
                                  autoComplete="off"
                                  onChange={() => setTower("Tower F")}
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="towerF"
                                >
                                  F
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="propertyTower"
                                  id="towerG"
                                  defaultValue="G"
                                  autoComplete="off"
                                  onChange={() => setTower("Tower G")}
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="towerG"
                                >
                                  G
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
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        name="propertyTower"
                                        id="towerH"
                                        defaultValue="H"
                                        autoComplete="off"
                                        onChange={() => setTower("Tower H")}
                                      />
                                      <label
                                        className="dropdown-item"
                                        htmlFor="towerH"
                                      >
                                        H
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        name="propertyTower"
                                        id="towerI"
                                        defaultValue="I"
                                        autoComplete="off"
                                        onChange={() => setTower("Tower I")}
                                      />
                                      <label
                                        className="dropdown-item"
                                        htmlFor="towerI"
                                      >
                                        I
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        name="propertyTower"
                                        id="towerJ"
                                        defaultValue="J"
                                        autoComplete="off"
                                        onChange={() => setTower("Tower J")}
                                      />
                                      <label
                                        className="dropdown-item"
                                        htmlFor="towerJ"
                                      >
                                        J
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        name="propertyTower"
                                        id="towerK"
                                        defaultValue="K"
                                        autoComplete="off"
                                        onChange={() => setTower("Tower K")}
                                      />
                                      <label
                                        className="dropdown-item"
                                        htmlFor="towerK"
                                      >
                                        K
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {showLayoutSection && (
                          <div className="col-sm-12" id="layout-choose">
                            <div className="form-group ">
                              <div className="btn-group" id="tower-selection">
                                <label
                                  className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                                  htmlFor=""
                                  style={{
                                    backgroundColor: "#dddee3",
                                    border: "1px solid #ccdeef",
                                    color: "#000",
                                  }}
                                >
                                  Layout*
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="propertyType"
                                  id="type1BHK"
                                  defaultValue="1BHK"
                                  autoComplete="off"
                                  onChange={() => setLayout("Layout A")}
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="type1BHK"
                                >
                                  1BHK
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="propertyType"
                                  id="type2BHK"
                                  defaultValue="2BHK"
                                  autoComplete="off"
                                  onChange={() => setLayout("Layout B")}
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="type2BHK"
                                >
                                  2BHK
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="propertyType"
                                  id="type3BHK"
                                  defaultValue="3BHK"
                                  autoComplete="off"
                                  onChange={() => setLayout("Layout C")}
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="type3BHK"
                                >
                                  3BHK
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="propertyType"
                                  id="typeOther"
                                  defaultValue="4BHK"
                                  autoComplete="off"
                                  onChange={() => setLayout("Layout C")}
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="typeOther"
                                >
                                  other
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
                                    More
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        name="propertyTower"
                                        id="type7BHK"
                                        defaultValue="7BHK"
                                        autoComplete="off"
                                      />
                                      <label
                                        className="dropdown-item"
                                        htmlFor="type7BHK"
                                      >
                                        duplex
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {showSizeSection && (
                          <div className="col-sm-12" id="size-choose">
                            <div className="form-group ">
                              <div
                                className="btn-group"
                                id="total-floor-selection"
                              >
                                <label
                                  className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                                  htmlFor=""
                                  style={{
                                    backgroundColor: "#dddee3",
                                    border: "1px solid #ccdeef",
                                    color: "#000",
                                  }}
                                >
                                  Size*
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="SelectSize-new"
                                  id="size1"
                                  defaultValue="915 SQFT"
                                  autoComplete="off"
                                  onChange={(e) => setSize(e.target.value)}
                                  value="915 SQFT"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="size1"
                                >
                                  915 SQFT
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="SelectSize-new"
                                  id="size2"
                                  defaultValue="1105 SQFT"
                                  autoComplete="off"
                                  onChange={(e) => setSize(e.target.value)}
                                  value="1105 SQFT"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="size2"
                                >
                                  {" "}
                                  1105 SQFT
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="SelectSize-new"
                                  id="size3"
                                  defaultValue="915 SQFT"
                                  autoComplete="off"
                                  onChange={(e) => setSize(e.target.value)}
                                  value="1350 SQFT"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="size3"
                                >
                                  {" "}
                                  1350 SQFT
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="SelectSize-new"
                                  id="otherSize"
                                  // defaultValue="915 SQFT"
                                  autoComplete="off"
                                  onChange={(e) => setSize(e.target.value)}
                                  value="Other"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="otherSize"
                                >
                                  Others
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
                                    More
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        name="propertyTower"
                                        id=""
                                        defaultValue="35+"
                                        autoComplete="off"
                                      />
                                      <label
                                        className="dropdown-item"
                                        htmlFor=""
                                      >
                                        Not Apllicable
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {showOtherInput && (
                          <div className="col-sm-6">
                            <div className="form-group" id="othern-deail">
                              <label className="form-label">
                                Other Details
                              </label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  value={otherSize}
                                  onChange={(e) => setOtherSize(e.target.value)}
                                />
                                <button
                                  type="submit"
                                  // onClick={(e) => {
                                  //   e.preventDefault();
                                  //   if (otherSize.trim()) setShowFloor(true);
                                  // }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    if (otherSize.trim()) setShowCards(true); // ✅ Only show cards on NEXT click
                                  }}
                                  className="btn btn-primary"
                                  style={{
                                    backgroundColor: "#dddee3",
                                    border: "1px solid #ccdeef",
                                    color: "#000",
                                  }}
                                >
                                  next
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                        {showPropertyLayout && (
                          <div className="col-sm-12" id="property-layout">
                            <div className="row my-3">
                              <div
                             className={`col-md-4 ${selectedCard === "card1" ? "selected" : ""}`}
                             onClick={() => {
                               setSelectedCard("card1");
                               setShowFloor(true);
                             }}
                              >
                                <input
                                  type="radio"
                                  name="property"
                                  id="property1"
                                  className="property-radio d-none"
                                />
                                <label
                                  htmlFor="property1"
                                  className="card property-card p-3 property-label"
                                >
                                  <div>
                                    <h5
                                      className="card-title mb-0 fw-bold"
                                      style={{ fontSize: 15 }}
                                    >
                                      {" "}
                                      1165 sq.ft.{" "}
                                      <span className="fw-light">
                                        {" "}
                                        (108.23 sq.m.)
                                      </span>
                                    </h5>
                                    <p
                                      className="mb-0"
                                      style={{ fontSize: 13 }}
                                    >
                                      Super Built-up Area | 2 BHK
                                    </p>
                                  </div>
                                  <div className="my-2">
                                    <img
                                      src={property}
                                      alt="Property Image"
                                      className="property-image"
                                    />
                                  </div>
                                  <div className="property-details">
                                    <h6 className="price mb-2">₹ 85.16 L</h6>
                                    <div className="property-deatil-start bg-light border-0 rounded">
                                      <p
                                        className="mb-0"
                                        style={{ fontSize: 13 }}
                                      >
                                        Ready To Move
                                      </p>
                                      <p
                                        className="mb-0"
                                        style={{ fontSize: 13 }}
                                      >
                                        Mar '23 possession
                                      </p>
                                    </div>
                                  </div>
                                </label>
                              </div>
                              <div
                                className="col-md-4 {`property-card ${selectedCard === 'card1' ? 'selected' : ''}`}"
                                onClick={() => {
                                  setSelectedCard("card1");
                                  setShowFloor(true);
                                }}
                              >
                                <input
                                  type="radio"
                                  name="property"
                                  id="property2"
                                  className="property-radio d-none"
                                />
                                <label
                                  htmlFor="property2"
                                  className="card property-card p-3 property-label"
                                >
                                  <div>
                                    <h5
                                      className="card-title mb-0 fw-bold"
                                      style={{ fontSize: 15 }}
                                    >
                                      {" "}
                                      1165 sq.ft.{" "}
                                      <span className="fw-light">
                                        {" "}
                                        (108.23 sq.m.)
                                      </span>
                                    </h5>
                                    <p
                                      className="mb-0"
                                      style={{ fontSize: 13 }}
                                    >
                                      Super Built-up Area | 2 BHK
                                    </p>
                                  </div>
                                  <div className="my-2">
                                    <img
                                      src={property}
                                      alt="Property Image"
                                      className="property-image"
                                    />
                                  </div>
                                  <div className="property-details">
                                    <h6 className="price mb-2">₹ 85.16 L</h6>
                                    <div className="property-deatil-start bg-light border-0 rounded">
                                      <p
                                        className="mb-0"
                                        style={{ fontSize: 13 }}
                                      >
                                        Ready To Move
                                      </p>
                                      <p
                                        className="mb-0"
                                        style={{ fontSize: 13 }}
                                      >
                                        Mar '23 possession
                                      </p>
                                    </div>
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
          //                 <div className="col-sm-12" id="property-layout">
          //                 <div className="row my-3">
          //                   {["card1", "card2"].map((card) => (
          //                     <div
          //                       key={card}
          //                       className={`col-md-4 property-card ${
          //                         selectedCard === "card1" ? "selected" : ""
          //                       }`}
          //                       onClick={() => {
          //                         setSelectedCard("card1");
          // setShowFloor(true);
          //                       }}
          //                     >
          //                       <input
          //                         type="radio"
          //                         name="property"
          //                         id={card}
          //                         className="property-radio d-none"
          //                       />
          //                       <label
          //                         htmlFor={card}
          //                         className="card property-card p-3 property-label"
          //                       >
          //                         <div>
          //                           <h5 className="card-title mb-0 fw-bold" style={{ fontSize: 15 }}>
          //                             1165 sq.ft. <span className="fw-light">(108.23 sq.m.)</span>
          //                           </h5>
          //                           <p className="mb-0" style={{ fontSize: 13 }}>
          //                             Super Built-up Area | 2 BHK
          //                           </p>
          //                         </div>
          //                         <div className="my-2">
          //                           <img
          //                             src="https://via.placeholder.com/200x100"
          //                             alt="Property"
          //                             className="property-image"
          //                           />
          //                         </div>
          //                         <div className="property-details">
          //                           <h6 className="price mb-2">₹ 85.16 L</h6>
          //                           <div className="property-deatil-start bg-light border-0 rounded">
          //                             <p className="mb-0" style={{ fontSize: 13 }}>
          //                               Ready To Move
          //                             </p>
          //                             <p className="mb-0" style={{ fontSize: 13 }}>
          //                               Mar '23 possession
          //                             </p>
          //                           </div>
          //                         </div>
          //                       </label>
          //                     </div>
          //                   ))}
          //                 </div>
          //               </div>
                        )}
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                      .property-label {\n                        cursor: pointer;\n                        transition: background 0.3s ease;\n                        background: white;\n                      }\n                      .property-radio:checked + .property-label {\n                        background: grey;\n                      }\n                    ",
                          }}
                        />
                        {showFloor && (
                          <div className="col-sm-12" id="floor-choose">
                            <div className="form-group ">
                              <div
                                className="btn-group"
                                id="total-floor-selection"
                              >
                                <label
                                  className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                                  htmlFor=""
                                  style={{
                                    backgroundColor: "#dddee3",
                                    border: "1px solid #ccdeef",
                                    color: "#000",
                                  }}
                                >
                                  Floor*
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="totalFloor"
                                  id="floor1"
                                  defaultValue="1-5"
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="floor1"
                                >
                                  1-5
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="totalFloor"
                                  id="floor2"
                                  defaultValue="5-10"
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="floor2"
                                >
                                  5-10
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="totalFloor"
                                  id="floor3"
                                  defaultValue="10-15"
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="floor3"
                                >
                                  10-15
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="totalFloor"
                                  id="floor4"
                                  defaultValue="15-20"
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="floor4"
                                >
                                  15-20
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="totalFloor"
                                  id="floor5"
                                  defaultValue="20-25"
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="floor5"
                                >
                                  20-25
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="totalFloor"
                                  id="floor6"
                                  defaultValue="25-30"
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-secondary"
                                  htmlFor="floor6"
                                >
                                  25-30
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
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        name="propertyTower"
                                        id=""
                                        defaultValue="35+"
                                        autoComplete="off"
                                      />
                                      <label
                                        className="dropdown-item"
                                        htmlFor=""
                                      >
                                        35+
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="col-sm-12">
                          <div className="form-group">
                            {/* Radio Buttons */}
                            <div className="btn-group">
                              <label
                                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                                style={{
                                  backgroundColor: "#dddee3",
                                  border: "1px solid #ccdeef",
                                  color: "#000",
                                }}
                              >
                                Address*
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                name="addressType"
                                id="current-location-btn"
                                autoComplete="off"
                                onClick={handleCurrentLocation}
                              />
                              <label
                                className="btn btn-outline-secondary"
                                htmlFor="current-location-btn"
                              >
                                <i className="fas fa-map-marker-alt me-2" />
                                Current
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                name="addressType"
                                id="manual-entry-btn"
                                autoComplete="off"
                                onClick={handleManualEntry}
                              />
                              <label
                                className="btn btn-outline-secondary"
                                htmlFor="manual-entry-btn"
                              >
                                <i className="fas fa-pencil-alt me-2" />
                                Manually
                              </label>
                            </div>

                            {/* Current Location Fields */}
                            {isCurrentLocation && (
                              <div className="mt-0 row g-4" id="for-current">
                                <div className="col-md-6">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="current-country"
                                    placeholder="Country"
                                    value={locationData.country}
                                    readOnly
                                  />
                                </div>
                                <div className="col-md-6">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="current-state"
                                    placeholder="State"
                                    value={locationData.state}
                                    readOnly
                                  />
                                </div>
                                <div className="col-md-6">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="current-city"
                                    placeholder="City"
                                    value={locationData.city}
                                    readOnly
                                  />
                                </div>
                                <div className="col-md-6">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="current-zip"
                                    placeholder="Zip Code"
                                    value={locationData.zip}
                                    readOnly
                                  />
                                </div>
                              </div>
                            )}

                            {/* Manual Entry Fields */}
                            {isManualEntry && (
                              <div className="mt-0 row g-4" id="for-manual">
                                <div className="col-md-6">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="manual-country"
                                    placeholder="Country"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="manual-state"
                                    placeholder="State"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="manual-city"
                                    placeholder="City"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="manual-street"
                                    placeholder="Street Address"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="manual-zip"
                                    placeholder="Zip Code"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-12 text-end">
                          <button
                            type="button"
                            id="saveContinueBtn"
                            className="btn btn-sm btn-primary mb-0"
                          >
                            Save &amp; Continue
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
   
                </div>
                <div className="tab-pane fade" id="nav-setting-tab-2">
  <div className="card ">
    <div className="card-header border-0 pb-0">
      <h1 className="h5 card-title">Unit &amp; Pricing Details</h1>
    </div>
    <div className="card-body">
      {/* Form settings START */}
      <form className="row g-3" id="add-pr0perty-basic">
        <div className="col-sm-12">
          <div className="form-group ">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                Rooms*
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalRooms"
                id="totalRooms2"
                autoComplete="off"
                defaultValue={2}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalRooms2"
              >
                2
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalRooms"
                id="totalRooms3"
                autoComplete="off"
                defaultValue={3}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalRooms3"
              >
                3
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalRooms"
                id="totalRooms4"
                autoComplete="off"
                defaultValue={4}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalRooms4"
              >
                4
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalRooms"
                id="totalRooms5"
                autoComplete="off"
                defaultValue={5}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalRooms5"
              >
                5
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalRooms"
                id="totalRooms6"
                autoComplete="off"
                defaultValue={6}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalRooms6"
              >
                6
              </label>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid  #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <input
                      type="radio"
                      className="btn-check"
                      name="totalRooms"
                      id="totalRooms5"
                      autoComplete="off"
                      defaultValue={5}
                    />
                    <label className="dropdown-item" htmlFor="totalRooms5">
                      7
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="btn-check"
                      name="totalRooms"
                      id="totalRooms6"
                      autoComplete="off"
                      defaultValue={6}
                    />
                    <label className="dropdown-item" htmlFor="totalRooms6">
                      8
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="btn-check"
                      name="totalRooms"
                      id="totalRooms4"
                      autoComplete="off"
                      defaultValue={4}
                    />
                    <label className="dropdown-item" htmlFor="totalRooms4">
                      9
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group ">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                Bathrooms*
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalBathrooms"
                id="totalBathrooms1"
                autoComplete="off"
                defaultValue={1}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalBathrooms1"
              >
                1
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalBathrooms"
                id="totalBathrooms2"
                autoComplete="off"
                defaultValue={2}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalBathrooms2"
              >
                2
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalBathrooms"
                id="totalBathrooms3"
                autoComplete="off"
                defaultValue={3}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalBathrooms3"
              >
                3
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalBathrooms"
                id="totalBathrooms4"
                autoComplete="off"
                defaultValue={4}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalBathrooms4"
              >
                4
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalBathrooms"
                id="totalBathrooms5"
                autoComplete="off"
                defaultValue={5}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalBathrooms5"
              >
                5
              </label>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid  #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <input
                      type="radio"
                      className="btn-check"
                      name="totalBathrooms"
                      id="totalBathrooms4"
                      autoComplete="off"
                      defaultValue={4}
                    />
                    <label className="dropdown-item" htmlFor="totalBathrooms4">
                      4
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="btn-check"
                      name="totalBathrooms"
                      id="totalBathrooms5"
                      autoComplete="off"
                      defaultValue={5}
                    />
                    <label className="dropdown-item" htmlFor="totalBathrooms5">
                      5
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="btn-check"
                      name="totalBathrooms"
                      id="totalBathrooms6"
                      autoComplete="off"
                      defaultValue={6}
                    />
                    <label className="dropdown-item" htmlFor="totalBathrooms6">
                      6
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group ">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                Balconies*
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalBalconies"
                id="totalBalconies1"
                autoComplete="off"
                defaultValue={1}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalBalconies1"
              >
                1
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalBalconies"
                id="totalBalconies2"
                autoComplete="off"
                defaultValue={2}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalBalconies2"
              >
                2
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalBalconies"
                id="totalBalconies3"
                autoComplete="off"
                defaultValue={3}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalBalconies3"
              >
                3
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalBalconies"
                id="totalBalconies4"
                autoComplete="off"
                defaultValue={4}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalBalconies4"
              >
                4
              </label>
              <input
                type="radio"
                className="btn-check"
                name="totalBalconies"
                id="totalBalconies5"
                autoComplete="off"
                defaultValue={5}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="totalBalconies5"
              >
                5
              </label>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid  #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <input
                      type="radio"
                      className="btn-check"
                      name="totalBalconies"
                      id="totalBalconies4"
                      autoComplete="off"
                      defaultValue={4}
                    />
                    <label className="dropdown-item" htmlFor="totalBalconies4">
                      4
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="btn-check"
                      name="totalBalconies"
                      id="totalBalconies5"
                      autoComplete="off"
                      defaultValue={5}
                    />
                    <label className="dropdown-item" htmlFor="totalBalconies5">
                      5
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="btn-check"
                      name="totalBalconies"
                      id="totalBalconies6"
                      autoComplete="off"
                      defaultValue={6}
                    />
                    <label className="dropdown-item" htmlFor="totalBalconies6">
                      6
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group ">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                More Rooms*
              </label>
              <input
                type="radio"
                className="btn-check"
                name="extraroom"
                id="extraroom1"
                autoComplete="off"
                defaultValue="Store room"
              />
              <label className="btn btn-outline-secondary" htmlFor="extraroom1">
                Storeroom
              </label>
              <input
                type="radio"
                className="btn-check"
                name="extraroom"
                id="extraroom3"
                autoComplete="off"
                defaultValue={3}
              />
              <label className="btn btn-outline-secondary" htmlFor="extraroom3">
                Pooja Room
              </label>
              <input
                type="radio"
                className="btn-check"
                name="extraroom"
                id="extraroom3"
                autoComplete="off"
                defaultValue={3}
              />
              <label className="btn btn-outline-secondary" htmlFor="extraroom3">
                Servert Room
              </label>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid  #ccc !important" }}
                >
                  More Rooms </button>
                <ul className="dropdown-menu">
                  <li>
                    <input
                      type="radio"
                      className="btn-check"
                      name="totalRooms"
                      id="totalRooms4"
                      autoComplete="off"
                      defaultValue={4}
                    />
                    <label className="dropdown-item" htmlFor="totalRooms4">
                      Studyroom
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="form-label">Super Area*</label>
            <div className="d-flex new-input-field-sec">
              <div className="w-100">
                <input
                  type="text"
                  className="border-0 w-100 "
                  placeholder="e.g. 40"
                />
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="border-0 dropdown-toggle bg-white"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  /sqft </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('/sqft')"
                    >
                      /sqft
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('/ft')"
                    >
                      /ft
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('/sqrd')"
                    >
                      /sqrd
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="form-label">Builtup Area*</label>
            <div className="d-flex new-input-field-sec">
              <div className="w-100">
                <input
                  type="text"
                  className="border-0 w-100"
                  placeholder="e.g. 40"
                />
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="border-0 dropdown-toggle bg-white"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  /sqft </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('/sqft')"
                    >
                      /sqft
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('/ft')"
                    >
                      /ft
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('/sqrd')"
                    >
                      /sqrd
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="form-label">Carpet Area*</label>
            <div className="d-flex new-input-field-sec">
              <div className="w-100">
                <input
                  type="text"
                  className="border-0  w-100"
                  placeholder="e.g. 12"
                />
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="border-0 dropdown-toggle bg-white"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  /sqft </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('/sqft')"
                    >
                      /sqft
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('/ft')"
                    >
                      /ft
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('/sqrd')"
                    >
                      /sqrd
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Price Asking */}
        <div className="col-sm-6">
          <div className="form-group">
            <label className="form-label">Price Asking</label>
            <div className="d-flex new-input-field-sec">
              <div className="w-100">
                <input
                  type="text"
                  className="border-0"
                  placeholder="e.g. ₹1700"
                />
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="border-0 dropdown-toggle bg-white"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  /sqft </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('/sqft')"
                    >
                      /sqft
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('/ft')"
                    >
                      /ft
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('/sqrd')"
                    >
                      /sqrd
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Negotiable */}
        <div className="col-sm-12">
          <div className="form-group">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                Negotiable*
              </label>
              <input
                type="radio"
                className="btn-check"
                name="negotiable"
                id="negotiable-yes"
                autoComplete="off"
                defaultValue="Yes"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="negotiable-yes"
              >
                Yes
              </label>
              <input
                type="radio"
                className="btn-check"
                name="negotiable"
                id="negotiable-no"
                autoComplete="off"
                defaultValue="No"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="negotiable-no"
              >
                No
              </label>
            </div>
          </div>
        </div>
        {/* Tax Included */}
        <div className="col-sm-12">
          <div className="form-group ">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                Tax Included*
              </label>
              <input
                type="radio"
                className="btn-check"
                name="taxIncluded"
                id="tax-yes"
                autoComplete="off"
                defaultValue="Yes"
              />
              <label className="btn btn-outline-secondary" htmlFor="tax-yes">
                Yes
              </label>
              <input
                type="radio"
                className="btn-check"
                name="taxIncluded"
                id="tax-no"
                autoComplete="off"
                defaultValue="No"
              />
              <label className="btn btn-outline-secondary" htmlFor="tax-no">
                No
              </label>
            </div>
          </div>
        </div>
        {/* Offer */}
        <div className="col-sm-12">
          <div className="form-group ">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                Offer*
              </label>
              <input
                type="radio"
                className="btn-check"
                name="offer"
                id="offer-free-registry"
                autoComplete="off"
                defaultValue="Free Registry"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="offer-free-registry"
              >
                Free Registry
              </label>
              <input
                type="radio"
                className="btn-check"
                name="offer"
                id="offer-dlf"
                autoComplete="off"
                defaultValue="DLF"
              />
              <label className="btn btn-outline-secondary" htmlFor="offer-dlf">
                DLF
              </label>
              {/* More Options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid  #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('10% off on Registry')"
                    >
                      10% off on Registry
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('Zero Stamp Duty')"
                    >
                      Zero Stamp Duty
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-end">
          <button type="submit" className="btn btn-sm btn-primary mb-0">
            Save &amp; Continue
          </button>
        </div>
      </form>
      {/* Settings END */}
    </div>
    {/* Card body END */}
  </div>
  {/* Notification END */}
</div>

<div className="tab-pane fade" id="nav-setting-tab-3">
  {/* Privacy and safety START */}
  <div className="card">
    {/* Card header START */}
    <div className="card-header border-0 pb-0">
      <h5 className="card-title">Amenities</h5>
    </div>
    {/* Card header START */}
    {/* Card body START */}
    <div className="card-body">
      {/* Privacy START */}
      <div className="row g-3">
        <div className="col-sm-12">
          <div className="form-group">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                <i className="fas fa-car" /> Parking
              </label>
              <input
                type="radio"
                className="btn-check"
                name="parking-availability"
                id="parking-detail-yes"
                autoComplete="off"
                defaultValue="yes"
                onclick="toggleParkingOptions()"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="parking-detail-yes"
              >
                Yes
              </label>
              <input
                type="radio"
                className="btn-check"
                name="parking-availability"
                id="parking-detail-no"
                autoComplete="off"
                defaultValue="no"
                onclick="toggleParkingOptions()"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="parking-detail-no"
              >
                No
              </label>
            </div>
          </div>
        </div>
        {/* Parking Options (Initially Hidden) */}
        <div id="parking-options" style={{ display: "none" }}>
          <div className="col-sm-12 mb-3">
            <div className="form-group">
              <div className="btn-group">
                <label
                  className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                  style={{
                    backgroundColor: "#dddee3",
                    border: "1px solid #ccdeef",
                    color: "#000"
                  }}
                >
                  <i className="fas fa-car" /> Open Parking
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="open-parking"
                  id="open-parking-1"
                  autoComplete="off"
                  defaultValue={1}
                />
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="open-parking-1"
                >
                  1
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="open-parking"
                  id="open-parking-2"
                  autoComplete="off"
                  defaultValue={2}
                />
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="open-parking-2"
                >
                  2
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="open-parking"
                  id="open-parking-3"
                  autoComplete="off"
                  defaultValue={3}
                />
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="open-parking-3"
                >
                  3
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="open-parking"
                  id="open-parking-4"
                  autoComplete="off"
                  defaultValue={4}
                />
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="open-parking-4"
                >
                  4
                </label>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <div className="btn-group">
                <label
                  className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                  style={{
                    backgroundColor: "#dddee3",
                    border: "1px solid #ccdeef",
                    color: "#000"
                  }}
                >
                  <i className="fas fa-warehouse" /> Covered Parking
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="covered-parking"
                  id="covered-parking-1"
                  autoComplete="off"
                  defaultValue={1}
                />
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="covered-parking-1"
                >
                  1
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="covered-parking"
                  id="covered-parking-2"
                  autoComplete="off"
                  defaultValue={2}
                />
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="covered-parking-2"
                >
                  2
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="covered-parking"
                  id="covered-parking-3"
                  autoComplete="off"
                  defaultValue={3}
                />
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="covered-parking-3"
                >
                  3
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="covered-parking"
                  id="covered-parking-4"
                  autoComplete="off"
                  defaultValue={4}
                />
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="covered-parking-4"
                >
                  4
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                <i className="fas fa-compass" /> Direction
              </label>
              <input
                type="radio"
                className="btn-check"
                name="property-direction"
                id="direction-north"
                autoComplete="off"
                defaultValue="North"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="direction-north"
              >
                North
              </label>
              <input
                type="radio"
                className="btn-check"
                name="property-direction"
                id="direction-south"
                autoComplete="off"
                defaultValue="South"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="direction-south"
              >
                South
              </label>
              <input
                type="radio"
                className="btn-check"
                name="property-direction"
                id="direction-east"
                autoComplete="off"
                defaultValue="East"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="direction-east"
              >
                East
              </label>
              <input
                type="radio"
                className="btn-check"
                name="property-direction"
                id="direction-west"
                autoComplete="off"
                defaultValue="West"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="direction-west"
              >
                West
              </label>
              {/* More Options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('North-East')"
                    >
                      North-East
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('North-West')"
                    >
                      North-West
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('South-East')"
                    >
                      South-East
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('South-West')"
                    >
                      South-West
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                <i className="fas fa-mountain" /> Overlooking
              </label>
              <input
                type="radio"
                className="btn-check"
                name="property-overlooking"
                id="overlooking-park"
                autoComplete="off"
                defaultValue="Park"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="overlooking-park"
              >
                Park
              </label>
              <input
                type="radio"
                className="btn-check"
                name="property-overlooking"
                id="overlooking-road"
                autoComplete="off"
                defaultValue="Road"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="overlooking-road"
              >
                Road
              </label>
              <input
                type="radio"
                className="btn-check"
                name="property-overlooking"
                id="overlooking-pool"
                autoComplete="off"
                defaultValue="Swimming Pool"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="overlooking-pool"
              >
                Swimming Pool
              </label>
              <input
                type="radio"
                className="btn-check"
                name="property-overlooking"
                id="overlooking-city"
                autoComplete="off"
                defaultValue="City View"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="overlooking-city"
              >
                City View
              </label>
              {/* More Options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('Sea View')"
                    >
                      Sea View
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('Lake View')"
                    >
                      Lake View
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('Mountain View')"
                    >
                      Mountain View
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('Garden View')"
                    >
                      Garden View
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                <i className="fas fa-bolt" /> Power Backup
              </label>
              <input
                type="radio"
                className="btn-check"
                name="power-backup"
                id="power-backup-full"
                autoComplete="off"
                defaultValue="Full Backup"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="power-backup-full"
              >
                Full Backup
              </label>
              <input
                type="radio"
                className="btn-check"
                name="power-backup"
                id="power-backup-partial"
                autoComplete="off"
                defaultValue="Partial Backup"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="power-backup-partial"
              >
                Partial Backup
              </label>
              <input
                type="radio"
                className="btn-check"
                name="power-backup"
                id="power-backup-no"
                autoComplete="off"
                defaultValue="No Backup"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="power-backup-no"
              >
                No Backup
              </label>
              {/* More Options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('Solar Backup')"
                    >
                      Solar Backup
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('Generator Backup')"
                    >
                      Generator Backup
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                <i className="fas fa-road" /> Road Facing (Size in Mtrs)
              </label>
              <input
                type="radio"
                className="btn-check"
                name="road-facing"
                id="road-facing-6"
                autoComplete="off"
                defaultValue={6}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="road-facing-6"
              >
                6 Mtrs
              </label>
              <input
                type="radio"
                className="btn-check"
                name="road-facing"
                id="road-facing-9"
                autoComplete="off"
                defaultValue={9}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="road-facing-9"
              >
                9 Mtrs
              </label>
              <input
                type="radio"
                className="btn-check"
                name="road-facing"
                id="road-facing-12"
                autoComplete="off"
                defaultValue={12}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="road-facing-12"
              >
                12 Mtrs
              </label>
              <input
                type="radio"
                className="btn-check"
                name="road-facing"
                id="road-facing-18"
                autoComplete="off"
                defaultValue={18}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="road-facing-18"
              >
                18 Mtrs
              </label>
              {/* More Options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('24 Mtrs')"
                    >
                      24 Mtrs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLayoutSize('30 Mtrs')"
                    >
                      30 Mtrs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                <i className="fas fa-map-marked-alt" /> Location Advantages
              </label>
              <input
                type="radio"
                className="btn-check"
                name="location-advantage"
                id="location-advantage-metro"
                autoComplete="off"
                defaultValue="Near Metro"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="location-advantage-metro"
              >
                Near Metro
              </label>
              <input
                type="radio"
                className="btn-check"
                name="location-advantage"
                id="location-advantage-airport"
                autoComplete="off"
                defaultValue="Near Airport"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="location-advantage-airport"
              >
                Near Airport
              </label>
              <input
                type="radio"
                className="btn-check"
                name="location-advantage"
                id="location-advantage-hospital"
                autoComplete="off"
                defaultValue="Near Hospital"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="location-advantage-hospital"
              >
                Near Hospital
              </label>
              <input
                type="radio"
                className="btn-check"
                name="location-advantage"
                id="location-advantage-mall"
                autoComplete="off"
                defaultValue="Near Mall"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="location-advantage-mall"
              >
                Near Mall
              </label>
              {/* More Options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLocationAdvantage('Near School')"
                    >
                      Near School
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setLocationAdvantage('Near IT Hub')"
                    >
                      Near IT Hub
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                <i className="fas fa-th-large" /> Floor Type
              </label>
              <input
                type="radio"
                className="btn-check"
                name="floor-type"
                id="floor-type-marble"
                autoComplete="off"
                defaultValue="Marble"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="floor-type-marble"
              >
                Marble
              </label>
              <input
                type="radio"
                className="btn-check"
                name="floor-type"
                id="floor-type-tile"
                autoComplete="off"
                defaultValue="Tile"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="floor-type-tile"
              >
                Tile
              </label>
              <input
                type="radio"
                className="btn-check"
                name="floor-type"
                id="floor-type-wooden"
                autoComplete="off"
                defaultValue="Wooden"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="floor-type-wooden"
              >
                Wooden
              </label>
              <input
                type="radio"
                className="btn-check"
                name="floor-type"
                id="floor-type-granite"
                autoComplete="off"
                defaultValue="Granite"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="floor-type-granite"
              >
                Granite
              </label>
              {/* More Options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setFloorType('Vinyl')"
                    >
                      Vinyl
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setFloorType('Carpet')"
                    >
                      Carpet
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                <i className="fas fa-star" /> USP / Facings
              </label>
              <input
                type="radio"
                className="btn-check"
                name="usp-facing"
                id="usp-road-facing"
                autoComplete="off"
                defaultValue="Road Facing"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="usp-road-facing"
              >
                Road Facing
              </label>
              <input
                type="radio"
                className="btn-check"
                name="usp-facing"
                id="usp-garden-facing"
                autoComplete="off"
                defaultValue="Garden Facing"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="usp-garden-facing"
              >
                Garden Facing
              </label>
              <input
                type="radio"
                className="btn-check"
                name="usp-facing"
                id="usp-lake-facing"
                autoComplete="off"
                defaultValue="Lake Facing"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="usp-lake-facing"
              >
                Lake Facing
              </label>
              <input
                type="radio"
                className="btn-check"
                name="usp-facing"
                id="usp-sunlight"
                autoComplete="off"
                defaultValue="Ample Sunlight"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="usp-sunlight"
              >
                Ample Sunlight
              </label>
              {/* More Options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setUSP('Park Facing')"
                    >
                      Park Facing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setUSP('City View')"
                    >
                      City View
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setUSP('Mountain View')"
                    >
                      {" "}
                      Mountain View
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                <i className="fas fa-tint" /> Water Source
              </label>
              <input
                type="radio"
                className="btn-check"
                name="water-source"
                id="water-municipal"
                autoComplete="off"
                defaultValue="Municipal Supply"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="water-municipal"
              >
                {" "}
                Municipal Supply
              </label>
              <input
                type="radio"
                className="btn-check"
                name="water-source"
                id="water-borewell"
                autoComplete="off"
                defaultValue="Borewell"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="water-borewell"
              >
                Borewell
              </label>
              <input
                type="radio"
                className="btn-check"
                name="water-source"
                id="water-tanker"
                autoComplete="off"
                defaultValue="Tanker Supply"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="water-tanker"
              >
                Tanker Supply
              </label>
              <input
                type="radio"
                className="btn-check"
                name="water-source"
                id="water-rain"
                autoComplete="off"
                defaultValue="Rainwater Harvesting"
              />
              <label className="btn btn-outline-secondary" htmlFor="water-rain">
                Rainwater Harvesting
              </label>
              {/* More Options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setWaterSource('Well')"
                    >
                      Well
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setWaterSource('RO Purified')"
                    >
                      RO Purified
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                <i className="fas fa-th-large" /> Property Features
              </label>
              <input
                type="radio"
                className="btn-check"
                name="floor-type"
                id="floor-type-marble"
                autoComplete="off"
                defaultValue="Marble"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="floor-type-marble"
              >
                Marble
              </label>
              <input
                type="radio"
                className="btn-check"
                name="floor-type"
                id="floor-type-tile"
                autoComplete="off"
                defaultValue="Tile"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="floor-type-tile"
              >
                Tile
              </label>
              <input
                type="radio"
                className="btn-check"
                name="floor-type"
                id="floor-type-wooden"
                autoComplete="off"
                defaultValue="Wooden"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="floor-type-wooden"
              >
                Wooden
              </label>
              <input
                type="radio"
                className="btn-check"
                name="floor-type"
                id="floor-type-granite"
                autoComplete="off"
                defaultValue="Granite"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="floor-type-granite"
              >
                Granite
              </label>
              {/* More Options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setFloorType('Vinyl')"
                    >
                      Vinyl
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setFloorType('Carpet')"
                    >
                      Carpet
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                <i className="fas fa-swimming-pool"> </i> Amenities
              </label>
              <input
                type="radio"
                className="btn-check"
                name="amenities"
                id="amenity-gym"
                autoComplete="off"
                defaultValue="Gym"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="amenity-gym"
              >
                Gym
              </label>
              <input
                type="radio"
                className="btn-check"
                name="amenities"
                id="amenity-park"
                autoComplete="off"
                defaultValue="Park"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="amenity-park"
              >
                Park
              </label>
              <input
                type="radio"
                className="btn-check"
                name="amenities"
                id="amenity-clubhouse"
                autoComplete="off"
                defaultValue="Clubhouse"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="amenity-clubhouse"
              >
                Clubhouse
              </label>
              <input
                type="radio"
                className="btn-check"
                name="amenities"
                id="amenity-swimming"
                autoComplete="off"
                defaultValue="Swimming Pool"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="amenity-swimming"
              >
                Swimming Pool
              </label>
              {/* More Options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setAmenities('Tennis Court')"
                    >
                      Tennis Court
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setAmenities('Community Hall')"
                    >
                      Community Hall
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                <i className="fas fa-map" /> In-House Assets Mapping
              </label>
              <input
                type="radio"
                className="btn-check"
                name="assets-mapping"
                id="asset-land"
                autoComplete="off"
                defaultValue="Land"
              />
              <label className="btn btn-outline-secondary" htmlFor="asset-land">
                Land
              </label>
              <input
                type="radio"
                className="btn-check"
                name="assets-mapping"
                id="asset-building"
                autoComplete="off"
                defaultValue="Building"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="asset-building"
              >
                Building
              </label>
              <input
                type="radio"
                className="btn-check"
                name="assets-mapping"
                id="asset-equipment"
                autoComplete="off"
                defaultValue="Equipment"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="asset-equipment"
              >
                Equipment
              </label>
              <input
                type="radio"
                className="btn-check"
                name="assets-mapping"
                id="asset-vehicles"
                autoComplete="off"
                defaultValue="Vehicles"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="asset-vehicles"
              >
                Vehicles
              </label>
              {/* More Options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setAssetsMapping('Furniture')"
                    >
                      Furniture
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setAssetsMapping('Machinery')"
                    >
                      Machinery
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                <i className="fas fa-check-circle" />
              </label>
              <input
                type="radio"
                className="btn-check"
                name="approved-by"
                id="approved-yeida"
                autoComplete="off"
                defaultValue="YEIDA"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="approved-yeida"
              >
                YEIDA
              </label>
              <input
                type="radio"
                className="btn-check"
                name="approved-by"
                id="approved-gnida"
                autoComplete="off"
                defaultValue="GNIDA"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="approved-gnida"
              >
                GNIDA
              </label>
              <input
                type="radio"
                className="btn-check"
                name="approved-by"
                id="approved-noida"
                autoComplete="off"
                defaultValue="NOIDA"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="approved-noida"
              >
                NOIDA
              </label>
              {/* More Options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setApproval('RERA Approved')"
                    >
                      RERA Approved
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="setApproval('Govt Approved')"
                    >
                      Govt Approved
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    {/* Card body END */}
    {/* Button save */}
    <div className="card-footer pt-0 text-end border-0">
      <button type="submit" className="btn btn-sm btn-primary mb-0">
        Save changes
      </button>
    </div>
  </div>
  {/* Privacy and safety END */}
</div>
<div className="tab-pane fade" id="nav-setting-tab-4">
  {/* Communications START */}
  <div className="card" id="add-pr0perty-basic">
    {/* Title START */}
    <div className="card-header border-0 pb-0">
      <h5 className="card-title">Rera &amp; Possession Status </h5>
    </div>
    {/* Title START */}
    {/* Card body START */}
    <div className="card-body">
      {/* Accordion START */}
      <form className="row g-3">
        <div className="col-sm-12">
          <div className="form-group ">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                Rera Status*
              </label>
              <input
                type="radio"
                className="btn-check"
                name="propertySubCategory"
                id="add-subCategory1"
                autoComplete="off"
                defaultValue="Panchshil"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="add-subCategory1"
              >
                Registered
              </label>
              <input
                type="radio"
                className="btn-check"
                name="propertySubCategory"
                id="add-subCategory2"
                autoComplete="off"
                defaultValue="DLF"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="add-subCategory2"
              >
                Not Registered
              </label>
              <input
                type="radio"
                className="btn-check"
                name="propertySubCategory"
                id="add-subCategory3"
                autoComplete="off"
                defaultValue="Panchshil"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="add-subCategory3"
              >
                RERA Registered
              </label>
            </div>
          </div>
        </div>
         <div className="registration-form">
      <div className="col-sm-12">
        <div className="form-group">
          <div className="btn-group">
            <label
              className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
              htmlFor=""
              style={{
                backgroundColor: "#dddee3",
                border: "1px solid #ccdeef",
                color: "#000",
              }}
            >
              Type*
            </label>
            <input
              type="radio"
              className="btn-check"
              name="registrationType"
              id="regTypeIndividual"
              autoComplete="off"
              value="individual"
          checked={regType === "individual"}
          onChange={(e) => setRegType(e.target.value)}
            />
            <label
              className="btn btn-outline-secondary"
              htmlFor="regTypeIndividual"
            >
              Individual
            </label>
            <input
              type="radio"
              className="btn-check"
              name="registrationType"
              id="regTypeCompany"
              autoComplete="off"
              value="company"
              checked={regType === "company"}
              onChange={(e) => setRegType(e.target.value)}
            />
            <label
              className="btn btn-outline-secondary"
              htmlFor="regTypeCompany"
            >
              Company
            </label>
          </div>
        </div>
      </div>
      {regType === "company" && (
        <div className="col-sm-12 mt-3" >
          <div className="form-group">
            <label className="form-label">Company Details</label>
            <div className="d-flex justify-content-between gap-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Company Name"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Enter Registration Number"
              />
            </div>
          </div>
        </div>
   )}
    </div>
        <div className="col-sm-6 ">
          <div className="form-group">
            <label className="form-label">Contact Details</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Contact Number"
            />
          </div>
        </div>
        {/* Possession Status */}
        <div className="col-sm-12">
          <div className="form-group ">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                Possession Status*
              </label>
              <input
                type="radio"
                className="btn-check"
                name="possessionStatus"
                id="possession-owned"
                autoComplete="off"
                defaultValue="Owned"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="possession-owned"
              >
                Owned
              </label>
              <input
                type="radio"
                className="btn-check"
                name="possessionStatus"
                id="possession-under-process"
                autoComplete="off"
                defaultValue="Under Process"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="possession-under-process"
              >
                Under Process
              </label>
              {/* Bootstrap Dropdown for more options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid  #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="selectProject('Pending')"
                    >
                      Pending
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Structure Type */}
        <div className="col-sm-12">
          <div className="form-group ">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                Structure Type*
              </label>
              <input
                type="radio"
                className="btn-check"
                name="structureType"
                id="structure-duplex"
                autoComplete="off"
                defaultValue="Duplex"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="structure-duplex"
              >
                Duplex
              </label>
              <input
                type="radio"
                className="btn-check"
                name="structureType"
                id="structure-penthouse"
                autoComplete="off"
                defaultValue="Penthouse"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="structure-penthouse"
              >
                Penthouse
              </label>
              {/* Bootstrap Dropdown for more options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid  #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="selectProject('Pending')"
                    >
                      Pending
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Transfer / Registry Status */}
        <div className="col-sm-12">
          <div className="form-group ">
            <div className="btn-group">
              <label
                className="btn btn-secondary d-flex align-items-center new-style-section-fortitle"
                htmlFor=""
                style={{
                  backgroundColor: "#dddee3",
                  border: "1px solid #ccdeef",
                  color: "#000"
                }}
              >
                Registry Status*
              </label>
              <input
                type="radio"
                className="btn-check"
                name="registryStatus"
                id="registry-registered"
                autoComplete="off"
                defaultValue="Registered"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="registry-registered"
              >
                Registered
              </label>
              <input
                type="radio"
                className="btn-check"
                name="registryStatus"
                id="registry-not-registered"
                autoComplete="off"
                defaultValue="Not Registered"
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="registry-not-registered"
              >
                Not Registered
              </label>
              {/* Bootstrap Dropdown for more options */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle new-toogle-hover-sec"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "1px solid  #ccc !important" }}
                >
                  More </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onclick="selectProject('Under Process')"
                    >
                      Under Process
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Possession Date / Year */}
        <div className="col-sm-6">
      <div className="form-group">
        <label className="form-label">Possession Date / Year</label>
        <Flatpickr
          className="form-control"
          value={date}
          onChange={(selectedDates) => {
            setDate(selectedDates[0]);
          }}
          options={{
            dateFormat: "d-m-Y",
          }}
          placeholder="Select date"
        />
      </div>
    </div>
      </form>
      {/* Accordion END */}
    </div>
    {/* Card body END */}
    {/* Button save */}
    <div className="card-footer pt-0 text-end border-0">
      <button type="submit" className="btn btn-sm btn-primary mb-0">
        Save &amp; Continue
      </button>
    </div>
  </div>
  {/* Communications  END */}
</div>
<div className="tab-pane fade" id="nav-setting-tab-7">
      {/* Card START */}
      <div className="card" id="add-property-basic">
        {/* Card Header */}
        <div className="card-header border-0 pb-0">
          <h5 className="card-title">Upload Property Photos & Videos</h5>
        </div>
        {/* Card Body */}
        <div className="card-body" id="new-section-upload">
          {/* Dropzone Area */}
          <div>
            <label className="form-label">Upload Image & Video</label>
            <div
              id="dropzone-area"
              className="dropzone dropzone-default card shadow-none dz-clickable btn-dashed rounded"
            >
              <div className="dz-message">
                <i className="bi bi-file-image display-3"></i>
                <p>Drag here or click to upload Image & Video.</p>
              </div>
            </div>
          </div>
          {/* Save Button */}
          <div className="col-12 text-end mt-3">
            <button type="submit" className="btn btn-sm btn-primary mb-0">
              Save & Continue
            </button>
          </div>
        </div>
        {/* Card Body END */}
      </div>
      {/* Card END */}
    </div>

               {/* ----------------------------------  */}
              </div>
            </div>
            {/* ---------------------------------------- */}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default AddProperty;
