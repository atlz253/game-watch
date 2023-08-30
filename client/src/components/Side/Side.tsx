import { GenreDropdown } from "../GenreDropdown/GenreDropdown";
import styles from "./Side.module.css";

export function Side() {
  return (
    <aside className={styles.side}>
      <GenreDropdown />
    </aside>
  );
}
