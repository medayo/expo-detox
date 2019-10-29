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
var basepath = path.join(__dirname + '/../');
const projectRoot = path.resolve('../../');
console.log(projectRoot);
fs.copyFileSync(basepath + 'replace/AppleSimUtils.js', projectRoot + '/node_modules/detox/src/devices/ios/AppleSimUtils.js');
