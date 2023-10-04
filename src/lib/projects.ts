// import { z } from "zod";
import guruImage from "../public/guru.png?url";
import ChatAppImage from "../public/angularTodos.png?url";
import { ProjectStatusesSchema } from "../pages/components/Projects";

export const projects = [
  {
    id: 1,
    title: "guru - Grocery shop",
    description: "some description",
    tags: ["React", "ChakraUI", "Frontend"],
    url: "http://www.google.com",
    image: guruImage,
    status: "Completed",
  },
  {
    id: 2,

    title: "do! - Todo's App",
    description: "To-do app.",
    tags: ["AngularJS", "TailwindCSS", "Frontend"],
    url: "http://www.google.com",
    image: ChatAppImage,
    status: "Completed",
  },
  {
    id: 3,
    title: "Pet Project",
    description: "Pet Adoption.",
    tags: ["React", "Frontend", "Backend", "ChakraUI", "MongoDB", "Express"],
    url: "http://www.google.com",
    image: guruImage,
    status: "In Progress",
  },
  {
    id: 4,
    title: "ChatApp",
    description: "some description",
    url: "http://www.google.com",
    image: guruImage,
  },
];

export type project = (typeof projects)[0];
