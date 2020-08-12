import mongoose, { connect } from 'mongoose';

mongoose.connect('mongodb://localhost:27017/ts-movies', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.once('open', () => {
    console.log('>>> DB is connected <<<');
});

mongoose.connection.on('error', (err: Error) => {
    console.log('>>> Fatal Error', err.message);
})