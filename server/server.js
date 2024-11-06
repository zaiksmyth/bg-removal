import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/UseController.js";

// App config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

// Initialize middleware
app.use(express.json());
app.use(cors());

// API routes
app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("api/user", clerkWebhooks);

app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});
