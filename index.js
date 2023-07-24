import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

const uri =
  "mongodb+srv://ilhamfahmi011:if111202@cluster0.9sxx3vm.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    // Set up routes after the database connection is established
    app.use(UserRoute);

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Stop the server if there's an error connecting to MongoDB
  });
