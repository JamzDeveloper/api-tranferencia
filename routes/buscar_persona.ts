import {Router} from 'express';
import { getPersona } from '../controllers/buscar_persona';

const router = Router();
router.get("/",getPersona);

export default router;