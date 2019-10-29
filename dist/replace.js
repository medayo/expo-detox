"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
var jsonPath = path.join(__dirname + '/../');
console.log(jsonPath);
fs.copyFileSync(jsonPath + 'replace/AppleSimUtils.js', jsonPath + 'node_modules/detox/src/devices/ios/AppleSimUtils.js');
console.log('cool');
