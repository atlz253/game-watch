import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer } from "antd/es/layout/layout";
import { Header } from "./components/UI/Header/Header";
import { MainLayout } from "./components/MainLayout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Header />
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>main content</Content>
      </Layout>
      <Footer>footer</Footer>
    </MainLayout>
  );
}

export default App;
