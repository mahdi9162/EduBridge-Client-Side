import React, { useEffect, useState } from 'react';
import CommonButton from '../../../../components/Buttons/CommonButton/CommonButton';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useRole from '../../../../hooks/useRole';
import axios from 'axios';

const UpdateProfileTab = ({ userDb, userDbRefetch }) => {
  const [districts, setDistricts] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { role } = useRole();

  const phoneRegex = /^01(3|4|5|7|8|9)\d{8}$/;

  const classes = ['Class-6', 'Class-7', 'Class-8', 'Class-9', 'Class-10', 'College 1st Year', 'College 2nd Year', 'Versity Admissoion'];
  const subjects = ['Accounting', 'Biology', 'Chemistry', 'English', 'Math', 'Physics'];

  useEffect(() => {
    axios
      .get('/districts.json')
      .then((res) => {
        setDistricts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [form, setForm] = useState({
    name: userDb?.name || '',
    phone: userDb?.phone || '',
    classLevel: userDb?.classLevel || '',
    subject: userDb?.subject || '',
    location: userDb?.location || '',
    teachingClass: userDb?.teachingClass || '',
  });

  useEffect(() => {
    if (!userDb) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm({
      name: userDb?.name || '',
      phone: userDb?.phone || '',
      classLevel: userDb?.classLevel || '',
      subject: userDb?.subject || '',
      location: userDb?.location || '',
      teachingClass: userDb?.teachingClass || '',
    });
  }, [userDb]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  // Reset Button
  const handleReset = () => {
    setForm({
      name: userDb?.name || '',
      phone: userDb?.phone || '',
      classLevel: userDb?.classLevel || '',
      subject: userDb?.subject || '',
      location: userDb?.location || '',
      teachingClass: userDb?.teachingClass || '',
    });
  };

  const handleUpdateBtn = async () => {
    // phone validation
    if (!phoneRegex.test(form.phone)) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid phone number',
        text: 'Please enter a valid Bangladeshi phone number (01XXXXXXXXX)',
        confirmButtonColor: '#0f1a33',
      });
      return;
    }

    // role-based required fields
    const missingStudent = role === 'student' && (!form.name || !form.phone || !form.classLevel || !form.subject || !form.location);

    const missingTutor = role !== 'student' && (!form.name || !form.phone || !form.teachingClass || !form.subject || !form.location);

    if (missingStudent || missingTutor) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing fields',
        text: 'Please fill all required fields before saving.',
        confirmButtonColor: '#0f1a33',
      });
      return;
    }

    try {
      const result = await Swal.fire({
        title: 'Save changes?',
        text: 'This will update your profile information.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, save it',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#0f1a33',
        cancelButtonColor: '#d33',
      });

      if (!result.isConfirmed) return;

      await axiosSecure.patch('/user/me', form);

      Swal.fire({
        title: 'Updated!',
        text: 'Your profile has been updated successfully.',
        icon: 'success',
        confirmButtonColor: '#0f1a33',
      });
      userDbRefetch();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Oops!',
        text: error?.response?.data?.message || 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonColor: '#0f1a33',
      });
    }
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#0f1a33]">Update Your Profile</h2>
          <p className="mt-1 text-xs md:text-sm text-neutral/80">This information will be visible on your account.</p>
        </div>
      </div>

      {/* Single Card */}
      <div className="mt-6 rounded-3xl border border-base-200 bg-base-100/70 p-5 md:p-7 shadow-sm">
        {/* Card top row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[#0f1a33]">Basic information</p>
            <p className="mt-1 text-xs text-neutral/60">Make sure everything is correct for better matching.</p>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-base-200 bg-white px-3 py-1 text-[11px] font-medium text-neutral/70">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Changes will be saved
          </span>
        </div>

        {/* Form */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#0f1a33]/70">Full name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              className={`input w-full rounded-2xl bg-white border border-base-200 focus:border-[#0f1a33]/30 focus:outline-none focus:ring-2 focus:ring-[#0f1a33]/10 ${
                form.name?.length === 0 && 'border-2 border-red-500'
              }`}
              placeholder="Your name"
            />
            <p className="text-[11px] text-neutral/70">This will appear on your profile.</p>
          </div>

          {/* Email (readonly) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#0f1a33]/70">Email</label>
            <input
              name="email"
              value={userDb?.email || ''}
              className="input w-full rounded-2xl bg-base-200/40 border border-base-200 text-neutral/70 cursor-not-allowed"
              type="email"
              readOnly
            />
            <p className="text-[11px] text-neutral/70">Email can’t be changed.</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#0f1a33]/70">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={onChange}
              className={`input w-full rounded-2xl bg-white border border-base-200 focus:border-[#0f1a33]/30 focus:outline-none focus:ring-2 focus:ring-[#0f1a33]/10 ${
                form.phone?.length === 0 && 'border-2 border-red-500'
              }`}
              placeholder="01XXXXXXXXX"
            />
            <p className="text-[11px] text-neutral/70">Used for urgent updates.</p>
          </div>

          {role === 'student' ? (
            <>
              {/* Class Level */}
              <div className="flex flex-col gap-1.5">
                <legend className="text-xs font-medium text-[#0f1a33]/70">Class</legend>
                <select
                  name="classLevel"
                  onChange={onChange}
                  defaultValue={form.classLevel}
                  className="select w-full rounded-2xl bg-white border border-base-200"
                >
                  <option>{form.classLevel}</option>
                  {classes.map((c, i) => (
                    <option key={i}>{c}</option>
                  ))}
                </select>
              </div>
            </>
          ) : (
            <>
              {/* Teaching Class */}
              <div className="flex flex-col gap-1.5">
                <legend className="text-xs font-medium text-[#0f1a33]/70">Teaching Level</legend>
                <select
                  name="teachingClass"
                  onChange={onChange}
                  defaultValue={form.teachingClass}
                  className="select w-full rounded-2xl bg-white border border-base-200"
                >
                  <option>{form.teachingClass}</option>
                  {classes.map((c, i) => (
                    <option key={i}>{c}</option>
                  ))}
                </select>
                <p className="text-[11px] text-neutral/70">Helps Student filter properly.</p>
              </div>
            </>
          )}

          {/* Subject */}
          <div className="flex flex-col gap-1.5">
            <legend className="text-xs font-medium text-[#0f1a33]/70">Subject</legend>
            <select
              name="subject"
              onChange={onChange}
              defaultValue={form.subject}
              className="select w-full rounded-2xl bg-white border border-base-200"
            >
              <option>{form.subject}</option>
              {subjects.map((s, i) => (
                <option key={i}>{s}</option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1.5">
            <legend className="text-xs font-medium text-[#0f1a33]/70">Location</legend>
            <select
              name="location"
              onChange={onChange}
              defaultValue={form.location}
              className="select w-full rounded-2xl bg-white border border-base-200"
            >
              <option>{form.location}</option>
              {districts.map((d, i) => (
                <option key={i}>{d.district}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-7 h-px w-full bg-base-200/70" />

        {/* Actions */}
        <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral/70">
            Tip: Use <span className="font-semibold text-[#0f1a33] underline underline-offset-2">Reset</span> to restore last saved data.
          </p>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              className="rounded-full border border-base-200 bg-white px-5 py-2 text-xs md:text-sm font-medium text-[#0f1a33] hover:bg-red-400 hover:text-white duration-700 transition-all cursor-pointer"
              onClick={handleReset}
            >
              Reset
            </button>

            <CommonButton
              type="button"
              className="rounded-full px-6 py-2 text-xs md:text-sm font-medium shadow-md"
              onClick={handleUpdateBtn}
            >
              Save Profile
            </CommonButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileTab;
