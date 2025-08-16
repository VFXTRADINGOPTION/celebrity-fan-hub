import { Router } from 'express';
import { getCelebrityList, getCelebrityDetails } from '../controllers/celebrityController';

const router = Router();

router.get('/celebrities', getCelebrityList);
router.get('/celebrities/:id', getCelebrityDetails);

export default router;