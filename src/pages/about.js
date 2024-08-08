import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/pic-3.png';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const about = () => {
  return (
    <>
      <Head>
        <title>SARTHAKInventor | About Page</title>
        <meta name='description' content='any description' />
      </Head>

      <main className='flex w-full flex-col items-center justify-center dark:text-light max-w-7xl mx-auto'>
        <Layout className='pt-16'>
          <AnimatedText
            text='About Jin'
            className='mb-16 xl:!text-7xl lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8'
          />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-4 flex flex-col items-start justify-start xl:col-span-4 lg:col-span-8 lg:order-2 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                Biography
              </h2>
              <p className='font-medium'>
              I am a passionate full-stack developer with a B.Tech in Information Technology from 
              VIT Vellore and over one year of professional experience. My journey into the world 
              of software engineering began with a strong interest in technology, which eventually 
              led me to transition from my initial studies and experiences into full-stack development.
              In 2022, I decided to follow my passion for software engineering and embarked on a journey 
              to become a full-stack developer. Since then, I have worked on various projects, honing my skills in both front-end and back-end technologies. My expertise includes [mention specific technologies or frameworks you are proficient in, e.g., React, Node.js, etc.].

              Through my work, I strive to create efficient, scalable, and user-friendly applications. 
              I am constantly exploring new technologies and methodologies to enhance my skill set and 
              deliver the best possible solutions.

              Thank you for visiting my website. Feel free to explore my projects and get in touch with 
              me if you'd like to collaborate or learn more about my work.
              </p>
              <p className='my-4 font-medium '>
                As a full-stack developer, I'm dedicated to creating innovative
                and functional web and mobile applications that prioritize the
                user experience. I'm eager to learn modern frameworks such as
                Next.js and Nest.js, and backend languages and frameworks like
                Java, C#, Spring, and .NET.
              </p>
              <p className='font-medium '>
                My plan is to work as part of a team and gain experience
                handling large-scale applications, communicating with coworkers,
                optimizing performance, and managing client traffic. Eventually,
                I hope to create my own brand of user-centered, easy-to-use
                applications that leverage my experience in both chemical
                engineering and software development.
              </p>
            </div>
            <div className='col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark w-[85%] mx-auto dark:border-light xl:col-span-4 lg:col-span-8 lg:order-1 lg:max-w-lg md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1.5rem] bg-dark dark:bg-light' />
              <Image
                src={profilePic}
                alt='Jinventor'
                className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
