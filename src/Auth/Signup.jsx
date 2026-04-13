// import { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const postData = async () => {
//     if (!name || !email || !password) {
//       alert("Please fill all fields");
//       return;
//     }

//     const API_URL =
//       import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

//     try {
//       const response = await axios.post(`${API_URL}/api/auth/signup`, {
//         name,
//         email,
//         password,
//       });
//       console.log(response);

//       toast.success("Sign Up Successfully", {
//         position: "top-right",
//         autoClose: 2000,
//       });

//       setName("");
//       setEmail("");
//       setPassword("");
//     } catch (error) {
//       const errorMessage =
//         error.response?.data?.message || "Something went wrong";

//       toast.error(errorMessage, {
//         position: "top-right",
//         autoClose: 2000,
//       });
//     }
//   };

//   const formSubmit = (e) => {
//     e.preventDefault();
//     postData();
//   };

//   return (
//     // Super Dark Background with subtle radial glow (Same as Login)
//     <div className="w-screen h-screen flex justify-center items-center bg-[#050505] font-sans relative overflow-hidden">
//       {/* Background Decorative Glows */}
//       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
//       <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]"></div>

//       {/* Glass Card Container */}
//       <div className="w-full max-w-md p-10 bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl z-10 mx-4">
//         <Link
//           to={"/"}
//           className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
//         >
//           {/* Left Arrow Icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
//           </svg>

//           <span className="text-sm font-medium">Back</span>
//         </Link>
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
//             Create Account
//           </h1>
//           <p className="text-zinc-500 text-sm">
//             Please fill in the details to sign up
//           </p>
//         </div>

//         <form onSubmit={formSubmit} className="flex flex-col gap-6">
//           {/* Name Field */}
//           <div className="space-y-2">
//             <label className="text-xs font-medium text-zinc-400 uppercase tracking-widest ml-1">
//               Full Name
//             </label>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               placeholder="John Doe"
//               className="w-full px-5 py-3.5 bg-white/[0.05] border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-zinc-600 text-white"
//             />
//           </div>

//           {/* Email Field */}
//           <div className="space-y-2">
//             <label className="text-xs font-medium text-zinc-400 uppercase tracking-widest ml-1">
//               Email Address
//             </label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="name@example.com"
//               className="w-full px-5 py-3.5 bg-white/[0.05] border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-zinc-600 text-white"
//             />
//           </div>

//           {/* Password Field */}
//           <div className="space-y-2">
//             <label className="text-xs font-medium text-zinc-400 uppercase tracking-widest ml-1">
//               Password
//             </label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="••••••••"
//               className="w-full px-5 py-3.5 bg-white/[0.05] border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-zinc-600 text-white"
//             />
//           </div>

//           {/* Submit Button (White for contrast) */}
//           <button className="mt-4 bg-white text-black font-bold py-4 rounded-2xl hover:bg-zinc-200 transition-all active:scale-[0.97] shadow-[0_0_20px_rgba(255,255,255,0.1)]">
//             Sign Up
//           </button>
//         </form>

//         <div className="mt-10 text-center">
//           <p className="text-zinc-500 text-sm">
//             Already have an account?{" "}
//             <Link
//               to={"/login"}
//               className="text-white font-semibold hover:underline"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added for image match

  const postData = async () => {
    if (!name || !email || !password || !confirmPassword) {
      toast.warn("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

    try {
      await axios.post(`${API_URL}/api/auth/signup`, { name, email, password });
      toast.success("Sign Up Successfully");
      setName(""); setEmail(""); setPassword(""); setConfirmPassword("");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    // Main Container with Royal Blue Background
    <div className="w-screen min-h-screen flex justify-center items-center bg-[#4274f3] font-sans p-6">
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Registration Card */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 relative inline-block">
              Registration
              <span className="absolute bottom-[-8px] left-0 w-8 h-1 bg-[#4274f3] rounded-full"></span>
            </h2>
          </div>

          <form onSubmit={formSubmit} className="space-y-5">
            {/* Name Input */}
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#4274f3] focus:ring-1 focus:ring-[#4274f3] transition-all placeholder:text-gray-400"
            />

            {/* Email Input */}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#4274f3] focus:ring-1 focus:ring-[#4274f3] transition-all placeholder:text-gray-400"
            />

            {/* Password Input */}
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#4274f3] focus:ring-1 focus:ring-[#4274f3] transition-all placeholder:text-gray-400"
            />

            {/* Confirm Password Input */}
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#4274f3] focus:ring-1 focus:ring-[#4274f3] transition-all placeholder:text-gray-400"
            />

            {/* Terms & Conditions */}
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="terms" 
                required
                className="w-4 h-4 border-gray-300 rounded accent-[#4274f3]" 
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I accept all terms & conditions
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#4274f3] text-white font-semibold py-3 rounded-md hover:bg-[#3563d9] transition-colors shadow-lg active:scale-[0.98]">
              Register Now
            </button>

            {/* Login Link */}
            <div className="text-center pt-2">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-[#4274f3] font-medium hover:underline">
                  Login now
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Right Side: Large Text (Hidden on small screens or stacked) */}
        <div className="hidden md:block flex-1 text-left">
          <h1 className="text-7xl lg:text-8xl font-black text-white leading-tight">
            Beautiful <br /> Sign up <br /> Form
          </h1>
        </div>

      </div>
    </div>
  );
}

export default Signup;