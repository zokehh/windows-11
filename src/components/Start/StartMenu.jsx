import { useContext } from 'react'
import { AuthContext } from '../../../store/taskbar-auth'
import PinnedItem from './PinnedItem'
import classes from './StartMenu.module.css'

const StartMenu = () => {
   const ctx = useContext(AuthContext)

   return (
      <div className={`${classes.container} ${ctx.isStartMenuShowed ? classes.active : ''}`}>
         <div className={classes.pinned}>
            <div className={classes.pinnedHeader}>
               <h4>Pinned</h4>
               <button>All applications {`>`}</button>
            </div>
            <div className={classes.pinnedItems}>
               <PinnedItem image={'/images/chrome.png'} name={'Chrome'} />
               <PinnedItem image={'/images/vscode.png'} name={'VS Code'} />
               <div onClick={ctx.showCalculator}><PinnedItem  image={'/images/calculator.png'} name={'Calculator'} /></div>
               <PinnedItem image={'/images/discord.png'} name={'Discord'} />
               <PinnedItem image={'/images/settings.png'} name={'Settings'} />

               <PinnedItem image={'/images/spotify.png'} name={'Spotify'} />
               <PinnedItem image={'/images/mail.png'} name={'Mail'} />
               <PinnedItem image={'/images/clock.png'} name={'Clock'} />
               <PinnedItem image={'/images/calendar.png'} name={'Calendar'} />
               <PinnedItem image={'/images/microsoft-store.png'} name={'Microsoft Store'} />

               <PinnedItem image={'/images/file-explorer.png'} name={'File Explorer'} />
               <PinnedItem image={'/images/messenger.png'} name={'Messenger'} />
               <PinnedItem image={'/images/disney.png'} name={'Disney+'} />
               <PinnedItem image={'/images/xbox.png'} name={'Xbox'} />
               <PinnedItem image={'/images/images.webp'} name={'Images'} />
            </div>
         </div>
      </div>
   )
}

export default StartMenu