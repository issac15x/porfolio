import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsDown, Mail, Send, Check } from "lucide-react";
import { useLang } from "./LangContext"; // ✅ use language context

export default function ContactSection({ show, onClose }) {
  const { lang } = useLang(); // ✅ get language from context
  const email = "xissac15x@gmail.com";
  const [copied, setCopied] = useState(false);

  const emailLinks = {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
    yahoo: `https://compose.mail.yahoo.com/?to=${email}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`,
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  // ✅ Text translations (captions only)
  const text = {
    EN: {
      title: "Get in Touch",
      subtitle: "Have a project in mind or just want to say hi? Let’s connect.",
      copied: "Copied!",
      buttons: {
        gmail: "Gmail",
        yahoo: "Yahoo Mail",
        outlook: "Outlook",
        default: "Default Mail App",
      },
    },
    AR: {
      title: "تواصل معي",
      subtitle: "هل لديك مشروع أو فكرة؟ دعنا نتواصل معًا.",
      copied: "تم النسخ!",
      buttons: {
        gmail: "جيميل",
        yahoo: "ياهو ميل",
        outlook: "أوتلوك",
        default: "تطبيق البريد",
      },
    },
  };

  const current = text[lang];

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          id="contact"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-blue-50 via-blue-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 px-6 overflow-y-auto backdrop-blur-md"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="mt-10 absolute top-0 left-1/2 -translate-x-1/2 bg-white/10 dark:bg-gray-700/30 p-3 rounded-full shadow-lg backdrop-blur-sm hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <ChevronsDown
              size={32}
              className="text-blue-400 dark:text-blue-300"
            />
          </button>

          <div
            className={`max-w-4xl text-center mt-10 mb-20 relative ${
              lang === "AR" ? "text-right" : "text-center"
            }`}
          >
            {/* Section Title */}
            <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400 tracking-wide">
              {current.title}
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              {current.subtitle}
            </p>

            {/* Contact Info */}
            <div className="flex flex-col items-center gap-6 mb-8">
              <Mail
                className="text-blue-500 dark:text-blue-400 mb-2"
                size={28}
              />

              <button
                onClick={handleCopy}
                className="text-gray-700 dark:text-gray-200 text-lg hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {copied ? (
                  <span className="flex items-center gap-2 text-green-500 dark:text-green-400">
                    <Check size={18} /> {current.copied}
                  </span>
                ) : (
                  email
                )}
              </button>
            </div>

            {/* Email Buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={emailLinks.gmail}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                <Send size={20} /> {current.buttons.gmail}
              </a>

              <a
                href={emailLinks.yahoo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-5 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                <Send size={20} /> {current.buttons.yahoo}
              </a>

              <a
                href={emailLinks.outlook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                <Send size={20} /> {current.buttons.outlook}
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-5 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                <Send size={20} /> {current.buttons.default}
              </a>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
