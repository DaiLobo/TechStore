import app from "common/config/api";

const cartoesService = {
  buscarPorIdUsuario: async (usuarioId) => {
    const response = await app.get(`/cartoes?usuarioId=${usuarioId}`);
    return response.data;
  },
};

export default cartoesService;
