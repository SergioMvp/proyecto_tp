import express from "express";
import mongoose from 'mongoose';

mongoose.connect(process.env.mongoDB)
  .then(() => console.log('Conectado a la base de datos'));

const app = express();
app.use(express.json());

const destinoSchema = new mongoose.Schema({
  ciudad: { type: String, required: true },
  pais: { type: String, required: true },
  estacion: { type: String, required: true },
  distancia: { type: String, required: true },
  destino: { type: String, required: true },
});

const Destino = mongoose.model('Destino', destinoSchema);

module.exports = Destino;
