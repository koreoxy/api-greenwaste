import express from 'express';
import {
  createSolutionDaur,
  deleteSolutionDaur,
  getSolutionDaurById,
  getSolutionsDaur,
  updateSolutionDaur,
} from '../controllers/SolutionDaurController.js';

const router = express.Router();

router.get('/solutionsDaur', getSolutionsDaur);
router.get('/solutionsDaur/:id', getSolutionDaurById);
router.post('/solutionsDaur', createSolutionDaur);
router.patch('/solutionsDaur/:id', updateSolutionDaur);
router.delete('/solutionsDaur/:id', deleteSolutionDaur);

export default router;
