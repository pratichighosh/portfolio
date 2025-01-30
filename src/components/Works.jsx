import React from "react";
import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { stegano, netflix, rps, covid } from "../assets"; // Import the images

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. They reflect my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {[
          {
            name: "Image Steganography",
            description:
              "A React.js website for securely encoding and decoding hidden messages within images. Features include: Encode (Embed text in images), Decode (Extract hidden messages using a decryption password), Navbar (A fixed menu with options for About, Encode, and Decode pages).",
            tags: [
              { name: "react", color: "blue-text-gradient" },
              { name: "vite", color: "green-text-gradient" },
              { name: "css", color: "pink-text-gradient" },
            ],
            image: stegano, // Use the image from src/assets
            source_code_link: "https://github.com/pratichighosh/Image-steganography-",
          },
          {
            name: "Netflix Clone",
            description:
              "A React.js web app replicating Netflix's core features: Real-Time Content (Displays trending movies, popular TV shows, and genres using RapidAPI), Trailers (Connects seamlessly to YouTube for previews), Responsive Design (Offers a smooth, mobile-friendly interface).",
            tags: [
              { name: "react", color: "blue-text-gradient" },
              { name: "rapidapi", color: "green-text-gradient" },
              { name: "tailwind", color: "pink-text-gradient" },
            ],
            image: netflix, // Use the image from src/assets
            source_code_link: "https://github.com/pratichighosh/Netflix-Clone",
          },
          {
            name: "Rock-Paper-Scissors Game",
            description:
              "An advanced React and Vite game featuring: Extended Options (Adds Lizard and Spock to the classic game), Interactive Design (Modern interface with dynamic buttons), Score Tracker (Displays player progress), Rules Button (Provides quick access to game mechanics).",
            tags: [
              { name: "react", color: "blue-text-gradient" },
              { name: "vite", color: "green-text-gradient" },
              { name: "css", color: "pink-text-gradient" },
            ],
            image: rps, // Use the image from src/assets
            source_code_link: "https://github.com/pratichighosh/Rock-Paper-Scissors",
          },
          {
            name: "Covid-19 Update",
            description:
              "A React.js app delivering real-time COVID-19 statistics: Global & Country-Specific Data (Tracks confirmed cases, recoveries, and deaths), Data Visualization (Features charts and graphs for easy interpretation), Live API Integration (Ensures accurate and up-to-date information).",
            tags: [
              { name: "react", color: "blue-text-gradient" },
              { name: "api", color: "green-text-gradient" },
              { name: "chart.js", color: "pink-text-gradient" },
            ],
            image: covid, // Use the image from src/assets
            source_code_link: "https://github.com/pratichighosh/covidupdate",
          },
        ].map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
