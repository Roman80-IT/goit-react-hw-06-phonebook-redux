import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';
// import { contactsOperationReducer } from './contactsOperationReducer';

// 53:30   State завжди задавати як об’єкт, щоб не було багів під час синхронізації з локальним сховищем

const rootReducer = combineReducers({
  contactsOperation: {},
  //   contacts: contactsReducer,
  //   filter: filterReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
