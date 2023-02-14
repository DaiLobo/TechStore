import { Button } from "components/Button";
import { Header } from "components/Header";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cadastrarItem } from "store/reducers/itens";
import styles from "./Anuncie.module.scss";

export const Anuncie = () => {
  const dispatch = useDispatch();
  const { nomeCategoria = "" } = useParams();

  const categorias = useSelector((state) =>
    state.categorias.map(({ nome, id }) => ({ nome, id }))
  );

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      categoria: nomeCategoria,
    },
  });

  const { errors } = formState;

  const signUp = (values) => {
    dispatch(cadastrarItem(values));
  };
  return (
    <div className={styles.container}>
      <Header
        titulo="Anuncie Aqui"
        descricao="Anuncie seu produto no melhor site do Brasil!"
      />
      <form className={styles.formulario} onSubmit={handleSubmit(signUp)}>
        <Input
          className={errors.titulo ? styles["input-erro"] : ""}
          {...register("titulo", { required: "O nome é obrigatório" })}
          placeholder="Nome do produto"
          alt="nome do produto"
        />
        {errors.titulo && (
          <span className={styles["mensagem-erro"]}>
            {errors.titulo.message}{" "}
          </span>
        )}

        <Input
          className={errors.descricao ? styles["input-erro"] : ""}
          {...register("descricao", {
            required: "A Descrição é obrigatória",
          })}
          placeholder="Descrição do produto"
          alt="descrição do produto"
        />
        {errors.descricao && (
          <span className={styles["mensagem-erro"]}>
            {errors.descricao.message}
          </span>
        )}

        <Input
          className={errors.foto ? styles["input-erro"] : ""}
          {...register("foto", { required: "Imagem é obrigatória" })}
          placeholder="URL da imagem do produto"
          alt="URL da imagem do produto"
        />
        {errors.foto && (
          <span className={styles["mensagem-erro"]}>{errors.foto.message}</span>
        )}

        <select
          className={errors.categoria ? styles["input-erro"] : ""}
          {...register("categoria", { required: "Categoria é obrigatória" })}
          disabled={nomeCategoria}
        >
          <option value="" disabled>
            Selecione a categoria
          </option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
        {errors.categoria && (
          <span className={styles["mensagem-erro"]}>
            {errors.categoria.message}
          </span>
        )}

        <Input
          className={errors.preco ? styles["input-erro"] : ""}
          {...register("preco", {
            required: "Preço é obrigatório",
            valueAsNumber: true,
          })}
          type="number"
          placeholder="Preço do produto"
        />
        {errors.preco && (
          <span className={styles["mensagem-erro"]}>
            {errors.preco.message}
          </span>
        )}

        <Button type="submit">Cadastrar Produto</Button>
      </form>
    </div>
  );
};
