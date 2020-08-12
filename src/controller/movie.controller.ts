import Movie from '../models/movie.model';
import { Response, Request } from 'express';

export class controller {

    static listMovies(req: Request, res: Response) {
        Movie.find()
            .lean()
            .then((movies) => res.render('movies/list', {data: movies}))
            .catch((err: Error) => console.log('error in listMovies', err.message));
    }

    static addMovie(req: Request, res: Response) {
        let { title, genre, rating } = req.body;
        title = title.toLowerCase();
        genre = genre.toLowerCase();

        const movie = new Movie({title, genre, rating});
        movie.save()
            .then(_ => res.status(201).redirect('/movies'))
            .catch((err: Error) => console.log(err.message));
    }

    static deleteMovie(req: Request, res: Response) {
        const { id } = req.params;
        Movie.findByIdAndDelete(id)
            .then(_ => res.status(202).redirect('/movies'))
            .catch((err: Error) => console.log(err.message));
    }

}