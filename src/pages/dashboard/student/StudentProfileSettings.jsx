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
import UpdateImg from './components/UpdateImg';

const StudentProfileSettings = () => {
  const [tab, setTab] = useState('myProfile');
  const axiosSecure = useAxiosSecure();
  const { user, loading: authLoading } = useAuth();

  const { data: userDb = [], isLoading: usersLoading, refetch: userDbRefetch } = useQuery({
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
        <div>
          <div>
            <p className="text-xs tracking-wide text-neutral/60">Dashboard / Settings</p>
            <h1 className="mt-1 text-xl md:text-3xl font-semibold text-[#0f1a33]">Profile Settings</h1>
            <p className="mt-1 text-xs md:text-sm text-neutral/60">Update your info, photo and preferences.</p>
          </div>
        </div>

        {/* Shell */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Card */}
          <aside
            className="lg:col-span-4 rounded-3xl p-4 shadow-xl backdrop-blur-xl"
            style={{
              backgroundColor: 'rgba(255,255,255,0.70)',
              border: '1px solid rgba(255,255,255,0.45)',
            }}
          >
            {/* Update image */}
           <div className='rounded-2xl border border-base-200 bg-base-100/70 p-4'>
             <UpdateImg userDb={userDb} userDbRefetch={userDbRefetch}/>
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
            className="lg:col-span-8 rounded-3xl p-4 md:p-8 shadow-xl backdrop-blur-xl"
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
