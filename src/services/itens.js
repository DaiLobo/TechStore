import app from "common/config/api";

const itensService = {
  buscar: async () => {
    const response = await app.get("/itens");
    return response.data;
  },
};

export default itensService;
