const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static("Public"));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "Public", "index.html"));
});
app.get("/about", (requst, response) => {
  response.send("bobi");
});

app.use((request, response) => {
  response.sendFile(path.join(__dirname, "public", "notFound.html"));
});

app.listen(PORT, () => {
  console.log(`serve listening at http://localhost:${PORT}/`);
});
