import { createBrowserRouter } from "react-router-dom";
import { GamesListPage } from "./pages/GamesListPage/GamesListPage";
import { GamePage } from "./pages/GamePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GamesListPage />,
  },
  {
    path: ":gameId",
    element: <GamePage />,
  },
]);
