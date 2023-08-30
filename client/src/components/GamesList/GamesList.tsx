import { Space } from "antd";
import { useGetGamesListQuery } from "../../redux/services/FreeToGamesAPI";
import { GameCard } from "../GameCard/GameCard";
import styles from "./GamesList.module.css";

export function GamesList() {
  const { data, isLoading, error } = useGetGamesListQuery();

  return (
    <Space className={styles.list} direction="vertical">
      {data?.map((item) => (
        <GameCard key={item.id} game={item} />
      ))}
    </Space>
  );
}
