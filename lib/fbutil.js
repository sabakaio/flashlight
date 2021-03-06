'use strict';

var Firebase = require('firebase-admin');
require('colors');

exports.init = function(databaseURL, serviceAccount) {
   var cred = Firebase.credential
   var config = {
     databaseURL: databaseURL,
     credential: serviceAccount ? cred.cert(serviceAccount) : cred.applicationDefault()
   };
   Firebase.initializeApp(config)
};

exports.fbRef = function(path) {
   return Firebase.database().ref().child(path);
};

exports.pathName = function(ref) {
   var p = ref.parent.key;
   return (p? p+'/' : '')+ref.key;
};

exports.isString = function(s) {
  return typeof s === 'string';
};

exports.isObject = function(o) {
  return o && typeof o === 'object';
};

exports.unwrapError = function(err) {
  if( err && typeof err === 'object' ) {
    return err.toString();
  }
  return err;
};

exports.isFunction = function(f) {
  return typeof f === 'function';
};
