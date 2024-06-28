import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

["de", "en", "fr", "sp"].forEach((lang) => {
  const localeDirectory = path.join(__dirname, `./locales`);
  const file = fs
    .readFileSync(path.join(localeDirectory, `${lang}.yml`), "utf-8")
    .toString();
  const translations = yaml.load(file);
  fs.writeFileSync(
    path.join(localeDirectory, `${lang}.ts`),
    `const locale = ${JSON.stringify(translations, null, 2)};
export default  locale;`
  );
});
