const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());

app.get("/braking-bad-api", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.mridul.tech/api/breaking-bad/characters"
    );

    const data = await response.json();

    return res.json({ characters: data.data, ok: true });
  } catch (err) {
    return res.json({ message: err, ok: false });
  }
});

app.listen(process.env.APP_PORT, () => {
  console.log("server is running ", process.env.APP_PORT);
});
