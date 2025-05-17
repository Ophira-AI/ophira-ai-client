"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { useState } from "react";
import { FiAlertCircle, FiEye, FiEyeOff, FiLock } from "react-icons/fi";

type LoginData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginData) => {
    const existingUsers = [
      { email: "test@example.com", password: "1234" },
      { email: "hello@site.com", password: "admin" },
    ];

    const isValidUser = existingUsers.some(
      (user) =>
        user.email.toLowerCase() === data.email.toLowerCase() &&
        user.password === data.password
    );

    if (!isValidUser) {
      setLoginError(true);
      return;
    }

    setLoginError(false);
    console.log("Logged in successfully:", data);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg p-6 sm:p-8 text-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        {loginError && (
          <div className="bg-white text-black text-sm px-4 py-2 rounded mb-4 flex items-center gap-2">
            <FiAlertCircle className="text-red-600 text-lg" />
            <span>
              Invalid email or password.{" "}
              <Link
                href="/register/userinfo"
                className="underline text-black hover:text-red-800"
              >
                Create an account
              </Link>
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className={`mb-1 text-sm font-medium ${
                errors.email || loginError ? "text-red-500" : ""
              }`}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              {...register("email", { required: "Email is required" })}
              className={`p-2 rounded bg-gray-800 text-white placeholder-gray-400 border ${
                errors.email || loginError
                  ? "border-red-500"
                  : "border-blue-500"
              } focus:outline-none`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col relative">
            <label
              htmlFor="password"
              className={`mb-1 text-sm font-medium ${
                errors.password || loginError ? "text-red-500" : ""
              }`}
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FiLock />
              </span>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                {...register("password", { required: "Password is required" })}
                onChange={() => setLoginError(false)}
                className={`w-full pl-10 pr-10 p-2 rounded bg-gray-800 text-white placeholder-gray-400 border ${
                  errors.password || loginError
                    ? "border-red-500"
                    : "border-blue-500"
                } focus:outline-none`}
              />

              {errors.password || loginError ? (
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500">
                  <FiAlertCircle />
                </span>
              ) : (
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              )}
            </div>

            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me / Forgot Password */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 gap-2 sm:gap-0 mt-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span>Remember me</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-blue-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Divider */}
          <div className="relative flex items-center my-4">
            <hr className="flex-grow border-gray-700" />
            <span className="mx-2 text-sm text-gray-400">or continue with</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          {/* Google Sign-in */}
          <button
            type="button"
            className="w-full flex justify-center items-center py-2 border border-gray-600 rounded text-white hover:bg-gray-800 transition"
          >
            <FcGoogle size={20} />
          </button>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
          >
            Login
          </Button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-400">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-400 underline">
            Register here
          </Link>
        </p>
      </div>

      <div className="mt-10 w-full">
        <Footer />
      </div>
    </div>
  );
}
