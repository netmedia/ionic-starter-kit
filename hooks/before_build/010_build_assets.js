#!/usr/bin/env node

var exec = require('child_process').exec,
    child;

console.log('Runnung Gulp tasks. Please wait...');

var gulpCommand = 'gulp build-prepare';

if (process.env.CORDOVA_CMDLINE && process.env.CORDOVA_CMDLINE.indexOf('--production') > 0) {
	gulpCommand = 'gulp build-prepare --production';
}

child = exec(gulpCommand,
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});