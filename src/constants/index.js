import { bodypartImg, equipImg, gymImg, targetImg } from "../assets";

export const NavLinks = [
  {
    id: "home",
    title: "Home",
    to: "",
  },
  {
    id: "Exercise",
    title: "Exercises",
    to: "exercises",
  },
];

export const ExerciseCategory = [
  {
    id: "bodypart",
    icon: bodypartImg,
    title: "Body Part",
    to: "",
  },
  {
    id: "Equipment",
    icon: equipImg,
    title: "Equipment",
    to: "",
  },
  {
    id: "targetList",
    icon: targetImg,
    title: "Target List",
    to: "",
  },
];

export const exerciseBenfits = [
  {
    id: 1,
    name: "Improved Physical Health",
    description:
      "Regular exercise helps improve cardiovascular health, strengthen muscles and bones, and boost immune function.",
  },
  {
    id: 2,
    name: "Mental Well-being",
    description:
      "Exercise releases endorphins, which are chemicals in the brain that act as natural painkillers and mood elevators. It can reduce stress, anxiety, and symptoms of depression.",
  },
  {
    id: 3,
    name: "Weight Management",
    description:
      "Combining exercise with a balanced diet helps in weight management by burning calories and building lean muscle mass.",
  },
  {
    id: 4,
    name: "Disease Prevention",
    description:
      "Regular physical activity reduces the risk of chronic diseases such as heart disease, type 2 diabetes, and certain cancers.",
  },
  {
    id: 5,
    name: "Improved Sleep",
    description:
      "Regular exercise can help improve the quality of sleep by promoting relaxation and reducing insomnia.",
  },
  {
    id: 6,
    name: "Increased Energy Levels",
    description:
      "Exercise increases energy levels by improving blood circulation and oxygen flow to tissues, enhancing endurance and reducing fatigue.",
  },
];
