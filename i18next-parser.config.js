const { i18n: { locales } } = require("./next-i18next.config.js");

module.exports = {
  verbose: true,
  locales,
  jsx: [
    {
      lexer: "JsxLexer",
      attr: "i18nKey", // Attribute for the keys
      componentFunctions: ["Trans"], // Array of components to match
    },
  ],
  defaultNamespace: "common",
  output: "public/locales/$LOCALE/$NAMESPACE.json",
  input: [
    "src/modules/{404,500,CookiePolicy,Dressage,Contatti,ComePreparareIlFondo,Index,Tondini}/**/*.{ts,tsx}",
    "src/components/**/*.{ts,tsx}",
    "src/hooks/**/*.{ts,tsx}"
  ],
};
