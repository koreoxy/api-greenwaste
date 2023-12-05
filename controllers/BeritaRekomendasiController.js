import BeritaRekomendasi from '../models/BeritaRekomendasiModel.js';

// GET ALL BERITA REKOMENDASI
export const getBeritaRekomendasi = async (req, res) => {
  try {
    const beritaRekomendasi = await BeritaRekomendasi.find();
    res.json(beritaRekomendasi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET BERITA REKOMENDASI BY ID
export const getBeritaRekomendasiById = async (req, res) => {
  try {
    const beritaRekomendasi = await BeritaRekomendasi.findById(req.params.id);
    res.json(beritaRekomendasi);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// CREATE NEW BERITA REKOMENDASI
export const createBeritaRekomendasi = async (req, res) => {
  const beritaRekomendasi = new BeritaRekomendasi(req.body);
  try {
    const createdBeritaRekomendasi = await beritaRekomendasi.save();
    res.status(201).json(createdBeritaRekomendasi);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE BERITA REKOMENDASI
export const updateBeritaRekomendasi = async (req, res) => {
  try {
    const updatedBeritaRekomendasi = await BeritaRekomendasi.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedBeritaRekomendasi);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE BERITA REKOMENDASI
export const deleteBeritaRekomendasi = async (req, res) => {
  try {
    const deletedBeritaRekomendasi = await BeritaRekomendasi.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedBeritaRekomendasi);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
