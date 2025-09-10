import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () =>{
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.phone) return alert("Email & Phone required");
    navigate("/otp", { state: form });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6">Signup</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 mb-4 border rounded" />
          <input type="tel" placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full p-3 mb-4 border rounded" />
          <button type="submit" className="w-full bg-primary text-white py-2 rounded">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
