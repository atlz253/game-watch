import { useParams } from "react-router-dom";
import { Game } from "../../components/Game/Game";
import styles from "./GamePage.module.css";

export function GamePage() {
  const { gameId } = useParams();

  if (!gameId) return <div>Error</div>;

  return (
    <div className={styles.container}>
      <Game id={gameId} />
    </div>
  );
}
