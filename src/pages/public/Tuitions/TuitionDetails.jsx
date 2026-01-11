import React, { useEffect } from 'react';
import Container from '../../../components/Container/Container';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { formatDate, formatTime } from '../../../utils/date';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import FullScreenLoader from '../../../components/Loading/FullScreenLoader';
import CommonButton from '../../../components/Buttons/CommonButton/CommonButton';

const TuitionDetails = () => {
  const { user, loading: authLoading } = useAuth();
  const experienceLevels = ['Less than 1 year', '1-2 years', '2-3 years', '3-5 years', '5-7 years', '7-10 years', '10+ years'];

  const axiosSecure = useAxiosSecure();

  const { id } = useParams();

  //   Get Tuition details
  const { data: tuitionDetails = [], isLoading: tuitionDetailsLoading } = useQuery({
    queryKey: ['tuition-details', id],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`tuition-details/${id}`);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const { budget, classLevel, createdAt, location, status, subject, title, name } = tuitionDetails;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      setValue('tutorName', user.displayName);
      setValue('tutorEmail', user.email);
    }
  }, [setValue, user]);

  const handleTutorApplyForm = async (data) => {
    try {
      // API call
      await axiosSecure.post(`/applications/${id}`, data);

      // Success Message
      toast.success('Application sent successfully.');
    } catch (error) {
      // Error Handling
      if (error.response && error.response.status === 409) {
        toast.error('You have already applied for this tuition!');
      } else {
        toast.error('Something went wrong. Please try again.');
        console.error(error);
      }
    }
  };

  if (authLoading || tuitionDetailsLoading) {
    return <FullScreenLoader></FullScreenLoader>;
  }

  return (
    <Container>
      <section className="relative my-10 md:my-16 overflow-hidden rounded-3xl border border-base-200/60 bg-base-200/50 px-3 py-10 sm:px-6 lg:px-0">
        {/* soft brand wash */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(36,76,152,0.10),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(15,26,51,0.08),transparent_55%)]" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle,rgba(36,76,152,0.22),transparent_62%)]" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full blur-3xl opacity-55 bg-[radial-gradient(circle,rgba(15,26,51,0.18),transparent_65%)]" />

        <div className="relative mx-auto max-w-6xl">
          {/* Header */}
          <div className="mx-auto mb-8 sm:mb-10 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-base-200 bg-base-100/70 px-3 py-2 text-[11px] sm:text-xs text-neutral backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary/70" />
              Review the full tuition requirements before applying.
            </div>

            <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-base-content">Tuition Details</h3>

            <p className="mt-2 text-xs sm:text-sm text-neutral/70">Make sure everything matches your availability and expertise.</p>
          </div>

          {/* Main grid */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
            {/* Left: details */}
            <div className="rounded-3xl border border-base-200/70 bg-base-100/80 backdrop-blur shadow-[0_18px_55px_rgba(15,26,51,0.08)]">
              {/* card header */}
              <div className="p-5 sm:p-6 lg:p-8">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-base-content leading-snug">{title}</h2>

                    {/* chips */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-accent/70 px-3 py-1 text-[11px] sm:text-xs font-medium text-base-content">
                        {classLevel}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-accent/70 px-3 py-1 text-[11px] sm:text-xs font-medium text-base-content">
                        {subject}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-base-200/80 px-3 py-1 text-[11px] sm:text-xs font-medium text-base-content ring-1 ring-base-300/60">
                        Posted {formatDate(createdAt)}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex shrink-0 items-center rounded-full bg-warning/15 px-3 py-1 text-[10px] sm:text-xs font-semibold text-warning ring-1 ring-warning/25">
                    {status}
                  </span>
                </div>

                {/* budget highlight */}
                <div className="mt-6 rounded-2xl border border-base-200/70 bg-base-100 p-4 sm:p-5 shadow-[0_10px_30px_rgba(15,26,51,0.06)]">
                  <p className="text-[11px] sm:text-xs text-neutral/70">Budget</p>
                  <p className="mt-1 text-xl sm:text-2xl font-bold text-secondary">
                    {budget} ৳ <span className="text-xs sm:text-sm font-semibold text-neutral/70">/ month</span>
                  </p>
                </div>
              </div>

              {/* divider */}
              <div className="h-px w-full bg-base-200/70" />

              {/* info grid */}
              <div className="p-5 sm:p-6 lg:p-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-base-200/70 bg-base-100/70 p-4">
                    <p className="text-[11px] sm:text-xs text-neutral/70">Student Name</p>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-base-content">{name}</p>
                  </div>

                  <div className="rounded-2xl border border-base-200/70 bg-base-100/70 p-4">
                    <p className="text-[11px] sm:text-xs text-neutral/70">Location</p>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-base-content">{location}</p>
                  </div>

                  <div className="rounded-2xl border border-base-200/70 bg-base-100/70 p-4">
                    <p className="text-[11px] sm:text-xs text-neutral/70">Posted Time</p>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-base-content">{formatTime(createdAt)}</p>
                  </div>

                  <div className="rounded-2xl border border-base-200/70 bg-base-100/70 p-4">
                    <p className="text-[11px] sm:text-xs text-neutral/70">Category</p>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-base-content">
                      {subject} • {classLevel}
                    </p>
                  </div>
                </div>

                {/* notes */}
                <div className="mt-6 rounded-2xl border border-base-200/70 bg-base-100/70 p-4 sm:p-5">
                  <p className="text-sm sm:text-base font-semibold text-base-content">Additional Notes / Requirements</p>
                  <p className="mt-2 text-xs sm:text-sm text-neutral/80 leading-relaxed">
                    Looking for an experienced tutor who can explain complex concepts clearly. Must have a strong foundation in calculus and
                    algebra. Weekly progress reports are required.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: apply form */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-3xl border border-base-200/70 bg-base-100/85 backdrop-blur shadow-[0_18px_55px_rgba(15,26,51,0.08)]">
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-base-content">Apply for this tuition</h3>
                      <p className="mt-1 text-xs sm:text-sm text-neutral/70">Keep it short and clear — students respond faster.</p>
                    </div>

                    <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-semibold bg-base-200/70 text-base-content ring-1 ring-base-300/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" />
                      Secure form
                    </span>
                  </div>

                  <form onSubmit={handleSubmit(handleTutorApplyForm)} className="mt-6 space-y-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] sm:text-sm font-medium text-neutral">Full Name</label>
                      <input
                        type="text"
                        name="tutorName"
                        {...register('tutorName')}
                        readOnly
                        className="input input-bordered w-full rounded-2xl bg-base-100 border-base-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-secondary/35 "
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] sm:text-sm font-medium text-neutral">Email</label>
                      <input
                        type="email"
                        name="tutorEmail"
                        {...register('tutorEmail')}
                        readOnly
                        className="input input-bordered w-full rounded-2xl bg-base-100 border-base-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-secondary/35"
                      />
                    </div>

                    {/* Qualification */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] sm:text-sm font-medium text-neutral">Qualifications</label>
                      <input
                        type="text"
                        name="qualification"
                        {...register('qualification', { required: 'Please, Enter your qualification!' })}
                        placeholder="e.g. B.Sc in Physics"
                        className="input input-bordered w-full rounded-2xl bg-base-100 border-base-300 text-sm sm:text-base placeholder:text-[11px] sm:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-secondary/35"
                      />
                      {errors.qualification && <p className="mt-1 text-xs sm:text-sm text-red-400/80">{errors.qualification.message}</p>}
                    </div>

                    {/* Experience */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] sm:text-sm font-medium text-neutral">Experience</label>
                      <select
                        name="experience"
                        {...register('experience', { required: 'Please, Select your experience!' })}
                        defaultValue=""
                        className="select select-bordered w-full rounded-2xl bg-base-100 border-base-300 text-[12px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-secondary/35 cursor-pointer"
                      >
                        <option value="" disabled>
                          Select your experience
                        </option>
                        {experienceLevels.map((level, i) => (
                          <option key={i}>{level}</option>
                        ))}
                      </select>
                    </div>

                    {/* Expected Salary */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] sm:text-sm font-medium text-neutral">
                        Expected Salary <span className="font-normal text-[10px] sm:text-xs">(per month)</span>
                      </label>
                      <input
                        type="number"
                        name="expectedSalary"
                        {...register('expectedSalary')}
                        placeholder="e.g. 5000 (optional)"
                        className="input input-bordered w-full rounded-2xl bg-base-100 border-base-300 h-11 sm:h-12 text-sm sm:text-base placeholder:text-[11px] sm:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-secondary/35"
                      />
                      <p className="text-[11px] sm:text-xs text-neutral/80">
                        If the offered budget meets your expectations, you may leave this field blank.
                      </p>
                    </div>

                    {/* Submit */}
                    <CommonButton type="submit" className="mt-2 w-full rounded-full py-2.5 sm:py-3 text-sm sm:text-base font-semibold">
                      Submit Application
                    </CommonButton>
                  </form>
                </div>

                {/* tiny footer note */}
                <div className="border-t border-base-200/70 px-5 sm:px-6 lg:px-8 py-4">
                  <p className="text-[10px] sm:text-xs text-neutral/70 leading-relaxed">
                    Tip: A short qualification + clear experience level increases acceptance rate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TuitionDetails;
