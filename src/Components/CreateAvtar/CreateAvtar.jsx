import React, { Fragment, useEffect, useRef, useState } from "react";
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
import { FaMale, FaFemale, FaTransgender } from "react-icons/fa";
import { FaUserTie, FaUser } from "react-icons/fa";

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

  // const [selectedGender, setSelectedGender] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  //   select box
  const [selected, setSelected] = useState(null);
  const [subSelected, setSubSelected] = useState(null);
  const [roleSelected, setRoleSelected] = useState(null);
  const [selectedTalk, setSelectedTalk] = useState("");
  const [selectedPersonality, setSelectedPersonality] = useState([]);

  const handleRoleSelect = (role) => {
    setRoleSelected(role);
  };

  const personalityOptions = [
    { value: "introvert", label: "Introvert" },
    { value: "extrovert", label: "Extrovert" },
    { value: "ambivert", label: "Ambivert" },
    { value: "optimistic", label: "Optimistic" },
    { value: "realistic", label: "Realistic" },
    { value: "pessimistic", label: "Pessimistic" },
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
  // video Record
  const [recording, setRecording] = useState(false);
const [videoURL, setVideoURL] = useState(null);
const videoRef = useRef(null);
const mediaRecorderRef = useRef(null);
const chunksRef = useRef([]);
const startRecording = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  videoRef.current.srcObject = stream;
  chunksRef.current = [];
  const mediaRecorder = new MediaRecorder(stream);
  mediaRecorderRef.current = mediaRecorder;

  mediaRecorder.ondataavailable = (e) => {
    if (e.data.size > 0) chunksRef.current.push(e.data);
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(chunksRef.current, { type: "video/webm" });
    setVideoURL(URL.createObjectURL(blob));
  };

  mediaRecorder.start();
  setRecording(true);
};

const stopRecording = () => {
  mediaRecorderRef.current.stop();
  videoRef.current.srcObject.getTracks().forEach(track => track.stop());
  setRecording(false);
};

