import { CloseButton } from "../CloseButton";
import bugImgUrl from "../../assets/bug.svg";
import ideaImgUrl from "../../assets/idea.svg";
import thoughtImgUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedBackContentStep";

export const feedBackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImgUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaImgUrl,
      alt: "imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImgUrl,
      alt: "Imgaem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedBackTypes;

export function WidgetForm() {
  const [feedBackType, setFeedBackType] = useState<FeedbackType | null>(null);
  console.log("feedBackType", feedBackType);

  function handleRestartFeedback() {
    setFeedBackType(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg ">
      {!feedBackType ? (
        <FeedbackTypeStep onFeedBackTypeChanged={setFeedBackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedBackType}
          onFeedbackRestartRequest={handleRestartFeedback}
        />
      )}

      <footer>
        Feito com ♥ por{" "}
        <span className="underline underline-offset-2">Kened Felix</span>
      </footer>
    </div>
  );
}
