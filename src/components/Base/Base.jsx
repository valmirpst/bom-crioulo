import styles from "./Base.module.css";

export default function Base({ children }) {
  return <article className={styles.base}>{children}</article>;
}
