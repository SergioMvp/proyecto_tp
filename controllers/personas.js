import Persona from "../models/persona.js"

const httpPersonas = {
    getpersonas: async (req, res) => {
        try {
            const personas = await Persona.find()
            res.json({ personas })
            
        } catch (error) {
            res.status(400).json({error})
        }

    },
    getPersonasCedula: async (req, res) => {
        const {cedula}=req.params
        try {
            const personas = await Persona.find({cc:cedula})
            // const personas = await Persona.find({
            //     $and:[
            //         {cc:cedula},
            //         {estado:1}
            //     ]
            // })
            res.json({ personas })
            
        } catch (error) {
            res.status(400).json({error})
        }
    },

    getPersonaId: async(req,res)=>{
        try {
            const { id } = req.params
            //const persona= await Persona.find({_id:id})
            const persona = await Persona.findById(id)
            res.json({ persona })
        } catch (error) {
            res.status(400).json({error})
        }
        
    },

    postPersonas: async (req, res) => {
        try {
            const { nombre, edad, cc, email, password, fechanacimiento, hijos } = req.body
            const persona = new Persona({ nombre, edad, cc, email, password, fechanacimiento, hijos })
            await persona.save()

            res.json({ persona })
        } catch (error) {
            res.status(400).json({ error })
        }


    },
    putpersonas: async (req,res) => {
        const {id}=req.params
        const {nombre,edadnueva}=req.body
        const persona=await 
            Persona.findByIdAndUpdate(id,{nombre,edad:edadnueva},{new:true});
    },
    deletePersonas: async()=>{
        const {cedula}=req.params
        const persona= await Persona.findOneAndDelete({cc:cedula})
        //const persona= await Persona.deleteMany({condiciones})
        res.json({persona})
    },
    deletePersonaById: async ()=>{
        try {
            const {id}=req.params
            const persona=await Persona.findByIdAndDelete(id)
        } catch (error) {
            
        }
    },

    putPersonaInactivar: async ()=>{
        try {
            const {id}=req.params
            const persona=await Persona.findByIdAndUpdate(id,{estado:0},{new:true})
            res.json({persona})
        } catch (error) {
            
        }
    },
    putPersonaActivar: async ()=>{
        try {
            const {id}=req.params
            const persona=await Persona.findByIdAndUpdate(id,{estado:1})
        } catch (error) {
            
        }
    }

}

export default httpPersonas