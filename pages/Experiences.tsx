import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/moving-border";
import { workExperience } from "@/data";

const Experiences = () => {
    return (
        <section id="#experiences" className='md:mt-28 mt-12 py-16'>
            {/* Title */}
            <div>
                <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                    Professional Experiences
                </h2>
                <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-['455px'] mt-2 mx-auto">
                    Explore the diverse roles and responsibilities that have shaped my career.
                </p>
            </div>

            {/* Experiences */}
            <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
                {
                    workExperience.map((card) => (
                        <Button 
                            key={card.id}
                            borderRadius="1.75rem"
                            className="flex-1 border-slate-800 text-slate-200"
                            duration={card.duration}
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center px-3 py-6 md:p-5 lg:p-10 gap-2 z-50">
                                <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-24 w-20" />
                                <div className="lg:ms-5">
                                    <h2 className="text-start text-xl md:text-2xl">{card.title}</h2>
                                    <p className="text-start text-slate-500 text-font-light">{card.details}</p>
                                    <p className="text-start text-white-200 text-normal mt-4">{card.desc}</p>
                                    <hr className="my-5 border-t-2 border-slate-600" />
                                    <p className="text-start text-slate-500 text-normal">
                                        <span className="font-bold">Tech Stack: </span>
                                        {card.tools}
                                    </p>
                                </div>
                            </div>
                        </Button>
                    ))
                }
            </div>
        </section>
    );
}

export default Experiences;