import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/png/stryn-logo.png";

import SuccessModal from "../../common/SuccessModal";

const PartnerSignup = ({ onNavigate }) => {
  const navigate = useNavigate();

  // Navigation Steps: 1, 2, 3, 4
  const [currentStep, setCurrentStep] = useState(1);

  // Visibility Toggles for Step 1 Password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Success Modal State
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1 Fields
    businessName: "",
    email: "",
    contactNumber: "",
    businessType: "",
    description: "",
    password: "",
    confirmPassword: "",
    // Step 2 Fields
    location: "",
    operatingHours: "",
    address: "",
  });

  // Step 2 File States
  const [logoFile, setLogoFile] = useState(null);
  const [regFile, setRegFile] = useState(null);
  const [nricFile, setNricFile] = useState(null);

  // Step 3 Agreement States
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [policiesAccepted, setPoliciesAccepted] = useState(false);

  // Step 4 & 5 Payment/Subscription States
  const [selectedPlan, setSelectedPlan] = useState("Professional");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [paymentData, setPaymentData] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
    saveFuture: false,
    infoTrue: false,
  });

  const getPlanDetails = () => {
    switch (selectedPlan) {
      case "Starter":
        return { fee: 499, processing: 15, total: 514 };
      case "Enterprise":
        return { fee: 1499, processing: 30, total: 1529 };
      case "Professional":
      default:
        return { fee: 999, processing: 21, total: 1020 };
    }
  };

  const getPlanTotal = () => {
    const details = getPlanDetails();
    return details.total.toLocaleString("en-IN");
  };

  const getPlanFee = () => {
    const details = getPlanDetails();
    return details.fee.toLocaleString("en-IN");
  };

  const getPlanProcessing = () => {
    const details = getPlanDetails();
    return details.processing.toLocaleString("en-IN");
  };

  // Validation State
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Senior Developer Validation Logic
  const validateField = (name, value, allValues = formData) => {
    let error = "";
    switch (name) {
      // Step 1 Fields
      case "businessName":
        if (!value.trim()) error = "Business name is required";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email format";
        break;
      case "contactNumber":
        if (!value) error = "Contact number is required";
        break;
      case "businessType":
        if (!value.trim()) error = "Business type is required";
        break;
      case "description":
        if (!value.trim()) error = "Description is required";
        break;
      case "password":
        if (!value) error = "Password is required";
        else if (value.length < 8)
          error = "Password must be at least 8 characters";
        break;
      case "confirmPassword":
        if (!value) error = "Confirm password is required";
        else if (value !== allValues.password) error = "Passwords do not match";
        break;

      // Step 2 Fields
      case "location":
        if (!value.trim()) error = "Location is required";
        break;
      case "operatingHours":
        if (!value.trim()) error = "Operating hours are required";
        break;
      case "address":
        if (!value.trim()) error = "Address is required";
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    // Live validation if field was touched
    if (touched[name]) {
      const error = validateField(name, value, newFormData);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }

    // Special case: If password changes, re-validate confirm password if touched
    if (name === "password" && touched.confirmPassword) {
      const confirmError = validateField(
        "confirmPassword",
        formData.confirmPassword,
        newFormData,
      );
      setErrors((prev) => ({ ...prev, confirmPassword: confirmError }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleLogoSelect = (file) => {
    setLogoFile(file);
    setErrors((prev) => ({ ...prev, logoFile: "" }));
  };

  const handleRegSelect = (file) => {
    setRegFile(file);
    setErrors((prev) => ({ ...prev, regFile: "" }));
  };

  const handleNricSelect = (file) => {
    setNricFile(file);
    setErrors((prev) => ({ ...prev, nricFile: "" }));
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      if (onNavigate) {
        onNavigate("PARTNER_LOGIN");
      } else {
        navigate("/");
      }
    }
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Allow only digits
    if (value.length > 16) {
      value = value.substring(0, 16);
    }
    // Group by 4 digits
    const matches = value.match(/\d{1,4}/g);
    const formatted = matches ? matches.join(" ") : "";
    setPaymentData((prev) => ({ ...prev, cardNumber: formatted }));
    setErrors((prev) => ({ ...prev, payCardNumber: "" }));
  };

  const handleExpirationChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Allow only digits
    if (value.length > 4) {
      value = value.substring(0, 4);
    }
    if (value.length > 2) {
      value = `${value.substring(0, 2)}/${value.substring(2)}`;
    }
    setPaymentData((prev) => ({ ...prev, expiration: value }));
    setErrors((prev) => ({ ...prev, payExpiration: "" }));
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").substring(0, 3);
    setPaymentData((prev) => ({ ...prev, cvv: value }));
    setErrors((prev) => ({ ...prev, payCvv: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentStep === 1) {
      // Validate Step 1 Fields
      const step1Fields = [
        "businessName",
        "email",
        "contactNumber",
        "businessType",
        "description",
        "password",
        "confirmPassword",
      ];
      const allTouched = step1Fields.reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {},
      );
      setTouched((prev) => ({ ...prev, ...allTouched }));

      const newErrors = {};
      step1Fields.forEach((key) => {
        const error = validateField(key, formData[key], formData);
        if (error) newErrors[key] = error;
      });

      setErrors((prev) => ({ ...prev, ...newErrors }));

      if (Object.keys(newErrors).length === 0) {
        console.log("Senior Developer: Signup Step 1 Validated");
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      // Validate Step 2 Fields
      const step2Fields = ["location", "operatingHours", "address"];
      const allTouched = step2Fields.reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {},
      );

      const newErrors = {};
      step2Fields.forEach((key) => {
        const error = validateField(key, formData[key], formData);
        if (error) newErrors[key] = error;
      });

      // File validations
      if (!logoFile) newErrors.logoFile = "Logo file is required";
      if (!regFile) newErrors.regFile = "Registration document is required";
      if (!nricFile) newErrors.nricFile = "NRIC document is required";

      setTouched((prev) => ({
        ...prev,
        ...allTouched,
        logoFile: true,
        regFile: true,
        nricFile: true,
      }));
      setErrors((prev) => ({ ...prev, ...newErrors }));

      if (Object.keys(newErrors).length === 0) {
        console.log("Senior Developer: Signup Step 2 Validated", {
          formData,
          logoFile,
          regFile,
          nricFile,
        });
        setCurrentStep(3);
      }
    } else if (currentStep === 3) {
      // Validate Agreements Checkboxes
      const newErrors = {};
      if (!termsAccepted) {
        newErrors.termsAccepted =
          "You must agree to the Terms & Conditions and Privacy Policy";
      }
      if (!policiesAccepted) {
        newErrors.policiesAccepted = "You must agree to these terms & policies";
      }

      setErrors((prev) => ({ ...prev, ...newErrors }));

      if (Object.keys(newErrors).length === 0) {
        console.log("Senior Developer: Onboarding Completed Successfully", {
          formData,
          logoFile,
          regFile,
          nricFile,
        });
        setCurrentStep(4);
      }
    } else if (currentStep === 5) {
      // Validate Payment Details
      const newErrors = {};
      if (!paymentData.firstName.trim()) newErrors.payFirstName = "First name is required";
      if (!paymentData.lastName.trim()) newErrors.payLastName = "Last name is required";
      if (!paymentData.cardNumber.trim()) newErrors.payCardNumber = "Card number is required";
      if (!paymentData.expiration.trim()) newErrors.payExpiration = "Expiration is required";
      if (!paymentData.cvv.trim()) newErrors.payCvv = "CVV/CVC is required";
      if (!paymentData.infoTrue) newErrors.payInfoTrue = "You must confirm that this information is accurate";

      setErrors((prev) => ({ ...prev, ...newErrors }));

      if (Object.keys(newErrors).length === 0) {
        console.log("Senior Developer: Payment Completed Successfully", {
          selectedPlan,
          paymentMethod,
          paymentData,
        });
        setIsSuccessOpen(true);
      }
    }
  };

  const handlePlanSelect = (planName) => {
    console.log("Plan selected:", planName);
    setSelectedPlan(planName);
    setErrors({});
    setCurrentStep(5);
  };

  // Helper variables for stepper UI
  const isStep1Active = currentStep === 1;
  const isStep2Active = currentStep === 2;
  const isStep3Active = currentStep === 3;

  const progressPercentage =
    currentStep === 1 ? "33.3%" : currentStep === 2 ? "66.6%" : "100%";
  const stepCountText = `Step ${currentStep} of 3`;

  const mainTitleText =
    currentStep === 1
      ? "Create Your Account"
      : currentStep === 2
        ? "Business Details"
        : currentStep === 3
          ? "Get Start Your Business"
          : currentStep === 4
            ? "Business Subscription"
            : "Payment Information";

  const mainSubtitleText =
    currentStep === 4
      ? "Choose the plan that's right for you"
      : "Begin You Journey with us by setting up your Account";

  return (
    <div className="partner-signup-container">
      {/* Left Sidebar */}
      <div className="partner-signup-sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="logo" height={60} />
        </div>

        {currentStep < 4 && (
          <ul className="signup-steps">
            <li className="signup-step-item">
              <div
                className={`step-number-circle ${isStep1Active ? "active" : ""}`}
              >
                1
              </div>
              <div className="step-info">
                <span className={`step-label ${isStep1Active ? "active" : ""}`}>
                  Account Details
                </span>
                <span
                  className={`step-sublabel ${isStep1Active ? "active" : ""}`}
                >
                  Basic Information
                </span>
              </div>
            </li>
            <li className="signup-step-item">
              <div
                className={`step-number-circle ${isStep2Active ? "active" : ""}`}
              >
                2
              </div>
              <div className="step-info">
                <span className={`step-label ${isStep2Active ? "active" : ""}`}>
                  Business Details
                </span>
                <span
                  className={`step-sublabel ${isStep2Active ? "active" : ""}`}
                >
                  Your Offering
                </span>
              </div>
            </li>
            <li className="signup-step-item">
              <div
                className={`step-number-circle ${isStep3Active ? "active" : ""}`}
              >
                3
              </div>
              <div className="step-info">
                <span className={`step-label ${isStep3Active ? "active" : ""}`}>
                  Create Profile
                </span>
                <span
                  className={`step-sublabel ${isStep3Active ? "active" : ""}`}
                >
                  Your Offering
                </span>
              </div>
            </li>
          </ul>
        )}
      </div>

      {/* Right Main Content */}
      <div className="partner-signup-content">
        <form onSubmit={handleSubmit}>
          {/* Header Controls */}
          {currentStep < 4 && (
            <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
              <button
                type="button"
                className="btn-back-outline"
                onClick={handleBack}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="15"
                  viewBox="0 0 8 15"
                  fill="none"
                >
                  <path
                    d="M6.53958 13.825L1.10625 8.39167C0.464583 7.75 0.464583 6.7 1.10625 6.05833L6.53958 0.625"
                    stroke="#AAAAAA"
                    strokeWidth="1.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back
              </button>

              <div className="signup-progress-container">
                <div className="signup-progress-bar-track">
                  <div
                    className="signup-progress-bar-fill"
                    style={{ width: progressPercentage }}
                  ></div>
                </div>
                <span className="step-counter-text">{stepCountText}</span>
              </div>
            </div>
          )}

          {/* Heading */}
          <div className="mb-4">
            <h1 className="font-serif text-white fs-2 mb-2">{mainTitleText}</h1>
            <p className="text-16-400-inter mb-0 text-start">
              {mainSubtitleText}
            </p>
          </div>

          {/* Render Step 1 Form */}
          {currentStep === 1 && (
            <>
              {/* Section 1: Basic Information */}
              <div className="partner-signup-section-card">
                <div className="section-card-title">Basic Information</div>

                <div className="row">
                  {/* Business Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-white">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      className={`form-control-custom-simple ${
                        errors.businessName && touched.businessName
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter business name"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                    {errors.businessName && touched.businessName && (
                      <span className="error-text mt-1 d-block">
                        {errors.businessName}
                      </span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-white">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control-custom-simple ${
                        errors.email && touched.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <span className="error-text mt-1 d-block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="row">
                  {/* Contact Number */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-white">
                      Contact Number
                    </label>
                    <input
                      type="number"
                      name="contactNumber"
                      className={`form-control-custom-simple ${
                        errors.contactNumber && touched.contactNumber
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter phone number"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                    {errors.contactNumber && touched.contactNumber && (
                      <span className="error-text mt-1 d-block">
                        {errors.contactNumber}
                      </span>
                    )}
                  </div>

                  {/* Business Type */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-white">
                      Business Type
                    </label>
                    <input
                      type="text"
                      name="businessType"
                      className={`form-control-custom-simple ${
                        errors.businessType && touched.businessType
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter the type of business"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                    {errors.businessType && touched.businessType && (
                      <span className="error-text mt-1 d-block">
                        {errors.businessType}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-0">
                  <label className="form-label text-white">Description</label>
                  <textarea
                    name="description"
                    rows="3"
                    className={`form-control-custom-simple text-area-custom ${
                      errors.description && touched.description
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Describe your business"
                    value={formData.description}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  ></textarea>
                  {errors.description && touched.description && (
                    <span className="error-text mt-1 d-block">
                      {errors.description}
                    </span>
                  )}
                </div>
              </div>

              {/* Section 2: Create Account Password */}
              <div className="partner-signup-section-card">
                <div className="section-card-title">
                  Create Account Password
                </div>

                <div className="row">
                  {/* Password */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-white">Password</label>
                    <div className="input-group-custom">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className={`form-control-custom-simple form-control-custom-password ${
                          errors.password && touched.password
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      <button
                        type="button"
                        className="input-icon-end border-0 bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ right: "16px", zIndex: 5 }}
                      >
                        {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
                      </button>
                    </div>
                    {errors.password && touched.password && (
                      <span className="error-text mt-1 d-block">
                        {errors.password}
                      </span>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-white">
                      Confirm Password
                    </label>
                    <div className="input-group-custom">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        className={`form-control-custom-simple form-control-custom-password ${
                          errors.confirmPassword && touched.confirmPassword
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="Re-enter password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      <button
                        type="button"
                        className="input-icon-end border-0 bg-transparent"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        style={{ right: "16px", zIndex: 5 }}
                      >
                        {showConfirmPassword ? (
                          <EyeOpenIcon />
                        ) : (
                          <EyeCloseIcon />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && touched.confirmPassword && (
                      <span className="error-text mt-1 d-block">
                        {errors.confirmPassword}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Render Step 2 Form */}
          {currentStep === 2 && (
            <>
              {/* Section 1: Business Details */}
              <div className="partner-signup-section-card">
                <div className="section-card-title">Business Details</div>

                <div className="row">
                  {/* Left Column: Location & Address */}
                  <div className="col-md-6 d-flex flex-column gap-3">
                    <div>
                      <label className="form-label text-white">Location</label>
                      <input
                        type="text"
                        name="location"
                        className={`form-control-custom-simple ${
                          errors.location && touched.location
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="Enter location"
                        value={formData.location}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      {errors.location && touched.location && (
                        <span className="error-text mt-1 d-block">
                          {errors.location}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="form-label text-white">Address</label>
                      <textarea
                        name="address"
                        rows="4"
                        className={`form-control-custom-simple text-area-custom ${
                          errors.address && touched.address ? "is-invalid" : ""
                        }`}
                        placeholder="Enter address"
                        value={formData.address}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        style={{ height: "110px" }}
                      ></textarea>
                      {errors.address && touched.address && (
                        <span className="error-text mt-1 d-block">
                          {errors.address}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Operating Hours & Upload Logo */}
                  <div className="col-md-6 d-flex flex-column gap-3">
                    <div>
                      <label className="form-label text-white">
                        Operating Hours
                      </label>
                      <input
                        type="text"
                        name="operatingHours"
                        className={`form-control-custom-simple ${
                          errors.operatingHours && touched.operatingHours
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="Enter time"
                        value={formData.operatingHours}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      {errors.operatingHours && touched.operatingHours && (
                        <span className="error-text mt-1 d-block">
                          {errors.operatingHours}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="form-label text-white">
                        Upload Logo
                      </label>
                      <Dropzone
                        id="logo-upload"
                        file={logoFile}
                        accept="image/*"
                        onFileSelect={handleLogoSelect}
                        onFileRemove={() => setLogoFile(null)}
                      />
                      {errors.logoFile && touched.logoFile && (
                        <span className="error-text mt-1 d-block">
                          {errors.logoFile}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Business Documents */}
              <div className="partner-signup-section-card">
                <div className="section-card-title">Business Documents</div>

                <div className="row">
                  {/* Business Registration Info */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-white-50 fs-6 mb-2">
                      Business Registration Information
                    </label>
                    <Dropzone
                      id="reg-upload"
                      file={regFile}
                      accept=".pdf,.doc,.docx,image/*"
                      onFileSelect={handleRegSelect}
                      onFileRemove={() => setRegFile(null)}
                    />
                    {errors.regFile && touched.regFile && (
                      <span className="error-text mt-1 d-block">
                        {errors.regFile}
                      </span>
                    )}
                  </div>

                  {/* NRIC Information */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-white-50 fs-6 mb-2">
                      NRIC Information
                    </label>
                    <Dropzone
                      id="nric-upload"
                      file={nricFile}
                      accept=".pdf,.doc,.docx,image/*"
                      onFileSelect={handleNricSelect}
                      onFileRemove={() => setNricFile(null)}
                    />
                    {errors.nricFile && touched.nricFile && (
                      <span className="error-text mt-1 d-block">
                        {errors.nricFile}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Render Step 3 Form */}
          {currentStep === 3 && (
            <div className="partner-signup-section-card p-4 text-start">
              <div className="mb-4">
                <span className="text-16-400-inter text-white-50 d-block mb-1 text-start">
                  Welcome ,
                </span>
                <div className="text-32-500">
                  {formData.businessName || "N/A"}
                </div>
              </div>

              <div className="d-flex flex-column gap-3 mb-4">
                {/* Terms and Conditions Checkbox */}
                <label className="checkbox-custom-container">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => {
                      setTermsAccepted(e.target.checked);
                      if (e.target.checked)
                        setErrors((prev) => ({ ...prev, termsAccepted: "" }));
                    }}
                  />
                  <span className="checkmark-custom"></span>
                  <span>
                    By signing up, you're agreeing to our{" "}
                    <span className="fw-bold text-white">
                      Terms & Conditions
                    </span>{" "}
                    and{" "}
                    <span className="fw-bold text-white">Privacy Policy</span>.
                  </span>
                </label>
                {errors.termsAccepted && (
                  <span
                    className="error-text d-block"
                    style={{ marginTop: "-8px", marginLeft: "28px" }}
                  >
                    {errors.termsAccepted}
                  </span>
                )}

                {/* Additional Licensing Policy Checkbox */}
                <label className="checkbox-custom-container">
                  <input
                    type="checkbox"
                    checked={policiesAccepted}
                    onChange={(e) => {
                      setPoliciesAccepted(e.target.checked);
                      if (e.target.checked)
                        setErrors((prev) => ({
                          ...prev,
                          policiesAccepted: "",
                        }));
                    }}
                  />
                  <span className="checkmark-custom"></span>
                  <span>
                    I agree to these terms, License Agreement, Return Policy,
                    Acceptable Use Policy, Consent cookie banner, Disclaimer.
                  </span>
                </label>
                {errors.policiesAccepted && (
                  <span
                    className="error-text d-block"
                    style={{ marginTop: "-8px", marginLeft: "28px" }}
                  >
                    {errors.policiesAccepted}
                  </span>
                )}
              </div>

              {/* Continue Button inside Card */}
              <div className="mt-4 pt-2">
                <button
                  type="submit"
                  className="btn-peach px-5 py-2.5 rounded-pill"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Render Step 4 Form (Business Subscription) */}
          {currentStep === 4 && (
            <div className="subscription-grid">
              {/* Starter Plan */}
              <div className="subscription-card">
                <div className="subscription-icon-badge">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M15 21L6 13H9C10.3261 13 11.5979 12.4732 12.5355 11.5355C13.4732 10.5979 14 9.32608 14 8C14 6.67392 13.4732 5.40215 12.5355 4.46447C11.5979 3.52678 10.3261 3 9 3H6H18M6 8H18"
                        stroke="#FFB298"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="subscription-plan-title">Starter</h3>
                <p className="subscription-plan-desc">
                  Perfect for small businesses
                </p>
                <div className="subscription-plan-price">
                  499₹<span>per month</span>
                </div>
                <div className="subscription-feature-list">
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Upto 100 bookings per month</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>5 staff members</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Basic analytics</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Email support</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Standard booking page</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Mobile app access</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-choose-plan"
                  onClick={() => handlePlanSelect("Starter")}
                >
                  Choose Plan
                </button>
              </div>

              {/* Professional Plan */}
              <div className="subscription-card">
                <div className="subscription-icon-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                  >
                    <path d="M9.15 1L1 11.5h7.35L7.35 19 15.5 8.5H8.15L9.15 1z" />
                  </svg>
                </div>
                <h3 className="subscription-plan-title">Professional</h3>
                <p className="subscription-plan-desc">
                  For growing businesses with bigger teams
                </p>
                <div className="subscription-plan-price">
                  999₹<span>per month</span>
                </div>
                <div className="subscription-feature-list">
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Unlimited bookings</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Unlimited staff members</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Advanced analytics & reports</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Priority email & chat support</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Standard booking page</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Mobile app access</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Customer management</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-choose-plan"
                  onClick={() => handlePlanSelect("Professional")}
                >
                  Choose Plan
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="subscription-card">
                <div className="subscription-icon-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9725 0.77475C15.0021 0.902792 15.0062 1.03542 14.9845 1.16505C14.9629 1.29468 14.9159 1.41877 14.8462 1.53022C14.7766 1.64167 14.6856 1.73829 14.5786 1.81457C14.4716 1.89085 14.3505 1.94528 14.2225 1.97475L11.9985 2.48675V6.99975H15.9985C16.5289 6.99975 17.0376 7.21046 17.4127 7.58554C17.7877 7.96061 17.9985 8.46932 17.9985 8.99975V15.9997C17.9985 16.5302 17.7877 17.0389 17.4127 17.414C17.0376 17.789 16.5289 17.9998 15.9985 17.9998H2.99846C2.46803 17.9998 1.95932 17.789 1.58425 17.414C1.20917 17.0389 0.998459 16.5302 0.998459 15.9997V4.99975C0.753119 4.99937 0.516478 4.90881 0.333562 4.74531C0.150646 4.5818 0.0342202 4.35676 0.00643568 4.113C-0.0213488 3.86924 0.0414474 3.62377 0.182876 3.42329C0.324305 3.22282 0.534497 3.08133 0.773459 3.02575L13.7735 0.0257495C13.9015 -0.00388314 14.0341 -0.00798501 14.1638 0.0136784C14.2934 0.0353418 14.4175 0.0823455 14.5289 0.152002C14.6404 0.221658 14.737 0.3126 14.8133 0.419628C14.8896 0.526656 14.944 0.64767 14.9735 0.77575M15.9985 8.99975H6.99846V15.9997H8.99846V12.9997C8.9983 12.4952 9.18887 12.0092 9.53196 11.6392C9.87505 11.2692 10.3453 11.0426 10.8485 11.0047L10.9985 10.9997H11.9985C12.503 10.9996 12.989 11.1902 13.359 11.5332C13.729 11.8763 13.9556 12.3466 13.9935 12.8497L13.9985 12.9997V15.9997H15.9985V8.99975ZM11.9985 12.9997H10.9985V15.9997H11.9985V12.9997ZM4.99846 4.10275L2.99846 4.56475V15.9997H4.99846V4.10275ZM9.99846 2.94875L6.99846 3.64175V6.99975H9.99846V2.94875Z"
                      fill="#FFB298"
                    />
                  </svg>
                </div>
                <h3 className="subscription-plan-title">Enterprise</h3>
                <p className="subscription-plan-desc">
                  Advanced features and priority support
                </p>
                <div className="subscription-plan-price">
                  1,499₹<span>per month</span>
                </div>
                <div className="subscription-feature-list">
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Everything in professional</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Multi-location support</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Multi-team support</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Advanced security features</span>
                  </div>
                  <div className="subscription-feature-item">
                    <span className="subscription-feature-checkmark">✓</span>
                    <span>Customer success manager</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-choose-plan"
                  onClick={() => handlePlanSelect("Enterprise")}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          )}

          {/* Render Step 5 Form (Payment Information) */}
          {currentStep === 5 && (
            <div className="payment-layout">
              {/* Left Column: Payment fields */}
              <div className="payment-form-side">
                {/* Switcher Tab bar */}
                <div className="payment-tabs-bar">
                  <button
                    type="button"
                    className={`payment-tab-btn ${paymentMethod === "Credit Card" ? "active" : ""}`}
                    onClick={() => setPaymentMethod("Credit Card")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                    Credit Card
                  </button>
                  <button
                    type="button"
                    className={`payment-tab-btn ${paymentMethod === "UPI" ? "active" : ""}`}
                    onClick={() => setPaymentMethod("UPI")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    UPI
                  </button>
                  <button
                    type="button"
                    className={`payment-tab-btn ${paymentMethod === "Net Banking" ? "active" : ""}`}
                    onClick={() => setPaymentMethod("Net Banking")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 22v-8h18v8" />
                      <path d="M6 10h1v4H6V10z" />
                      <path d="M10 10h1v4h-1v-4z" />
                      <path d="M14 10h1v4h-1v-4z" />
                      <path d="M18 10h1v4h-1v-4z" />
                      <path d="M2 10L12 2l10 8" />
                    </svg>
                    Net Banking
                  </button>
                </div>

                {paymentMethod === "Credit Card" ? (
                  <>
                    <h3 className="text-white fs-4 mb-3 text-start">Pay with Credit Card</h3>

                    <div className="row">
                      {/* First Name */}
                      <div className="col-md-6 mb-3 text-start">
                        <label className="form-label text-white">First Name</label>
                        <input
                          type="text"
                          className={`form-control-custom-simple ${
                            errors.payFirstName ? "is-invalid" : ""
                          }`}
                          value={paymentData.firstName}
                          onChange={(e) => {
                            setPaymentData((prev) => ({ ...prev, firstName: e.target.value }));
                            setErrors((prev) => ({ ...prev, payFirstName: "" }));
                          }}
                        />
                        {errors.payFirstName && (
                          <span className="error-text mt-1 d-block">
                            {errors.payFirstName}
                          </span>
                        )}
                      </div>

                      {/* Last Name */}
                      <div className="col-md-6 mb-3 text-start">
                        <label className="form-label text-white">Last Name</label>
                        <input
                          type="text"
                          className={`form-control-custom-simple ${
                            errors.payLastName ? "is-invalid" : ""
                          }`}
                          value={paymentData.lastName}
                          onChange={(e) => {
                            setPaymentData((prev) => ({ ...prev, lastName: e.target.value }));
                            setErrors((prev) => ({ ...prev, payLastName: "" }));
                          }}
                        />
                        {errors.payLastName && (
                          <span className="error-text mt-1 d-block">
                            {errors.payLastName}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      {/* Card Number */}
                      <div className="col-md-6 mb-3 text-start">
                        <label className="form-label text-white">Card Number</label>
                        <input
                          type="text"
                          className={`form-control-custom-simple ${
                            errors.payCardNumber ? "is-invalid" : ""
                          }`}
                          placeholder="0000 0000 0000 0000"
                          value={paymentData.cardNumber}
                          onChange={handleCardNumberChange}
                        />
                        {errors.payCardNumber && (
                          <span className="error-text mt-1 d-block">
                            {errors.payCardNumber}
                          </span>
                        )}
                      </div>

                      {/* Expiration & CVV side by side */}
                      <div className="col-md-6 mb-3">
                        <div className="row">
                          {/* Expiration */}
                          <div className="col-6 text-start">
                            <label className="form-label text-white">Expiration</label>
                            <input
                              type="text"
                              className={`form-control-custom-simple ${
                                errors.payExpiration ? "is-invalid" : ""
                              }`}
                              placeholder="MM/YY"
                              value={paymentData.expiration}
                              onChange={handleExpirationChange}
                            />
                            {errors.payExpiration && (
                              <span className="error-text mt-1 d-block">
                                {errors.payExpiration}
                              </span>
                            )}
                          </div>

                          {/* cvv/cvc */}
                          <div className="col-6 text-start">
                            <label className="form-label text-white">cvv/cvc</label>
                            <input
                              type="text"
                              className={`form-control-custom-simple ${
                                errors.payCvv ? "is-invalid" : ""
                              }`}
                              placeholder="000"
                              value={paymentData.cvv}
                              onChange={handleCvvChange}
                            />
                            {errors.payCvv && (
                              <span className="error-text mt-1 d-block">
                                {errors.payCvv}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="d-flex flex-column gap-3 mt-2 text-start">
                      <label className="checkbox-custom-container">
                        <input
                          type="checkbox"
                          checked={paymentData.saveFuture}
                          onChange={(e) => {
                            setPaymentData((prev) => ({ ...prev, saveFuture: e.target.checked }));
                          }}
                        />
                        <span className="checkmark-custom"></span>
                        <span>Save for future payments</span>
                      </label>

                      <label className="checkbox-custom-container">
                        <input
                          type="checkbox"
                          checked={paymentData.infoTrue}
                          onChange={(e) => {
                            setPaymentData((prev) => ({ ...prev, infoTrue: e.target.checked }));
                            if (e.target.checked) setErrors((prev) => ({ ...prev, payInfoTrue: "" }));
                          }}
                        />
                        <span className="checkmark-custom"></span>
                        <span>
                          The information provided here is true, accurate and complete to the best of my knowledge and belief.
                        </span>
                      </label>
                      {errors.payInfoTrue && (
                        <span className="error-text d-block" style={{ marginTop: "-8px", marginLeft: "28px" }}>
                          {errors.payInfoTrue}
                        </span>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="text-white text-center py-5">
                    {paymentMethod} payment method selection is coming soon. Please pay using Credit Card.
                  </div>
                )}
              </div>

              {/* Right Column: Checkout Summary Card */}
              <div className="payment-summary-side">
                <div className="payment-summary-card">
                  <div className="payment-summary-header">
                    <span className="payment-plan-name">{selectedPlan}</span>
                    <button
                      type="button"
                      className="btn-change-plan"
                      onClick={() => {
                        setErrors({});
                        setCurrentStep(4);
                      }}
                    >
                      Change Plan
                    </button>
                  </div>

                  <div className="payment-row">
                    <span>Service fee :</span>
                    <span className="payment-row-value">{getPlanFee()}₹</span>
                  </div>

                  <div className="payment-row">
                    <span>Processing fee :</span>
                    <span className="payment-row-value">{getPlanProcessing()}₹</span>
                  </div>

                  <div className="payment-summary-divider"></div>

                  <div className="payment-row payment-row-total">
                    <span>Total :</span>
                    <span className="payment-row-total-value">{getPlanTotal()}₹</span>
                  </div>

                  <div className="payment-notice-box">
                    <p className="payment-notice-text">
                      All purchases are non-refundable. For any disputes contact customer service.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="btn-pay"
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Action Footer (Only show for Step 1 & Step 2) */}
          {currentStep < 3 && (
            <div className="d-flex justify-content-end mt-4">
              <button
                type="submit"
                className="btn-peach px-5 py-2.5 rounded-pill"
              >
                Verify
              </button>
            </div>
          )}
        </form>
      </div>

      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => {
          setIsSuccessOpen(false);
          navigate("/partner/dashboard");
        }}
        title="Vendor Approval"
        message="Waiting for vendor approval. This can take up to 24 hours"
        buttonText="Go to Dashboard"
        showIcon={false}
        showCloseButton={true}
      />
    </div>
  );
};

// Reusable Drag-and-Drop Component
const Dropzone = ({ id, file, onFileSelect, onFileRemove, accept = "*" }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = React.useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="w-100 text-start">
      <input
        ref={inputRef}
        type="file"
        id={id}
        className="d-none"
        accept={accept}
        onChange={handleChange}
      />

      {!file ? (
        <div
          className={`file-dropzone ${dragActive ? "drag-active" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={onButtonClick}
        >
          <div className="dropzone-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>
          <p className="dropzone-text text-center m-0 mb-1">
            Drop here to attach or{" "}
            <span className="dropzone-highlight">upload</span>
          </p>
          <div className="dropzone-subtext justify-content-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="me-1"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Max Size: 10MB
          </div>
        </div>
      ) : (
        <div className="file-preview-badge d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="text-truncate">{file.name}</span>
          </div>
          <button
            type="button"
            className="btn-remove-file ms-2 flex-shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              onFileRemove();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

// Sub-components for Password Toggles
const EyeOpenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M1.54489 9.25318C1.48243 9.08494 1.48243 8.89987 1.54489 8.73163C2.15315 7.25677 3.18563 5.99573 4.51145 5.10837C5.83727 4.22102 7.39671 3.74731 8.99207 3.74731C10.5874 3.74731 12.1469 4.22102 13.4727 5.10837C14.7985 5.99573 15.831 7.25677 16.4393 8.73163C16.5017 8.89987 16.5017 9.08494 16.4393 9.25318C15.831 10.728 14.7985 11.9891 13.4727 12.8764C12.1469 13.7638 10.5874 14.2375 8.99207 14.2375C7.39671 14.2375 5.83727 13.7638 4.51145 12.8764C3.18563 11.9891 2.15315 10.728 1.54489 9.25318Z"
      stroke="white"
      strokeOpacity="0.4"
      strokeWidth="1.49873"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.99223 11.2406C10.2338 11.2406 11.2403 10.2341 11.2403 8.99248C11.2403 7.75089 10.2338 6.74438 8.99223 6.74438C7.75065 6.74438 6.74414 7.75089 6.74414 8.99248C6.74414 10.2341 7.75065 11.2406 8.99223 11.2406Z"
      stroke="white"
      strokeOpacity="0.4"
      strokeWidth="1.49873"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EyeCloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M1.54489 9.25318C1.48243 9.08494 1.48243 8.89987 1.54489 8.73163C2.15315 7.25677 3.18563 5.99573 4.51145 5.10837C5.83727 4.22102 7.39671 3.74731 8.99207 3.74731C10.5874 3.74731 12.1469 4.22102 13.4727 5.10837C14.7985 5.99573 15.831 7.25677 16.4393 8.73163C16.5017 8.89987 16.5017 9.08494 16.4393 9.25318C15.831 10.728 14.7985 11.9891 13.4727 12.8764C12.1469 13.7638 10.5874 14.2375 8.99207 14.2375C7.39671 14.2375 5.83727 13.7638 4.51145 12.8764C3.18563 11.9891 2.15315 10.728 1.54489 9.25318Z"
      stroke="white"
      strokeOpacity="0.4"
      strokeWidth="1.49873"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.99223 11.2406C10.2338 11.2406 11.2403 10.2341 11.2403 8.99248C11.2403 7.75089 10.2338 6.74438 8.99223 6.74438C7.75065 6.74438 6.74414 7.75089 6.74414 8.99248C6.74414 10.2341 7.75065 11.2406 8.99223 11.2406Z"
      stroke="white"
      strokeOpacity="0.4"
      strokeWidth="1.49873"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="3"
      y1="3"
      x2="15"
      y2="15"
      stroke="white"
      strokeOpacity="0.4"
      strokeWidth="1.49873"
      strokeLinecap="round"
    />
  </svg>
);

export default PartnerSignup;
