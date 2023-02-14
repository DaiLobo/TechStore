import styles from "./Header.module.scss";
import { TituloImagem } from "./TituloImage";
import { TituloSemImagem } from "./TituloSemImagem";

export const Header = ({
  titulo,
  descricao,
  className = "",
  imagem,
  children,
}) => {
  return (
    <header className={styles.header}>
      {titulo && !imagem ? (
        <TituloSemImagem titulo={titulo} descricao={descricao}>
          {children}
        </TituloSemImagem>
      ) : (
        <TituloImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        >
          {children}
        </TituloImagem>
      )}
    </header>
  );
};
