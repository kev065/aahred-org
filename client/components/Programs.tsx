"use client";

import { motion } from "framer-motion";
import { 
  Rocket, 
  FileText, 
  Users, 
  Wifi, 
  CreditCard, 
  BarChart,
  Target,
  Lightbulb
} from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: Rocket,
      title: "Entrepreneurship Support",
      description: "We assist entrepreneurs with comprehensive business planning, education, and technical support to help them start or expand micro-enterprises and move toward economic independence.",
      features: [
        "Business plan development",
        "Technical training and education",
        "Micro-enterprise startup support",
        "Growth and expansion guidance"
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart,
      title: "SME Growth Programs",
      description: "Supporting the rapid and sustainable growth of Kenya's SMEs through guidance, resources, opportunities, and workforce development assistance.",
      features: [
        "Strategic growth planning",
        "Access to resources and networks",
        "Workforce development",
        "Market expansion support"
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Wifi,
      title: "Digital Inclusion",
      description: "Promoting digital transformation by analyzing SME growth patterns, supporting affordable internet access, and enhancing tech literacy across communities.",
      features: [
        "Digital skills training",
        "Affordable internet advocacy",
        "Tech literacy programs",
        "Digital transformation consulting"
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: CreditCard,
      title: "Financial Access",
      description: "Partnering with financial institutions to expand low-interest loans and eCommerce options, making capital more accessible for entrepreneurs and SMEs.",
      features: [
        "Soft loan facilitation",
        "Financial institution partnerships",
        "eCommerce enablement",
        "Credit access programs"
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FileText,
      title: "Policy Advocacy",
      description: "Conducting research and advocating for transformative policies that create enabling environments for entrepreneurship and economic development.",
      features: [
        "Policy research and analysis",
        "Stakeholder engagement",
        "Reform advocacy",
        "Evidence-based recommendations"
      ],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Economic Prosperity Platforms",
      description: "Connecting people to resources and strategies for entrepreneurship, water access, capital, health, and business opportunities through integrated platforms.",
      features: [
        "Resource connection services",
        "Strategic partnerships",
        "Multi-sector integration",
        "Holistic support systems"
      ],
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">Our Programs</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Support for Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startup incubation to policy advocacy, we provide end-to-end support 
            for entrepreneurs, SMEs, and communities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-linear-to-br ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {program.description}
                </p>
                
                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          variants={fadeInUp}
          className="mt-16"
        >
          <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center shadow-2xl">
            <Users className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h3 className="text-3xl font-bold mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Whether you&apos;re an aspiring entrepreneur, an established SME, or a community leader, 
              AAHRED provides the support, resources, and connections you need to succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300"
              >
                Get Started Today
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
