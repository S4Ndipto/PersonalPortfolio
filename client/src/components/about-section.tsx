import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const stats = [
    { value: "10+", label: "Client Datasets Normalized" },
    { value: "5+", label: "Projects Built" },
    { value: "20K+", label: "Data Entries Managed" },
  ];

  return (
    <section id="about" className="py-20 scroll-reveal">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-gray-300 mb-8">
                  I'm a passionate Data Analyst fresher with hands-on experience in data visualization, SQL, Python, and MS Excel. 
                  My expertise lies in transforming raw data into actionable insights, with a strong foundation in statistical analysis 
                  and data cleaning techniques. I have completed internships in data analysis and hold certifications in web development, 
                  alongside academic projects in database management and healthcare monitoring systems.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="gradient-text text-3xl font-bold">{stat.value}</div>
                      <div className="text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
