import express from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";
import { AppDataSource } from './data-source'

import htmlRouter from './controllers/html'
import playgroundController from './controllers/PlaygroundController'

const app = express();
const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database initialized");
  })
  .catch((err) => console.error("Database initialization error:", err));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(expressLayouts);

app.use(express.static(path.join(__dirname, "../views")));

app.use(playgroundController);
app.use(htmlRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
