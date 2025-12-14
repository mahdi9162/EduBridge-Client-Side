import React, { useEffect, useState } from 'react';

const UpdateUserInfoModal = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    classLevel: '',
    teachingClass: '',
    subject: '',
    userType: 'student',
  });

  useEffect(() => {
    if (!user) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormData({
      name: user?.name || '',
      phone: user?.phone || '',
      classLevel: user?.classLevel || '',
      teachingClass: user?.teachingClass || '',
      subject: user?.subject || '',
      userType: user?.userType || 'student',
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(formData);
    }
  };

  return (
    // max-h added
    <div className="modal-box max-w-2xl p-0 overflow-hidden max-h-[85vh]">
      {/* Header */}
      <div className="px-6 sm:px-8 py-5 bg-base-200 border-b border-base-300">
        <h3 className="text-lg sm:text-xl font-semibold text-base-content">Update User Info</h3>
        <p className="text-xs sm:text-sm text-neutral mt-1">Edit only the fields you need. Email & UID are read-only.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col">
        {/* Body  */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto max-h-[60vh]">
          {/* Top info (read-only) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-base-100 border border-base-300 rounded-xl p-3">
              <p className="text-[11px] text-neutral">Email (read-only)</p>
              <p className="text-sm font-medium text-base-content break-all">{user?.email || '-'}</p>
            </div>

            <div className="bg-base-100 border border-base-300 rounded-xl p-3">
              <p className="text-[11px] text-neutral">Firebase UID (read-only)</p>
              <p className="text-sm font-medium text-base-content break-all">{user?.firebaseUID || '-'}</p>
            </div>
          </div>

          {/* Input fields */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base-content font-medium">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="input input-bordered w-full bg-base-100 border-base-300 focus:border-secondary"
              />
            </div>

            {/* Phone */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base-content font-medium">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01XXXXXXXXX"
                className="input input-bordered w-full bg-base-100 border-base-300 focus:border-secondary"
              />
            </div>

            {/* Subject */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base-content font-medium">Subject</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Math, Physics"
                className="input input-bordered w-full bg-base-100 border-base-300 focus:border-secondary"
              />
            </div>

            {/* Teaching Class */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base-content font-medium">Teaching Class</span>
              </label>
              <input
                type="text"
                name="teachingClass"
                value={formData.teachingClass}
                onChange={handleChange}
                placeholder="e.g. Varsity Admission"
                className="input input-bordered w-full bg-base-100 border-base-300 focus:border-secondary"
              />
            </div>

            {/* Class Level */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base-content font-medium">Class Level</span>
              </label>
              <input
                type="text"
                name="classLevel"
                value={formData.classLevel}
                onChange={handleChange}
                placeholder="e.g. Class-10"
                className="input input-bordered w-full bg-base-100 border-base-300 focus:border-secondary"
              />
            </div>

            {/* Role */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base-content font-medium">Role</span>
              </label>
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="select select-bordered w-full bg-base-100 border-base-300 focus:border-secondary"
              >
                <option value="student">student</option>
                <option value="teacher">teacher</option>
                <option value="admin">admin</option>
              </select>

              <p className="mt-1 text-[11px] text-neutral">Role change is powerful — be careful with “admin”.</p>
            </div>
          </div>
        </div>

        {/*  Footer */}
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

export default UpdateUserInfoModal;
