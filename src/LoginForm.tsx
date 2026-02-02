import { useState } from "react";
const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("name:", name);
    console.log("email:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-800 p-4">
      <div className="w-full max-w-md bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Login
        </h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          Sign up to get started
        </p>

        <form className="space-y-4" onSubmit={handelSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 rounded-xl bg-slate-800 text-white py-2.5 font-medium hover:bg-slate-900 transition cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
