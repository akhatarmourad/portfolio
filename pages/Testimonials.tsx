import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data";


const Testimonials = () => {
    return (
        <section id="#testimonials">
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
            <div className="flex flex-col items-center">
                <div className="h-[50vh] md:h-[30vh] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </section>
    );
}

export default Testimonials;