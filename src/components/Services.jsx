const Services = () => {
  return (
    <section className="h-max bg-zinc-600">
      <div className="max-w-[1124px] m-auto md:pl-20 p-4 py-16 lg:flex flex-row justify-between items-center gap-2 lg:gap-12">
        <h2 className="text-4xl font-bold text-center text-pink-700 mb-4">
          Services
        </h2>
        <ul className="text-xl text-justify text-orange-100/95 px-6 md:px-4">
          <li className="mb-10 ml-4">
            <span className="inline-block font-semibold bg-gradient-to-r from-gray-500 to-[#aa7120] rounded-md text-orange-200 mb-4">
              1. Web Design
            </span>
            <p>
              Stunning user-friendly websites that not only capture your
              brand&apos;s essence but also provide an excellent user
              experience. We focus on creating intuitive interfaces and
              responsive designs to ensure that your website stands out from the
              competition.
            </p>
          </li>
          <li className="mb-10 ml-4">
            <span className="inline-block font-semibold bg-gradient-to-r from-gray-500 to-[#aa7120] rounded-md text-orange-200 mb-4">
              2. Databases
            </span>
            <p>
              We have experience designing and implementing efficient database
              systems for businesses. Our database solutions are secure,
              scalable, and optimized to handle large volumes of data. We can
              assist with database architecture, data modeling, performance
              tuning, and data integration.
            </p>
          </li>
          <li className="mb-10 ml-4">
            <span className="inline-block font-semibold bg-gradient-to-r from-gray-500 to-[#aa7120] rounded-md text-orange-200 mb-4">
              3. UI (User Interface) Design
            </span>
            <p>
              We understand the significance of a well-designed user interface
              in enhancing user engagement and satisfaction. We specialize in
              creating aesthetically pleasing and intuitive interface designs
              that enhance usability and drive conversions.
            </p>
          </li>
          <li className="mb-10 ml-4">
            <span className="inline-block font-semibold bg-gradient-to-r from-gray-500 to-[#aa7120] rounded-md text-orange-200 mb-4">
              4. Consulting
            </span>
            <p>
              Our consulting services empower businesses to make informed
              technology decisions. We provide expert guidance on software
              selection, system integration, and technology strategy. Our
              consultants work closely with clients to understand their unique
              requirements and provide practical solutions that align with their
              goals.
            </p>
          </li>
          <li className="mb-10 ml-4">
            <span className="inline-block font-semibold bg-gradient-to-r from-gray-500 to-[#aa7120] rounded-md text-orange-200 mb-4">
              5. Web Development
            </span>
            <p>
              At{" "}
              <span className="text-pink-700 font-bold">Moonflower Labs</span>,
              we can bring your ideas to life by creating robust and functional
              web applications. We use modern development frameworks and
              technologies to build scalable and secure solutions. Whether
              it&apos;s a simple website or a complex web application, we have
              the expertise to deliver high-quality results.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
