import styles from "./MainLayout.module.css";
import { ReactNode } from "react";
import { Header } from "../UI/Header/Header";
import { Footer } from "antd/es/layout/layout";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer>footer</Footer>
    </div>
  );
}
