import React, { useRef, useState } from 'react';
import Container from '../../../components/Container/Container';
import { FaUsersCog } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { formatDate } from '../../../utils/date';
import UserDetailsModal from './UserDetailsModal';
import userProfileImg from '../../../assets/userProfile.png';
import UpdateUserInfoModal from './UpdateUserInfoModal';
import Swal from 'sweetalert2';

const ManageUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const axiosSecure = useAxiosSecure();
  const userDetailsRef = useRef();
  const updateUserRef = useRef();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get('/users');
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  // Role base style
  const roleBadgeClass = (role = '') => {
    const r = role.toLowerCase();

    if (r === 'admin') {
      return 'badge badge-sm font-medium capitalize bg-primary text-primary-content border border-primary/30';
    }

    if (r === 'teacher' || r === 'tutor') {
      return 'badge badge-sm font-medium capitalize bg-secondary text-secondary-content border border-secondary/30';
    }
    // student / default
    return 'badge badge-sm font-medium capitalize bg-accent text-accent-content border border-base-300';
  };

  const openUserDetailsModal = (user) => {
    setSelectedUser(user);
    userDetailsRef.current.showModal();
  };

  const openUpdateUserModal = (user) => {
    setSelectedUser(user);
    updateUserRef.current.showModal();
  };

  const handleUpdateUser = async (formData) => {
    const id = selectedUser?._id;
    try {
      await axiosSecure.patch(`/admin/users/${id}`, formData);
      alert('Updated User Profile Successfully');
      updateUserRef.current.close();
      setSelectedUser(null);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserDelete = async (user) => {
    const id = user._id;

    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (result.isConfirmed) {
        await axiosSecure.delete(`/admin/users/${id}`);
        refetch();
        Swal.fire({
          title: 'Deleted!',
          text: 'User has been deleted.',
          icon: 'success',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                {users.map((user, i) => (
                  <tr key={i} className="hover:bg-base-200/60 transition-colors">
                    <th className="align-middle">
                      <label>{i + 1}</label>
                    </th>

                    {/* User */}
                    <td className="align-middle">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-10 w-10 sm:h-12 sm:w-12 border border-base-300 rounded-full">
                            <img src={userProfileImg} alt="User avatar" />
                          </div>
                        </div>

                        <div className="leading-tight ">
                          <div className="font-bold text-base-content">{user.name}</div>
                          <div className="text-xs sm:text-sm text-neutral break-all line-clamp-1">{user.email}</div>
                        </div>
                      </div>
                    </td>

                    {/* Role */}
                    <td className="align-middle">
                      <span className={roleBadgeClass(user.userType)}>{user.userType}</span>
                    </td>

                    {/* Joining Date */}
                    <td className="align-middle">
                      <span className="text-xs sm:text-sm text-base-content/80">{formatDate(user.createdAt)}</span>
                    </td>

                    {/* Actions */}
                    <th className="align-middle">
                      <div className="flex justify-end items-center gap-2">
                        {/* View */}
                        <button
                          onClick={() => openUserDetailsModal(user)}
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
                            className="btn btn-ghost btn-xs sm:btn-sm rounded-full border border-base-300 hover:bg-base-200"
                            title="More actions"
                          >
                            More
                          </button>

                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 border border-base-200 rounded-box w-44 p-2 shadow z-99"
                          >
                            <li>
                              <button
                                onClick={() => openUpdateUserModal(user)}
                                type="button"
                                className="text-base-content border-b border-secondary/10 hover:bg-base-200"
                              >
                                Edit
                              </button>
                            </li>

                            <li>
                              <button
                                onClick={() => handleUserDelete(user)}
                                type="button"
                                className="text-error border-b border-secondary/10 hover:bg-base-200"
                              >
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* footer note */}
          <div className="px-4 sm:px-6 py-3 border-t border-base-200 text-xs text-neutral">
            Tip: On mobile, swipe horizontally to view the full table.
          </div>
        </div>
        {/* View Button Modal */}
        <dialog ref={userDetailsRef} className="modal modal-bottom sm:modal-middle">
          {selectedUser && (
            <UserDetailsModal
              user={selectedUser}
              onClose={() => {
                userDetailsRef.current.close();
                setSelectedUser(null);
              }}
            />
          )}
        </dialog>
        {/* Edit User Modal */}
        <dialog ref={updateUserRef} className="modal modal-bottom sm:modal-middle">
          <UpdateUserInfoModal
            user={selectedUser}
            onClose={() => {
              updateUserRef.current.close();
              setSelectedUser(null);
            }}
            onSave={handleUpdateUser}
          />
        </dialog>
      </section>
    </Container>
  );
};

export default ManageUsers;
