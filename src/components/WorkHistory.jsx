import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "Junior Software Developer",
    duration: "1 Year",
    description:
      "As a junior software developer, I bring a unique background in the events industry and construction management, transitioning into a new career in software development. With a strong foundation in project management, attention to detail, and problem-solving abilities.  Adapting to new technologies and industry best practices, I continually strive to enhance my skills and stay updated. With my strong organizational skills and ability to work effectively in team-oriented environments.",
  },

  {
    year: 2018,
    title: "Assistant Construction Manager",
    duration: "2 Years",
    description:
      "As an assistant construction manager, I supported senior managers in all aspects of construction projects. I coordinated activities, managed subcontractors, and ensured project timelines were met. With strong organizational skills, I communicated project updates and resolved issues.Through my role as an assistant construction manager, I gained valuable experience in project management, team collaboration, and construction operations.",
  },
  {
    year: 2013,
    title: "Joiner Foreman",
    duration: "5 Years",
    description:
      "As a carpenter foreman, I was responsible for supervising and coordinating carpentry activities on construction sites. I effectively managed a team of carpenters, ensuring work was completed according to project specifications and safety standards. With strong leadership skills, I scheduled and assigned tasks, monitored progress, and provided guidance and training when necessary. I also collaborated with other trades and project managers to ensure seamless workflow and smooth execution of carpentry projects. Through my role as a carpenter foreman, I gained valuable experience in overseeing carpentry operations and achieving project goals efficiently.",
  },
  {
    year: 2000,
    title: "Lighting Engineer",
    duration: "12 Years",
    description:
      "As a lighting engineer in the events industry, I was responsible for designing and executing lighting setups for various events. I worked closely with event planners and production teams to understand their lighting requirements and create visually compelling lighting designs. Using my technical expertise, I selected appropriate lighting fixtures, controlled lighting levels, and programmed lighting cues. I also oversaw the installation, operation, and maintenance of lighting equipment during events, ensuring smooth execution and troubleshooting any technical issues that arose. Through my role as a lighting engineer, I gained extensive knowledge of lighting technologies, design principles, and event production processes.",
  },
];

const WorkHistory = () => {
  return (
    <section id="workHistory" className="m bg-zinc-800">
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16  bg-zinc-800">
        <h2 className="text-4xl font-bold text-center  text-pink-700 mb-4">
          Work History
        </h2>
        {data.map((item, index) => {
          return (
            <WorkItem
              key={index}
              year={item.year}
              title={item.title}
              duration={item.duration}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WorkHistory;
