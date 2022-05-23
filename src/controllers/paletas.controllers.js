
import {
  findPaletasService,
  findPaletaByIdService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
} from '../services/paletas.service.js';

//Modificação do Service
export const findPaletasController = (req, res) => {
  const allPaletas = findPaletasService();
  res.send(allPaletas);
};

export const findPaletaByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = findPaletaByIdService(idParam);
  res.send(chosenPaleta);
};
//Fim da Modificação do Service

//CRUD
export const createPaletaController = (req, res) => {
  const paleta = req.body;
  const newPaleta = createPaletaService(paleta);
  res.send(newPaleta);
};

export const updatePaletaController = (req, res) => {
  const idParam = +req.params.id;
  const paletaEdit = req.body;
  const updatedPaleta = updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

export const deletePaletaController = (req, res) => {
  const idParam = req.params.id;
  deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};


//Fim CRUD