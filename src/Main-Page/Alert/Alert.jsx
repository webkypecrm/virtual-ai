import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";

const Alert = () => {
  const [completionPercentage, setCompletionPercentage] = useState(15); // Default to 15%
  const [incompleteFields, setIncompleteFields] = useState([]);

  const sections = {
    account: [
      { selector: "#name-input", name: "Name" },
      { selector: "#email-input", name: "Email" },
      { selector: "#mobile-input", name: "Mobile" },
    ],
    sell: [
      { selector: "#country-select", name: "Country" },
      { selector: "#state-select", name: "State" },
      { selector: ".city-checkbox", name: "City", isCheckboxGroup: true },
      {
        selector: ".subarea-checkbox",
        name: "Sub Area",
        isCheckboxGroup: true,
      },
      {
        selector: 'input[name="propertyAction-new"]',
        name: "Property Action Type",
        isRadio: true,
      },
      {
        selector: 'input[name="propertyCategory-new"]',
        name: "Property Category",
        isCheckbox: true,
      },
      {
        selector:
          'input[name="propertyType-new"], input[name="propertyType-new-coom"], input[name="propertyType-new-coom-land"]',
        name: "Property Type",
        isCheckbox: true,
      },
      {
        selector: 'input[name="SelectSaleType"]',
        name: "Sale Type",
        isCheckbox: true,
      },
      { selector: ".builder-checkbox", name: "Builder", isCheckboxGroup: true },
      { selector: ".project-checkbox", name: "Project", isCheckboxGroup: true },
    ],
    kyc: [
      {
        selector: "#photo-upload-sec .dropzone",
        name: "Photo",
        isDropzone: true,
      },
      {
        selector: "#adhar-upload-sec .dropzone",
        name: "Aadhaar",
        isDropzone: true,
      },
      { selector: "#pan-upload-sec .dropzone", name: "PAN", isDropzone: true },
      { selector: "#agreeTerms", name: "Terms Agreement", isCheckbox: true },
    ],
  };

  const sectionWeights = { account: 15, sell: 42, kyc: 28 };

  const isFieldFilled = (field) => {
    const elements = document.querySelectorAll(field.selector);
    if (elements.length === 0) return false;

    if (field.isRadio) {
      return Array.from(elements).some((el) => el.checked);
    }

    if (field.isCheckbox || field.isCheckboxGroup) {
      return Array.from(elements).some((el) => el.checked);
    }

    if (field.isDropzone) {
      try {
        const el = elements[0];
        const dz = Dropzone.forElement(el);
        return dz && dz.getAcceptedFiles().length > 0;
      } catch (e) {
        console.error("Dropzone error:", e);
        return false;
      }
    }

    return elements[0].value.trim() !== "";
  };

  const updateCompletionPercentage = () => {
    let totalPercentage = 15; 
    let newIncompleteFields = [];

    Object.keys(sections).forEach((section) => {
      const sectionFields = sections[section];
      let filledCount = 0;

      sectionFields.forEach((field) => {
        if (isFieldFilled(field)) {
          filledCount++;
        } else {
          newIncompleteFields.push(field.name);
        }
      });

      const totalFields = sectionFields.length;
      if (totalFields > 0) {
        const sectionCompletion =
          (filledCount / totalFields) * sectionWeights[section];
        totalPercentage += sectionCompletion;
      }
    });

    totalPercentage = Math.round(Math.min(totalPercentage, 100));
    setCompletionPercentage(totalPercentage);
    setIncompleteFields(newIncompleteFields);
    saveProgress(totalPercentage, newIncompleteFields);
  };

  const saveProgress = (percentage, incompleteFields) => {
    const formStatus = { percentage, incomplete: incompleteFields };
    localStorage.setItem("formCompletion", JSON.stringify(formStatus));
  };

  const loadSavedProgress = () => {
    const savedData = JSON.parse(localStorage.getItem("formCompletion"));
    if (!savedData) return;

    setCompletionPercentage(savedData.percentage || 15); 
    setIncompleteFields(savedData.incomplete || []);
  };

  const handleCloseClick = (event) => {
    event.target.closest(".completion-alert").style.display = "none";
  };

  const getProgressBarColor = (percentage) => {
    if (percentage < 30) return "red";
    if (percentage < 70) return "orange";
    if (percentage < 100) return "yellow";
    return "green";
  };

  useEffect(() => {
    loadSavedProgress();
    updateCompletionPercentage();
  }, []);

  useEffect(() => {
    const handleInteraction = () => {
      updateCompletionPercentage();
    };

    document.addEventListener("change", handleInteraction);
    document.addEventListener("input", handleInteraction);

    return () => {
      document.removeEventListener("change", handleInteraction);
      document.removeEventListener("input", handleInteraction);
    };
  }, []);

  return (
    <Fragment>
      {/* Alert for Form Completion Percentage */}
      <div className="row">
        {/* Profile Completion Alert */}
        <div className="col-lg-3">
          <div className="completion-alert">
            <div className="alert-content">
              <div className="alert-header position-relative">
                <Link to="/account" style={{ fontSize: "13px" }}>
                  <strong>
                    Complete your Profile:{" "}
                    <span id="completion-percentage">
                      {completionPercentage}
                    </span>
                    %
                  </strong>
                </Link>
                <button
                  type="button"
                  className="close-btn alert-close-btn-sec"
                  onClick={handleCloseClick}
                >
                  ×
                </button>
              </div>
              <div className="progress-container">
                <div
                  id="progress-bar"
                  className="progress-bar"
                  style={{
                    width: `${completionPercentage}%`,
                    backgroundColor: getProgressBarColor(completionPercentage),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Alert */}
        <div className="col-lg-9">
          <div className="completion-alert">
            <div className="alert-content alert-bg-success">
              <div className="alert-header position-relative alert alert-success alert-dismissible fade border-0 show p-1 mb-0">
                <Link
                  to="/account"
                  style={{ fontSize: "13px", color: "#676A79" }}
                >
                  <p className="mb-0">
                    Welcome to Bhoomi Bazaaar! You have successfully signed up.
                  </p>
                </Link>
                <button
                  type="button"
                  className="close-btn alert-close-btn-sec"
                  onClick={handleCloseClick}
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Alert;
