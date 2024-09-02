import { skills } from "@/data";
import { FaArrowRight } from "react-icons/fa";

const Skills = () => {
    return (
        <section id="projects" className='md:mt-28 mt-12'>
            {/* Title */}
            <div className='md:mb-10 mb-6'>
                <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                    Core Skills
                </h2>
                <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-['455px'] mt-2 mx-auto">
                    Check out the core skills that drive my professional expertise
                </p>
            </div>

            {/* Skills */}
            <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
                {
                    skills.map(({id, title, subtitle, techs}) => (
                        <div key={id} className={`${id === 7 ? 'lg:col-span-2 bg-gradient-to-r from-black-100 via-black-200 to-black-100 border border-blue-900' : ''} md:p-8 p-5 border border-slate-800 md:rounded-3xl rounded-2xl`}>
                            <h1 className="text-center text-xl md:text-2xl text-white font-bold">{title}</h1>
                            <p className="text-center text-light md:text-xl text-slate-500 mt-1">{subtitle}</p>

                            {/* Tools & Technologies */}
                            <div className={`mt-10 flex flex-wrap items-center justify-center gap-3`}>
                                {
                                    techs.map(({logo, name, subtitle, subtitleStyle, style}) => (
                                        <div 
                                            key={id} 
                                            className={`flex items-center justify-center gap-2 px-2 py-2 border border-slate-500 rounded-xl`}
                                        >
                                            {logo && (<img src={logo} alt={name} className={`${style} h-8`} />)}
                                            <p className="text-slate-500 text-light">{name}</p>
                                            {subtitle && (
                                                <div className="flex items-center gap-2">
                                                    <FaArrowRight className="text-slate-500" />
                                                    <p className={`text-light text-transparent bg-clip-text ${subtitleStyle}`}>{subtitle}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Skills;