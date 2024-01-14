import { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import Header from './components/Header';

function App() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    function reset() {
        setCounter(0);
    }

    return (
        <div>
            <Header />
            <h2>Simple Counter</h2>
            <Button text={'-'} onClick={decrement} counter={counter}/>
            <Counter counter={counter}/>
            <Button text={'+'} onClick={increment} counter={counter}/>
            <Button text={'Reset'} onClick={reset} counter={counter}/>
        </div>
    )

}

export default App;
