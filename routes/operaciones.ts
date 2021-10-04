import { Router } from "express";
import { getOperaciones } from '../controllers/operaciones';

const router = Router();
router.get("/", getOperaciones);
export default router;
