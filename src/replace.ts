import * as fs from 'fs';
import * as path from 'path';

var basepath = path.join(__dirname + '/../');
const projectRoot = path.resolve('../../')
console.log(projectRoot);
fs.copyFileSync(basepath + 'replace/AppleSimUtils.js', projectRoot + '/node_modules/detox/src/devices/ios/AppleSimUtils.js');