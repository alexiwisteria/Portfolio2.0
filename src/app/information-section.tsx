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
                        <span key={skill} className="bg-gray-300 px-3 py-1 text-sm rounded-lg">
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
                        <span key={skill} className="bg-gray-300 px-3 py-1 text-sm rounded-lg">
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
                <li>Designed scalable algorithms for sorting large datasets.</li>
                <li>Built responsive interfaces using React and Tailwind CSS.</li>
                <li>Led sprints to deliver functional prototypes on time.</li>
            </ul>
        ),
    },
];

const EXTRACURRICULARS: InfoItem[] = [
    {
        icon: CodeBracketIcon,
        title: "Coding Club Member - Salt Lake City, Utah",
        date: "Jan 2025",
        children: <p>Collaborated on software projects, organized hackathons, and mentored peers.</p>,
    },
    {
        icon: ComputerDesktopIcon,
        title: "Studio E - Ensign College AI Autograding Project - Scrum Master",
        date: "Jan 2025",
        children: <p>Led an AI-driven grading project, optimizing development speed by 40%.</p>,
    },
];

const EXPERIENCE: InfoItem[] = [
    {
        icon: Cog6ToothIcon,
        title: "Help Desk Technician - Ensign College",
        date: "Jan 2024 - Present",
        children: <p>Improved ticket resolution efficiency and streamlined technical issue management.</p>,
    },
    {
        icon: UserGroupIcon,
        title: "Team Lead - Research and Business Development Center",
        date: "Apr 2020 - Jul 2020",
        children: <p>Led a team in self-taught data analytics for actionable insights.</p>,
    },
];

export function InformationSection() {
    return (
        <section className="px-4 md:px-8 lg:px-16">
            <div className="container mx-auto max-w-6xl">
                {["Skills", "Education", "Extracurricular Activities", "Experience"].map((section, index) => (
                    <div key={index} id={section.toLowerCase().replace(/ /g, "-")} className="mb-6">
                        <h2 className="text-2xl font-bold">{section}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {(section === "Skills"
                                    ? [...SKILLS.proficient, ...SKILLS.emerging]
                                    : section === "Education"
                                        ? EDUCATION
                                        : section === "Extracurricular Activities"
                                            ? EXTRACURRICULARS
                                            : EXPERIENCE
                            ).map((props, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
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
