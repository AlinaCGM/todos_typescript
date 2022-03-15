import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { MdDoneOutline, MdOutlineEdit, MdOutlineDelete, MdOutlineFilter } from "react-icons/md";
import { Text } from "../interfaces/interface";

const OneTodo: React.FC<{
  text: Text;
  texts: Text[];
  setTexts: React.Dispatch<React.SetStateAction<Text[]>>;
}> = ({ text, texts, setTexts }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(text.text);
  

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTexts(
      texts.map((text) => (text.id === id ? { ...text, text: editText } : text))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTexts(texts.filter((text) => text.id !== id));
  };

  const handleDone = (id: number) => {
    setTexts(
      texts.map((text) =>
        text.id === id ? { ...text, done: !text.done } : text
      )
    );
  };



  return (
    <form className="texts-s" onSubmit={(e) => handleEdit(e, text.id)}>
      {edit ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="texts-s-t"
          ref={inputRef}
        />
      ) : text.done ? (
        <s className="texts-s-t">{text.text}</s>
      ) : (
        <span className="texts-s-t">{text.text}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !text.done) {
              setEdit(!edit);
            }
          }}
        >
         
          <MdOutlineEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(text.id)}>
          <MdOutlineDelete />
        </span>
        <span className="icon" onClick={() => handleDone(text.id)}>
          <MdDoneOutline />
        </span>
        
      </div>
    </form>
  );
};

export default OneTodo;

