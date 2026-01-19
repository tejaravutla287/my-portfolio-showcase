import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.7
      }} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden card-elevated">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/30 animate-float" />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-xl bg-primary/20 blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <motion.span initial={{
            opacity: 0
          }} animate={isInView ? {
            opacity: 1
          } : {}} transition={{
            delay: 0.2
          }} className="text-primary font-medium mb-4 block">
              About Me
            </motion.span>
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            delay: 0.3
          }} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Turning ideas into{" "}
              <span className="text-gradient">reality</span>
            </motion.h2>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            delay: 0.4
          }} className="space-y-4 text-muted-foreground leading-relaxed">
              
              <p>
                My approach combines technical expertise with a keen eye for design, 
                ensuring every project not only works flawlessly but also delivers an 
                exceptional user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            delay: 0.5
          }} className="flex gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient"><1</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </div>
              <div>
                
                
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default About;