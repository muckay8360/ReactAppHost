import React, { useState } from 'react';


const Button = () => { const [clicks, setClicks] = useState(0); 

const increment = () => setClicks(prevClicks => prevClicks + 1);
const decrement = () => setClicks(prevClicks => (prevClicks > 0 ? prevClicks - 1 : 0));

return ( <div> 
    <h1> Clicks Count: {clicks}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div> );


}; export default Button; 