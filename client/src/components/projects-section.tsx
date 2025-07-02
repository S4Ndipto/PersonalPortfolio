import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Filter } from "lucide-react";
import { useState, useMemo } from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Voice Command Automation Tool",
      description: "Implemented features including web browsing, real-time calculations, day/time reporting, dice/coin simulation, and music playback with robust voice command processing.",
      technologies: ["Python", "API Integration", "Speech Recognition", "Web Automation"],
      githubUrl: "https://github.com/S4Ndipto/Voice-Assistant"
    },
    {
      title: "Walmart Sales Analytics",
      description: "Processed 10,000+ row Walmart sales dataset using Pandas, integrated MySQL with Python, and built 10+ advanced SQL queries for comprehensive business insights.",
      technologies: ["Python", "SQL", "Pandas", "MySQL", "Jupyter Notebook"],
      githubUrl: "https://github.com/S4Ndipto/Walmart-Project"
    }
  ];

  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, [projects]);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") {
      return projects;
    }
    return projects.filter(project => 
      project.technologies.includes(selectedFilter)
    );
  }, [projects, selectedFilter]);

  return (
    <section id="projects" className="py-20 scroll-reveal">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Featured Projects</span>
        </motion.h2>

        {/* Filter Section */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <Filter className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="text-gray-300 font-medium">Filter by Technology</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedFilter === "All" ? "default" : "outline"}
              onClick={() => setSelectedFilter("All")}
              className={`rounded-full transition-all ${
                selectedFilter === "All" 
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-400 hover:to-orange-400" 
                  : "border-yellow-500/50 text-yellow-400 hover:border-yellow-500 hover:bg-yellow-500/10"
              }`}
            >
              All Projects
            </Button>
            
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                variant={selectedFilter === tech ? "default" : "outline"}
                onClick={() => setSelectedFilter(tech)}
                className={`rounded-full transition-all ${
                  selectedFilter === tech 
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-400 hover:to-orange-400" 
                    : "border-yellow-500/50 text-yellow-400 hover:border-yellow-500 hover:bg-yellow-500/10"
                }`}
              >
                {tech}
              </Button>
            ))}
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length === 0 ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-400 text-lg">No projects found with the selected technology.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
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
                            className={`skill-tag cursor-pointer transition-all ${
                              selectedFilter === tech ? 'bg-yellow-500/20 border-yellow-500' : ''
                            }`}
                            onClick={() => setSelectedFilter(tech)}
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
          )}
        </div>
      </div>
    </section>
  );
}