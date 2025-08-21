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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "react-select";

const CreateAvtar = () => {
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

  const [selectedGender, setSelectedGender] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState(null);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  const maritalStatusOptions = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "divorced", label: "Divorced" },
    { value: "widowed", label: "Widowed" },
  ];

  //   const handleCategoryChange = (value) => {
  //     setSelectedCategories((prev) =>
  //       prev.includes(value)
  //         ? prev.filter((cat) => cat !== value)
  //         : [...prev, value]
  //     );
  //   };

  useEffect(() => {
    if (noBuilder) {
      setProject("");
      setTower("");
    }
  }, [noBuilder]);

  // Derived display logic
  //   const showResidential = selectedCategories.includes("residential");
  //   const showCommercial = selectedCategories.includes("commercial");
  //   const showLand = selectedCategories.includes("land");

  //   const showBuilderSection = propertyTypeSelected;
  //   const showProjectSection = builder && builder !== "No builder." && !noBuilder;
  //   const showTowerSection = project !== "" && !noBuilder;
  //   const showLayoutSection = noBuilder || tower !== "";
  //   const showSizeSection = layout !== "";
  //   const showOtherInput = size === "Other";
  //   const showPropertyLayout =
  //     // (size && size !== "Other") || (otherSize && otherSize.trim() !== "");
  //     (size && size !== "Other") || (size === "Other" && showCards);

  // Location
  //   const [isManualEntry, setIsManualEntry] = useState(false);
  //   const [isCurrentLocation, setIsCurrentLocation] = useState(false);
  //   const [locationData, setLocationData] = useState({
  //     country: "",
  //     state: "",
  //     city: "",
  //     zip: "",
  //   });

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

  //   const handleCurrentLocation = () => {
  //     setIsManualEntry(false);
  //     setIsCurrentLocation(true);
  //     clearFields();

  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           const lat = position.coords.latitude;
  //           const lon = position.coords.longitude;

  //           fetch(
  //             `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
  //           )
  //             .then((response) => response.json())
  //             .then((data) => {
  //               setLocationData({
  //                 country: data.address.country || "",
  //                 state: data.address.state || "",
  //                 city: data.address.city || data.address.town || "",
  //                 zip: data.address.postcode || "",
  //               });
  //             })
  //             .catch((error) => console.error("Error fetching location:", error));
  //         },
  //         (error) => {
  //           console.error("Error with geolocation:", error.message);
  //           alert("Failed to get location. Please allow location access.");
  //         }
  //       );
  //     } else {
  //       alert("Geolocation is not supported by this browser.");
  //     }
  //   };
  //   // Rare status
  //   const [regType, setRegType] = useState("");
  //   // date
  //   const [date, setDate] = useState(null);
  //   // dropzone
  //   useEffect(() => {
  //     // Initialize Dropzone after the component mounts
  //     const dropzone = new Dropzone("#dropzone-area", {
  //       url: "/upload", // Set your API endpoint here
  //       maxFiles: 10, // Maximum files allowed
  //       acceptedFiles: "image/*,video/*", // Accept only images and videos
  //       addRemoveLinks: true, // Enable file removal
  //       //   dictDefaultMessage: "Drag here or click to upload Image & Video.",
  //     });

  //     return () => {
  //       dropzone.destroy(); // Cleanup Dropzone when component unmounts
  //     };
  //   }, []);

  //   Tab

  // ✅ TabPanel helper function
  function TabPanel({ children, value, index }) {
    return (
      <div hidden={value !== index}>
        {value === index && (
          <Box sx={{ p: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  // ✅ Tabs state
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  // img uploade
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 6) {
      alert("You can only upload up to 6 images.");
      return;
    }
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };
//   select box
  const [selected, setSelected] = useState(null);

  const boxes = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
  ];
  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container-fluid">
          {/* <Alert /> */}
          <div className="row">
            <div className="col-lg-8 vstack gap-4">
              <div
                className="tab-content py-0 mb-0 bg-white"
                style={{ borderRadius: "10px" }}
              >
                <Box sx={{ width: "100%" }}>
                  <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    centered
                    TabIndicatorProps={{
                      style: { backgroundColor: "#0f6fec", height: "3px" }, // underline color & thickness
                    }}
                    sx={{
                      "& .MuiTab-root": {
                        textTransform: "none", // normal case, no uppercase
                        fontWeight: 500,
                        fontSize: "16px",
                        color: "#000", // default text color
                      },
                      "& .MuiTab-root.Mui-selected": {
                        color: "#0f6fec", // active tab text color
                      },
                    }}
                  >
                    <Tab label="About Me" />
                    <Tab label="Details" />
                    <Tab label="Knowledge Source" />
                    <Tab label="Upload Files" />
                  </Tabs>

                  <TabPanel value={tabValue} index={0}>
                    <form className="row justify-content-center g-3">
                      <div className="mt-3 g-4">
                        <div className="col-md-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="manual-country"
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="manual-state"
                            placeholder="Email"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="manual-city"
                            placeholder="Mobile"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <Select
                            options={genderOptions}
                            value={selectedGender}
                            onChange={setSelectedGender}
                            placeholder="Choose Gender"
                            isClearable
                            styles={{
                              control: (base) => ({
                                ...base,
                                padding: "1px",
                                fontSize: "16px",
                              }),
                            }}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <Select
                            options={maritalStatusOptions}
                            value={maritalStatus}
                            onChange={setMaritalStatus}
                            placeholder="Select Marital Status"
                            isClearable
                            styles={{
                              control: (base) => ({
                                ...base,
                                padding: "1px",
                                fontSize: "16px",
                              }),
                            }}
                          />
                        </div>
                        <div className="col-md-12">
  {/* Boxes */}
  <div className="row">
    {boxes.map((box) => (
      <div className="col-md-4 mb-3" key={box.id}>
        <div
          className={`p-3 text-center border rounded ${
            selected === box.id ? "bg-primary text-white scale-up" : "bg-light"
          }`}
          style={{
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onClick={() => setSelected(box.id)}
        >
          {box.label}
        </div>
      </div>
    ))}
  </div>

  {/* Inputs outside the row */}
  {selected === 1 && (
    <div className="row mt-2">
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="Email 1" />
      </div>
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="Mobile 1" />
      </div>
    </div>
  )}

  {selected === 2 && (
    <div className="row mt-2">
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="Email 2" />
      </div>
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="Mobile 2" />
      </div>
    </div>
  )}

  {selected === 3 && (
    <div className="row mt-2">
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="Email 3" />
      </div>
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="Mobile 3" />
      </div>
    </div>
  )}

  <style>
    {`
      .scale-up {
        transform: scale(1.05);
      }
    `}
  </style>
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
                  </TabPanel>
                 <TabPanel value={tabValue} index={1}>
  <form className="row justify-content-center g-3">
    <div className="col-md-8">
      <label htmlFor="about-me" className="form-label">
        About Me
      </label>
      <textarea
        className="form-control"
        id="about-me"
        placeholder="Write about yourself..."
        rows="5"
      ></textarea>
    </div>
    <div className="col-md-8">
      <label htmlFor="achievement" className="form-label">
        Achievement
      </label>
      <textarea
        className="form-control"
        id="achievement"
        placeholder="Write your achievements..."
        rows="5"
      ></textarea>
    </div>
    <div className="col-md-8 text-end">
      <button
        type="button"
        id="saveContinueBtn"
        className="btn btn-sm btn-primary mb-0"
      >
        Save &amp; Continue
      </button>
    </div>
  </form>
</TabPanel>
                  <TabPanel value={tabValue} index={2}>
  <form className="row g-3">
    <div className="mt-3 g-4">
      
      {/* Website */}
      <div className="col-md-6 mb-3 position-relative">
        <i className="bi bi-globe position-absolute" 
           style={{ top: "50%", left: "10px", transform: "translateY(-50%)", color: "#6c757d" }}>
        </i>
        <input
          type="url"
          className="form-control"
          placeholder="Website URL"
          style={{ paddingLeft: "35px" }}
        />
      </div>

      {/* Facebook */}
      <div className="col-md-6 mb-3 position-relative">
        <i className="bi bi-facebook position-absolute" 
           style={{ top: "50%", left: "10px", transform: "translateY(-50%)", color: "#4267B2" }}>
        </i>
        <input
          type="url"
          className="form-control"
          placeholder="Facebook URL"
          style={{ paddingLeft: "35px" }}
        />
      </div>

      {/* Instagram */}
      <div className="col-md-6 mb-3 position-relative">
        <i className="bi bi-instagram position-absolute" 
           style={{ top: "50%", left: "10px", transform: "translateY(-50%)", color: "#C13584" }}>
        </i>
        <input
          type="url"
          className="form-control"
          placeholder="Instagram URL"
          style={{ paddingLeft: "35px" }}
        />
      </div>

      {/* YouTube */}
      <div className="col-md-6 mb-3 position-relative">
        <i className="bi bi-youtube position-absolute" 
           style={{ top: "50%", left: "10px", transform: "translateY(-50%)", color: "#FF0000" }}>
        </i>
        <input
          type="url"
          className="form-control"
          placeholder="YouTube URL"
          style={{ paddingLeft: "35px" }}
        />
      </div>

      {/* LinkedIn */}
      <div className="col-md-6 mb-3 position-relative">
        <i className="bi bi-linkedin position-absolute" 
           style={{ top: "50%", left: "10px", transform: "translateY(-50%)", color: "#0A66C2" }}>
        </i>
        <input
          type="url"
          className="form-control"
          placeholder="LinkedIn URL"
          style={{ paddingLeft: "35px" }}
        />
      </div>

      {/* Company Website */}
      <div className="col-md-6 mb-3 position-relative">
        <i className="bi bi-building position-absolute" 
           style={{ top: "50%", left: "10px", transform: "translateY(-50%)", color: "#6c757d" }}>
        </i>
        <input
          type="url"
          className="form-control"
          placeholder="Company Website URL"
          style={{ paddingLeft: "35px" }}
        />
      </div>

      {/* PDF Upload */}
      <div className="col-md-6 mb-3">
        <label htmlFor="pdfUpload" className="form-label">
          Upload PDF
        </label>
        <input
          type="file"
          className="form-control"
          id="pdfUpload"
          accept="application/pdf"
        />
      </div>

    </div>

    {/* Save Button */}
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
</TabPanel>

                  {/* <TabPanel value={tabValue} index={3}>
                    <form className="row g-3">
                      <div className="mt-0 row g-4">
                        <div className="col-12">
                          <input
                            type="file"
                            className="form-control"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                          />
                          <small className="text-muted">
                            Max 6 images allowed
                          </small>
                        </div>

                        {images.map((img, index) => (
                          <div
                            key={index}
                            className="col-md-4 position-relative"
                          >
                            <img
                              src={img.preview}
                              alt="Preview"
                              className="img-fluid rounded border"
                              style={{
                                height: "220px",
                                objectFit: "cover",
                                width: "100%",
                              }}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-danger position-absolute top-0 m-1 d-flex align-items-center justify-content-center"
                              onClick={() => removeImage(index)}
                              style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                background: "red",
                                border: "none",
                                right: "12px",
                                cursor: "pointer",
                              }}
                            >
                              <i
                                className="bi bi-x-lg"
                                style={{ color: "white", fontSize: "16px" }}
                              ></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    </form>
                  </TabPanel> */}
                  <TabPanel value={tabValue} index={3}>
  <form className="row g-3">
    <div className="mt-0 row g-4">
      {/* Upload Box */}
      <div className="col-12">
        <label
          htmlFor="imageUpload"
          className="d-flex flex-column align-items-center justify-content-center border rounded-3 p-4"
          style={{
            cursor: "pointer",
            borderStyle: "dashed",
            background: "#f9fafb",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#f3f4f6")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "#f9fafb")
          }
        >
          <i
            className="bi bi-cloud-arrow-up-fill mb-2"
            style={{ fontSize: "2rem", color: "#0f6fec" }}
          ></i>
          <span className="fw-bold" style={{ color: "#0f6fec" }}>
            Choose Images
          </span>
          <small className="text-muted">
            Click here or drag & drop (Max 6 images)
          </small>
        </label>
        <input
          type="file"
          id="imageUpload"
          className="d-none"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
      </div>

      {/* Image Preview */}
      {images.map((img, index) => (
        <div
          key={index}
          className="col-md-4 position-relative"
        >
          <div
            className="rounded shadow-sm border"
            style={{
              overflow: "hidden",
              height: "220px",
              background: "#fff",
            }}
          >
            <img
              src={img.preview}
              alt="Preview"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Remove Button */}
          <button
            type="button"
            className="btn btn-sm btn-danger position-absolute top-0 m-2 d-flex align-items-center justify-content-center"
            onClick={() => removeImage(index)}
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              padding: 0,
              right: "12px",
            }}
          >
            <i className="bi bi-x-lg" style={{ fontSize: "14px" }}></i>
          </button>
        </div>
      ))}
    </div>
  </form>
</TabPanel>

                </Box>

                {/* ----------------------------------  */}
              </div>
            </div>
            {/* Sidenav START */}
            {/* <div className="col-lg-4">
  <div className="card shadow-sm border-0 rounded-3">
    <div className="card-header bg-primary text-white rounded-top-3">
      <h6 className="mb-0">Preview</h6>
    </div>
    <div className="card-body">
      <div className="mb-3">
        <strong>Name:</strong>
        <div>John Doe</div>
      </div>
      <div className="mb-3">
        <strong>Email:</strong>
        <div>john@example.com</div>
      </div>
      <div className="mb-3">
        <strong>Mobile:</strong>
        <div>+91 9876543210</div>
      </div>
      <div className="mb-3">
        <strong>Gender:</strong>
        <div>Male</div>
      </div>
      <div className="mb-3">
        <strong>Marital Status:</strong>
        <div>Married</div>
      </div>
      <div className="mb-3">
        <strong>Selected Box:</strong>
        <div>Option 2</div>
      </div>
      <div className="border rounded p-2 bg-light">
        <div><strong>Extra Email:</strong> extra@example.com</div>
        <div><strong>Extra Mobile:</strong> +91 9988776655</div>
      </div>
    </div>
  </div>
            </div> */}
            <div className="col-lg-4">
  <div
    className="card border-0 shadow-lg rounded-4 overflow-hidden"
    style={{
      background: "linear-gradient(145deg, #ffffff, #f9f9f9)",
    }}
  >
    {/* Header */}
    <div
      className="card-header text-white rounded-top-4"
      style={{
        background: "linear-gradient(90deg, #0f6fec, #0056b3)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h6 className="mb-0 fw-bold text-white">Profile Preview</h6>
    </div>

    {/* Body */}
    <div className="card-body p-4">
      <div className="mb-3">
        <span className="text-muted small fw-semibold">Name</span>
        <div className="fw-bold fs-6">John Doe</div>
      </div>

      <div className="mb-3">
        <span className="text-muted small fw-semibold">Email</span>
        <div className="fw-bold fs-6">john@example.com</div>
      </div>

      <div className="mb-3">
        <span className="text-muted small fw-semibold">Mobile</span>
        <div className="fw-bold fs-6">+91 9876543210</div>
      </div>

      <div className="mb-3">
        <span className="text-muted small fw-semibold">Gender</span>
        <div className="fw-bold fs-6">Male</div>
      </div>

      <div className="mb-3">
        <span className="text-muted small fw-semibold">Marital Status</span>
        <div className="fw-bold fs-6">Married</div>
      </div>

      <div className="mb-4">
        <span className="text-muted small fw-semibold">Selected Box</span>
        <div className="fw-bold fs-6">Option 2</div>
      </div>

      {/* Extra Details Box */}
      <div
        className="rounded-3 p-3"
        style={{
          background: "rgba(15,111,236,0.05)",
          border: "1px solid rgba(15,111,236,0.2)",
        }}
      >
        <div className="mb-2">
          <span className="text-muted small fw-semibold">Extra Email</span>
          <div className="fw-bold">extra@example.com</div>
        </div>
        <div>
          <span className="text-muted small fw-semibold">Extra Mobile</span>
          <div className="fw-bold">+91 9988776655</div>
        </div>
      </div>
    </div>
  </div>
</div>

            {/* Sidenav END */}
            {/* ---------------------------------------- */}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default CreateAvtar;
