import mongoose from 'mongose';

const vendedorSchema = new mongoose.Schema({

        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
        edad: { type: Number, required: true },
        email: { type: String, required: true },
        telefono: { type: String, required: true },
        direccion: { type: String, required: true },
        empresa: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        estado: { type: Number, default: 1 }
      });


export default vendedor[{ vendedorSchema }]