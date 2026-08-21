import { createContext, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './Nav';
import ProdDet from './components/ProdDet';
import ListRendering from './components/ListRendering';
import CheckContext from './components/CheckContext';
import UseReducerE from './components/UseReducerE';

export const userContext = createContext();

const user = {
    name: "Piyush",
    age: 22
};

const products = [
    { id: 1, name: "Piyush" },
    { id: 2, name: "Raj" },
    { id: 3, name: "Mayank" },
    { id: 4, name: "Karn" }
];

function App() {
  const inputRef = useRef(2);
  const counting = useRef(9);
   function focusInput() {
    inputRef.current.focus();
    
    // directly calls the DOM's native .focus() method
  }
  const countRef = useRef(0);

  function increment() {
     console.log(countRef.current); 
    countRef.current = countRef.current + 1;
    console.log("comes after :---- "+countRef.current);  // updates immediately, but UI does NOT re-render
  }
  let msg = "";
  function handleChange(e){
    msg = e.target.value; 
    console.log(msg);
    
  }
  return (
    <>
      <Nav />
       <input ref={inputRef} onChange={handleChange} />
      <button onClick={focusInput}>Focus</button>
      <br></br>
       <h1>{msg}</h1>
        <button onClick={increment}>Increment (check console)</button>
      {/* Pass the user and the whole products array into Context */}
      <userContext.Provider value={{ user, products }}>
        <Routes>
          <Route path='/products/:id' element={<ProdDet />} />
          <Route path='/' element={<Home />} />
          <Route path='/reducer' element={<UseReducerE/>} />
          <Route path='/list' element={<ListRendering />} />
          <Route path='/check' element={<CheckContext />} />
        </Routes>
      </userContext.Provider>

    </>
  );
}

export default App;