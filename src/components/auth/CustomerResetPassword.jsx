import React, { useState } from "react";

const CustomerResetPassword = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
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
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);
    setTouched({ password: true, confirmPassword: true });

    if (Object.keys(newErrors).length === 0) {
      console.log("Senior Developer: Password reset successful", formData);
      onNavigate("CUSTOMER_LOGIN");
    }
  };

  const EyeIcon = ({ isOpen, toggle }) => (
    <button
      type="button"
      className="input-icon-end text-muted border-0 bg-transparent"
      onClick={toggle}
    >
      {isOpen ? (
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
  );

  return (
    <div className="customer-reset-password-view">
      <div className="text-center mb-4">
        <h2 className="text-30-500">Reset Password</h2>
        <p className="text-16-400 mb-3">Set new password</p>
        <div className="badge-customer">Customer Account</div>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
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
            <EyeIcon
              isOpen={showPassword}
              toggle={() => setShowPassword(!showPassword)}
            />
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
            <EyeIcon
              isOpen={showConfirmPassword}
              toggle={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
          {errors.confirmPassword && touched.confirmPassword && (
            <span className="error-text">{errors.confirmPassword}</span>
          )}
        </div>

        <button type="submit" className="btn-peach w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomerResetPassword;
