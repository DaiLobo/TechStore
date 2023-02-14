import styles from "./TituloSemImagem.module.scss";

export const TituloSemImagem = ({ titulo, descricao, children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}> {titulo} </h1>
      <h2 className={styles.descricao}> {descricao} </h2>
      {children}
    </div>
  );
};
