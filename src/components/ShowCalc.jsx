import { multiply, divide } from "../utils/UsefulFunction";

function ShowCalc(){
    const a = 15;
    const b = 3;

    const resultMultiply = multiply(a,b);

    return <div>
        <p>{resultMultiply}</p>
        <p>{divide(a,b)}</p>
    </div>
}

export default ShowCalc;