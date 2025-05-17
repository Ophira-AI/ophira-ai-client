"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { FiAlertCircle } from "react-icons/fi";

type FormData = {
  fname: string;
  lname: string;
  email: string;
  privacyConfirmed: boolean;
};

export default function RegisterForm() {
  const router = useRouter();
  const [emailExists, setEmailExists] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Simulate API email check (replace with actual API call)
    const existingEmails = ["test@example.com", "hello@site.com"];
    
    if (existingEmails.includes(data.email.toLowerCase())) {
      setEmailExists(true);
      return;
    }

    // Reset email exists if no issue
    setEmailExists(false);
    router.push("/register/secureaccount");
  };

  return (
    <>
   <div className="flex flex-col items-center w-full px-4">
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 p-6 sm:p-8 text-white"
  >
    <h2 className="text-2xl font-bold text-center mb-6">
      Create an Account
    </h2>

    {/* Email Already Exists Warning */}
    {emailExists && (
      <div className="bg-white text-black text-sm px-4 py-2 rounded mb-4 flex items-center justify-center gap-2 text-center">
        <FiAlertCircle className="text-red-600 text-lg" />
        <span>
          There is an account with this email.{" "}
          <Link
            href="/login"
            className="underline text-black hover:text-red-800"
          >
            Go to login
          </Link>
        </span>
      </div>
    )}

    {/* First Name + Last Name */}
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      {/* First Name */}
      <div className="flex lg:w-1/3 flex-col flex-1">
        <label
          htmlFor="fname"
          className={`mb-1 text-sm font-medium ${
            errors.fname ? "text-red-500" : ""
          }`}
        >
          First Name
        </label>
        <input
          id="fname"
          type="text"
          {...register("fname", { required: "First name is required" })}
          className={`p-2 rounded bg-gray-700 placeholder-gray-400 border 
            ${errors.fname ? "border-red-500" : "border-blue-500"}
            focus:outline-none`}
          placeholder="First Name"
        />
        {errors.fname && (
          <p className="text-sm text-red-500 mt-1">
            {errors.fname.message}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div className="flex lg:w-1/3 flex-col flex-1">
        <label
          htmlFor="lname"
          className={`mb-1 text-sm font-medium ${
            errors.lname ? "text-red-500" : ""
          }`}
        >
          Last Name
        </label>
        <input
          id="lname"
          type="text"
          {...register("lname", { required: "Last name is required" })}
          className={`p-2 rounded bg-gray-700 placeholder-gray-400 border 
            ${errors.lname ? "border-red-500" : "border-blue-500"}
            focus:outline-none`}
          placeholder="Last Name"
        />
        {errors.lname && (
          <p className="text-sm text-red-500 mt-1">
            {errors.lname.message}
          </p>
        )}
      </div>
    </div>

    {/* Email */}
    <div className="flex flex-col mb-4">
      <label
        htmlFor="email"
        className={`mb-1 text-sm font-medium ${
          errors.email || emailExists ? "text-red-500" : ""
        }`}
      >
        Email Address
      </label>
      <input
        id="email"
        type="email"
        {...register("email", { required: "Email is required" })}
        className={`p-2 rounded bg-gray-800 text-white placeholder-gray-400 border ${
          errors.email || emailExists ? "border-red-500" : "border-blue-500"
        } focus:outline-none`}
      />
      {errors.email && (
        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
      )}
    </div>

    {/* Privacy Checkbox */}
    <div className="flex items-start gap-2 mb-6">
      <input
        id="privacyConfirmed"
        type="checkbox"
        {...register("privacyConfirmed", {
          required: "You must confirm privacy policy",
        })}
        className={`mt-1 w-4 h-4 border ${
          errors.privacyConfirmed ? "border-red-500" : "border-blue-500"
        }`}
      />
      <label
        htmlFor="privacyConfirmed"
        className={`text-sm cursor-pointer ${
          errors.privacyConfirmed ? "text-red-500" : "text-gray-400"
        }`}
      >
        I confirm the privacy read and answered.
      </label>
    </div>
    {errors.privacyConfirmed && (
      <p className="text-sm text-red-500 mb-4">
        {errors.privacyConfirmed.message}
      </p>
    )}

    {/* Divider */}
    <div className="relative mb-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-600" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-primary px-2 text-gray-400">
          or continue with
        </span>
      </div>
    </div>

    {/* Google sign-in */}
    <button
      type="button"
      className="w-full flex justify-center items-center p-2 bg-gray-700 rounded hover:bg-gray-900 mb-4 border border-blue-500"
    >
      <FcGoogle className="text-2xl" />
    </button>

    <Button type="submit" className="w-full">
      Continue
    </Button>

    <p className="text-sm text-center text-gray-400 mt-4">
      Already have an account?{" "}
      <Link href="/login" className="text-blue-400 hover:underline">
        Login here
      </Link>
    </p>
  </form>

  {/* Footer Section */}
  <div className="mt-8 w-full">
    <Footer />
  </div>
</div>

    </>
  );
}
