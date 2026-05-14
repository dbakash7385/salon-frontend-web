import React, { useState, useRef } from "react";

const CustomerVerification = ({ onNavigate }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 4) {
      console.log("Senior Developer: Verifying OTP", otpValue);
      onNavigate("CUSTOMER_RESET_PASSWORD");
    }
  };

  return (
    <div className="customer-verification-view">
      <div className="text-center mb-4">
        <h2 className="text-30-500">Verification</h2>
        <p className="text-16-400 mb-3">
          Enter code sent to your registered email
        </p>
        <div className="badge-customer">Customer Account</div>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="otp-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              className="otp-input"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              maxLength={1}
            />
          ))}
        </div>

        <button type="submit" className="btn-peach w-100 mb-4">
          Verify
        </button>

        <div className="text-center auth-footer-text">
          Didn't receive the code?{" "}
          <span className="auth-link cursor-pointer">Resend Code</span>
        </div>
      </form>
    </div>
  );
};

export default CustomerVerification;
