// const styles = {
//   wrapper: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontFamily: "system-ui, -apple-system, sans-serif",
//   },
//   card: {
//     width: "320px",
//     backgroundColor: "#ffffff",
//     borderRadius: "16px",
//     boxShadow:
//       "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//     overflow: "hidden",
//     border: "1px solid #e5e7eb",
//     position: "relative" as const,
//   },
//   header: {
//     backgroundColor: "#2563eb",
//     height: "96px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#ffffff",
//   },
//   universityName: {
//     fontSize: "18px",
//     fontWeight: "bold",
//     letterSpacing: "0.05em",
//     textTransform: "uppercase",
//     margin: 0,
//   },
//   idLabel: {
//     fontSize: "11px",
//     opacity: 0.8,
//     fontWeight: 500,
//     marginTop: "4px",
//   },
//   photoContainer: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "-48px",
//   },
//   photo: {
//     width: "112px",
//     height: "112px",
//     objectFit: "cover",
//     borderRadius: "50%",
//     border: "4px solid #ffffff",
//     boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//   },
//   body: {
//     padding: "24px",
//     textAlign: "center",
//   },
//   studentName: {
//     fontSize: "24px",
//     fontWeight: 800,
//     color: "#1f2937",
//     margin: "0 0 4px 0",
//   },
//   major: {
//     color: "#2563eb",
//     fontWeight: 600,
//     marginBottom: "16px",
//   },
//   infoRow: {
//     display: "flex",
//     justifyContent: "space-between",
//     borderBottom: "1px solid #f3f4f6",
//     paddingBottom: "4px",
//     marginBottom: "12px",
//     fontSize: "14px",
//     color: "#4b5563",
//   },
//   footer: {
//     backgroundColor: "#f9fafb",
//     padding: "16px",
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "center",
//     borderTop: "1px solid #e5e7eb",
//   },
//   qrCode: {
//     width: "64px",
//     height: "64px",
//     border: "1px solid #e5e7eb",
//     padding: "4px",
//     backgroundColor: "#fff",
//   },
//   footerText: {
//     fontSize: "10px",
//     color: "#9ca3af",
//     textAlign: "right",
//     lineHeight: "1.2",
//   },
//   bottomStrip: {
//     height: "8px",
//     backgroundColor: "#2563eb",
//   },
// };

// import { useState } from "react";
// import StudentCard from "./StudentCard";
// import { studentsData } from "./components/SchoolCard/StudentData";

// const students = [
//   { name: "Faisal", email: "faisal@example.com", grade: "A+", role: "Student" },
//   { name: "Ali", email: "ali@example.com", grade: "B", role: "Student" },
//   { name: "Sara", email: "sara@example.com", grade: "A", role: "Student" },
//   { name: "Mina", email: "mina@example.com", grade: "B+", role: "Student" },
//   { name: "Zara", email: "zara@example.com", grade: "A-", role: "Student" },
// ];

// const Fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// console.log(Fruits, "<-Fruits Array");
// console.log(Fruits[2], "<-Fruits Array Index check");
// const fruits = [...Fruits, "Mango", "Orange"];
// console.log(fruits[5], "<-Fruits Array Index check after update");
// console.log(fruits, "<-Updated Fruits Array");

// const person = {
//   name: "John",
//   age: 25,
//   city: "New York",
// };

// console.log(person, "<-Person Object");
// console.log(person.name, "<-Name check");

// const updatedPerson = {
//   ...person,
//   country: "USA",
//   profection: "Engineer",
// };

// console.log(updatedPerson, "<-Updated Person Object");
// console.log(updatedPerson.profection, "<-Profession after update");

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [showCard, setShowCard] = useState(false);
//   const [showData, setShowData] = useState(false);

//   const handleLoginClick = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   const handleShowCardClick = () => {
//     setShowCard(!showCard);
//   };

//   const handleShowData = () => {
//     setShowData(!showData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 font-sans p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">
//           {isLoggedIn ? "Hello, FAISAL 👋" : "Hello, Guest 👋"}
//         </h1>
//         <button
//           onClick={handleLoginClick}
//           className="px-6 py-3 rounded-md text-white text-base font-medium cursor-pointer transition-colors duration-300 bg-blue-500 hover:bg-blue-600 mr-4"
//         >
//           {isLoggedIn ? "Logout" : "Login"}
//         </button>

//         <button
//           onClick={handleShowCardClick}
//           className="px-6 py-3 rounded-md text-white text-base font-medium cursor-pointer transition-colors duration-300 bg-green-500 hover:bg-green-600"
//         >
//           {showCard ? "Hide Student Cards" : "Show Student Cards"}
//         </button>
//       </div>
//       {showCard ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {studentsData.map((student, i) => (
//             <StudentCard key={i} student={student} styles={styles} />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center text-gray-500 text-lg mt-10">
//           NO DATA FOUND
//         </div>
//       )}

