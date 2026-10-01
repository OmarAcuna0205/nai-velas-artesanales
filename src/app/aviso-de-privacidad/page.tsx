import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
    title: "Aviso de privacidad | Naí Velas Artesanales",
    description:
        "Cómo Naí Velas Artesanales usa y protege los datos personales que compartes en el sitio y por WhatsApp.",
    alternates: { canonical: "/aviso-de-privacidad" },
};

const heading = "mt-10 font-display text-xl font-semibold text-ink lg:text-2xl";
const paragraph = "mt-3 font-body text-sm leading-relaxed text-ink/80 lg:text-base";
const list = `${paragraph} list-disc space-y-1.5 pl-5`;
const link =
    "font-semibold text-brand underline decoration-brand/30 underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent";

export default function AvisoDePrivacidad() {
    return (
        <>
            <header className="border-b border-border bg-bg px-6 py-5 lg:px-10">
                <div className="mx-auto flex max-w-3xl items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/logo.webp"
                            alt="Naí — Velas artesanales"
                            width={110}
                            height={110}
                        />
                    </Link>
                    <Link href="/" className={`text-sm ${link}`}>
                        Volver al inicio
                    </Link>
                </div>
            </header>

            <main className="bg-bg px-6 pt-12 pb-16 lg:px-10 lg:pt-16 lg:pb-24">
                <article className="mx-auto max-w-3xl">
                    <h1 className="font-display text-4xl font-light tracking-tight text-ink lg:text-5xl">
                        Aviso de privacidad
                    </h1>
                    <p className="mt-4 font-display text-xs uppercase tracking-widest text-muted">
                        Última actualización: 30 de septiembre de 2026
                    </p>

                    <h2 className={heading}>Responsable</h2>
                    <p className={paragraph}>
                        {site.name}, con entregas en la Ciudad de México y Morelia, México,
                        es responsable del tratamiento de los datos personales que nos
                        compartes, conforme a la Ley Federal de Protección de Datos
                        Personales en Posesión de los Particulares.
                    </p>

                    <h2 className={heading}>Qué datos recabamos</h2>
                    <ul className={list}>
                        <li>
                            Si usas el formulario de contacto: tu nombre, tu correo y tu
                            mensaje.
                        </li>
                        <li>
                            Cuando haces un pedido o nos escribes por WhatsApp: tu número de
                            teléfono, las velas que elegiste y lo que compartas en la
                            conversación, como tu dirección de entrega.
                        </li>
                        <li>
                            Al navegar por el sitio: datos de uso como las secciones que
                            visitas, el tipo de dispositivo y navegador, y tu ubicación
                            aproximada (ciudad o región). No te identifican por nombre.
                        </li>
                    </ul>
                    <p className={paragraph}>
                        No recabamos datos personales sensibles ni datos de pago.
                    </p>

                    <h2 className={heading}>Para qué los usamos</h2>
                    <ul className={list}>
                        <li>Responder tus mensajes y dudas.</li>
                        <li>Tomar tu pedido, confirmar aromas, precio y disponibilidad.</li>
                        <li>Coordinar la entrega de tus velas.</li>
                        <li>Saber cómo se usa el sitio para mejorarlo.</li>
                    </ul>

                    <h2 className={heading}>Cómo nos llegan tus datos</h2>
                    <p className={paragraph}>
                        El carrito no guarda tu pedido en ningún servidor: se guarda solo en
                        tu navegador para que no lo pierdas, y al confirmar se abre WhatsApp
                        con un mensaje ya escrito que tú decides si envías. WhatsApp es un
                        servicio de Meta y se rige por sus propias políticas de privacidad.
                    </p>
                    <p className={paragraph}>
                        El formulario de contacto nos llega por correo a través de Web3Forms,
                        un servicio que solo se encarga de entregarnos tu mensaje.
                    </p>

                    <h2 className={heading}>Con quién los compartimos</h2>
                    <p className={paragraph}>
                        No vendemos ni compartimos tus datos con terceros, salvo en los casos
                        en que la ley lo permite o lo exige.
                    </p>

                    <h2 className={heading}>Tus derechos</h2>
                    <p className={paragraph}>
                        Puedes acceder a tus datos, corregirlos, pedir que los eliminemos u
                        oponerte a que los usemos (derechos ARCO), y también retirar tu
                        consentimiento. Para hacerlo, escríbenos por WhatsApp al{" "}
                        <a
                            href={`https://wa.me/${site.whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={link}
                        >
                            {site.phoneLabel}
                        </a>{" "}
                        o al correo{" "}
                        <a href={`mailto:${site.email}`} className={link}>
                            {site.email}
                        </a>
                        , con tu nombre, lo que necesitas y un medio para responderte. Te
                        contestamos en un plazo máximo de 20 días hábiles.
                    </p>

                    <h2 className={heading}>Cookies y analítica</h2>
                    <p className={paragraph}>
                        Usamos Google Analytics, un servicio de Google, para saber cuántas
                        personas visitan el sitio, qué secciones ven y cómo llegan a él. Usa
                        cookies para distinguir visitas y nos muestra la información en
                        conjunto, sin tu nombre ni tus datos de contacto. También usamos
                        Vercel Analytics, que cuenta visitas sin usar cookies. Solo usamos
                        esta información para mejorar el sitio, no para publicidad.
                    </p>
                    <p className={paragraph}>
                        Puedes bloquear o borrar las cookies desde la configuración de tu
                        navegador, o instalar el{" "}
                        <a
                            href="https://tools.google.com/dlpage/gaoptout"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={link}
                        >
                            complemento de inhabilitación de Google Analytics
                        </a>
                        . El sitio sigue funcionando igual.
                    </p>

                    <h2 className={heading}>Cambios a este aviso</h2>
                    <p className={paragraph}>
                        Si cambiamos este aviso, publicaremos la nueva versión en esta misma
                        página con su fecha de actualización.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    );
}
