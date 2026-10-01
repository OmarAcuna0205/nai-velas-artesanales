import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// si se agrega una página nueva, va aquí para que Google la encuentre
const routes = [
    { path: "", priority: 1 },
    { path: "/aviso-de-privacidad", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map(({ path, priority }) => ({
        url: `${site.url}${path}`,
        lastModified: new Date(),
        priority,
    }));
}
