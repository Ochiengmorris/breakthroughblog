import { Router } from 'express';
import {
  createBlogPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from '../controllers/blogController';

const router = Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/create', createBlogPost);
router.put('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

export default router;
