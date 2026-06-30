import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginCard({ onClose }) {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 z-20 bg-black/50 inset-0 fixed"
      onClick={onClose}
    >
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-sm p-6">
        {/* Tabs */}
        <div className="bg-gray-100 rounded-full p-1 flex mb-6">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-colors ${
              activeTab === "login" ? "bg-gray-900 text-white" : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("signin")}
            className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-colors ${
              activeTab === "signin"
                ? "bg-gray-900 text-white"
                : "text-gray-500"
            }`}
          >
            Sign In
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 text-center">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-500 text-center mt-1 mb-6">
          Log in to your account or Sign in below
        </p>

        {/* Email field */}
        <label className="block text-sm font-medium text-gray-800 mb-1">
          Email or Username
        </label>
        <div className="relative mb-4">
          <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Enter email or username"
            className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Password field */}
        <label className="block text-sm font-medium text-gray-800 mb-1">
          Password
        </label>
        <div className="relative mb-2">
          <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-xl pl-11 pr-11 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Forgot password */}
        <div className="text-right mb-5">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wide py-3.5 rounded-full transition-colors mb-6">
          LOG IN
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-500 whitespace-nowrap">
            Or continue with:
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social buttons */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-full py-3 text-sm font-medium text-gray-800 hover:bg-gray-50">
              <GoogleIcon />
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-full py-3 text-sm font-medium text-gray-800 hover:bg-gray-50">
              <FacebookIcon />
              Google
            </button>
          </div>

          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-full py-3 text-sm font-medium text-gray-800 hover:bg-gray-50">
            <GithubIcon />
            GitHub
          </button>

          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-full py-3 text-sm font-medium text-gray-800 hover:bg-gray-50">
            <AppleIcon />
            Apple
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          New user?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign In here
          </a>
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .31.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.36 1c.12 1.06-.27 2.1-.93 2.87-.68.79-1.78 1.4-2.84 1.32-.14-1.02.36-2.1 1-2.8.71-.81 1.92-1.41 2.77-1.39zM20.5 17.34c-.5 1.16-.74 1.68-1.39 2.7-.9 1.43-2.18 3.2-3.76 3.21-1.4.02-1.76-.91-3.66-.9-1.9.01-2.3.92-3.7.9-1.58-.02-2.79-1.62-3.69-3.05-2.53-3.99-2.79-8.67-1.23-11.16C5.6 7.13 7.13 6.2 8.55 6.2c1.45 0 2.36.93 3.56.93 1.16 0 1.86-.93 3.56-.93 1.27 0 2.62.69 3.58 1.89-3.15 1.73-2.64 6.23.25 7.25-.4 1-.6 1.43-.9 2z" />
    </svg>
  );
}
