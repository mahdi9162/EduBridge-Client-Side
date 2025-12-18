import React, { useState } from 'react';
import { Link } from 'react-router';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import Container from '../../../components/Container/Container';
import toast from 'react-hot-toast';

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
      <div className="bg-base-100 my-10 md:my-16 px-3">
        {/* header */}
        <section className="bg-base-200/60 rounded-3xl border border-base-300 px-4 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-3 py-2 text-xs md:text-sm text-neutral">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-base-200">
              <HiOutlineShieldCheck className="text-secondary text-base" />
            </span>
            We usually reply within 24 hours.
          </div>

          <h1 className="mt-5 text-xl md:text-3xl lg:text-5xl font-bold text-base-content leading-tight">
            Contact <span className="text-secondary">EduBridge</span>
          </h1>

          <p className="mt-3 max-w-2xl text-xs md::text-base text-neutral">
            Need help, want to partner, or have a question? Send a message and we’ll get back to you.
          </p>
        </section>

        {/* body */}
        <section className="py-10 md:py-14 lg:py-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
            {/* left info*/}
            <div className="space-y-4">
              <div className="rounded-3xl border border-base-300 bg-base-100 p-6">
                <div className="flex gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-base-200">
                    <FiMail />
                  </span>
                  <div>
                    <p className="font-semibold text-base-content">Email</p>
                    <p className="mt-1 text-xs md:text-sm text-neutral">hasanmahdi6060@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-base-300 bg-base-100 p-6">
                <div className="flex gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-base-200">
                    <FiMapPin />
                  </span>
                  <div>
                    <p className="font-semibold text-base-content">Location</p>
                    <p className="mt-1 text-xs md:text-sm text-neutral">Narsingdi, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-base-300 bg-base-100 p-6">
                <div className="flex gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-base-200">
                    <FiClock />
                  </span>
                  <div>
                    <p className="font-semibold text-base-content">Support Hours</p>
                    <p className="mt-1 text-xs md:text-sm text-neutral">Sat–Thu • 10:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-base-200/70 p-6">
                <p className="font-semibold text-base-content">Quick tip</p>
                <p className="mt-2 text-xs md:text-sm text-neutral">Don’t share phone numbers publicly. We keep sensitive info protected.</p>

                <div className="mt-4 flex flex-col gap-3 md:flex-row">
                  <Link
                    to="/tuitions"
                    className="rounded-xl bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-content hover:opacity-95 transition"
                  >
                    Browse Tuitions
                  </Link>

                  <Link
                    to="/tutors"
                    className="rounded-xl border border-base-300 bg-base-100 px-5 py-2.5 text-center text-sm font-semibold text-base-content hover:bg-base-200 transition"
                  >
                    Explore Tutors
                  </Link>
                </div>
              </div>
            </div>

            {/* right form */}
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-base-content">Send a message</h2>

              <form onSubmit={handleSendMsg} className="mt-6 space-y-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm outline-none focus:border-secondary"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm outline-none focus:border-secondary"
                />

                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm outline-none focus:border-secondary"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your message"
                  className="w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm outline-none focus:border-secondary"
                />

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-content hover:opacity-95 active:scale-[0.99] transition cursor-pointer"
                >
                  <FiSend />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Contact;
