const { createSlice, createAction } = require("@reduxjs/toolkit");

const initialState = [];

export const carregarPagamento = createAction("carrinho/carregarPagamento");

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const existItem = state.some((item) => item.id === payload);
      if (!existItem) {
        return [
          ...state,
          {
            id: payload,
            quantity: 1,
          },
        ];
      }
      return state.filter((item) => item.id !== payload);
    },
    mudarQuantidade: (state, { payload }) => {
      state = state.map((itemNoCarrinho) => {
        if (itemNoCarrinho.id === payload.id) {
          itemNoCarrinho.quantity += payload.quantity;
        }
        return itemNoCarrinho;
      });
    },
    resetCarrinho: () => initialState,
  },
});

export const { mudarCarrinho, mudarQuantidade, resetCarrinho } =
  carrinhoSlice.actions;

export default carrinhoSlice.reducer;
