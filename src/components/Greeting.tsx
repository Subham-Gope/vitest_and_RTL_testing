import React from "react";
type Props = {
  onGreet: (name: string) => void;
};

export const Greeting: React.FC<Props> = ({ onGreet }: Props) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-4">
      <div className="w-[320px] px-8 py-12 border-3 border-gray-600 rounded-lg bg-amber-50 flex flex-col items-center jusitfy-center gap-4">
        <h1 className="text-2xl text-gray-800 text-center">
          This is a test card
        </h1>
        <p className="text-lg text-center font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          beatae doloribus, neque obcaecati labore error.
        </p>
        <button
          className="bg-amber-500 text-white px-12 py-2 rounded-[24px]"
          onClick={() => onGreet("Alice")}
        >
          Greet
        </button>
      </div>
    </div>
  );
};

export default Greeting;
