// app/register/companyinfo/page.tsx
'use client';
import {  FiArrowLeft } from 'react-icons/fi';
import Link from "next/link";
import AuthStepWrapper from '@/components/auth/AuthStepWrapper';
import { useState} from 'react';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function CompanyInfoForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    industry: '',
    companyName: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit final data here
    alert('Registration complete!');
  };
  const handleBack = () => {
    router.back();
  };
  return (
    <AuthStepWrapper>
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-6">Add Company Details</h2>
        <label
          htmlFor="fname"
          className="block text-sm md:text-base font-medium text-gray-300 mb-1"
        >
          Industry
        </label>
        <select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-gray-700 focus:outline-none border border-blue-500 text-white"
          required
        >
          <option value="" disabled>Select Industry</option>
          <option value="tech">Technology</option>
          <option value="finance">Finance</option>
          <option value="health">Healthcare</option>
          <option value="education">Education</option>
        </select>
        <label
          htmlFor="fname"
          className="block text-sm md:text-base font-medium text-gray-300 mb-1"
        >
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded focus:outline-none border border-blue-500 bg-gray-700 placeholder-gray-400"
          required
        />
       <label
          htmlFor="fname"
          className="block text-sm md:text-base font-medium text-gray-300 mb-1"
        >
          Company Description
        </label>
        <textarea
          name="description"
          placeholder="Company Description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 mb-6 rounded focus:outline-none border border-blue-500 bg-gray-700 placeholder-gray-400"
          required
        />

        <Button type="submit" className="w-full">Finish</Button>
        <div className="flex justify-center mt-2">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <FiArrowLeft />
            <span>Back</span>
          </button>
        </div>

    <p className="text-sm text-center text-gray-400 mt-4">
      Already have an account?{" "}
      <Link href="/login" className="text-blue-400 hover:underline">
        Login here
      </Link>
    </p>
      </form>
    </AuthStepWrapper>
  );
}
