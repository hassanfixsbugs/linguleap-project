// ============================================
// BEFORE: AuthPassword.jsx
// ============================================
/*
import AuthButton from "./AuthButton";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const AuthPassword = ({ label, placeholder, value, onChange, id }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-900 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
};
export default AuthPassword;
*/

// ============================================
// AFTER: AuthPassword.tsx
// ============================================

import { useState, ChangeEvent } from "react";
import { Eye, EyeOff } from "lucide-react";

interface AuthPasswordProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

const AuthPassword = ({
  label,
  placeholder,
  value,
  onChange,
  id,
}: AuthPasswordProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-900 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl  transition-all "
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
};

export default AuthPassword;
