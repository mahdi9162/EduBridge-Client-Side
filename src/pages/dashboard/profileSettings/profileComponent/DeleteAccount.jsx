import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router';

const DeleteAccount = () => {
  const { deleteUserProfile, user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleDelectBtn = async () => {
    if (user?.providerData?.[0]?.providerId !== 'password') {
      return Swal.fire('Not supported', 'Please use reset email or contact support to delete this account.', 'info');
    }

    try {
      const { value: password, isConfirmed } = await Swal.fire({
        title: 'Delete account?',
        text: 'Enter your password to confirm.',
        input: 'password',
        inputPlaceholder: 'Your password',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete',
        confirmButtonColor: '#d33',
      });

      if (!isConfirmed) return;
      if (!password) return Swal.fire('Password required', '', 'warning');

      // re-auth
      const credential = EmailAuthProvider.credential(user.email, password);
      await reauthenticateWithCredential(user, credential);

      // DB delete
      await axiosSecure.delete('/user/me');

      // firebase delete
      await deleteUserProfile();

      Swal.fire('Deleted!', 'Your account has been deleted.', 'success');
      navigate('/login');
    } catch (error) {
      console.log(error);
      Swal.fire(
        'Delete incomplete',
        'Your data may be removed from our database, but account deletion was not completed. Please contact support.',
        'warning'
      );
    }
  };

  return (
    <>
      <p className="text-sm font-semibold text-red-700">Danger zone</p>
      <p className="mt-1 text-xs text-red-600/80">Remove your account and associated data.</p>
      <button
        onClick={handleDelectBtn}
        type="button"
        className="mt-3 w-full rounded-full border border-red-200 bg-white px-4 py-2 text-xs md:text-sm font-medium text-red-700 hover:bg-red-500 hover:text-white duration-500 transition-all cursor-pointer"
      >
        Delete Account
      </button>
    </>
  );
};

export default DeleteAccount;
