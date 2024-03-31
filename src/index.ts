import express, { json } from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandlerMiddleware";
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  console.log(req.url);
  res.status(200).json({
    message: "GET request received in '/' ",
  });
});

app.get("/api", (req, res) => {
  console.log(req.url);

  res.status(200).json({
    message: "GET request received",
  });
});

app.get("/api/getall", (req, res) => {
  console.log(req.url);
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
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const cleanupAndExit = () => {
  server.close(() => {
    console.log("Connection closed, Goodbye!");
    process.exit(0);
  });
};

process.on("SIGTERM", cleanupAndExit);
process.on("SIGINT", cleanupAndExit);
