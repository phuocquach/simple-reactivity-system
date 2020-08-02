import  Reactivity  from "./reactivity.js";
const Calculator = () => {
    return {
        x : 0,
        y: 0,
        total : null,
        target : () => 
        {
            this.total = this.x + this.y;
        },
        ...Reactivity
    }
}
export default Calculator;