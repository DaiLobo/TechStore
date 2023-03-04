import { createStandaloneToast } from "@chakra-ui/toast";
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriasService from "services/categorias";
import { resetCarrinho } from "./carrinho";

const { toast } = createStandaloneToast();

const initialState = [];

export const carregarCategorias = createAction("categorias/carregarCategorias");
export const carregarUmaCategoria = createAction(
  "categorias/carregarUmaCategoria"
);

export const buscarCategorias = createAsyncThunk(
  "categorias/buscar",
  categoriasService.buscar
);

const categoriaSlice = createSlice({
  name: "categorias",
  initialState,
  reducers: {
    adicionarTodasAsCategorias: (state, { payload }) => {
      return payload;
    },
    adicionarUmaCategoria: (state, { payload }) => {
      state.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(buscarCategorias.fulfilled, (state, { payload }) => {
      //   toast({
      //     title: "Sucesso!",
      //     description: "Categorias carregadas com sucesso",
      //     duration: 2000,
      //     status: "success",
      //     isClosable: true,
      //   });
      //   return payload;
      // })
      // .addCase(buscarCategorias.pending, (state, { payload }) => {
      //   toast({
      //     title: "Carregando",
      //     description: "Carregando categorias",
      //     status: "loading",
      //     duration: 2000,
      //     isClosable: true,
      //   });
      // })
      // .addCase(buscarCategorias.rejected, (state, { payload }) => {
      //   toast({
      //     title: "Error",
      //     description: "Erro na busca de categorias",
      //     status: "error",
      //     duration: 2000,
      //     isClosable: true,
      //   });
      // })
      .addCase(resetCarrinho.type, () => {
        toast({
          title: "Sucesso!",
          description: "Compra realizada com sucesso!",
          duration: 2000,
          status: "success",
          isClosable: true,
        });
      });
  },
});

export const { adicionarTodasAsCategorias, adicionarUmaCategoria } =
  categoriaSlice.actions;

export default categoriaSlice.reducer;
