import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  adicionarTodasAsCategorias,
  carregarCategorias,
} from "store/reducers/categorias";
import { createStandaloneToast } from "@chakra-ui/toast";
import categoriasService from "services/categorias";

const { toast } = createStandaloneToast();

function* observarCategorias() {
  yield console.log("observando");

  toast({
    title: "Carregando",
    description: "Carregando categorias",
    status: "loading",
    duration: 2000,
    isClosable: true,
  });
  try {
    yield delay(2000);

    const categorias = yield call(categoriasService.buscar);
    console.log(categorias);
    yield put(adicionarTodasAsCategorias(categorias));

    toast({
      title: "Sucesso!",
      describe: "Categorias carregadas com sucesso!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  } catch (error) {
    toast({
      title: "Erro",
      description: "Erro na busca de categorias",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  }
}

export function* categoriasSaga() {
  const tarefa = yield takeLatest(carregarCategorias, observarCategorias);
  yield takeLatest(adicionarTodasAsCategorias, () => tarefa.cancel());
}
