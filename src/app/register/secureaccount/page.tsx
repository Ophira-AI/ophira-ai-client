'use client';

import { FiLock, FiEye, FiEyeOff, FiArrowLeft } from 'react-icons/fi';
import AuthStepWrapper from '@/components/auth/AuthStepWrapper';
import Button from '@/components/Button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type PasswordInputProps = {
  label: string;
  name: 'password' | 'confirmPassword';
  placeholder: string;
  value: string;
  show: boolean;
  onToggle: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function PasswordInput({
  label,
  name,
  placeholder,
  value,
  show,
  onToggle,
  onChange,
}: PasswordInputProps) {
  return (
    <div className="w-full mb-4">
      <label htmlFor={name} className="block text-sm md:text-base font-medium text-gray-300 mb-1">
        {label}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <FiLock />
        </span>
        <input
          type={show ? 'text' : 'password'}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-3 pl-10 pr-10 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none border border-blue-500 focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="button"
          onClick={onToggle}
          onMouseDown={(e) => e.preventDefault()}
          tabIndex={-1}
          className="absolute inset-y-0 right-3 flex items-center text-gray-400"
          aria-label={show ? 'Hide password' : 'Show password'}
        >
          {show ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
    </div>
  );
}

export default function SecureAccountForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleShowPassword = (field: 'password' | 'confirmPassword') => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    router.push('/register/companyinfo');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <AuthStepWrapper>
      <form
        onSubmit={handleNext}
        className="w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto px-4 sm:px-6 lg:px-0"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          Secure Your Account
        </h2>

        <PasswordInput
          label="Password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          show={showPassword.password}
          onToggle={() => toggleShowPassword('password')}
          onChange={handleChange}
        />
        <p className='block text-sm md:text-xs py-1 mt-[-10] font-medium text-gray-300 mb-3'>Must be at least 8 characters</p>
        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Re-enter your password"
          value={formData.confirmPassword}
          show={showPassword.confirmPassword}
          onToggle={() => toggleShowPassword('confirmPassword')}
          onChange={handleChange}
        />

        <Button type="submit" className="w-full mb-4">
          Continue
        </Button>

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
      </form>
    </AuthStepWrapper>
  );
}
