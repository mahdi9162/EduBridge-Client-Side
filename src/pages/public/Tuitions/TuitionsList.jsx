import React from 'react';
import Container from '../../../components/Container/Container';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../../services/axiosInstance';
import { Link, useNavigate } from 'react-router';
import useRole from '../../../hooks/useRole';
import Swal from 'sweetalert2';

const TuitionsList = () => {
  const { role, roleLoading } = useRole();
  const navigate = useNavigate();
  const { data: allTuitions = [] } = useQuery({
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

  if (roleLoading) return;

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

  return (
    <Container>
      <section className="my-10 lg:my-16 px-3 py-10 bg-base-200/40 rounded-4xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-base-content">Available Tuition Posts</h2>
          <p className="text-xs sm:text-sm text-neutral mt-2">
            Browse all active tuition opportunities and{' '}
            <span className="block md:inline-block">apply to the ones that match your expertise.</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 justify-center">
          {tuitions.map((tuition, i) => (
            <div
              key={i}
              className="bg-base-100 rounded-2xl shadow-[0_18px_45px_rgba(15,26,51,0.08)]
            border border-base-200 px-4 sm:px-5 py-4 sm:py-5
            transition-all duration-300 hover:shadow-[0_22px_55px_rgba(15,26,51,0.12)]
            hover:-translate-y-[3px]"
            >
              {/* Title + status */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-base-content line-clamp-1">{tuition.title}</h3>
                <span className="badge badge-soft badge-warning text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 capitalize">
                  {tuition.status}
                </span>
              </div>

              <p className='text-sm my-2'>
                <span className="font-semibold">Student Name:</span> <span>{tuition?.name}</span>
              </p>

              {/* stats */}
              <div className="flex flex-wrap gap-2 mt-3 text-[11px] sm:text-xs md:text-sm">
                <span className="bg-neutral/10 text-base-content px-2.5 py-1 rounded-md">{tuition.classLevel}</span>
                <span className="bg-neutral/10 text-base-content px-2.5 py-1 rounded-md">{tuition.subject}</span>
                <span className="bg-neutral/10 text-base-content px-2.5 py-1 rounded-md">{tuition.location}</span>
              </div>

              {/* Budget + button */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-secondary">
                  <span className="text-xl sm:text-2xl font-bold mr-1">{tuition.budget}</span>
                  <span className="align-middle text-lg sm:text-xl">&#x09F3;</span>
                  <span className="text-[10px] sm:text-[11px] md:text-xs text-neutral/90 font-medium ml-1">/ month</span>
                </p>

                <button
                  onClick={() => handleViewDetails(tuition._id)}
                  className="bg-primary text-white rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium shadow hover:opacity-90 transition cursor-pointer"
                >
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default TuitionsList;
