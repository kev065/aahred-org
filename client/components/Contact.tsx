"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "Nairobi, Kenya",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@aahred.org",
      link: "mailto:info@aahred.org",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+254 XXX XXX XXX",
      link: "tel:+254XXXXXXXXX",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey with AAHRED? We&apos;re here to help you succeed
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeInUp}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you&apos;re looking for support, want to partner with us, or simply 
                  want to learn more about our programs, we&apos;d love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className={`w-12 h-12 bg-linear-to-br ${info.color} rounded-lg flex items-center justify-center shrink-0`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-colors shadow-md hover:shadow-lg`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          variants={fadeInUp}
          className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join us in our mission to drive development and economic empowerment across Kenya. 
            Together, we can create lasting change.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#programs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              Explore Programs
            </a>
            <a
              href="mailto:info@aahred.org"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Partner With Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
