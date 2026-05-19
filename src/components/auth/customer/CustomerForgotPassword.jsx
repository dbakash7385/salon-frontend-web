import React, { useState } from "react";

const CustomerForgotPassword = ({ onNavigate }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const validate = (val) => {
    if (!val.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(val)) return "Invalid email format";
    return "";
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    if (touched) {
      setError(validate(val));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validate(email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    const err = validate(email);
    setError(err);

    if (!err) {
      console.log("Senior Developer: Reset link sent to", email);
      onNavigate("CUSTOMER_VERIFICATION");
    }
  };

  return (
    <div className="customer-forgot-password-view">
      <div className="text-center mb-4">
        <h2 className="text-30-500">Forgot Password</h2>
        <p className="text-16-400 mb-3">
          Enter your email to reset your password.
        </p>
        <div className="badge-customer">Customer Account</div>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group mb-4">
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
              className={`form-control-custom ${
                error && touched ? "is-invalid" : ""
              }`}
              placeholder="your@email.com"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {error && touched && <span className="error-text">{error}</span>}
        </div>

        <button type="submit" className="btn-peach w-100 mb-4">
          Submit
        </button>

        <div className="text-center auth-footer-text">
          Remembered your password?{" "}
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

export default CustomerForgotPassword;
