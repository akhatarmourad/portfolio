import { BentoGridThirdDemo } from "@/components/ui/ActivitiesGrid";

const Activities = () => {
    return (
        <section id="#activities" className='md:mt-20 mt-8 py-16'>
            {/* Title */}
            <div className="mb-12">
                <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                    Side Activities
                </h2>
                <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-['455px'] mt-2 mx-auto">
                    Have a look at a variety of activities that reveal another side of Mourad&apos;s expertise and passions.
                </p>
            </div>

            {/* Activities */}
            <BentoGridThirdDemo />
        </section>
    );
}

export default Activities;