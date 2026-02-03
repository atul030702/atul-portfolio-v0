import Envelope from "@/components/icons/envelope";
import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";
import Twitter from "@/components/icons/twitter";


export const USER = {
    firstName: "Atul",
    lastName: "Kumar",
    email: "atul.ai.0307@gmail.com",
    phoneNumber: "6202075783",
    address: "Bihar, India",
    currentLocation: "Patna, India",
    socialLinks: [
        {

            name: "Github",
            url: "https://github.com/atul030702",
            icon: Github
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/atul030702/",
            icon: Linkedin
        },
        {
            name: "Twitter",
            url: "https://x.com/k_atul0307",
            icon: Twitter

        },
        {
            name: "Mail",
            url: "mailto:atul.ai.0307@gmail.com",
            icon: Envelope
        }

    ],
    jobTitle: "Full Stack Web Developer",
    job: [
        {
            company: "Buddhicintaka Pvt. Ltd.",
            position: "Frontend Engineer Intern",
            description: [
                "Shape the entire frontend using Next.js, TypeScript, Tailwind CSS, and TanStack Query.",
                "Integrated APIs and added real-time features for a fast and responsive site.",
                "Wrote unit, integration, and end-to-end tests using Jest, Cypress, and Storybook.",
                "Collaborated with backend and design teams to deliver maintainable and high-quality systems."
            ],
            start: "SEP 2025",
            end: "Current",
            location: "Bangalore, India (remote)",

            website: "",
        },
        {
            company: "SSH Softtech",
            position: "Full Stack Developer (Contract)",
            description: [
                "Completed 4 full-stack projects for clients on time using React, Next.js, Node.js, and MongoDB.",
                "Built custom features, APIs, and user interfaces with a focus on clean, maintainable code.",
                "Ensured all projects were mobile-friendly and responsive.",
                "Handled both frontend and backend development to deliver complete solutions."
            ],
            start: "",
            end: "2025",
            location: "Patna, India",
            website: "https://sshsofttech.com/"
            
        }
    ],
    about: `I build things that excite me — usually by chasing ideas that spark curiosity or help me learn something new.

Most of the time, I recreate things that already exist — not to copy, but to understand how and why they work. It’s my way of learning deeply and sharpening how I think.

I don’t just code — I explore. I talk to builders, dive into their perspectives, and try to see problems from all angles. Whether I’m building solo or with a team, I care about why we’re doing something just as much as how.

I say: “Curiosity can make you great.”
And I try to prove that with every project I take on.`,
    shortBio: `Build fast, Break fast, Learn fast`,
    keywords: "atul kumar, dev atul, atul030702, 03atul, atul_kumar",
    projects: [
        {
            name: "Netflix GPT",
            description: "An AI powered movie recommendation platform",
            url: "",
            github: "https://github.com/atul030702/netflix-gpt",
            techStack: ["Node.js", "Gemini", "React", "Vite", "Tailwind", "Firebase Auth"]
        },
        {
            name: "Systems CI/CD Pipeline",
            description: "Systems and CI/CD project for learning purpose",
            url: "",
            github: "https://github.com/atul030702/ci-cd",
            techStack: ["Node.js", "Next.js", "Jenkins", "Docker", "React", "Monorepo"]
        },
    ],

    PR: [
        {
            title: "Fix: Next Proxy server refactor to implement data streaming",
            link: "https://github.com/the-monkeys/the_monkeys/pull/496"
        },
        {
            title: "Add: Custom editor.js list plugin for ordered and unordered list",
            link: "https://github.com/the-monkeys/the_monkeys/pull/500"
        },
        {
            title: "Add: Contact Page",
            link: "https://github.com/the-monkeys/the_monkeys/pull/484"
        },
        {
            title: "Fix: Added pagination and URL query params to the /search route",
            link: "https://github.com/the-monkeys/the_monkeys/pull/452"
        },
        {
            title: "Fix: Tanstack key invalidation for bookmark caching issue",
            link: "https://github.com/the-monkeys/the_monkeys/pull/498"
        },
        {
            title: "Reviewed swr to tanstack migration pull request",
            link: "https://github.com/the-monkeys/the_monkeys/pull/493"
        }
    ]

}