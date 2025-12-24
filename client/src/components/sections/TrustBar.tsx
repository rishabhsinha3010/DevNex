import { FaReact, FaNodeJs, FaAws, FaGoogle, FaDocker, FaPython } from 'react-icons/fa';
import { SiFlutter, SiMongodb, SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql, SiFirebase, SiKubernetes } from 'react-icons/si';

export function TrustBar() {
    const techs = [
        { icon: FaReact, name: 'React' },
        { icon: SiNextdotjs, name: 'Next.js' },
        { icon: SiTypescript, name: 'TypeScript' },
        { icon: SiTailwindcss, name: 'Tailwind' },
        { icon: SiFlutter, name: 'Flutter' },
        { icon: FaNodeJs, name: 'Node.js' },
        { icon: SiMongodb, name: 'MongoDB' },
        { icon: SiPostgresql, name: 'PostgreSQL' },
        { icon: SiFirebase, name: 'Firebase' },
        { icon: FaAws, name: 'AWS' },
        { icon: FaGoogle, name: 'Google Cloud' },
        { icon: FaDocker, name: 'Docker' },
        { icon: FaPython, name: 'Python' },
        { icon: SiKubernetes, name: 'Kubernetes' },
    ];

    // Double the array for seamless marquee
    const marqueeTechs = [...techs, ...techs];

    return (
        <section className="py-10 bg-navy border-t border-b border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-8">
                <p className="text-center text-cyan/70 text-sm font-bold uppercase tracking-[0.2em] shadow-cyan/20 drop-shadow-sm">
                    Powering Next-Gen Ideas With
                </p>
            </div>

            <div className="relative w-full">
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-navy to-transparent z-10"></div>
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-navy to-transparent z-10"></div>

                <div className="flex animate-scroll hover:pause" style={{ width: 'max-content' }}>
                    {marqueeTechs.map((Tech, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 mx-8 group min-w-[80px]">
                            <Tech.icon className="w-10 h-10 text-gray-600 group-hover:text-cyan transition-colors duration-300 filter group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
                            <span className="text-xs font-medium text-gray-500 group-hover:text-white transition-colors">
                                {Tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                .hover\\:pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
