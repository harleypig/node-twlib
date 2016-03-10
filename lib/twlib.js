/* jslint node: true */
/* jshint node: true */
/* jshint esversion: 6 */

'use strict';

var childProcess = require( 'child_process' );
var semver       = require( 'semver' );
var which        = require( 'which' );

var earliestSupportedTaskVersion = '2.5.0';

var taskPath = which.sync( 'task' );
console.log( `task path is ${taskPath}` );

var taskVer = childProcess.execFileSync( taskPath, ['--version'] );
taskVer = semver.clean( taskVer.toString() );
console.log( `task version is ${taskVer}` );

if ( taskVer < earliestSupportedTaskVersion ) {
  throw `Versions of TaskWarrior less than ${earliestSupportedTaskVersion} are not supported.`;
}

exports.taskVersion = function () { return taskVer; };

var taskCommands = childProcess.execFileSync( taskPath, ['commands'] );
console.log( taskCommands.toString() );
console.log( 'continue' );

/*
function callTask ( command, options ) {

  childProcess.execFile(  )
}
 */