const removeVideo = () => setVideoURL(null);


  return (
    <Fragment>
      <MainNav />
      <main>
        <div className="container-fluid">
          {/* <Alert /> */}
          <div className="row justify-content-around">
            {/* <div className="d-flex"> */}
            <div className="col-lg-7">
              <div
                className="tab-content py-0 mb-0 bg-white"
                style={{ borderRadius: "15px" }}
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
                      backgroundColor: "#cfd5dd",
                      borderRadius: "15px 15px 0 0",
                      marginBottom: "10px",
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
                    <Tab label="Record Video" />
                  </Tabs>

                  <TabPanel value={tabValue} index={0}>
                    <form className="row g-3 justify-content-center">
                      {/* <div className="mt-3 g-4"> */}
                      {/* Name */}

                      <div className="col-md-7 mb-3 position-relative">
                        <i
                          className="bi bi-person position-absolute"
                          style={{
                            top: "50%",
                            left: "15px",
                            transform: "translateY(-50%)",
                            color: "#6decd9ff",
                          }}
                        ></i>
                        <input
                          type="text"
                          className="form-control"
                          id="manual-country"
                          placeholder="Name"
                          style={{ paddingLeft: "30px" }}
                        />
                      </div>
                      {/* Email */}
                      <div className="col-md-7 mb-3 position-relative">
                        <i
                          className="bi bi-envelope position-absolute"
                          style={{
                            top: "50%",
                            left: "15px",
                            transform: "translateY(-50%)",
                            color: "#3392e5ff",
                          }}
                        ></i>
                        <input
                          type="text"
                          className="form-control"
                          id="manual-state"
                          placeholder="Email"
                          style={{ paddingLeft: "30px" }}
                        />
                      </div>
                      {/* Mobile */}
                      <div className="col-md-7 mb-3 position-relative">
                        <i
                          className="bi bi-telephone position-absolute"
                          style={{
                            top: "50%",
                            left: "15px",
                            transform: "translateY(-50%)",
                            color: "#fb4576ff",
                          }}
                        ></i>
                        <input
                          type="text"
                          className="form-control"
                          id="manual-city"
                          placeholder="Mobile"
                          style={{ paddingLeft: "30px" }}
                        />
                      </div>

                     <div className="col-md-7 mb-3">
  <label className="fw-bold">Gender</label>
  <div className="d-flex gap-3 mt-2">
    {/* Male */}
    <div
      className={`px-4 py-2 border rounded text-center d-flex align-items-center justify-content-center gap-1 ${
        selectedGender === "male"
          ? "bg-primary text-white"
          : "bg-light"
      }`}
      style={{ cursor: "pointer", flex: 1 }}
      onClick={() => setSelectedGender("male")}
    >
      <FaMale /> Male
    </div>

    {/* Female */}
    <div
      className={`px-4 py-2 border rounded text-center d-flex align-items-center justify-content-center gap-1 ${
        selectedGender === "female"
          ? "bg-primary text-white"
          : "bg-light"
      }`}
      style={{ cursor: "pointer", flex: 1 }}
      onClick={() => setSelectedGender("female")}
    >
      <FaFemale /> Female
    </div>

    {/* Other */}
    <div
      className={`px-4 py-2 border rounded text-center d-flex align-items-center justify-content-center gap-1 ${
        selectedGender === "other"
          ? "bg-primary text-white"
          : "bg-light"
      }`}
      style={{ cursor: "pointer", flex: 1 }}
      onClick={() => setSelectedGender("other")}
    >
      <FaTransgender /> Other
    </div>
  </div>
</div>

 


                    

                      {/* </div> */}
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
  <label className="fw-bold">Category</label>
  <div className="d-flex gap-3 mt-2">
    {/* Professional */}
    <div
      className={`px-4 py-2 border rounded d-flex align-items-center justify-content-center gap-2 ${
        selected === 1 ? "bg-primary text-white" : "bg-light"
      }`}
      style={{ cursor: "pointer", flex: 1 }}
      onClick={() => {
        setSelected(1);
        setSubSelected(null);
      }}
    >
      <i className="bi bi-briefcase fs-5"></i>
      <span>Professional</span>
    </div>

    {/* Government */}
    <div
      className={`px-4 py-2 border rounded d-flex align-items-center justify-content-center gap-2 ${
        selected === 2 ? "bg-primary text-white" : "bg-light"
      }`}
      style={{ cursor: "pointer", flex: 1 }}
      onClick={() => {
        setSelected(2);
        setSubSelected(null);
      }}
    >
      <i className="bi bi-building fs-5"></i>
      <span>Government</span>
    </div>

    {/* Politician */}
    <div
      className={`px-4 py-2 border rounded d-flex align-items-center justify-content-center gap-2 ${
        selected === 3 ? "bg-primary text-white" : "bg-light"
      }`}
      style={{ cursor: "pointer", flex: 1 }}
      onClick={() => {
        setSelected(3);
        setSubSelected(null);
      }}
    >
      <i className="bi bi-person-badge fs-5"></i>
      <span>Politician</span>
    </div>
  </div>
</div>



                        {/* Inputs outside the row */}
                     {selected === 1 && (
  <div className="col-md-9">
    <label className="fw-bold">Sub Category</label>
    <div className="d-flex gap-3 mt-2">
      {/* Education */}
      <div
        className={`px-4 py-2 border rounded d-flex align-items-center justify-content-center gap-2 ${
          subSelected === 1 ? "bg-primary text-white" : "bg-light"
        }`}
        style={{ cursor: "pointer", flex: 1 }}
        onClick={() => setSubSelected(1)}
      >
        <i className="bi bi-book fs-5"></i>
        <span>Education</span>
      </div>

      {/* Real Estate */}
      <div
        className={`px-4 py-2 border rounded d-flex align-items-center justify-content-center gap-2 ${
          subSelected === 2 ? "bg-primary text-white" : "bg-light"
        }`}
        style={{ cursor: "pointer", flex: 1 }}
        onClick={() => setSubSelected(2)}
      >
        <i className="bi bi-house-door fs-5"></i>
        <span>Real Estate</span>
      </div>

      {/* Fintech */}
      <div
        className={`px-4 py-2 border rounded d-flex align-items-center justify-content-center gap-2 ${
          subSelected === 3 ? "bg-primary text-white" : "bg-light"
        }`}
        style={{ cursor: "pointer", flex: 1 }}
        onClick={() => setSubSelected(3)}
      >
        <i className="bi bi-currency-dollar fs-5"></i>
        <span>Fintech</span>
      </div>
    </div>
  </div>
)}


                        {/* sub sections of professor */}
                        {/* Inputs for Sub-selection */}
                       {subSelected === 1 && (
  <div className="col-md-9 ">
    <label className="fw-bold">Role</label>
    <div className="d-flex gap-3 mt-2">
      {/* Professor */}
      <div
        className={`px-4 py-2 border rounded d-flex align-items-center justify-content-center gap-2 ${
          roleSelected === "Professor" ? "bg-primary text-white" : "bg-light"
        }`}
        style={{
          cursor: "pointer",
          flex: 1,
          backgroundColor: roleSelected === "Professor" ? "#6f42c1" : "",
          transition: "all 0.3s ease",
        }}
        onClick={() => handleRoleSelect("Professor")}
      >
        <i className="bi bi-person-workspace fs-5"></i>
        <span>Professor</span>
      </div>

      {/* Teacher */}
      <div
        className={`px-4 py-2 border rounded d-flex align-items-center justify-content-center gap-2 ${
          roleSelected === "Teacher" ? "bg-primary text-white" : "bg-light"
        }`}
        style={{
          cursor: "pointer",
          flex: 1,
          backgroundColor: roleSelected === "Teacher" ? "#6f42c1" : "",
          transition: "all 0.3s ease",
        }}
        onClick={() => handleRoleSelect("Teacher")}
      >
        <i className="bi bi-mortarboard fs-5"></i>
        <span>Teacher</span>
      </div>

      {/* Counselor */}
      <div
        className={`px-4 py-2 border rounded d-flex align-items-center justify-content-center gap-2 ${
          roleSelected === "Counselor" ? "bg-primary text-white" : "bg-light"
        }`}
        style={{
          cursor: "pointer",
          flex: 1,
          backgroundColor: roleSelected === "Counselor" ? "#6f42c1" : "",
          transition: "all 0.3s ease",
        }}
        onClick={() => handleRoleSelect("Counselor")}
      >
        <i className="bi bi-chat-dots fs-5"></i>
        <span>Counselor</span>
      </div>
    </div>
  </div>
)}


                        {subSelected === 2 && (
                          <div className="row mt-2">
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Teacher Email"
                              />
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Teacher Mobile"
                              />
                            </div>
                          </div>
                        )}

                        {subSelected === 3 && (
                          <div className="row mt-2">
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Counsellor Email"
                              />
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Counsellor Mobile"
                              />
                            </div>
                          </div>
                        )}

                        {selected === 2 && (
                          <div className="row mt-2">
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email 2"
                              />
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Mobile 2"
                              />
                            </div>
                          </div>
                        )}

                        {selected === 3 && (
                          <div className="row mt-2">
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email 3"
                              />
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Mobile 3"
                              />
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
                      {/* </div> */}

                      <div className="col-md-8">
                        <label className="fw-bold">How I Talk</label>
                        <div className="d-flex gap-3 mt-2">
                          {/* Slow */}
                          <div
                            className={`px-4 py-2 border rounded text-center ${
                              selectedTalk === "slow"
                                ? "bg-primary text-white"
                                : "bg-light"
                            }`}
                            style={{ cursor: "pointer", flex: 1 }}
                            onClick={() => setSelectedTalk("slow")}
                          >
                            Slow
                          </div>

                          {/* Normal */}
                          <div
                            className={`px-4 py-2 border rounded text-center ${
                              selectedTalk === "normal"
                                ? "bg-primary text-white"
                                : "bg-light"
                            }`}
                            style={{ cursor: "pointer", flex: 1 }}
                            onClick={() => setSelectedTalk("normal")}
                          >
                            Normal
                          </div>

                          {/* Fast */}
                          <div
                            className={`px-4 py-2 border rounded text-center ${
                              selectedTalk === "fast"
                                ? "bg-primary text-white"
                                : "bg-light"
                            }`}
                            style={{ cursor: "pointer", flex: 1 }}
                            onClick={() => setSelectedTalk("fast")}
                          >
                            Fast
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <label className="fw-bold mb-2">Personality</label>
                        <Select
                          isMulti
                          options={personalityOptions}
                          value={selectedPersonality}
                          onChange={(selected) =>
                            setSelectedPersonality(selected)
                          }
                          placeholder="Select personality traits..."
                        />
                      </div>
                                           <div className="col-md-8">
  <label className="fw-bold">Marital Status</label>
  <div className="d-flex gap-3 mt-2">
    {/* Married */}
    <div
      className={`px-4 py-2 border rounded text-center d-flex align-items-center justify-content-center gap-1 ${
        maritalStatus === "married"
          ? "bg-primary text-white"
          : "bg-light"
      }`}
      style={{ cursor: "pointer", flex: 1 }}
      onClick={() => setMaritalStatus("married")}
    >
      <FaUserTie /> Married
    </div>

    {/* Unmarried */}
    <div
      className={`px-4 py-2 border rounded text-center d-flex align-items-center justify-content-center gap-1 ${
        maritalStatus === "unmarried"
          ? "bg-primary text-white"
          : "bg-light"
      }`}
      style={{ cursor: "pointer", flex: 1 }}
      onClick={() => setMaritalStatus("unmarried")}
    >
      <FaUser /> Unmarried
    </div>
  </div>
</div>
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
                    <form className="row g-3 justify-content-center">
                      <div className="mt-3 g-4 col-md-8">
                        {" "}
                        {/* Centered form width */}
                        {/* Website */}
                        <div className="mb-3 position-relative">
                          <i
                            className="bi bi-globe position-absolute"
                            style={{
                              top: "50%",
                              left: "10px",
                              transform: "translateY(-50%)",
                              color: "#6c757d",
                            }}
                          ></i>
                          <input
                            type="url"
                            className="form-control"
                            placeholder="Website URL"
                            style={{ paddingLeft: "35px" }}
                          />
                        </div>
                        {/* Facebook */}
                        <div className="mb-3 position-relative">
                          <i
                            className="bi bi-facebook position-absolute"
                            style={{
                              top: "50%",
                              left: "10px",
                              transform: "translateY(-50%)",
                              color: "#4267B2",
                            }}
                          ></i>
                          <input
                            type="url"
                            className="form-control"
                            placeholder="Facebook URL"
                            style={{ paddingLeft: "35px" }}
                          />
                        </div>
                        {/* Instagram */}
                        <div className="mb-3 position-relative">
                          <i
                            className="bi bi-instagram position-absolute"
                            style={{
                              top: "50%",
                              left: "10px",
                              transform: "translateY(-50%)",
                              color: "#C13584",
                            }}
                          ></i>
                          <input
                            type="url"
                            className="form-control"
                            placeholder="Instagram URL"
                            style={{ paddingLeft: "35px" }}
                          />
                        </div>
                        {/* YouTube */}
                        <div className="mb-3 position-relative">
                          <i
                            className="bi bi-youtube position-absolute"
                            style={{
                              top: "50%",
                              left: "10px",
                              transform: "translateY(-50%)",
                              color: "#FF0000",
                            }}
                          ></i>
                          <input
                            type="url"
                            className="form-control"
                            placeholder="YouTube URL"
                            style={{ paddingLeft: "35px" }}
                          />
                        </div>
                        {/* LinkedIn */}
                        <div className="mb-3 position-relative">
                          <i
                            className="bi bi-linkedin position-absolute"
                            style={{
                              top: "50%",
                              left: "10px",
                              transform: "translateY(-50%)",
                              color: "#0A66C2",
                            }}
                          ></i>
                          <input
                            type="url"
                            className="form-control"
                            placeholder="LinkedIn URL"
                            style={{ paddingLeft: "35px" }}
                          />
                        </div>
                        {/* Company Website */}
                        <div className="mb-3 position-relative">
                          <i
                            className="bi bi-building position-absolute"
                            style={{
                              top: "50%",
                              left: "10px",
                              transform: "translateY(-50%)",
                              color: "#6c757d",
                            }}
                          ></i>
                          <input
                            type="url"
                            className="form-control"
                            placeholder="Company Website URL"
                            style={{ paddingLeft: "35px" }}
                          />
                        </div>
                        {/* PDF Upload */}
                        <div className="mb-3">
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
                        {/* Save Button */}
                        <div className="text-end mt-3">
                          <button
                            type="button"
                            id="saveContinueBtn"
                            className="btn btn-sm btn-primary mb-0"
                          >
                            Save &amp; Continue
                          </button>
                        </div>
                      </div>
                    </form>
                  </TabPanel>

                  <TabPanel value={tabValue} index={3}>
                    <form className="row g-3">
                      <div className="mt-0 row g-4 d-flex justify-content-center">
                        {/* Upload Box */}
                        <div className="col-md-9">
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
                            <span
                              className="fw-bold"
                              style={{ color: "#0f6fec" }}
                            >
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
                              <i
                                className="bi bi-x-lg"
                                style={{ fontSize: "14px" }}
                              ></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    </form>
                  </TabPanel>
                  <TabPanel value={tabValue} index={4}>
  <form className="row g-3">
    <div className="mt-0 row g-4 d-flex justify-content-center">

      {/* Video Recorder Box */}
      <div className="col-md-9">
        <label className="fw-bold mb-2">Record Video</label>
        <div
          className="d-flex flex-column align-items-center justify-content-center border rounded-3 p-4"
          style={{
            borderStyle: "dashed",
            background: "#f9fafb",
            minHeight: "250px",
          }}
        >
          {!videoURL ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  background: "#000",
                }}
              ></video>
              {!recording ? (
                <button
                  className="btn btn-primary mt-3"
                  onClick={startRecording}
                >
                  🎥 Start Recording
                </button>
              ) : (
                <button
                  className="btn btn-danger mt-3"
                  onClick={stopRecording}
                >
                  ⏹ Stop Recording
                </button>
              )}
            </>
          ) : (
            <div className="w-100 position-relative">
              <video
                src={videoURL}
                controls
                style={{
                  width: "100%",
                  borderRadius: "8px",
                }}
              ></video>
              <button
                type="button"
                className="btn btn-sm btn-danger position-absolute top-0 m-2"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  right: "10px",
                }}
                onClick={removeVideo}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </form>
