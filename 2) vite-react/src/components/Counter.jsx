/* eslint-disable react/prop-types */
export default function Counter({counter}) {
    if (counter > 9 || counter < 0) {
        counter = 'Done!';
    }
    return (
        <span style={{margin: 20}}>{counter}</span>
    )
}