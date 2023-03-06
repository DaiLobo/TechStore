import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "@redux-saga/core";

import { categoriasListener } from "./middlewares/categorias";
import { itensListener } from "./middlewares/itens";
import buscaSlice from "./reducers/busca";
import carrinhoSlice from "./reducers/carrinho";
import categoriaSlice from "./reducers/categorias";
import itensSlice from "./reducers/itens";
import { categoriasSaga } from "./sagas/categorias";

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
      categoriasListener.middleware,
      itensListener.middleware,
      sagaMiddleware
    ),
});

sagaMiddleware.run(categoriasSaga);

export default store;
