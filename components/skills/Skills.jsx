import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { cubicBezier } from "framer-motion/dom";

function Skills() {
  const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);
  const easedProgress = easing(0.5);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="Skills-container"
    >
      <div className="skills-content bg-nightLife bg-cover font-clash">
        <motion.div
          transition={{ duration: 0.5, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="skills1 font-clash"
        ></motion.div>
        <Marquee
          direction="right"
          speed={140}
          gradient={false}
          className="Skills-marquee1 font-clash"
        >
          GIT BOOTSTRAP SASS TAILWIND HTML CSS REACTJS JAVASCRIPT TYPESCRIPT
        </Marquee>
        <Marquee
          gradient={false}
          speed={140}
          className="Skills-marquee2 font-clash"
        >
          NEXT.JS BOOTSTRAP REDUX SANITY PYTHON FIREBASE SOLIDITY NODE.JS
        </Marquee>
        <motion.div
          transition={{ duration: 0.5, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="skills2  ml-5"
        >
          LET&apos;S TALK SKILLS.
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
