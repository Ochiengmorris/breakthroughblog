import { Request, Response, NextFunction } from 'express';
import { posts } from '../src/models/posts';
import { getAllPosts } from '../src/controllers/blogController';

describe('BlogPostController', () => {
  it('should return an empty array when no items exist', () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    // Ensure that our in-memory store is empty
    posts.length = 0;

    // Execute our controller function
    getAllPosts(req, res, jest.fn());

    // Expect that res.json was called with an empty array
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([]);
  });
});
