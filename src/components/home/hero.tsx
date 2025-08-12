"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Button from "./ui/button";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center md:flex-row flex-col-reverse px-7 py-24 min-h-screen md:px-20 md:py-20 relative bg-gradient-to-b from-orange-200 via-red-100 to-transparent overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-xl" />
        <div className="absolute w-2/4 h-3/12 bottom-0 -right-10 md:w-[500px] md:h-[500px] bg-yellow-100 rounded-full blur-xl opacity-60" />

        <div className="absolute bottom-10 left-10 grid grid-cols-8 gap-2 opacity-10">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-orange-400 rounded-full" />
          ))}
        </div>

        <motion.div
          className="flex flex-col md:gap-8 relative z-10 mt-10 max-w-3xl md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="md:text-7xl text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dimsum Autentik{" "}
            <motion.span
              className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Langsung Dari Dapur
            </motion.span>
          </motion.h1>

          <motion.p
            className="md:text-2xl text- text-gray-600 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Nikmati kelezatan dimsum autentik dengan cita rasa yang tak
            terlupakan. Dibuat dengan bahan-bahan pilihan dan resep turun
            temurun.
          </motion.p>

          <motion.div
            className="flex md:flex-row flex-col md:space-x-4 w-full gap-3 md:gap-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                variant="custom"
                className="bg-gradient-to-r w-full from-orange-500 to-red-500 md:px-8 md:py-4 px-4 py-2 text-lg text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Pesan Sekarang
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                variant="custom"
                className="border-2 border-orange-500 md:px-8 md:py-4 px-4 py-2 text-orange-600 hover:bg-orange-50 w-full transition-colors duration-300"
              >
                Lihat Menu
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full md:max-w-lg max-w-md md:h-96 h-72 z-10 "
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="absolute -bottom-4 -right-4 w-full h-full bg-yellow-300 rounded-2xl opacity-20"
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 0.2, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.div
            className="absolute -bottom-2 -right-2 w-full h-full bg-orange-300 rounded-2xl opacity-30"
            initial={{ opacity: 0, x: 10, y: 10 }}
            animate={{ opacity: 0.3, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />

          <motion.div
            className="absolute -bottom-2 -left-2 md:-left-7  bg-white rounded-lg py-2 px-4 z-50"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Fresh Daily</p>
                <p className="text-gray-500 text-sm">Dibuat setiap hari</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Image
              src={"/images/hero.jpg"}
              alt="dimsum-image"
              fill
              priority
              className="object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
