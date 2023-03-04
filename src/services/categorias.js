import api from "common/config/api";

const categoriasService = {
  buscar: async () => {
    const response = await api.get("/categorias");
    return response.data;
  },
  buscarUmaCategoria: async (nomeCategoria) => {
    const resposta = await api.get(`/categorias/${nomeCategoria}`);

    return resposta.data;
  },
};

export default categoriasService;
