import express from 'express';
import {
  createSolutionKompos,
  deleteSolutionKompos,
  getSolutionByIdKompos,
  getSolutionsKompos,
  updateSolutionKompos,
} from '../controllers/SolutionKomposController.js';

const router = express.Router();

router.get('/solutionsKompos', getSolutionsKompos);
router.get('/solutionsKompos/:id', getSolutionByIdKompos);
router.post('/solutionsKompos', createSolutionKompos);
router.patch('/solutionsKompos/:id', updateSolutionKompos);
router.delete('/solutionsKompos/:id', deleteSolutionKompos);

export default router;
