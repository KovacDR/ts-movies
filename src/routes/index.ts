import { Router, Response, Request } from 'express';
import movies from './movies.routes';

const router = Router();

router.use('/movies', movies);
router.get('/', (_, res: Response) => {
    res.render('index');
});

export default router;