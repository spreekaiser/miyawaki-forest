import styles from "./pages.module.css";
import Image from "next/image";

export default function projects() {
  return (
    <>
      <h1>Unsere Projekte</h1>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            src="/images/present_one-hand-inside-tree-1.png"
            alt="zwei Hände halten einen durchsichtigen Globus mit einem Baum darin"
            width={556}
            height={620}
            priority
          />
        </div>
      </main>
    </>
  );
}
