import express from 'express';
import configExpress from './config/express';
import routes from './routes';
// import routes from './routes';

const app = express();

const PORT = process.env.PORT ?? 8080;

//set up express
configExpress(app);

//Setup routes
routes(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
