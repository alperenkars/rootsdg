export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface Photo {
  id: number;
  url: string;
  caption: string;
  rotation: string; // Tailwind rotation class for messy look
  position?: string; // Tailwind classes for absolute positioning (e.g., "top-10 left-10")
}
