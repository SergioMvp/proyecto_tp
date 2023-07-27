import Autobus from "../models/autobus.js"

const httpautobus = {
  getAutobus: async (req, res) => {
    const { cedula } = req.params;
    try {
      const autobuses = await Autobus.find({ cc: cedula });
      res.json({ autobuses });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getAutobusById: async (req, res) => {
    try {
      const { id } = req.params;
      const autobus = await Autobus.findById(id);
      res.json({ autobus });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  updateAutobus: async (req, res) => {
    const { id } = req.params;
    const { nombre, edadnueva } = req.body;
    try {
      const autobus = await Autobus.findByIdAndUpdate(
        id,
        { nombre, edad: edadnueva },
        { new: true }
      );
      res.json({ autobus });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  deleteAutobus: async (req, res) => {
    const { id } = req.params;
    try {
      const autobus = await Autobus.findOneAndDelete({ id: id });
      res.json({ autobus });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
};

export default httpautobus;
