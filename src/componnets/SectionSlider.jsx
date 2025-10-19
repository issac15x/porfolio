import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import { useLang } from "./LangContext";

export default function SectionSlider() {
  const { lang } = useLang();
  const [index, setIndex] = useState(0);
  const [showSlide, setShowSlide] = useState(false);

  // ✅ Unified sections with both EN + AR captions
  const sections = [
    {
      id: "home",
      title: {
        EN: "",
        AR: "",
      },
      text: {
        EN: "Step into a world where code becomes art,\nPixels dance and ideas take heart.\nFollow the arrows, let the journey start.",
        AR: "ادخل عالماً يصبح فيه الكود فناً،\nتتحرك فيه الأفكار بتناغم وحنان.\nاتبع الأسهم، فلتبدأ الرحلة الآن.",
      },
    },
    {
      id: "about",
      title: {
        EN: "About",
        AR: "نبذة عني",
      },
      text: {
        EN: "I’m Issac — weaving code and dreams,\nWhere logic bends and ideas gleam.\nWeb developer, ethical hacker,\nExploring worlds beyond the seams.",
        AR: "أنا إسحاق — أنسج الأكواد والأحلام،\nحيث ينحني المنطق وتتلألأ الإلهام.\nمطور ويب ومخترق أخلاقي،\nأستكشف عوالم تتجاوز الأوهام.",
      },
    },
    {
      id: "projects",
      title: {
        EN: "Projects",
        AR: "المشاريع",
      },
      text: {
        EN: "Here lie creations of thought and design,\nProjects that tell stories, line by line,\nScroll with arrows to see them shine.",
        AR: "هنا تكمن إبداعات الفكر والتصميم،\nمشاريع تحكي القصص سطرًا بسطرٍ قديم.\nتصفحها بالأسهم لتراها تضيء كالنجم السليم.",
      },
    },
    {
      id: "contact",
      title: {
        EN: "Contact",
        AR: "تواصل معي",
      },
      text: {
        EN: "If your vision aligns with mine,\nLet’s connect, collaborate, and intertwine,\nReach out — the journey continues.",
        AR: "إن كانت رؤيتك تشبه رؤيتي،\nفلنتصل ونتعاون بإبداعيّتي.\nتواصل معي، فالمسيرة لم تنتهِ بعد.",
      },
    },
  ];

  const expandCaptions = {
    EN: {
      about: "Learn More",
      projects: "See My Work",
      contact: "Get in Touch",
    },
    AR: {
      about: "اعرف المزيد",
      projects: "اعرض مشاريعي",
      contact: "تواصل معي",
    },
  };

  const current = sections[index];
  const currentTitle = current.title[lang];
  const currentText = current.text[lang];

  const nextSection = () => {
    setShowSlide(false);
    setIndex((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setShowSlide(false);
    setIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <div
      className={`flex flex-col justify-center bg-gradient-to-b from-[#0a0f1a] via-[#102030] to-[#1a3a4f] relative ${
        lang === "AR" ? "text-right" : "text-left"
      }`}
    >
      <div className="flex min-h-[100dvh] items-center justify-center w-full relative overflow-visible">
        {/* Section transition */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id + lang}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center text-center flex-col gap-y-60 px-6"
          >
            <h1 className="text-5xl font-bold text-white  whitespace-pre-line">
              {currentTitle}
            </h1>
            <p className="text-gray-400  text-lg whitespace-pre-line leading-relaxed">
              {currentText}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prevSection}
          className="absolute left-10 bg-white dark:bg-gray-800 text-white dark:text-white p-4 rounded-full shadow-lg hover:scale-125 transition z-40 cursor-pointer"
        >
          <ChevronLeft size={36} />
        </button>

        <button
          onClick={nextSection}
          className="absolute right-10 bg-white dark:bg-gray-800 text-white dark:text-white p-4 rounded-full shadow-lg hover:scale-125 transition z-40 cursor-pointer"
        >
          <ChevronRight size={36} />
        </button>

        {current.id !== "home" && (
          <motion.button
            onClick={() => setShowSlide(true)}
            className="absolute bottom-[calc(env(safe-area-inset-bottom)+3rem)] sm:bottom-10 left-1/2 -translate-x-1/2 text-white hover:scale-110 transition z-40 cursor-pointer"
            animate={{
              y: [0, -10, 0],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <div className="flex flex-col items-center gap-2">
              {/* 👇 Smaller on desktop, balanced on mobile */}
              <ChevronsUp className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" />
              <h1 className="text-center text-sm sm:text-base md:text-lg">
                {expandCaptions[lang][current.id]}
              </h1>
            </div>
          </motion.button>
        )}
      </div>

      {/* Slide-in sections */}
      {current.id === "about" && (
        <AboutSection show={showSlide} onClose={() => setShowSlide(false)} />
      )}
      {current.id === "projects" && (
        <ProjectsSection show={showSlide} onClose={() => setShowSlide(false)} />
      )}
      {current.id === "contact" && (
        <ContactSection show={showSlide} onClose={() => setShowSlide(false)} />
      )}
    </div>
  );
}
