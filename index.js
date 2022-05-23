import express from "express";
import path from "path";
import cors from "cors";
import { route } from "./src/routes/paletas.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/paletas', route);

/*
* GETALL /api/palettes
*/

app.get('/paletas/find-paletas', (req, res) => {
  res.send(paletas);
});

/*
* GET BY ID /api/palettes/:id
*/

app.get('/paletas/find-paleta/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);
  res.send(chosenPaleta);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
