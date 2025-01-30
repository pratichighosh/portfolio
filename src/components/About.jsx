import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Introduction Section */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Proficient web application developer with expertise in React.js, JavaScript, HTML, and CSS, known for innovative UI designs and effective state management. Strong analytical skills demonstrated through high problem-solving ratings on CodeChef, alongside proficiency in C++ and C, backed by a solid foundation in data structures and algorithms. She has worked with technologies like React, Node.js, Express.js, and MongoDB, significantly enhancing scalable web applications. Career objectives include driving impactful projects that enhance user experience and technical performance.
      </motion.p>

      {/* Education Section */}
<motion.div variants={textVariant()} className="mt-16">
  <p className={styles.sectionSubText}>Education</p>
  <div>
    <h3 className={styles.sectionHeadText}>Academic Background</h3>
  </div>
</motion.div>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p className="text-white text-[19px] font-semibold">
          Computer Science
        </p>
        <p>Sir M Visvesvaraya Institute Of Technology • Bengaluru, India</p>
        <p className="text-gray-400">Expected Graduation: May 2026</p>
      </motion.div>

      {/* Services Section */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
