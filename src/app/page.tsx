"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [hearts, setHearts] = useState<
    { top: string; left: string; size: string; duration: number }[]
  >([]);

  useEffect(() => {
    setMounted(true);

    const newHearts = Array.from({ length: 12 }).map(() => ({
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      size: `${Math.random() * 25 + 10}px`,
      duration: Math.random() * 4 + 3,
    }));

    setHearts(newHearts);
  }, []);

  const handleClick = () => {
    // Ganti link berikut dengan link MP3 langsung (contoh: dari SoundCloud CDN)
    const audio = new Audio("https://youtu.be/536Ika0jE_4?si=lMCjOzicdxOmDNFj");
    audio.volume = 0.8;
    audio.play().catch((err) => console.log("Autoplay blocked:", err));

    setTimeout(() => {
      window.location.href = "/story";
    }, 2000);
  };

  if (!mounted)
    return <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200" />;

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-gradient-to-b from-pink-100 via-pink-200 to-pink-100">
      {/* Background mountain silhouette */}
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-blue-700 via-blue-500 to-transparent rounded-t-[50%] opacity-80"></div>

      {/* Floating hearts animation */}
      {hearts.map((h, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-500 select-none"
          style={{
            top: h.top,
            left: h.left,
            fontSize: h.size,
          }}
          animate={{ y: [0, -30, 0], opacity: [1, 0.6, 1] }}
          transition={{
            repeat: Infinity,
            duration: h.duration,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="z-10 px-8 py-6 bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl border border-pink-200/40"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-pink-700 drop-shadow-lg">
          HALOOOO 💖
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-pink-900/90 italic">
          CANTIKKU, SAYANGKUU, CAINTAKUUU 💞
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className="mt-8 px-8 py-3 rounded-full bg-pink-600 text-white font-semibold shadow-lg hover:bg-pink-700 transition-all"
        >
          Klik Disini Yaa 💌
        </motion.button>
      </motion.div>

      {/* Sun glow effect */}
      <div className="absolute top-16 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-60 animate-pulse"></div>
    </main>
  );
}
