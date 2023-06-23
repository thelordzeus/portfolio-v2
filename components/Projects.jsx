import Skills from "@/components/skills/Skills";
import Blogs from "@/components/Blogs";
import { BiLinkExternal } from "react-icons/bi";
import Albums from "./albums/Albums";
import { useEffect, useState } from "react";
import { getProjects } from "@/sanity/utils/fetchData";
import { PortableText } from "@portabletext/react";

const Projects = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await getProjects();
        setProject(projects);
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
              Projects which I&apos;m really proud of.
            </p>
            <p className="mt-6 mb-2 text-base leading-7 text-gray-400">
              This is where I show off my web dev projects. Check out the cool
              websites I&apos;ve built, from simple static pages to more complex
              apps. I&apos;ll give you a quick rundown of the tech I used,
              design choices, and features. Hope you enjoy!
            </p>
          </div>
          <div className="mt-5 w-full min-w-0 flex-1 md:mt-0">
            <dl className="grid grid-cols-1 gap-y-10 gap-x-8 md:max-w-xl lg:max-w-none lg:gap-y-16">
              {project.map((project, key) => (
                <div
                  className="relative rounded-lg bg-gray-50 p-10"
                  key={project._id}
                >
                  <a href={project.url} target="_blank">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                      <BiLinkExternal className="text-white h-6 w-6" />
                    </div>
                  </a>

                  <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">
                    {project.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 prose">
                    <PortableText value={project.content} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className=" h-screen mt-10">
          <Albums />
          <Blogs />
          <Skills />
        </div>
      </div>
    </>
  );
};

export default Projects;
