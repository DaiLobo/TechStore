import styles from "./Footer.module.scss";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const iconProps = {
  color: "white",
  size: 24,
};

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...iconProps} />
        <FaTwitter {...iconProps} />
        <FaInstagram {...iconProps} />
      </div>
      <span>Desenvolvido por Diana Rose</span>
    </footer>
  );
};
