import Image from "next/image";
import { Destino } from "@/data/destinos";
import styles from "./CardDestino.module.css";

type CardDestinoProps = {
  destino: Destino;
};

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <article className={styles.card}>
      <Image
        src={destino.imagem}
        alt={destino.nome}
        width={400}
        height={250}
        className={styles.imagem}
      />

      <div className={styles.conteudo}>
        <h2>{destino.nome}</h2>
        <p>{destino.descricao}</p>
      </div>
    </article>
  );
}