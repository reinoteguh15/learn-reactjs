const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function Header({name}) {
    return (<h1>Let's Learn React with {name ? name : 'me'} 🚀</h1>);
}

function Button({text, onClick, counter}) {
    const buttonDisabled = (text !== 'Reset') ? ((counter > 9 || counter < 0) ? true : false) : ((counter > 9 || counter < 0) ? false : true);
    const buttonStyle = (text !== 'Reset') ? {} : {margin: '10px 20px', display: 'block'};

    return (
        <button onClick={onClick} style={buttonStyle} disabled={buttonDisabled}>
            {text}
        </button>
    );
}

function Counter({counter}) {
    if (counter > 9 || counter < 0) {
        counter = 'Done!';
    }
    return (
        <span style={{margin: 20}}>{counter}</span>
    )
}

function HomePage() {
    const students = ['Reinato', 'Teguh', 'Santoso'];
    const [counter, setCounter] = React.useState(0);

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
        <>
            <Header name="Rei"/>
            <ul>
                {
                students.map((student) => (
                    <li key={student}>{student}</li>
                ))
                }
            </ul>
            <Button text={'-'} onClick={decrement} counter={counter}/>
            <Counter counter={counter}/>
            <Button text={'+'} onClick={increment} counter={counter}/>
            <Button text={'Reset'} onClick={reset} counter={counter}/>
        </>
    );
}

root.render(<HomePage />);