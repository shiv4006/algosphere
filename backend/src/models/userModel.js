import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },

  completedProblems: [
    {
      problem: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem' },
      problemId: { type: String, required: true },
      notes: { type: String, default: '' },
      completedAt: { type: Date, default: Date.now },
    },
  ],

  revisedProblems: {
    type: [String],
    default: []
  },

  completedProblemLevels: {
    type: Map,
    of: Number,
    default: {},
  },

  completedProblemTopics: {
    type: Map,
    of: Number,
    default: {},
  },

  location: { type: String },
  college: { type: String },
  linkedin: { type: String },
  github: { type: String },
  leetcode: { type: String },
}, { timestamps: true })

export default mongoose.model("user", userSchema);