"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

export default function Impact() {
  const stats = [
    {
      icon: Users,
      number: "5,000+",
      label: "Youth Trained",
      description: "Young people empowered through entrepreneurship training and mentorship programs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Briefcase,
      number: "300+",
      label: "SMEs Supported",
      description: "Small and medium enterprises receiving guidance and resources for sustainable growth",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: GraduationCap,
      number: "150+",
      label: "Training Programs",
      description: "Capacity-building workshops delivered to policymakers, leaders, and entrepreneurs",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      number: "75%",
      label: "Success Rate",
      description: "Of supported entrepreneurs successfully launching or expanding their businesses",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="impact" className="py-24 bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Impact on Youth Employment & Economic Development
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Connecting people to resources and strategies for entrepreneurship, water, capital, 
            health, and business opportunities through our Economic Prosperity platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-linear-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold mb-2 text-yellow-300">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-3">
                  {stat.label}
                </div>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Reducing Youth Unemployment</h3>
            <p className="text-blue-100 leading-relaxed">
              AAHRED is committed to reducing youth unemployment by offering comprehensive 
              entrepreneurship training and facilitating access to soft loans. We create 
              pathways for young people to become job creators rather than job seekers, 
              fostering a new generation of innovative entrepreneurs.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Addressing Systemic Inequalities</h3>
            <p className="text-blue-100 leading-relaxed">
              We identify systemic inequalities and provide capacity-building workshops for 
              policymakers and leaders, enhancing their ability to contribute to ongoing 
              economic development in their communities. Our approach ensures sustainable, 
              long-term positive change.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg">
            Together, we&apos;re building a prosperous Kenya
          </div>
        </motion.div>
      </div>
    </section>
  );
}
