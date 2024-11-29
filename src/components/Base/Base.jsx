import styles from "./Base.module.css";

export default function Base({ children }) {
  return <main className={styles.base}>{children}</main>;
}
