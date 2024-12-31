import express from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";
import htmlRouter from './controllers/html'

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(expressLayouts);

app.use(express.static(path.join(__dirname, "../views")));

app.use(htmlRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
