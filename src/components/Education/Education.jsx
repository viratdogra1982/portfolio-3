import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[4vw] md:px-[5vw] lg:px-[8vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {}
      <div className="relative">
        {}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {}
            <div
              className={`relative z-10 w-full sm:w-[95%] lg:w-[88%] max-w-6xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_25px_2px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-40 sm:mr-40 ml-4 transform transition-transform duration-300 hover:scale-[1.01]`}
            >
              {}
              <div className="flex items-center space-x-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-[#8245ec] bg-gray-400 flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>

                {}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md sm:text-lg text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {}
              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-3 text-gray-300 leading-relaxed">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;