const express = require("express");
const chainRoutes = require("./routes/chain");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.json("API Root");
});

app.use("/api", chainRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
