import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>Spende Leben</h1>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            src="/images/save-planet_earth-in-hands.png"
            alt="zwei Hände halten einen durchsichtigen Globus mit einem Baum darin"
            width={420}
            height={500}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a href="projects" className={styles.card}>
            <h2>
              Zielsetzungen <span>-&gt;</span>
            </h2>
            <p>Lass Dich von unseren Ideen inspirieren!</p>
          </a>

          <a href="donation" className={styles.card}>
            <h2>
              Baumspenden <span>-&gt;</span>
            </h2>
            <p>Stöber in unserer Liste guter Bäume, um zu spenden.</p>
          </a>

          <a href="community" className={styles.card}>
            <h2>
              Zusammenhalt <span>-&gt;</span>
            </h2>
            <p>Schließ Dich uns an! Nur zusammen sind wir stark.</p>
          </a>

          <a href="blog" className={styles.card}>
            <h2>
              Wissenswertes <span>-&gt;</span>
            </h2>
            <p>Erfahre mehr über aktivien Naturschutz.</p>
          </a>
        </div>
        <div className={styles.navigation}>
          <a href="projects">
            <div className={styles.imageBox}>
              <Image
                className={styles.image}
                src="/images/logo-1_project-4.png"
                alt="Das drei Pfeile Recycling-Symbol. Ein Pfeil ist durch ein Blatt ersetzt"
                width={70}
                height={60}
                priority
              />
            </div>
          </a>
          <a href="donation">
            <div>
              <Image
                className={styles.image}
                src="/images/logo-1_donation-1.png"
                alt="zwei Hände aus denen ein Baum wächst"
                width={75}
                height={60}
                priority
              />
            </div>
          </a>
          {/* <div>
          <Image
            src="/images/logo-1_comunity.png"
            alt="drei Personen abstrakt als Bäume dargestellt. Mit erhobenen Armen aud denen Blätter wachsen"
            width={70}
            height={60}
            priority
          />
        </div> */}
          <a href="community">
            <div>
              <Image
                className={styles.image}
                src="/images/logo-1_user-2.png"
                alt="Person die von einem abstrakten Ast und einem Wasserkreis umrundet wird. Am Ende des Astes wachsen Blätter"
                width={65}
                height={60}
                priority
              />
            </div>
          </a>
          <a href="blog">
            <div>
              <Image
                className={styles.image}
                src="/images/logo-1_blog-1.png"
                alt="Aus einem aufgeschlagenem Buch wächst ein grüne Stadt mit einem zentralen Baum"
                width={80}
                height={60}
                priority
              />
            </div>
          </a>
        </div>
      </main>
    </>
  );
}
