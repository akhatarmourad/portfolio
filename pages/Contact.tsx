import { GlobeDemo } from "@/components/ui/GridGlobe";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandLinkedin,
  IconEmail,
  IconPhoneCall
} from "@tabler/icons-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";



const Contact = () => {
    
    // Contact Details 
    const links = [
        {
          title: "LinkedIn",
          icon: (
            <FaLinkedinIn className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.linkedin.com/in/akhatarmourad/",
        },
     
        {
          title: "+212 638-478601",
          icon: (
            <FaPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "tel:0638478601",
        },
        {
          title: "Email",
          icon: (
            <MdEmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "mailto:mourad.akhatar01@gmail.com",
        },
        {
          title: "Instagram",
          icon: (
            <RiInstagramFill className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.instagram.com/devdescom/",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://github.com/akhatarmourad",
        },
      ];

    return (
        <div className='md:mt-28 mt-12 py-6 mb-28' id="#contact">
            {/* <GlobeDemo /> */}

            {/* Title */}
            <div className='md:mb-10 mb-6'>
                <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                    Contact Details
                </h2>
                <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-['455px'] mt-2 mx-auto">
                    Check out the core skills that drive my professional expertise
                </p>
            </div>

            {/* Contact Infos */}
            <div className="flex items-center justify-center">
                <FloatingDock
                    mobileClassName="translate-y-20" // only for demo, remove for production
                    items={links}
                />
            </div>
        </div>
    );
}

export default Contact;