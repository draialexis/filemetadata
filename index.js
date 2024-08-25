// index.js
const app = require("./config/serverConfig");
const fileRoutes = require("./routes/fileRoutes");
const path = require("path");

const port = process.env.PORT || 3000;

app.use("/api", fileRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "index.html"));
});

app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
