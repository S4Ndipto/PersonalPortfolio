import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "C/C++", "SQL"]
    },
    {
      title: "Tools",
      skills: ["Jupyter Notebook", "MySQL", "VS Code", "Pandas", "MS Excel"]
    },
    {
      title: "Data Analysis",
      skills: ["Data Visualization", "Data Cleaning", "Statistical Analysis"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS"]
    }
  ];

  return (
    <section id="skills" className="py-20 scroll-reveal">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Technical Skills</span>
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/60 border-yellow-500/30 h-full backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="gradient-text text-xl font-semibold mb-4">{category.title}</h3>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="skill-tag w-full justify-start py-2 px-3 hover:scale-105 transition-transform duration-200"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
