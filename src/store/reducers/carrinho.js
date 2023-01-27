const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const existItem = state.some((item) => (item.id === payload));
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
  },
});

export const { mudarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
