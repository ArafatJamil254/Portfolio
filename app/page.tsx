import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="relative bg-[#121212]">
            {/* Scrollytelling Section */}
            <section className="relative h-[500vh]">
                <ScrollyCanvas />
                <Overlay />
            </section>

            {/* Projects & Skills Section */}
            <Projects />

            {/* About Section */}
            <About />

            {/* Contact Section */}
            <Contact />
        </main>
    );
}
