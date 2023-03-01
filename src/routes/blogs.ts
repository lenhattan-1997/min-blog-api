import express, { Request, Response } from "express";
import BlogModel from "../models/Blog";

const blogs_router = express.Router();

blogs_router.get("/", async (req: Request, res: Response) => {
  try {
    const blogs = await BlogModel.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

blogs_router.get("/:id", async (req: Request, res: Response) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

blogs_router.post("/", async (req: Request, res: Response) => {
  try {
    const blog = new BlogModel(req.body);
    await blog.save();
    res.json({ message: "Success!" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export default blogs_router;
