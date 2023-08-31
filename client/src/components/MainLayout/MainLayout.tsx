import styles from "./MainLayout.module.css";
import { ReactNode } from "react";
import { Header } from "../UI/Header/Header";
import { Footer } from "../UI/Footer/Footer";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
