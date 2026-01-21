import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Star } from 'lucide-react';

import { SEO } from '../components/seo/SEO';

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    live?: string;
    github?: string;
    video?: string;
    featured?: boolean;
}

export function Portfolio() {

    const projects: Project[] = [
        {
            id: 1,
            title: "Renaissance Preschool Website",
            description: "A modern, child-friendly platform showcasing programs, admissions, and activities with engaged visuals and parent-friendly navigation.",
            tech: ["React", "Tailwind CSS", "Framer Motion"],
            image: "/portfolio/renaissance_logo.png",
            live: "#", // URL to be added later
            featured: false
        },
        {
            id: 10,
            title: "ChainCred – Blockchain Credentials",
            description: "Decentralized platform for tamper-proof academic credentials on opBNB and BNB Greenfield.",
            tech: ["Solidity", "opBNB", "React", "MongoDB"],
            image: "/portfolio/chaincred.jpg",
            live: "https://chaincred-frontend.onrender.com/",
            video: "https://youtu.be/yDQA6xOlVpQ"
        },
        {
            id: 8,
            title: "LMS.PRO – Learning Management",
            description: "Comprehensive role-based LMS for course management, student tracking, and content delivery.",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            image: "/portfolio/lms.jpg",
            video: "https://drive.google.com/file/d/1qvPDDLiiIyelbemzLILsv4_5IpctHzu8/view"
        },
        {
            id: 2,
            title: "DevNex UI Theme Playground",
            description: "Interactive UI theme playground allowing real-time experimentation with fonts, colors, and styles using DaisyUI.",
            tech: ["DaisyUI", "React", "Theme Controller"],
            image: "/portfolio/devnex_ui.jpg",
            live: "https://daizy-ui-team.vercel.app/"
        },
        {
            id: 6,
            title: "Heart Disease Risk Classifier",
            description: "ML medical application predicting heart disease risk with clinical-grade accuracy using XGBoost.",
            tech: ["Python", "XGBoost", "Scikit-learn", "Streamlit"],
            image: "/portfolio/heart_disease.jpg",
            live: "https://yashpatil045-heart-disease-classifier.streamlit.app/"
        },
        {
            id: 7,
            title: "CliniScan – Medical Image AI",
            description: "Deep learning system for detecting lung abnormalities in X-rays using EfficientNet and YOLOv8.",
            tech: ["PyTorch", "EfficientNet", "YOLOv8", "Streamlit"],
            image: "/portfolio/cliniscan.jpg",
            live: "https://yashpatil045-cliniscan.streamlit.app/",
            github: "https://lnkd.in/d9-SUmST"
        },
        {
            id: 3,
            title: "GateSmart – GATE CS Learning",
            description: "Full-stack prep platform with AI tutor, adaptive revision planning, and secure authentication.",
            tech: ["Next.js", "FastAPI", "PostgreSQL", "LLaMA-3.3", "Random Forest"],
            image: "/portfolio/gatesmart.jpg",
            live: "https://gate-smart-five.vercel.app/"
        },
        {
            id: 9,
            title: "StudyGenie – AI Study Coach",
            description: "Smart study planner with AI doubt resolution, auto-generated quizzes, and calendar integration.",
            tech: ["React", "Gemini API", "Firebase", "Node.js"],
            image: "/portfolio/studygenie.jpg",
            video: "https://drive.google.com/file/d/1_uqKrzMfySO8i8ScGuIPSrG1CIl2XJJP/view"
        },
        {
            id: 4,
            title: "LingualSense – Multilingual Detection",
            description: "Deep learning NLP system for accurate real-time multilingual text detection using GRU models.",
            tech: ["Python", "GRU", "NLP", "Flask", "Streamlit"],
            image: "/portfolio/lingualsense.jpg",
            live: "https://lingualsense7.streamlit.app/"
        },
        {
            id: 5,
            title: "Monday – Personality Finder",
            description: "AI-powered assistant helping users discover personality traits through interactive conversations.",
            tech: ["AI", "NLP", "React"],
            image: "/portfolio/monday.jpg",
            live: "https://monday-nxgz.onrender.com/"
        }
    ];

    return (
        <div className="bg-navy min-h-screen text-white pt-20 selection:bg-cyan selection:text-navy">
            <SEO
                title="Portfolio"
                description="Explore our work. High-performance websites, engaging mobile apps, and custom digital solutions."
                canonicalUrl="https://devnex.in/portfolio"
            />
            {/* Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

                <div className="text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
                    >
                        <span className="text-sm font-medium text-cyan tracking-wide uppercase">Innovation Delivered</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue-500 to-purple-600">Masterpieces</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Exploring the frontier of technology with transformative solutions in Web, AI, Blockchain, and SaaS.
                    </motion.p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-navy/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-cyan/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] transition-all duration-500 flex flex-col"
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                    <Star className="w-3 h-3 fill-current" /> FEATURED
                                </div>
                            )}

                            {/* Image Section */}
                            <div className="relative overflow-hidden h-60">
                                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10 opacity-60" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${project.id === 1 ? 'object-contain p-8 bg-black/40' : 'object-cover'
                                        }`}
                                />

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-cyan/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                                            className="p-3 bg-white text-navy rounded-full shadow-lg hover:scale-110 transition-transform">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.video && (
                                        <a href={project.video} target="_blank" rel="noopener noreferrer"
                                            className="p-3 bg-white text-navy rounded-full shadow-lg hover:scale-110 transition-transform">
                                            <Play className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            className="p-3 bg-white text-navy rounded-full shadow-lg hover:scale-110 transition-transform">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 md:p-8 flex flex-col flex-1">
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.tech.slice(0, 3).map((t, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-cyan bg-cyan/10 px-2 py-1 rounded border border-cyan/20">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>

                                <h3 className="font-bold text-white mb-3 group-hover:text-cyan transition-colors text-xl">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-3 mt-auto">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-cyan hover:text-navy text-white text-sm font-medium transition-all duration-300 flex items-center gap-2"
                                        >
                                            Live Demo <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                    {project.video && (
                                        <a
                                            href={project.video}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-purple-500 hover:text-white text-white text-sm font-medium transition-all duration-300 flex items-center gap-2"
                                        >
                                            Watch Demo <Play className="w-3 h-3" />
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-white/5 hover:bg-white/20 text-gray-400 hover:text-white transition-colors"
                                            title="View Code"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-gray-400 text-lg font-medium italic">
                        "Innovation never stops. More breakthrough projects are currently in the lab and will be unveiled soon."
                    </p>
                </div>
            </section>


        </div>
    );
}
