import { Card, Carousel, Col, Row } from "antd";
import { useGetGameQuery } from "../../redux/services/FreeToGamesAPI";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import styles from "./Game.module.css";
import { SystemRequirements } from "../SystemRequirements/SystemRequirements";
import { PictureOutlined } from "@ant-design/icons";

export function Game({ id }: { id: string }) {
  const { data, isLoading, error } = useGetGameQuery(id);

  if (!data || isLoading) return <div>Loading</div>;

  return (
    <Card bodyStyle={{ display: "flex" }}>
      <div className={styles.container}>
        <Row>
          <Col xs={24} sm={10} xl={7}>
            <img
              src={data.thumbnail}
              alt={data.title}
              className={styles.thumbnail}
            />
          </Col>
          <Col xs={24} sm={14} xl={17}>
            <Card
              title={
                <Title level={2} className={styles.gameTitle}>
                  {data.title}
                </Title>
              }
              bodyStyle={{ padding: "1rem" }}
              className={styles.descriptionCard}
            >
              <Paragraph>
                <b>Release date: </b>
                {new Date(data.release_date).toLocaleDateString()}
              </Paragraph>
              <Paragraph>
                <b>Publisher: </b>
                {data.publisher}
              </Paragraph>
              <Paragraph>
                <b>Developer: </b>
                {data.developer}
              </Paragraph>

              <Paragraph style={{ margin: "0" }}>
                <b>Genre: </b>
                {data.genre}
              </Paragraph>
            </Card>
          </Col>
        </Row>
        {data.minimum_system_requirements && (
          <SystemRequirements
            requirements={data.minimum_system_requirements}
            style={{ marginTop: "1rem" }}
          />
        )}
        <Title level={3} style={{ textAlign: "center", marginTop: "0.5rem" }}>
          <PictureOutlined /> Screenshots
        </Title>
        <div className={styles.carouselWrapper}>
          <Carousel>
            {data.screenshots.map((screenshot) => (
              <img key={screenshot.id} src={screenshot.image} />
            ))}
          </Carousel>
        </div>
      </div>
    </Card>
  );
}
