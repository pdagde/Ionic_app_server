
var smiley = require('../../models/smiley');
var smiley_data = require('../../../DATA/smiley_data');

function createSmiley(req,res){
    var oneSmiley = req.body;

    console.log('in api',oneSmiley)
    smiley.create(oneSmiley,function(err,result){

        console.log('after  api',result)
        res.json(result);
    });
};

function deleteData() {
    smiley.remove({},function(err,result){
        console.log('after delete  api',result)
    });
}

function registorData() {
    smiley.create(smiley_data,function(err,result){
        console.log('after  api',result)
    });
}


function getSmiley(req,res){
    var query = {};
    query.name=req.body.name;
    console.log("server request",JSON.stringify(query));
    var selection = {_id : 0};
    smiley.find(query,selection,function(err,result){
        res.json(result);
    });
};


module.exports.registorData = registorData;
module.exports.createNewSmiley = createSmiley;
module.exports.getSmiley = getSmiley;
module.exports.deleteData = deleteData;