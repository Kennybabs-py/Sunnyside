import { IReview } from "../utils/@types/review";
import emilypng from "assets/review/image-emily.jpg";
import thomaspng from "assets/review/image-thomas.jpg";
import jenniepng from "assets/review/image-jennie.jpg";

export const review: IReview[] = [
  {
    id: 0,
    name: "Emily R.",
    image: emilypng,
    text: "We put our trust in sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    job: "Marketing Director",
  },
  {
    id: 1,
    name: "Thomas S.",
    image: thomaspng,
    text: "Sunnyside enthusiasm coupled with their keeen interest in our brand success made it a satisfying and enjoybale experience.",
    job: "Chief Operating Officer",
  },
  {
    id: 2,
    name: "Jennie F.",
    image: jenniepng,
    text: "Incredible end result! Our sales increased by over 400% when we worked with sunnyside. Highly recommend!",
    job: "Business Owner",
  },
];
