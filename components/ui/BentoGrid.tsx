import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBG";
import { GlobeDemo } from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
    >
      {/* Background Image Div */}
      <div>
        <div className='absolute h-full w-full left-0 top-0 opacity-80'>
          {spareImg && (
            <img 
              src={spareImg}
              alt={spareImg}
              className='w-full h-full object-cover rounded-lg'
            />
          )}

          {/* Gradient BG Only for 6th Element */}
          {id === 6 && (
            <BackgroundGradientAnimation>
              <div className="absolute h-full w-full z-50 flex flex-col items-center justify-center">
                <h2 className="text-white font-bold">Volunteer</h2>
                <p className="text-violet-400">My commitment to social impact</p>
                <div className='flex justify-center items-center w-full'>
                  <a href="https://www.instagram.com/social.ensam/" target="_blank">
                    <img src='./social.svg' alt='ID Social' className="w-16" />
                  </a>
                  
                  <a href="https://www.instagram.com/caravane.alhayat/" target="_blank">
                    <img src='./caravane.svg' alt='ID Cravane' className="w-16" />
                  </a>
                </div>
              </div>
            </BackgroundGradientAnimation>
          )}
        </div>
      </div>

      {header}
      <div className=" z-10 group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
