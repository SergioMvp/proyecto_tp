import mongoose from 'mongose';

const rutaSchema = new mongoose.Schema({

    hora_partida: { type: Date, require: true },
    hora_llegada: { type: Date, require: true },
    fecha_partida: { type: Date, require: true },
    fecha_llegada: { type: Date, require: true },
    destino: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }

})

export default ruta[{ rutaSchema }]