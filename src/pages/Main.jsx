import React from "react";
import P from "../assets/photo_2025-01-25_16-02-45.jpg";
import Y from "../assets/photo_2025-01-25_16-05-59.jpg";
import { LucideFolderMinus } from "lucide-react";

const Main = () => {
  const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
  ];
  const stats = [
    { name: "Offices worldwide", value: "12" },
    { name: "Full-time colleagues", value: "300+" },
    { name: "Hours per week", value: "40" },
    { name: "Paid time off", value: "Unlimited" },
  ];
  const projects = [
    {   
        id: 1, 
        title: "Food project", 
        topic: "lorem ipsum, dolor sit amet",
        src: '../assets/food.png' },
    { 
        id: 2, 
        title: "Music project", 
        topic: "lorem ipsum, dolor sit amet",
        src: '../assets/music.jpg' },
    {
      id: 3,
      title: "Technology Project",
      topic: "lorem ipsum, dolor sit amet",
      src: '../assets/technology.png'
    },
  ];
  return (
    <div class="bg-gray-50 py-10">
      <div class=" lg:max-w-7xl lg:px-2">
        <h2 class="text-center text-base/7 font-semibold text-cyan-600">
          Elevate your Project
        </h2>
        <p class="mx-auto  max-w-lg text-center text-5xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Everything you need to Elevate your Start Up
        </p>
        <div class="mt-2 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div class="relative lg:row-span-2">
            <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Mobile friendly
                </p>
                <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </p>
              </div>
              <div class="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div class="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    class="size-full object-cover object-top"
                    src={P}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div class="relative max-lg:row-start-1">
            <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Performance
                </p>
                <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  maiores impedit.
                </p>
              </div>
              <div class="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  class="w-full max-lg:max-w-xs"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                  alt=""
                />
              </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div class="absolute inset-px rounded-lg bg-white"></div>
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Security
                </p>
                <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                  suspendisse semper morbi.
                </p>
              </div>
              <div class="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  class="h-[min(152px,40cqw)] object-cover"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
          </div>
          <div class="relative lg:row-span-2">
            <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Powerful APIs
                </p>
                <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                  eget sem sodales gravida.
                </p>
              </div>
              <div class="relative min-h-[30rem] w-full grow">
                <div class="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl  shadow-2xl">
                  <div class="flex bg-blue-600 ">
                    <div class=" flex text-sm/6 font-medium w-full justify-between bg-blue-900">
                      <img
                        src={Y}
                        alt=""
                        className="w-full rounded-md h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-16 rounded-2xl">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Work with us
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <h2 class="text-center text-base/7 font-semibold text-cyan-600  mt-20">
        Our Projects
      </h2>
      <p class="mx-auto  max-w-lg text-center text-5xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
        Some Projects from our Hackathons
      </p>

      <div className="flex justify-center  items-center gap-5 p-5">
        {projects.map((project) => (
          <div
            key={project.id}
            style={{backgroundImage: `url(${project.src})`}}
            className={`flex-col p-5 rounded-lg shadow-md text-center w-72 h-[200px] flex items-center justify-center`}
          >
            {/* <img src={project.src} alt="" /> */}
            <h3 className="text-lg font-semibold text-gray-700">
              {project.title}
            </h3>
            <p>{project.topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
