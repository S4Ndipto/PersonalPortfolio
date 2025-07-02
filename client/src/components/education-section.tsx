import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Techno India University, Kolkata",
      period: "Sept 2021 – July 2025 (Expected)",
      grade: "CGPA: 8.26"
    },
    {
      degree: "Higher Secondary (Class 12)",
      institution: "Burdwan Municipal High School, Burdwan",
      period: "WBCHSE | 2020",
      grade: "Score: 93%"
    },
    {
      degree: "Secondary (Class 10)",
      institution: "Burdwan Municipal High School, Burdwan",
      period: "WBBSE | 2018",
      grade: "Score: 93.20%"
    }
  ];

  const certifications = [
    {
      title: "Deloitte Australia Data Analytics Job Simulation",
      issuer: "Forage",
      date: "May 2025",
      details: [
        "Completed data analysis and forensic technology simulation",
        "Created data dashboard using Tableau",
        "Used Excel for data classification and business insights"
      ]
    },
    {
      title: "Web Development Certification",
      issuer: "CORIZO, Bangalore",
      date: "April 2024 – May 2024",
      details: ["Built an e-commerce website using HTML and CSS"]
    }
  ];

  return (
    <section id="education" className="py-20 scroll-reveal">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Education & Certifications</span>
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-yellow-500/20 h-full">
                <CardContent className="p-6">
                  <h3 className="gradient-text text-2xl font-semibold mb-6">Education</h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <motion.div 
                        key={edu.degree}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="text-yellow-400 font-semibold">{edu.degree}</h4>
                        <p className="text-gray-300">{edu.institution}</p>
                        <p className="text-gray-400">{edu.period}</p>
                        <p className="text-yellow-300">{edu.grade}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-yellow-500/20 h-full">
                <CardContent className="p-6">
                  <h3 className="gradient-text text-2xl font-semibold mb-6">Certifications</h3>
                  <div className="space-y-6">
                    {certifications.map((cert, index) => (
                      <motion.div 
                        key={cert.title}
                        className="border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/50 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="text-yellow-400 font-semibold mb-2">{cert.title}</h4>
                        <p className="text-gray-300 mb-2">{cert.issuer} | {cert.date}</p>
                        <ul className="text-gray-400 text-sm space-y-1">
                          {cert.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>• {detail}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
