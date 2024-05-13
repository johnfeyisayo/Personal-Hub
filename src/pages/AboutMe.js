import React from "react";

const AboutMe = () => {
  const skills = [
    { id: 1, name: "Javascript" },
    { id: 2, name: "HTML" },
    { id: 3, name: "CSS" },
    { id: 4, name: "ReactJs" },
    { id: 5, name: "Git" },
    { id: 6, name: "TailwindCSS" },
    { id: 7, name: "Bootstrap" },
    { id: 8, name: "Problem Solving" },
    { id: 9, name: "API" },
    { id: 11, name: "Algorithms" },
    { id: 12, name: "NextJs" },
    { id: 13, name: "JQuery" },
    { id: 14, name: "Creative Thinking" },
  ];

  return (
    <div className="bg-gray-200 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-7 shadow-xl pt-3 pb-3">
          Personal Hub
        </h1>
        <p className="text-lg text-gray-600 pt">
          Hi, My name is John, Welcome to Personal Hub.
        </p>
      </div>
      <div className="mt-6">
        <div className="">
          <div className="">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600">
                I&apos;m a Front End Developer with the ability to Optimize user
                experience, Using HTML, CSS, JavaScript and React.js and NextJs
                to bring concepts to life.
              </p>
            </div>
            <div className="text-center mb-10">
              <p className="text-lg text-gray-600">
                I&apos;m a resourceful professional with the ability to solve
                complex problems quickly and efficiently. I also possess the
                ability to quickly learn new technologies.
              </p>
            </div>
            <div className="text-center mb-8">
              <p className="text-4xl font-bold text-gray-800 mb-7">
                Here&apos;s a list of my <span className="">Skills</span>
              </p>
              {skills.map((skill, index) => {
                return (
                  <div className="text-lg text-gray-600">
                    <li className="" key={index}>
                      {skill.name}
                    </li>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="">
          <img className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
