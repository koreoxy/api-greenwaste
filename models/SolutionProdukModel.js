import mongoose from 'mongoose';

const produkSchema = new mongoose.Schema(
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

articleInfo: {
   type: String,
   require: true,
   unique: true,
},

article: {
   type: String,
   require: true,
   unique: true,
},
},
{ timestamps: true }
);

const SolutionProduk = mongoose.model('SolutionProduk', produkSchema);

export default SolutionProduk;
