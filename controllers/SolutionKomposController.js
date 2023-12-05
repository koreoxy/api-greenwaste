import SolutionKompos from '../models/SolutionKomposModel.js';

// GET ALL SOLUTION
export const getSolutionsKompos = async (req, res) => {
  try {
    const solutionsKompos = await SolutionKompos.find();
    res.json(solutionsKompos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SOLUTION BY ID
export const getSolutionByIdKompos = async (req, res) => {
  try {
    const solutionKompos = await SolutionKompos.findById(req.params.id);
    res.json(solutionKompos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// CREATE NEW SOLUTION
export const createSolutionKompos = async (req, res) => {
  const solutionKompos = new SolutionKompos(req.body);
  try {
    const createdSolutionKompos = await solutionKompos.save();
    res.status(201).json(createdSolutionKompos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE SOLUTION
export const updateSolutionKompos = async (req, res) => {
  try {
    const updatedSolutionKompos = await SolutionKompos.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedSolutionKompos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE SOLUTION
export const deleteSolutionKompos = async (req, res) => {
  try {
    const deletedSolutionKompos = await SolutionKompos.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedSolutionKompos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