</TabPanel>

                </Box>

                {/* ----------------------------------  */}
              </div>
            </div>
            {/* Sidenav START */}
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
        padding: "14.5px 16px",
      }}
    >
      <h6 className="mb-0 fw-bold text-white">Profile Preview</h6>
    </div>

    {/* Body */}
    <div className="card-body p-4">
      <div className="d-flex">
        {/* Profile Image (covers Name, Email, Mobile height) */}
        

        {/* Info Section */}
        <div className="flex-grow-1 d-flex flex-column justify-content-between">
          {/* Name */}
          <div>
            <span className="text-muted small fw-semibold d-block">Name</span>
            <div className="fw-bold fs-6">John Doe</div>
          </div>

          {/* Email */}
          <div>
            <span className="text-muted small fw-semibold d-block">Email</span>
            <div className="fw-bold fs-6">john@example.com</div>
          </div>

          {/* Mobile */}
          <div>
            <span className="text-muted small fw-semibold d-block">Mobile</span>
            <div className="fw-bold fs-6">+91 9876543210</div>
          </div>
        </div>
        <div className="me-3">
          <img
            src="assets/images/avatar/07.jpg"
            alt="Profile"
            className=""
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
      

      {/* Gender */}
      <div className="mt-3">
        <span className="text-muted small fw-semibold">Gender</span>
        <div className="fw-bold fs-6">Male</div>
      </div>

      {/* Marital Status */}
      <div className="mb-3">
        <span className="text-muted small fw-semibold">Marital Status</span>
        <div className="fw-bold fs-6">Married</div>
      </div>

      {/* Selected Box */}
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
{/* </div> */}




            {/* Sidenav END */}
            {/* ---------------------------------------- */}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default CreateAvtar;
