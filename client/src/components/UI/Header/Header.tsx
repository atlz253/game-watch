import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Title>Game watch</Title>
    </header>
  );
}
