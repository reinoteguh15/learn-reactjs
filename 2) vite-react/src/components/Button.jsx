/* eslint-disable react/prop-types */
export default function Button({text, onClick, counter}) {
    const buttonDisabled = (text !== 'Reset') ? ((counter > 9 || counter < 0) ? true : false) : ((counter > 9 || counter < 0) ? false : true);
    const buttonStyle = (text !== 'Reset') ? {} : {margin: '10px 20px', display: 'block'};

    return (
        <button onClick={onClick} style={buttonStyle} disabled={buttonDisabled}>
            {text}
        </button>
    );
}

