import React, { useState } from "react";

const CustomerSignup = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  // Validation State
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Senior Developer Validation Logic
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "fullName":
        if (!value.trim()) error = "Full name is required";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email format";
        break;
      case "phone":
        if (!value.trim()) error = "Phone number is required";
        else if (!/^\+?[\d\s-]{10,}$/.test(value))
          error = "Invalid phone number";
        break;
      case "password":
        if (!value) error = "Password is required";
        else if (value.length < 6)
          error = "Password must be at least 6 characters";
        break;
      case "confirmPassword":
        if (!value) error = "Please confirm your password";
        else if (value !== formData.password) error = "Passwords do not match";
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Live validation if the field was already touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Senior Developer: Form is valid. Proceeding with signup...", formData);
      // Integration with API would go here
    }
  };
  return (
    <div className="customer-signup-view">
      <div className="text-center mb-4">
        <h2 className="text-30-500">Create Account</h2>
        <p className="auth-subtitle mb-3">Join us and start booking today</p>
        <div className="badge-customer">Customer Account</div>
      </div>

      <form className="auth-form scrollable-form" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className="form-label">Full Name *</label>
          <div className="input-group-custom">
            <span className="input-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </span>
            <input
              type="text"
              name="fullName"
              className={`form-control-custom ${
                errors.fullName && touched.fullName ? "is-invalid" : ""
              }`}
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.fullName && touched.fullName && (
            <span className="error-text">{errors.fullName}</span>
          )}
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Email Address *</label>
          <div className="input-group-custom">
            <span className="input-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                <path d="M2 4l10 8 10-8"></path>
              </svg>
            </span>
            <input
              type="email"
              name="email"
              className={`form-control-custom ${
                errors.email && touched.email ? "is-invalid" : ""
              }`}
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.email && touched.email && (
            <span className="error-text">{errors.email}</span>
          )}
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Phone Number *</label>
          <div className="input-group-custom">
            <span className="input-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>
            <input
              type="tel"
              name="phone"
              className={`form-control-custom ${
                errors.phone && touched.phone ? "is-invalid" : ""
              }`}
              placeholder="+91 873509278"
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.phone && touched.phone && (
            <span className="error-text">{errors.phone}</span>
          )}
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Address</label>
          <div className="input-group-custom align-items-start pt-2">
            <span className="input-icon pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_916_9065)">
                  <path
                    d="M2.80859 7.44482V15.7325C2.80859 15.8815 2.86779 16.0244 2.97316 16.1298C3.07854 16.2352 3.22145 16.2944 3.37047 16.2944H6.74172V11.5184C6.74172 11.2949 6.83051 11.0805 6.98857 10.9225C7.14663 10.7644 7.361 10.6756 7.58453 10.6756H10.3939C10.6174 10.6756 10.8318 10.7644 10.9899 10.9225C11.1479 11.0805 11.2367 11.2949 11.2367 11.5184V16.2944H14.608C14.757 16.2944 14.8999 16.2352 15.0053 16.1298C15.1106 16.0244 15.1698 15.8815 15.1698 15.7325V7.44482"
                    stroke="white"
                    stroke-opacity="0.4"
                    stroke-width="1.12375"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.8555 8.99004L9.37172 1.82613C9.19614 1.64072 8.78562 1.63861 8.60687 1.82613L1.12305 8.99004M14.0462 6.28602V2.24754H12.3605V4.67063"
                    stroke="white"
                    stroke-opacity="0.4"
                    stroke-width="1.12375"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_916_9065">
                    <rect width="17.98" height="17.98" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <textarea
              name="address"
              className="form-control-custom text-area-custom"
              placeholder="203/04, Willy house, Main Street, Mumbai"
              rows="2"
              value={formData.address}
              onChange={handleInputChange}
              onBlur={handleBlur}
            ></textarea>
          </div>
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Password *</label>
          <div className="input-group-custom">
            <span className="input-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className={`form-control-custom pe-5 ${
                errors.password && touched.password ? "is-invalid" : ""
              }`}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            <button
              type="button"
              className="input-icon-end text-muted border-0 bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
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
              ) : (
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
              )}
            </button>
          </div>
          {errors.password && touched.password && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>

        <div className="form-group mb-4">
          <label className="form-label">Confirm Password *</label>
          <div className="input-group-custom">
            <span className="input-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className={`form-control-custom pe-5 ${
                errors.confirmPassword && touched.confirmPassword
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            <button
              type="button"
              className="input-icon-end text-muted border-0 bg-transparent"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
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
              ) : (
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
              )}
            </button>
          </div>
          {errors.confirmPassword && touched.confirmPassword && (
            <span className="error-text">{errors.confirmPassword}</span>
          )}
        </div>

        <button type="submit" className="btn-peach w-100 mb-4">
          Create Account
        </button>

        <div className="text-center auth-footer-text">
          Already have an account?{" "}
          <span
            className="auth-link cursor-pointer"
            onClick={() => onNavigate("CUSTOMER_LOGIN")}
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
};

export default CustomerSignup;
