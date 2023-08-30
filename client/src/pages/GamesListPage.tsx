import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { GameCard } from "../components/GameCard/GameCard";
import { useGetGamesListQuery } from "../redux/services/FreeToGamesAPI";

export function GamesListPage() {
  const { data, isLoading, error } = useGetGamesListQuery();

  return (
    <Layout>
      <Sider>left sidebar</Sider>
      <Content>
        {data?.map((item) => (
          <GameCard key={item.id} game={item} />
        ))}
      </Content>
    </Layout>
  );
}
