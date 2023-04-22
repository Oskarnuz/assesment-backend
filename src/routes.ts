import { Application } from 'express';

import healthcheck from './api/healthcheck';
import user from './api/user';
import list from './api/list';
import favorite from './api/favorite';
import authLocal from './auth/local';


const routes = (app: Application): void => {
  app.use('/api/healthcheck', healthcheck)
  app.use('/api/user', user)
  app.use('/api/list', list)
  app.use('/api/favorite', favorite)

  app.use('/auth/local', authLocal)
}

export default routes