import express from "express";
//import * as paletasController from "../controllers/paletas.controller.js";
export const route = express.Router();

import {
  findPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
} from '../controllers/paletas.controllers.js';

// const paletasController = require('../controllers/paletas.controller');


route.get('/find-paletas', findPaletasController);
route.get('/find-paleta/:id', findPaletaByIdController);
route.post('/create', createPaletaController);
route.put('/update/:id', updatePaletaController);
route.delete('/delete/:id', deletePaletaController);

