import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../../store/taskbar-auth'
import classes from './Calculator.module.css'

const Calculator = () => {
   const [previousNumber, setPreviousNumber] = useState("")
   const [input, setInput] = useState("")
   const [operator, setOperator] = useState(null)

   const ctx = useContext(AuthContext)
   const isCalculatorShowed = ctx.isCalculatorShowed

   const setOperatorHandler = (event) => {
      setOperator(event.target.value)
      setPreviousNumber(input)
      setInput("")
   }

   const setInputHandler = (event) => {
      if (event.target.value === "." && input.includes(".")) {
         return;
      }

      if (event.target.value === "0" && input === "0") {
         return;
      }

      setInput(prevState => prevState + event.target.value)
   }

   const clearInputHandler = () => {
      setInput("")
      setPreviousNumber("")
   }

   const switchSignHandler = () => {
      setInput(prevState => {
         if(prevState > 0) {
            return input * -1
         } else if (prevState < 0) {
            return input * -1
         }
      })
   }

   const getResultHandler = () => {
      if (!previousNumber || !operator) {
         return;
      }

      let pNumb = parseFloat(previousNumber)
      let cNumb = parseFloat(input)

      switch(operator) {
         case "%":
            setInput(eval(pNumb % cNumb) / 100)
            break
         case "+":
            setInput(eval(pNumb + cNumb))
            break
         case "-":
            setInput(eval(pNumb - cNumb))
            break
         case "/":
            setInput(eval(pNumb / cNumb))
            break
         case "*":
            setInput(eval(pNumb * cNumb))
            break
      }
      console.log(input)
   }

   return (
      <div className={`${classes.container} ${isCalculatorShowed ? classes.active : ''}`}>
         <header className={classes.header}>
            <div onClick={ctx.hideCalculator} className={classes.red}></div>
            <div className={classes.yellow}></div>
            <div className={classes.green}></div>
         </header>
         <div className={classes.calculatorGrid}>
            <div className={classes.output}>
               <div className={classes.opperant}>{input}</div>
            </div>
            <button onClick={clearInputHandler} className={classes.topSide}>C</button>
            <button onClick={switchSignHandler} value="+/-" className={classes.topSide}>+/-</button>
            <button onClick={setOperatorHandler} value="%" className={classes.topSide}>%</button>
            <button onClick={setOperatorHandler} value="/" className={classes.rightSide}>÷</button>

            <button onClick={setInputHandler} value="7" className={classes.calculatorButton}>7</button>
            <button onClick={setInputHandler} value="8" className={classes.calculatorButton}>8</button>
            <button onClick={setInputHandler} value="9" className={classes.calculatorButton}>9</button>

            <button onClick={setOperatorHandler} value="*" className={classes.rightSide}>x</button>

            <button onClick={setInputHandler} value="4" className={classes.calculatorButton}>4</button>
            <button onClick={setInputHandler} value="5" className={classes.calculatorButton}>5</button>
            <button onClick={setInputHandler} value="6" className={classes.calculatorButton}>6</button>

            <button onClick={setOperatorHandler} value="-" className={classes.rightSide}>-</button>

            <button onClick={setInputHandler} value="1" className={classes.calculatorButton}>1</button>
            <button onClick={setInputHandler} value="2" className={classes.calculatorButton}>2</button>
            <button onClick={setInputHandler} value="3" className={classes.calculatorButton}>3</button>

            <button onClick={setOperatorHandler} value="+" className={classes.rightSide}>+</button>

            <button onClick={setInputHandler} value="0" className={classes.spanTwo}>0</button>

            <button onClick={setInputHandler} value="." className={classes.calculatorButton}>.</button>
            <button onClick={getResultHandler} className={classes.rightSide}>=</button>
         </div>
      </div>
   )
}

export default Calculator