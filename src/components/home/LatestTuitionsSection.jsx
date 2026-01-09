import { Link, useNavigate } from 'react-router';
import Container from '../Container/Container';
import axiosInstance from '../../services/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useRole from '../../hooks/useRole';
import FullScreenLoader from '../Loading/FullScreenLoader';
import CommonButton from '../Buttons/CommonButton/CommonButton';
import Btn from '../Buttons/Btn/btn';

const LatestTuitionsSection = () => {
  const { role, roleLoading } = useRole();
  const navigate = useNavigate();

  const { isLoading: tuitionsLoading, data: allTuitions = [] } = useQuery({
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

  if (roleLoading || tuitionsLoading) {
    return <FullScreenLoader></FullScreenLoader>;
  }

  const handleViewDetailsBtn = (id) => {
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

  const approvedTuitions = allTuitions.filter((t) => t.postStatus === 'approved');

  return (
    <Container>
      <section className="bg-base-200/40 px-3 md:px-10 rounded-4xl my-10 lg:my-16">
        <div className="py-12">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-base-content">Latest Tuition Posts</h2>
            <p className="mt-2 text-xs md:text-base text-neutral">Recently posted tuition requests from students</p>
          </div>

          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card */}
            {approvedTuitions.map((tuition, i) => (
              <div key={i} className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <h3 className="font-semibold text-base-content">{tuition.title}</h3>
                <p className="mt-2 text-sm text-neutral">Class: {tuition.classLevel}</p>
                <p className="mt-1 text-sm text-neutral">Location: {tuition.location}</p>
                <p className="mt-1 text-sm text-neutral">Budget: ৳ {tuition.budget} / month</p>

                <CommonButton
                  onClick={() => handleViewDetailsBtn(tuition._id)}
                  className="mt-4 inline-block w-full text-center rounded-xl py-2 text-sm font-semibold"
                >
                  View Details
                </CommonButton>
              </div>
            ))}
          </div>

          {/* cta */}
          <div className="mt-8 text-center">
            <Btn className="inline-block rounded-xl px-5 py-2 text-sm font-semibold">
              <Link to="/tuitions">See All Tuition Posts</Link>
            </Btn>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default LatestTuitionsSection;
