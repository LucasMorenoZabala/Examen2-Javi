import { Router } from 'express';
import { home, login} from '../controllers/controllers.js';
const router = Router();


//Definir rutas
router.get('/', home);
router.get('/login', login);

export default router;