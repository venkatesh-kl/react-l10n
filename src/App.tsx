import { useTranslation } from "react-i18next";
import "./App.css";
import Meg from "./Meg";
import { initI18n } from "./utils/i18n";

function App() {
  initI18n();
  const i18n = useTranslation();
  return (
    <>
      <h1>{i18n.t("t.welcome_message")}</h1>
      <p className="read-the-docs">{i18n.t("t.read_the_docs")}</p>
      <p>{i18n.t("t.deep.ocean.fish")}</p>
      <Meg />
    </>
  );
}

export default App;
