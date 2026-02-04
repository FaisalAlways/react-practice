import { useState } from "react";

const AuthDesigns = () => {
  const [fullAdvancedFormData, setFullAdvancedFormData] = useState({
    username: "",
    useremail: "",
    userphone: "",
    userrole: "",
    usergender: "",
    userskills: [],
    userexperience: "",
    userbio: "",
    userterms: false,
  });

  const handleFullAdvancedSubmit = (e) => {
    e.preventDefault();
    console.log(fullAdvancedFormData, "Full Advanced Form Data");

    // RESET FORM
    setFullAdvancedFormData({
      username: "",
      useremail: "",
      userphone: "",
      userrole: "",
      usergender: "",
      userskills: [],
      userexperience: "",
      userbio: "",
      userterms: false,
    });
  };

  const handleFullAdvancedChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFullAdvancedFormData((prev) => {
      if (type === "checkbox" && name === "userskills") {
        return {
          ...prev,
          userskills: checked
            ? [...prev.userskills, value]
            : prev.userskills.filter((userskill) => userskill !== value),
        };
      }

      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-center mb-2">
        Full Advanced Form
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        More inputs, real-world example
      </p>

      <form className="space-y-4" onSubmit={handleFullAdvancedSubmit}>
        <input
          name="username"
          value={fullAdvancedFormData.username}
          onChange={handleFullAdvancedChange}
          type="text"
          placeholder="Username"
          className="w-full border rounded-xl px-4 py-2"
        />

        <input
          name="useremail"
          value={fullAdvancedFormData.useremail}
          onChange={handleFullAdvancedChange}
          type="email"
          placeholder="Email"
          className="w-full border rounded-xl px-4 py-2"
        />

        <input
          name="userphone"
          type="number"
          value={fullAdvancedFormData.userphone}
          onChange={handleFullAdvancedChange}
          placeholder="Phone"
          className="w-full border rounded-xl px-4 py-2"
        />

        {/* ROLE */}
        <label htmlFor="role">Select Role</label>
        <select
          id="role"
          value={fullAdvancedFormData.userrole}
          onChange={handleFullAdvancedChange}
          name="userrole"
          className="w-full border rounded-xl px-4 py-2"
        >
          <option value="">Select Role</option>
          <option>User</option>
          <option>Admin</option>
        </select>

        {/* GENDER */}
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="usergender"
              value="Male"
              checked={fullAdvancedFormData.usergender === "Male"}
              onChange={handleFullAdvancedChange}
            />
            Male
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="usergender"
              value="Female"
              checked={fullAdvancedFormData.usergender === "Female"}
              onChange={handleFullAdvancedChange}
            />
            Female
          </label>
        </div>

        {/* SKILLS */}
        <div>
          <p className="font-medium mb-2">Skills</p>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="userskills"
              value="React"
              checked={fullAdvancedFormData.userskills.includes("React")}
              onChange={handleFullAdvancedChange}
            />
            React
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="userskills"
              value="Node"
              checked={fullAdvancedFormData.userskills.includes("Node")}
              onChange={handleFullAdvancedChange}
            />
            Node
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="userskills"
              value="CSS"
              checked={fullAdvancedFormData.userskills.includes("CSS")}
              onChange={handleFullAdvancedChange}
            />
            CSS
          </label>
        </div>

        {/* EXPERIENCE */}
        <input
          name="userexperience"
          type="number"
          value={fullAdvancedFormData.userexperience}
          onChange={handleFullAdvancedChange}
          placeholder="Experience (years)"
          className="w-full border rounded-xl px-4 py-2"
        />

        {/* BIO */}
        <textarea
          name="userbio"
          value={fullAdvancedFormData.userbio}
          onChange={handleFullAdvancedChange}
          placeholder="Short Bio"
          className="w-full border rounded-xl px-4 py-2"
        />

        {/* TERMS */}
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="userterms"
            checked={fullAdvancedFormData.userterms}
            onChange={handleFullAdvancedChange}
          />
          I agree to terms & conditions
        </label>

        <button
          type="submit"
          className="w-full bg-slate-800 text-white py-2.5 rounded-xl cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AuthDesigns;
