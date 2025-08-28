// src/modules/usuarios/usuario.routes.js
import express from "express";
import {
  getAllUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  loginUsuario
} from "./usuario.controller.js";

const router = express.Router();

import { authMiddleware } from "../../utils/administrarToken.js";

// Rutas para Usuarios
router.get("/listartodos", authMiddleware, getAllUsuarios);
router.post("/crear", authMiddleware, createUsuario);
router.put("/actualizar/:id", authMiddleware, updateUsuario);
router.delete("/eliminar/:id", authMiddleware, deleteUsuario);
router.post("/login", loginUsuario);

export default router;