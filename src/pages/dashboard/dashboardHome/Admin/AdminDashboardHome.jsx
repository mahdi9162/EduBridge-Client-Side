import React from 'react';
import Container from '../../../../components/Container/Container';
import AdminPieChart from './AdminPieChart';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import dashboardImg from '../../../../assets/adminDashboard.webp';
import { FaCheckCircle, FaDollarSign } from 'react-icons/fa';
import { HiOutlineClock, HiOutlineDocumentText } from 'react-icons/hi';

const AdminDashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: dbUsers } = useQuery({
    queryKey: ['dbUsers'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get('/users');
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const { data: payments = [] } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await axiosSecure.get('/payment-history');
      return res.data;
    },
  });

  const { data: allTuitions = [] } = useQuery({
    queryKey: ['allTuitions'],
    queryFn: async () => {
      const res = await axiosSecure.get('/tuitions');
      return res.data;
    },
  });

  //  post stats
  const totalPost = allTuitions.length;
  const pendingTuitions = allTuitions.filter((tuition) => tuition.postStatus === 'pending').length;

  // payment stats
  const totalPayments = payments.length;
  const totalPaid = payments.reduce((sum, payment) => sum + Number(payment.amount), 0);

  // user stats
  const totalUsers = dbUsers?.length;
  const teachers = dbUsers?.filter((user) => user.userType === 'teacher').length;
  const student = dbUsers?.filter((user) => user.userType === 'student').length;

  return (
    <Container>
      <section className="py-6 md:py-8 lg:py-10 px-3">
        {/* Dashboard Hero */}
        <div
          className="
        bg-base-200/80 border border-base-300 rounded-3xl
        px-4 md:px-6 lg:px-10 py-6 md:py-8
        flex flex-col-reverse lg:flex-row
        gap-6 md:gap-8 lg:gap-10
        items-center overflow-hidden
      "
        >
          {/* left div */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-base-content text-center md:text-left">
              Welcome back, Mahdi!
            </h2>

            <p className="mt-1 text-xs md:text-sm lg:text-base text-center md:text-left text-neutral max-w-xl">
              Here’s an overview of EduBridge platform performance
            </p>

            <div className="mt-5 h-[230px] md:w-[260px] md:h-60 flex justify-center lg:justify-start w-full">
              <div className="flex flex-col items-center">
                {/* chart */}
                <div className="shrink-0 w-[220px] h-[220px] md:w-60 md:h-60">
                  <AdminPieChart dbUsers={dbUsers} />
                </div>

                {/* mini breakdown */}
                <div className="mt-3 text-xs text-neutral text-center">
                  <span className="font-medium text-base-content">{totalUsers}</span> users •{' '}
                  <span className="font-medium text-base-content">{student}</span> students •{' '}
                  <span className="font-medium text-base-content">{teachers}</span> teachers
                </div>
              </div>
            </div>
          </div>

          {/* right div */}
          <figure className="w-full lg:w-1/2 rounded-2xl overflow-hidden bg-base-100 border border-base-300 shadow-sm">
            <img
              src={dashboardImg}
              alt="Dashboard illustration"
              className="w-full h-auto max-h-[220px] md:max-h-[340px] lg:max-h-[420px] object-contain"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        {/* Info Cards */}
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Card 1 */}
          <div className="dashboard-card">
            <div className="flex items-center gap-3 text-neutral">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FaDollarSign />
              </span>
              <h3 className="text-sm font-medium">Total Platform Earnings</h3>
            </div>
            <p className="mt-3 text-xl md:text-2xl ml-2 font-semibold text-base-content">{totalPaid}</p>
          </div>

          {/* Card 2 */}
          <div className="dashboard-card">
            <div className="flex items-center gap-3 text-neutral">
              <span className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success">
                <FaCheckCircle />
              </span>
              <h3 className="text-sm font-medium">Total Successful Payments</h3>
            </div>
            <p className="mt-3 text-xl md:text-2xl ml-2 font-semibold text-base-content">{totalPayments}</p>
          </div>

          {/* Card 3 */}
          <div className="dashboard-card">
            <div className="flex items-center gap-3 text-neutral">
              <span className="w-10 h-10 rounded-full bg-info/10 flex items-center justify-center text-info">
                <HiOutlineDocumentText />
              </span>
              <h3 className="text-sm font-medium">Total Posts</h3>
            </div>
            <p className="mt-3 text-xl md:text-2xl ml-2 font-semibold text-base-content">{totalPost}</p>
          </div>

          {/* Card 4 */}
          <div className="dashboard-card">
            <div className="flex items-center gap-3 text-neutral">
              <span className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center text-warning">
                <HiOutlineClock />
              </span>
              <h3 className="text-sm font-medium">Pending Posts</h3>
            </div>
            <p className="mt-3 text-xl md:text-2xl ml-2 font-semibold text-base-content">{pendingTuitions}</p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AdminDashboardHome;
