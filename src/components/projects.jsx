import React from "react";

function Projects() {
  const achievements = [
    {
      title: "Shiksha UI",
      description:
        "Delivered a responsive landing page with server-side rendering, optimizing performance for improved SEO and user engagement.",
      date: "Jun 2023",
      url: "https://github.com/aaditya-paul/shikhsha-ui",
    },
    {
      title: "Clever Books",
      description:
        "Crafted a modern one-page UI mockup using Next.js and Tailwind CSS, receiving positive feedback for its design aesthetics and usability.",
      date: "Jun 2024",
      url: "https://github.com/aaditya-paul/clever-books",
    },
    {
      title: "Task Tracker",
      description:
        "Designed a cutting-edge workflow management tool that integrates GitHub, providing admins seamless access to code repositories and task assignments.",
      date: "Sep 2024",
      url: "https://github.com/aaditya-paul/WTT",
    },

    {
      title: "Meal Buddy",
      description:
        "Created a detailed UI prototype for an online food delivery platform, focusing on responsive and visually appealing design.",
      date: "Apr 2023",
      url: "https://github.com/aaditya-paul/meal-buddy",
    },
    {
      title: "Upexperiment",
      description:
        "Built a user-friendly blogging platform with seamless device adaptability, ensuring an optimal viewing experience across all screens.",
      date: "Mar 2023",
      url: "https://github.com/aaditya-paul/upexperiment",
    },
    {
      title: "Cogni Glove",
      description:
        "Developed a gesture-recognition hand glove using AI and WebSockets, capable of interpreting sign language and performing tasks based on recognized gestures.",
      date: "May 2024",
      url: "https://github.com/aaditya-paul/cogni-glove",
    },
  ];

  return (
    <div className="relative h-full w-full bg-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="  min-h-screen min-w-screen flex flex-col gap-12 items-center py-24  text-white ">
        <div
          className=" font-poppins text-2xl md:text-[48px] underline underline-offset-8 z-20"
          style={{
            textShadow: "oklch(0.75 0.183 55.934) 0.15vw 0.15vw",
          }}
        >
          Showcase Of Excellence
        </div>
        <div>
          <div className="bg-transparent text-white min-h-screen py-5 md:py-10 px-6">
            {/* <h1 className="text-4xl font-bold text-center text-white mb-8">
              Journey of Excellence
            </h1> */}
            <div className="relative max-w-5xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute w-1 bg-gradient-to-b from-amber-500 to-orange-500 h-full left-1/2 transform -translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Connector Dots */}
                    <div
                      className={`  absolute w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full border-4 border-gray-900 left-1/2 transform -translate-x-1/2 ${
                        index % 2 === 0
                          ? "md:-translate-y-[135px] "
                          : "md:-translate-y-[135px] "
                      }`}
                    ></div>

                    {/* Content */}
                    <div
                      className={`bg-black z-20  p-6 rounded-lg shadow-[0px_0px_15px_5px_rgba(255,255,255,0.1)] max-w-md ${
                        index % 2 === 0 ? "ml-6" : "mr-6"
                      }`}
                    >
                      <h2 className="text-xl font-bold text-orange-400">
                        {achievement.title}
                      </h2>
                      <p className="text-gray-300 mt-2">
                        {achievement.description}
                      </p>
                      <code className="text-sm text-gray-500 mt-4 block">
                        <a href={achievement.url} target="_blank">
                          {achievement.url}
                        </a>
                      </code>
                      <span className="text-sm text-gray-500 mt-4 block">
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
