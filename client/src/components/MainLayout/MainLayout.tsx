import { Layout } from "antd";
import styles from "./MainLayout.module.css";
import { ReactNode } from "react";
import { Header } from "../UI/Header/Header";
import { Footer } from "antd/es/layout/layout";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Layout className={styles.layout}>
      <Header />
      {children}
      <Footer>footer</Footer>
    </Layout>
  );
}
