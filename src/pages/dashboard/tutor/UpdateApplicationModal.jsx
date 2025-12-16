import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const UpdateApplicationModal = ({ application, onClose, onSave }) => {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    tutorName: '',
    tutorEmail: '',
    qualification: '',
    experience: '',
    expectedSalary: '',
  });

  useEffect(() => {
    if (!application) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormData({
      tutorName: application?.tutorName || '',
      tutorEmail: application?.tutorEmail || '',
      qualification: application?.qualification || '',
      experience: application?.experience || '',
      expectedSalary: application?.expectedSalary || '',
    });
  }, [application]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosSecure.patch(`/application/${application?._id}`, formData);
      if (onSave) onSave(formData);
      alert('Successfully updated your application!');
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal-box max-w-2xl p-0 overflow-hidden max-h-[85vh] bg-base-100">
      {/* Header */}
      <div className="px-6 sm:px-8 py-5 bg-base-200 border-b border-base-300">
        <h3 className="text-lg sm:text-xl font-semibold text-base-content">Update Application</h3>
        <p className="text-xs sm:text-sm text-neutral mt-1">Update your application info.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col">
        {/* Body */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto max-h-[60vh]">
          {/* Input fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Tutor Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base-content font-medium">Tutor Name</span>
              </label>
              <input
                type="text"
                name="tutorName"
                value={formData.tutorName}
                onChange={handleChange}
                readOnly
                className="input input-bordered w-full bg-base-100 border-base-300 focus:border-secondary"
              />
            </div>

            {/* Tutor Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base-content font-medium">Tutor Email</span>
              </label>
              <input
                type="email"
                name="tutorEmail"
                value={formData.tutorEmail}
                onChange={handleChange}
                readOnly
                className="input input-bordered w-full bg-base-100 border-base-300 focus:border-secondary"
              />
            </div>

            {/* Qualification */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base-content font-medium">Qualification</span>
              </label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="e.g. BSc in English"
                className="input input-bordered w-full bg-base-100 border-base-300 focus:border-secondary"
              />
            </div>

            {/* Experience */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base-content font-medium">Experience</span>
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="select select-bordered w-full bg-base-100 border-base-300 focus:border-secondary"
              >
                <option value="">Select your experience</option>
                <option value="0-1 years">0-1 years</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
                <option value="10+ years">10+ years</option>
              </select>
            </div>

            {/* Expected Salary */}
            <div className="form-control sm:col-span-2">
              <label className="label">
                <span className="label-text text-base-content font-medium">Expected Salary (per month)</span>
              </label>
              <input
                type="number"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleChange}
                placeholder="e.g. 8000 (optional)"
                className="input input-bordered w-full bg-base-100 border-base-300 focus:border-secondary"
              />
              <p className="mt-1 text-[11px] text-neutral">If you leave it blank, it can be treated as “same as student budget”.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-base-300 bg-base-100 sticky bottom-0">
          <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost w-full sm:w-auto border border-base-300 bg-base-100 hover:bg-base-200 text-base-content"
            >
              Cancel
            </button>

            <button type="submit" className="btn w-full sm:w-auto bg-primary text-primary-content hover:bg-secondary border-none">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateApplicationModal;
