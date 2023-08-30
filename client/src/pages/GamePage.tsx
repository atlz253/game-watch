import { useParams } from "react-router-dom";

export function GamePage() {
  const { gameId } = useParams();

  return <div>{gameId}</div>;
}
