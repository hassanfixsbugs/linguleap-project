import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const language = "ar";

  useEffect(() => {
    document.body.style.fontFamily =
      language === "ar"
        ? "'Noto Sans Arabic', sans-serif"
        : "'Instrument Sans', 'Inter', sans-serif";
  }, [language]);

  return <Dashboard />;
}

export default App;
