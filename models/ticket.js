import mongoose from 'mongose';

const ticketSchema = new mongoose.Schema({
    vendedor_id:{type:String , require:true},
    cliente_id:{type:String , require:true},
    ruta_id:{type:String , require:true},
    bus_id:{type:String , require :true },
    fecha_venta:{type:Date, require:true},
    hora_venta:{type:Date, require:true},
    createAT:{default:Date.now},
    estado :{type:Boolean,default:false},
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
})

export default ticket[{ticketSchema}]