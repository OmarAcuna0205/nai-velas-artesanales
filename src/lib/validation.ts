export const LIMITS = {
    nombre: { min: 2, max: 60 },
    correo: { max: 100 },
    mensaje: { min: 10, max: 800 },
};

export type ContactFields = {
    nombre: string;
    correo: string;
    mensaje: string;
};

export type ContactErrors = Partial<Record<keyof ContactFields, string>>;

export function validateContact(fields: ContactFields): ContactErrors {
    const errors: ContactErrors = {};

    const nombre = fields.nombre.trim();
    const correo = fields.correo.trim();
    const mensaje = fields.mensaje.trim();

    if (nombre.length < LIMITS.nombre.min) {
        errors.nombre = "Escribe tu nombre.";
    } else if (nombre.length > LIMITS.nombre.max) {
        errors.nombre = `Máximo ${LIMITS.nombre.max} caracteres.`;
    }

    if (correo.length > LIMITS.correo.max) {
        errors.correo = `Máximo ${LIMITS.correo.max} caracteres.`;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo)) {
        errors.correo = "Revisa tu correo.";
    }

    if (mensaje.length < LIMITS.mensaje.min) {
        errors.mensaje = `Cuéntanos un poco más, mínimo ${LIMITS.mensaje.min} caracteres.`;
    } else if (mensaje.length > LIMITS.mensaje.max) {
        errors.mensaje = `Máximo ${LIMITS.mensaje.max} caracteres.`;
    }

    return errors;
}
