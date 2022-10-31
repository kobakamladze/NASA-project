// configuring __dirname for ES6 import/export module
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export { __dirname };
