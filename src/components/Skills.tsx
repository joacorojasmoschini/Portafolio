const Skills = ({ title, icons }: { title: string; icons: any[] }) => {
  return (
    <div className="bg-blue sm:p-4 p-8 flex flex-wrap justify-center rounded-sm w-full sm:w-10/12 h-80">
      <h4 className="text-lg font-semibold text-center mb-4 w-full md:my-auto">{title}</h4>
      {icons.map((icon, index) => (
        <div
          key={index}
          className="flex items-center justify-center lg:text-5xl sm:text-4xl text-6xl m-3"
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default Skills;
