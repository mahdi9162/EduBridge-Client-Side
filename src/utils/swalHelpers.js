import Swal from 'sweetalert2';
export const confirmDeleteAlert = async ({
  title = 'Delete This Item?',
  text = 'This action cannot be undone once deleted.',
  confirmButtonText = 'Yes, delete',
  cancelButtonText = 'Cancel',} = {}) => {
  const result = await Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#0f1a33', 
    cancelButtonColor: '#d33',
    confirmButtonText,
    cancelButtonText,
    customClass: {
      title: 'text-base-content text-xl font-bold',
      popup: 'rounded-2xl px-6 py-5',
      htmlContainer: 'text-neutral text-sm',
      confirmButton: 'px-5 py-2 text-white font-medium rounded-md',
      cancelButton: 'px-5 py-2 text-white font-medium rounded-md',
    },
  });

  return result.isConfirmed;
};


export const deleteSuccessAlert = async (message = 'The tuition post has been removed successfully.') => {
  return Swal.fire({
    title: 'Deleted!',
    text: message,
    icon: 'success',
    confirmButtonColor: '#0f1a33',
    customClass: {
      title: 'text-base-content text-xl font-bold',
      htmlContainer: 'text-neutral text-sm',
      popup: 'rounded-2xl px-6 py-5',
      confirmButton: 'px-5 py-2 text-white font-medium rounded-md',
    },
  });
};
