const About = () => {
  return (
    <section id="about">
      <div className="max-w-[1024px] m-auto md:pl-20 p-4 py-16 lg:flex flex-row justify-end items-center gap-2 lg:gap-12">
        <h2 className="text-4xl font-bold text-center text-pink-700 mb-4">
          About
        </h2>
        <div className="flex flex-col gap-4">
          <p className="px-8 md:px-4 text-justify text-xl">
            Moonflower Labs is a software development company focused on
            crafting customized solutions for small businesses. Founded by
            <span className="text-pink-700 text-lg"> Alex Santiago</span>. As a
            developer, his goal is to create efficient and user-friendly
            applications. He is passionate about coding and constantly learning
            to stay up-to-date with the latest technologies. Collaboration and
            communication are main the priorities, ensuring the understanding
            and alignment with the vision and goals of our clients. Always
            committed to delivering projects on time and within budget to
            achieve client satisfaction. If you are looking for a skilled and
            dedicated developer to bring your ideas to life,
            <span className="text-pink-700 text-lg"> Alex</span> is here to
            help.
          </p>
          <p className="px-8 md:px-4 text-justify text-xl">
            Moonflower Labs specializes in providing comprehensive services in
            web design, databases, UI, consulting, and web development. Our
            expertise in these areas allows us to deliver tailored solutions
            that meet the specific needs of our clients. Here&apos;s a brief
            overview of each of these services:
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
