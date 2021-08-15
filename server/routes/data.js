import express from 'express';
import cors from 'cors';

import { getData } from '../controllers/data.js';

const router = express.Router();
router.use(cors())

router.post('/', getData);

export default router;