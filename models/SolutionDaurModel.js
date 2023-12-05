import mongoose from 'mongoose';

const daurSchema = new mongoose.Schema(
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

const SolutionDaur = mongoose.model('SolutionDaur', daurSchema);

export default SolutionDaur;
