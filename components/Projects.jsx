import Skills from "@/components/skills/Skills";
import { BiLinkExternal } from "react-icons/bi";

const Projects = () => {
  const Project = [
    {
      title: "AssignDesk",
      body: "AssignDesk is an assignment manager app designed specifically for students. With AssignDesk, students can keep track of all their scheduled assignments in one convenient place. The app allows students to schedule and prioritize their assignments, so they can stay organized and on top of their workload.",
      link: "https://assign-desk.vercel.app/",
    },
    {
      title: "Buildspace-bounties",
      body: "Won the buildspace bounties tournament and received a prize pool of $200 dollars. In this project we were assigned to create a landing page for their bounties section.",
      link: "https://buildspace-bounty.vercel.app/",
    },
    {
      title: "Altruize",
      body: "A web3-based NGO donations app has several advantages over a web2-based app. Web3 technology, which is built on blockchain, enables secure and transparent transactions, with no need for intermediaries like banks or payment processors. This means that donors can have complete control over their donations, without worrying about fraud or misuse of funds.",
      link: "https://altruize.vercel.app/",
    },
    {
      title: "Content-Gen",
      body: "ContentGen is a chatGPT powered website that makes it easy for users to generate professional-quality LinkedIn posts with just a few clicks. The site features a special prompt that is engineered specifically for the structure of LinkedIn posts, making it easy for users to create high-quality content that is tailored to the platform. With ContentGen, users simply need to enter a post title, and the site will generate a polished post that is ready to be shared on LinkedIn. Whether you&apos;re a professional looking to share your expertise or a business looking to promote your products and services, ContentGen is the perfect tool for creating engaging and effective LinkedIn posts.",

      link: "https://content-gen.vercel.app/",
    },
    {
      title: "Bhai Sun",
      body: "Bhai Sunn is an innovative app that combines the power of ChatSonic API and Twilio WhatsApp Bot SDK to bring the advanced language capabilities of ChatGPT to WhatsApp. This app makes it easy to access the natural language processing and conversation skills of ChatGPT directly from your WhatsApp chats. Whether you&apos;re looking to get quick answers to questions, automate routine tasks, or just have a conversation with an AI, Bhai Sunn is the app for you. With Bhai Sunn, you can enjoy the benefits of a virtual assistant that is always available, 24/7. Download now and experience the future of messaging.",
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
              {Project.map((project) => (
                <div className="relative rounded-lg bg-gray-50 p-10">
                  <a href={project.link} target="_blank">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                      <BiLinkExternal className="text-white h-6 w-6" />
                    </div>
                  </a>

                  <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">
                    {project.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {project.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className=" h-screen mt-10">
          <Skills />
        </div>
      </div>
    </>
  );
};

export default Projects;
