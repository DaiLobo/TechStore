import styles from "./Item.module.scss";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineCheck,
  AiFillEdit,
  AiFillCloseCircle,
} from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { deletarItem, mudarFavorito, mudarItem } from "store/reducers/itens";
import { useDispatch, useSelector } from "react-redux";
import { mudarCarrinho, mudarQuantidade } from "store/reducers/carrinho";
import classNames from "classnames";
import { useState } from "react";
import Input from "components/Input";

const iconProps = {
  size: 24,
  color: "#041833",
};

const quantityProps = {
  size: 32,
  color: "#1875E8",
};

export const Item = (props) => {
  const { titulo, foto, preco, descricao, favorito, id, carrinho, quantity } =
    props;

  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(titulo);

  const isCart = useSelector((state) =>
    state.carrinho.data?.some((itemNoCarrinho) => itemNoCarrinho.id === id)
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
      <AiFillCloseCircle
        className={`${styles["item-acao"]} ${styles["item-deletar"]}`}
        {...iconProps}
        onClick={() => dispatch(deletarItem(id))}
      />
      <div className={styles["item-imagem"]}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles["item-descricao"]}>
        <div className={styles["item-titulo"]}>
          {editMode ? (
            <Input
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)}
            />
          ) : (
            <h2> {titulo} </h2>
          )}
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
                <AiFillMinusCircle
                  {...quantityProps}
                  onClick={() => {
                    if (quantity >= 1) {
                      dispatch(mudarQuantidade({ id, quantity: -1 }));
                    }
                  }}
                />
                <span> {String(quantity || 0).padStart(2, "0")} </span>
                <AiFillPlusCircle
                  {...quantityProps}
                  onClick={() =>
                    dispatch(mudarQuantidade({ id, quantity: +1 }))
                  }
                />
              </div>
            ) : (
              <>
                <FaCartPlus
                  {...iconProps}
                  color={isCart ? "#1875e8" : iconProps.color}
                  className={styles["item-acao"]}
                  onClick={resolverCarrinho}
                />
                {editMode ? (
                  <AiOutlineCheck
                    className={styles["item-acao"]}
                    {...iconProps}
                    onClick={() => {
                      setEditMode(false);
                      dispatch(mudarItem({ id, item: { titulo: newTitle } }));
                    }}
                  />
                ) : (
                  <AiFillEdit
                    className={styles["item-acao"]}
                    {...iconProps}
                    onClick={() => setEditMode(true)}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
