import { Application } from 'express';

import healthcheck from './api/healthcheck';
import user from './api/user';
import list from './api/list';
import authLocal from './auth/local';


const routes = (app: Application): void => {
  app.use('/api/healthcheck', healthcheck)
  app.use('/api/user', user)
  app.use('/api/favs', list)

  app.use('/auth/local', authLocal)
}

export default routes