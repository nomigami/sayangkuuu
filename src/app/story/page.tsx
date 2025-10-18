"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function OurStory() {
  const [mounted, setMounted] = useState(false);

  const romanticQuotes = [
    "Gimana hari ini cantikku? 💕",
    "Maaf ya kalau aku belum bisa kasih kamu yang lebih hehehe 💖",
    "Semoga dengan hadiah kecil dari aku bisa buat kamu bahagia 💕",
    "Ohh iyaa  💕",
    "Aku ini adalah laki-laki biasa yang datang dengan tulus menyayangimu selalu ❤️",
    "Aku akan selalu mengusahakan apapun itu buat kamu 💕",
    "Terima kasih ya sudah menjadi hal terpenting yang selalu buat aku bahagia 💖",
    "Maaf ya jika perjuangan dan usahaku masih belum seberapa. Aku akan terus berusaha buat kamu jadi wanita paling bahagia 💞",
    "I LOVE YOU 💕",
  ];

  const [index, setIndex] = useState(0);
  const isLast = index === romanticQuotes.length - 1;

  // 🔊 Autoplay musik
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
      text: "Hai cantikku, bahagia selalu ya. Selalu ceritakan padaku tentang apa yang kamu rasakan, libatkan aku dalam setiap apa yang kamu keluhkan 💕",
      img: "/images/rani1.jpg",
      side: "left",
    },
    {
      text: "Terima kasih telah hadir disaat aku sudah lupa caranya untuk bahagia. Kehadiranmu tidak hanya membuatku bahagia, tapi juga memberi semangat baru yang belum pernah aku rasakan sebelumnya. Izinkan aku untuk mengusahakan kebahagiaanmu selalu ❤️",
      img: "/images/rani2.jpg",
      side: "right",
    },
    {
      text: "Semoga Tuhan memberikan kebahagiaan yang tidak ada habisnya buat kamu, dan semoga juga Tuhan memberikan restunya buat aku mencintai dan menyayangi kamu selalu 💖",
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
      className="relative min-h-screen flex flex-col items-center justify-start bg-black text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/ddd.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 💌 Card Utama */}
      <motion.div
        className="relative z-10 w-[90%] sm:w-[85%] md:w-[70%] lg:w-[55%] text-center bg-black/50 backdrop-blur-sm rounded-2xl px-6 sm:px-10 py-30 sm:py-14 mt-40 shadow-2xl border border-white/20"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Judul dengan animasi */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold drop-shadow-md mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Haiii 💖
        </motion.h1>

        {/* Animasi teks quote */}
        <AnimatePresence mode="popLayout">
          <motion.p
            key={index}
            className="text-lg sm:text-1xl italic leading-10 mb-10 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9 }}
          >
            {romanticQuotes[index]}
          </motion.p>
        </AnimatePresence>

        {/* Tombol Next */}
        {!isLast && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextQuote}
            className="mt-6 px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-semibold shadow-lg transition"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Next 💌
          </motion.button>
        )}
        
             <p className= "text-1xl font-stretch-75% items-center gap-2 py-3">
            klik dulu sampai selesai yang sayang
        </p>
        

       


        {/* Animasi Swipe muncul setelah teks terakhir */}
        {isLast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="mt-8 text-pink-400 text-lg font-semibold flex items-center justify-center gap-2"
          >
            ⬆️ Swipe up ya cantikkk 💫
          </motion.div>
        )}
      </motion.div>

      {/* 💞 Section Tambahan */}
      <div className="relative z-10 flex flex-col gap-24 sm:gap-32 py-32 sm:py-48 w-full">
        {contents.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col md:flex-row items-center justify-center px-4 sm:px-10 md:px-24 gap-10 ${
              item.side === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              className="md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, x: item.side === "right" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold mb-4 drop-shadow-lg">💞</h2>
              <p className="text-base sm:text-lg leading-relaxed drop-shadow-md">
                {item.text}
              </p>
            </motion.div>

            <motion.img
              src={item.img}
              alt="our memory"
              className="w-52 h-64 sm:w-64 sm:h-80 md:w-80 md:h-90 object-cover rounded-3xl shadow-2xl border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
