import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
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
  );
};

export default LoginForm;
