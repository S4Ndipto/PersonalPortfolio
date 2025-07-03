import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TypingAnimation from "./typing-animation";
import profileImagePath from "@assets/IMG-20250215-WA0119_1751471231340.jpg";

export default function HeroSection() {
  const roles = ["Data Analyst Fresher", "Junior Python Developer", "SQL Expert", "Data Visualization Intern"];

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-yellow-900/10 to-orange-900/10 animate-gradient-xy"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div 
          className="animate-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-48 h-48 mx-auto mb-8 rounded-full p-1 gradient-border">
            <img 
              src={profileImagePath} 
              alt="Sandipto Das - Professional Profile Photo" 
              className="w-full h-full rounded-full object-cover bg-gray-800"
              style={{ objectPosition: 'center 25%' }}
            />
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="gradient-text">Sandipto Das</span>
        </motion.h1>
        
        <motion.div 
          className="text-2xl md:text-3xl mb-8 h-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TypingAnimation roles={roles} />
        </motion.div>
        
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Detail-oriented Data Analyst with expertise in Python, SQL, and data visualization. 
          Transforming raw data into actionable insights.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            onClick={() => handleScrollToSection("#contact")}
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-black font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all transform hover:scale-105"
          >
            Get In Touch
          </Button>
          <Button
            variant="outline"
            onClick={() => handleScrollToSection("#projects")}
            className="px-8 py-4 border-2 border-yellow-500 rounded-full text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-black transition-all"
          >
            View Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
