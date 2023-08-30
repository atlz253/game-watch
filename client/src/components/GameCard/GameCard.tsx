import { Card } from "antd";
import { Game } from "../../../../types/game";
import { useNavigate } from "react-router-dom";

export function GameCard({ game }: { game: Game }) {
  const { id } = game;
  const navigate = useNavigate();

  function navigateToGamePage() {
    navigate(`/${id}`);
  }

  return <Card onClick={navigateToGamePage}>{id}</Card>;
}
