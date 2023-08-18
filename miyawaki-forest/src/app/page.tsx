import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Donate a tree</p>
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
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      <div className={styles.navigation}>
        <div>
          <Image
            src="/images/logo-1_project-2.png"
            alt="Planet wird mit einem Ast umrundet"
            width={50}
            height={50}
            priority
          />
        </div>
        <div>
          <Image
            src="/images/logo-1_donation-1.png"
            alt="zwei Hände aus denen ein Baum wächst"
            width={50}
            height={50}
            priority
          />
        </div>
        <div>
          <Image
            src="/images/logo-1_comunity.png"
            alt="drei Personen abstrakt als Bäume dargestellt. Mit erhobenen Armen aud denen Blätter wachsen"
            width={50}
            height={50}
            priority
          />
        </div>
        <div>
          <Image
            src="/images/logo-1_user-2.png"
            alt="Person die von einem abstrakten Ast und einem Wasserkreis umrundet wird. Am Ende des Astes wachsen Blätter"
            width={50}
            height={50}
            priority
          />
        </div>
        <div>
          <Image
            src="/images/logo-1_blog-4.png"
            alt="Das drei Pfeile Recycling-Symbol. Ein Pfeil ist durch ein Blatt ersetzt"
            width={50}
            height={50}
            priority
          />
        </div>
      </div>
    </main>
  );
}
