import mongoose from 'mongoose';

const rekomendasiSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true,
        },

        image: {
            type: String,
            require: true,
            unique: true,
        },

        category: {
            type: String,
            require: true,
        },

        contentInfo: {
            type: String,
            require: true,
            unique: true,
        },

        content: {
            type: String,
            require: true,
            unique: true,
        },
    },
    { timestamps: true }
);

const BeritaRekomendasi = mongoose.model('BeritaRekomendasi', rekomendasiSchema);

export default BeritaRekomendasi;