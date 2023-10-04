import { useState } from "react";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { motion, type Variants } from "framer-motion";

const navbarItems = [
  {
    id: 1,
    title: "home",
    path: "/",
  },
  {
    id: 2,
    title: "about me",
    path: "/aboutme",
  },
  {
    id: 3,
    title: "Resume",
    path: "/resume",
  },
  {
    id: 4,
    title: "work",
    path: "/work",
  },
];

const navMotion: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion: Variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: -100,
  },
};

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width : 800px)");
  return (
    <nav className="bg-stone-700">
      {matches ? (
        <ul className="flex space-x-4  p-4 w-[100vw]">
          {navbarItems.map((item) => (
            <li key={item.id} className="text-stone-200 hover:text-stone-500">
              <a href={item.path} className="capitalize">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col">
          <div
            onClick={() => {
              setToggled((prevState) => !prevState);
            }}
            className="p-4 space-y-1.5 flex flex-col self-end z-50"
          >
            <motion.span
              animate={{
                rotate: toggled ? 45 : 0,
                y: toggled ? 8 : 0,
                width: toggled ? 32 : 24,
              }}
              initial
              className="block h-0.5 w-6 bg-stone-800"
            ></motion.span>
            <motion.span
              animate={{ width: toggled ? 0 : 24 }}
              className="block h-0.5 w-6 bg-stone-800"
            ></motion.span>
            <motion.span
              animate={{
                rotate: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: toggled ? 32 : 24,
              }}
              className="block h-0.5 w-6 bg-stone-800"
            ></motion.span>
          </div>
          {toggled && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              className="fixed"
            >
              <motion.ul
                variants={navMotion}
                animate="visible"
                initial="hidden"
                className="flex fixed h-screen w-screen bg-stone-700 flex-col space-y-10 p-8 items-center justify-center"
              >
                {navbarItems.map((item) => (
                  <li key={item.id}>
                    <motion.a
                      variants={itemMotion}
                      href={item.path}
                      className="text-stone-400 hover:text-stone-500  text-lg capitalize transition-all"
                    >
                      {item.title}
                    </motion.a>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </div>
      )}

      {/* {!matches && } */}
    </nav>
  );
}
