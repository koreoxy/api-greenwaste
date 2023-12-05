import SolutionDaur from '../models/SolutionDaurModel.js';

export const getSolutionsDaur = async (req, res) => {
  try {
    const solutionsDaur = await SolutionDaur.find();
    res.json(solutionsDaur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSolutionDaurById = async (req, res) => {
  try {
    const solutionDaur = await SolutionDaur.findById(req.params.id);
    res.json(solutionDaur);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSolutionDaur = async (req, res) => {
  const solutionDaur = new SolutionDaur(req.body);
  try {
    const createdSolutionDaur = await solutionDaur.save();
    res.status(201).json(createdSolutionDaur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSolutionDaur = async (req, res) => {
  try {
    const updatedSolutionDaur = await SolutionDaur.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedSolutionDaur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSolutionDaur = async (req, res) => {
  try {
    const deletedSolutionDaur = await SolutionDaur.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedSolutionDaur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
