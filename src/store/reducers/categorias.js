import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriasService from "services/categorias";

const initialState = [];

export const buscarCategorias = createAsyncThunk(
  "categorias/buscar",
  categoriasService.buscar
);

const categoriaSlice = createSlice({
  name: "categorias",
  initialState,
  reducers: {
    adicionarCategorias: (state, { payload }) => {
      state.push(...payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buscarCategorias.fulfilled, (state, { payload }) => {
      state.push(...payload);
    });
  },
});

export const { adicionarCategorias } = categoriaSlice.actions;

export default categoriaSlice.reducer;
