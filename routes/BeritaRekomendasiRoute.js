import express from 'express';
import {
  getBeritaRekomendasi,
  getBeritaRekomendasiById,
  createBeritaRekomendasi,
  updateBeritaRekomendasi,
  deleteBeritaRekomendasi,
} from '../controllers/BeritaRekomendasiController.js';

const router = express.Router();

router.get('/berita-rekomendasi', getBeritaRekomendasi);
router.get('/berita-rekomendasi/:id', getBeritaRekomendasiById);
router.post('/berita-rekomendasi', createBeritaRekomendasi);
router.put('/berita-rekomendasi/:id', updateBeritaRekomendasi);
router.delete('/berita-rekomendasi/:id', deleteBeritaRekomendasi);

export default router;
