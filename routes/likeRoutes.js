import express from 'express';
import {
	getLikeCount,
	incrementLikeCount,
} from '../controllers/likeController.js';

const router = express.Router();

router.get('/:articleId/like-count', getLikeCount);
router.post('/:articleId/like', incrementLikeCount);

export default router;
