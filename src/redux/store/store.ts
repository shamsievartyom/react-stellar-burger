import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { socketMiddleware } from '../middlewares/WebSocket';

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk, socketMiddleware("wss://norma.nomoreparties.space/")))
);

export default store;