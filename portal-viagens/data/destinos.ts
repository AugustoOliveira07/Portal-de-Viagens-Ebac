export type Destino = {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
};

export const destinos: Destino[] = [
  {
    id: 1,
    nome: "Rio de Janeiro",
    imagem: "/imagens/rio.jpg",
    descricao: "Conheça as praias, o Cristo Redentor e as belezas do Rio de Janeiro.",
  },
  {
    id: 2,
    nome: "Paris",
    imagem: "/imagens/paris.jpg",
    descricao: "Explore a cidade da luz, seus monumentos e sua gastronomia.",
  },
  {
    id: 3,
    nome: "Fernando de Noronha",
    imagem: "/imagens/noronha.jpg",
    descricao: "Descubra praias paradisíacas e águas cristalinas.",
  },
  {
    id: 4,
    nome: "Tóquio",
    imagem: "/imagens/toquio.jpg",
    descricao: "Uma mistura incrível de tecnologia, cultura e tradição japonesa.",
  },
];