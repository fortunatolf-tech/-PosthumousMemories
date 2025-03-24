import { configureStore } from '@reduxjs/toolkit';

// Definindo o estado inicial
const initialState = {
  user: null,
  connection: {
    isOnline: navigator.onLine,
    lastChecked: null
  }
};

// Reducer simples para o estado inicial
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'SET_CONNECTION_STATUS':
      return {
        ...state,
        connection: {
          ...state.connection,
          isOnline: action.payload,
          lastChecked: new Date().toISOString()
        }
      };
    default:
      return state;
  }
};

// Configurando a store
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

// Definindo tipos para o estado
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;