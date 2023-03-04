import app from "common/config/api";

const itensService = {
  buscar: async () => {
    const response = await app.get("/itens");
    return response.data;
  },
  buscarDeCategorias: async (nomeCategoria) => {
    const response = await app.get(`itens?categoria=${nomeCategoria}`);

    return response.data;
  },
};

export default itensService;
