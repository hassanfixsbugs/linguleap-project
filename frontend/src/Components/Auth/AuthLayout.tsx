// ============================================
// AuthLayout.jsx → AuthLayout.tsx
// ============================================

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Panel - Static and Reusable */}
      <div className="hidden lg:flex lg:w-[529px] font-['Instrument_Sans'] p-12 bg-gradient-to-br from-lime-100 via-lime-50 to-emerald-50">
        <div className="flex flex-col justify-center max-w-xl">
          <div className="mb-12 flex items-center space-x-2 rtl:space-x-reverse">
            <img
              src="/LinguLeap_logo.png"
              alt=""
              className="w-[32px] h-[42px]"
            />
            <span className="text-[24px] font-bold text-gray-900">
              {t("sidebar.appName")}
            </span>
          </div>
          <h1 className="text-[60px] font-bold text-gray-900 leading-tight mb-6">
            {t("auth.hero.title")}
            <br />
            {t("auth.hero.titleLine2")}
          </h1>
          <p className="text-[20px] text-gray-600 font-medium leading-relaxed">
            {t("auth.hero.subtitle")}
          </p>
        </div>
      </div>

      {/* Right Panel - Dynamic Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12">
        <div className="w-full max-w-md">
          {title && (
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600 mb-8 text-sm sm:text-base">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
