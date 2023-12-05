import BeritaTerkini from '../models/BeritaTerkiniModel.js';

// GET ALL BERITA TERKINI
export const getBeritaTerkini = async (req, res) => {
  try {
    const beritaTerkini = await BeritaTerkini.find();
    res.json(beritaTerkini);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET BERITA TERKINI BY ID
export const getBeritaTerkiniById = async (req, res) => {
  try {
    const beritaTerkini = await BeritaTerkini.findById(req.params.id);
    res.json(beritaTerkini);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// CREATE NEW BERITA TERKINI
export const createBeritaTerkini = async (req, res) => {
  const beritaTerkini = new BeritaTerkini(req.body);
  try {
    const createdBeritaTerkini = await beritaTerkini.save();
    res.status(201).json(createdBeritaTerkini);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE BERITA TERKINI
export const updateBeritaTerkini = async (req, res) => {
  try {
    const updatedBeritaTerkini = await BeritaTerkini.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedBeritaTerkini);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE BERITA TERKINI
export const deleteBeritaTerkini = async (req, res) => {
  try {
    const deletedBeritaTerkini = await BeritaTerkini.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedBeritaTerkini);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
