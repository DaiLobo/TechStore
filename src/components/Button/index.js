import styles from "./Button.module.scss";

export const Button = ({ children, type, onClick, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
