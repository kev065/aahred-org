"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo/Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Empowering Communities Since 2016</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Driving Development &
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-yellow-200 to-yellow-400">
              Economic Empowerment
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Africa Alliance for Health Research and Economic Development (AAHRED) 
            - Advancing entrepreneurship, digital empowerment, and economic inclusion across Kenya
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 pt-8"
          >
            <div className="flex items-center gap-3 text-white">
              <Users className="w-8 h-8 text-yellow-300" />
              <div className="text-left">
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm text-blue-200">Youth Empowered</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <TrendingUp className="w-8 h-8 text-yellow-300" />
              <div className="text-left">
                <div className="text-3xl font-bold">300+</div>
                <div className="text-sm text-blue-200">SMEs Supported</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Heart className="w-8 h-8 text-yellow-300" />
              <div className="text-left">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-blue-200">Communities Served</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            <a
              href="#programs"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Our Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Get Involved
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-3 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
