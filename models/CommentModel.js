import mongoose from 'mongoose';

// Schema untuk komentar
const commentSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  questionRef: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
