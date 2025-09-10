import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const OtpVerify = () => {
  const { state } = useLocation(); // email passed from Login
  const { login } = useAuth();
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();

    if (!otp) {
      setError("Please enter OTP");
      return;
    }

    if (otp === "1234") {
      login(state?.email || "guest@example.com"); // fallback in case state missing
      navigate("/dashboard");
    } else {
      setError("Invalid OTP (hint: use 1234)");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6">Verify OTP</h2>

        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
              setError(""); // clear error when typing
            }}
            className="w-full p-3 mb-2 border rounded"
          />

          {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;
