import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import HeadingMain, { HeadingSub } from '../components/Headers'
import styles from '../styles/Home.module.scss'
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Video from '../components/Video'
import Carousel from '../components/Carousel'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

export default function Home() {
  const projectsText = useRef();
  const aboutMeSection = useRef();
  const jsWebsiteSection = useRef();
  const oldProjectsSection = useRef();
  const videoGameSection = useRef();
  const webAppsSection = useRef();
  const contactSection = useRef();

  const [staffPassModalActive, setStaffPassModalActive] = useState(false);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(ScrollToPlugin);

      let projectElements = document.querySelectorAll(".project");

      projectElements.forEach((projectElement, index) => {

        gsap.set(projectElement, {
          left: "auto",
          // make it so there is a delay between changing projects
          top: "-" + (index * 38.5) + "vh",
          // make sure that there is no gap at the bottom of projects
          marginBottom: (index + 1 == projectElements.length) ? ("-" + (index * 38.5) + "vh") : "0vh"
        });

        // timeline so animation is synced 
        gsap.timeline({
          scrollTrigger: {
            trigger: projectElement,
            scrub: true,
            pin: true,
            pinSpacing: true,
            start: "top top",
            end: "bottom top",
            toggleActions: "play pause resume reset",
            onLeaveBack: () => { projectElement.style.opacity = 0, projectElement.style.position = "relative" },
            onEnter: () => { projectElement.style.left = "100%", projectElement.style.opacity = 1, projectElement.style.position = "fixed" },
            snap: 0.5
          },
        }).fromTo(projectElement, {
          left: "100%",
        }, {
          left: "0%",
        });
      });
    }, Home);


    sectionCache.current.push({ name: "jsWebsiteSection", element: jsWebsiteSection.current });
    sectionCache.current.push({ name: "oldProjectsSection", element: oldProjectsSection.current });
    sectionCache.current.push({ name: "videoGameSection", element: videoGameSection.current });
    sectionCache.current.push({ name: "webAppsSection", element: webAppsSection.current });

    return () => ctx.revert();


  }, []);

  const sectionCache = useRef([]);

  const navigationGoTo = (key) => {
    var section = sectionCache.current.find((value) => value.name === key)

    console.log(section)

    let amountScroll = window.scrollY + section.element.getBoundingClientRect().bottom;

    console.log(section.element.getBoundingClientRect().bottom, window.scrollY + " < " + amountScroll + " = " + (window.scrollY < amountScroll))

    if (window.scrollY < amountScroll)
      gsap.to(window,
        {
          duration: 2,
          scrollTo: amountScroll
        });
    else
      gsap.to(window,
        {
          duration: 2,
          scrollTo: section.element
        });
  }


  return (
    <>
      <Head>
        <title>Calvin's Portfolio</title>
      </Head>
      <main>
        <section className=" h-screen bg-zinc-800 ">
          <div className={`max-md:left-full max-md:-translate-x-full hover:scale-110 fixed z-[100] mt-2 ml-2 cursor-pointer group transition-transform w-32`}>
            <svg viewBox="0 0 495 495" enableBackground="new 0 0 495 495" width={95} height={95} className="fill-zinc-200 group-hover:animate-spin group-hover:w-full transition-all">
              <g>
                <path d="M422.509,72.491C375.762,25.745,313.609,0,247.5,0S119.238,25.745,72.491,72.491C25.745,119.238,0,181.391,0,247.5   s25.745,128.262,72.491,175.009C119.238,469.255,181.39,495,247.5,495s128.262-25.745,175.009-72.491   C469.255,375.762,495,313.61,495,247.5S469.255,119.238,422.509,72.491z M411.902,411.902C367.989,455.816,309.603,480,247.5,480   s-120.489-24.184-164.402-68.098C39.184,367.989,15,309.603,15,247.5S39.184,127.011,83.098,83.098   C127.011,39.184,185.397,15,247.5,15s120.489,24.184,164.402,68.098C455.816,127.011,480,185.397,480,247.5   S455.816,367.989,411.902,411.902z" />
                <path d="M399.881,95.119C359.179,54.416,305.062,32,247.5,32S135.821,54.416,95.118,95.119C54.416,135.821,32,189.938,32,247.5   s22.416,111.679,63.118,152.382C135.821,440.584,189.938,463,247.5,463s111.679-22.416,152.381-63.119S463,305.062,463,247.5   S440.584,135.821,399.881,95.119z M255,447.846V431.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v16.345   C135.397,443.978,51.022,359.603,47.155,255H63.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H47.155   C51.022,135.397,135.397,51.022,240,47.155V63.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V47.155   C359.603,51.022,443.978,135.397,447.845,240H431.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h16.345   C443.978,359.603,359.603,443.978,255,447.846z" />
                <path d="m383.5,240h-77.411l51.956-92.837c1.64-2.93 1.132-6.592-1.242-8.966-2.375-2.374-6.038-2.882-8.966-1.241l-92.837,51.964v-77.42c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v85.815l-14.296,8.002c-0.986,0.512-1.957,1.047-2.901,1.624l-.2,.112c-0.296,0.166-0.571,0.354-0.835,0.552-0.716,0.464-1.42,0.944-2.109,1.445l-30.854-30.854c-2.929-2.929-7.678-2.929-10.606,0-2.929,2.929-2.929,7.677 0,10.606l30.854,30.854c-1.378,1.898-2.617,3.901-3.707,5.995-0.04,0.066-0.084,0.127-0.122,0.195l-7.922,14.154h-85.802c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h77.407l-51.952,92.837c-1.639,2.929-1.132,6.591 1.241,8.965 1.443,1.444 3.364,2.198 5.306,2.198 1.251,0 2.511-0.313 3.659-0.955l92.839-51.925v77.38c0,4.142 3.358,7.5 7.5,7.5s7.5-3.358 7.5-7.5v-85.77l15.361-8.592c0.112-0.063 0.216-0.135 0.323-0.203 1.613-0.906 3.168-1.904 4.658-2.986l30.854,30.854c1.464,1.465 3.384,2.197 5.303,2.197s3.839-0.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-30.854-30.854c1.408-1.939 2.67-3.987 3.777-6.131 0.032-0.054 0.072-0.102 0.103-0.158l7.866-14.054h85.806c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zm-153.095-20.124l2.527-1.415c4.385-2.209 9.332-3.461 14.568-3.461 17.92,0 32.5,14.579 32.5,32.5s-14.58,32.5-32.5,32.5-32.5-14.579-32.5-32.5c0-11.652 6.167-21.886 15.405-27.624zm62.357,13.223c-4.664-14.624-16.229-26.191-30.851-30.857l70.071-39.221-39.22,70.078zm-90.525,28.799c4.667,14.64 16.252,26.218 30.896,30.876l-70.123,39.221 39.227-70.097z" />
                <path d="m247.5,263c8.547,0 15.5-6.953 15.5-15.5s-6.953-15.5-15.5-15.5-15.5,6.953-15.5,15.5 6.953,15.5 15.5,15.5zm0-16c0.276,0 0.5,0.224 0.5,0.5s-0.224,0.5-0.5,0.5-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5z" />
              </g>
            </svg>
            <div className={`bg-zinc-800 absolute h-fit top-24 z-[100] shadow-md group-hover:opacity-100 opacity-0 transition-all font-nunito text-zinc-100
                text-center group-hover:mt-3 w-full border-zinc-600 border border-solid rounded-sm text-sm sm:text-base border-l-0`}>
              <button className={` bg-zinc-800 hover:bg-zinc-700 transition-all text-sm hover:border-transparent 
              lg:px-5 lg:py-3 px-2 py-2  w-full `} onClick={() => { gsap.to(window, { duration: 2, scrollTo: aboutMeSection.current }) }}> About Me </button>
              <button className={` bg-zinc-800 hover:bg-zinc-700 transition-all text-sm hover:border-transparent 
              lg:px-5 lg:py-3 px-2 py-2  w-full `} onClick={() => navigationGoTo("jsWebsiteSection")}> Javascript </button>
              <button className={` bg-zinc-800 hover:bg-zinc-700 transition-all text-sm hover:border-transparent 
              lg:px-5 lg:py-3 px-2 py-2  w-full `} onClick={() => navigationGoTo("oldProjectsSection")}> Old Projects </button>
              <button className={` bg-zinc-800 hover:bg-zinc-700 transition-all text-sm hover:border-transparent 
              lg:px-5 lg:py-3 px-2 py-2  w-full `} onClick={() => navigationGoTo("videoGameSection")}> Video Game </button>
              <button className={` bg-zinc-800 hover:bg-zinc-700 transition-all text-sm hover:border-transparent 
              lg:px-5 lg:py-3 px-2 py-2  w-full `} onClick={() => navigationGoTo("webAppsSection")}> Web Apps </button>
              <button className={` bg-zinc-800 hover:bg-zinc-700 transition-all text-sm hover:border-transparent 
              lg:px-5 lg:py-3 px-2 py-2  w-full `} onClick={() => { gsap.to(window, { duration: 2, scrollTo: contactSection.current }) }}> Contact </button>
            </div>

          </div>
          <div className='flex flex-row ' ref={aboutMeSection}>
            <div className="lg:p-7 lg:basis-1/3 m-10 flex items-start text-left flex-col justify-center w-screen h-screen">
              <HeadingMain > A developer's journey through code. </HeadingMain>
              <HeadingSub className="mt-8 text-sky-300/95 hello w-full"> Calvin Kennedy </HeadingSub>
            </div>
            <div className={`overflow-hidden w-screen h-screen absolute`}>
              <SlideShowContainer>
                <SlideShow image={require("../public/pygame.webp")} text="Simple 2d python game"
                  year="2022" stack={[require("../public/python.webp"), require("../public/pygame-logo.webp")]} />
                <SlideShow image={require("../public/unity-fps.webp")} text="Unity 3d Open-World FPS"
                  year="2018" stack={[require("../public/csharp.webp"), require("../public/unity.webp")]} />
                <SlideShow image={require("../public/great-plains.webp")} text=" NEXT.js website with web app "
                  year="2022" stack={[require("../public/nextjs.webp"), require("../public/react.webp"), require("../public/bootstrap.webp")]} />
                <SlideShow image={require("../public/interpreter.webp")} text=" Interpreter - Lexer and Parser"
                  year="2017" stack={[require("../public/cpp.webp")]} />
                <SlideShow image={require("../public/coding-tutor.webp")} text="Coding Tutor for HSC and University Students"
                  year="2022" stack={[require("../public/nextjs.webp"), require("../public/react.webp"), require("../public/bootstrap.webp")]} />
                <SlideShow image={require("../public/discord-economy.webp")} text="Discord Virtual Economy Management Bot "
                  year="2021" stack={[require("../public/csharp.webp"), require("../public/discord.net.webp")]} />
              </SlideShowContainer>
            </div>
          </div>
        </section>

        <section className={`bg-zinc-800 h-fit lg:h-screen w-screen relative `}>
          <div className={`2xl:py-10 2xl:px-56 xl:py-8 xl:px-40 md:py-4 md:px-32 sm:py-3 sm:px-8 px-1 py-1 flex flex-col lg:flex-row lg:gap-10`}>
            <div className={`basis-1/2`}>
              <div className={``}>
                <h2 className="text-sky-400/95 float-left py-5 px-10 font-bold font-titillium pl-0 2xl:text-9xl xl:text-7xl lg:text-5xl md:text-3xl text-3xl whitespace-nowrap"> About Me </h2>
                <p className={`2xl:text-2xl xl:text-lg font-nunito text-zinc-300`}>
                  As a software developer with a passion for programming, I am currently pursuing a degree in software engineering at the University of Newcastle. With over 7 years of experience in coding, I have a diverse range of skills that includes web development, Unity 3D game development, and even creating interpreters and discord bots.
                  <br /><br />
                  I have 2 years of professional experience as a fullstack web developer, during which time I have developed and launched a number of web applications. I am passionate about software development and am always looking for ways to improve my skills and grow as a developer.
                  <br /><br />
                  In my free time, I enjoy programming and staying active through activities like going to the gym and playing sports. I also enjoy playing video games on occasion and sometimes use my programming skills to create mods.
                  <br /><br />
                  I am excited to continue my studies and career in software development and am eager to take on new challenges.
                </p>
              </div>
            </div>
            <div className={`basis-1/2 flex justify-center items-center content-center`}>
              <Image src={require("../public/me-real.webp")} className="rounded-lg shadow-2xl shadow-black w-full h-fit 2xl:max-w-3xl xl:max-w-xl lg:max-w-lg m-7 md:mt-0" />
            </div>
          </div>
        </section>

        <div className={`overflow-hidden`}>
          <div ref={projectsText} id="projects-text" className='h-screen w-screen flex align-middle justify-center items-center absolute'>
            <h1 className='text-nunito lg:text-9xl sm:text-6xl'> Projects </h1>
          </div>

          <section className={`bg-zinc-800 max-lg:min-h-screen h-screen w-screen relative  justify-center align-center items-center flex project z-50`} ref={jsWebsiteSection} id="js-website">
            <div className={`flex lg:flex-row flex-col content-center items-center justify-self-center justify-items-center`}>
              <div className={`2xl:py-10 2xl:px-32 xl:py-8 xl:px-24  sm:py-3 sm:px-8 px-1 py-1 flex flex-col lg:flex-row`}>
                <div className={`w-1/2 max-lg:w-full z-0 order-last lg:order-first  max-lg:flex lg:flex-col flex-row justify-center max-lg:mt-4 max-lg:flex-row-reverse max-lg:pb-16`}>
                  <Image src={require("../public/great-plains.webp")} className={`${styles.projectImage} relative skew-y-2  translate-x-32 max-lg:-translate-x-16 lg:scale-90 lg:hover:scale-95 hover:scale-105 transition-all cursor-pointer brightness-90 hover:brightness-105 rounded-lg shadow-2xl shadow-black lg:m-7 max-lg:mx-4 md:mt-0 lg:w-full max-w-none max-lg:w-1/2 `} />
                  <Image src={require("../public/coding-tutor.webp")} className={`${styles.projectImage} relative rounded-lg -skew-y-2 lg:-translate-y-3/4 max-lg:translate-y-1/4 scale-90 lg:scale-75 lg:hover:scale-80 cursor-pointer brightness-90 hover:brightness-105 hover:scale-105 transition-all  -translate-x-26 max-lg:translate-x-10 shadow-2xl shadow-black lg:m-7 md:mt-0 max-lg:mx-4 lg:w-full w-28 max-lg:w-1/2 max-lg:h-auto`} />
                </div>
                <div className={`lg:w-1/2 z-10 order-first lg:order-last`}>
                  <div className={`flex flex-col h-full justify-center`}>
                    <h2 className="text-sky-400/95 float-left py-5 px-10 font-bold pl-0 font-titillium text-lg 2xl:text-7xl xl:text-6xl lg:text-3xl md:text-3xl sm:text-3xl whitespace-nowrap w-full lg:w-fit"> Javascript Websites </h2>
                    <p className={`2xl:text-2xl xl:text-base text-xs font-nunito text-zinc-300`}>
                      I am pleased to showcase two complex websites that I have created using Next.js, Bootstrap or Tailwind, and React. These websites, which are featured on my portfolio, demonstrate my skills and proficiency in creating visually appealing and functional web applications that deliver a seamless user experience on both mobile and desktop devices.
                      <br /><br />
                      I have implemented interactive and dynamic features using React, a powerful JavaScript library for building user interfaces, within the Next.js framework. My websites also interact with API's and feature interactive elements, showcasing my ability to implement dynamic and interactive features using these technologies. I have utilized SCSS and PostCSS to write efficient and maintainable styles for my websites.
                      <br /><br />
                      I have a strong understanding of Next.js, Bootstrap, Tailwind, and React, and have used these tools and frameworks effectively to create websites that are visually appealing, functional, and optimized for user experience. My attention to detail and dedication to creating high-quality websites is evident in the work that is featured on my portfolio.
                      <br /><br />
                      One of the websites on my portfolio is a demonstration website, while the other is a website for my coding tutoring business. Both showcase my skills and abilities in creating web applications. I am always seeking out opportunities to learn and grow in my field, and am excited to take on new challenges and projects in the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`bg-zinc-800 max-lg:min-h-screen h-screen w-screen relative  justify-center align-center items-center flex project z-40`} ref={oldProjectsSection} >
            <div className={`flex lg:flex-row flex-col content-center items-center justify-self-center justify-items-center`}>
              <div className={`2xl:py-10 2xl:px-32 xl:py-8 xl:px-24  sm:py-3 sm:px-8 px-1 py-1 flex flex-col lg:flex-row`}>
                <div className={`lg:w-1/2 z-10 `}>
                  <div className={`flex flex-col h-full justify-center`}>
                    <h2 className="text-sky-400/95 float-left py-5 px-10 font-titillium font-bold pl-0  text-lg 2xl:text-7xl xl:text-6xl lg:text-3xl md:text-3xl sm:text-3xl whitespace-nowrap w-full lg:w-fit"> Small Projects </h2>
                    <p className={`2xl:text-2xl xl:text-base text-xs font-nunito text-zinc-300`}>
                      In addition to my work as a software developer, I have also created a number of personal projects that demonstrate my skills and interests. One of my notable projects is an interpreter for my own simple scripting language, inspired by the Windows command line and batch scripting. This project required the ability to design and implement a custom language, as well as some knowledge of C++.
                      <br /><br />
                      I have also created a simple game using Python, in which the player shoots a balloon into the sky. This project was a fun and challenging side project that allowed me to experiment with game development and improve my Python skills.
                      <br /><br />
                      If you would like to see more of my projects, please visit <a className="hover:text-sky-400/90 underline z-30 relative " href="https://github.com/45ck">my GitHub account</a>, where you can find a full list of my publicly available work. I am always looking for new opportunities to learn and grow as a developer, and am excited to take on new challenges and projects in the future.
                    </p>
                  </div>
                </div>
                <div className={`w-1/2 max-lg:w-full z-0 max-lg:flex lg:flex-col flex-row justify-center max-lg:mt-4 max-lg:flex-row-reverse max-lg:pb-16`}>
                  <Image src={require("../public/interpreter.webp")} className={`cursor-pointer brightness-90 hover:brightness-105 hover:scale-105 transition-all relative skew-y-3 top-1/2 -translate-y-1/2 lg:scale-90 lg:hover:scale-95 rounded-lg shadow-2xl shadow-black lg:m-7 max-lg:mx-4 md:mt-0 lg:w-full max-w-none max-lg:w-1/2 max-lg:translate-y-5 max-lg:-translate-x-8 `} />
                  <Image src={require("../public/pygame.webp")} className={`relative rounded-lg -skew-y-2 lg:-translate-y-3/4 max-lg:translate-y-1/4 scale-80 lg:scale-50 lg:hover:scale-[0.55] cursor-pointer brightness-90 hover:brightness-105 hover:scale-[0.85] transition-all translate-x-44 max-lg:translate-x-10 shadow-2xl shadow-black lg:m-7 md:mt-0 max-lg:mx-4 lg:w-full w-28 max-lg:w-1/2 max-lg:h-auto`} />
                </div>
              </div>
            </div>
          </section>


          <section className={`bg-zinc-800 max-lg:min-h-screen h-screen w-screen relative  justify-center align-center items-center flex project z-30`} ref={videoGameSection} >
            <div className={`flex lg:flex-row flex-col content-center items-center justify-self-center justify-items-center`}>
              <div className={`2xl:py-10 2xl:px-32 xl:py-8 xl:px-24  sm:py-3 sm:px-8 px-1 py-1 flex flex-col lg:flex-row`}>
                <div className={`lg:w-1/2 z-0 order-last lg:order-first flex lg:flex-col flex-row justify-center max-lg:mt-4 max-lg:flex-row-reverse max-lg:pb-16`}>
                  <Video src="/videogame.mp4" />
                </div>
                <div className={`lg:w-1/2 z-10 order-first lg:order-last`}>
                  <div className={`flex flex-col h-full justify-center`}>
                    <h2 className="text-sky-400/95 float-left py-5 px-10 font-titillium font-bold pl-0  text-lg 2xl:text-7xl xl:text-6xl lg:text-3xl md:text-3xl sm:text-3xl whitespace-nowrap w-full lg:w-fit"> Video Game Project </h2>
                    <p className={`2xl:text-2xl xl:text-base text-xs font-nunito text-zinc-300`}>
                      One of my most notable projects is a FPS game that I created using Unity3D and C#. This game, which I developed approximately 4 years ago, features advanced game mechanics such as wall running, double jumping, and bullet collision detection, as well as character customization and advanced AI that can track and hunt the player.
                      <br /><br />
                      The game also includes a level progression system that allows players to unlock new items and abilities as they progress through the game. There are missions and levels that unlock as the player progresses through the game, adding to its replay value.
                      <br /><br />
                      Despite being only 14 to 16 years old at the time of development, I was able to create a game with 50 hours of playtime and advanced features that showcase my skills and dedication to software development. If I were to develop this game with my current skills, there are many things that I would revise, such as the user interface and overall design of the game.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`bg-zinc-800 max-lg:min-h-screen max-lg:h-[125vh] lg:h-screen  w-screen relative  justify-center align-center items-center flex project z-20`} ref={webAppsSection} >
            <div className={`flex lg:flex-row flex-col content-center items-center justify-self-center justify-items-center`}>
              <div className={`2xl:py-10 2xl:px-32 xl:py-8 xl:px-24  sm:py-3 sm:px-8 px-1 py-1 flex flex-col lg:flex-row`}>
                <div className={`lg:w-1/2 z-10 `}>
                  <div className={`flex flex-col h-full justify-center`}>
                    <h2 className="text-sky-400/95 float-left py-5 px-10 font-titillium font-bold pl-0  text-lg 2xl:text-7xl xl:text-6xl lg:text-3xl md:text-3xl sm:text-3xl whitespace-nowrap w-full lg:w-fit"> Web Applications </h2>
                    <p className={`2xl:text-2xl xl:text-base text-xs font-nunito text-zinc-300`}>
                      I have had the opportunity to create a number of web applications for Macquarie College, including a staff and student management platform and an onboarding system.
                      <br /><br />
                      The first application, called "staffpass," was developed using PHP, Javascript, HTML, CSS, Bootstrap, and jQuery. This web app provided a way for staff members, such as teachers, to manage their students' accounts at the school. It allowed for resetting passwords, sending login credentials to students, teachers, and parents, and searching through student databases to find and perform actions on student records. The app also included a permission system that allowed for managing which staff members could view and take actions on student and staff records. This application saved a significant amount of time for Macquarie College, as teachers no longer had to contact IT every time a student forgot their password.
                      <br /><br />
                      The second application, which was almost completed, was an onboarding system for new staff members. This app connected to a tool called ManageEngine and used REST APIs to communicate with it and other services. It allowed for onboarding new staff members by filling out a form, and it would then perform the appropriate actions to onboard them into the school's systems. It would also notify IT of the new staff member and generate and add their details into the system. This app was developed using PHP, Javascript, and Bootstrap.
                      <br /><br />
                      I am proud of the work that I have done for Macquarie College and the value that these applications have brought to the school. A modified version of the code for these applications is available upon request.
                    </p>

                    <div className="flex justify-between items-center">
                      <p className=" text-red-600 fill-red-600 mt-10 flex items-center">
                        <svg className="mr-4" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                        </svg>
                        Red marking is to hide sensitive information.
                      </p>

                      <Button onClick={() => setStaffPassModalActive(value => value = !value)}>
                        View Screenshots
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={`w-1/2 max-lg:w-full z-0 max-lg:flex lg:flex-col flex-row justify-center max-lg:mt-4 max-lg:flex-row-reverse max-lg:pb-16`}>
                  <Image onClick={() => setStaffPassModalActive(value => value = !value)} src={require("../public/1.PNG")} className={`cursor-pointer brightness-90 hover:brightness-105 hover:scale-105 transition-all relative skew-y-3 top-1/2 -translate-y-1/2 lg:scale-90 lg:hover:scale-95 rounded-lg shadow-2xl shadow-black lg:m-7 max-lg:mx-4 md:mt-0 lg:w-full max-w-none max-lg:w-1/2 max-lg:translate-y-5 max-lg:-translate-x-8 `} />
                  <Image onClick={() => setStaffPassModalActive(value => value = !value)} src={require("../public/3.PNG")} className={`top-1/4 relative rounded-lg -skew-y-2 lg:-translate-y-1/2 max-lg:translate-y-1/4 scale-80 lg:scale-[0.6] lg:hover:scale-[0.65] cursor-pointer brightness-90 hover:brightness-105 hover:scale-[0.85] transition-all -translate-x-14 max-lg:translate-x-10 shadow-2xl shadow-black lg:m-7 md:mt-0 max-lg:mx-4 lg:w-full w-28 max-lg:w-1/2 max-lg:h-auto`} />
                </div>
              </div>
            </div>
          </section>

          <section className={`h-screen w-screen relative lg:py-10 lg:px-56 flex justify-center items-center flex-col text-center`} ref={contactSection}>
            <h2 className="text-sky-400/95 2xl:text-9xl text-5xl font-titillium  py-5 font-bold pl-0"> Contact </h2>
            <p className={`2xl:text-3xl text-lg  font-nunito text-zinc-700 text-center`}>
              <a className="hover:text-sky-600/90 underline transition" href="mailto:ajax@aquinus.net">ajax@aquinus.net</a> <br /><br />
              <a className="hover:text-sky-600/90 underline transition" href="tel:0432041057">0432 041 057</a>
            </p>
            <div className="flex justify-center">
              <a className="group/logo hover:scale-105 mt-10 hover:text-sky-600/90 transition-all " href="https://github.com/45ck">
                <svg width="35" height="35" fill="currentColor" className='group-hover/logo:fill-sky-600/90 inline-block mr-2' viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                45ck
              </a>
            </div>
          </section>

        </div>

        <Carousel
          active={staffPassModalActive}
          setActive={setStaffPassModalActive}
          images={[
            require("../public/1.PNG"),
            require("../public/2.PNG"),
            require("../public/3.PNG"),
            require("../public/4.PNG"),
            require("../public/5.PNG"),
            require("../public/6.PNG"),
          ]} />

      </main>
    </>)
}

const SlideShowContainer = ({ children }) => {
  return <div className={`${styles.container}`}>
    {children}
    {children}
  </div>
}

const SlideShow = (props) => {
  return (
    <div className={`${styles.image}`}>
      <p className=' text-stone-300 lg:text-2xl text-lg text-center p-3 bg-zinc-900 font-titillium'>
        {props.text}
      </p>
      <Image src={props.image} />
      <p className=' text-stone-300 text-5xl text-center p-1 bg-zinc-900 font-titillium'>
        {props.year}
        <div className={`inline-block m-0 ml-1`}>{props.stack != null && props.stack.map((tech, index) => {
          return <Image className='inline-block' src={tech} key={index} width={"auto"} height={45} />
        })}</div>
      </p>
    </div>
  );
};
