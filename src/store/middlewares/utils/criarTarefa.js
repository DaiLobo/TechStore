import { createStandaloneToast } from "@chakra-ui/toast";

const { toast } = createStandaloneToast();

export default async function criarTarefa({
  fork,
  dispatch,
  busca,
  action,
  textoCarregado,
  textoSucesso,
  textoErro,
}) {
  toast({
    title: "Carregando",
    description: textoCarregado,
    status: "loading",
    duration: 2000,
    isClosable: true,
  });

  const tarefa = fork(async (api) => {
    await api.delay(1000);
    return await busca();
  });

  const response = await tarefa.result;

  if (response.status === "ok") {
    toast({
      title: "Sucesso!",
      describe: textoSucesso,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }

  dispatch(action(response.value));

  if (response.status === "rejected") {
    toast({
      title: "Erro",
      description: textoErro,
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  }

  return response;
}
