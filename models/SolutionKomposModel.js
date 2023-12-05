import mongoose from 'mongoose';

const komposSchema = new mongoose.Schema(
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

const SolutionKompos = mongoose.model('SolutionKompos', komposSchema);

export default SolutionKompos; 