import { useContext } from 'react'
import { AuthContext } from '../../../store/taskbar-auth'
import Calculator from '../Calculator/Calculator'
import StartMenu from '../Start/StartMenu'
import classes from './Desktop.module.css'

const Desktop = () => {
   const ctx = useContext(AuthContext)

   return (
      <div className={classes.container}>
         <div className={classes.desktopIcon}>
            <img src="/images/trash_empty.png" alt="" />
            <p>Bin</p>
         </div>
         <div onDoubleClick={ctx.showCalculator} className={classes.desktopIcon}>
            <img src="/images/calculator.png" alt="" />
            <p>Calculator</p>
         </div>
         <StartMenu />
         <Calculator />
      </div>
   )
}

export default Desktop