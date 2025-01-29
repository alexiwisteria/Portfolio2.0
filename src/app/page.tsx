import TableOfContents from "@/components/TableOfContents";
import Hero from "./hero";
import InformationSection from "./information-section";
import WeeklyCodingChart from "@/components/WeeklyCodingInfo";
import Footer from "@/components/footer";
import CodeLangMetrics from "@/components/CodeLangMetrics";

export default function Page() {
    return (
        <div>
            {/* Page Wrapper to Ensure Full Height */}
            <div>

                {/* Hero Section */}
                <section id="hero">
                    <Hero />
                </section>

                {/* Weekly Coding Stats & Metrics */}
                <section id="weekly-coding-chart">
                    <WeeklyCodingChart />
                    <CodeLangMetrics />
                </section>

                {/* Information Section */}
                <section id="information-section">
                    <InformationSection />
                </section>

                {/* Footer */}
                <section id="footer">
                    <Footer />
                </section>
            </div>
        </div>
    );
}
