import Hero from "./hero";
import InformationSection from "./information-section";
import WeeklyCodingChart from "@/components/WeeklyCodingInfo";
import Footer from "@/components/footer";
import CodeLangMetrics from "@/components/CodeLangMetrics";

export default function Page() {
    return (
        <div>
            <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6">
                {/* Hero Section */}
                <section id="hero">
                    <Hero />
                </section>

                {/* Weekly Coding Stats & Metrics */}
                <section id="weekly-coding-chart" className="relative mt-2 md:mt-4 lg:mt-6">
                    <WeeklyCodingChart/>
                    <CodeLangMetrics/>
                </section>

                {/* Information Section */}
                <section id="information-section class">
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
