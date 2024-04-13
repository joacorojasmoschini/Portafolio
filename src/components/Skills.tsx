const Skills = ({ title, icons }: { title: string; icons: any[] }) => {
  return (
    <div className="bg-blue p-4 flex flex-wrap justify-center rounded-sm w-full sm:w-10/12 h-80">
      <h4 className="text-lg font-semibold text-center mb-4 w-full">{title}</h4>
      {icons.map((icon, index) => (
        <div
          key={index}
          className="flex items-center justify-center text-5xl m-3"
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default Skills;
