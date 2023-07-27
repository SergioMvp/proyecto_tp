import ruta from "../models/ruta"


    const httpruta = {


        
        getRutas: async (req, res) => {
            try {
                const rutas = await Ruta.find();
                res.json({ rutas });
            } catch (error) {
                res.status(400).json({ error });
            }
        },

        getRutaById: async (req, res) => {
            const { id } = req.params;
            try {
                const ruta = await Ruta.findById(id);
                res.json({ ruta });
            } catch (error) {
                res.status(400).json({ error });
            }
        },

        createRuta: async (req, res) => {
            try {
                const { origen, destino, duracion, distancia } = req.body;
                const ruta = new Ruta({ origen, destino, duracion, distancia });
                await ruta.save();
                res.json({ ruta });
            } catch (error) {
                res.status(400).json({ error });
            }
        },

        updateRuta: async (req, res) => {
            const { id } = req.params;
            const { origen, destino, duracion, distancia } = req.body;
            try {
                const ruta = await Ruta.findByIdAndUpdate(
                    id,
                    { origen, destino, duracion, distancia },
                    { new: true }
                );
                res.json({ ruta });
            } catch (error) {
                res.status(400).json({ error });
            }
        }







    } 