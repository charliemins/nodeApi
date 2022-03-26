'use strict';
var dbConn = require('./../../config/db.config');
//prospecto object create
var Prospecto = function(prospecto){
  this.nombre = prospecto.nombre;
  this.primer_apellido = prospecto.primer_apellido;
  this.segundo_apellido = prospecto.segundo_apellido;
  this.calle = prospecto.calle;
  this.numero = prospecto.numero;
  this.colonia = prospecto.colonia;
  this.codigo_postal = prospecto.codigo_postal;
  this.telefono = prospecto.telefono;
  this.rfc = prospecto.rfc;
  this.observacion = prospecto.observacion;
  this.status = prospecto.status;
  this.created_at = new Date();
  this.updated_at = new Date();
};
Prospecto.create = function (newPros, result) {
dbConn.query("INSERT INTO prospectos set ?", newPros, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Prospecto.findById = function (id, result) {
dbConn.query("Select * from prospectos where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Prospecto.findByStatus = function (result) {
dbConn.query("Select * from prospectos where status = 'enviado'", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Prospecto.findAll = function (result) {
dbConn.query("Select * from prospectos", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('employees : ', res);
  result(null, res);
}
});
};
Prospecto.update = function(id, prospecto, result){
dbConn.query("UPDATE prospectos SET observacion=?,status=? WHERE id = ?", [prospecto.observacion,prospecto.status,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Prospecto.delete = function(id, result){
dbConn.query("DELETE FROM prospectos WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Prospecto;