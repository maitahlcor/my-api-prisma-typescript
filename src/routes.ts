import { Application } from 'express';

import userRoutes from './api/users';
import reviewRoutes from './api/reviews';
import postRoutes from './api/posts';

function routes(app: Application) {
  app.use('/api/users', userRoutes);
  app.use('/api/reviews', reviewRoutes);
  app.use('/api/posts', postRoutes);
}

export default routes;
