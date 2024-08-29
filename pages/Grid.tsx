import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";
import Skeleton from "@/components/ui/Skeleton";

const Grid = () => {
    return (
        <section id="about">
            <div className='md:mb-10 mb-6'>
                <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                    Professional Background
                </h2>
                <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-['455px'] mt-2 mx-auto">
                Explore & Discover Mourad&apos;s professional journey and expertise.
                </p>
            </div>
            <BentoGrid>
                {
                    gridItems.map((item, i) => (
                        <BentoGridItem 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            className={item.className}
                            spareImg={item.spareImg}
                            header={item.header ? <Skeleton url={item.url} /> : ""}
                        />
                    ))
                }
            </BentoGrid>
        </section>
    );
}

export default Grid;