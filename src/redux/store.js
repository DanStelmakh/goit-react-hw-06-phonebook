// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './redusers';
import { contactReducer } from './redusers';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    //  filter: filterReducer,
  },
});
// Создаем расширение стора чтобы добавить инструменты разработчика
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
