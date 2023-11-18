import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist' // imports from redux-persist

import rootReducer from '@redux/reducers';
import storageSession from 'redux-persist/lib/storage/session'

const persistConfig = {
    key: 'root',
    storage: storageSession,
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer

const store = createStore(
    persistedReducer,
    applyMiddleware()
)

const persistor = persistStore(store);

export { store, persistor }