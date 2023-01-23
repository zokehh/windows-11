import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
   const [isStartMenuShowed, setIsStartMenuShowed] = useState(false)
   const [isCalculatorShowed, setIsCalculatorShowed] = useState(false)
   const [isNotepadShowed, setIsNotepadShowed] = useState(false)

   const showCalculator = () => {
      setIsCalculatorShowed(true)
   }

   const hideCalculator = () => {
      setIsCalculatorShowed(false)
   }

   const showNotepad = () => {
      setIsNotepadShowed(true)
   }

   const hideNotepad = () => {
      setIsNotepadShowed(false)
   }

   return (
      <AuthContext.Provider value={{
         isStartMenuShowed,
         setIsStartMenuShowed,
         isCalculatorShowed,
         showCalculator,
         hideCalculator,
         isNotepadShowed,
         showNotepad,
         hideNotepad,
      }}>
         {props.children}
      </AuthContext.Provider>
   )
}

export default AuthContextProvider