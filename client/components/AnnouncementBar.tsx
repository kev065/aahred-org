"use client";

import { useState, useEffect } from "react";
import { X, FileText, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const isDismissed = localStorage.getItem("aahred_notice_dismissed");
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("aahred_notice_dismissed", "true");
  };

  // Don't render anything on the server to avoid hydration mismatch with localStorage
  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-red-600 text-white overflow-hidden relative shadow-md w-full z-50 flex-shrink-0"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">
            <div className="flex items-start gap-3 flex-1 text-sm sm:text-base pr-8 sm:pr-0">
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-white" />
              <div className="font-medium leading-snug w-full">
                <strong className="font-bold mr-1">Important Notice:</strong>
                <span className="hidden sm:inline">
                  Termination of all transactions by anybody purporting to represent AAHRED for any event, forum within or outside the country without express confirmation and authority from the organization officials.
                </span>
                <span className="sm:hidden">
                  {isExpanded ? (
                    <>
                      Termination of all transactions by anybody purporting to represent AAHRED for any event, forum within or outside the country without express confirmation and authority from the organization officials.
                      <button onClick={() => setIsExpanded(false)} className="ml-2 underline font-semibold focus:outline-none hover:text-red-200">Show less</button>
                    </>
                  ) : (
                    <>
                      Termination of all transactions by anybody purporting...
                      <button onClick={() => setIsExpanded(true)} className="ml-2 underline font-semibold focus:outline-none hover:text-red-200">Read more</button>
                    </>
                  )}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-start sm:justify-end w-full sm:w-auto mt-1 sm:mt-0 pl-8 sm:pl-0">
              <a
                href="/aahred_notice.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-red-700 hover:bg-red-50 text-sm font-bold rounded-full transition-colors shadow-sm whitespace-nowrap"
              >
                <FileText className="w-4 h-4" />
                View Notice
              </a>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="absolute top-2.5 right-2.5 sm:top-1/2 sm:-translate-y-1/2 p-1.5 hover:bg-red-700 rounded-full transition-colors text-white/90 hover:text-white"
            aria-label="Dismiss notice"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
