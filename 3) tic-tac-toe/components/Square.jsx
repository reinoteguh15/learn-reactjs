/* eslint-disable react/prop-types */

export default function Square({ value, onSquareClick }) {
    const style = {
        color: value === 'X' ? 'blue' : 'red'
    };
    return (
        <button className='square' onClick={onSquareClick} style={style}>{value}</button>
    );
}