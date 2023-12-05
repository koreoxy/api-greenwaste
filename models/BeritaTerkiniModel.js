import mongoose from 'mongoose';

const terkiniSchema = new mongoose.Schema(
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

const BeritaTerkini = mongoose.model('BeritaTerkini', terkiniSchema);

export default BeritaTerkini;