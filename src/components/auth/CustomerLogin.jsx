import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerLogin = ({ onNavigate }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Validation State
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Senior Developer Validation Logic
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email format";
        break;
      case "password":
        if (!value) error = "Password is required";
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Live validation if field touched
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

    // Mark all as touched
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    // Validate all
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Senior Developer: Login valid", formData);
      navigate("/customer/home");
    }
  };
  return (
    <div className="customer-login-view">
      <div className="text-center mb-4">
        <h2 className="text-30-500">Welcome Back</h2>
        <p className="text-16-400 mb-3">Login to book your next appointment</p>
        <div className="badge-customer">Customer Account</div>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className="form-label">Email Address</label>
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

        <div className="form-group mb-4">
          <label className="form-label">Password</label>
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
          <div className="text-end mt-2">
            <span 
              className="forgot-password-link cursor-pointer"
              onClick={() => onNavigate("CUSTOMER_FORGOT_PASSWORD")}
            >
              Forgot Password?
            </span>
          </div>
        </div>

        <button type="submit" className="btn-peach w-100 mb-4">
          Login
        </button>

        <div className="auth-divider mb-4">
          <span>OR</span>
        </div>

        <div className="text-center auth-footer-text">
          Don't have an account?{" "}
          <span
            className="auth-link cursor-pointer"
            onClick={() => onNavigate("CUSTOMER_SIGNUP")}
          >
            Sign Up
          </span>
        </div>
      </form>
    </div>
  );
};

export default CustomerLogin;
