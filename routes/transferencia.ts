import { Router } from "express";
import { getTransferencia } from "../controllers/transferencia";

const router = Router();
router.get("/", getTransferencia);


export default router;
