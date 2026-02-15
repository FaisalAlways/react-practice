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

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// --- Types ---
interface Project {
  id: number;
  title: string;
  image: string;
  details: string;
}

// --- Data ---
const projects: Project[] = [
  { id: 1, title: "E-Commerce App", image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop", details: "Full shopping system with cart, checkout, and payments." },
  { id: 2, title: "Mobile Banking UI", image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop", details: "Modern fintech mobile interface with clean UX." },
  { id: 3, title: "Analytics Dashboard", image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop", details: "Admin dashboard with charts and real-time data." },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          
          {/* NAVBAR */}
          <nav className="p-5 flex justify-between items-center border-b dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md sticky top-0 z-10">
            <Link to="/" className="text-2xl font-bold">Portfolio</Link>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
          </nav>

          {/* PAGE CONTENT */}
          <AnimatedRoutes setSelectedProject={setSelectedProject} />

          {/* QUICK VIEW MODAL */}
          <AnimatePresence>
            {selectedProject && (
              <Modal project={selectedProject} closeModal={() => setSelectedProject(null)} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}

/* --- ANIMATED ROUTES --- */

function AnimatedRoutes({ setSelectedProject }: { setSelectedProject: (p: Project | null) => void }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home setSelectedProject={setSelectedProject} />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

/* --- PAGES --- */

function Home({ setSelectedProject }: { setSelectedProject: (p: Project | null) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border dark:border-gray-700"
        >
          <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
            <div className="flex gap-2">
              <button onClick={() => setSelectedProject(project)} className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded-md">
                Quick View
              </button>
              <Link to={`/project/${project.id}`} className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1.5 rounded-md">
                Full Details
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <div className="p-10 text-center">Project not found.</div>;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-10 max-w-3xl mx-auto"
    >
      <img src={project.image} alt={project.title} className="rounded-2xl w-full mb-8 shadow-2xl" />
      <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400">{project.details}</p>
      <Link to="/" className="inline-block mt-8 text-blue-500 font-medium">← Back to Gallery</Link>
    </motion.div>
  );
}

/* --- MODAL --- */

/* --- UPDATED SMOOTH MODAL --- */

function Modal({ project, closeModal }: { project: Project; closeModal: () => void }) {
  return (
    <motion.div
      // Smooth fade for the dark background
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }} 
      onClick={closeModal}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50"
    >
      <motion.div
        // "Pop" effect using spring physics
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25, 
          velocity: 2 
        }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 p-6 rounded-2xl max-w-md w-full shadow-2xl"
      >
        <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{project.details}</p>
        <button 
          onClick={closeModal} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold transition-colors"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

export default App;