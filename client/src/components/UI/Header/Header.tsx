import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.titleWrapper}>
        <Title className={styles.title}>Game watch</Title>
      </a>
    </header>
  );
}
