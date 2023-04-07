import React from "react";
import Projects from "@/components/Projects";

export default function Experience() {
  const Experience = [
    {
      key: 1,
      title: "IEEE SRMIST",
      imgLink: "https://snehil.dev/images/experience/ieee.png",
      body: "something something something something ",
    },
    {
      key: 2,
      title: "IEEE SRMIST",
      imgLink: "https://snehil.dev/images/experience/ieee.png",
      body: "something something something something ",
    },
    {
      key: 3,
      title: "IEEE SRMIST",
      imgLink: "https://snehil.dev/images/experience/ieee.png",
      body: "something something something something ",
    },
    {
      key: 4,
      title: "IEEE SRMIST",
      imgLink: "https://snehil.dev/images/experience/ieee.png",
      body: "something something something something ",
    },
    {
      key: 5,
      title: "IEEE SRMIST",
      imgLink: "https://snehil.dev/images/experience/ieee.png",
      body: "something something something something ",
    },
  ];
  return (
    <>
      <div className="bg-blackGradient2 py-20 sm:py-32">
        <div className="h-[5rem]"></div>

        <div className="mx-auto flex max-w-5xl flex-col items-start gap-10 px-6 md:flex-row lg:px-8">
          <div className="w-full md:sticky md:top-10 md:w-[28rem]">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-gray-500">
              Eat . Sleep . Code . Repeat
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Experience&apos;s which the Journey gave me.
            </p>
            <p className="mt-6 mb-2 text-base leading-7 text-gray-400">
              In this section, I talk about my experiences as a web development
              intern and volunteer. I share the cool projects I worked on, the
              skills I picked up, and the challenges I faced. Check it out to
              see how I grew as a developer through these awesome opportunities!
            </p>
          </div>
          <div className="mt-5 w-full min-w-0 flex-1 md:mt-0">
            <dl className="grid grid-cols-1 gap-y-10 gap-x-8 md:max-w-xl lg:max-w-none lg:gap-y-16">
              {Experience.map((experience, key) => (
                <div
                  className="relative rounded-lg bg-gray-50 p-10"
                  key={experience.key}
                >
                  <a href={experience.link} target="_blank">
                    <div className="flex h-10 w-10 items-center justify-center  ">
                      <img src={experience.imgLink} width={40} height={40} />
                    </div>
                  </a>

                  <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">
                    {experience.title}
                  </dt>
                  <h3 className="text-gray-500">Front End Engineer</h3>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {experience.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className=" h-screen mt-10">
          <Projects />
        </div>
      </div>
    </>
  );
}
