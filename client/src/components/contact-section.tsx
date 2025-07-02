import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Briefcase, Linkedin, Github, Download } from "lucide-react";
import resumePath from "@assets/cv_may_1_1751470573438.pdf";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sandiptodas@outlook.com",
      link: "mailto:sandiptodas@outlook.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9564546678",
      link: "tel:+919564546678"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kolkata, India"
    },
    {
      icon: Briefcase,
      title: "Status",
      value: "Available for Work"
    }
  ];

  return (
    <section id="contact" className="py-20 scroll-reveal">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Get In Touch</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about data analytics.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                  <CardContent className="p-6 text-center">
                    <info.icon className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                    <h3 className="gradient-text font-semibold mb-2">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-300 text-sm hover:text-yellow-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm">{info.value}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-black font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all transform hover:scale-105"
            >
              <a href="mailto:sandiptodas@outlook.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
            
            <Button
              variant="outline"
              asChild
              className="px-8 py-4 border-2 border-yellow-500 rounded-full text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-black transition-all"
            >
              <a href="https://linkedin.com/in/sandipto-das" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            
            <Button
              variant="outline"
              asChild
              className="px-8 py-4 border-2 border-yellow-500 rounded-full text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-black transition-all"
            >
              <a href="https://github.com/S4Ndipto" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              variant="secondary"
              asChild
              className="px-6 py-3 bg-gray-800 rounded-full text-yellow-400 font-semibold hover:bg-gray-700 transition-all"
            >
              <a href={resumePath} download="Sandipto_Das_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
