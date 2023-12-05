import express from 'express';
import {
  getBeritaTerkini,
  getBeritaTerkiniById,
  createBeritaTerkini,
  updateBeritaTerkini,
  deleteBeritaTerkini,
} from '../controllers/BeritaTerkiniController.js';

const router = express.Router();


router.get('/berita-terkini', getBeritaTerkini);
router.get('/berita-terkini/:id', getBeritaTerkiniById);
router.post('/berita-terkini', createBeritaTerkini);
router.put('/berita-terkini/:id', updateBeritaTerkini);
router.delete('/berita-terkini/:id', deleteBeritaTerkini);

export default router;
