import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import itensService from "services/itens";
import { v4 as uuid } from "uuid";

const initialState = [];

export const buscarItens = createAsyncThunk("itens/buscar", itensService);

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
    adicionarItens: (state, { payload }) => {
      state.push(...payload);
    },
    deletarItem: (state, { payload }) => {
      // return state.filter((item) => item.id !== payload);
      const index = state.findIndex((item) => item.id === payload);
      state.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buscarItens.fulfilled, (state, { payload }) => {
      state.push(...payload);
    });
  },
});

export const {
  mudarFavorito,
  cadastrarItem,
  mudarItem,
  adicionarItens,
  deletarItem,
} = itensSlice.actions;

export default itensSlice.reducer;
