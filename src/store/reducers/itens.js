import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import itensService from "services/itens";
import { v4 as uuid } from "uuid";

const initialState = [];

export const buscarItens = createAsyncThunk(
  "itens/buscar",
  itensService.buscar
);

const itensSlice = createSlice({
  name: "itens",
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map((item) => {
        if (item.id === payload) {
          item.favorito = !item.favorito;
        }
        return item;
      });
    },
    cadastrarItem: (state, { payload }) => {
      state.push({ ...payload, id: uuid() });
    },
    mudarItem: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload.id);
      Object.assign(state[index], payload.item);
    },
    deletarItem: (state, { payload }) => {
      // return state.filter((item) => item.id !== payload);
      const index = state.findIndex((item) => item.id === payload);
      state.splice(index, 1);
    },
    adicionarItens: (state, { payload }) => {
      state.push(...payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(buscarItens.fulfilled, (state, { payload }) => {
        // toast({
        //   title: "Sucesso!",
        //   description: "Itens carregados com sucesso",
        //   duration: 2000,
        //   status: "success",
        //   isClosable: true,
        // });
        return payload;
      })
      .addCase(buscarItens.pending, (state, { payload }) => {
        // toast({
        //   title: "Carregando",
        //   description: "Carregando itens",
        //   duration: 2000,
        //   status: "loading",
        //   isClosable: true,
        // });
      })
      .addCase(buscarItens, (state, { payload }) => {
        // toast({
        //   title: "Error",
        //   description: "Erro na busca de itens",
        //   duration: 2000,
        //   status: "error",
        //   isClosable: true,
        // });
      });
  },
});

export const {
  mudarFavorito,
  cadastrarItem,
  mudarItem,
  deletarItem,
  adicionarItens,
} = itensSlice.actions;

export default itensSlice.reducer;
