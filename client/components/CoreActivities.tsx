"use client";

import { motion } from "framer-motion";
import { Droplet, TrendingUp, Lightbulb, Users, BookOpen, HandshakeIcon } from "lucide-react";

export default function CoreActivities() {
  const activities = [
    {
      icon: Droplet,
      title: "Water Health Infrastructure",
      description: "Promoting water infrastructure to enhance health and sanitation across communities. We work to ensure access to clean water as a fundamental right.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: TrendingUp,
      title: "Wealth Creation",
      description: "Developing skills to address youth unemployment through enterprise development and supporting individuals toward economic independence.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Lightbulb,
      title: "Startup Incubation",
      description: "Facilitating startup incubation and mentorship programs that nurture innovation and help entrepreneurs transform ideas into viable businesses.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: HandshakeIcon,
      title: "Business Development",
      description: "Providing comprehensive business development support and advisory services to help SMEs navigate challenges and achieve sustainable growth.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Users,
      title: "Networking & Workshops",
      description: "Hosting networking events and workshops that connect entrepreneurs, build partnerships, and facilitate knowledge sharing across sectors.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
    },
    {
      icon: BookOpen,
      title: "Capacity Building",
      description: "Building training partnerships that improve access to capital for SME growth and enhance leadership capabilities across communities.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="activities" className="py-24 bg-gray-50">
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
            Core Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our main objectives focus on water health and wealth creation through 
            comprehensive programs that empower communities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
              className="group"
            >
              <div className={`${activity.bgColor} rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className={`w-16 h-16 bg-linear-to-br ${activity.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {activity.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {activity.description}
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
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Commitment to Excellence
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              These initiatives aim to foster health sector innovation, support local water and 
              sanitation projects, and build training partnerships that improve access to capital 
              for SME growth in Kenya. We assist individuals and small businesses, upgrade water 
              infrastructure, incubate startups, advise on business development, and create 
              opportunities for meaningful connections.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
