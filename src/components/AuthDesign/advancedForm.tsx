import { useState } from "react";

const AdvancedForm = () => {
  const [advancedFormData, setadvancedFormData] = useState({
    role: "",
    country: "",
    terms: false,
  });

  const handleAdvancedSubmit = (e) => {
    e.preventDefault();
    console.log("Advanced Data:", advancedFormData);

    // RESET FORM
    setadvancedFormData({
      role: "",
      country: "",
      terms: false,
    });
  };

  const handleAdvancedChange = (e) => {
    const { name, type, value, checked } = e.target;
    setadvancedFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
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
                checked={advancedFormData.role === "User"}
                onChange={handleAdvancedChange}
              />
              User
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="role"
                value="Admin"
                checked={advancedFormData.role === "Admin"}
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
          value={advancedFormData.country}
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
            checked={advancedFormData.terms}
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
  );
};

export default AdvancedForm;
