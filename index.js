import express from "express";
import mongoose from 'mongose';
import "dotenv/config" 

mongoose.conect(process.env.mongoDB)
.then(()=> console.log('conectado'));

const app =express()
app.use (express.json())


const mongoose = require('mongoose');



const pasajeroSchema = new mongoose.Schema({
    nombre:{type:String,require:true},
    cedula: { type: String, required: true },
    telefono: { type: String, required: true },
    edad: { type: Number, required: true },
    direccion :{type: String,required:true}, 
});

const reservaSchema = new mongoose.Schema({
    nombre:{type:String,require:true},
    cedula: { type: String, required: true },
    telefono: { type: String, required: true },
    edad: { type: Number, required: true },
    direccion :{type: String,required:true}, 
    precio :{type: String,required:true}, 
    
});

const ciudadSchema = new mongoose.Schema({
    nombre:{type:String,require:true},
    pais: { type: String, required: true },
});

const estacionSchema = new mongoose.Schema({
    estacion_nombre:{type:String,require:true},
    ciudad: { type: String, required: true },
});

const autobusSchema = new mongoose.Schema({
    id_placa:{type:String,require:true},
    capacidad: { type: String, required: true },
    estado: { type: String, required: true },
    conductor: { type: String, required: true },
});

const conductorSchema = new mongoose.Schema({
    nombre:{type:String,require:true},
    apellido: { type: String, required: true },
    contacto: { type: String, required: true },
    licencia: { type: String, required: true },
    experiencia: { type: String, required: true },
});

const rutasSchema = new mongoose.Schema({
    ciudad_origen:{type:String,require:true},
    ciudad_destino: { type: String, required: true },
    autobus: { type: String, required: true },
    hora_salida: { type: String, required: true },
    hora_llegada: { type: String, required: true },
    duracion_estimada: { type: String, required: true },

});

const tarifasSchema = new mongoose.Schema({
    ciudad_origen:{type:String,require:true},
    ciudad_destino: { type: String, required: true },
    autobus: { type: String, required: true },
    hora_salida: { type: String, required: true },
    hora_llegada: { type: String, required: true },
    duracion_estimada: { type: String, required: true },

});

const reservasSchema = new mongoose.Schema({
    ciudad_origen:{type:String,require:true},
    ciudad_destino: { type: String, required: true },
    autobus: { type: String, required: true },
    hora_salida: { type: String, required: true },
    hora_llegada: { type: String, required: true },
    duracion_estimada: { type: String, required: true },

});

const paradasSchema = new mongoose.Schema({
    id_placa:{type:String,require:true},
    capacidad: { type: String, required: true },
    estado: { type: String, required: true },
    conductor: { type: String, required: true },
});


import {check} from "express-validator"


const Destino = mongoose.model('Destino', destinoSchema);

module.exports = Destino;


persona