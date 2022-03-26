'use strict';
const Prospecto = require('../models/prospectos.model');
exports.findAll = function(req, res) {
Prospecto.findAll(function(err, prospecto) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', prospecto);
  res.send(prospecto);
});
};
exports.create = function(req, res) {
const new_prospecto = new Prospecto(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Prospecto.create(new_prospecto, function(err, prospecto) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Prospecto added successfully!",data:prospecto});
});
}
};
exports.findById = function(req, res) {
Prospecto.findById(req.params.id, function(err, prospecto) {
  if (err)
  res.send(err);
  res.json(prospecto);
});
};
exports.findByStatus = function(req, res) {
Prospecto.findByStatus(function(err, prospecto) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', prospecto);
    res.send(prospecto);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Prospecto.update(req.params.id, new Prospecto(req.body), function(err, prospecto) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Prospecto successfully updated' });
});
}
};
exports.delete = function(req, res) {
Prospecto.delete( req.params.id, function(err, prospecto) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Prospecto successfully deleted' });
});
};