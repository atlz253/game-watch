import { Card, Col, Row, Space } from "antd";
import { Game } from "../../../../types/game";
import { useNavigate } from "react-router-dom";
import styles from "./GameCard.module.css";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

export function GameCard({ game }: { game: Game }) {
  const { id, title, release_date, publisher, genre, thumbnail } = game;
  const navigate = useNavigate();

  function navigateToGamePage() {
    navigate(`/${id}`);
  }

  return (
    <Card
      onClick={navigateToGamePage}
      className={styles.card}
      bodyStyle={{
        width: "100%",
        padding: "0",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <img src={thumbnail} alt={title} className={styles.thumbnail} />
      <Space className={styles.content} direction="vertical">
        <Title level={2} className={styles.title}>
          {title}
        </Title>
        <Paragraph className={styles.paragraph}>
          <b>Release date: </b>
          {new Date(release_date).toLocaleDateString()}
        </Paragraph>
        <Paragraph className={styles.paragraph}>
          <b>Publisher: </b>
          {publisher}
        </Paragraph>
        <Paragraph className={styles.paragraph}>
          <b>Genre: </b>
          {genre}
        </Paragraph>
      </Space>
    </Card>
  );
}
