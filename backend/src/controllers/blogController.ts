import { NextFunction, Request, Response } from 'express';
import { generateSlug } from '../helpers/generateSlug';
import { BlogPost, posts } from '../models/posts';

// Create a blog post
export const createBlogPost = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { title, content, author } = req.body;
    const newSlug = generateSlug(title);

    const newPost: BlogPost = {
      id: `${posts.length + 1}`,
      title,
      content,
      author,
      createdAt: new Date().toISOString(),
      slug: newSlug,
    };

    posts.push(newPost);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

// Read all posts
export const getAllPosts = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const FetchedPosts = posts;

    res.status(200).json(FetchedPosts);
  } catch (error) {
    next(error);
  }
};

//Read one post by Id
export const getPostById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  try {
    const post = posts.find((post) => post.id === id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

// Update a post
export const updatePost = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  try {
    const post = posts.find((post) => post.id === id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    post.title = title;
    post.content = content;
    post.author = author;
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

// Delete a post
export const deletePost = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const postIndex = posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    const deletedItem = posts.splice(postIndex, 1)[0];
    res.status(200).json({ message: 'Post deleted successfully', deletedItem });
  } catch (error) {
    next(error);
  }
};
