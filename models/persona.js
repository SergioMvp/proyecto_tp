import mongoose from 'mongose';


const personaSchema = new mongoose.Schema({
    nombre:{type:String,require:true, },
    cedula: { type: String, required: true },
    telefono: { type: String, required: true },
    edad: { type: Number, required: true },
    direccion :{type: String,required:true}, 
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
});

export default persona[{personaSchema}]