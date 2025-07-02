import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const experience = {
    title: "Data Analyst Intern",
    company: "ARC Document Solutions India Pvt. Ltd.",
    period: "Dec 2024 – Feb 2025",
    responsibilities: [
      "Performed data cleaning and normalization for 10+ client datasets using MS Excel, improving report accuracy",
      "Collaborated with cross-functional teams to manage and annotate datasets of 20,000+ entries"
    ]
  };

  return (
    <section id="experience" className="py-20 scroll-reveal">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Professional Experience</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-yellow-500 to-orange-500 transform md:-translate-x-1/2"></div>
            
            <motion.div 
              className="relative mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <Card className="bg-gray-900/50 border-yellow-500/20">
                    <CardContent className="p-6">
                      <h3 className="gradient-text text-xl font-semibold mb-2">{experience.title}</h3>
                      <p className="text-yellow-400 mb-2">{experience.company}</p>
                      <p className="text-gray-400 mb-4">{experience.period}</p>
                      <ul className="text-gray-300 space-y-2">
                        {experience.responsibilities.map((responsibility, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            • {responsibility}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
