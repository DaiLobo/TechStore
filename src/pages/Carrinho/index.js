import { Button } from "components/Button";
import { Header } from "components/Header";
import { Item } from "components/Item";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import styles from "./Carrinho.module.scss";

export const Carrinho = () => {
  const navigate = useNavigate();

  const { carrinho, total } = useSelector((state) => {
    const regexp = new RegExp(state.busca, "i");
    const carrinhoReduce = state.carrinho.data.reduce(
      (itens, itemNoCarrinho) => {
        const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
        if (item.titulo.match(regexp)) {
          itens.push({ ...item, quantity: itemNoCarrinho.quantity });
        }

        return itens;
      },
      []
    );

    return { carrinho: carrinhoReduce, total: state.carrinho.total };
  });

  return (
    <div>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira produtos que você adicionou ao carrinho."
      />
      <div className={styles.carrinho}>
        {carrinho.map((item) => (
          <Item key={item.id} {...item} carrinho />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong> R$ {total.toFixed(2)} </strong>
          </span>
        </div>
        <Button onClick={() => navigate("/pagamento")}>Finalizar compra</Button>
      </div>
    </div>
  );
};
