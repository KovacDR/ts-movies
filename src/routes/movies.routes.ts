import { Router, Response, Request } from 'express';
import { controller } from '../controller/movie.controller';

const router = Router();

router.route('/')
    .get(controller.listMovies)
    .post(controller.addMovie);

router.get('/delete/:id', controller.deleteMovie);

export default router;