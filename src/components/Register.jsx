import React, { useState } from 'react';
import { z } from 'zod';
// import axios from 'axios';
import { useParams } from 'react-router-dom';

const Form = ({
  name,
  id,
  maxEntry,
  minMembers,
  maxMembers,
  price,
  description,
  img
}) => {

  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    teamName: '',
    competition: '',
    teamLead: '',
    teamLeadEmail: '',
    teamLeadPhone: '',
    teamLeadGender: '',
    teamMembers: [{ name: '', email: '', phone: '', gender: '', education: '', institute: '', degree: '' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMembers = formData.teamMembers.map((member, i) => i === index ? { ...member, [name]: value } : member);
    setFormData({ ...formData, teamMembers: updatedMembers });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedData = registerSchema.parse(formData);
      const response = await axios.post('/api/register', parsedData);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors.map(err => err.message).join(', '));
      } else {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <div className="min-h-screen text-black flex flex-col items-center py-10">
      <div className="max-w-[95%] w-full mx-auto p-6 bg-white rounded-xl">
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}

        <div className="w-full mx-auto md:max-w-[75%] text-center p-6 bg-white rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Team Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              placeholder="Enter Team Name"
              className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
              required
            />

            <input
              type="text"
              name="competition"
              value={formData.competition}
              onChange={handleChange}
              placeholder="Enter Competition Name"
              className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
              required
            />

            <input
              type="text"
              name="teamLead"
              value={formData.teamLead}
              onChange={handleChange}
              placeholder="Enter Team Lead Name"
              className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
              required
            />
            <input
              type="email"
              name="teamLeadEmail"
              value={formData.teamLeadEmail}
              onChange={handleChange}
              placeholder="Enter Team Lead Email"
              className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
              required
            />
            <input
              type="text"
              name="teamLeadPhone"
              value={formData.teamLeadPhone}
              onChange={handleChange}
              placeholder="Enter Team Lead Phone"
              className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
              required
            />
            <input
              type="text"
              name="teamLeadGender"
              value={formData.teamLeadGender}
              onChange={handleChange}
              placeholder="Enter Team Lead Gender"
              className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
              required
            />
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Team Members</h2>
          {formData.teamMembers.map((member, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={member.name}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Enter Member Name"
                className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                value={member.email}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Enter Member Email"
                className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                required
              />
              <input
                type="text"
                name="phone"
                value={member.phone}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Enter Member Phone"
                className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                required
              />
              <input
                type="text"
                name="gender"
                value={member.gender}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Enter Member Gender"
                className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                required
              />
              <input
                type="text"
                name="education"
                value={member.education}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Enter Member Education"
                className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                required
              />
              <input
                type="text"
                name="institute"
                value={member.institute}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Enter Member Institute"
                className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                required
              />
              <input
                type="text"
                name="degree"
                value={member.degree}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Enter Member Degree"
                className="mt-1 p-2 border border-gray-300 rounded-full w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                required
              />
            </div>
          ))}

          <button 
            onClick={handleSubmit} 
            className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold text-sm transition-all duration-300 ease-in-out flex items-center justify-center hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 mt-6"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
