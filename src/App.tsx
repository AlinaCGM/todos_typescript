import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Text } from "./interfaces/interface";



const App: React.FC = () => {

  const [text, setText] = useState<string>("");
  const [textSearch, setTextSearch] = useState<any>('');
 const [searchResults, setSearchResults] = useState<any>([]);
 
  const [texts, setTexts] = useState<Text[]>([{
    id: 1,
    text: 'Buy flour',
    done: false,
  },

  {
    id: 2,
    text: 'Make bread',
    done: false,
  },]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (text) {
      setTexts([...texts, { id:Date.now() , text, done: false }]);
      setText("");
      
    }
  };

 const filter = (e:React.ChangeEvent<HTMLInputElement> ) => {
     const keyword = e.target.value;
     if (keyword !== '') {
         const results = texts.filter((todo) => {
           return todo.text.toLowerCase().match(keyword.toLowerCase());
         });
         setSearchResults(results)
     } else {
       
      setSearchResults("")
       }
       setTextSearch(keyword)
       
     };


    

  return (
    <div className="App">
      <span className="heading">ToDo App</span>
      
      <input value={textSearch} type="search" onChange={filter} className='search' placeholder='Search Todos'/> 
    <div >
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((todos:any) => (
            <li key={todos.id}>
              <span >{todos.text}</span>              
            </li>
          ))
        ) : (
          <h3 className='search-result'>No results found
          </h3>
        )}
      </div>
      <div>
      </div>
      <InputField text={text} setText={setText} handleAdd={handleAdd} />
      <TodoList texts={texts} setTexts={setTexts} />
    </div>
  );
};

export default App