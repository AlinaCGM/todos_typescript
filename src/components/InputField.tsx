import React from "react";
import "./Style.css";

interface props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ text, setText, handleAdd }) => {


  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
      }}
    >
      <input
        type="text"
        placeholder="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        ADD
      </button>
      
    </form>
  );
};

export default InputField;
