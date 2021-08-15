import express from 'express';
import cors from 'cors';

import { getData, redactData } from '../controllers/data.js';

const router = express.Router();
router.use(cors())

router.post('/', getData);
router.post('/redact', redactData);


export default router;