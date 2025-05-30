import express from "express";
import blogPostRoutes from "./routes/blogPostsRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

// Routes
app.use("/api/blog", blogPostRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
