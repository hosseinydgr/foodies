import styles from "./loading-out.module.css";

export default function MealsLoadingFallback() {
  return <p className={styles.loading}>Fetching Meals...</p>;
}
