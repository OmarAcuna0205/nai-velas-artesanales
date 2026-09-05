import { site } from "@/data/site";

type OrderLine = {
    name: string;
    price: number;
    quantity: number;
};

export function buildOrderLink(items: OrderLine[], total: number) {
    const lines = items.map(
        (item) =>
            `• ${item.name} — $${item.price} × ${item.quantity} = $${item.price * item.quantity}`,
    );

    const message = `Hola, me interesa comprar los siguientes productos:\n\n${lines.join(
        "\n",
    )}\n\nTotal: $${total}`;

    return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
        message,
    )}`;
}

export const eventLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    "Hola, me gustaría cotizar velas para un evento.",
)}`;

export const contactLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    "Hola, me interesan sus velas artesanales.",
)}`;
