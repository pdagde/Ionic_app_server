'use strict';

var smiliesController = require("./server_side/controller/api/smiliesServer.js");


module.exports.register = function(router){
  smiliesController.registorData();
    smiliesController.deleteData();
    router.route('/api/smilies').post(smiliesController.createNewSmiley);
    router.route('/api/getSmiley').post(smiliesController.getSmiley);
    router.route('/api/deleteData').post(smiliesController.deleteData);
  console.log('routes registered..!');
};