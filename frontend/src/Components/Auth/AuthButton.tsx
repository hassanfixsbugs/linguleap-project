// ============================================
// BEFORE: AuthButton.jsx
// ============================================
/*
const AuthButton = ({ children, onClick, variant = 'primary', icon, type = 'button' }) => {
  const baseStyles =
    "w-full py-3 px-4 rounded-xl font-medium text-[16px] transition-all duration-200 flex items-center justify-between border-2 relative";

  const variants = {
    primary: "bg-lime-200 border-gray-900 text-gray-900 hover:bg-lime-300",
    outline: "bg-white border-black text-gray-900 hover:bg-gray-50",
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      <span className="absolute left-4 text-xl">{icon}</span>
      <span className="mx-auto">{children}</span>
    </button>
  );
};
export default AuthButton;
*/

// ============================================
// AFTER: AuthButton.tsx
// ============================================

import { ReactNode, MouseEvent } from "react";

interface AuthButtonProps {
  children: ReactNode;
  onClick?: (_e: MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "outline";
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
}

const AuthButton = ({
  children,
  onClick,
  variant = "primary",
  icon,
  type = "button",
}: AuthButtonProps) => {
  const baseStyles =
    "w-full py-3 px-4 rounded-xl font-medium text-[16px] transition-all duration-200 flex items-center justify-between border-2 relative";

  const variants: Record<AuthButtonProps["variant"] & string, string> = {
    primary: "bg-[#C9DECB] border-gray-900 text-gray-900 hover:bg-[#b4d2b8] ",
    outline:
      "bg-white border-black text-gray-900 hover:bg-gray-50 font-['Inter'] font-semibold px-5 py-4",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant || "primary"]}`}
    >
      {icon && <span className="absolute left-4 text-xl">{icon}</span>}
      <span className="mx-auto">{children}</span>
    </button>
  );
};

export default AuthButton;
