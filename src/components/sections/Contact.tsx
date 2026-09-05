"use client";

import { useState, useTransition } from "react";
import { motion } from "motion/react";
import {
    InstagramLogoIcon,
    FacebookLogoIcon,
    TiktokLogoIcon,
    EnvelopeSimpleIcon,
    ShoppingCartIcon,
    WhatsappLogoIcon,
    CircleNotchIcon,
} from "@phosphor-icons/react";
import { sendContactMessage } from "@/actions/contact";
import { LIMITS, validateContact, type ContactErrors } from "@/lib/validation";
import { eventLink } from "@/lib/whatsapp";
import { site } from "@/data/site";

export default function Contact() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [sitio, setSitio] = useState("");
    const [errors, setErrors] = useState<ContactErrors>({});
    const [feedback, setFeedback] = useState<{
        ok: boolean;
        text: string;
    } | null>(null);
    const [pending, startSending] = useTransition();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFeedback(null);

        const fields = { nombre, correo, mensaje };
        const found = validateContact(fields);
        setErrors(found);

        if (Object.keys(found).length > 0) {
            return;
        }

        startSending(async () => {
            const result = await sendContactMessage({ ...fields, sitio });

            if (result.ok) {
                setNombre("");
                setCorreo("");
                setMensaje("");
                setErrors({});
                setFeedback({
                    ok: true,
                    text: "¡Listo! Te contestamos pronto.",
                });
                return;
            }

            setErrors(result.errors ?? {});
            setFeedback({
                ok: false,
                text: result.message ?? "Revisa los campos marcados.",
            });
        });
    };

    return (
        <section
            id="contacto"
            aria-labelledby="contacto-titulo"
            className="scroll-mt-32 bg-bg px-6 pt-10 pb-20 md:scroll-mt-22 md:pt-14 md:pb-28 lg:px-10"
        >
            <div className="mx-auto max-w-3xl">
                <motion.h2
                    id="contacto-titulo"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, ease: [0.25, 1, 0.35, 1] }}
                    className="text-center font-display text-4xl font-light tracking-tight text-ink lg:text-5xl"
                >
                    Contacto
                </motion.h2>

                <motion.form
                    onSubmit={handleSubmit}
                    noValidate
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.9,
                        delay: 0.15,
                        ease: [0.25, 1, 0.35, 1],
                    }}
                    className="mt-14 rounded-3xl border border-border bg-surface px-6 py-8 shadow-[0_4px_14px_rgba(43,42,38,0.04)] sm:px-10 sm:py-10 lg:mt-16"
                >
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="nombre"
                                className="font-display text-[10px] font-semibold uppercase tracking-widest text-muted"
                            >
                                Nombre
                            </label>
                            <input
                                id="nombre"
                                name="nombre"
                                type="text"
                                value={nombre}
                                onChange={(event) =>
                                    setNombre(event.target.value)
                                }
                                maxLength={LIMITS.nombre.max}
                                placeholder="Tu nombre"
                                className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 font-body text-sm text-ink transition-colors placeholder:text-muted focus:border-brand focus:outline-none"
                            />
                            {errors.nombre && (
                                <p className="mt-2 font-body text-xs text-accent">
                                    {errors.nombre}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="correo"
                                className="font-display text-[10px] font-semibold uppercase tracking-widest text-muted"
                            >
                                Correo
                            </label>
                            <input
                                id="correo"
                                name="correo"
                                type="email"
                                value={correo}
                                onChange={(event) =>
                                    setCorreo(event.target.value)
                                }
                                maxLength={LIMITS.correo.max}
                                placeholder="tucorreo@correo.com"
                                className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 font-body text-sm text-ink transition-colors placeholder:text-muted focus:border-brand focus:outline-none"
                            />
                            {errors.correo && (
                                <p className="mt-2 font-body text-xs text-accent">
                                    {errors.correo}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mt-5">
                        <label
                            htmlFor="mensaje"
                            className="font-display text-[10px] font-semibold uppercase tracking-widest text-muted"
                        >
                            Mensaje
                        </label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            rows={4}
                            value={mensaje}
                            onChange={(event) => setMensaje(event.target.value)}
                            maxLength={LIMITS.mensaje.max}
                            placeholder="Escríbenos lo que quieras contarnos."
                            className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 font-body text-sm text-ink transition-colors placeholder:text-muted focus:border-brand focus:outline-none resize-none"
                        />

                        <div className="mt-2 flex items-baseline justify-between gap-4">
                            {errors.mensaje ? (
                                <p className="font-body text-xs text-accent">
                                    {errors.mensaje}
                                </p>
                            ) : (
                                <span />
                            )}

                            <p
                                className={`shrink-0 font-display text-xs ${mensaje.length > LIMITS.mensaje.max - 100
                                    ? "text-accent"
                                    : "text-muted"
                                    }`}
                            >
                                {mensaje.length} / {LIMITS.mensaje.max}
                            </p>
                        </div>
                    </div>

                    <input
                        type="text"
                        name="sitio"
                        value={sitio}
                        onChange={(event) => setSitio(event.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="hidden"
                    />

                    <motion.button
                        type="submit"
                        disabled={pending}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="mt-7 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-display text-xs font-semibold uppercase tracking-widest text-bg transition-colors duration-300 hover:bg-ink disabled:cursor-default disabled:bg-muted"
                    >
                        {pending ? "Enviando" : "Enviar mensaje"}

                        {pending ? (
                            <motion.span
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 0.9,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="flex"
                            >
                                <CircleNotchIcon size={16} weight="bold" />
                            </motion.span>
                        ) : (
                            <EnvelopeSimpleIcon size={16} weight="bold" />
                        )}
                    </motion.button>

                    <div aria-live="polite">
                        {feedback && (
                            <p
                                className={`mt-4 text-center font-body text-sm ${feedback.ok ? "text-brand" : "text-accent"
                                    }`}
                            >
                                {feedback.text}
                            </p>
                        )}
                    </div>
                </motion.form>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.3,
                            ease: [0.25, 1, 0.35, 1],
                        }}
                        className="rounded-3xl bg-brand px-7 py-8"
                    >
                        <h3 className="font-display text-2xl text-bg">
                            Haz tu pedido
                        </h3>

                        <p className="mt-3 font-body text-sm leading-relaxed text-bg">
                            Arma tu carrito desde nuestro catálogo.
                        </p>

                        <motion.a
                            href="#catalogo"
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            className="mt-6 inline-flex items-center gap-2 rounded-full border border-bg px-6 py-2.5 font-display text-[10px] font-semibold uppercase tracking-widest text-bg transition-colors duration-300 hover:bg-bg hover:text-brand"
                        >
                            Catálogo
                            <ShoppingCartIcon size={14} weight="bold" />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.45,
                            ease: [0.25, 1, 0.35, 1],
                        }}
                        className="rounded-3xl border border-border bg-surface px-7 py-8"
                    >
                        <h3 className="font-display text-2xl text-ink">
                            Cotiza tu evento
                        </h3>

                        <p className="mt-3 font-body text-sm leading-relaxed text-ink">
                            Contáctanos a través de WhatsApp.
                        </p>

                        <motion.a
                            href={eventLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink px-6 py-2.5 font-display text-[10px] font-semibold uppercase tracking-widest text-ink transition-colors duration-300 hover:bg-ink hover:text-bg"
                        >
                            Mandar WhatsApp
                            <WhatsappLogoIcon size={14} weight="bold" />
                        </motion.a>
                    </motion.div>
                </div>

                <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.1,
                        ease: [0.25, 1, 0.35, 1],
                    }}
                    className="mt-12 flex justify-center gap-5"
                >
                    {[
                        {
                            label: "Instagram",
                            href: site.instagram,
                            Icon: InstagramLogoIcon,
                        },
                        {
                            label: "Facebook",
                            href: site.facebook,
                            Icon: FacebookLogoIcon,
                        },
                        {
                            label: "TikTok",
                            href: site.tiktok,
                            Icon: TiktokLogoIcon,
                        },
                    ].map(({ label, href, Icon }) => (
                        <li key={label}>
                            <motion.a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                whileHover={{ y: -4, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 320,
                                    damping: 18,
                                }}
                                className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-brand transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-bg"
                            >
                                <Icon size={24} weight="bold" />
                            </motion.a>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}
