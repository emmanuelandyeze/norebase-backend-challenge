import express from 'express';
import mongoose from 'mongoose';
import likeRoutes from './routes/likeRoutes.js';
import { rateLimiter } from './utils/rateLimiter.js';

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/likeButton', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use('/api/articles', rateLimiter, likeRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`),
);
