// import all required packages
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config({
  path: "./config.env",
});
// create express app
const app = express();
const PORT = process.env.PORT || 3001;
// create morgan middleware
app.use(morgan("dev"));

// listen for requests

app.listen(PORT, (err) => {
  if (err) {
    console.log(`something is wrong here!!!, ${err}`);
  } else {
    console.log(
      `Awesome!!! Our express server is running on http://localhost:${PORT}`
    );
  }
});
