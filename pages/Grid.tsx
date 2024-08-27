import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";
import Skeleton from "@/components/ui/Skeleton";

const Grid = () => {
    return (
        <section id="about">
            <h1 className="text-center text-4xl text-purple mb-10 font-semibold">Who is Mourad ?</h1>
            <BentoGrid>
                {
                    gridItems.map((item, i) => (
                        <BentoGridItem 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            className={item.className}
                            header={item.header ? <Skeleton url={item.url} /> : ""}
                        />
                    ))
                }
            </BentoGrid>
        </section>
    );
}

export default Grid;