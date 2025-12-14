import React from 'react';
import Container from '../../../components/Container/Container';
import { FaUsersCog } from 'react-icons/fa';

const ManageUsers = () => {
  return (
    <Container>
      <section className="my-10 px-3">
        {/* Header */}
        <div className="bg-base-100 rounded-2xl shadow-[0_18px_45px_rgba(15,26,51,0.08)] border border-base-200 px-5 sm:px-8 py-4 sm:py-5 text-center w-full max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-10 rounded-full bg-accent/70 flex items-center justify-center text-secondary">
              <FaUsersCog />
            </span>

            <h3 className="text-xl sm:text-2xl font-semibold text-base-content">Manage Users</h3>
          </div>

          <p className="mt-1 text-xs sm:text-sm text-neutral">View details, edit info, change role, or delete accounts.</p>
        </div>

        {/* Table Card */}
        <div className="mt-6 bg-base-100 border border-base-200 rounded-2xl shadow-[0_18px_45px_rgba(15,26,51,0.06)]">
          {/* responsive wrapper */}
          <div className="rounded-2xl overflow-x-auto overflow-y-visible md:overflow-visible">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="text-base-content/80">
                  <th className="w-12 sm:w-14">
                    <label>No.</label>
                  </th>

                  <th className="min-w-60">User</th>

                  <th className="w-28 sm:w-32">Role</th>

                  <th className="w-36 sm:w-44">Joining Date</th>

                  <th className="w-36 sm:w-44 text-center ">Actions</th>
                </tr>
              </thead>

              <tbody>
                {/* row */}
                <tr className="hover:bg-base-200/60 transition-colors">
                  <th className="align-middle">
                    <label>1</label>
                  </th>

                  {/* User */}
                  <td className="align-middle">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-10 w-10 sm:h-12 sm:w-12 border border-base-300">
                          <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="User avatar" />
                        </div>
                      </div>

                      <div className="leading-tight ">
                        <div className="font-bold text-base-content">Hart Hagerty</div>
                        <div className="text-xs sm:text-sm text-neutral break-all line-clamp-1">hasanmahdi6060@gmail.com</div>
                      </div>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="align-middle">
                    <span className="badge badge-ghost border-base-300 badge-sm sm:badge-md text-base-content">Student</span>
                  </td>

                  {/* Joining Date */}
                  <td className="align-middle">
                    <span className="text-xs sm:text-sm text-base-content/80">Dec 13, 2025</span>
                  </td>

                  {/* Actions */}
                  <th className="align-middle">
                    <div className="flex justify-end items-center gap-2">
                      {/* View (visible) */}
                      <button
                        type="button"
                        className="btn btn-outline btn-xs sm:btn-sm rounded-full border-secondary/30"
                        title="View details"
                      >
                        View
                      </button>

                      {/* More dropdown */}
                      <div className="dropdown dropdown-end">
                        <button
                          type="button"
                          tabIndex={0}
                          className="btn btn-ghost btn-xs sm:btn-sm rounded-full border border-base-300"
                          title="More actions"
                        >
                          More
                        </button>

                        <ul
                          tabIndex={0}
                          className="dropdown-content menu bg-base-100 border border-base-200 rounded-box w-44 p-2 shadow z-99"
                        >
                          <li>
                            <button type="button" className="text-base-content">
                              Edit
                            </button>
                          </li>

                          <li>
                            <button type="button" className="text-secondary">
                              Change role
                            </button>
                          </li>

                          <li>
                            <button type="button" className="text-error">
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </th>
                </tr>

                {/* map করে বাকি user rows আনবি */}
              </tbody>
            </table>
          </div>

          {/* footer note */}
          <div className="px-4 sm:px-6 py-3 border-t border-base-200 text-xs text-neutral">
            Tip: On mobile, swipe horizontally to view the full table.
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ManageUsers;
