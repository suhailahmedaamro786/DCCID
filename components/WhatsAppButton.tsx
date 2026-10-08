"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const WHATSAPP_NUMBER = "923337063343";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Assalam-o-Alaikum, I would like to contact Dadu Chamber of Commerce & Industry."
);

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Dadu Chamber of Commerce & Industry on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/20 ring-4 ring-white/80 transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 md:bottom-7 md:right-7"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.35 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.94 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-[#25D366]"
        animate={{ scale: [1, 1.35, 1], opacity: [0.65, 0, 0.65] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
      />
      <MessageCircle size={28} strokeWidth={2.2} />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  );
}
