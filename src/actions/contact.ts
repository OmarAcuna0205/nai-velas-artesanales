"use server";

import {
    validateContact,
    type ContactErrors,
    type ContactFields,
} from "@/lib/validation";

type ContactResult = {
    ok: boolean;
    errors?: ContactErrors;
    message?: string;
};

export async function sendContactMessage(
    fields: ContactFields & { sitio: string },
): Promise<ContactResult> {
    if (fields.sitio.trim()) {
        return { ok: true };
    }

    const errors = validateContact(fields);

    if (Object.keys(errors).length > 0) {
        return { ok: false, errors };
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
        return {
            ok: false,
            message: "No se pudo enviar. Inténtalo más tarde.",
        };
    }

    const nombre = fields.nombre.trim().replace(/[\r\n]+/g, " ");
    const correo = fields.correo.trim();

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                subject: `Naí — mensaje de ${nombre}`,
                from_name: "Naí Velas Artesanales",
                replyto: correo,
                name: nombre,
                email: correo,
                message: fields.mensaje.trim(),
            }),
            signal: AbortSignal.timeout(10000),
        });

        const result = await response.json();

        if (!response.ok || !result?.success) {
            return {
                ok: false,
                message: "No se pudo enviar. Inténtalo de nuevo.",
            };
        }

        return { ok: true };
    } catch {
        return {
            ok: false,
            message: "No se pudo enviar. Inténtalo de nuevo.",
        };
    }
}
