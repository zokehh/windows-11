import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
   const [isStartMenuShowed, setIsStartMenuShowed] = useState(false)
   const [isCalculatorShowed, setIsCalculatorShowed] = useState(false)

   const showCalculator = () => {
      setIsCalculatorShowed(true)
   }

   const hideCalculator = () => {
      setIsCalculatorShowed(false)
   }

   return (
      <AuthContext.Provider value={{
         isStartMenuShowed,
         setIsStartMenuShowed,
         isCalculatorShowed,
         showCalculator,
         hideCalculator
      }}>
         {props.children}
      </AuthContext.Provider>
   )
}

export default AuthContextProvider