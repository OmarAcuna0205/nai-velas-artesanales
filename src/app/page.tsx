import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Featured />
        </main>
    );
}
