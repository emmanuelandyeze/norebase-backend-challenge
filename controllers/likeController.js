import Article from '../models/Article.js';

// Get the like count
export const getLikeCount = async (req, res) => {
  const { articleId } = req.params;
  try {
    const article = await Article.findById(articleId);
    res.json({ count: article.likeCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve like count.' });
  }
};

// Increment like count and store user who liked it
export const incrementLikeCount = async (req, res) => {
  const { articleId } = req.params;
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required to like an article.' });
  }

  try {
    const article = await Article.findById(articleId);

    // Check if the user has already liked the article
    if (article.likedBy.includes(userId)) {
      return res.status(400).json({ error: 'User has already liked this article.' });
    }

    // Increment the like count and add user to likedBy array
    article.likeCount += 1;
    article.likedBy.push(userId);
    await article.save();

    res.json({ count: article.likeCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to like article.' });
  }
};
