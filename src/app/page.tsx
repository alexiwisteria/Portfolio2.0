import TableOfContents from "@/components/TableOfContents";
import Hero from "./hero";
import InformationSection from "./information-section";
import WeeklyCodingChart from "@/components/WeeklyCodingInfo";
import Footer from "@/components/footer";
import CodeLangMetrics from "@/components/CodeLangMetrics";

export default function Page() {
    return (
        <div className="flex">
            {/* Hide on small screens, show on medium and larger screens */}
            <div className="hidden md:flex">
                <TableOfContents />
            </div>
            <div className="flex-grow">
                <section id="hero">
                    <Hero />
                </section>
                <section id="weekly-coding-chart">
                    <WeeklyCodingChart />
                    <CodeLangMetrics />
                </section>
                <section id="information-section">
                    <InformationSection />
                </section>
                <section id="footer">
                    <Footer />
                </section>
            </div>
        </div>
    );
}
