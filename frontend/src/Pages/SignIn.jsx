import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import AuthLayout from "../Components/Auth/AuthLayout.tsx";
import AuthInput from "../Components/Auth/AuthInput.tsx";
import AuthPassword from "../Components/Auth/AuthPassword.tsx";
import AuthButton from "../Components/Auth/AuthButton.tsx";
import LanguageToggle from "../Components/LanguageToggle.jsx";

const SignIn = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", { email, password });

      dispatch(setCredentials({ token: res.data.token }));

      try {
        const me = await axios.get("/auth/me", {
          headers: { Authorization: `Bearer ${res.data.token}` },
        });

        dispatch(setCredentials({ token: res.data.token, user: me.data }));
      } catch {}

      navigate("/dashboard");
    } catch (_err) {
      console.error("Login failed:", _err);
    }
  };

  return (
    <>
      <LanguageToggle variant="auth" />
      <AuthLayout title={t("auth.signIn.title")}>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <AuthInput
            label={t("auth.signIn.email")}
            type="email"
            id="email"
            placeholder={t("auth.signIn.emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div>
            <AuthPassword
              label={t("auth.signIn.password")}
              id="password"
              placeholder={t("auth.signIn.passwordPlaceholder")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="text-right mt-2">
              <button
                type="button"
                className="text-sm font-medium text-gray-900 hover:underline"
              >
                {t("auth.signIn.forgotPassword")}
              </button>
            </div>
          </div>

          <AuthButton variant="primary" type="submit">
            {t("auth.signIn.signInButton")}
          </AuthButton>

          <p className="text-start text-sm text-gray-600">
            {t("auth.signIn.noAccount")}{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="font-semibold text-gray-900 hover:underline"
            >
              {t("auth.signIn.signUp")}
            </button>
          </p>
        </form>
      </AuthLayout>
    </>
  );
};

export default SignIn;
