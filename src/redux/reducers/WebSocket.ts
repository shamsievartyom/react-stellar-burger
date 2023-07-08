import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WebSocketActions,
  WS_CLOSE,
} from '../actions/WebSocket';

export type Torder = {
  _id: string
  ingredients: string[]
  status: string
  name: string
  createdAt: Date
  updatedAt: Date
  number: number
}

export type TWSState = {
  wsConnected: boolean;
  messages: {
    success: boolean,
    orders: Torder[]
    total: number,
    totalToday: number,
  } | null;

  error?: Event;
}

const initialState: TWSState = {
  wsConnected: false,
  messages: null
};

// Создадим редьюсер для WebSocket
export const wsReducer = (state: TWSState = initialState, action: WebSocketActions) => {
  switch (action.type) {
    // Опишем обработку экшена с типом WS_CONNECTION_SUCCESS
    // Установим флаг wsConnected в состояние true
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };

    // Опишем обработку экшена с типом WS_CONNECTION_ERROR
    // Установим флаг wsConnected в состояние false и передадим ошибку из action.payload
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };

    // Опишем обработку экшена с типом WS_CONNECTION_CLOSED, когда соединение закрывается
    // Установим флаг wsConnected в состояние false
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };

    case WS_CLOSE:
      return {
        messages: null,
        error: undefined,
        wsConnected: false
      };
    // Опишем обработку экшена с типом WS_GET_MESSAGE
    // Обработка происходит, когда с сервера возвращаются данные
    // В messages передадим данные, которые пришли с сервера
    case WS_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        messages: action.payload
      };

    default:
      return state;
  }
}; 