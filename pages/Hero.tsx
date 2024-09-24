import React from 'react';
import MagicButton from '@/components/ui/MagicButton';
import { Spotlight } from '@/components/ui/Spotlight';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import { PiLinkBreakBold } from "react-icons/pi";
import dynamic from "next/dynamic";
const FlipWords = dynamic(
  () => import("@/components/ui/flip-wrods").then((mod) => mod.FlipWords),
  { ssr: false }
);

const Hero = () => {
    
    const roles = ["an AI & Data Science Engineer", "an Industrial Engineer", "a Graphic Designer"];

    return (
        <div className='relative pb-20 pt-32 h-[100vh] mb-36'>
            {/* Spotlights */}
            <div>
                <Spotlight className='-top-80 left-full md:-left-32 md:-top-20 opacity-50' fill='white' />
                <Spotlight className='top-72 left-72' fill='purple' />
                <Spotlight className='top-56 right-64 opacity-35' fill='blue'  />
            </div>

            {/* Grid Background */}
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-small-white/[0.35] bg-grid-small-black/[0.35] absolute top-0 left-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            {/* Content */}
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-3xl lg:max-w-[70vw] flex flex-col justify-center items-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100'>Akhatar Mourad&apos;s Portfolio 2024</h2>

                    {/* Main Text */}
                    <TextGenerateEffect 
                        words="Showcasing Mourad's Journey in Code & Design"
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    />

                    {/* Self Intro */}
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Hi, I&apos;m MOURAD, <FlipWords words={roles} />
                    </p>

                    {/* GitHUB Button */}
                    <a href="https://linktr.ee/akhatarmourad" target="_blank">
                        <MagicButton title='Let&apos;s Connect Together' icon={<PiLinkBreakBold size={22} />} position='right'  />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;