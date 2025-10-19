import { motion, AnimatePresence } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import { useLang } from "./LangContext";

export default function ProjectsSection({ show, onClose }) {
  const { lang } = useLang();

  const text = {
    EN: {
      title: "What Can I Do?",
      intro: "I can build you a fully functional website.",
      projects: [
        {
          title: "Portfolio Website",
          description: "A fully responsive portfolio website.",
        },
        {
          title: "E-commerce Platform",
          description:
            "An online store with payment integration and user authentication.",
        },
        {
          title: "Blog System",
          description:
            "A blogging system with markdown support and CMS features.",
        },
        {
          title: "GYM Manager",
          description: "A system to manage gym memberships and workouts.",
        },
        {
          title: "Store Manager",
          description: "A system to manage inventory, sales, and staff.",
        },
        {
          title: "Make Your System Secure",
          description:
            "Security-focused projects to protect your applications.",
        },
      ],
    },
    AR: {
      title: "ماذا يمكنني أن أفعل؟",
      intro: "يمكنني بناء موقع إلكتروني متكامل لك.",
      projects: [
        { title: "موقع شخصي", description: "موقع شخصي متجاوب بالكامل." },
        {
          title: "منصة تجارة إلكترونية",
          description: "متجر إلكتروني مع دمج الدفع وتوثيق المستخدمين.",
        },
        {
          title: "نظام تدوين",
          description: "نظام تدوين مع دعم Markdown ولوحة تحكم لإدارة المحتوى.",
        },
        {
          title: "مدير صالة رياضية",
          description: "نظام لإدارة اشتراكات الصالة الرياضية والتمارين.",
        },
        {
          title: "مدير متجر",
          description: "نظام لإدارة المخزون والمبيعات والموظفين.",
        },
        {
          title: "اجعل نظامك آمناً",
          description: "مشاريع تركز على الأمان لحماية تطبيقاتك.",
        },
      ],
    },
  };

  const current = text[lang];

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          id="projects"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex justify-center items-start overflow-y-auto bg-gradient-to-b from-blue-50 via-blue-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 px-4 sm:px-8 pt-24 pb-32 backdrop-blur-md"
        >
          <div className="w-full max-w-6xl text-center">
            {/* Close button */}
            <button
              onClick={onClose}
              className="fixed top-6 left-1/2 -translate-x-1/2 bg-white/20 dark:bg-gray-700/30 p-3 rounded-full shadow-md backdrop-blur-sm hover:scale-110 transition"
            >
              <ChevronsDown
                size={28}
                className="text-blue-400 dark:text-blue-300"
              />
            </button>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              {current.title}
            </h2>

            {/* Intro */}
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-10">
              {current.intro}
            </p>

            {/* Projects Grid */}
            <div
              className={`grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${
                lang === "AR" ? "text-right" : "text-left"
              }`}
            >
              {current.projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-lg transition-transform duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
