import api from "common/config/api";

const categoriasService = {
  buscar: async () => {
    const response = await api.get("/categorias");
    return response.data;
  },
};

export default categoriasService;
