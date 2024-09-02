"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-800 to-green-600 flex-shrink-0" />
        <div className="w-full bg-gray-100 rounded-full dark:bg-neutral-900 flex items-center justify-center text-gray-500">Microsoft Exel & Access</div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 rounded-full dark:bg-neutral-900 flex items-center justify-center text-gray-500">Microsoft Word</div>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-sky-900 to-sky-600 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-red-800 to-red-600 flex-shrink-0" />
        <div className="w-full bg-gray-100 rounded-full dark:bg-neutral-900 flex items-center justify-center text-gray-500">Microsoft PowerPoint</div>
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] flex-col space-y-2"
    >
        <div
          className="lg:text-4xl md:text-3xl text-xl font-bold"
        >
            <p className="bg-gradient-to-r from-sky-900 to-sky-500 bg-clip-text text-transparent">Photoshop</p>
            <p className="bg-gradient-to-r from-orange-900 to-orange-500 bg-clip-text text-transparent">Illustrator</p>
            <p className="bg-gradient-to-r from-rose-900 to-rose-500 bg-clip-text text-transparent">InDesign</p>
        </div>
      
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg flex items-center justify-center cursor-pointer">
        <a href="https://www.instagram.com/devdescom/" target="_blank" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Check Page
        </a>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="./python.svg"
          alt="avatar"
          height="100"
          width="100"
          className="h-12 w-12"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Programming Languages Concepts
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Programming
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="./sql.svg"
          alt="avatar"
          height="100"
          width="100"
          className="h-14 w-14"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Database Design & SQL Queries
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Databases
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="./graphs.svg"
          alt="avatar"
          height="100"
          width="100"
          className="h-12 w-12"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Descriptive & Inferential Statistics
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Statistics
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <img src='./volunteering.jpg' className="md:rounded-xl rounded-lg" />
    </motion.div>
  );
};
const items = [
  {
    title: "Office Suite Trainer",
    description: (
      <span className="text-sm">
        Teaching how to create reports, presentations, dashboards & databases.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1 border border-slate-900 bg-gradient-to-b from-black to-black-100",
  },
  {
    title: "Graphic Design Trainer",
    description: (
      <span className="text-sm">
        Teaching how to create social media & print design.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1 border border-slate-900 bg-gradient-to-b from-black to-black-100",
  },
  {
    title: "Community Management",
    description: (
      <span className="text-sm">
        Managing businesses&apos;s social media from content creation to advertising.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1 border border-slate-900 bg-gradient-to-b from-black to-black-100",
  },
  {
    title: "Computer Science Courses",
    description: (
      <span className="text-sm">
        Teaching computer science subjects from fundamentals to advanced concepts.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2 border border-slate-900 bg-gradient-to-b from-black to-black-100",
  },

  {
    title: "Volunteering",
    description: (
      <span className="text-sm">
        Engage within asscoiations to serve the community.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1 border border-slate-900 bg-gradient-to-b from-black to-black-100",
  },
];
