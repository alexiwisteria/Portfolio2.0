"use client";
import {
    AcademicCapIcon,
    CheckBadgeIcon,
    SparklesIcon,
    CodeBracketIcon,
    UserGroupIcon,
    ComputerDesktopIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import InfoCard from "@/components/info-card";
import { motion } from "framer-motion";

interface InfoItem {
    icon: React.ElementType;
    title: string;
    date: string;
    children: JSX.Element;
}

const SKILLS = {
    proficient: [
        {
            icon: CheckBadgeIcon,
            title: "Proficient",
            date: "Technical Skills",
            children: (
                <div className="flex flex-wrap gap-2">
                    {["Java", "OOP", "Agile Methodologies"].map((skill) => (
                        <span key={skill} className="bg-gray-300 text-black px-3 py-1 text-sm rounded-lg">
                            {skill}
                        </span>
                    ))}
                </div>
            ),
        },
    ],
    emerging: [
        {
            icon: SparklesIcon,
            title: "Emerging",
            date: "Technical Skills",
            children: (
                <div className="flex flex-wrap gap-2">
                    {["Git", "JUnit", "SQL", "Vite", "TypeScript", "React", "Python", "MongoDB"].map((skill) => (
                        <span key={skill} className="bg-gray-300 text-black px-3 py-1 text-sm rounded-lg">
                            {skill}
                        </span>
                    ))}
                </div>
            ),
        },
    ],
};

const EDUCATION: InfoItem[] = [
    {
        icon: AcademicCapIcon,
        title: "Bachelor of Science in Software Engineering - Ensign College",
        date: "Jan 2025 - Apr 2026",
        children: (
            <ul className="list-disc pl-5">
                <li>Data Structures: Designed scalable algorithms for sorting large datasets.</li>
                <li>Web Development: Built responsive interfaces using React and Tailwind CSS.</li>
                <li>Agile Project Management: Led sprints to deliver functional prototypes on time.</li>
            </ul>
        ),
    },
];

const EXTRACURRICULARS: InfoItem[] = [
    {
        icon: CodeBracketIcon,
        title: "Coding Club Member - Salt Lake City, Utah",
        date: "Jan 2025",
        children: (
            <p>
                Collaborated on software projects using Java, Python, and JavaScript. Organized workshops and hackathons to
                solve real-world challenges. Mentored peers in debugging techniques and Git workflows.
            </p>
        ),
    },
    {
        icon: ComputerDesktopIcon,
        title: "Studio E - Ensign College AI Autograding Project - Scrum Master",
        date: "Jan 2025",
        children: (
            <p>
                Led an agile team in integrating advanced AI models to optimize grading systems. Employed OpenAI ChatGPT API
                for prototyping, improving development speed by 40%. Developed solutions that enhanced system reliability.
            </p>
        ),
    },
];

const EXPERIENCE: InfoItem[] = [
    {
        icon: Cog6ToothIcon,
        title: "Help Desk Technician - Ensign College",
        date: "Jan 2024 - Present",
        children: (
            <p>
                Increased ticket resolution rates by 20%, reducing average response time by 15 minutes during a major WiFi
                migration. Documented network changes and used ServiceNow to streamline technical issue management.
            </p>
        ),
    },
    {
        icon: UserGroupIcon,
        title: "Team Lead - Research and Business Development Center",
        date: "Apr 2020 - Jul 2020",
        children: (
            <p>
                Self-taught data analytics to lead a team in creating Excel workflows that provided actionable insights.
            </p>
        ),
    },
];

export function InformationSection() {
    return (
        <section className="px-4 md:px-8 lg:px-16 font-space-mono">
            <div className="container mx-auto max-w-6xl">
                {["Skills", "Education", "Extracurricular Activities", "Experience"].map((section, index) => (
                    <div key={index} id={section.toLowerCase().replace(/ /g, "-")}
                         className="mb-6">  {/* Reduced mb-12 to mb-6 */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-700">{section}</h2>
                            <p className="text-gray-600">Explore my {section.toLowerCase()}.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {(section === "Skills" ? [...SKILLS.proficient, ...SKILLS.emerging] :
                                    section === "Education" ? EDUCATION :
                                        section === "Co-Curricular Engagement" ? EXTRACURRICULARS :
                                            EXPERIENCE
                            ).map((props, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5}}
                                >
                                    <InfoCard {...props} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default InformationSection;