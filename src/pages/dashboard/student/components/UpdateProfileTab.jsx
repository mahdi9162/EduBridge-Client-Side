import React, { useEffect, useState } from 'react';
import CommonButton from '../../../../components/Buttons/CommonButton/CommonButton';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UpdateProfileTab = ({ userDb }) => {
  const axiosSecure = useAxiosSecure();

  const [form, setForm] = useState({
    name: userDb?.name || '',
    phone: userDb?.phone || '',
    classLevel: userDb?.classLevel || '',
    subject: userDb?.subject || '',
    location: userDb?.location || '',
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
    });
  };

  const handleUpdateBtn = async () => {
    if (!form.name || !form.phone || !form.classLevel || !form.subject || !form.location) {
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
          <p className="mt-1 text-sm text-neutral/80">This information will be visible on your account.</p>
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
                form.name.length === 0 && 'border-2 border-red-500'
              }`}
              placeholder="Your name"
            />
            <p className="text-[11px] text-neutral/50">This will appear on your profile.</p>
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
            <p className="text-[11px] text-neutral/50">Email can’t be changed.</p>
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
                form.phone.length === 0 && 'border-2 border-red-500'
              }`}
              placeholder="01XXXXXXXXX"
            />
            <p className="text-[11px] text-neutral/50">Used for urgent updates.</p>
          </div>

          {/* Class Level */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#0f1a33]/70">Class level</label>
            <input
              name="classLevel"
              value={form.classLevel}
              onChange={onChange}
              className={`input w-full rounded-2xl bg-white border border-base-200 focus:border-[#0f1a33]/30 focus:outline-none focus:ring-2 focus:ring-[#0f1a33]/10 ${
                form.classLevel.length === 0 && 'border-2 border-red-500'
              }`}
              placeholder="e.g. Varsity Admission"
            />
            <p className="text-[11px] text-neutral/50">Helps tutors filter properly.</p>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#0f1a33]/70">Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={onChange}
              className={`input w-full rounded-2xl bg-white border border-base-200 focus:border-[#0f1a33]/30 focus:outline-none focus:ring-2 focus:ring-[#0f1a33]/10 ${
                form.subject.length === 0 && 'border-2 border-red-500'
              }`}
              placeholder="e.g. Science"
            />
            <p className="text-[11px] text-neutral/50">Primary subject you need help with.</p>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#0f1a33]/70">Location</label>
            <input
              name="location"
              value={form.location}
              onChange={onChange}
              className={`input w-full rounded-2xl bg-white border border-base-200 focus:border-[#0f1a33]/30 focus:outline-none focus:ring-2 focus:ring-[#0f1a33]/10 ${
                form.location.length === 0 && 'border-2 border-red-500'
              }`}
              placeholder="City"
            />
            <p className="text-[11px] text-neutral/50">Optional, but recommended.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-7 h-px w-full bg-base-200/70" />

        {/* Actions */}
        <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral/80">
            Tip: Use <span className="font-semibold text-[#0f1a33] underline underline-offset-2">Reset</span> to restore last saved data.
          </p>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              className="rounded-full border border-base-200 bg-white px-5 py-2 text-sm font-medium text-[#0f1a33] hover:bg-red-400 hover:text-white duration-700 transition-all cursor-pointer"
              onClick={handleReset}
            >
              Reset
            </button>

            <CommonButton type="button" className="rounded-full px-6 py-2 text-sm font-medium shadow-md" onClick={handleUpdateBtn}>
              Save Profile
            </CommonButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileTab;
