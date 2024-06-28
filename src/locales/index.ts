import en from "./en.ts";
import fr from "./fr.ts";
import sp from "./sp.ts";
import de from "./de.ts";

// ["en", "fr", "sp", "de"].forEach(async (locale) => {
//   locales[locale] = ((await import(`./${locale}.ts`)) as any).default;
// });
// console.log(locales);
// const locales: { [locale: string]: Record<string, any> } = {};
export default { en, fr, sp, de };