//       <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center space-y-6">
//         <h1 className="text-2xl font-bold text-gray-800">
//           Students Data Cards
//         </h1>

//         <button
//           onClick={handleShowData}
//           className="px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
//         >
//           {showData ? "Hide Student Data" : "Show Student Data"}
//         </button>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//           {students.map((student, index) => (
//             <div key={index} className="bg-white p-4 rounded shadow w-72">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {showData ? student.name : "Student Name"}
//               </h2>
//               <p className="text-gray-500">
//                 {showData ? student.role : "Role"}
//               </p>
//               <p>Email: {showData ? student.email : "---"}</p>
//               <p>Grade: {showData ? student.grade : "---"}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// import { useState } from "react";

// const App = () => {
//   const blankData = {
//     name: "",
//     roll: null,
//     fatherName: "",
//     motherName: "",
//     age: null,
//     email: "",
//     phone: "",
//     className: "",
//     section: "",
//     address: "",
//   };

//   const [data, setData] = useState([blankData]);

//   const handleSubmitData = () => {
//     setData([
//       {
//         name: "Asim Ali",
//         roll: 101,
//         fatherName: "Ahmed Khan",
//         motherName: "Ayesha Khan",
//         age: 20,
//         email: "asim@student.edu",
//         phone: "+92 300 1234567",
//         className: "BS Computer Science",
//         section: "A",
//         address: "Lahore, Pakistan",
//       },
//     ]);
//   };

//   console.log(data, "<-data state check");

//   const handleDataReset = () => {
//     setData([blankData]);
//   };

//   const handlePlusData = () => {
//     setData([...data, blankData]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <div className="flex gap-4 mb-8">
//         <button
//           onClick={handleSubmitData}
//           className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           Show Data
//         </button>

//         <button
//           onClick={handleDataReset}
//           className="px-5 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
//         >
//           Reset Data
//         </button>

//         <button
//           onClick={handlePlusData}
//           className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//         >
//           Add More
//         </button>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {data.map((item, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-xl shadow-md border border-gray-200"
//           >
//             {/* Header */}
//             <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-t-xl">
//               <h2 className="text-lg font-semibold"> Name {item.name}</h2>
//               <p className="text-sm opacity-90">Roll No: {item.roll}</p>
//             </div>

//             {/* Body */}
//             <div className="p-4 text-sm space-y-2">
//               <p>
//                 <span className="font-medium">Father:</span> {item.fatherName}
//               </p>
//               <p>
//                 <span className="font-medium">Mother:</span> {item.motherName}
//               </p>
//               <p>
//                 <span className="font-medium">Age:</span> {item.age}
//               </p>
//               <p>
//                 <span className="font-medium">Class:</span> {item.className}
//               </p>
//               <p>
//                 <span className="font-medium">Section:</span> {item.section}
//               </p>
//               <p>
//                 <span className="font-medium">Email:</span> {item.email}
//               </p>
//               <p>
//                 <span className="font-medium">Phone:</span> {item.phone}
//               </p>
//               <p>
//                 <span className="font-medium">Address:</span> {item.address}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// import { useEffect, useState } from "react";

// const App = () => {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black">
//       <div className="relative bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-12 w-96 text-center border border-white/20">
//         {/* Glow effect */}
//         <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
//         <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-30"></div>

//         <h1 className="text-3xl font-semibold text-white mb-8 tracking-wider">
//           ⏳ Timer
//         </h1>

//         <h2 className="text-6xl font-extrabold text-white mb-10 tracking-wide">
//           {seconds}s
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default App;

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-white/30">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          💰 Expense Tracker
        </h1>

        {/* Input Section */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Expense Title"
            className="flex-1 px-4 py-2 rounded-xl bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="number"
            placeholder="₹ Amount"
            className="w-28 px-4 py-2 rounded-xl bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <button className="px-4 py-2 rounded-xl bg-white text-purple-600 font-semibold hover:bg-purple-100 transition duration-300">
            Add
          </button>
        </div>

        {/* Total Expense */}
        <div className="bg-white/25 rounded-2xl p-4 text-center mb-6">
          <p className="text-white/80 text-sm">Total Expense</p>
          <h2 className="text-2xl font-bold text-white">₹750.00</h2>
        </div>

        {/* Expense List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-white/25 p-4 rounded-2xl">
            <div>
              <p className="text-white font-medium">Internet Charges</p>
              <span className="text-white/70 text-sm">₹500</span>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition">
              ✕
            </button>
          </div>

          <div className="flex justify-between items-center bg-white/25 p-4 rounded-2xl">
            <div>
              <p className="text-white font-medium">Train Ticket</p>
              <span className="text-white/70 text-sm">₹250</span>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition">
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
