import React, { useEffect, useState } from 'react';
import Container from '../../../components/Container/Container';
import axios from 'axios';
import CommonButton from '../../../components/Buttons/CommonButton/CommonButton';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PostTuition = () => {
  const [districts, setDistricts] = useState([]);
  const axiosSecure = useAxiosSecure();
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

  const classes = ['Class-6', 'Class-7', 'Class-8', 'Class-9', 'Class-10', 'College 1st Year', 'College 2nd Year', 'Versity Admissoion'];
  const subjects = ['Arts', 'Commerce', 'Science'];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTuitionForm = (data) => {
    try {
      axiosSecure.post('/tuitions', data).then(() => {
        alert('Your tuition is posted!');
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-8 lg:py-10">
      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-[0_18px_45px_rgba(15,26,51,0.08)] border border-base-300/60">
        <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-2">
          {/* Header */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-base-content">Create Tuition Post</h3>
            <p className="text-xs sm:text-sm text-neutral">
              Fill the details below to post a new tuition request. Your post will be reviewed by Admin before tutors can see it.
            </p>
          </div>

          <div className="mt-5 border-t border-base-300/70" />
        </div>

        {/* Form */}
        <div className="px-5 sm:px-8 pb-6 sm:pb-8">
          <div className="max-w-3xl">
            <form onSubmit={handleSubmit(handleTuitionForm)} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <legend className="text-xs sm:text-sm font-medium text-base-content">Title / Subject</legend>
                <input
                  type="text"
                  name="title"
                  {...register('title', { required: 'Enter a Title / Subject' })}
                  placeholder="E.g. Math tutor needed for Class 8."
                  className="input input-bordered w-full h-11 sm:h-12 text-sm placeholder:text-[11px] sm:placeholder:text-xs lg:placeholder:text-sm"
                />
                {errors.title ? (
                  <p className="text-left sm:text-xs text-red-400/80">{errors.title.message}</p>
                ) : (
                  <p className="text-[11px] sm:text-xs text-neutral">Write a short, clear title so tutors understand what you need.</p>
                )}
              </div>

              {/* Class & Subject */}
              {/* Class */}
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <legend className="text-xs sm:text-sm font-medium text-base-content">Class</legend>
                  <select
                    name="classLevel"
                    {...register('classLevel', { required: true })}
                    defaultValue="Select your class"
                    className="select select-bordered w-full h-11 sm:h-12 text-xs sm:text-sm"
                  >
                    <option disabled={true}>Select your class</option>
                    {classes.map((c, i) => (
                      <option key={i}>{c}</option>
                    ))}
                  </select>
                </div>
                {/* Subject */}
                <div className="space-y-2">
                  <legend className="text-xs sm:text-sm font-medium text-base-content">Subject</legend>
                  <select
                    name="subject"
                    {...register('subject', { required: true })}
                    defaultValue="Select your subject"
                    className="select select-bordered w-full h-11 sm:h-12 text-xs sm:text-sm"
                  >
                    <option disabled={true}>Select your subject</option>
                    {subjects.map((s, i) => (
                      <option key={i}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Location & Budget */}
              {/* Location */}
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <legend className="text-xs sm:text-sm font-medium text-base-content">Location</legend>
                  <select
                    name="location"
                    {...register('location', { required: true })}
                    defaultValue="Select your location"
                    className="select select-bordered w-full h-11 sm:h-12 text-xs sm:text-sm"
                  >
                    <option disabled={true}>Select your location</option>
                    {districts.map((d, i) => (
                      <option key={i}>{d.district}</option>
                    ))}
                  </select>
                </div>
                {/* Budget */}
                <div className="space-y-2">
                  <legend className="text-xs sm:text-sm font-medium text-base-content">
                    Budget <span className="font-normal text-[11px] sm:text-xs">(per month)</span>
                  </legend>
                  <input
                    type="number"
                    name="budget"
                    {...register('budget', { required: true })}
                    placeholder="E.g. 5000"
                    className="input input-bordered w-full h-11 sm:h-12 text-sm placeholder:text-[11px] sm:placeholder:text-xs lg:placeholder:text-sm"
                  />
                  <p className="text-[11px] sm:text-xs text-neutral">Approximate monthly budget. Tutor will see this amount.</p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 mt-2 border-t border-base-300/70">
                <div className="flex flex-col sm:flex-row justify-end gap-3">
                  <CommonButton className="btn btn-primary min-w-[130px] h-11 sm:h-10 normal-case text-sm">Post Tuition</CommonButton>
                  <button
                    type="button"
                    className="btn btn-ghost border border-base-300/80 bg-base-100 hover:bg-base-200 min-w-[110px] h-11 sm:h-10 normal-case text-sm text-base-content"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostTuition;
