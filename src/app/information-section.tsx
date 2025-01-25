"use client";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
  CheckBadgeIcon,
    SparklesIcon,
    CodeBracketIcon,
    ComputerDesktopIcon,
    UserGroupIcon,
    ClipboardDocumentCheckIcon,
    HeartIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import InfoCard from "@/components/info-card";
import { motion } from "framer-motion";

const EDUCATION = [
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

const EXPERIENCE = [
  {
    icon: Cog6ToothIcon,
    title: "Help Desk Technician - Ensign College",
    date: "Jan 2024 - Present",
    children: (
        <p>
          Increased ticket resolution rates by 20%, reducing average response time by 15 minutes
          during a major WiFi migration. Documented network changes and used ServiceNow to streamline
          technical issue management.
        </p>
    ),
  },
  {
    icon: HeartIcon,
    title: "Kennel Technician - Bountiful Animal Hospital",
    date: "Feb 2022 - Oct 2023",
    children: (
        <p>
          Maintained a zero-incident record by following strict safety protocols. Improved operational
          efficiency by managing multiple tasks in a fast-paced environment.
        </p>
    ),
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Manager - Twisted Sugar",
    date: "Jan 2020 - Jan 2021",
    children: (
        <p>
          Created an employee handbook and training program, boosting onboarding efficiency by 30%.
          Tailored customer service strategies that increased customer loyalty.
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

const SKILLS = {
  proficient: [
    {
      icon: CheckBadgeIcon,
      title: "Proficient",
      date: "Technical Skills",
      children: (
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-300 text-black full px-3 py-1 text-sm">Java</span>
            <span className="bg-gray-300 text-black full px-3 py-1 text-sm">Object-Oriented Programming</span>
            <span className="bg-gray-300 text-black full px-3 py-1 text-sm">Agile Methodologies</span>
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
              <span className="bg-gray-300 text-black full px-3 py-1 text-sm">Git</span>
              <span className="bg-gray-300 text-black full px-3 py-1 text-sm">JUnit</span>
              <span className="bg-gray-300 text-black full px-3 py-1 text-sm">SQL</span>
              <span className="bg-gray-300 text-black full px-3 py-1 text-sm">Vite</span>
              <span className="bg-gray-300 text-black full px-3 py-1 text-sm">TypeScript</span>
              <span className="bg-gray-300 text-black full px-3 py-1 text-sm">React</span>
              <span className="bg-gray-300 text-black full px-3 py-1 text-sm">Python</span>
              <span className="bg-gray-300 text-black full px-3 py-1 text-sm">MongoDB</span>
          </div>
      ),
    },
  ],
};

const EXTRACURRICULARS = [
    {
        icon: CodeBracketIcon,
    title: "Coding Club Member - Salt Lake City, Utah",
    date: "Jan 2025",
    children: (
        <p>
          Collaborated on software projects using Java, Python, and JavaScript. Organized workshops and hackathons
          to solve real-world challenges. Mentored peers in debugging techniques and Git workflows.
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

export function InformationSection() {
  return (
      <section className="px-8 font-space-mono">
        <div className="container mx-auto items-start">
          {/* Education Section */}
          <div id="education" className="mb-16">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-700">Education</h2>
              <p className="text-gray-600">See my education history.</p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {EDUCATION.map((props, idx) => (
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

          {/* Extracurricular Activities Section */}
          <div id="extracurriculars" className="mb-16">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-700">Extracurricular Activities</h2>
              <p className="text-gray-600">
                A glimpse into my collaborative and leadership roles outside of work.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {EXTRACURRICULARS.map((props, idx) => (
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

          {/* Experience Section */}
          <div id="experience" className="mb-16">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-700">Experience</h2>
              <p className="text-gray-600">See my professional experience.</p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {EXPERIENCE.map((props, idx) => (
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

          {/* Skills Section */}
          <div id="skills">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-700">Skills</h2>
              <p className="text-gray-600">Here’s a look at my technical skills.</p>
            </div>

            {/* Proficient Skills */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700"></h3>
              <div className="grid grid-cols-1 gap-4">
                {SKILLS.proficient.map((props, idx) => (
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

            {/* Emerging Skills */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700"></h3>
              <div className="grid grid-cols-1 gap-4">
                {SKILLS.emerging.map((props, idx) => (
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
          </div>
        </div>
      </section>
  );
}

export default InformationSection;
