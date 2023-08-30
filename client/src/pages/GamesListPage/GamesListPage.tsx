import { Col, Layout, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { GameCard } from "../../components/GameCard/GameCard";
import { useGetGamesListQuery } from "../../redux/services/FreeToGamesAPI";
import { Side } from "../../components/Side/Side";
import styles from "./GamesListPage.module.css";
import { GamesList } from "../../components/GamesList/GamesList";

export function GamesListPage() {
  return (
    <div className={styles.wrapper}>
      <Side />
      <GamesList />
    </div>
  );
}
