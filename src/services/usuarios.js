import app from "common/config/api";

const usuariosService = {
  buscarporId: async (id) => {
    const response = await app.get(`/usuarios/${id}`);

    return response.data;
  },
};

export default usuariosService;
