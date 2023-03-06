import { Button } from "components/Button";
import { Header } from "components/Header";
import Select from "components/Select";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { carregarPagamento, finalizarPagamento } from "store/reducers/carrinho";

import styles from "./Pagamento.module.scss";

export const Pagamento = () => {
  const dispatch = useDispatch();
  const [formaPagamento, setFormaPagamento] = useState("-");
  const usuario = useSelector((state) => state.usuario);
  const total = useSelector((state) => state.carrinho.total);

  const valorTotal =
    formaPagamento === "-" ? total : total * formaPagamento.taxa;

  const mudarFormaPagamento = (event) => {
    if (event.target.value === "-") return setFormaPagamento("-");

    setFormaPagamento(
      usuario.cartoes.find((cartao) => cartao.id === event.target.value)
    );
  };

  const finalizar = () => {
    dispatch(finalizarPagamento({ valorTotal, formaPagamento }));
  };

  useEffect(() => {
    dispatch(carregarPagamento());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header titulo="Pagamento" />
      <div className={styles.dados}>
        <p className={styles.forma}>
          Olá {usuario.nome}! Escolha a forma de pagamento:
        </p>
        <Select
          placeholder="Forma de pagamento"
          alt="Forma de pagamento"
          value={formaPagamento.id}
          onChange={mudarFormaPagamento}
        >
          <option value="-"> Forma de pagamento</option>
          {usuario.cartoes?.map((cartao) => (
            <option key={cartao.id} value={cartao.id}>
              {cartao.nome}
            </option>
          ))}
        </Select>
        <div className={styles.content}>
          {formaPagamento !== "-" && (
            <>
              <p>
                A forma de pagamento {formaPagamento.nome} tem taxa de
                {formaPagamento.taxa}x
              </p>
              <p>
                O saldo deste cartão é de R$ ${formaPagamento.saldo.toFixed(2)}
              </p>
            </>
          )}
          <p>Total com taxas: R$ {valorTotal.toFixed(2)}</p>
        </div>
        <div className={styles.finalizar}>
          <Button
            disabled={valorTotal === 0 || formaPagamento === "-"}
            onClick={finalizar}
          >
            Finalizar Compra
          </Button>
        </div>
      </div>
    </div>
  );
};
