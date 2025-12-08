import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TeacherFields = ({ setCurrentStep }) => {
  const [districts, setDistricts] = useState([]);

  const classes = ['Class-6', 'Class-7', 'Class-8', 'Class-9', 'Class-10', 'College 1st Year', 'College 2nd Year', 'Versity Admissoion'];
  const subjects = ['Accounting', 'Biology', 'Chemistry', 'English', 'Math', 'Physics'];
  const experienceLevels = ['Less than 1 year', '1-2 years', '2-3 years', '3-5 years', '5-7 years', '7-10 years', '10+ years'];

  useEffect(() => {
    axios
      .get('/districts.json')
      .then((res) => {
        setDistricts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleBasicInfo = () => {
    setCurrentStep(3);
  };

  return (
    <>
      {/* Name */}
      <legend className="text-left ml-17 mb-1 opacity-50 text-sm">Full Name</legend>
      <input type="text" placeholder="Enter your Name" className="input w-[600px]" />
      {/* Phone */}
      <legend className="text-left ml-17 mb-1 mt-4 opacity-50 text-sm">Phone</legend>
      <input type="tel" placeholder="Enter your Phone No" className="input w-[600px]" />
      {/* class + subject */}
      <div className="flex w-[600px] mx-auto gap-4">
        {/* Class */}
        <div className="flex-1">
          <legend className="text-left mb-1 mt-4 opacity-50 text-sm">Teaching Level</legend>
          <select defaultValue="Select your teaching level" className="select select-primary border-neutral">
            <option disabled={true}>Select your teaching level</option>
            {classes.map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>
        </div>
        {/* Subject */}
        <div className="flex-1">
          <legend className="text-left mb-1 mt-4 opacity-50 text-sm">Subject</legend>
          <select defaultValue="Select your subject" className="select select-primary border-neutral">
            <option disabled={true}>Select your subject</option>
            {subjects.map((s, i) => (
              <option key={i}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      {/* District + Experience */}

      <div className="flex w-[600px] mx-auto gap-4">
        {/* district */}
        <div className="flex-1">
          <legend className="text-left mb-1 mt-4 opacity-50 text-sm">District</legend>
          <select defaultValue="Select your class" className="select select-primary border-neutral">
            <option disabled={true}>Select your district</option>
            {districts.map((d, i) => (
              <option key={i}>{d.district}</option>
            ))}
          </select>
        </div>
        {/* Subject */}
        <div className="flex-1">
          <legend className="text-left mb-1 mt-4 opacity-50 text-sm">Experience</legend>
          <select defaultValue="Select your experience" className="select select-primary border-neutral">
            <option disabled={true}>Select your experience</option>
            {experienceLevels.map((e, i) => (
              <option key={i}>{e}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Button */}
      <button onClick={handleBasicInfo} className="btn btn-secondary mt-8 w-[600px] rounded-full">
        Next
      </button>
    </>
  );
};

export default TeacherFields;
