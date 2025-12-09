import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import CommonButton from '../../../../../components/Buttons/CommonButton/CommonButton';

const TeacherFields = ({ setCurrentStep }) => {
  const [districts, setDistricts] = useState([]);
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const phoneRegex = /^01(3|4|5|7|8|9)\d{8}$/;

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
    const nameValue = watch('name');
    const phoneValue = watch('phone');
    const classValue = watch('teachingClass');
    const subjectValue = watch('subject');
    const districtValue = watch('district');
    const experienceValue = watch('experience');
    if (
      nameValue.length > 0 &&
      phoneValue.length > 0 &&
      classValue !== 'Select your class' &&
      subjectValue !== 'Select your subject' &&
      districtValue !== 'Select your district' &&
      experienceValue !== 'Select your experience'
    ) {
      setCurrentStep(3);
    }
  };

  return (
    <>
      {/* Name */}
      <legend className="text-left lg:ml-17 mb-1 opacity-50 text-xs md:text-sm">Full Name</legend>
      <input
        type="text"
        {...register('name', { required: 'Enter a valid name' })}
        name="name"
        placeholder="Enter your Name"
        className="input w-full lg:w-[600px] placeholder:text-xs lg:placeholder:text-sm"
      />
      {errors.name && <p className="text-left lg:ml-18 mt-1 text-sm text-red-400/80">{errors.name.message}</p>}

      {/* Phone */}
      <legend className="text-left lg:ml-17 mb-1 mt-4 opacity-50 text-xs md:text-sm">Phone</legend>
      <input
        type="tel"
        {...register('phone', { required: true, pattern: { value: phoneRegex, message: 'Enter a valid phone number' } })}
        name="phone"
        placeholder="Enter your Phone No"
        className="input w-full lg:w-[600px] placeholder:text-xs lg:placeholder:text-sm"
      />
      {errors.phone && <p className="text-left lg:ml-18 mt-1 text-sm text-red-400/80">{errors.phone.message}</p>}

      {/* Teaching level + Subject */}
      <div className="flex flex-col lg:flex-row w-full lg:w-[600px] mx-auto lg:gap-4">
        {/* Teaching Level */}
        <div className="flex-1">
          <legend className="text-left mb-1 mt-4 opacity-50 text-xs md:text-sm">Teaching Level</legend>
          <select
            {...register('teachingClass', { required: true })}
            name="teachingClass"
            defaultValue="Select your teaching level"
            className="select select-primary border-neutral w-full text-xs lg:text-sm"
          >
            <option disabled={true}>Select your teaching level</option>
            {classes.map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div className="flex-1">
          <legend className="text-left mb-1 mt-4 opacity-50 text-xs md:text-sm">Subject</legend>
          <select
            {...register('subject', { required: true })}
            name="subject"
            defaultValue="Select your subject"
            className="select select-primary border-neutral w-full text-xs lg:text-sm"
          >
            <option disabled={true}>Select your subject</option>
            {subjects.map((s, i) => (
              <option key={i}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* District + Experience */}
      <div className="flex flex-col lg:flex-row w-full lg:w-[600px] mx-auto lg:gap-4">
        {/* District */}
        <div className="flex-1">
          <legend className="text-left mb-1 mt-4 opacity-50 text-xs md:text-sm">District</legend>
          <select
            {...register('district', { required: true })}
            name="district"
            defaultValue="Select your district"
            className="select select-primary border-neutral w-full text-xs lg:text-sm"
          >
            <option disabled={true}>Select your district</option>
            {districts.map((d, i) => (
              <option key={i}>{d.district}</option>
            ))}
          </select>
        </div>

        {/* Experience */}
        <div className="flex-1">
          <legend className="text-left mb-1 mt-4 opacity-50 text-xs md:text-sm">Experience</legend>
          <select
            {...register('experience', { required: true })}
            name="experience"
            defaultValue="Select your experience"
            className="select select-primary border-neutral w-full text-xs lg:text-sm"
          >
            <option disabled={true}>Select your experience</option>
            {experienceLevels.map((e, i) => (
              <option key={i}>{e}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Button */}
      <CommonButton onClick={handleBasicInfo} className="btn btn-secondary mt-8 w-full lg:w-[600px] rounded-full text-xs lg:text-sm">
        Next
      </CommonButton>
    </>
  );
};

export default TeacherFields;
