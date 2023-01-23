import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { AuthContext } from '../../../../store/taskbar-auth'
import classes from './Footer.module.css'

const Footer = () => {
   const currentDate = new Date()
   const year = currentDate.toLocaleDateString()
   const hours = currentDate.getHours()
   const [minutes, setMinutes] = useState()

   const ctx = useContext(AuthContext)

   let date;

   useEffect(() => {
      const getRealTimeData = () => {
         date = new Date()
         const localeMinutes = date.getMinutes()
         setMinutes((localeMinutes < 10 ? '0' : '') + localeMinutes)
      }
      setInterval(getRealTimeData, 1000)
   }, [minutes])

   const showStartMenu = () => {
      ctx.setIsStartMenuShowed(prevState => !prevState)
   }

   return (
      <footer className={classes.container}>
         <div className={classes.taskMenager}>
            <div onClick={showStartMenu}><img src="/images/windows11.webp" alt="" /></div>
            <div><img src="/images/fileExplorer.webp" alt="" /></div>
            <div><img src="/images/chrome.png" alt="" /></div>
            <div><img src="/images/discord.png" alt="" /></div>
            <div><img src="/images/vscode.png" alt="" /></div>
         </div>
         <div className={classes.rightTaskMenager}>
            <div className={classes.icons}><img src="/images/collapse-arrow.png" alt="" /></div>
            <div className={classes.icons}><img src="/images/available-updates.png" alt="" /></div>
            <div className={classes.icons}><img src="/images/wired-network-connection.png" alt="" /></div>
            <div className={classes.icons}><img src="/images/speaker.png" alt="" /></div>
            <div className={classes.date}>
               <p>{`${hours.toString()}:${minutes ? minutes : '00'}`}</p>
               <p>{year.toString()}</p>
            </div>
            <img src='/images/notification.png' alt='' />
         </div>
      </footer>
   )
}

export default Footer