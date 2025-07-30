import mongoose, { mongo } from "mongoose";

const problemSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  problemId: {type: String, required: true},
  title: {type: String, required: true},
  level: {type: String, required: true},
  topic: {type: String, required: true},
  notes: {type: String, default: ''},
  createdAt: {type: Date, default: Date.now},
})

export default mongoose.model("Problem", problemSchema);