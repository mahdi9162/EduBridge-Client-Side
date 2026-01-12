import React from 'react';
import Container from '../Container/Container';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { Link } from 'react-router';
import leftimageHero from '../../assets/leftimageHero.webp';
import Btn from '../Buttons/Btn/btn';
import BtnSecondary from '../Buttons/BtnSecondary/BtnSecondary';
import { motion } from 'framer-motion';
const Hero = () => {
  const parent = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12,
        when: 'beforeChildren',
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const imgWrap = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imgHover = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="bg-[radial-gradient(circle_at_20%_20%,rgba(36,76,152,0.14),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(15,26,51,0.10),transparent_40%),linear-gradient(180deg,#fdfefe_0%,#f4f7fc_55%,#eef3fb_100%)] rounded-2xl mt-5">
      <Container className="py-10 md:py-14 lg:py-16 px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* left */}
          <motion.div
            className="text-center lg:text-left"
            variants={parent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            {/* trust badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-3 py-2 text-xs md:text-sm text-neutral"
              variants={child}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-base-200">
                <HiOutlineShieldCheck className="text-[#244C98] text-base" />
              </span>
              Where Trust Shapes Learning.
            </motion.div>

            {/* headline */}
            <motion.h1 className="mt-5 text-xl md:text-3xl lg:text-5xl font-bold text-base-content" variants={child}>
              Find The Right Tutor,
              <span className="block mt-3">
                <span className="text-[#244C98]"> Faster</span> and With <span className="text-[#0F1A33]">Trust</span>
              </span>
            </motion.h1>

            {/* subtext */}
            <motion.p className="mt-4 mx-auto lg:mx-0 text-xs lg:text-base text-neutral md:max-w-sm lg:max-w-xl" variants={child}>
              EduBridge helps students post tuition needs and connect with verified tutors—so learning stays smooth, transparent, and
              reliable.
            </motion.p>

            {/* CTA */}
            <motion.div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start relative z-30" variants={child}>
              <Link to="/tuitions">
                <Btn className="w-full md:w-auto py-2.5 px-5">Browse Tuitions</Btn>
              </Link>

              <Link to="/dashboard">
                <BtnSecondary className="w-full md:w-auto text-sm px-5">Post Tuition</BtnSecondary>
              </Link>
            </motion.div>
          </motion.div>

          {/* right img*/}
          <motion.div
            className="order-first md:order-0"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-md border border-base-200"
              variants={imgWrap}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              whileHover="hover"
              animate="rest"
            >
              <motion.img
                src={leftimageHero}
                alt="Students learning"
                className="w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] object-cover"
                variants={imgHover}
              />

              <motion.div
                className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black/10 via-transparent to-transparent"
                variants={fadeIn}
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
