import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: {...globals.node, ...globals.jest} } },
  {ignores: ["**/temp.js", "config/*"] },
  pluginJs.configs.recommended,
];