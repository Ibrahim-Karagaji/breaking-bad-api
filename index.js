import express from "express";
const app = express();
import cors from "cors";

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

app.listen(1000, () => {
  console.log("server is running");
});
