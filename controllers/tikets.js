import ticket from "../models/ticket"


const httpticket = {
  getTickets: async (req, res) => {
    try {
      const tickets = await Ticket.find();
      res.json({ tickets });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getTicketById: async (req, res) => {
    const { id } = req.params;
    try {
      const ticket = await Ticket.findById(id);
      res.json({ ticket });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  createTicket: async (req, res) => {
    try {
      const { numero, pasajero, ruta, precio } = req.body;
      const ticket = new Ticket({ numero, pasajero, ruta, precio });
      await ticket.save();
      res.json({ ticket });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  updateTicket: async (req, res) => {
    const { id } = req.params;
    const { numero, pasajero, ruta, precio } = req.body;
    try {
      const ticket = await Ticket.findByIdAndUpdate(
        id,
        { numero, pasajero, ruta, precio },
        { new: true }
      );
      res.json({ ticket });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  deleteTicket: async (req, res) => {
    const { id } = req.params;
    try {
      const ticket = await Ticket.findByIdAndDelete(id);
      res.json({ ticket });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

export default httpticket;


    

