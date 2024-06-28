import { useTranslation } from "react-i18next";

export default function Meg(): JSX.Element {
  const i18n = useTranslation();
  return (
    <>
      <p>I am not translated :(</p>
      <p>{i18n.t("t.deep.ocean.meg")}</p>
    </>
  );
}
