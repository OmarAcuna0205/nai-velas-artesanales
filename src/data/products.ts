import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "a1f3c8e2-7b4d-4a91-9c22-3e5f8d1b6a04",
    name: "Vela de Lavanda",
    description:
      "Vela de cera de soya con aceite esencial de lavanda. Aroma suave y relajante, ideal para la noche.",
    price: 189,
    discount: null,
    category: "aromaticas",
    imageUrl: "/products/lavanda.jpg",
    available: true,
    isNew: false,
  },
  {
    id: "b7d2e491-3c56-4f80-a1e7-9b04c2f5d873",
    name: "Vela de Vainilla y Canela",
    description:
      "Nuestra mezcla más vendida. La vainilla dulce se equilibra con la calidez de la canela para llenar toda la habitación sin resultar empalagosa. Cera de soya, mecha de algodón, aproximadamente 40 horas de duración.",
    price: 199,
    discount: 15,
    category: "aromaticas",
    imageUrl: "/products/vainilla-canela.jpg",
    available: true,
    isNew: true,
  },
  {
    id: "c4a8b0f6-1d92-4e37-8f5c-6a2d9e3b7c15",
    name: "Vela de Cítricos",
    description:
      "Naranja, toronja y un toque de hierbabuena. Fresca y ligera para las mañanas.",
    price: 179,
    discount: null,
    category: "aromaticas",
    imageUrl: "/products/citricos.jpg",
    available: false,
    isNew: false,
  },
  {
    id: "d9e5f273-8a41-4c6b-b0d3-5f7c1a4e8926",
    name: "Vela Espiral",
    description:
      "Vela decorativa torcida a mano. Cada pieza es única, así que no hay dos iguales.",
    price: 349,
    discount: null,
    category: "decorativas",
    imageUrl: "/products/espiral.jpg",
    available: true,
    isNew: false,
  },
  {
    id: "e2c6a904-5f38-4b7d-9e1a-8c3f5d0b2647",
    name: "Vela Pilar Marmoleada",
    description: "Pilar de 15 cm con acabado marmoleado en tonos tierra.",
    price: 289,
    discount: null,
    category: "decorativas",
    imageUrl: "/products/pilar-marmoleada.jpg",
    available: true,
    isNew: false,
  },
  {
    id: "f8b1d345-2e79-4a06-8c5b-1d9e4f7a3c58",
    name: "Vela de Temporada — Pino y Cardamomo",
    description:
      "Edición limitada de invierno. Pino fresco con un fondo especiado de cardamomo y clavo. Disponible solo mientras dure el inventario de la temporada.",
    price: 229,
    discount: null,
    category: "temporada",
    imageUrl: "/products/pino-cardamomo.jpg",
    available: true,
    isNew: true,
  },
];