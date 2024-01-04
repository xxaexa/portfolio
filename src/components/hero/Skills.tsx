import { skills } from "../../constant";

interface SkillsProps {
  dark: boolean;
}

const Skills = (props: SkillsProps) => {
  return (
    <div>
      <h2 className="header-text text-center md:mt-52 medium-text  duration-500 ease-in-out ">
        MY SKILLS
      </h2>
      <div
        className={`grid grid-cols-2 md:grid-cols-4 mt-4 gap-8 w-full p-2 rounded-lg ${
          props.dark
            ? "hover:bg-gray-300 bg-gray-200"
            : "hover:bg-gray-800 bg-gray-700"
        }`}
      >
        {skills.map((skills, index) => (
          <div
            key={index}
            className=" hover:text-indigo-500 duration-500 ease-in-out flex gap-2 items-center"
          >
            <p className="header-text"> {skills.icon}</p>
            <p className="small-text">{skills.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
