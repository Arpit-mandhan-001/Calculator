import React from "react";

export const ButtonContainer = ({onButtonClick}) => {
  const button = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="button-container">
      {button.map((buttonName) => {
        return (
          <button className="button" onClick={() => onButtonClick(buttonName)}>
            {buttonName}
          </button>
        );
      })}
    </div>
  );
};
