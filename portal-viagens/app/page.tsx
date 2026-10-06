import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.conteudo}>
        <span className={styles.destaque}>EXPLORE O MUNDO</span>

        <h1>
          Descubra seu próximo
          <span> destino</span>
        </h1>

        <p>
          Encontre lugares incríveis, conheça novas culturas e planeje
          experiências inesquecíveis.
        </p>

        <Link href="/destinos" className={styles.botao}>
          Ver destinos
        </Link>
      </div>
    </section>
  );
}