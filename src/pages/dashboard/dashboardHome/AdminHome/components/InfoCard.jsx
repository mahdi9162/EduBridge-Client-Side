import React from 'react';
import { FaCheckCircle, FaDollarSign } from 'react-icons/fa';
import { HiOutlineClock, HiOutlineDocumentText } from 'react-icons/hi';

const InfoCard = ({ allTuitions, payments }) => {
  //  post stats
  const totalPost = allTuitions.length;
  const pendingTuitions = allTuitions.filter((tuition) => tuition.postStatus === 'pending').length;

  // payment stats
  const totalPayments = payments.length;
  const totalPaid = payments.reduce((sum, payment) => sum + Number(payment.amount), 0);

  return (
    <>
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
    </>
  );
};

export default InfoCard;
