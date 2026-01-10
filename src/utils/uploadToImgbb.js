export const uploadToImgbb = async (file) => {
  if (!file) throw new Error('No file provided');

  const imgbbKey = import.meta.env.VITE_IMGBB_API_KEY;
  if (!imgbbKey) throw new Error('Missing IMGBB key in .env');

  const formData = new FormData();
  formData.append('image', file);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();

  if (!res.ok || !data?.success) {
    throw new Error(data?.error?.message || 'Image upload failed');
  }

  // public url
  return data.data.display_url;
};
