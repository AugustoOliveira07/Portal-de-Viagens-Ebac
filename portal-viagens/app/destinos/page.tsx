import CardDestino from "@/components/CardDestino/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "./page.module.css";

export default function DestinosPage() {
  return (
    <section className={styles.destinos}>
      <div className={styles.cabecalho}>
        <span>EXPLORE</span>
        <h1>Destinos incríveis</h1>
        <p>
          Escolha seu próximo destino e comece a planejar uma nova aventura.
        </p>
      </div>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </section>
  );
}