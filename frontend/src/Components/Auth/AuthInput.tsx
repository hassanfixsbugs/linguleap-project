// ============================================
// BEFORE: AuthInput.jsx
// ============================================
/*
const AuthInput = ({ label, type = 'text', placeholder, value, onChange, id }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-900 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
      />
    </div>
  );
};
export default AuthInput;
*/

// ============================================
// AFTER: AuthInput.tsx
// ============================================

import { ChangeEvent } from "react";

interface AuthInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

const AuthInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  id,
}: AuthInputProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-900 mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl  transition-all"
      />
    </div>
  );
};

export default AuthInput;
