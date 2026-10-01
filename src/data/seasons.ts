export type Product = {
    id: string;
    name: string;
    note: string;
    price: number;
    image: string;
    description?: string;
};

export type Season = {
    id: string;
    name: string;
    banner: string;
    isNew?: boolean;
    products: Product[];
};

export const seasons: Season[] = [
    {
        id: "nuevo",
        name: "Lo más nuevo",
        banner: "/nuevoHero.webp",
        isNew: true,
        products: [
            {
                id: "nuevo-1",
                name: "Betún",
                description:
                    "Cera de soya, estilo betún.",
                note: "Pumpkin spice latte · Vainilla y Café tostado · Manzana y Canela",
                price: 250,
                image: "/nuevo1.webp",
            },
            {
                id: "nuevo-2",
                name: "Arreglo Floral",
                description:
                    "Cera de soya, 6 flores y 1 calabaza.",
                note: "Pumpkin spice latte · Vainilla y Café tostado · Manzana y Canela",
                price: 250,
                image: "/nuevo3.webp",
            },
            {
                id: "nuevo-3",
                name: "Calabaza con Tapa",
                description:
                    "Cera de soya, en calabaza de concreto.",
                note: "Pumpkin spice latte · Vainilla y Café tostado · Manzana y Canela",
                price: 250,
                image: "/nuevo4.webp",
            },
            {
                id: "nuevo-4",
                name: "Calabazas con Plato",
                description:
                    "Cera de soya, 4 calabazas.",
                note: "Pumpkin spice latte · Vainilla y Café tostado · Manzana y Canela",
                price: 250,
                image: "/nuevo2.webp",
            },
        ],
    },
    {
        id: "primavera",
        name: "Primavera",
        banner: "/primaveraHero.webp",
        products: [
            {
                id: "primavera-1",
                name: "Bouquet II",
                note: "Gardenia · Rosas · Peonía",
                price: 250,
                image: "/primavera1.webp",
            },
            {
                id: "primavera-2",
                name: "Aniversario",
                note: "Pétalos de Rosa",
                price: 250,
                image: "/primavera2.webp",
            },
            {
                id: "primavera-3",
                name: "Candil",
                note: "Jazmín y Salvia · Lavanda y Romero · Bergamota y Ámbar · Naranja y Canela",
                price: 250,
                image: "/primavera3.webp",
            },
            {
                id: "primavera-4",
                name: "Bouquet I",
                note: "Jazmín y Salvia · Lavanda y Romero · Bergamota y Ámbar",
                price: 250,
                image: "/primavera4.webp",
            },
            {
                id: "primavera-5",
                name: "Suculentas de Color",
                note: "Jazmín y Salvia · Lavanda y Romero · Bergamota y Ámbar",
                price: 250,
                image: "/primavera5.webp",
            },
        ],
    },
    {
        id: "verano",
        name: "Verano",
        banner: "/veranoHero.webp",
        products: [
            {
                id: "verano-1",
                name: "Terrario",
                note: "Naranja",
                price: 250,
                image: "/verano1.webp",
            },
            {
                id: "verano-2",
                name: "Macetitas",
                note: "Naranja",
                price: 250,
                image: "/verano2.webp",
            },
            {
                id: "verano-3",
                name: "Cera Escamada",
                note: "Azahar",
                price: 250,
                image: "/verano3.webp",
            },
            {
                id: "verano-4",
                name: "Aura y Verano",
                note: "Aura: Sándalo, Almizcle, Pachuli y Lima · Verano: Mango, Lima y Toronja",
                price: 250,
                image: "/verano4.webp",
            },
            {
                id: "verano-5",
                name: "Frappé",
                note: "Lavanda y Limón · Toronja y Menta · Mango y Coco",
                price: 250,
                image: "/verano7.webp",
            },
            {
                id: "verano-6",
                name: "Citronela",
                note: "Citronela",
                price: 250,
                image: "/verano6.webp",
            },
            {
                id: "verano-7",
                name: "Mini",
                note: "Lavanda y Limón · Toronja y Menta · Mango y Coco",
                price: 250,
                image: "/verano5.webp",
            },
            {
                id: "verano-8",
                name: "Tropical",
                note: "Piña y Coco · Mango y Mandarina · Lima y Limón · Sandía · Coco",
                price: 250,
                image: "/verano8.webp",
            },
            {
                id: "verano-9",
                name: "Cuarzos",
                note: "Bergamota · Sándalo · Lima y Limón · Lavanda · Mango y Mandarina",
                price: 250,
                image: "/verano9.webp",
            },
            {
                id: "verano-10",
                name: "Terrario de Cactus",
                note: "Jazmín · Mango y Mandarina",
                price: 250,
                image: "/verano10.webp",
            },
        ],
    },
    {
        id: "otono",
        name: "Otoño",
        banner: "/otoñoHero.webp",
        products: [
            {
                id: "otono-1",
                name: "Cera de Abeja",
                note: "Miel",
                price: 250,
                image: "/otoño1.webp",
            },
            {
                id: "otono-2",
                name: "Roll de Canela",
                note: "Canela, Cardamomo y Vainilla",
                price: 250,
                image: "/otoño2.webp",
            },
            {
                id: "otono-3",
                name: "Chocolate Abuelita",
                note: "Chocolate, Vainilla y Canela",
                price: 250,
                image: "/otoño3.webp",
            },
            {
                id: "otono-4",
                name: "Pumpkin Spice Latte",
                note: "Calabaza, Especias y Café",
                price: 250,
                image: "/otoño4.webp",
            },
            {
                id: "otono-5",
                name: "Día de Muertos",
                note: "Miel",
                price: 250,
                image: "/otoño5.webp",
            },
            {
                id: "otono-6",
                name: "Sweet Halloween",
                note: "Fresa",
                price: 250,
                image: "/otoño6.webp",
            },
            {
                id: "otono-7",
                name: "Kit Halloween",
                note: "Fresa",
                price: 250,
                image: "/otoño7.webp",
            },
            {
                id: "otono-8",
                name: "Acáami y Bachí",
                note: "Acáami Másara: Manzana, Canela, Vainilla y Clavo · Bachí Juca: Calabaza, Canela, Jengibre y Clavo",
                price: 250,
                image: "/otoño8.webp",
            },
        ],
    },
    {
        id: "invierno",
        name: "Invierno",
        banner: "/inviernoHero.webp",
        products: [
            {
                id: "invierno-1",
                name: "Sitákami",
                note: "Frutos Rojos",
                price: 250,
                image: "/invierno1.webp",
            },
            {
                id: "invierno-2",
                name: "Ruráami",
                note: "Eucalipto, Menta y Miel",
                price: 250,
                image: "/invierno2.webp",
            },
            {
                id: "invierno-3",
                name: "Sa'huá",
                note: "Naranja, Canela y Vainilla",
                price: 250,
                image: "/invierno3.webp",
            },
            {
                id: "invierno-4",
                name: "Navidad",
                note: "Eucalipto, Menta y Miel · Pino, Cedro y Mirra · Frutos Rojos · Naranja, Canela y Vainilla",
                price: 250,
                image: "/invierno4.webp",
            },
        ],
    },
    {
        id: "especiales",
        name: "Ocasiones especiales",
        banner: "/especialesHero.webp",
        products: [
            {
                id: "especial-1",
                name: "Manzanita ABC",
                note: "Manzana y Canela",
                price: 250,
                image: "/especial1.webp",
            },
            {
                id: "especial-2",
                name: "Día del Maestro",
                note: "Cítricos",
                price: 250,
                image: "/especial2.webp",
            },
            {
                id: "especial-3",
                name: "Mini Suculentas",
                note: "Eucalipto y Menta",
                price: 250,
                image: "/especial3.webp",
            },
            {
                id: "especial-4",
                name: "Virgencita",
                note: "Lavanda",
                price: 250,
                image: "/especial4.webp",
            },
            {
                id: "especial-5",
                name: "Día de las Madres",
                note: "Gardenia · Rosas · Peonía",
                price: 250,
                image: "/especial5.webp",
            },
            {
                id: "especial-6",
                name: "Orquídea",
                note: "Orquídea",
                price: 250,
                image: "/especial6.webp",
            },
            {
                id: "especial-7",
                name: "Día de la Mujer",
                note: "Orquídea",
                price: 250,
                image: "/especial7.webp",
            },
            {
                id: "especial-8",
                name: "Bouquet San Valentín",
                note: "Pétalos de Rosa · Cereza y Frambuesa · Fresa · Chocolate",
                price: 250,
                image: "/especial8.webp",
            },
            {
                id: "especial-9",
                name: "Flor Cosmos",
                note: "Pétalos de Rosa · Cereza y Frambuesa · Fresa · Chocolate",
                price: 250,
                image: "/especial9.webp",
            },
            {
                id: "especial-10",
                name: "Kit Difusor",
                note: "Cereza y Frambuesa · Fresa · Chocolate",
                price: 250,
                image: "/especial10.webp",
            },
            {
                id: "especial-11",
                name: "Para Mamá",
                note: "Violetas · Jazmín · Gardenia · Rosas · Bergamota",
                price: 250,
                image: "/especial11.webp",
            },
            {
                id: "especial-12",
                name: "Postre San Valentín",
                note: "Fresa · Cereza · Chocolate · Blueberry",
                price: 250,
                image: "/especial12.webp",
            },
        ],
    },
];
