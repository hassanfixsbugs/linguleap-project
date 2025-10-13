import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export default function LanguageToggle({ variant = "default" }) {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  if (variant === "auth") {
    // For auth pages (top-right corner)
    return (
      <button
        onClick={toggleLanguage}
        className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-900 rounded-xl hover:bg-gray-50 transition-all shadow-sm"
      >
        <Globe className="w-5 h-5" />
        <span className="font-medium text-sm">
          {i18n.language === "en" ? "العربية" : "English"}
        </span>
      </button>
    );
  }

  // For sidebar (compact version)
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
    >
      <div className="flex items-center gap-2">
        <Globe className="w-5 h-5" />
        <span className="font-medium text-sm">
          {i18n.language === "en" ? "العربية" : "English"}
        </span>
      </div>
    </button>
  );
}
