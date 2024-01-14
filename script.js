const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function Header({name}) {
    return (<h1>Let's Learn React with {name ? name : 'me'} 🚀</h1>);
}

function Button({text, onClick}) {
    const buttonStyle = (text !== 'Reset') ? {} : {margin: '10px 20px', display: 'block'};

    return (
        <button onClick={onClick} style={buttonStyle}>{text}</button>
    );
}

function Counter({counter}) {
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
            <Button text={'-'} onClick={decrement}/>
            <Counter counter={counter}/>
            <Button text={'+'} onClick={increment}/>
            <Button text={'Reset'} onClick={reset}/>
        </>
    );
}

root.render(<HomePage />);