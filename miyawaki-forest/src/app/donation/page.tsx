import styles from "./page.module.css";
import Image from "next/image";

export default function donation() {
  return (
    <>
      <h1>Baumspenden</h1>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            src="/images/present_one-hand-inside-tree-1.png"
            alt="zwei Hände halten einen durchsichtigen Globus mit einem Baum darin"
            width={556}
            height={420}
            priority
          />
        </div>
      </main>
    </>
  );
}
