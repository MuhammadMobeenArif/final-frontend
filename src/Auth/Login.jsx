// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const postData = async () => {
//     if (!email || !password) {
//       alert("Please fill all fields");
//       return;
//     }

//     // Vite ke liye 'import.meta.env' aur CRA ke liye 'process.env'
//     const API_URL =
//       import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

//     try {
//       const response = await axios.post(`${API_URL}/api/auth/login`, {
//         email,
//         password,
//       });

//       toast.success("Login Successfully", {
//         position: "top-right",
//         autoClose: 2000,
//       });

//       setEmail("");
//       setPassword("");

//       localStorage.setItem("token", response.data.token);
//       navigate("/dashboard");
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || "Login Failed!";
//       toast.error(errorMessage, {
//         position: "top-right",
//         autoClose: 2000,
//       });
//     }
//   };

//   const fromSubmit = (e) => {
//     e.preventDefault();
//     postData();
//   };

//   return (
//     // Super Dark Background with subtle radial glow
//     <div className="w-screen h-screen flex justify-center items-center bg-[#050505] font-sans relative overflow-hidden">
//       {/* Background Decorative Glows */}
//       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
//       <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]"></div>

//       {/* Glass Card */}
//       <div className="w-full max-w-md p-10 bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl z-10 mx-4">
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
//             Welcome
//           </h1>
//           <p className="text-zinc-500 text-sm">
//             Sign in to your account to continue
//           </p>
//         </div>

//         <form onSubmit={fromSubmit} className="flex flex-col gap-6">
//           {/* Email */}
//           <div className="space-y-2">
//             <label className="text-xs font-medium text-zinc-400 uppercase tracking-widest ml-1">
//               Email
//             </label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="name@example.com"
//               className="w-full px-5 py-3.5 bg-white/[0.05] border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-zinc-600 text-white"
//             />
//           </div>

//           {/* Password */}
//           <div className="space-y-2">
//             <div className="flex justify-between items-center px-1">
//               <label className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
//                 Password
//               </label>
//               <button
//                 type="button"
//                 className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
//               >
//                 Forgot?
//               </button>
//             </div>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="••••••••"
//               className="w-full px-5 py-3.5 bg-white/[0.05] border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-zinc-600 text-white"
//             />
//           </div>

//           {/* Submit Button */}
//           <button className="mt-4 bg-white text-black font-bold py-4 rounded-2xl hover:bg-zinc-200 transition-all active:scale-[0.97] shadow-[0_0_20px_rgba(255,255,255,0.1)]">
//             Log In
//           </button>
//         </form>

//         <div className="mt-10 text-center">
//           <p className="text-zinc-500 text-sm">
//             Don't have an account?{" "}
//             <Link to="/signup" className="text-white font-semibold hover:underline">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// Using simple emoji or Lucide icons to match the image style
import { Mail, Lock } from "lucide-react"; 

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postData = async () => {
    if (!email || !password) {
      toast.warn("Please fill all fields");
      return;
    }

    const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });

      toast.success("Login Successfully");
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login Failed!";
      toast.error(errorMessage);
    }
  };

  const fromSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    // Background with Purple/Pink Gradient and abstract feel
    <div className="w-screen min-h-screen flex justify-center items-center bg-gradient-to-br from-[#d966ff] via-[#9152f8] to-[#6b48ff] font-sans p-4 relative overflow-hidden">
      
      {/* Decorative Background Elements (Circles/Waves) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
         <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl opacity-30"></div>
         <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-900 rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Main Login Card - Glassmorphism shadow style */}
      <div className="w-full max-w-[420px] bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10">
        
        {/* Pink Header Section (Matches image top bar) */}
        <div className="bg-[#fceef5] py-5 text-center border-b border-gray-100">
          <h2 className="text-[#3a2a6d] font-black uppercase tracking-[0.2em] text-sm">
             Login
          </h2>
        </div>

        {/* Form Body */}
        <div className="p-10 flex flex-col items-center">
          <form onSubmit={fromSubmit} className="w-full space-y-6">
            
            {/* Email Field - Dark Purple Fill */}
            <div className="relative group">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email address"
                className="w-full bg-[#8c52ff] text-white placeholder:text-purple-200 px-6 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all shadow-inner"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80">
                <Mail size={18} />
              </span>
            </div>

            {/* Password Field - Dark Purple Fill */}
            <div className="relative group">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="w-full bg-[#8c52ff] text-white placeholder:text-purple-200 px-6 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all shadow-inner"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80">
                <Lock size={18} />
              </span>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center gap-2 self-start pl-1">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 accent-[#4e2a84] rounded border-none cursor-pointer" 
              />
              <label htmlFor="remember" className="text-gray-400 text-sm font-medium cursor-pointer select-none">
                Remember me
              </label>
            </div>

            {/* Centered Login Button */}
            <div className="flex justify-center pt-4">
              <button className="bg-[#3a2a6d] text-white font-bold px-14 py-2.5 rounded-lg hover:bg-[#2a1e4d] transition-all uppercase tracking-widest text-xs shadow-xl active:scale-95">
                Login
              </button>
            </div>
          </form>

          {/* Footer Link */}
          <div className="mt-10">
            <Link to="/signup" className="text-[10px] text-gray-300 hover:text-purple-500 transition-colors uppercase font-black tracking-widest">
              Need an account? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;