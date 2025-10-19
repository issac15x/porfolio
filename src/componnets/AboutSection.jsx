import { motion, AnimatePresence } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import { useLang } from "./LangContext";

export default function AboutSection({ show, onClose }) {
  const { lang } = useLang();

  const isEN = lang === "EN";

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          id="about"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-blue-50 via-blue-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 px-6 overflow-y-auto backdrop-blur-md"
        >
          <div className="max-w-4xl text-center mt-20 mb-20">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-10 left-1/2 -translate-x-1/2 bg-white/10 dark:bg-gray-700/30 p-3 rounded-full shadow-lg backdrop-blur-sm hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <ChevronsDown
                size={32}
                className="text-blue-400 dark:text-blue-300"
              />
            </button>

            {/* Title */}
            <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400 tracking-wide">
              {isEN ? "Who is Issac?" : "من هو إسحاق؟"}
            </h2>

            {/* Profile Image */}
            <div className="relative mx-auto w-36 h-36 md:w-44 md:h-44 mb-6">
              <img
                src="https://i.imgur.com/sdmvPAQ.jpeg"
                alt="Issac"
                className="w-full h-full rounded-full object-cover border-2 border-blue-200 dark:border-blue-600 shadow-md shadow-blue-100/20 dark:shadow-blue-900/30"
              />
              <div className="absolute inset-0 rounded-full shadow-[0_0_40px_8px_rgba(147,197,253,0.4)] dark:shadow-[0_0_40px_8px_rgba(59,130,246,0.5)] pointer-events-none"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {isEN
                ? "Hi, I’m Issac — a passionate developer who builds elegant, high-performance web experiences. I love blending logic and creativity into solutions that feel crisp, clean, and deliberate."
                : "مرحباً، أنا إسحاق — مطور شغوف يصنع تجارب ويب أنيقة وعالية الأداء. أحب مزج المنطق والإبداع في حلول متقنة وواضحة."}
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {isEN
                ? "Started coding at 12 years old — now with 8 years of experience."
                : "بدأت البرمجة في سن الثانية عشرة — لدي الآن خبرة تمتد لثماني سنوات."}
            </p>

            {/* Skills */}
            <div
              className={`flex flex-wrap justify-center gap-3 ${
                !isEN ? "flex-row-reverse" : ""
              }`}
            >
              {[
                "JavaScript",
                "React",
                "Tailwind",
                "Node.js",
                "SQL",
                "Python",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100/20 dark:bg-blue-800/40 text-blue-600 dark:text-blue-200 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div
              className={`flex flex-wrap mt-5 justify-center gap-3 ${
                !isEN ? "flex-row-reverse" : ""
              }`}
            >
              {["Cpp", "C#", "Unity3d", "Godot", "OpenGL"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100/20 dark:bg-blue-800/40 text-blue-600 dark:text-blue-200 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
