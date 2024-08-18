import React, { useState}  from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Button from './Button';
import TextField from './TextField';


function App() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

 return (
 <div className="App">
 <header className="App-header">
 <Button />
 <h1></h1>
 <TextField value={inputValue} onChange={handleChange} />
 <h1>Entered Text: {inputValue}</h1>
<p>Todo list </p>
 <TodoList />
 </header>
 </div>
 );
}
export default App;