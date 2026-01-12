import React, { useState } from 'react';
import { Link } from 'react-router';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import Container from '../../../components/Container/Container';
import toast from 'react-hot-toast';
import CommonButton from '../../../components/Buttons/CommonButton/CommonButton';
import Btn from '../../../components/Buttons/Btn/btn';
import BtnSecondary from '../../../components/Buttons/BtnSecondary/BtnSecondary';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMsg = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      toast.error('Please fill in all fields.');
      return;
    }

    toast.success('Message sent successfully!');

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const pageParent = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], when: 'beforeChildren', staggerChildren: 0.12 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  const cardIn = {
    hidden: { opacity: 0, y: 16, scale: 0.99 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  const listStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
  };

  const listItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <Container>
      <motion.div
        className="relative my-8 sm:my-10 lg:my-16 overflow-hidden rounded-3xl border border-base-200/60 bg-base-100"
        variants={pageParent}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(36,76,152,0.10),transparent_55%),radial-gradient(circle_at_85%_10%,rgba(15,26,51,0.08),transparent_55%),linear-gradient(180deg,#ffffff_0%,#f6f9ff_50%,#eff4fb_100%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="relative px-3 py-6 sm:px-4 sm:py-8 lg:px-14 lg:py-14">
          <motion.section
            className="relative overflow-hidden rounded-3xl border border-base-200/60 bg-base-100/70 backdrop-blur px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12"
            variants={cardIn}
          >
            <div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(120deg,rgba(255,255,255,0.7),rgba(255,255,255,0.08),rgba(255,255,255,0.45))]" />

            <motion.div className="relative text-center md:text-left" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-base-200 bg-base-100/80 px-3 py-2 text-[11px] sm:text-xs lg:text-sm text-neutral backdrop-blur">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-base-200">
                  <HiOutlineShieldCheck className="text-secondary text-base" />
                </span>
                We usually reply within 24 hours.
              </div>

              <h1 className="mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-5xl font-bold text-base-content leading-tight">
                Contact <span className="text-secondary">EduBridge</span>
              </h1>

              <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm lg:text-base text-neutral leading-relaxed">
                Need help, want to partner, or have a question? Send a message and we’ll get back to you.
              </p>
            </motion.div>
          </motion.section>

          <motion.section className="pt-6 sm:pt-8 lg:pt-10" variants={fadeUp}>
            <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:items-start">
              <motion.div className="space-y-4 sm:space-y-5" variants={listStagger}>
                <motion.div
                  className="rounded-3xl border border-base-200/70 bg-base-100/75 backdrop-blur p-4 sm:p-5 lg:p-6"
                  variants={cardIn}
                >
                  <motion.div className="grid gap-3 sm:gap-4" variants={listStagger}>
                    {[
                      {
                        icon: <FiMail className="text-base-content/80 text-[16px] sm:text-lg leading-none" />,
                        title: 'Email',
                        value: 'hasanmahdi6060@gmail.com',
                        wrap: true,
                      },
                      {
                        icon: <FiMapPin className="text-base-content/80 text-[16px] sm:text-lg leading-none" />,
                        title: 'Location',
                        value: 'Narsingdi, Bangladesh',
                      },
                      {
                        icon: <FiClock className="text-base-content/80 text-[16px] sm:text-lg leading-none" />,
                        title: 'Support Hours',
                        value: 'Sat–Thu • 10:00 AM – 8:00 PM',
                      },
                    ].map((item) => (
                      <motion.div key={item.title} className="flex items-start gap-3" variants={listItem}>
                        <span className="shrink-0 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-2xl bg-base-200/80 ring-1 ring-secondary/15">
                          {item.icon}
                        </span>
                        <div className={item.wrap ? 'min-w-0' : undefined}>
                          <p className="font-semibold text-base-content text-sm sm:text-base">{item.title}</p>
                          <p className={`mt-1 text-[11px] sm:text-sm text-neutral ${item.wrap ? 'wrap-break-word' : ''}`}>{item.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div className="mt-4 sm:mt-5 flex flex-col gap-3 sm:flex-row" variants={fadeUp}>
                    <Link to="/tuitions" className="w-full sm:w-auto">
                      <Btn className="w-full sm:w-auto rounded-xl px-5 py-2.5 text-center text-xs sm:text-sm font-semibold">
                        Browse Tuitions
                      </Btn>
                    </Link>

                    <Link to="/tutors" className="w-full sm:w-auto">
                      <BtnSecondary className="w-full sm:w-auto rounded-xl text-center text-xs sm:text-sm font-semibold">
                        Explore Tutors
                      </BtnSecondary>
                    </Link>
                  </motion.div>

                  <motion.p
                    className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] lg:text-xs text-neutral/70 leading-relaxed"
                    variants={fadeUp}
                  >
                    Quick tip: Don’t share phone numbers publicly. We keep sensitive info protected.
                  </motion.p>
                </motion.div>

                <motion.div
                  className="rounded-3xl border border-base-200/70 bg-base-100/70 backdrop-blur p-4 sm:p-5 lg:p-6"
                  variants={cardIn}
                >
                  <p className="font-semibold text-base-content text-sm sm:text-base">What happens next?</p>
                  <motion.ul className="mt-2 space-y-2 text-[11px] sm:text-sm text-neutral/80" variants={listStagger}>
                    {[
                      'We review your message and reply within 24 hours.',
                      'For urgent issues, we’ll prioritize account security cases first.',
                    ].map((t) => (
                      <motion.li key={t} className="flex gap-2" variants={listItem}>
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary/70" />
                        {t}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>

              <motion.div
                className="rounded-3xl border border-base-200/70 bg-base-100/80 p-4 sm:p-6 lg:p-8 backdrop-blur"
                variants={cardIn}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-base-content">Send a message</h2>
                    <p className="mt-1 text-[11px] sm:text-sm text-neutral/70">Share details so we can help you faster.</p>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] sm:text-xs font-semibold bg-base-200/70 text-base-content ring-1 ring-base-300/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary/70" />
                    Secure form
                  </span>
                </div>

                <motion.form onSubmit={handleSendMsg} className="mt-5 sm:mt-6 space-y-3 sm:space-y-4" variants={fadeUp}>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Full Name"
                      className="w-full rounded-xl border border-base-200 bg-base-100/80 px-4 py-3 text-xs sm:text-sm outline-none transition focus:border-secondary/60 focus:ring-4 focus:ring-secondary/10"
                    />

                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-xl border border-base-200 bg-base-100/80 px-4 py-3 text-xs sm:text-sm outline-none transition focus:border-secondary/60 focus:ring-4 focus:ring-secondary/10"
                    />
                  </div>

                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-xl border border-base-200 bg-base-100/80 px-4 py-3 text-xs sm:text-sm outline-none transition focus:border-secondary/60 focus:ring-4 focus:ring-secondary/10"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Your message"
                    className="w-full rounded-xl border border-base-200 bg-base-100/80 px-4 py-3 text-xs sm:text-sm outline-none transition focus:border-secondary/60 focus:ring-4 focus:ring-secondary/10"
                  />

                  <CommonButton
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs sm:text-sm font-semibold active:scale-[0.99]"
                  >
                    <FiSend />
                    Send Message
                  </CommonButton>

                  <p className="text-[10px] sm:text-[11px] lg:text-xs text-neutral/60 text-center leading-relaxed">
                    By sending, you agree not to include passwords or sensitive payment information.
                  </p>
                </motion.form>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </Container>
  );
};

export default Contact;
