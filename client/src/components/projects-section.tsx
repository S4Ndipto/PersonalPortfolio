import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Voice Command Automation Tool",
      description: "Implemented features including web browsing, real-time calculations, day/time reporting, dice/coin simulation, and music playback with robust voice command processing.",
      technologies: ["Python", "API Integration", "Speech Recognition", "Web Automation"],
      githubUrl: "https://github.com/S4Ndipto"
    },
    {
      title: "Walmart Sales Analytics",
      description: "Processed 10,000+ row Walmart sales dataset using Pandas, integrated MySQL with Python, and built 10+ advanced SQL queries for comprehensive business insights.",
      technologies: ["Python", "SQL", "Pandas", "MySQL", "Jupyter Notebook"],
      githubUrl: "https://github.com/S4Ndipto"
    }
  ];

  return (
    <section id="projects" className="py-20 scroll-reveal">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Featured Projects</span>
        </motion.h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="project-card h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="gradient-text text-xl font-semibold">{project.title}</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-6 w-6" />
                      </a>
                    </Button>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary" 
                        className="skill-tag"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    asChild
                    className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 p-0"
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
