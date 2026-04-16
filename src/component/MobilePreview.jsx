// import React from "react";

// export default function MobilePreview({ profile, links }) {
//   const activeLinks = links.filter((l) => l.isActive);

//   return (
//     <div className="relative w-64 h-[520px] bg-[#7e7c7c] rounded-[3rem] border-4 border-white/10 shadow-2xl overflow-hidden flex flex-col">
//       {/* Phone notch */}
//       <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />

//       {/* Screen content */}
//       <div className="flex-1 overflow-y-auto pt-10 pb-4 px-4 scrollbar-hide">
//         {/* Profile */}
//         <div className="flex flex-col items-center text-center mt-4 mb-5">
//           {profile.profileImage ? (
//             <img
//               src={profile.profileImage}
//               alt="avatar"
//               className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/50 mb-3"
//             />
//           ) : (
//             <div className="w-16 h-16 rounded-full bg-indigo-600/30 border-2 border-indigo-500/50 mb-3 flex items-center justify-center text-indigo-300 text-xl font-bold">
//               {profile.fullName?.[0] || "?"}
//             </div>
//           )}
//           <p className="text-amber-500 font-bold text-sm">{profile.fullName || "Your Name"}</p>
//           <p className="text-amber-500 text-xs mt-1 leading-relaxed">{profile.bio || "Your bio here"}</p>
//         </div>

//         {/* Links */}
//         <div className="space-y-2">
//           {activeLinks.length === 0 && (
//             <p className="text-amber-500 text-xs text-center py-4">No active links</p>
//           )}
//           {activeLinks.map((link) => (
//             <div
//               key={link._id}
//               className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-3 py-2.5 text-amber-500 text-xs font-medium text-center truncate hover:bg-white/10 transition-colors cursor-pointer"
//             >
//               {link.title || link.url || "Untitled"}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="h-1 w-24 bg-white/20 rounded-full mx-auto mb-3" />
//     </div>
//   );
// }

import React from "react";

export default function MobilePreview({ profile, links }) {
  const activeLinks = links.filter((l) => l.isActive);

  return (
    <div className="relative w-64 h-[520px] bg-[#0a0a0a] rounded-[3rem] border-[6px] border-[#1a1a1a] shadow-[0_0_40px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col group">
      
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20 flex items-center justify-center">
        <div className="w-1 h-1 bg-zinc-800 rounded-full mr-2" />
        <div className="w-8 h-1 bg-zinc-900 rounded-full" />
      </div>

      {/* Internal Screen Content */}
      <div className="flex-1 overflow-y-auto pt-12 pb-6 px-4 scrollbar-hide relative">
        
        {/* Subtle Background Glow inside the phone */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-32 h-32 bg-indigo-600 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] w-32 h-32 bg-purple-600 rounded-full blur-3xl" />
        </div>

        {/* Profile Section */}
        <div className="relative z-10 flex flex-col items-center text-center mt-6 mb-8">
          <div className="relative mb-4">
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full blur-[2px] opacity-40" />
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt="avatar"
                className="relative w-16 h-16 rounded-full object-cover border-2 border-white/10"
              />
            ) : (
              <div className="relative w-16 h-16 rounded-full bg-[#1a1a1a] border-2 border-white/5 flex items-center justify-center text-white text-xl font-black">
                {profile.fullName?.[0] || "?"}
              </div>
            )}
          </div>
          
          <h2 className="text-white font-black text-sm tracking-tight truncate w-full px-2">
            {profile.fullName || "New User"}
          </h2>
          <p className="text-zinc-500 text-[10px] mt-1.5 leading-relaxed px-2 line-clamp-2">
            {profile.bio || "Crafting your digital identity..."}
          </p>
          <div className="mt-2 text-[9px] text-indigo-400 font-bold tracking-wider uppercase">
            @{profile.username || "username"}
          </div>
        </div>

        {/* Links Section */}
        <div className="relative z-10 space-y-2.5">
          {activeLinks.length === 0 ? (
            <div className="text-center py-6 border border-dashed border-white/5 rounded-2xl">
              <p className="text-zinc-600 text-[10px]">No links visible</p>
            </div>
          ) : (
            activeLinks.map((link) => (
              <div
                key={link._id}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-[10px] font-bold text-center truncate hover:bg-white/[0.08] transition-all shadow-sm"
              >
                {link.title || "Untitled Link"}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Bottom Home Indicator */}
      <div className="relative z-20 h-6 w-full flex items-center justify-center">
        <div className="h-1 w-16 bg-white/10 rounded-full hover:bg-white/20 transition-colors" />
      </div>

      {/* Phone reflection effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-30" />
    </div>
  );
}
