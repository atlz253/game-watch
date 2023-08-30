import { Layout } from "antd";
import styles from "./MainLayout.module.css";
import { ReactNode } from "react";

export function MainLayout({ children }: { children: ReactNode }) {
  return <Layout className={styles.layout}>{children}</Layout>;
}
