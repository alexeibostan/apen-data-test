import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { doctors } from '../reducers/doctor';
import { app } from '../reducers/app';
import { packages } from '../reducers/package';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    app,
    doctors,
    packages
  });

export default createRootReducer;
