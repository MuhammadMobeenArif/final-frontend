/* eslint-disable no-unused-vars */
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// function Dashboard() {
//   const navigate = useNavigate();

//   // Example user name
//   const userName = "Mobeen";

//   const handleLogout = () => {
//     localStorage.removeItem("token");

//     toast.success("Logged Out Successfully", {
//       position: "top-right",
//       autoClose: 2000,
//     });
//     navigate("/login");
//   };

//   return (
//     // Matching Deep Dark Background
//     <div className="min-h-screen bg-[#747070] flex items-center justify-center px-4 font-sans relative overflow-hidden">
//       {/* Background Decorative Glows */}
//       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-700/20 rounded-full blur-[120px]"></div>
//       <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-700/20 rounded-full blur-[120px]"></div>

//       {/* Main Glass Dashboard Card */}
//       <div className="w-full max-w-4xl bg-yellow-500/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-yellow-500/10 shadow-2xl p-8 md:p-12 z-10 my-10">
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
//           <div>
//             <h1 className="text-4xl font-extrabold text-white tracking-tight">
//               Dashboard
//             </h1>
//             <p className="text-zinc-500 mt-2 text-lg">
//               Welcome back,{" "}
//               <span className="text-indigo-400 font-semibold">{userName}</span>{" "}
//               👋
//             </p>
//           </div>

//           <button
//             onClick={handleLogout}
//             className="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 font-bold px-8 py-3 rounded-2xl transition-all duration-300 active:scale-95 shadow-lg shadow-red-500/5"
//           >
//             Logout
//           </button>
//         </div>

//         {/* Stats/Info Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Profile Card */}
//           <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 hover:bg-white/[0.04] transition-colors group">
//             <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
//               <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
//               Profile Info
//             </h2>
//             <div className="space-y-3">
//               <p className="text-zinc-400">
//                 User Name:{" "}
//                 <span className="text-white font-medium ml-2">{userName}</span>
//               </p>
//               <p className="text-zinc-500 text-sm leading-relaxed">
//                 Your account is active and verified. You can update your
//                 settings anytime.
//               </p>
//             </div>
//           </div>

//           {/* Activity Card */}
//           <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 hover:bg-white/[0.04] transition-colors group">
//             <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
//               <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
//               Recent Activity
//             </h2>
//             <p className="text-zinc-400 italic">
//               "Successfully logged in today"
//             </p>
//             <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
//               System logs show no unusual activity on your account.
//             </p>
//           </div>
//         </div>

//         {/* Footer Announcement (Indigo Glass) */}
//         <div className="mt-8 bg-gray-600/10 border border-indigo-500/20 rounded-[2rem] p-6 md:p-8 flex items-start gap-4">
//           <div className="text-2xl">🎉</div>
//           <div>
//             <p className="text-indigo-300 font-bold text-lg">
//               Ready to explore?
//             </p>
//             <p className="text-indigo-200/60 text-sm mt-1">
//               This is your personal workspace. Start adding tasks, managing your
//               projects, or checking your analytics right from here.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; // Animations ke liye
import { FiLogOut, FiUser, FiActivity, FiArrowRight } from "react-icons/fi";

function Dashboard() {
  const navigate = useNavigate();

  // User details
  const userName = "Mobeen";

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged Out Successfully", {
      position: "top-right",
      autoClose: 2000,
    });
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6 font-sans relative overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Main Glass Dashboard Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-white/[0.02] backdrop-blur-3xl rounded-[3rem] border border-white/5 shadow-2xl p-8 md:p-14 z-10 relative"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
              Live Workspace
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter">
              Control <span className="text-indigo-500">Center</span>
            </h1>
            <p className="text-zinc-500 mt-3 text-lg">
              Glad to see you again,{" "}
              <span className="text-white font-bold">{userName}</span> 👋
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="group flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/10 font-bold px-8 py-4 rounded-2xl transition-all active:scale-95"
          >
            <FiLogOut className="group-hover:rotate-12 transition-transform" />
            Sign Out
          </button>
        </div>

        {/* Stats/Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Profile Card */}
          <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-10 hover:border-indigo-500/30 transition-all group">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FiUser className="text-indigo-500 text-2xl" />
            </div>
            <h2 className="text-2xl font-black text-white mb-3">
              Profile Identity
            </h2>
            <div className="space-y-4">
              <p className="text-zinc-400 flex items-center gap-2">
                Identifier: <span className="text-indigo-300 font-mono tracking-wider">@{userName.toLowerCase()}</span>
              </p>
              <p className="text-zinc-500 text-base leading-relaxed">
                Your account is currently active on the premium tier. All features are unlocked.
              </p>
            </div>
          </div>

          {/* Activity Card */}
          <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-10 hover:border-emerald-500/30 transition-all group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FiActivity className="text-emerald-500 text-2xl" />
            </div>
            <h2 className="text-2xl font-black text-white mb-3">
              System Logs
            </h2>
            <p className="text-emerald-400/80 font-medium italic mb-4">
              "Session established securely"
            </p>
            <p className="text-zinc-500 text-base leading-relaxed">
              Last login detected from Karachi, PK. No unusual access attempts found.
            </p>
          </div>
        </div>

        {/* Action Link (New Feature) */}
        <button 
          onClick={() => navigate("/dashboard/links")} // Aapka main link dashboard
          className="mt-10 w-full bg-white text-black py-5 rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all group"
        >
          Manage Your Public Links
          <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>

        {/* Subtle Footer */}
        <div className="mt-12 text-center">
          <p className="text-zinc-700 text-[10px] tracking-[0.3em] font-black uppercase">
            Folio Engine v2.0 // Secure Connection
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Dashboard;
