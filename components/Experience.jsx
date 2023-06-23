import React from "react";
import Projects from "@/components/Projects";
import { getExperiences } from "@/sanity/utils/fetchData";
import { PortableText } from "@portabletext/react";
import { useState, useEffect } from "react";

//! the error here is to be fixed by either using use effect for fetching or migrating the website to version 13

export default function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const experiences = await getExperiences();
        setExperience(experiences);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="bg-blackGradient2 py-20 sm:py-32">
        <div className="h-[5rem]"></div>

        <div className="mx-auto flex max-w-5xl flex-col items-start gap-10 px-6 md:flex-row lg:px-8">
          <div className="w-full md:sticky md:top-10 md:w-[28rem]">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-gray-500">
              Eat . Sleep . Code . Repeat
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-green-500 to-green-200 inline-block text-transparent bg-clip-text sm:text-4xl">
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
              {experience.map((experience, key) => (
                <div
                  className="relative rounded-lg bg-gray-50 p-10"
                  key={experience._id}
                >
                  <a href={experience.url} target="_blank">
                    <div className="flex h-16  w-16 items-center justify-center rounded-lg ">
                      <img
                        src={experience.image}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                    </div>
                  </a>

                  <dt className=" mt-4 text-lg font-semibold leading-7 text-gray-900">
                    <span>{experience.company}</span>
                  </dt>
                  <h3 className="text-gray-500 flex justify-between">
                    <span>{experience.position}</span>
                    <span>{experience.date}</span>
                  </h3>
                  <div className="mt-2 text-base leading-7 text-gray-600 prose prose-neutral">
                    <PortableText value={experience.content} />
                  </div>
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
