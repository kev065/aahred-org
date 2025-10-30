"use client";

import { motion } from "framer-motion";
import { Target, History, Award } from "lucide-react";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About AAHRED
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Africa Alliance for Health Research and Economic Development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeInUp}
            className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <History className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our History</h3>
            <p className="text-gray-700 leading-relaxed">
              Established in 2016, AAHRED was founded to address Kenya&apos;s water challenges 
              and promote good governance. We&apos;ve evolved to tackle youth unemployment and 
              socio-economic exclusion through innovative programs and partnerships.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
            className="bg-linear-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              We are committed to advancing development, leadership, and growth in 
              entrepreneurship, digital empowerment, economic inclusion, and research. 
              We promote conflict resolution and seek effective methods for peace and stability.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={fadeInUp}
            className="bg-linear-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              We inform graduates about private sector opportunities, support enterprise 
              development, and encourage creativity and self-employment as alternatives to 
              traditional career paths in meeting societal needs.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={fadeInUp}
          className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white shadow-2xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              Committed to Transforming Lives
            </h3>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              AAHRED is a non-governmental organization dedicated to creating lasting change 
              through comprehensive programs that address water health, wealth creation, youth 
              unemployment, and economic development. We believe in empowering individuals and 
              communities to build sustainable futures through entrepreneurship, innovation, 
              and access to essential resources.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">9+</div>
                <div className="text-blue-200">Years of Impact</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">100+</div>
                <div className="text-blue-200">Partner Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">25+</div>
                <div className="text-blue-200">Counties Reached</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
