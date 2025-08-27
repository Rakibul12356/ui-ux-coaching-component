"use client"; // 🔹 important for stateful components in Next.js

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SingleQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="border bg-gradient-to-r from-[#0a0a0a] via-[#1a0f24] to-[#0a0a0a] rounded-lg opacity-90">
      <article className="flex items-center justify-between p-4 lg:p-6">
        <h2
          className="cursor-pointer text-white"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {question}
        </h2>
        <ul className="text-white">
          {!showAnswer ? (
            <li>
              <button onClick={() => setShowAnswer(true)}>
                <IoIosArrowDown className="text-white" />
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => setShowAnswer(false)}>
                <IoIosArrowUp className="text-white" />
              </button>
            </li>
          )}
        </ul>
      </article>

      {showAnswer && (
        <article className="p-4 text-[#ffffffb3]">
          <p>{answer}</p>
        </article>
      )}
    </div>
  );
};

export default SingleQuestion;
