import React, { useState } from 'react';
import { FiCamera } from 'react-icons/fi';
import CommonButton from '../../../../components/Buttons/CommonButton/CommonButton';
import Swal from 'sweetalert2';
import { uploadToImgbb } from '../../../../utils/uploadToImgbb';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const UpdateImg = ({ userDb, userDbRefetch }) => {
  const user = userDb;
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const axiosSecure = useAxiosSecure();

  const initials =
    user?.name
      ?.split(' ')
      ?.slice(0, 2)
      ?.map((w) => w[0])
      ?.join('')
      ?.toUpperCase() || 'U';

  // preview
  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    // validation
    if (!selected.type.startsWith('image/')) {
      return Swal.fire('Invalid file', 'Please select an image file.', 'error');
    }
    if (selected.size > 2 * 1024 * 1024) {
      return Swal.fire('Too large', 'Max 2MB allowed.', 'error');
    }

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleSavePhoto = async () => {
    if (!file) return Swal.fire('No photo', 'Please choose a photo first.', 'info');
    try {
      setSaving(true);

      const photoURL = await uploadToImgbb(file);

      await axiosSecure.patch('/user/me/photo', { photoURL });
      Swal.fire('Saved!', 'Profile photo updated.', 'success');
      userDbRefetch();
      setFile(null);
    } catch (error) {
      console.log(error);
      Swal.fire('Failed', 'Could not update photo. Try again.', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleResetPhoto = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <>
      {/* Avatar */}
      <div className="flex flex-col items-center gap-3 ">
        <div className="relative">
          <div className="h-20 w-20 overflow-hidden rounded-2xl border border-base-200 shadow-md">
            {preview ? (
              <img src={preview} alt="Preview" className="h-full w-full object-cover" />
            ) : (
              <div className="grid h-full w-full place-items-center bg-[#0f1a33] text-white text-lg font-semibold">{initials}</div>
            )}
          </div>

          {/* camera overlay */}
          <label
            title="Change photo"
            className="absolute -bottom-3 -right-4 inline-flex h-9 w-9 items-center justify-center cursor-pointer rounded-full border border-base-200 bg-white shadow-sm text-[#0f1a33]"
          >
            <FiCamera className="text-[16px]" />
            <input onChange={handleFileChange} type="file" className="hidden" accept="image/*" />
          </label>
        </div>

        <div className="text-center">
          <p className="text-sm font-semibold text-[#0f1a33]">Photo preview</p>
          <p className="mt-0.5 text-xs text-neutral/70">Tap the camera icon to pick a new photo.</p>
          {/* tip */}
          <p className="mt-0.5 text-xs text-neutral/70">
            <span className="font-medium">Tip:</span> PNG, JPG · up to 2MB
          </p>
        </div>
      </div>

      {/* Upload box */}
      <div className="mt-6">
        {/* actions */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleResetPhoto}
              disabled={saving}
              className={`rounded-full px-4 py-1 text-xs font-semibold ${saving ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              Reset
            </button>

            <CommonButton
              type="button"
              onClick={handleSavePhoto}
              disabled={saving}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold ${saving ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              {saving ? 'Saving...' : 'Save Photo'}
            </CommonButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateImg;
