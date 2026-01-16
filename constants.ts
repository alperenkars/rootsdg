import { Question, Photo } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Bedenimizin fiziksel sınırlarını test etmek için gideceğimiz ülke?",
    options: ["Brezilya", "Rusya", "Norveç", "Japonya"],
    correctAnswer: "Rusya"
  },
  {
    id: 2,
    text: "13 sayısının Aslıhancadaki karşılığı?",
    options: ["13", "31", "4", "1"],
    correctAnswer: "4"
  },
  {
    id: 3,
    text: "İnsanların 20'lerinde farklı, 30'larında farklı amaçlarla yaptıkları şey?",
    options: ["Uyku", "Yemek", "Spor", "Seks"],
    correctAnswer: "Seks"
  }
];

export const ASLIHAN_PHOTOS: Photo[] = [
  {
    id: 1,
    url: "https://picsum.photos/seed/aslihan1/300/400",
    caption: "Aslıhan Thinking About Monkeys",
    rotation: "-rotate-2"
  },
  {
    id: 2,
    url: "https://picsum.photos/seed/aslihan2/300/300",
    caption: "Party Time!",
    rotation: "rotate-3"
  },
  {
    id: 3,
    url: "https://picsum.photos/seed/aslihan3/300/400",
    caption: "Queen of the Jungle",
    rotation: "-rotate-1"
  }
];

export const QUIZ_PHOTOS: Photo[] = [
  {
    id: 1,
    url: "https://picsum.photos/seed/chimphug/300/400", // Replace with: Aslıhan hugging chimp
    caption: "sen",
    rotation: "-rotate-6",
    position: "top-4 left-4 md:top-10 md:left-10"
  },
  {
    id: 2,
    url: "https://picsum.photos/seed/binoculars/300/400", // Replace with: Aslıhan with binoculars
    caption: "sen",
    rotation: "rotate-6",
    position: "top-4 right-4 md:top-10 md:right-10"
  },
  {
    id: 3,
    url: "https://picsum.photos/seed/scarf/300/400", // Replace with: Aslıhan with scarf
    caption: "sen",
    rotation: "-rotate-3",
    position: "bottom-4 left-4 md:bottom-10 md:left-10"
  },
  {
    id: 4,
    url: "https://rootsandshootsturkey.org/wp-content/uploads/2020/12/rs_aslihan_niksarli_profil2.png$0", // Replace with: Aslıhan in stripes
    caption: "ve sen",
    rotation: "rotate-12",
    position: "bottom-4 right-4 md:bottom-10 md:right-10"
  }
];

export const MONKEY_STICKERS = [
  "https://cdn-icons-png.flaticon.com/512/3069/3069172.png", // Simple monkey face
  "https://cdn-icons-png.flaticon.com/512/3069/3069186.png", // Hanging monkey
];
