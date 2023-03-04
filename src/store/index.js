import { configureStore } from "@reduxjs/toolkit";
import categoriaSlice from "./reducers/categorias";
import itensSlice from "./reducers/itens";
import carrinhoSlice from "./reducers/carrinho";
import buscaSlice from "./reducers/busca";
import createSagaMiddleware from "@redux-saga/core";
import { categoriasSaga } from "./sagas/categorias";
import { itensListener } from "./middlewares/itens";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    categorias: categoriaSlice,
    itens: itensSlice,
    carrinho: carrinhoSlice,
    busca: buscaSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      // categoriasListener.middleware,
      itensListener.middleware,
      sagaMiddleware
    ),
});

sagaMiddleware.run(categoriasSaga);

export default store;
