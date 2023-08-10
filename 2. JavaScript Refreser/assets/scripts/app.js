import { apiKey } from "./util.js";
import { apiKey as utilKey, abc as content } from "./util.js";

import key from "./util.js"

import * as util from "./util.js"

// `from` tells from which file it is being imported
//  ./ => same folder
//  ../ => different folder

console.log("simple export " + apiKey);
console.log("default export " + key);

console.log("imported as object " + util.abc + " " + util.apiKey + " " + util.default);

console.log("alias name " + utilKey + " " + content);