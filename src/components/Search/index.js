import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { mudarBusca, resetBusca } from "store/reducers/busca";
import styles from "./Search.module.scss";

export const Search = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const busca = useSelector((state) => state.busca);

  useEffect(() => {
    dispatch(resetBusca());
  }, [dispatch, location.pathname]);
  return (
    <div className={styles.busca}>
      <input
        className={styles.input}
        placeholder="O que você procura?"
        value={busca}
        onChange={(event) => dispatch(mudarBusca(event.target.value))}
      />
    </div>
  );
};
