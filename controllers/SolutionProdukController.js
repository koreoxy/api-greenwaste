import SolutionProduk from '../models/SolutionProdukModel.js';

export const getSolutionsProduk = async (req, res) => {
  try {
    const solutionsProduk = await SolutionProduk.find();
    res.json(solutionsProduk);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSolutionProdukById = async (req, res) => {
  try {
    const solutionProduk = await SolutionProduk.findById(req.params.id);
    res.json(solutionProduk);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSolutionProduk = async (req, res) => {
  const solutionProduk = new SolutionProduk(req.body);
  try {
    const createdSolutionProduk = await solutionProduk.save();
    res.status(201).json(createdSolutionProduk);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSolutionProduk = async (req, res) => {
  try {
    const updatedSolutionProduk = await SolutionProduk.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedSolutionProduk);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSolutionProduk = async (req, res) => {
  try {
    const deletedSolutionProduk = await SolutionProduk.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedSolutionProduk);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
