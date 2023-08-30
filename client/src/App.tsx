import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer } from "antd/es/layout/layout";
import { Header } from "./components/UI/Header/Header";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { useGetGamesListQuery } from "./redux/services/FreeToGamesAPI";

function App() {
  const { data, isLoading, error } = useGetGamesListQuery();

  return (
    <MainLayout>
      <Header />
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>
          {data?.map((item) => (
            <div key={item.id}>{item.id}</div>
          ))}
        </Content>
      </Layout>
      <Footer>footer</Footer>
    </MainLayout>
  );
}

export default App;
