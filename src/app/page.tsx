import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Catalog from "@/components/sections/Catalog";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Featured />
            <Catalog />
        </main>
    );
}
