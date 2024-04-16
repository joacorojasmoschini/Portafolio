import { motion } from "framer-motion";

const Skills = ({
  title,
  skill,
  isSkillInView,
}: {
  title: string;
  skill: any[];
  isSkillInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ x: "-1000px" }}
      animate={isSkillInView ? { x: 0 } : {}}
      className="bg-blue sm:p-4 p-8 flex flex-wrap justify-center rounded-sm w-full md:w-10/12 min-h-full"
    >
      <h4 className="text-lg font-semibold text-center mb-4 w-full md:py-3">
        {title}
        <span className="block"></span>
      </h4>
      {skill.map((skill, index) => (
        <motion.div
          initial={{ x: "-5000px" }}
          animate={isSkillInView ? { x: 0 } : {}}
          transition={{ delay: index * 0.2 }}
          key={index}
          className="flex items-center justify-center m-3 text-center"
        >
          <span className="text-3xl mr-2">{skill.icon}</span>
          {skill.name}
          {console.log(index)}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;
