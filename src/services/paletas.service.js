const paletas = [
  {
    id: 1,
    sabor: "Açaí com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/acai-com-leite-condensado.png",
    preco: 10.0,
  },
  {
    id: 2,
    sabor: "Banana com Nutella",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/banana-com-nutella.png",
    preco: 10.0,
  },
  {
    id: 3,
    sabor: "Chocolate Belga",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/chocolate-belga.png",
    preco: 7.0,
  },
  {
    id: 4,
    sabor: "Chocolate Belga com Brigadeiro",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/chocolate-belga-com-brigadeiro.png",
    preco: 10.0,
  },
  {
    id: 5,
    sabor: "Chocolate Branco",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/chocolate-branco.png",
    preco: 7.0,
  },
  {
    id: 6,
    sabor: "Coco com doce de Leite",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/coco-com-doce-de-leite.png",
    preco: 10.0,
  },
  {
    id: 7,
    sabor: "Coco",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/coco.png",
    preco: 7.0,
  },
  {
    id: 8,
    sabor: "Cookies",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/cookies.png",
    preco: 7.0,
  },
  {
    id: 9,
    sabor: "Doce de Leite com Doce de Leite",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/doce-de-leite-com-doce-de-leite.png",
    preco: 10.0,
  },
  {
    id: 10,
    sabor: "Limão",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/limao.png",
    preco: 7.0,
  },
  {
    id: 11,
    sabor: "Maracujá com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/maracuja-com-leite-condensado.png",
    preco: 10.0,
  },
  {
    id: 12,
    sabor: "Maracujá",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/maracuja.png",
    preco: 7.0,
  },
];

export const findPaletasService = () => {
  return paletas;
};

export const findPaletaByIdService = (id) => {
  return paletas.find((paleta) => paleta.id == id);
};

export const createPaletaService = (newPaleta) => {
  const newId = paletas.length + 1;
  newPaleta.id = newId;
  paletas.push(newPaleta);
  return newPaleta;
};

export const updatePaletaService = (id, paletaEdited) => {
  paletaEdited['id'] = id;
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  paletas[paletaIndex] = paletaEdited;
  return paletaEdited;
};

export const deletePaletaService = (id) => {
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  return paletas.splice(paletaIndex, 1);
};

