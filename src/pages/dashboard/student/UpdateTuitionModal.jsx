import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const UpdateTuitionModal = ({ tuition, refetch, onClose }) => {
  const [districts, setDistricts] = useState([]);
  const axiosSecure = useAxiosSecure();

  const classes = ['Class-6', 'Class-7', 'Class-8', 'Class-9', 'Class-10', 'College 1st Year', 'College 2nd Year', 'Versity Admissoion'];
  const subjects = ['Arts', 'Commerce', 'Science'];

  const [form, setForm] = useState({
    title: '',
    classLevel: '',
    subject: '',
    location: '',
    budget: '',
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm({
      title: tuition.title,
      classLevel: tuition.classLevel,
      subject: tuition.subject,
      location: tuition.location,
      budget: tuition.budget,
    });
  }, [tuition]);

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdateBtn = async (tuition) => {
    try {
      const res = await axiosSecure.patch(`/tuitions/${tuition._id}`, form);
      if (res.data.modifiedCount > 0) {
        toast.success('Your tuition has been updated successfully.');
        await refetch();
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="modal-box max-w-xl bg-base-100 border border-base-300/60 shadow-[0_18px_45px_rgba(15,26,51,0.10)] rounded-2xl px-5 sm:px-7 py-5">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-base-content">Update Tuition Post</h3>
          <p className="text-[11px] sm:text-xs text-neutral mt-1">
            Adjust the details below. Your changes will be reviewed by Admin before tutors see the updated post.
          </p>
          <div className="mt-4 border-t border-base-300/70" />
        </div>

        {/* Form */}
        <div>
          <form className="space-y-4">
            {/* Title */}
            <div className="space-y-1.5">
              <legend className="text-xs sm:text-sm font-medium text-base-content">Title / Subject</legend>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="input input-bordered w-full h-10 sm:h-11 text-sm"
              />
              <p className="text-[10px] sm:text-[11px] text-neutral">Keep it short and clear so tutors instantly understand the request.</p>
            </div>

            {/* Class & Subject */}
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {/* Class */}
              <div className="space-y-1.5">
                <legend className="text-xs sm:text-sm font-medium text-base-content">Class</legend>
                <select
                  value={form.classLevel}
                  onChange={handleChange}
                  name="classLevel"
                  className="select select-bordered w-full h-10 sm:h-11 text-xs sm:text-sm"
                >
                  {classes.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <legend className="text-xs sm:text-sm font-medium text-base-content">Subject</legend>
                <select
                  value={form.subject}
                  onChange={handleChange}
                  name="subject"
                  className="select select-bordered w-full h-10 sm:h-11 text-xs sm:text-sm"
                >
                  {subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location & Budget */}
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {/* Location */}
              <div className="space-y-1.5">
                <legend className="text-xs sm:text-sm font-medium text-base-content">Location</legend>
                <select
                  value={form.location}
                  onChange={handleChange}
                  name="location"
                  className="select select-bordered w-full h-10 sm:h-11 text-xs sm:text-sm"
                >
                  {districts.map((d, i) => (
                    <option key={i}>{d.district}</option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div className="space-y-1.5">
                <legend className="text-xs sm:text-sm font-medium text-base-content">
                  Budget <span className="font-normal text-[10px] sm:text-[11px]">(per month)</span>
                </legend>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="input input-bordered flex-1 h-10 sm:h-11 text-sm placeholder:text-[11px] sm:placeholder:text-xs"
                  />
                </div>
                <p className="text-[10px] sm:text-[11px] text-neutral">Approximate monthly amount you’re willing to offer.</p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 mt-1 border-t border-base-300/70">
              <div className="flex flex-col sm:flex-row justify-end gap-2.5 sm:gap-3">
                <button
                  onClick={() => handleUpdateBtn(tuition)}
                  type="button"
                  className="btn btn-primary min-w-[130px] h-10 sm:h-11 normal-case text-sm"
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-ghost w-full sm:w-auto border border-base-300/80 bg-base-100 hover:bg-base-200 min-w-[110px] h-10 sm:h-11 normal-case text-sm text-base-content"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateTuitionModal;
