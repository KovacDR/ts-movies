import express, { json, urlencoded} from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import path from 'path';
import routes from './routes';

export default class Application {
    app: express.Application;
    constructor(){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', process.env.PORT || 5000);
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.hbs', exphbs({
            layoutsDir: path.join(this.app.get('views'), 'layout'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs'
        }));
        this.app.set('view engine', '.hbs');
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(json());
        this.app.use(urlencoded({extended: false}));
    }

    routes() {
        this.app.use(routes);
    }

    async start() {
        await this.app.listen(this.app.get('port'));
        console.log('Server running on port', this.app.get('port'));
    }
}