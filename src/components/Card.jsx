import React from "react";

const Card = ({ card, handleCardClick }) => {
  return (
    <div
      className={`drop-shadow-md flex items-center ${
        card.flipped ? "[transform: rotateY(10deg)]" : "bg-orange-500"
      } justify-center cursor-pointer h-16 w-16 hover:scale-110 rounded-xl transition-all duration-1000`}
      onClick={() => handleCardClick(card.id)}
    >
      <div>
        <img
          src={card.img}
          alt={card.alt}
          className={`h-16 scale-110 ${
            !card.flipped
              ? "[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-1000"
              : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Card;
