import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	likeCount: { type: Number, default: 0 },
	likedBy: [{ type: String }], // Array of user IDs who liked the article
});

export default mongoose.model('Article', articleSchema);
