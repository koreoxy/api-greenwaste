import express from 'express';
import {
  createSolutionProduk,
  deleteSolutionProduk,
  getSolutionProdukById,
  getSolutionsProduk,
  updateSolutionProduk,
} from '../controllers/SolutionProdukController.js';

const router = express.Router();

router.get('/solutionsProduk', getSolutionsProduk);
router.get('/solutionsProduk/:id', getSolutionProdukById);
router.post('/solutionsProduk', createSolutionProduk);
router.patch('/solutionsProduk/:id', updateSolutionProduk);
router.delete('/solutionsProduk/:id', deleteSolutionProduk);

export default router;
