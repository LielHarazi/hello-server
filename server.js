const express = require("express");
const { request } = require("http");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/about", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "about.html"));
});
app.use((request, response) => {
  response.sendFile(path.join(__dirname, "public", "not-found-page.html"));
});
