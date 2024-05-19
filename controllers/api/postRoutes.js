const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.error('Error in POST /api/posts:', err);
    res.status(400).json({ message: 'Bad request' });
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
        userId: req.session.user_id,
      },
    });

    if (!updatedPost[0]) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(updatedPost);
  } catch (err) {
    console.error('Error in PUT /api/posts/:id:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        userId: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.error('Error in DELETE /api/posts/:id:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
