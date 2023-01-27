import styles from "./Item.module.scss";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { mudarFavorito } from "store/reducers/itens";
import { useDispatch, useSelector } from "react-redux";
import { mudarCarrinho } from "store/reducers/carrinho";
import classNames from "classnames";

const iconProps = {
  size: 24,
  color: "#041833",
};

const quantityProps = {
  size: 32,
  color: "#1875E8",
};

export const Item = (props) => {
  const { titulo, foto, preco, descricao, favorito, id, carrinho } = props;
  const dispatch = useDispatch();

  const isCart = useSelector((state) =>
    state.carrinho.some((itemNoCarrinho) => itemNoCarrinho.id === id)
  );

  const resolverCarrinho = () => {
    dispatch(mudarCarrinho(id));
  };

  const resolverFavorito = () => {
    dispatch(mudarFavorito(id));
  };

  return (
    <div
      className={classNames(styles.item, {
        [styles.itemNoCarrinho]: carrinho,
      })}
    >
      <div className={styles["item-imagem"]}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles["item-descricao"]}>
        <div className={styles["item-titulo"]}>
          <h2> {titulo} </h2>
          <p> {descricao} </p>
        </div>
        <div className={styles["item-info"]}>
          <div className={styles["item-preco"]}>R$ {preco.toFixed(2)}</div>
          <div className={styles["item-acoes"]}>
            {favorito ? (
              <AiFillHeart
                {...iconProps}
                color="#ff0000"
                className={styles["item-acao"]}
                onClick={resolverFavorito}
              />
            ) : (
              <AiOutlineHeart
                {...iconProps}
                className={styles["item-acao"]}
                onClick={resolverFavorito}
              />
            )}
            {carrinho ? (
              <div className={styles.quantidade}>
                Quantidade:
                <AiFillMinusCircle {...quantityProps} />
                <span> {String(0 || 0).padStart(2, "0")} </span>
                <AiFillPlusCircle {...quantityProps} />
              </div>
            ) : (
              <FaCartPlus
                {...iconProps}
                color={isCart ? "#1875e8" : iconProps.color}
                className={styles["item-acao"]}
                onClick={resolverCarrinho}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};