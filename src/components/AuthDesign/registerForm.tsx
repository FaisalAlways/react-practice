import { useState } from "react";

const RegisterForm = () => {
  const [registerFormData, setRegisterFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", registerFormData);

    // RESET FORM
    setRegisterFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
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
            value={registerFormData.firstName}
            onChange={handleRegisterChange}
            placeholder="First Name"
            className="w-1/2 rounded-xl border px-4 py-2 focus:ring-2 focus:ring-slate-700 outline-none"
          />
          <input
            name="lastName"
            type="text"
            value={registerFormData.lastName}
            onChange={handleRegisterChange}
            placeholder="Last Name"
            className="w-1/2 rounded-xl border px-4 py-2 focus:ring-2 focus:ring-slate-700 outline-none"
          />
        </div>

        <input
          name="email"
          type="email"
          value={registerFormData.email}
          onChange={handleRegisterChange}
          placeholder="Email"
          className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-slate-700 outline-none"
        />

        <input
          name="password"
          type="password"
          value={registerFormData.password}
          onChange={handleRegisterChange}
          placeholder="Password"
          className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-slate-700 outline-none"
        />

        <input
          name="confirmPassword"
          type="password"
          value={registerFormData.confirmPassword}
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
  );
};

export default RegisterForm;
