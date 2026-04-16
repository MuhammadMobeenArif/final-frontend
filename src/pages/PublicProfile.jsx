/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { FiExternalLink } from "react-icons/fi";
// import { getPublicProfile, incrementClick } from "../services/api";

// export default function PublicProfile() {
//   const { username } = useParams();
//   const [profile, setProfile] = useState(null);
//   const [links, setLinks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [notFound, setNotFound] = useState(false);

//   useEffect(() => {
//     getPublicProfile(username)
//       .then((res) => {
//         const data = res.data;
//         setProfile(data.profile || data);
//         setLinks(data.links || []);
//       })
//       .catch(() => setNotFound(true))
//       .finally(() => setLoading(false));
//   }, [username]);

//   const handleLinkClick = async (link) => {
//     try { await incrementClick(link._id); } catch { /* silent */ }
//     window.open(link.url, "_blank", "noreferrer");
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#877f7f] flex items-center justify-center">
//         <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
//       </div>
//     );
//   }

//   if (notFound) {
//     return (
//       <div className="min-h-screen bg-[#766d6d] flex flex-col items-center justify-center text-center px-4">
//         <p className="text-6xl mb-4">🔍</p>
//         <h1 className="text-orange-500 text-2xl font-bold mb-2">Profile not found</h1>
//         <p className="text-amber-500">@{username} doesn't exist yet.</p>
//       </div>
//     );
//   }

//   const activeLinks = links.filter((l) => l.isActive);

//   return (
//     <div className="min-h-screen bg-[#685e5e] font-sans relative overflow-hidden flex flex-col items-center px-4 py-16">
//       {/* Background glows */}
//       <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />
//       <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

//       <div className="w-full max-w-md z-10">
//         {/* Profile Header */}
//         <div className="flex flex-col items-center text-center mb-10">
//           {profile?.profileImage ? (
//             <img
//               src={profile.profileImage}
//               alt={profile.fullName}
//               className="w-24 h-24 rounded-full object-cover border-2 border-amber-500/50 mb-4 shadow-lg shadow-indigo-500/10"
//             />
//           ) : (
//             <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-600 to-green-600 flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg shadow-indigo-500/20">
//               {profile?.fullName?.[0] || username?.[0]?.toUpperCase() || "?"}
//             </div>
//           )}
//           <h1 className="text-white text-2xl font-bold tracking-tight">
//             {profile?.fullName || username}
//           </h1>
//           {profile?.bio && (
//             <p className="text-zinc-400 text-sm mt-2 max-w-xs leading-relaxed">{profile.bio}</p>
//           )}
//           <p className="text-zinc-600 text-xs mt-1">@{username}</p>
//         </div>

//         {/* Links */}
//         <div className="space-y-3">
//           {activeLinks.length === 0 && (
//             <p className="text-green-600 text-center py-8">No links to show yet.</p>
//           )}
//           {activeLinks.map((link) => (
//             <button
//               key={link._id}
//               onClick={() => handleLinkClick(link)}
//               className="group w-full flex items-center justify-between bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-indigo-500/40 text-white font-medium px-6 py-4 rounded-2xl transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow-indigo-500/10 hover:shadow-lg"
//             >
//               <span className="truncate">{link.title || link.url}</span>
//               <FiExternalLink
//                 size={16}
//                 className="text-zinc-600 group-hover:text-indigo-400 transition-colors shrink-0 ml-3"
//               />
//             </button>
//           ))}
//         </div>

//         {/* Footer */}
//         <p className="text-center text-zinc-700 text-xs mt-12">
//           Powered by <span className="text-zinc-500 font-medium">LinkTree</span>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiExternalLink, FiShare2 } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"; // Animations ke liye
import { getPublicProfile, incrementClick } from "../services/api";

export default function PublicProfile() {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getPublicProfile(username)
      .then((res) => {
        const data = res.data;
        setProfile(data.profile || data);
        setLinks(data.links || []);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [username]);

  const handleLinkClick = async (link) => {
    try { await incrementClick(link._id); } catch { /* silent */ }
    window.open(link.url, "_blank", "noreferrer");
  };

  // Loading State with Spinner
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  // Not Found State
  if (notFound) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-6">
        <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center mb-6 border border-red-500/20">
          <span className="text-4xl">🛸</span>
        </div>
        <h1 className="text-white text-3xl font-black mb-2">User not found</h1>
        <p className="text-gray-500 mb-8">The profile @{username} hasn't been claimed yet.</p>
        <button 
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
        >
          Create your own
        </button>
      </div>
    );
  }

  const activeLinks = links.filter((l) => l.isActive);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[480px] mx-auto px-6 py-16 flex flex-col items-center">
        
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="relative group mb-6">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500" />
            {profile?.profileImage ? (
              <img
                src={profile.profileImage}
                alt={profile.fullName}
                className="relative w-28 h-28 rounded-full object-cover border-2 border-white/10 shadow-2xl"
              />
            ) : (
              <div className="relative w-28 h-28 rounded-full bg-[#1a1a1a] flex items-center justify-center text-4xl font-black border-2 border-white/10">
                {profile?.fullName?.[0] || username?.[0]?.toUpperCase()}
              </div>
            )}
          </div>

          <h1 className="text-3xl font-black tracking-tight mb-2">
            {profile?.fullName || username}
          </h1>
          
          {profile?.bio && (
            <p className="text-gray-400 text-base leading-relaxed max-w-sm mb-4">
              {profile.bio}
            </p>
          )}

          <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-500 font-medium">
            @{username}
          </div>
        </motion.div>

        {/* Links List */}
        <div className="w-full space-y-4">
          <AnimatePresence>
            {activeLinks.length === 0 ? (
              <p className="text-gray-600 text-center py-10 italic">No links shared yet.</p>
            ) : (
              activeLinks.map((link, index) => (
                <motion.button
                  key={link._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleLinkClick(link)}
                  className="group relative w-full flex items-center justify-between bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-blue-500/50 p-5 rounded-2xl transition-all duration-300 active:scale-[0.98]"
                >
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 transition-colors">
                      <FiExternalLink className="text-gray-400 group-hover:text-blue-400" size={18} />
                    </div>
                    <span className="font-bold text-gray-200 truncate group-hover:text-white">
                      {link.title || link.url}
                    </span>
                  </div>
                  <FiShare2 className="text-gray-700 group-hover:text-gray-400 transition-colors shrink-0" size={16} />
                </motion.button>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer className="mt-20 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl">
             <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
             <span className="text-xs font-bold text-blue-400 tracking-wide uppercase">Join LinkFolio</span>
          </div>
          <p className="text-gray-700 text-[10px] tracking-widest uppercase font-bold">
            © {new Date().getFullYear()} LINKFOLIO CREATOR ENGINE
          </p>
        </footer>
      </div>
    </div>
  );
}
