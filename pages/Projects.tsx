import dynamic from "next/dynamic";
const PinContainer = dynamic(
  () => import("@/components/ui/3d-pin").then((mod) => mod.PinContainer),
  { ssr: false }
);

// import { PinContainer } from "@/components/ui/3d-pin";
import { projects } from "@/data";
import { FaGithub } from "react-icons/fa";


const Projects = () => {
    return (
        <section id="projects" className='md:mt-28 mt-12 py-16'>
            {/* Title */}
            <div>
                <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                    Featured Projects
                </h2>
                <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-['455px'] mt-2 mx-auto">
                    Discover key projects that highlight my expertise in Computer Science & Design.
                </p>
            </div>

            {/* Projects */}
            <div className='flex items-center justify-center flex-wrap gap-x-24 md:gap-y-14 gap-y-24 py-4 md:mt-5 mt-10'>
                {projects.map(({id, title, des, img, iconLists, link, category}) => (
                    <div key={id} className='max-h-[32rem] sm:h-[41rem] lg:min-h[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                        <PinContainer title={category} href={link}>
                            {/* Background & Image */}
                            <div className='relative flex items-center justify-center w-[80vw] sm:w-[570px] sm:h-[40vh] h-[30vh] mb-12 overflow-hidden rounded-xl lg:rounded-3xl'>
                                <div className="relative h-full w-full overflow-hidden rounded-xl lg:rounded-3xl bg-[#13162d]">
                                    <img src='./bg.png' alt='Background' />
                                </div>
                                <img src={img} alt={title} className="absolute z-10 top-0 left-0 rounded-xl lg:rounded-3xl" />
                            </div>

                            {/* Title & Description */}
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-gray-600">{des}</p>

                            {/* Tech Stack & Link */}
                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className="flex items-center">
                                    {
                                        iconLists.map((icon, index) => (
                                            <div 
                                                key={index} 
                                                className="flex items-center justify-center border border-white/[0.2] rounded-full w-8 h-8 lg:w-10 lg:h-10 bg-gray-950"
                                                style={{transform: `translateX(-${5 * index}px)`}}
                                            >
                                                <img src={icon} alt={icon} className="p-2" />
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="flex justify-center items-center text-white/[0.2] border border-white/[0.2] rounded-lg p-[6px]">
                                    <p className="flex text-sm lg:text-xl md:text-xs">Check Github</p>
                                    <FaGithub className="ms-3 md:text-xl text-lg" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;