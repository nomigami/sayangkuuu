"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function OurStory() {
  const [mounted, setMounted] = useState(false);

  const romanticQuotes = [
    "Aku adalah laki-laki biasa yang datang dengan tulus menyayangimu selalu ❤️",
    "Aku akan selalu mengusahakan segala sesuatu buat kamu 💕",
    "Terima kasih ya sudah menjadi hal terpenting yang selalu buat aku bahagia 💖",
    "Maaf ya jika perjuangan dan usahaku masih belum seberapa. Aku akan terus berusaha buat kamu jadi wanita paling bahagia 💞",
    "I LOVE YOU 💕",
  ];

  const [index, setIndex] = useState(0);
  const isLast = index === romanticQuotes.length - 1; // deteksi teks terakhir

  // 🔊 Autoplay musik dari folder public
  useEffect(() => {
    setMounted(true);
    const audio = new Audio("/sounds/fabio.mp3");
    audio.volume = 0.7;
    audio.loop = true;
    audio.play().catch(() => console.log("Autoplay blocked"));
    return () => audio.pause();
  }, []);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  const nextQuote = () => {
    if (!isLast) setIndex((prev) => prev + 1);
  };

  const contents = [
    {
      text: "hai cantikku bahagia selalu ya. Selalu ceritakan padaku tentang apa yang kamu rasakan, libatkan aku dalam setiap apa yang kamu keluhkan 💕",
      img: "/images/rani1.jpg",
      side: "left",
    },
    {
      text: "Terima kasih telah hadir disaat aku sudah lupa caranya untuk bahagiaa, tau gak kalau kehadiranmu tidak hanya membuatku bahagia tapi aku juga merasakan semangat baru yang belum aku rasakan sebelumnya, izinkan aku untuk mengusahakan kebahagiaanmu selalu ❤️",
      img: "/images/rani2.jpg",
      side: "right",
    },
    {
      text: "Semoga tuhan memberikan kebahagiaan yang tidak ada habisnya buat kamu, dan semoga juga Tuhan memberikan restunya buat aku mencintai dan menyayangi kamu selalu 💖",
      img: "/images/rani3.jpg",
      side: "left",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start"
      style={{
        backgroundImage: "url('/images/ddd.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        imageRendering: "crisp-edges",
      }}
    >
      {/* 💌 Card Utama */}
      <motion.div
        className="relative z-10 w-[100%] max-w-3xl text-center bg-black/40 backdrop-blur-sm rounded-2xl p-9 mt-20 shadow-1xl border border-white/20 gap-7 py-20"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-white drop-shadow-md mb-10 gap-6 py-6">
          Haiii 💖
        </h1>

        <p className="text-2xl text-white font-medium italic leading-relaxed mb-8 drop-shadow-lg">
          {romanticQuotes[index]}
        </p>

        {/* Tombol Next hanya muncul jika belum teks terakhir */}
        {!isLast && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextQuote}
            className="mt-10 px-9 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-semibold shadow-lg transition gap-7"
          >
            Next 💌
          </motion.button>
        )}

        {/* Animasi Swipe muncul setelah teks terakhir */}
        {isLast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="mt-10 text-pink-400 text-lg font-semibold flex items-center justify-center gap-2"
          >
            👉 Swipe up ya cantikkk 💫
          </motion.div>
        )}
      </motion.div>

      {/* 💞 Section Tambahan */}
      <div className="relative z-10 flex flex-col gap-32 py-60">
        {contents.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col md:flex-row items-center justify-between px-8 md:px-24 gap-10 ${
              item.side === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              className="md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, x: item.side === "right" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
                💞
              </h2>
              <p className="text-lg leading-relaxed text-white drop-shadow-md">
                {item.text}
              </p>
            </motion.div>

            <motion.img
              src={item.img}
              alt="our memory"
              className="w-48 h-60 md:w-90 md:h-90 object-cover rounded-3xl shadow-2xl border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
