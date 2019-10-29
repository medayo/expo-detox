import * as fs from 'fs';
import * as path from 'path';

var basepath = path.join(__dirname + '/../');
fs.copyFileSync(basepath + 'replace/AppleSimUtils.js', './node_modules/detox/src/devices/ios/AppleSimUtils.js');