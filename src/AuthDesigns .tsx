import { useState } from "react";

const AuthDesigns = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerFromData, setRegisterFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [advancedFromData, setAdvancedFromData] = useState({
    role: "",
    country: "",
    terms: false,
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", registerFromData);
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdvancedSubmit = (e) => {
    e.preventDefault();
    console.log("Advanced Data:", advancedFromData);
  };

  const handleAdvancedChange = (e) => {
    const { name, type, value, checked } = e.target;
    setAdvancedFromData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 p-6 flex flex-wrap gap-6 justify-around items-center">
      {/* REGISTER FORM */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Register</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Create a new account
        </p>

        <form className="space-y-4" onSubmit={handleRegisterSubmit}>
          <div className="flex gap-3">
            <input
              name="firstName"
              type="text"
              value={registerFromData.firstName}
              onChange={handleRegisterChange}
              placeholder="First Name"
              className="w-1/2 rounded-xl border px-4 py-2 focus:ring-2 focus:ring-slate-700 outline-none"
            />
            <input
              name="lastName"
              type="text"
              value={registerFromData.lastName}
              onChange={handleRegisterChange}
              placeholder="Last Name"
              className="w-1/2 rounded-xl border px-4 py-2 focus:ring-2 focus:ring-slate-700 outline-none"
            />
          </div>

          <input
            name="email"
            type="email"
            value={registerFromData.email}
            onChange={handleRegisterChange}
            placeholder="Email"
            className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-slate-700 outline-none"
          />

          <input
            name="password"
            type="password"
            value={registerFromData.password}
            onChange={handleRegisterChange}
            placeholder="Password"
            className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-slate-700 outline-none"
          />

          <input
            name="confirmPassword"
            type="password"
            value={registerFromData.confirmPassword}
            onChange={handleRegisterChange}
            placeholder="Confirm Password"
            className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-slate-700 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-2.5 rounded-xl hover:bg-slate-900 transition cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>

      {/* LOGIN FORM */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign in to your account
        </p>

        <form className="space-y-4" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-slate-700 outline-none"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-slate-700 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-2.5 rounded-xl hover:bg-slate-900 transition cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>

      {/* ADVANCED FORM */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Advanced Form</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Extra inputs & options
        </p>

        <form className="space-y-4" onSubmit={handleAdvancedSubmit}>
          {/* RADIO */}
          <div>
            <p className="text-sm font-medium mb-2">Account Type</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="role"
                  value="User"
                  checked={advancedFromData.role === "User"}
                  onChange={handleAdvancedChange}
                />
                User
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="role"
                  value="Admin"
                  checked={advancedFromData.role === "Admin"}
                  onChange={handleAdvancedChange}
                />
                Admin
              </label>
            </div>
          </div>

          {/* SELECT */}
          <label htmlFor="country" className="block text-sm font-medium mb-2">
            Country
          </label>
          <select
            id="country"
            name="country"
            value={advancedFromData.country}
            onChange={handleAdvancedChange}
            className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-slate-700 outline-none"
          >
            <option>Select Country</option>
            <option>Bangladesh</option>
            <option>India</option>
            <option>USA</option>
          </select>

          {/* CHECKBOX */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="terms"
              checked={advancedFromData.terms}
              onChange={handleAdvancedChange}
            />
            I agree to the terms & conditions
          </label>

          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-2.5 rounded-xl hover:bg-slate-900 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthDesigns;
