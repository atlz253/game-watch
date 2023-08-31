import { Space } from "antd";
import { useGetGamesListQuery } from "../../redux/services/FreeToGamesAPI";
import { GameCard } from "../GameCard/GameCard";
import styles from "./GamesList.module.css";
import { useSelector } from "react-redux";
import {
  selectGenre,
  selectPlatform,
} from "../../redux/features/searchFilter/selector";

export function GamesList() {
  const category = useSelector(selectGenre);
  const platform = useSelector(selectPlatform);
  const { data, isLoading, error } = useGetGamesListQuery({
    category,
    platform,
  });

  return (
    <Space className={styles.list} direction="vertical">
      {data?.map((item) => (
        <GameCard key={item.id} game={item} />
      ))}
    </Space>
  );
}
