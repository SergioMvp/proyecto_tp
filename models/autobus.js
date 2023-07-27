import mongoose from 'mongose';

const autobusSchema = new mongoose.Schema({
    bus_id: {type:mongoose.Schema.Types.ObjectId,ref:`autobusSchema`, require:true},
    capacidad: { type: String, required: true },
    estado: { type: String, required: true },
    conductor: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
});

export default autobus[{autobusSchema}]