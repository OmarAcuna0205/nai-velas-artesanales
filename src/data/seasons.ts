export type Product = {
    id: string;
    name: string;
    note: string;
    price: number;
    image: string;
    hoverImage?: string;
};

export type Season = {
    id: string;
    name: string;
    banner: string;
    headline: string;
    description: string;
    products: Product[];
};

export const seasons: Season[] = [
    {
        id: "primavera",
        name: "Primavera",
        banner: "/primaveraHero.png",
        headline: "Floral · Verde · Frutal",
        description: "Texto de relleno para la temporada de primavera.",
        products: [
            {
                id: "primavera-1",
                name: "Primavera 1",
                note: "Aroma · duración",
                price: 250,
                image: "/primavera1.png",
                hoverImage: "/primavera1.1.png",
            },
            {
                id: "primavera-2",
                name: "Primavera 2",
                note: "Aroma · duración",
                price: 250,
                image: "/primavera2.png",
            },
            {
                id: "primavera-3",
                name: "Primavera 3",
                note: "Aroma · duración",
                price: 250,
                image: "/primavera3.png",
                hoverImage: "/primavera3.1.png",
            },
            {
                id: "primavera-4",
                name: "Primavera 4",
                note: "Aroma · duración",
                price: 250,
                image: "/primavera4.png",
                hoverImage: "/primavera4.1.png",
            },
        ],
    },
    {
        id: "verano",
        name: "Verano",
        banner: "/veranoHero.png",
        headline: "Cítrico · Fresco · Tropical",
        description: "Texto de relleno para la temporada de verano.",
        products: [
            {
                id: "verano-1",
                name: "Verano 1",
                note: "Aroma · duración",
                price: 250,
                image: "/verano1.png",
                hoverImage: "/verano1.1.png",
            },
            {
                id: "verano-2",
                name: "Verano 2",
                note: "Aroma · duración",
                price: 250,
                image: "/verano2.png",
                hoverImage: "/verano2.1.png",
            },
            {
                id: "verano-3",
                name: "Verano 3",
                note: "Aroma · duración",
                price: 250,
                image: "/verano3.png",
            },
        ],
    },
    {
        id: "otono",
        name: "Otoño",
        banner: "/otoñoHero.png",
        headline: "Especias · Ámbar · Madera",
        description: "Texto de relleno para la temporada de otoño.",
        products: [
            {
                id: "otono-1",
                name: "Otoño 1",
                note: "Aroma · duración",
                price: 250,
                image: "/otoño1.png",
                hoverImage: "/otoño1.1.png",
            },
            {
                id: "otono-2",
                name: "Otoño 2",
                note: "Aroma · duración",
                price: 250,
                image: "/otoño2.png",
                hoverImage: "/otoño2.2.png",
            },
            {
                id: "otono-3",
                name: "Otoño 3",
                note: "Aroma · duración",
                price: 250,
                image: "/otoño3.png",
                hoverImage: "/otoño3.3.png",
            },
        ],
    },
    {
        id: "invierno",
        name: "Invierno",
        banner: "/inviernoHero.png",
        headline: "Resina · Vainilla · Humo",
        description: "Texto de relleno para la temporada de invierno.",
        products: [
            {
                id: "invierno-1",
                name: "Invierno 1",
                note: "Aroma · duración",
                price: 250,
                image: "/invierno1.png",
                hoverImage: "/invierno1.1.png",
            },
            {
                id: "invierno-2",
                name: "Invierno 2",
                note: "Aroma · duración",
                price: 250,
                image: "/invierno2.png",
            },
            {
                id: "invierno-3",
                name: "Invierno 3",
                note: "Aroma · duración",
                price: 250,
                image: "/invierno3.png",
            },
        ],
    },
    {
        id: "especiales",
        name: "Ocasiones especiales",
        banner: "/especialesHero.png",
        headline: "Suave · Dulce · Floral",
        description: "Texto de relleno para las ocasiones especiales.",
        products: [
            {
                id: "especial-1",
                name: "Especial 1",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales1.png",
                hoverImage: "/especiales1.1.png",
            },
            {
                id: "especial-2",
                name: "Especial 2",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales2.png",
                hoverImage: "/especiales2.1.png",
            },
            {
                id: "especial-3",
                name: "Especial 3",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales3.png",
                hoverImage: "/especiales3.1.png",
            },
            {
                id: "especial-4",
                name: "Especial 4",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales4.png",
            },
            {
                id: "especial-5",
                name: "Especial 5",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales5.png",
            },
            {
                id: "especial-6",
                name: "Especial 6",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales6.png",
                hoverImage: "/especiales6.1.png",
            },
            {
                id: "especial-7",
                name: "Especial 7",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales7.png",
                hoverImage: "/especiales7.1.png",
            },
            {
                id: "especial-8",
                name: "Especial 8",
                note: "Aroma · duración",
                price: 250,
                image: "/especiales8.png",
                hoverImage: "/especiales8.1.png",
            },
        ],
    },
];
