import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const palettes = [
  {
    id: 1,
    flavor: "Açaí com Leite Condensado",
    description:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    photo: "assets/images/acai-com-leite-condensado.png",
    price: 10.0,
  },
  {
    id: 2,
    flavor: "Banana com Nutella",
    description:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    photo: "assets/images/banana-com-nutella.png",
    price: 10.0,
  },
  {
    id: 3,
    flavor: "Chocolate Belga",
    description:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    photo: "assets/images/chocolate-belga.png",
    price: 7.0,
  },
];

/*
* GETALL /api/palettes
*/

app.get('/palettes/all-palettes', (req, res) => {
  res.json(palettes);
});

/*
* GET BY ID /api/palettes/:id
*/

app.get('/palettes/palettes/:id', (req, res) => {
  const id = req.params.id;
  const chosenPalette = palettes.find(palette => palette.id === Number(id));
  res.json(chosenPalette);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
