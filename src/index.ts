import express, { json } from "express";
import cors from "cors";
import {
  errorHandler,
  notFoundHandler,
} from "./middleware/errorHandlerMiddleware";
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "GET request received",
  });
});

app.get("/api/getall", (req, res) => {
  res.status(200).json({
    message: "GET ALL request received",
  });
});

app.post("/api/add-post", (req, res) => {
  const { post } = req.body;

  if (!post) {
    throw Error("No Post found");
  }
  res.status(200).json({
    post,
  });
});

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
