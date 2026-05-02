import { motion } from "framer-motion";
import { Star } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Three.js", level: 85 }
    ]
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 85 }
    ]
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 82 },
      { name: "Figma", level: 75 }
    ]
  }
];

export const Skills = () => {
  return (
    <section className="w-screen flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Technical <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-transparent rounded-full"></div>
        <p className="text-slate-400 mt-6 text-lg">Proficiency in modern technologies and frameworks</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="rounded-[1.8rem] border border-sky-500/10 bg-black/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-3 mb-8">
              <Star size={20} className="text-sky-400" />
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
            </div>
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-300">{skill.name}</span>
                    <span className="text-xs text-sky-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-sky-500/10 rounded-full overflow-hidden border border-sky-500/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.2 + (skillIndex * 0.05), duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-sky-500 to-blue-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 p-8 rounded-[2rem] bg-gradient-to-r from-sky-500/5 to-blue-500/5 border border-sky-500/20 text-center shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
      >
        <p className="text-slate-300 text-lg">
          Passionate about continuous learning and staying updated with the latest industry trends and technologies.
        </p>
      </motion.div>
    </section>
  );
};
