import thunk from 'redux-thunk';
import multi from 'redux-multi';
import { createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from '../reducers';

const middlewares = [multi, thunk];

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const createAppropriateStore = console.tron.createStore;

const store =
  __DEV__ === true
    ? createAppropriateStore(persistedReducer, applyMiddleware(...middlewares))
    : createStore(persistedReducer, {}, applyMiddleware(...middlewares));

export const loja = store;
export const persistor = persistStore(store);

export default store;
