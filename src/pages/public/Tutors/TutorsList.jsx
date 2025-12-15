import React from 'react';
import Container from '../../../components/Container/Container';
import { IoIosSearch } from 'react-icons/io';

const TutorsList = () => {
  return (
    <Container>
      <section className="bg-base-200/40 py-10 rounded-4xl my-10">
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          {/* Header */}
          <div className="bg-base-100 border border-base-300 rounded-2xl shadow-[0_18px_45px_rgba(15,26,51,0.06)] p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-base-content tracking-tight">Tutors</h2>
                <p className="text-sm text-neutral mt-1">Browse available tutors and view their profiles.</p>
              </div>

              {/* Search  */}
              <div className="flex gap-2 w-full sm:w-auto">
                <label className="input input-bordered flex items-center gap-2 bg-base-100 border-base-300 w-full sm:w-70">
                  <IoIosSearch className="h-4 w-4 opacity-60" />
                  <input type="text" className="grow text-sm" placeholder="Search by subject" />
                </label>
              </div>
            </div>
          </div>

          {/* List Card */}
          <div className="mt-6 bg-base-100 border border-base-300 rounded-2xl shadow-[0_18px_45px_rgba(15,26,51,0.06)] overflow-hidden">
            {/* Table header */}
            <div className="hidden md:grid grid-cols-12 px-5 py-3 bg-base-200/60 border-b border-base-300 text-xs font-semibold text-base-content">
              <div className="col-span-5">Tutor</div>
              <div className="col-span-2 text-center">Subject</div>
              <div className="col-span-2 text-center">Teaching Class</div>
              <div className="col-span-2 text-center">Location</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            {/* Row 1 */}
            <div className="border-b border-base-300/70">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-0 px-4 sm:px-5 py-4">
                {/* Tutor */}
                <div className="md:col-span-5 flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-11 h-11 rounded-full ring-2 ring-base-300">
                      <img src="https://i.pravatar.cc/100?img=12" alt="Tutor avatar" />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold text-base-content truncate">Kawsar Miah</p>
                    <p className="text-xs text-neutral truncate">kawsar@gmail.com</p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="badge bg-secondary text-secondary-content border-none">Teacher</span>
                      <span className="badge bg-base-200 text-base-content border border-base-300">Varsity Admission</span>
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="md:col-span-2 md:flex md:items-center md:justify-center">
                  <div className="flex md:block items-center justify-between">
                    <span className="text-xs text-neutral md:hidden">Subject</span>
                    <span className="text-sm font-medium text-base-content">Math</span>
                  </div>
                </div>

                {/* Teaching Class */}
                <div className="md:col-span-2 md:flex md:items-center md:justify-center">
                  <div className="flex md:block items-center justify-between">
                    <span className="text-xs text-neutral md:hidden">Teaching Class</span>
                    <span className="text-sm text-base-content">Varsity Admission</span>
                  </div>
                </div>

                {/* Location */}
                <div className="md:col-span-2 md:flex md:items-center md:justify-center">
                  <div className="flex md:block items-center justify-between">
                    <span className="text-xs text-neutral md:hidden">Location</span>
                    <span className="text-sm text-base-content">Bhola</span>
                  </div>
                </div>

                {/* Action */}
                <div className="md:col-span-1 md:flex md:items-center md:justify-end">
                  <button className="btn btn-sm w-full md:w-auto bg-primary text-primary-content hover:bg-secondary border-none rounded-full">
                    View Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <div className="px-4 sm:px-5 py-3 text-xs text-neutral bg-base-100">
              Tip: On mobile, each row stacks neatly. On desktop, it aligns like a table.
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TutorsList;
