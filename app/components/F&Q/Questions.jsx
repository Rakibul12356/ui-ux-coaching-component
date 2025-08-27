"use client"; // 🔹 client-side component for state

import { useState } from "react";
import { Data } from "./Data";
import SingleQuestion from "./SingleQuestion";

const Questions = () => {
  const [cards] = useState(Data);

  return (
    <section className="max-w-3xl mx-auto py-20 px-4 mt-20  rounded-lg text-white">
      <section className="grid grid-cols-1 gap-4">
        {cards.map((card, index) => (
          <SingleQuestion {...card} key={index} />
        ))}
      </section>
    </section>
  );
};

export default Questions;
