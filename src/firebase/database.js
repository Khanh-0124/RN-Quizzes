import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
export const createQuiz = (currentQuizId, title, description) => {
  setDoc(doc(db, "Quizzes", currentQuizId), {
    title,
    description,
  });
};
