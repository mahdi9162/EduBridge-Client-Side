import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import CommonButton from '../../../../../components/Buttons/CommonButton/CommonButton';

const StudentFields = ({ setCurrentStep }) => {
  const [districts, setDistricts] = useState([]);
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const phoneRegex = /^01(3|4|5|7|8|9)\d{8}$/;

  const classes = ['Class-6', 'Class-7', 'Class-8', 'Class-9', 'Class-10', 'College 1st Year', 'College 2nd Year', 'Versity Admissoion'];
  const subjects = ['Arts', 'Commerce', 'Science'];

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
    const classValue = watch('class');
    const subjectValue = watch('subject');
    const districtValue = watch('district');

    if (
      nameValue.length > 0 &&
      phoneValue.length > 0 &&
      classValue !== 'Select your class' &&
      subjectValue !== 'Select your subject' &&
      districtValue !== 'Select your district'
    ) {
      setCurrentStep(3);
    }
  };

  return (
    <>
      {/* Name */}
      <legend className="text-left ml-17 mb-1 opacity-50 text-sm">Full Name</legend>
      <input
        type="text"
        {...register('name', { required: 'Enter a valid name' })}
        name="name"
        placeholder="Enter your Name"
        className="input w-[600px]"
      />
      {errors.name && <p className="text-left ml-18 mt-1 text-sm text-red-400/80">{errors.name.message}</p>}
      {/* Phone */}
      <legend className="text-left ml-17 mb-1 mt-4 opacity-50 text-sm">Phone</legend>
      <input
        type="tel"
        {...register('phone', { required: true, pattern: { value: phoneRegex, message: 'Enter a valid phone number' } })}
        name="phone"
        placeholder="Enter your Phone No"
        className="input w-[600px]"
      />
      {errors.phone && <p className="text-left ml-18 mt-1 text-sm text-red-400/80">{errors.phone.message}</p>}
      {/* class + subject */}
      <div className="flex w-[600px] mx-auto gap-4">
        {/* Class */}
        <div className="flex-1">
          <legend className="text-left mb-1 mt-4 opacity-50 text-sm">Class</legend>
          <select
            {...register('class', { required: true })}
            name="class"
            defaultValue="Select your class"
            className="select select-primary border-neutral"
          >
            <option disabled={true}>Select your class</option>
            {classes.map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>
        </div>
        {/* Subject */}
        <div className="flex-1">
          <legend className="text-left mb-1 mt-4 opacity-50 text-sm">Subject</legend>
          <select
            {...register('subject', { required: true })}
            name="subject"
            defaultValue="Select your subject"
            className="select select-primary border-neutral"
          >
            <option disabled={true}>Select your subject</option>
            {subjects.map((s, i) => (
              <option key={i}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      {/* District */}
      <legend className="text-left mb-1 ml-17 mt-4 opacity-50 text-sm">District</legend>
      <select
        {...register('district', { required: true })}
        name="district"
        defaultValue="Select your district"
        className="select select-primary w-[600px] border-neutral"
      >
        <option disabled={true}>Select your district</option>
        {districts.map((d, i) => (
          <option key={i}>{d.district}</option>
        ))}
      </select>
      {/* Button */}
      <CommonButton onClick={handleBasicInfo} className="btn btn-secondary mt-8 w-[600px] rounded-full">
        Next
      </CommonButton>
    </>
  );
};

export default StudentFields;
