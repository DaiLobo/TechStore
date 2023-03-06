import { call, put, takeLatest } from "redux-saga/effects";

import bandeirasService from "services/bandeiras";
import cartoesService from "services/cartoes";
import usuariosService from "services/usuarios";

import { carregarPagamento } from "store/reducers/carrinho";
import { adicionarUsuario } from "store/reducers/usuario";

const usuarioLogado = 1;

function* carregarPagamentoSaga() {
  try {
    const usuario = yield call(usuariosService.buscarporId, usuarioLogado);
    const cartoes = yield call(
      cartoesService.buscarPorIdUsuario,
      usuarioLogado
    );
    const bandeirasids = cartoes.map((cartao) => cartao.bandeiraid);
    const bandeiras = yield call(bandeirasService.buscarPorId, bandeirasids);

    const cartoesComBandeiras = cartoes.map((cartao) => {
      const bandeiraDoCartao = bandeiras.find(
        (bandeira) => bandeira.id === cartao.bandeiraId
      );

      return {
        ...cartao,
        taxa: bandeiraDoCartao.taxa,
        bandeira: bandeiraDoCartao.nome,
      };
    });

    yield put(adicionarUsuario({ ...usuario, cartoes: cartoesComBandeiras }));
    console.log({ ...usuario, cartoes: cartoesComBandeiras });
  } catch (error) {}
}

export function* carrinhoSaga() {
  yield takeLatest(carregarPagamento, carregarPagamentoSaga);
}
