import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Catalog from "@/components/sections/Catalog";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Catalog />
                <Featured />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
