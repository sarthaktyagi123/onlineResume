import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import freelancr from '../../public/images/projects/freelancr.png';
import techNews from '../../public/images/projects/tech-news.png';
import wedding from '../../public/images/projects/wedding.png';
import mongodb from '../../public/images/Icons/mongodb.png';
import react from '../../public/images/Icons/react.png';
import graphql from '../../public/images/Icons/graphql.png';
import java from '../../public/images/Icons/java.png';
import spring from '../../public/images/Icons/spring.png';
import mysql from '../../public/images/Icons/mysql.png';
import js from '../../public/images/Icons/js.png';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

const SkillIcons = ({ name, src, className }) => {
  return (
    <div className='group relative flex justify-center'>
      <div
        className={`w-14 h-14 sm:w-10 sm:h-10 border-2 border-white  overflow-hidden bg-fill bg-white mr-2 transition-all hover:scale-[1.1] ${className}`}
      >
        <Image src={src} alt={name} />
      </div>
      <span className='absolute -bottom-5 text-center z-50 bg-gray-500 text-white rounded mr-2 px-2 opacity-0 group-hover:opacity-100 transition-all font-medium sm:text-sm whitespace-nowrap'>
        {name}
      </span>
    </div>
  );
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  props,
}) => {
  return (
    <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>
            {title}
          </h2>
        </Link>
        <div className='flex justify-start'></div>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
          {summary}
        </p>
        <div className='flex justify-start my-2'>
          {props.map(({ name, src }, index) => (
            <SkillIcons src={src} name={name} key={index} />
          ))}
        </div>

        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon className='hover:scale-[1.1] transition-all' />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base hover:scale-[1.1] transition-all'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return <div>Projects Page</div>;
};

export default projects;
