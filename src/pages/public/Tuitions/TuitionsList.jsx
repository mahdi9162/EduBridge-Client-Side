import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../../services/axiosInstance';
import { Link, useNavigate } from 'react-router';
import useRole from '../../../hooks/useRole';
import Swal from 'sweetalert2';
import FullScreenLoader from '../../../components/Loading/FullScreenLoader';
import CommonButton from '../../../components/Buttons/CommonButton/CommonButton';
import { IoIosSearch } from 'react-icons/io';

const TuitionsList = () => {
  const [searchValue, setSearchValue] = useState('');
  const { role, roleLoading } = useRole();
  const navigate = useNavigate();
  const { data: allTuitions = [], isLoading: tuitionLoading } = useQuery({
    queryKey: ['all-tuitions'],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get('/all-tuitions');
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (roleLoading || tuitionLoading) return <FullScreenLoader></FullScreenLoader>;

  const handleViewDetails = (id) => {
    if (role !== 'teacher') {
      Swal.fire({
        icon: 'error',
        title: 'Access Denied',
        text: 'Only tutors can view tuition details.',
        confirmButtonText: 'Okay',
      });

      return;
    }
    navigate(`/tuition-details/${id}`);
  };

  const tuitions = allTuitions.filter((tuition) => tuition.postStatus === 'approved');

    const filteredTuitions = (tuitions || []).filter((tuition) => (tuition?.title || '').toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Container>
      <section className="
      relative my-10 lg:my-16 overflow-hidden
      rounded-3xl bg-base-200/35
      border border-base-200/60
      px-4 md:px-10 py-10
      shadow-[0_12px_40px_rgba(15,26,51,0.06)]
      backdrop-blur
    "
      >
        {/* subtle glow */}
        <div className="
        pointer-events-none absolute -top-28 left-1/2 h-56 w-[520px] -translate-x-1/2
        rounded-full blur-3xl opacity-70
        bg-[radial-gradient(circle,rgba(36,76,152,0.14),transparent_60%)]
      "
        />

        {/* Section Header */}
        {/* Section Header + Search (TutorsList style) */}
        <div className="relative mb-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* LEFT */}
            <div className="text-center sm:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-base-200 bg-base-100/70 px-4 py-1 text-xs font-semibold text-neutral backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-primary/70" />
                Active Opportunities
              </p>

              <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-base-content">
                Available Tuition Posts
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-neutral">
                Browse all active tuition opportunities and{' '}
                <span className="block md:inline-block">apply to the ones that match your expertise.</span>
              </p>
            </div>

            {/* right: search */}
            <div className="relative w-full sm:w-80 h-12">
              <IoIosSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral/70 z-10 pointer-events-none" />

              <input
                id="tuition-search"
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                placeholder=" "
                className=" peer w-full h-12 rounded-xl bg-base-100/90 border border-base-200 pl-10 pr-4 text-sm text-base-content outline-none transition focus:border-primary/40 focus:shadow-[0_12px_28px_rgba(15,26,51,0.10)]"
              />

              <label
                htmlFor="tuition-search"
                className="absolute left-9 top-1/2 -translate-y-1/2 px-2 text-sm text-neutral bg-base-100/95 transition-all duration-150 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-primary"
              >
                Search by Subject
              </label>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTuitions.map((tuition) => (
            <div
              key={tuition._id}
              className="
        group relative rounded-2xl  border border-[#e3e9f3] bg-linear-to-b from-[#ffffff] via-[#f6f9ff] to-[#eaf0fb] p-5 shadow-[0_10px_28px_rgba(15,26,51,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,26,51,0.14)]
      "
            >
              {/* top row */}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="truncate text-base md:text-[17px] font-bold text-base-content tracking-wide">{tuition.title.toUpperCase()}</h3>
                  <p className="mt-1 text-sm text-neutral">
                    <span className="font-semibold text-base-content">Student:</span> {tuition?.name}
                  </p>
                </div>

                {/* status */}
                <span
                  className="
            shrink-0 rounded-full px-3 py-1 text-xs font-semibold
            bg-warning/10 text-warning border border-warning/20
          "
                >
                  {tuition.status}
                </span>
              </div>

              {/* chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-lg bg-base-200/60 px-3 py-1 text-xs font-semibold text-base-content">{tuition.classLevel}</span>
                <span className="rounded-lg bg-base-200/60 px-3 py-1 text-xs font-semibold text-base-content">{tuition.subject}</span>
                <span className="rounded-lg bg-base-200/60 px-3 py-1 text-xs font-semibold text-base-content">{tuition.location}</span>
              </div>

              <div className="my-5 h-px w-full bg-base-200/70" />

              {/* bottom */}
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-neutral">Monthly Budget</p>
                  <p className="mt-1 text-2xl font-extrabold text-secondary leading-none">
                    ৳ {tuition.budget}
                    <span className="ml-1 text-xs font-semibold text-neutral">/ month</span>
                  </p>
                </div>

                <CommonButton
                  onClick={() => handleViewDetails(tuition._id)}
                  className="
            shrink-0 rounded-xl px-4 py-2 text-sm font-semibold
            shadow-sm hover:shadow-md transition
          "
                >
                  View details
                </CommonButton>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default TuitionsList;
