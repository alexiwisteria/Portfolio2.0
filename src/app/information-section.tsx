"use client";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

import InfoCard from "@/components/info-card";

const EDUCATION = [
  {
    icon: AcademicCapIcon,
    title: "Bachelor of Science in Software Engineering - Ensign College",
    date: "Jan 2025 - Apr 2026",
    children:
        "Relevant Coursework: Introduction to Programming, Data Structures, Object-Oriented Programming, Web Development, Discrete Math, Technical Writing, Agile Project Management, Statistics.",
  },
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "Help Desk Technician - Ensign College",
    date: "Jan 2024 - Present",
    children:
        "Provided QA support during a major WiFi migration, resolving technical issues with ServiceNow and TeamDynamix. Documented network changes and delivered ongoing support to improve ticket resolution rates and user satisfaction.",
  },
  {
    icon: BriefcaseIcon,
    title: "Kennel Technician - Bountiful Animal Hospital",
    date: "Feb 2022 - Oct 2023",
    children:
        "Followed strict animal safety protocols, maintaining a zero-incident record. Managed multiple tasks in a fast-paced environment, improving operational efficiency and project completion timelines.",
  },
  {
    icon: BriefcaseIcon,
    title: "Manager - Twisted Sugar",
    date: "Jan 2020 - Jan 2021",
    children:
        "Created an employee handbook and training program, enhancing team efficiency and onboarding processes. Provided tailored customer service, improving loyalty and satisfaction.",
  },
  {
    icon: BriefcaseIcon,
    title: "Team Lead - Research and Business Development Center",
    date: "Apr 2020 - Jul 2020",
    children:
        "Led a team and implemented efficient workflows, self-learned data analytics, and created Excel-based workflows that delivered actionable insights.",
  },
];

const SKILLS = {
  proficient: [
    {
      icon: FireIcon,
      title: "Proficient Technologies",
      date: "Technical Skills",
      children: "Java, Object-Oriented Programming, Agile methodologies.",
    },
  ],
  emerging: [
    {
      icon: FireIcon,
      title: "Emerging Technologies",
      date: "Technical Skills",
      children:
          "Git, JUnit, SQL, ServiceNow, Vite, TypeScript, JavaScript, Python, React, Next.js, MongoDB.",
    },
  ],
};

const EXTRACURRICULARS = [
  {
    icon: FireIcon,
    title: "Coding Club Member - Salt Lake City, Utah",
    date: "Jan 2025",
    children:
        "Collaborating on software projects using Java, Python, and JavaScript. Organizing workshops and participating in hackathons to solve real-world challenges. Mentored peers in debugging techniques, Git workflows, and coding fundamentals.",
  },
  {
    icon: FireIcon,
    title: "Studio E - Ensign College AI Autograding Project - Scrum Master",
    date: "Jan 2025",
    children:
        "Leading an agile team in AIOps, consistently achieving milestones by integrating advanced AI models to enhance Techlab Grading operations. Optimized data pipelines and employed the OpenAI ChatGPT API for rapid prototyping, enhancing development speed and efficiency. Developed innovative AIOps solutions that improved system reliability and strengthened collaboration between teams, leading to successful tool integrations.",
  },
];

export function InformationSection() {
  return (
      <section className="pb-28 px-8">
        <div className="container mx-auto items-start">
          {/* Education Section */}
          <div className="mb-36">
            <div className="mb-10">
              <Typography color="gray" className="mb-2 text-3xl font-bold">
                Education
              </Typography>
              <Typography variant="lead" className="!text-gray-500">
                See my education history.
              </Typography>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
              {EDUCATION.map((props, idx) => (
                  <InfoCard key={idx} {...props} />
              ))}
            </div>
          </div>

          {/* Extracurricular Activities Section */}
          <div className="mb-36">
            <div className="mb-10">
              <Typography color="gray" className="mb-2 text-3xl font-bold">
                Extracurricular Activities
              </Typography>
              <Typography variant="lead" className="!text-gray-500">
                A glimpse into my collaborative and leadership roles outside of work.
              </Typography>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
              {EXTRACURRICULARS.map((props, idx) => (
                  <InfoCard key={idx} {...props} />
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-36">
            <div className="mb-10">
              <Typography color="gray" className="mb-2 text-3xl font-bold">
                Experience
              </Typography>
              <Typography variant="lead" className="!text-gray-500">
                See my professional experience.
              </Typography>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
              {EXPERIENCE.map((props, idx) => (
                  <InfoCard key={idx} {...props} />
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="mb-10">
              <Typography color="gray" className="mb-2 text-3xl font-bold">
                Skills
              </Typography>
              <Typography variant="lead" className="!text-gray-500">
                Here’s a look at my technical skills.
              </Typography>
            </div>

            {/* Proficient Skills */}
            <div className="mb-12">
              <Typography
                  color="gray"
                  className="mb-2 text-2xl font-semibold"
              >
                Proficient Skills
              </Typography>
              <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
                {SKILLS.proficient.map((props, idx) => (
                    <InfoCard key={idx} {...props} />
                ))}
              </div>
            </div>

            {/* Emerging Skills */}
            <div>
              <Typography
                  color="gray"
                  className="mb-2 text-2xl font-semibold"
              >
                Emerging Skills
              </Typography>
              <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
                {SKILLS.emerging.map((props, idx) => (
                    <InfoCard key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default InformationSection;
