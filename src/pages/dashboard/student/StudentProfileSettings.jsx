import React, { useState } from 'react';
import { Link } from 'react-router';
import ProfileTab from './components/UpdateProfileTab';
import SecurityTab from './components/SecurityTab';
import { TabButton } from './components/TabButton';
import MyProfileTab from './components/MyProfileTab';
import UpdateProfileTab from './components/UpdateProfileTab';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import FullScreenLoader from '../../../components/Loading/FullScreenLoader';
import DeleteAccount from './components/DeleteAccount';

const StudentProfileSettings = () => {
  const [tab, setTab] = useState('myProfile');
  const axiosSecure = useAxiosSecure();
  const { user, loading: authLoading } = useAuth();

  const { data: userDb = [], isLoading: usersLoading } = useQuery({
    queryKey: ['user', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get('/user/me');
      return res.data;
    },
  });

  if (authLoading || usersLoading) {
    return <FullScreenLoader />;
  }

  return (
    <section className="min-h-screen px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs tracking-wide text-neutral/60">Dashboard / Settings</p>
            <h1 className="mt-1 text-2xl md:text-3xl font-semibold text-[#0f1a33]">Profile Settings</h1>
            <p className="mt-1 text-sm text-neutral/60">Update your info, photo and preferences.</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="rounded-full border border-base-200 bg-base-100/70 px-4 py-2 text-sm text-[#0f1a33] shadow-sm backdrop-blur hover:bg-base-100 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Shell */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Card */}
          <aside
            className="lg:col-span-4 rounded-3xl p-6 shadow-xl backdrop-blur-xl"
            style={{
              backgroundColor: 'rgba(255,255,255,0.70)',
              border: '1px solid rgba(255,255,255,0.45)',
            }}
          >
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#0f1a33] text-white text-lg font-semibold shadow-md">
                  MH
                </div>
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-white" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-base font-semibold text-[#0f1a33]">Mahdi</p>
                <p className="truncate text-sm text-neutral/60">hasanmahdi</p>
              </div>
            </div>

            {/* Upload */}
            <div className="mt-6">
              <p className="text-xs font-medium text-neutral/60">Profile photo</p>
              <div className="mt-2 rounded-2xl border border-base-200 bg-base-100/70 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#0f1a33]">Update photo</p>
                    <p className="text-xs text-neutral/60">PNG, JPG up to 2MB</p>
                  </div>

                  <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#0f1a33] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition">
                    Choose File
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-6">
              <p className="text-xs font-medium text-neutral/60">Sections</p>
              <div className="mt-2 flex flex-col gap-2">
                <TabButton active={tab === 'myProfile'} onClick={() => setTab('myProfile')} label="My Profile" />
                <TabButton active={tab === 'updateProfile'} onClick={() => setTab('updateProfile')} label="Update Profile" />
                <TabButton active={tab === 'security'} onClick={() => setTab('security')} label="Security" />
              </div>
            </div>

            {/* Danger zone */}
            <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-4">
              <DeleteAccount />
            </div>
          </aside>

          {/* Right Panel */}
          <main
            className="lg:col-span-8 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-xl"
            style={{
              backgroundColor: 'rgba(255,255,255,0.70)',
              border: '1px solid rgba(255,255,255,0.45)',
            }}
          >
            {tab === 'myProfile' && <MyProfileTab userDb={userDb} setTab={setTab} />}
            {tab === 'updateProfile' && <UpdateProfileTab userDb={userDb} />}
            {tab === 'security' && <SecurityTab />}
          </main>
        </div>
      </div>
    </section>
  );
};

export default StudentProfileSettings;
