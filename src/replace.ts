import * as fs from 'fs';
import * as path from 'path';

var basepath = path.join(__dirname + '/../');

var userRootProject = path.resolve('../../../', __dirname);
fs.copyFileSync(basepath + 'replace/AppleSimUtils.js', userRootProject + '/node_modules/detox/src/devices/ios/AppleSimUtils.js');