import * as fs from 'fs';
import * as path from 'path';

var basepath = path.join(__dirname + '/../');
let projectRoot = '';
if (__dirname.includes('@medayo/expo-detox')) {
    projectRoot = path.resolve('../../../');
} else {
    projectRoot = basepath;
}

console.log(projectRoot);
fs.copyFileSync(basepath + 'replace/AppleSimUtils.js', projectRoot + '/node_modules/detox/src/devices/ios/AppleSimUtils.js');