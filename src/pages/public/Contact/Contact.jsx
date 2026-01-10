import React, { useState } from 'react';
import { Link } from 'react-router';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import Container from '../../../components/Container/Container';
import toast from 'react-hot-toast';
import CommonButton from '../../../components/Buttons/CommonButton/CommonButton';
import Btn from '../../../components/Buttons/Btn/btn';
import BtnSecondary from '../../../components/Buttons/BtnSecondary/BtnSecondary';

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

  return (
<Container>
  {/* OUTER WRAP (modern background instead of plain white) */}
  <div
    className="
      relative my-10 md:my-16 overflow-hidden
      rounded-3xl border border-base-200/60
      bg-[radial-gradient(circle_at_18%_20%,rgba(36,76,152,0.10),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(15,26,51,0.08),transparent_50%),linear-gradient(180deg,#ffffff_0%,#f5f8ff_45%,#eef3fb_100%)]
      px-3 py-4
      shadow-[0_18px_55px_rgba(15,26,51,0.08)]
    "
  >
    {/* glow blobs */}
    <div
      className="
        pointer-events-none absolute -top-28 -left-24 h-72 w-72 rounded-full blur-3xl opacity-70
        bg-[radial-gradient(circle,rgba(36,76,152,0.22),transparent_62%)]
      "
    />
    <div
      className="
        pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full blur-3xl opacity-60
        bg-[radial-gradient(circle,rgba(15,26,51,0.18),transparent_65%)]
      "
    />

    {/* header */}
    <section
      className="
        relative overflow-hidden
        rounded-3xl border border-base-200/60
        bg-base-100/70 backdrop-blur
        px-4 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16
        shadow-[0_18px_50px_rgba(15,26,51,0.10)]
      "
    >
      {/* subtle header sheen */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(120deg,rgba(255,255,255,0.65),rgba(255,255,255,0.10),rgba(255,255,255,0.45))]" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-base-200 bg-base-100/80 px-3 py-2 text-xs md:text-sm text-neutral backdrop-blur">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-base-200">
            <HiOutlineShieldCheck className="text-secondary text-base" />
          </span>
          We usually reply within 24 hours.
        </div>

        <h1 className="mt-5 text-xl md:text-3xl lg:text-5xl font-bold text-base-content leading-tight">
          Contact <span className="text-secondary">EduBridge</span>
        </h1>

        <p className="mt-3 max-w-2xl text-xs md:text-base text-neutral">
          Need help, want to partner, or have a question? Send a message and we’ll get back to you.
        </p>
      </div>
    </section>

    {/* body */}
    <section className="py-10 md:py-14 lg:py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
        {/* left info*/}
        <div className="space-y-4">
          {/* CARD style */}
          <div className="rounded-3xl border border-base-200/70 bg-base-100/80 p-6 backdrop-blur shadow-[0_10px_30px_rgba(15,26,51,0.06)] hover:-translate-y-1 duration-500">
            <div className="flex gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-base-200/80 ring-1 ring-secondary/20">
                <FiMail className="text-base-content/80 animate-pulse" />
              </span>
              <div>
                <p className="font-semibold text-base-content">Email</p>
                <p className="mt-1 text-xs md:text-sm text-neutral">hasanmahdi6060@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-base-200/70 bg-base-100/80 p-6 backdrop-blur shadow-[0_10px_30px_rgba(15,26,51,0.06)] hover:-translate-y-1 duration-500">
            <div className="flex gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-base-200/80 ring-1 ring-secondary/20">
                <FiMapPin className="text-base-content/80 animate-pulse" />
              </span>
              <div>
                <p className="font-semibold text-base-content">Location</p>
                <p className="mt-1 text-xs md:text-sm text-neutral">Narsingdi, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-base-200/70 bg-base-100/80 p-6 backdrop-blur shadow-[0_10px_30px_rgba(15,26,51,0.06)] hover:-translate-y-1 duration-500">
            <div className="flex gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-base-200/80 ring-1 ring-secondary/20">
                <FiClock className="text-base-content/80 animate-pulse" />
              </span>
              <div>
                <p className="font-semibold text-base-content">Support Hours</p>
                <p className="mt-1 text-xs md:text-sm text-neutral">Sat–Thu • 10:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick tip */}
          <div className="rounded-3xl border border-base-200/70 bg-base-100/70 p-6 backdrop-blur shadow-[0_10px_30px_rgba(15,26,51,0.06)]">
            <p className="font-semibold text-base-content">Quick tip</p>
            <p className="mt-2 text-xs md:text-sm text-neutral">
              Don’t share phone numbers publicly. We keep sensitive info protected.
            </p>

            <div className="mt-4 flex flex-col gap-3 md:flex-row">
              <Link to="/tuitions" className="w-full md:w-auto">
                <Btn className="w-full md:w-auto rounded-xl px-5 py-2.5 text-center text-sm font-semibold">
                  Browse Tuitions
                </Btn>
              </Link>

              <Link to="/tutors" className="w-full md:w-auto">
                <BtnSecondary className="w-full md:w-auto rounded-xl text-center text-sm font-semibold">
                  Explore Tutors
                </BtnSecondary>
              </Link>
            </div>
          </div>
        </div>

        {/* right form */}
        <div className="rounded-3xl border border-base-200/70 bg-base-100/80 p-6 md:p-8 backdrop-blur shadow-[0_14px_40px_rgba(15,26,51,0.08)]">
          <h2 className="text-xl md:text-2xl font-bold text-base-content">Send a message</h2>

          <form onSubmit={handleSendMsg} className="mt-6 space-y-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="
                w-full rounded-xl border border-base-200 bg-base-100/80 px-4 py-3 text-sm outline-none
                transition focus:border-secondary/60 focus:ring-4 focus:ring-secondary/10
              "
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="
                w-full rounded-xl border border-base-200 bg-base-100/80 px-4 py-3 text-sm outline-none
                transition focus:border-secondary/60 focus:ring-4 focus:ring-secondary/10
              "
            />

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              className="
                w-full rounded-xl border border-base-200 bg-base-100/80 px-4 py-3 text-sm outline-none
                transition focus:border-secondary/60 focus:ring-4 focus:ring-secondary/10
              "
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your message"
              className="
                w-full rounded-xl border border-base-200 bg-base-100/80 px-4 py-3 text-sm outline-none
                transition focus:border-secondary/60 focus:ring-4 focus:ring-secondary/10
              "
            />

            <CommonButton
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold active:scale-[0.99]"
            >
              <FiSend />
              Send Message
            </CommonButton>
          </form>
        </div>
      </div>
    </section>
  </div>
</Container>

  );
};

export default Contact;
