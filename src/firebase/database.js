import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
export const createQuiz = (currentQuizId, title, description) => {
  setDoc(doc(db, "Quizzes", currentQuizId), {
    title,
    description,
  });
};

/* create new question for current quiz */
export const createQuestion = (currentQuizId, currentQuestionId, question) => {
  setDoc(
    doc(db, "Quizzes", currentQuizId),
    (doc(db, "QNA", currentQuestionId),
    {
      question,
    })
  );
};
