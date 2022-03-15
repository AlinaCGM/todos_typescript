import React from "react";
import { Text } from "../interfaces/interface";
import OneTodo from "./OneTodo";

interface props {
  texts: Text[];
  setTexts: React.Dispatch<React.SetStateAction<Text[]>>;
}

const TodoList: React.FC<props> = ({ texts, setTexts }) => {
  return (
    <div className="text">
      {texts?.map((text) => (
        <OneTodo
          texts={texts}
          text={text}
          key={text.id}
          setTexts={setTexts}
        />
      ))}
    </div>
  );
};

export default TodoList;
