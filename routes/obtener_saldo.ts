import {Router} from 'express';
import {getSaldo}from '../controllers/obtener_saldo';
const router = Router();
router.get("/",getSaldo);

export default router;