const { createSlice, createAction } = require("@reduxjs/toolkit");

const initialState = { data: [], total: 0 };

export const carregarPagamento = createAction("carrinho/carregarPagamento");

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const existItem = state.data.some((item) => item.id === payload);
      if (!existItem) {
        return {
          total: state.total,
          data: [
            ...state.data,
            {
              id: payload,
              quantity: 1,
            },
          ],
        };
      }
      return {
        total: state.total,
        data: state.data.filter((item) => item.id !== payload),
      };
    },
    mudarQuantidade: (state, { payload }) => {
      state.data = state.data.map((itemNoCarrinho) => {
        if (itemNoCarrinho.id === payload.id) {
          itemNoCarrinho.quantity += payload.quantity;
        }
        return itemNoCarrinho;
      });
    },
    resetCarrinho: () => initialState,
    mudarTotal: (state, { payload }) => {
      state.total = payload;
    },
  },
});

export const { mudarCarrinho, mudarQuantidade, resetCarrinho, mudarTotal } =
  carrinhoSlice.actions;

export default carrinhoSlice.reducer;
