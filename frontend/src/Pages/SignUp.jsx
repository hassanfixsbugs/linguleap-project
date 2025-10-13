import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import AuthLayout from "../Components/Auth/AuthLayout.tsx";
import AuthInput from "../Components/Auth/AuthInput.tsx";
import AuthPassword from "../Components/Auth/AuthPassword.tsx";
import AuthButton from "../Components/Auth/AuthButton.tsx";
import LanguageToggle from "../Components/LanguageToggle.jsx";

const SignUp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/signup", { name, email, password });
      navigate("/signin");
    } catch {}
  };

  return (
    <>
      <LanguageToggle variant="auth" />
      <AuthLayout title={t("auth.signUp.title")}>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <AuthInput
            label={t("auth.signUp.name")}
            type="text"
            id="name"
            placeholder={t("auth.signUp.namePlaceholder")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <AuthInput
            label={t("auth.signUp.email")}
            type="email"
            id="email"
            placeholder={t("auth.signUp.emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthPassword
            label={t("auth.signUp.password")}
            id="password"
            placeholder={t("auth.signUp.passwordPlaceholder")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <AuthButton variant="primary" type="submit">
            {t("auth.signUp.signUpButton")}
          </AuthButton>
        </form>
      </AuthLayout>
    </>
  );
};

export default SignUp;
