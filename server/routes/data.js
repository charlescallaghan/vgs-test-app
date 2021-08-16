import express from 'express';
import cors from 'cors';

import { getData, revealData } from '../controllers/data.js';

const router = express.Router();
router.use(cors())

router.post('/', getData);
router.post('/reveal', revealData);


export default router;