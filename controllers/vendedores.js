import Persona from "../models/persona.js";
import Vendedor from "../models/vendedor.js";

const httpvendedor = {
  getVendedor: async (req, res) => {
    try {
      const vendedores = await Vendedor.find();
      res.json({ vendedores });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  
  getVendedorById: async (req, res) => {
    const { id } = req.params;
    try {
      const vendedor = await Vendedor.findById(id);
      res.json({ vendedor });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  
  postVendedor: async (req, res) => {
    try {
      const { nombre, edad, cc, email, password, fechanacimiento, hijos } = req.body;
      const vendedor = new Vendedor({ nombre, edad, cc, email, password, fechanacimiento, hijos });
      await vendedor.save();
      res.json({ vendedor });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  
  putVendedor: async (req, res) => {
    const { id } = req.params;
    const { nombre, edadnueva } = req.body;
    try {
      const vendedor = await Vendedor.findByIdAndUpdate(id, { nombre, edad: edadnueva }, { new: true });
      res.json({ vendedor });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  
  deleteVendedor: async (req, res) => {
    const { cedula } = req.params;
    try {
      const vendedor = await Vendedor.findOneAndDelete({ cc: cedula });
      res.json({ vendedor });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  
  deleteVendedorById: async (req, res) => {
    try {
      const { id } = req.params;
      const vendedor = await Vendedor.findByIdAndDelete(id);
      res.json({ vendedor });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  
  putVendedorInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const vendedor = await Vendedor.findByIdAndUpdate(id, { estado: 0 }, { new: true });
      res.json({ vendedor });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  
  putVendedorActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const vendedor = await Vendedor.findByIdAndUpdate(id, { estado: 1 });
      res.json({ vendedor });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
};

export default httpvendedor;
