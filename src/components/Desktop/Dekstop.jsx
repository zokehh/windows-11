import { useContext } from 'react'
import { AuthContext } from '../../../store/taskbar-auth'
import Calculator from '../Calculator/Calculator'
import Notepad from '../Notepad/Notepad'
import StartMenu from '../Start/StartMenu'
import classes from './Desktop.module.css'

const Desktop = () => {
   const ctx = useContext(AuthContext)

   const hideStartMenuHandler = () => {
      ctx.setIsStartMenuShowed(false)
   }

   return (
      <div className={classes.container} onClick={hideStartMenuHandler}>
         <div className={classes.desktopIcon}>
            <img src="/images/trash_empty.png" alt="" />
            <p>Bin</p>
         </div>
         <div onDoubleClick={ctx.showCalculator} className={classes.desktopIcon}>
            <img src="/images/calculator.png" alt="" />
            <p>Calculator</p>
         </div>
         <div onDoubleClick={ctx.showNotepad} className={classes.desktopIcon}>
            <img src="/images/notepad.webp" alt="" />
            <p>Notepad</p>
         </div>
         <StartMenu />
         <Calculator />
         <Notepad />
      </div>
   )
}

export default Desktop