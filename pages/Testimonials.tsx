import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";


const Testimonials = () => {
    return (
        <section id="#testimonials" className="md:mt-28 mt-12">
            {/* Title */}
            <div>
                <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                    Testimonials
                </h2>
                <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-['455px'] mt-2 mx-auto">
                    Read insights from clients and colleagues about our collaboration and results
                </p>
            </div>

            {/* Clients */}
            <div className="flex flex-col items-center md:mt-10 mt-8">
                {/* Feedbacks */}
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />

                {/* Companies */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 md:mt-16 mt-12">
                    {
                        companies.map(({id, name, img, nameImg}) => (
                            <div key={id} className="flex gap-2 max-w-32 md:max-w-60">
                                <img src={img} alt={name} className="w-5 md:w-10" />
                                <img src={nameImg} alt={name} className="w-20 md:w-24" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Testimonials;