import TableOfContents from "@/components/TableOfContents";
import Hero from "./hero";
import InformationSection from "./information-section";
import WeeklyCodingChart from "@/components/WeeklyCodingInfo";
import Footer from "@/components/footer";
import CodeLangMetrics from "@/components/CodeLangMetrics";

export default function Page() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-gray-50">
            <div className="w-full max-w-screen-xl p-4 md:p-6 lg:p-8">
                <section id="hero" className="mb-6 md:mb-8 lg:mb-10">
                    <Hero />
                </section>

                <section id="weekly-coding-chart" className="mb-6 md:mb-8 lg:mb-10">
                    <WeeklyCodingChart />
                    <CodeLangMetrics />
                </section>

                <section id="information-section" className="mb-6 md:mb-8 lg:mb-10">
                    <InformationSection />
                </section>

                <section id="footer">
                    <Footer />
                </section>
            </div>
        </div>
    );
}
